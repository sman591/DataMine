<?php

ini_set('display_errors', '1');
error_reporting(E_ALL ^ E_NOTICE ^ E_USER_NOTICE);

require '../owcms/includes/header.php';

require 'lib/Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim(array(
	'debug' => true
));

/*

	PAGE
****************/

$app->get('/page(/:slug)', function ($slug = false) {
	
	$prepend_with_page = true;
	
	if (!$slug)
		$page = new owcms_page('id:1', false, false);
	else
		$page = new owcms_page('slug:'.($prepend_with_page ? 'page/' : '').$slug, false, false);

	if (!$page->page_exists) {
		echo json_encode(array('error' => 'No page exists'));
		exit;
	}
	
	$output = array(
		'title'		=> $page->details('name'),
		'slug'		=> $page->details('slug'),
		'content'	=> $page->initialize(true)
	);
	
	echo json_encode($output);
	
});

$app->run();

?>