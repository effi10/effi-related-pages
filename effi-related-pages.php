<?php
/**
 * Plugin Name:       effi Related Pages
 * Plugin URI:        https://www.effi10.com/
 * Description:       Affiche dynamiquement les pages enfants ou sœurs de la page actuelle via un bloc Gutenberg.
 * Version:           1.0.0
 * Author:            Cédric GIRARD
 * Author URI:        https://www.effi10.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       effi-related-pages
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

define( 'EFFI_RELATED_PAGES_PATH', plugin_dir_path( __FILE__ ) );
define( 'EFFI_RELATED_PAGES_URL', plugin_dir_url( __FILE__ ) );
define( 'EFFI_RELATED_PAGES_VERSION', '1.0.0' );

// Inclure les fichiers nécessaires
require_once EFFI_RELATED_PAGES_PATH . 'admin/settings-page.php';
require_once EFFI_RELATED_PAGES_PATH . 'includes/render-block.php';

/**
 * Initialisation du plugin.
 */
function effi_related_pages_init() {
    // Internationalisation
    load_plugin_textdomain( 'effi-related-pages', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );

    // Enregistrement du bloc
    register_block_type( EFFI_RELATED_PAGES_PATH . 'blocks/build' );
}
add_action( 'init', 'effi_related_pages_init' );

/**
 * Création des assets.
 * Utilise les métadonnées de block.json pour charger les scripts et styles.
 * Nécessite un processus de build (ex: @wordpress/scripts) pour générer les fichiers dans /build.
 */

// Note : Le build des assets JS/CSS est nécessaire. Les fichiers pré-compilés sont fournis.
// Pour développer : cd blocks/related-pages && npm install && npm run build