<?php
/**
 * Plugin Name:       effi Related Pages
 * Description:       Affiche dynamiquement les pages enfants ou sœurs de la page actuelle via un bloc Gutenberg.
 * Requires at least: 6.2
 * Requires PHP:      7.4
 * Version:           1.4.0
 * Author:            Cédric GIRARD
 * Author URI:	      https://www.effi10.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       effi-related-pages
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

define( 'EFFI_RELATED_PAGES_VERSION', '1.3.0' );
define( 'EFFI_RELATED_PAGES_PATH', plugin_dir_path( __FILE__ ) );
define( 'EFFI_RELATED_PAGES_URL', plugin_dir_url( __FILE__ ) );

// Include required files
require_once EFFI_RELATED_PAGES_PATH . 'admin/settings-page.php';
require_once EFFI_RELATED_PAGES_PATH . 'public/display-related-pages.php';
// On retire : require_once EFFI_RELATED_PAGES_PATH . 'public/dynamic-styles.php';

/**
 * Initialize the plugin for both frontend and backend.
 */
function effi_related_pages_init() {
    load_plugin_textdomain( 'effi-related-pages', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
    register_block_type( EFFI_RELATED_PAGES_PATH . 'block/' );
}
add_action( 'init', 'effi_related_pages_init' );

/**
 * Initialize admin-specific functionalities.
 */
function effi_related_pages_admin_init() {
    effi_related_pages_register_settings();
}
add_action( 'admin_init', 'effi_related_pages_admin_init' );

/**
 * Enqueue frontend assets.
 */
function effi_related_pages_enqueue_frontend_assets() {
    if ( ! is_singular() || ! has_block('effi-related-pages/related-pages') ) {
        return;
    }
    
    // On charge la feuille de style statique principale du bloc pour le front-office.
    wp_enqueue_style(
        'effi-related-pages-block-style',
        EFFI_RELATED_PAGES_URL . 'block/style.css',
        [],
        EFFI_RELATED_PAGES_VERSION
    );
}
add_action( 'wp_enqueue_scripts', 'effi_related_pages_enqueue_frontend_assets' );