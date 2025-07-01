<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Ajout du menu d'administration.
 */
function effi_related_pages_add_admin_menu() {
    add_menu_page(
        __( 'effi Related Pages', 'effi-related-pages' ),
        __( 'effi Related Pages', 'effi-related-pages' ),
        'manage_options',
        'effi-related-pages',
        'effi_related_pages_settings_page_html',
        'dashicons-admin-links',
        25
    );
}
add_action( 'admin_menu', 'effi_related_pages_add_admin_menu' );

/**
 * Initialisation des paramètres.
 */
function effi_related_pages_settings_init() {
    register_setting( 'effi_related_pages_group', 'effi_related_pages_options' );

    add_settings_section(
        'effi_related_pages_section_defaults',
        __( 'Paramètres par défaut des blocs', 'effi-related-pages' ),
        null,
        'effi-related-pages'
    );

    add_settings_field( 'post_count', __( 'Nombre d’éléments', 'effi-related-pages' ), 'effi_field_render', 'effi-related-pages', 'effi_related_pages_section_defaults', [ 'type' => 'number', 'id' => 'post_count', 'default' => 6 ] );
    add_settings_field( 'image_size', __( 'Format d’image', 'effi-related-pages' ), 'effi_field_render', 'effi-related-pages', 'effi_related_pages_section_defaults', [ 'type' => 'select', 'id' => 'image_size', 'options' => [ 'thumbnail' => 'Thumbnail', 'medium' => 'Medium', 'large' => 'Large', 'full' => 'Full' ] ] );
    add_settings_field( 'image_ratio', __( 'Ratio d’image', 'effi-related-pages' ), 'effi_field_render', 'effi-related-pages', 'effi_related_pages_section_defaults', [ 'type' => 'select', 'id' => 'image_ratio', 'options' => [ '1:1' => '1:1', '16:9' => '16:9', '4:3' => '4:3' ] ] );
    add_settings_field( 'title_tag', __( 'Balise HTML du titre', 'effi-related-pages' ), 'effi_field_render', 'effi-related-pages', 'effi_related_pages_section_defaults', [ 'type' => 'select', 'id' => 'title_tag', 'options' => [ 'span' => 'span', 'h2' => 'H2', 'h3' => 'H3', 'h4' => 'H4', 'h5' => 'H5', 'h6' => 'H6' ] ] );
    add_settings_field( 'grid_columns', __( 'Nombre de colonnes (grille)', 'effi-related-pages' ), 'effi_field_render', 'effi-related-pages', 'effi_related_pages_section_defaults', [ 'type' => 'number', 'id' => 'grid_columns', 'default' => 3, 'min' => 1, 'max' => 4 ] );
    add_settings_field( 'breakpoint', __( 'Point de bascule responsive (px)', 'effi-related-pages' ), 'effi_field_render', 'effi-related-pages', 'effi_related_pages_section_defaults', [ 'type' => 'number', 'id' => 'breakpoint', 'default' => 768 ] );
}
add_action( 'admin_init', 'effi_related_pages_settings_init' );


function effi_field_render( $args ) {
    // **CORRECTION :** Assurer que $options est toujours un tableau en fournissant une valeur par défaut.
    $options = get_option( 'effi_related_pages_options', [] );
    $value = isset( $options[ $args['id'] ] ) ? $options[ $args['id'] ] : ( $args['default'] ?? '' );

    switch ( $args['type'] ) {
        case 'number':
            printf( '<input type="number" name="effi_related_pages_options[%1$s]" value="%2$s" min="%3$s" max="%4$s" class="small-text" />',
                esc_attr( $args['id'] ),
                esc_attr( $value ),
                isset($args['min']) ? esc_attr($args['min']) : '0',
                isset($args['max']) ? esc_attr($args['max']) : ''
            );
            break;
        case 'select':
            echo '<select name="effi_related_pages_options[' . esc_attr( $args['id'] ) . ']">';
            foreach ( $args['options'] as $val => $label ) {
                printf( '<option value="%s"%s>%s</option>',
                    esc_attr( $val ),
                    selected( $value, $val, false ),
                    esc_html( $label )
                );
            }
            echo '</select>';
            break;
    }
}


function effi_related_pages_settings_page_html() {
    if ( ! current_user_can( 'manage_options' ) ) {
        return;
    }
    ?>
    <div class="wrap">
        <h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
        <form action="options.php" method="post">
            <?php
            settings_fields( 'effi_related_pages_group' );
            do_settings_sections( 'effi-related-pages' );
            submit_button( __( 'Enregistrer les modifications', 'effi-related-pages' ) );
            ?>
        </form>
    </div>
    <?php
}