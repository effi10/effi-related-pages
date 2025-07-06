<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function effi_related_pages_add_settings_page() {
    add_options_page( __( 'effi Related Pages Settings', 'effi-related-pages' ), __( 'effi Related Pages', 'effi-related-pages' ), 'manage_options', 'effi-related-pages-settings', 'effi_related_pages_render_settings_page');
}
add_action( 'admin_menu', 'effi_related_pages_add_settings_page' );

function effi_related_pages_render_settings_page() {
    ?>
    <div class="wrap">
        <h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
        <p><?php esc_html_e( 'These settings define the default values for new "effi Related Pages" blocks.', 'effi-related-pages' ); ?></p>
        <form action="options.php" method="post">
            <?php
            settings_fields( 'effi_related_pages_settings_group' );
            do_settings_sections( 'effi-related-pages-settings' );
            submit_button( __( 'Save Settings', 'effi-related-pages' ) );
            ?>
        </form>
    </div>
    <?php
}

function effi_related_pages_register_settings() {
    register_setting( 'effi_related_pages_settings_group', 'effi_related_pages_settings', 'effi_related_pages_sanitize_settings' );

    add_settings_section( 'effi_related_pages_defaults_section', __( 'Default Block Settings', 'effi-related-pages' ), null, 'effi-related-pages-settings' );
    add_settings_field( 'posts_per_page', __( 'Items to show by default', 'effi-related-pages' ), 'effi_related_pages_posts_per_page_cb', 'effi-related-pages-settings', 'effi_related_pages_defaults_section' );
    add_settings_field( 'order_by', __( 'Default order by', 'effi-related-pages' ), 'effi_related_pages_order_by_cb', 'effi-related-pages-settings', 'effi_related_pages_defaults_section' );
    add_settings_field( 'order', __( 'Default order direction', 'effi-related-pages' ), 'effi_related_pages_order_cb', 'effi-related-pages-settings', 'effi_related_pages_defaults_section' );
    add_settings_field( 'image_size', __( 'Default image size', 'effi-related-pages' ), 'effi_related_pages_image_size_cb', 'effi-related-pages-settings', 'effi_related_pages_defaults_section' );
    add_settings_field( 'image_ratio', __( 'Default image ratio', 'effi-related-pages' ), 'effi_related_pages_image_ratio_cb', 'effi-related-pages-settings', 'effi_related_pages_defaults_section' );
    add_settings_field( 'title_tag', __( 'Default title HTML tag', 'effi-related-pages' ), 'effi_related_pages_title_tag_cb', 'effi-related-pages-settings', 'effi_related_pages_defaults_section' );
    add_settings_field( 'grid_columns', __( 'Default grid columns', 'effi-related-pages' ), 'effi_related_pages_grid_columns_cb', 'effi-related-pages-settings', 'effi_related_pages_defaults_section' );
    
    add_settings_section( 'effi_related_pages_responsive_section', __( 'Responsive Settings', 'effi-related-pages' ), null, 'effi-related-pages-settings' );
    add_settings_field( 'breakpoint', __( 'Mobile Breakpoint (px)', 'effi-related-pages' ), 'effi_related_pages_breakpoint_cb', 'effi-related-pages-settings', 'effi_related_pages_responsive_section' );
}

function effi_related_pages_get_setting( $field_name, $default = '' ) {
    $options = get_option( 'effi_related_pages_settings' );
    return isset( $options[$field_name] ) ? $options[$field_name] : $default;
}

function effi_related_pages_posts_per_page_cb() {
    $value = effi_related_pages_get_setting('posts_per_page', 6);
    echo '<input type="number" name="effi_related_pages_settings[posts_per_page]" value="' . esc_attr( $value ) . '" min="0" />';
}

function effi_related_pages_order_by_cb() {
    $value = effi_related_pages_get_setting('orderBy', 'title');
    $options = ['title' => 'Title', 'date' => 'Date', 'ID' => 'ID'];
    echo '<select name="effi_related_pages_settings[orderBy]">';
    foreach ($options as $val => $label) {
        echo '<option value="' . esc_attr($val) . '" ' . selected($value, $val, false) . '>' . esc_html($label) . '</option>';
    }
    echo '</select>';
}

function effi_related_pages_order_cb() {
    $value = effi_related_pages_get_setting('order', 'ASC');
    $options = ['ASC' => 'Ascending', 'DESC' => 'Descending'];
    echo '<select name="effi_related_pages_settings[order]">';
    foreach ($options as $val => $label) {
        echo '<option value="' . esc_attr($val) . '" ' . selected($value, $val, false) . '>' . esc_html($label) . '</option>';
    }
    echo '</select>';
}

function effi_related_pages_image_size_cb() {
    $value = effi_related_pages_get_setting('image_size', 'medium');
    $sizes = get_intermediate_image_sizes(); $sizes[] = 'full';
    echo '<select name="effi_related_pages_settings[image_size]">';
    foreach ($sizes as $size) { echo '<option value="' . esc_attr($size) . '" ' . selected($value, $size, false) . '>' . esc_html(ucfirst(str_replace('_', ' ', $size))) . '</option>'; }
    echo '</select>';
}

function effi_related_pages_image_ratio_cb() {
    $value = effi_related_pages_get_setting('image_ratio', '16:9');
    $ratios = ['1:1', '16:9', '4:3', '3:2'];
    echo '<select name="effi_related_pages_settings[image_ratio]">';
    foreach ($ratios as $ratio) { echo '<option value="' . esc_attr($ratio) . '" ' . selected($value, $ratio, false) . '>' . esc_html($ratio) . '</option>'; }
    echo '</select>';
}

function effi_related_pages_title_tag_cb() {
    $value = effi_related_pages_get_setting('title_tag', 'h3');
    $tags = ['h2', 'h3', 'h4', 'h5', 'h6', 'span'];
    echo '<select name="effi_related_pages_settings[title_tag]">';
    foreach ($tags as $tag) { echo '<option value="' . esc_attr($tag) . '" ' . selected($value, $tag, false) . '>' . esc_html(strtoupper($tag)) . '</option>'; }
    echo '</select>';
}

function effi_related_pages_grid_columns_cb() {
    $value = effi_related_pages_get_setting('grid_columns', 3);
    echo '<input type="number" name="effi_related_pages_settings[grid_columns]" value="' . esc_attr( $value ) . '" min="1" max="4" />';
}

function effi_related_pages_breakpoint_cb() {
    $value = effi_related_pages_get_setting('breakpoint', 768);
    echo '<input type="number" name="effi_related_pages_settings[breakpoint]" value="' . esc_attr( $value ) . '" min="320" />';
}

function effi_related_pages_sanitize_settings( $input ) {
    $sanitized_input = [];
    if ( isset( $input['posts_per_page'] ) ) $sanitized_input['posts_per_page'] = absint( $input['posts_per_page'] );
    if ( isset( $input['orderBy'] ) ) $sanitized_input['orderBy'] = sanitize_text_field( $input['orderBy'] );
    if ( isset( $input['order'] ) ) $sanitized_input['order'] = sanitize_text_field( $input['order'] );
    if ( isset( $input['image_size'] ) ) $sanitized_input['image_size'] = sanitize_text_field( $input['image_size'] );
    if ( isset( $input['image_ratio'] ) ) $sanitized_input['image_ratio'] = sanitize_text_field( $input['image_ratio'] );
    if ( isset( $input['title_tag'] ) ) $sanitized_input['title_tag'] = sanitize_text_field( $input['title_tag'] );
    if ( isset( $input['grid_columns'] ) ) $sanitized_input['grid_columns'] = absint( $input['grid_columns'] );
    if ( isset( $input['breakpoint'] ) ) $sanitized_input['breakpoint'] = absint( $input['breakpoint'] );
    return $sanitized_input;
}