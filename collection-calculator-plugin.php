<?php
/*
Plugin Name: Suwak wyceny windykacji
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: Dodaj kalkulator prowizji windykacji za pomocą shortcode [calculator_shortcode]
Version: 1.2
Author: dmytrokolida
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/

function calculator_shortcode_output() {
	ob_start(); // Start output buffering
	wp_enqueue_style( 'collection-calculator-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
	wp_enqueue_script( 'collection-calculator-script', plugin_dir_url( __FILE__ ) . 'build/index.js');
	// Load the app.php template
	include plugin_dir_path( __FILE__ ) . 'templates/app.php';

	$output = ob_get_clean(); // Get the buffered content
	return $output;
}
add_shortcode('calculator_shortcode', 'calculator_shortcode_output');