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

function custom_shortcode_output() {
	ob_start(); // Start output buffering
	wp_enqueue_style( 'jobplace-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
	wp_enqueue_script( 'jobplace-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
	// Load the app.php template
	include plugin_dir_path( __FILE__ ) . 'templates/app.php';

	$output = ob_get_clean(); // Get the buffered content
	return $output;
}
add_shortcode('custom_shortcode', 'custom_shortcode_output');