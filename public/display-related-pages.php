<?php
/**
 * Rendu côté serveur pour le bloc "effi Related Pages".
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

global $post;
if ( ! isset( $post->ID ) ) {
    return;
}

$global_settings = get_option( 'effi_related_pages_settings', [] );
$breakpoint = $global_settings['breakpoint'] ?? 768;

$attrs = wp_parse_args( $attributes, [
    'relationType'         => 'children',
    'postsToShow'          => $global_settings['posts_per_page'] ?? 6,
    'displayFeaturedImage' => true,
    'imageSize'            => $global_settings['image_size'] ?? 'medium',
    'imageRatio'           => $global_settings['image_ratio'] ?? '16:9',
    'imageCrop'            => true,
    'imagePosition'        => 'top',
    'titleTag'             => $global_settings['title_tag'] ?? 'h3',
    'displayExcerpt'       => true,
    'excerptLength'        => 25,
    'displayLayout'        => 'grid',
    'columns'              => $global_settings['grid_columns'] ?? 3,
    'orderBy'              => $global_settings['orderBy'] ?? 'title', // Nouveau
    'order'                => $global_settings['order'] ?? 'ASC',   // Nouveau
]);

$transient_key = 'effi_related_' . $post->ID . '_' . substr( md5( serialize( $attrs ) ), 0, 12 );
$cached_post_ids = get_transient( $transient_key );

$query_args = [
    'post_type'      => get_post_type($post->ID),
    'posts_per_page' => -1,
    'post__not_in'   => [ $post->ID ],
    'post_parent'    => ($attrs['relationType'] === 'children') ? $post->ID : $post->post_parent,
    'order'          => $attrs['order'],   // Modifié
    'orderby'        => $attrs['orderBy'], // Modifié
    'fields'         => 'ids',
];

if ( false === $cached_post_ids ) {
    $related_pages_query_ids = get_posts( $query_args );
    set_transient( $transient_key, $related_pages_query_ids, HOUR_IN_SECONDS );
    $post_ids_to_display = $related_pages_query_ids;
} else {
    $post_ids_to_display = $cached_post_ids;
}

if ( $attrs['postsToShow'] > 0 ) {
    $post_ids_to_display = array_slice( $post_ids_to_display, 0, intval( $attrs['postsToShow'] ) );
}

if ( empty( $post_ids_to_display ) ) {
    return;
}

$final_query_args = [
    'post_type' => get_post_type($post->ID),
    'post__in' => $post_ids_to_display,
    'orderby' => 'post__in',
    'posts_per_page' => count($post_ids_to_display)
];
$related_pages_query = new WP_Query($final_query_args);

$unique_id = 'effi-related-' . wp_unique_id();
$wrapper_attributes = get_block_wrapper_attributes( [ 'id' => $unique_id ] );
$layout_class = 'is-' . esc_attr( $attrs['displayLayout'] );

$styles = '';
if ( $attrs['displayLayout'] === 'grid' ) {
    $columns = absint( $attrs['columns'] );
    $styles .= "@media (min-width: " . ($breakpoint + 1) . "px) { #$unique_id .effi-related-pages-wrapper.is-grid { display: grid; grid-template-columns: repeat({$columns}, 1fr); gap: 20px; } }";
}
if ( $attrs['displayFeaturedImage'] ) {
    $ratio = str_replace( ':', '/', $attrs['imageRatio'] );
    $styles .= "#$unique_id .effi-page-item__image-container { aspect-ratio: {$ratio}; }";
    if ( $attrs['imageCrop'] ) {
        $styles .= "#$unique_id .effi-page-item__image-container img { width: 100%; height: 100%; object-fit: cover; }";
    }
}
$styles .= "@media (max-width: {$breakpoint}px) { #$unique_id .effi-page-item:not(:last-child) { margin-bottom: 25px; } }";

?>
<div <?php echo $wrapper_attributes; ?>>
    <?php if ( ! empty( $styles ) ) : ?> <style><?php echo $styles; ?></style> <?php endif; ?>
    <div class="effi-related-pages-wrapper <?php echo esc_attr( $layout_class ); ?>">
        <?php while ( $related_pages_query->have_posts() ) : $related_pages_query->the_post();
            $permalink = esc_url( get_permalink() );
            $title = get_the_title();
            $title_tag = tag_escape( $attrs['titleTag'] );
            $item_classes = ['effi-page-item'];
            if ( $attrs['displayFeaturedImage'] ) { $item_classes[] = 'image-pos-' . esc_attr( $attrs['imagePosition'] ); }
        ?>
            <div class="<?php echo esc_attr( implode(' ', $item_classes) ); ?>">
                <?php if ( $attrs['displayFeaturedImage'] && has_post_thumbnail() ) : ?>
                    <div class="effi-page-item__image-container">
                        <a href="<?php echo $permalink; ?>" tabindex="-1"><?php the_post_thumbnail( $attrs['imageSize'] ); ?></a>
                    </div>
                <?php endif; ?>
                <div class="effi-page-item__content">
                    <<?php echo $title_tag; ?> class="effi-page-item__title">
                        <a href="<?php echo $permalink; ?>"><?php echo esc_html( $title ); ?></a>
                    </<?php echo $title_tag; ?>>
                    <?php if ( $attrs['displayExcerpt'] ) : ?>
                        <div class="effi-page-item__excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt(), $attrs['excerptLength'] ) ); ?></div>
                    <?php endif; ?>
                </div>
            </div>
        <?php endwhile; wp_reset_postdata(); ?>
    </div>
</div>
<?php