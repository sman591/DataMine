<?php

class owcms_password {

	function getPasswordSalt()
	{
	    return substr( str_pad( dechex( mt_rand() ), 8, '0', STR_PAD_LEFT ), -8 );
	}
	
	// calculate the hash from a salt and a password
	function getPasswordHash( $salt, $password )
	{
	    return $salt . ( hash( 'sha512', $salt . $password ) );
	}
	
	// compare a password to a hash
	function comparePassword( $password, $hash )
	{
	    $salt = substr( $hash, 0, 8 );
	    return $hash == $this->getPasswordHash( $salt, $password );
	}
	
	// get a new hash for a password
	//$hash = getPasswordHash( getPasswordSalt(), NEWPASSWORD );

} /* class password */

?>