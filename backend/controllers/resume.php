<?php

// create the view model so we can use it to load views
$viewModel = new viewModel();

$viewModel -> getView('frontend/views/template/header.php');
$viewModel -> getView('frontend/views/resume/body.php');
$viewModel -> getView('frontend/views/template/foot.php');
