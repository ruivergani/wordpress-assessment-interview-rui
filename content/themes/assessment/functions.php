<?php
/**
 * Theme functions.
 */
/**
 * Enqueue scripts/styles.
 *
 * @return void
 */

function headless_scripts() {
    wp_enqueue_style( 'headless-style', get_template_directory_uri() . '/style.css', array(), rand() );

    $asset_uri   = trailingslashit(get_template_directory_uri()) . 'assets/build/';
    $asset_root  = trailingslashit(get_template_directory()) . 'assets/build/';
    $asset_files = glob($asset_root . '*.asset.php');

    // Enqueue webpack loader.js, if it exists.
    if (true === is_readable($asset_root . 'loader.js')) {
        wp_enqueue_script(
            'assessment/runtime',
            $asset_uri . 'loader.js',
            array(),
            filemtime($asset_root . 'loader.js'),
            true // Load in footer
        );
    }

    foreach ($asset_files as $asset_file) {
        $asset_script = require($asset_file);

        $asset_filename = basename($asset_file);

        $asset_slug_parts = explode('.asset.php', $asset_filename);
        $asset_slug       = array_shift($asset_slug_parts);

        $asset_handle = sprintf('assessment/%s', $asset_slug);

        $stylesheet_path = $asset_root . $asset_slug . '.css';
        $stylesheet_uri  = $asset_uri . $asset_slug . '.css';

        $javascript_path = $asset_root . $asset_slug . '.js';
        $javascript_uri  = $asset_uri . $asset_slug . '.js';

        if (true === is_readable($stylesheet_path)) {
            $style_dependencies = [];

            wp_enqueue_style(
                $asset_handle,
                $stylesheet_uri,
                array(),
                $asset_script['version']
            );
        }

        if (true === is_readable($javascript_path)) {
            wp_enqueue_script(
                $asset_handle,
                $javascript_uri,
                $asset_script['dependencies'],
                $asset_script['version']
            );
        }
    }
}
add_action( 'wp_enqueue_scripts', 'headless_scripts' );

// Functions to clean the header

// Removes the Really Simple Discovery (RSD) link from the WordPress header, which is used for external services to communicate with WordPress.
remove_action('wp_head', 'rsd_link');

// Removes the Windows Live Writer manifest link from the WordPress header, as it's not needed for most websites.
remove_action('wp_head', 'wlwmanifest_link');

// Removes the relational links for the previous post in a post series, which are generally unnecessary.
remove_action('wp_head', 'start_post_rel_link', 10, 0);

// Removes adjacent posts relational links, which are used for navigation between posts in the head section.
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);

// Removes the extra RSS feed links from the WordPress header (such as the category and comment feed links).
remove_action('wp_head', 'feed_links_extra', 3);

// Removes the WordPress version number from the site’s header to improve security by obscuring the version in use.
remove_action('wp_head', 'wp_generator');

// Removes the emoji detection script from the front-end to reduce unnecessary resources being loaded.
remove_action('wp_head', 'print_emoji_detection_script', 7);

// Removes the emoji detection script from the WordPress admin area to save resources in the back-end.
remove_action('admin_print_scripts', 'print_emoji_detection_script');

// Removes the emoji-related styles from the front-end to reduce loading additional stylesheets.
remove_action('wp_print_styles', 'print_emoji_styles');

// Removes the emoji-related styles from the WordPress admin area.
remove_action('admin_print_styles', 'print_emoji_styles');

// Prevents Advanced Custom Fields (ACF) from removing the WordPress meta box for custom fields, ensuring it remains visible.
add_filter('acf/settings/remove_wp_meta_box', '__return_false');


// Function to disable emojis entirely in both the front-end and admin area.
function disable_emojis() {
    // Removes emoji detection script from the front-end.
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    // Removes emoji detection script from the admin area.
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    // Removes emoji styles from the front-end.
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    // Removes emoji styles from the admin area.
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    // Removes emojis from content feeds.
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    // Removes emojis from comment feeds.
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
    // Removes emojis from emails sent by WordPress.
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    // Disables emojis in TinyMCE (WordPress text editor).
    add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
}
// Hooks the disable_emojis function to run when WordPress initializes.
add_action( 'init', 'disable_emojis' );

// Function to remove the wpemoji plugin from TinyMCE editor to disable emojis there.
function disable_emojis_tinymce( $plugins ) {
    // If the plugins array exists, remove the 'wpemoji' plugin from the list.
    if ( is_array( $plugins ) ) {
        return array_diff( $plugins, array( 'wpemoji' ) );
    } else {
        // If no plugins are found, return an empty array.
        return array();
    }
}

// Function to enable GZIP compression for faster page load times.
function enable_gzip_compression() {
    // If GZIP compression is not already enabled, and no compression handler is active, start the GZIP handler.
    if ( ! ini_get( 'zlib.output_compression' ) && ! ini_get( 'ob_gzhandler' ) ) {
      ob_start( 'ob_gzhandler' );
    }
}
// Hooks the enable_gzip_compression function to run after the theme is set up, enabling GZIP compression.
add_action( 'after_setup_theme', 'enable_gzip_compression' );

// Enable featured images for posts
function enable_featured_images_for_posts() {
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'enable_featured_images_for_posts' );

function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');

// Register Custom Post Type Movie
function create_movie_post_type() {
    $labels = array(
        'name'                  => _x( 'Movies', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'Movie', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Movies', 'text_domain' ),
        'name_admin_bar'        => __( 'Movie', 'text_domain' ),
    );

    $args = array(
        'label'                 => __( 'Movie', 'text_domain' ),
        'supports'              => array( 'title', 'editor', 'excerpt', 'thumbnail' ),
        'public'                => true,
        'has_archive'           => true,
        'rewrite'               => array( 'slug' => 'movies' ),
        'show_in_rest'          => true,  // Enable REST API access
    );
    register_post_type( 'movie', $args );
}
add_action( 'init', 'create_movie_post_type', 0 );

// Register Custom Taxonomy Genre
function create_genre_taxonomy() {
    $labels = array(
        'name'              => _x( 'Genres', 'taxonomy general name', 'text_domain' ),
        'singular_name'     => _x( 'Genre', 'taxonomy singular name', 'text_domain' ),
    );
    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'genre' ),
    );
    register_taxonomy( 'genre', array( 'movie' ), $args );
}
add_action( 'init', 'create_genre_taxonomy', 0 );
