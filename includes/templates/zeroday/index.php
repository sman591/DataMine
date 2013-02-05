<!-- Main hero unit for a primary marketing message or call to action -->
<div class="row-fluid">

	<div class="hero-unit span<? echo (!$user->is_logged_in(true) ? '8' : '12'); ?>">
	
		<h1><em style="background: url('../resources/images/dMineLogoBlue-96.png') no-repeat; width: 101px; height: 96px; text-indent: -9999px; display: inline-block; vertical-align: middle;">dm</em>Data<sup>MINE</sup></h1>
		<h3>Discover knowledge, data, and community with simplicity</h3>
		<p>Whether you are a scientist, student, or the average joe, DataMine makes it possible for you to share your data, research, and information with the whole world.</p>
		<p><a class="btn btn-primary btn-large" href="../#/about">Tell me more &raquo;</a></p>
	
	</div>
	
	<? if (!$user->is_logged_in(true)) : ?>
		<div class="span4" style="height: 500px">
			<div class="well">
				<form>
					<fieldset>
						<h3>Sign Up</h3>
						<br>
						<label>First Name</label>
						<input type="text" name="name_first" />
						<label>Last Name</label>
						<input type="text" name="name_first" />
						<label>Email</label>
						<input type="text" name="name_first" />
						<hr>
						<button class="btn btn-primary btn-large" type="submit">Sign Up</button>
					</fieldset>
				</form>
			</div>
		</div>
	<? endif; ?>
	
</div>
<div class="row-fluid">

	<div class="span4">
		<h2>Knowledge</h2>
		<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
		<p><a class="btn" href="#">View details &raquo;</a></p>
	</div>

	<div class="span4">
		<h2>Data</h2>
		<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
		<p><a class="btn" href="#">View details &raquo;</a></p>
	</div>

	<div class="span4">
		<h2>Community</h2>
		<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
		<p><a class="btn" href="#">View details &raquo;</a></p>
	</div>

</div>
<script type="text/javascript">
function custom_pageLoad() {
	
}
</script>