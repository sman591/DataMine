<script type="text/template" id="projectView_template">

	<div class="carousel slide full-page-carousel project-carousel">
		<!-- Carousel items -->
		<div class="carousel-inner">
			<div class="active item">
				<img src="<%= header_img %>" alt="">
				<div class="container">
				<div class="carousel-caption">
					<h1><%= title %></h1>
					<p class="lead"><%= short_desc %></p>
				</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="page">
		<div class="tile-container tile-nav tile-nav-right">
			<div class="tile btn btn-primary" data-href="contribute">
				<div class="tile-content">contribute</div>
			</div>
			<div class="tile btn btn-inverse" data-href="edit">
				<div class="tile-content">edit</div>
			</div>
		</div>
		<div class="tile-container tile-nav">
			<div class="tile btn btn-info active" data-href="overview">
				<div class="tile-content">overview</div>
			</div>
			<div class="tile btn btn-success" data-href="data">
				<div class="tile-content">data</div>
			</div>
			<div class="tile btn btn-warning" data-href="info">
				<div class="tile-content">more info</div>
			</div>
		</div>
		<div class="tab-container">
			<div id="tab-overview" class="tab-content active">
				<div class="page-header">
					<h1>Overview</h1>
				</div>
				<div class="alert alert-success">This serves as a general "front cover" to the project. What it is, why it's important, what the data represents, how it can be used, etc. Should include graphics/graphs to make the project attractive to visitors.</div>
				<%= content %>
			</div>
			<div id="tab-contribute" class="tab-content">
				<div class="page-header">
					<h1>Contribute</h1>
				</div>
				<div class="alert alert-success">Form to add on your own data</div>
				<%= contribute_content %>
			</div>
			<div id="tab-data" class="tab-content">
				<div class="page-header">
					<h1>Data</h1>
				</div>
				<div class="alert alert-success">Data tables (and graphs?) go here with their descriptions</div>
				<%= data_content %>
			</div>
			<div id="tab-info" class="tab-content">
				<div class="page-header">
					<h1>More Info</h1>
				</div>
				<div class="alert alert-success">Author of project can add whatever write here. Embed graphs, give an entire background to their project, whatever.</div>
				<%= info_content %>
			</div>
		</div>
	</div>

</script>

<script type="text/template" id="projectEditView_template">
	
	<div class="page">
	
		<div class="well page-header">
		
			<h1>Edit Project</h1>
		
		</div>
	
		<div class="tile-container tile-nav tile-nav-right">
			<div class="tile btn btn-primary" data-href="contribute">
				<div class="tile-content">contribute</div>
			</div>
			<div class="tile btn btn-inverse" data-href="edit">
				<div class="tile-content">done editing</div>
			</div>
		</div>
		<div class="tile-container tile-nav">
			<div class="tile btn btn-info active" data-href="overview">
				<div class="tile-content">overview</div>
			</div>
			<div class="tile btn btn-success" data-href="data">
				<div class="tile-content">data</div>
			</div>
			<div class="tile btn btn-warning" data-href="info">
				<div class="tile-content">more info</div>
			</div>
		</div>
		<div class="tab-container">
			<div id="tab-overview" class="tab-content active">
				<div class="page-header">
					<h1>Overview</h1>
				</div>
				<form class="row-fluid">
					<fieldset class="">
					
						<legend>Project Info</legend>
						<label for="title">Title</label>
						<input type="text" name="title" id="title" class="span12" placeholder="My Amazing New Project">
						
						<label for="short_desc">Short Description</label>
						<input type="text" name="short_desc" id="short_desc" style="width: auto" placeholder="This is what my project's about">
					
					</fieldset>
				</form>
				<%= content %>
			</div>
			<div id="tab-contribute" class="tab-content">
				<div class="page-header">
					<h1>Contribute</h1>
				</div>
				<div class="alert alert-success">Form to add on your own data</div>
				<%= contribute_content %>
			</div>
			<div id="tab-data" class="tab-content">
				<div class="page-header">
					<h1>Data</h1>
				</div>
				<div class="alert alert-success">Data tables (and graphs?) go here with their descriptions</div>
				<%= data_content %>
			</div>
			<div id="tab-info" class="tab-content">
				<div class="page-header">
					<h1>More Info</h1>
				</div>
				<div class="alert alert-success">Author of project can add whatever write here. Embed graphs, give an entire background to their project, whatever.</div>
				<%= info_content %>
			</div>
		</div>
	</div>

</script>