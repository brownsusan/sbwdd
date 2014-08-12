<?php

$GLOBALS['web_root'] = '/';

require ('backend/libs/Validate.php');
require ('backend/libs/viewModel.php');

require ('backend/models/contactModel.php');

// if no action is given we obviously are at the root of the site
// thus we should load the landing page
if (empty($_GET['action'])) {
	// load the home view
	require ('backend/controllers/home.php');
}
else {
	//If the file does not exist with the action that was passed in from the url
	// TODO
	// This does not work - there is an issue with this routing setup
	if(!file_exists('backend/controllers/'.$_GET['action'].'.php')){
		//Load the error controller
		require ('backend/controllers/error_404.php');
		//Then stop the file from proceeding
		exit;
	}
	//Otherwise load the controller for the action that was passed in through the url.
	//This action variable comes from the hrefs & form action attributes that are hard coded into the html
	require ('backend/controllers/'.$_GET['action'].'.php');
}