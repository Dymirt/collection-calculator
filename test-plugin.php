<?php

/*
Plugin Name: Suwak wyceny windykacji
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: Ten plugin umieszcza suwak z wyceną windykacji
Version: 1.0
Author: dmytrokolida
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/

add_action( 'admin_menu', 'jobplace_init_menu' );

/**
 * Init Admin Menu.
 *
 * @return void
 */
function jobplace_init_menu() {
	add_menu_page( __( 'Job Place', 'jobplace'), __( 'Job Place', 'jobplace'), 'manage_options', 'jobplace', 'jobplace_admin_page', 'dashicons-admin-post', '2.1' );
}

/**
 * Init Admin Page.
 *
 * @return void
 */
function jobplace_admin_page() {
	require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}

add_action( 'admin_enqueue_scripts', 'jobplace_admin_enqueue_scripts' );

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function jobplace_admin_enqueue_scripts() {
	wp_enqueue_style( 'jobplace-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
	wp_enqueue_script( 'jobplace-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
}