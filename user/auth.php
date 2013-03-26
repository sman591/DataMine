<?php require_once('../owcms/includes/header.php');

$auth = new owcms_auth;

if ($_REQUEST['logout']) {

	$auth->logout();
	header("Location: //".URL.LOGIN_REDIRECT);
	exit;
}
elseif ($auth->is_logged_in(true)) {

	header("Location: //".URL.LOGIN_REDIRECT);
	
}
else {

	$auth->login('email:'.$_POST['email'], $_POST['password']);
	
	/* $auth->login() will redirect automatically, and the script should end after it. If not, something clearly went wrong. Therefore we redirect to this. */
	
	header("Location: //".URL.LOGIN_URL."?login_error=login_failed");

}

?>