<?php

$config = array();

global $config;

/*
	Live (default) Enviornment Settings
*****************************************/

$config['LIVE']['DEBUG']						= false;										/* Manually turns on debugging */

/*  URL  */
$config['LIVE']['DOMAIN']						= 'example.com';								/* Domain of website */
$config['LIVE']['URL_PATH']					= '';											/* Path of website after domain. No trailing slash. */
$config['LIVE']['URL']							= $config['LIVE']['DOMAIN'].$config['LIVE']['URL_PATH'];	/* URL of website, without http:// or trailing slash */


/*  File Paths  */

$config['LIVE']['ROOT_FILEPATH']		= realpath(dirname(__FILE__).'/../');			/* Path to site root. No trailing slash. */
$config['LIVE']['FILEPATH']					= $config['LIVE']['ROOT_FILEPATH'];				/* Path to public website content. No trailing slash.*/
$config['LIVE']['FILES_FILEPATH']		= $config['LIVE']['ROOT_FILEPATH'].'/files';	/* Path to files. No trailing slash. */


/*  Site  */
$config['LIVE']['SITE_NAME']				= 'My Website';									/* Default name of site. Note the <title> tag is managed by the CMS */
$config['LIVE']['SHORT_NAME']				= 'mywebsite';									/* Short name of website for unique ID's, auth, etc */
$config['LIVE']['ENABLE_SESSIONS']	= true;											/* Automatically enable $_SESSION use for site; session_start() for every page */
$config['LIVE']['TEMPLATE']					= 'default';									/* Template in /includes/templates/ to use */


/*  Admin  */
$config['LIVE']['ADMIN_TITLE']			= $config['LIVE']['SITE_NAME'];					/* Title of website for the admin */
$config['LIVE']['ADMIN_LOCATION']		= '/siteadmin/'; 								/* Location of the main owCMS admin. Include trailing slash. */
$config['LIVE']['ADMIN_URL_PATH']		= $config['LIVE']['URL_PATH'].'/owcms/admin/';	/* URL path to owCMS Admin files */
$config['LIVE']['LOGIN_REDIRECT']		= '/';											/* Location which users are directed to once logged in. Include trailing slash.*/
$config['LIVE']['LOGIN_URL']				= '/signin/';									/* URL of where users can login */
$config['LIVE']['SIGNUP_URL']				= '/signup/';									/* URL of where users can sign up */
$config['LIVE']['ADMIN_TEMPLATE']		= 'default';									/* Template of owCMS admin in /owcms/includes/templates/ to use */


/* Auth */
$config['LIVE']['ALLOW_CONCURRENT_LOGINS']	= true;										/* Whether or not to allow multiple concurrent logins of the same user */


/*  MySQL  */
$config['LIVE']['MYSQL_DATABASE']		= 'localhost';									/* MySQL Database */
$config['LIVE']['MYSQL_USER']				= '';											/* MySQL Username */
$config['LIVE']['MYSQL_PASSWORD']		= '';											/* MySQL Password */
$config['LIVE']['MYSQL_TABLE']			= '';											/* MySQL Table */
$config['LIVE']['MYSQL_CONNECT_FAIL']	= 'Sorry, there was an error connecting to our databases. Please try again later.'; /* What to show when MySQL cannot connect. */



/*
	Staging Enviornment Settings
*****************************************/

/*  URL  */
$config['STAGE']['DOMAIN']					= 'stage.'.$config['LIVE']['DOMAIN'];
$config['STAGE']['URL_PATH']				= '';
$config['STAGE']['URL']							= $config['STAGE']['DOMAIN'].$config['STAGE']['URL_PATH'];


/*  MySQL  */
$config['STAGE']['MYSQL_DATABASE']	= 'localhost';
$config['STAGE']['MYSQL_USER']			= '';
$config['STAGE']['MYSQL_PASSWORD']	= '';
$config['STAGE']['MYSQL_TABLE']			= '';



/*
	Testing Enviornment Settings
*****************************************/

/*  URL  */
$config['TEST']['DOMAIN']						= 'test.'.$config['LIVE']['DOMAIN'];
$config['TEST']['URL_PATH']					= '';
$config['TEST']['URL']							= $config['TEST']['DOMAIN'].$config['TEST']['URL_PATH'];


/*  MySQL  */
$config['TEST']['MYSQL_DATABASE']		= 'localhost';
$config['TEST']['MYSQL_USER']				= '';
$config['TEST']['MYSQL_PASSWORD']		= '';
$config['TEST']['MYSQL_TABLE']			= '';



/*
	Local Enviornment Settings
*****************************************/

/*  URL  */
$config['LOCAL']['DOMAIN']					= 'local.'.$config['LIVE']['DOMAIN'];
$config['LOCAL']['URL']							= $config['LOCAL']['DOMAIN'].$config['LOCAL']['URL_PATH'];


/*  MySQL  */
$config['LOCAL']['MYSQL_DATABASE']	= 'localhost';
$config['LOCAL']['MYSQL_USER']			= '';
$config['LOCAL']['MYSQL_PASSWORD']	= '';
$config['LOCAL']['MYSQL_TABLE']			= '';



/*
	Security Keys

	DO NOT SHARE - These are responsible
	for the security of your website!

	Must be generated per website:

	$td = mcrypt_module_open('rijndael-256', '', 'ofb', '');
	$cookie_iv = md5(mcrypt_create_iv(mcrypt_enc_get_iv_size($td), mt_rand()));
	$cookie_key = hash('sha512', md5(mt_rand()));

*****************************************/

$config['LIVE']['COOKIE_KEY']				= '';
$config['LIVE']['COOKIE_IV']				= '';
$config['LIVE']['AUTH_COOKIE_NAME']	= 'auth';

?>