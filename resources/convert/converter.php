<?

require_once('../../includes/header.php');

error_reporting(E_ALL);

$user->is_logged_in()

$in_file = str_replace("'", "", $_POST['file_in']);

$out_file = str_replace("'", "", $_POST['file_out']);

$format = $_POST['out_format'];

echo '<h4 style="color: red;">Do Not Close Browser Until Complete</h4>';

echo '<h4>Converting file "'.$in_file.'"É</h4>';

$command = '/home/admin/media.oweb.co/ffmpeg -i "/home/admin/media.oweb.co/files/public/'.($in_file).'" -s 853x480 -aspect 16:9 "/home/admin/media.oweb.co/files/public/'.($out_file).'" 2>&1';

$output = passthru($command);

echo "<hr />";
print_r($lines);
echo "<hr />";
echo $var;
echo "<hr />";

if ($output) {

	echo '<h4 style="color: green;">Conversion of "'.$in_file.'" complete!</h4><h4><a href="/export/'.$out_file.'">http://media.oweb.co/export/'.$out_file.'</a></h4>';
	
}
else {

	echo '<h4 style="color: red;">Conversion of "'.$in_file.'" failed!</h4>';
	
}

echo $command;

?>