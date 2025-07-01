<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Fonction de rendu du bloc côté serveur.
 * * @param array    $attributes Les attributs du bloc.
 * @param string   $content    Le contenu interne du bloc.
 * @param WP_Block $block      L'instance du bloc.
 */
function effi_related_pages_render_block( $attributes, $content, $block ) {
    // **CORRECTION :** Obtenir l'ID du post depuis le contexte du bloc, c'est plus fiable.
    $post_id = $block->context['postId'] ?? null;

    if ( ! $post_id ) {
        return '<p class="effi-notice">' . __( 'Veuillez enregistrer la page pour voir l\'aperçu.', 'effi-related-pages' ) . '</p>';
    }

    $options = get_option('effi_related_pages_options', []);

    $attr = wp_parse_args( $attributes, [
        'relationType'  => 'children',
        'postCount'     => $options['post_count'] ?? 6,
        'showImage'     => true,
        'imageSize'     => $options['image_size'] ?? 'medium',
        'imageRatio'    => $options['image_ratio'] ?? '16:9',
        'imageCrop'     => true,
        'titleTag'      => $options['title_tag'] ?? 'h3',
        'showExcerpt'   => true,
        'excerptLength' => 20,
        'displayAs'     => 'grid',
        'gridColumns'   => $options['grid_columns'] ?? 3,
    ]);

    $args = [
        'post_type'      => 'page',
        'posts_per_page' => (int) $attr['postCount'] === 0 ? -1 : (int) $attr['postCount'],
        'post_status'    => 'publish',
        'orderby'        => 'menu_order title',
        'order'          => 'ASC',
        'post__not_in'   => [$post_id],
    ];

    if ( $attr['relationType'] === 'children' ) {
        $args['post_parent'] = $post_id;
    } else { // 'sisters'
        // **CORRECTION :** S'assurer que $current_post est un objet avant d'accéder à ses propriétés.
        $current_post = get_post( $post_id );
        if ( is_a($current_post, 'WP_Post') && $current_post->post_parent ) {
            $args['post_parent'] = $current_post->post_parent;
        } else {
            // Pas de parent, donc pas de pages sœurs à afficher.
             return '<p class="effi-notice">' . __( 'Cette page n\'a pas de page parente, donc aucune page sœur ne peut être affichée.', 'effi-related-pages' ) . '</p>';
        }
    }

    $query = new WP_Query( $args );

    if ( ! $query->have_posts() ) {
        return '<p class="effi-notice">' . __( 'Aucune page associée trouvée.', 'effi-related-pages' ) . '</p>';
    }
    
    $allowed_title_tags = ['span', 'h2', 'h3', 'h4', 'h5', 'h6'];
    $title_tag = in_array($attr['titleTag'], $allowed_title_tags) ? $attr['titleTag'] : 'h3';

    $wrapper_classes = [
        'effi-related-pages-wrapper',
        'display-' . esc_attr( $attr['displayAs'] ),
    ];
    if ($attr['displayAs'] === 'grid') {
       $wrapper_classes[] = 'columns-' . esc_attr( $attr['gridColumns'] );
    }

    $breakpoint = $options['breakpoint'] ?? 768;
    $inline_styles = "--effi-breakpoint: {$breakpoint}px; --grid-columns: " . esc_attr($attr['gridColumns']) . ";";

    ob_start();
    ?>
    <div class="<?php echo implode( ' ', $wrapper_classes ); ?>" style="<?php echo esc_attr($inline_styles); ?>">
        <?php while ( $query->have_posts() ) : $query->the_post(); ?>
            <div class="related-page-item">
                <?php if ( $attr['showImage'] && has_post_thumbnail() ) : ?>
                    <div class="related-page-image-container image-ratio-<?php echo esc_attr(str_replace(':', '-', $attr['imageRatio'])); ?> <?php echo $attr['imageCrop'] ? 'image-crop' : ''; ?>">
                        <a href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true">
                            <?php the_post_thumbnail( $attr['imageSize'] ); ?>
                        </a>
                    </div>
                <?php endif; ?>
                <div class="related-page-content">
                    <<?php echo $title_tag; ?> class="related-page-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </<?php echo $title_tag; ?>>
                    <?php if ( $attr['showExcerpt'] ) : ?>
                        <div class="related-page-excerpt">
                            <?php echo wp_kses_post( wp_trim_words( get_the_excerpt(), (int)$attr['excerptLength'] ) ); ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        <?php endwhile; ?>
    </div>
    <?php
    wp_reset_postdata();
    return ob_get_clean();
}