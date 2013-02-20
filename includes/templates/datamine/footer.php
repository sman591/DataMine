</div>
</div><!--.container-->
<? if (!$this->is_dynamic()) { ?>

<? if (!$this->is_bare()) { ?>
<div id="footer">
    Team Zero Day, Imagine Cup 2013 - World Citizenship
</div><!--#footer-->
<? } ?>

<div class="modal fade" id="globalModal">
    <div class="modal-header">
        <a class="close" data-dismiss="modal">×</a>

        <h3>Modal header</h3>
    </div>

	<div class="modal-error">
        <? $alert = new bootstrap_alert('Error', '[error details]', 'error', '', array('href' => "javascript:modal_handler('error', 'reset', '#globalModal')"));
        echo $alert->display(); ?>
	</div>

    <div class="modal-body">
        <p>One fine body…</p>
    </div>

    <div class="modal-footer">
        <a class="btn modal-close" data-dismiss="modal">Close</a> <a class="btn btn-primary modal-save">Save changes</a>
    </div>
</div>

<div class="modal fade" id="errorModal">
    <div class="modal-header">
        <a class="close" data-dismiss="modal">×</a>

        <h4>Error</h4>
    </div>

	<div class="modal-error">
        <? $alert = new bootstrap_alert('Error', '[error details]', 'error', '', array('href' => "javascript:modal_handler('error', 'reset', '#errorModal')"));
        echo $alert->display(); ?>
	</div>

    <div class="modal-body">
        <p>[error details]</p>
    </div>

    <div class="modal-footer">
        <a class="btn modal-close" data-dismiss="modal">Close</a> <a class="btn btn-primary modal-save">Save changes</a>
    </div>
</div>

<div id="loader-holder">
    <i class="loader"></i>
</div>

<!-- Javascript goodies! -->

<?php

if (in_array($site->current_env(), array('LIVE', 'STAGE'))) {
	$testingMin = '.min';
} else {$testingMin = '';}

$testingMin = '';

?>

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">
if (typeof jQuery == 'undefined')
{
    document.write(unescape("%3Cscript src='/resources/js/jquery-1.8.3.min.js' type='text/javascript'%3E%3C/script%3E"));
}
</script>

<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js" type="text/javascript"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min.js"></script>

<script type="text/javascript" src="/resources/js/jquery-ui-1.10.0.custom/js/jquery-ui-1.10.0.custom.min.js"></script>
<script type="text/javascript" src="/resources/bootstrap-2.2.2/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/resources/js/global.js"></script>

<script src="/resources/js/jquery.stickytableheaders.js" type="text/javascript"></script>

<script type="text/template" id="userView_template">

	<div class="page-header">
		<h1>Your Account</h1>
	</div>
	
	<form class="form-horizontal UserViewForm">
		<fieldset>
			<div class="control-group">
				<label class="control-label" for="name_first">First Name</label>
				<div class="controls">
					<input type="text" class="text" name="name_first" id="name_first" value="<%= name_first %>">
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" for="name_last">Last Name</label>
				<div class="controls">
					<input type="text" class="text" name="name_last" id="name_last" value="<%= name_last %>">
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" for="email">Email</label>
				<div class="controls">
					<input type="text" class="text" name="email" id="email" value="<%= email %>">
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" for="changePass">Change Password ** doesn't currently work</label>
				<div class="controls">
					<input type="checkbox" name="changePass" id="changePass" value="yes" onclick="$('#changePassword').toggle()"/>
				</div>
			</div>
			<div id="changePassword" style="display: none;">
				<div class="control-group">
					<label class="control-label" for="cpass">Current Password</label>
					<div class="controls">
						<input type="password" class="text" name="cpass" id="cpass" value="">
					</div>
				</div>
				<div class="control-group">
					<label class="control-label" for="pass1">New Password</label>
					<div class="controls">
						<input type="password" class="text" name="pass1" id="pass1" value="">
					</div>
				</div>
				<div class="control-group">
					<label class="control-label" for="pass2">New Password (again)</label>
					<div class="controls">
						<input type="password" class="text" name="pass2" id="pass2" value="">
					</div>
				</div>
			</div>
			<div class="form-actions">
				<button type="submit" name="saveSettings" class="btn btn-primary">Save</button>
			</div>
		</fieldset>
	</form>

</script>

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

<script type="text/javascript">

$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  options.url = '/server' + options.url;
});

$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
      if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      } else {
          o[this.name] = this.value || '';
      }
  });
  return o;
};


/* PAGE */

var Page = Backbone.Model.extend({
	
	urlRoot: '/page',
	
	defaults: {
		title:		'',
		content:	''
	}
	
});

var PageView = Backbone.View.extend({
	
	className: "pageView",
	id:			"page-view",
	
	initialize: function(){
	
		this.listenTo(this.model, "change", this.render);
	
	},
	
	render: function(){
		
		this.updateNav();
		
		var html = '<div class="page">' + this.model.get('content') + '</div>';
		this.$el.html(html);
		
		return this;
		
		/* Set content by calling for $().html(page.el); Make sure the page is rendered first! */
		
	},
	
	updateNav: function(){
		
		slug = this.model.get('slug');
		
		$(".nav li").removeClass("active");
		$('.nav li a[href="#/'+slug+'"]').parent().addClass("active");
		$('.nav li a[href="#/page/'+slug+'"]').parent().addClass("active");
	
	},
	
});


/* USER */

var User = Backbone.Model.extend({
	
	urlRoot: '/user',
	
	defaults: {
		name_first:		'',
		name_last:		'',
		email:			''
	}
	
});

var UserView = Backbone.View.extend({
	
	className: "userView",
	id:			"user-view",
	
	events: {
		'submit .UserViewForm': 'saveUser'
	},
	
	initialize: function(){
	
		this.listenTo(this.model, "change", this.render);
	
	},
	
	template: _.template($('#userView_template').html()),
	
	render: function(){
		
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));

		return this;
		
	},
	
	saveUser: function(){
		
		var $save_btn = this.$el.children('.UserViewForm button[type=submit]');
		
		var user_data = $(this.$el.children('form')).serializeObject();
		
		var that = this;
		
		this.model.save(user_data, {
			success: function () {
				$('.UserViewForm button').after('<i class="icon-ok successMark" style="display: none; margin-left: 14px;"></i>');
				$('.UserViewForm .successMark').fadeIn(200).delay(2000).fadeOut(200, function(){
					$('.UserViewForm .successMark').remove();
				});
			}
        });
		
        return false;
	
	}
	
});


/* PROJECT */

var Project = Backbone.Model.extend({
	
	urlRoot: '/project'
	
});

var ProjectView = Backbone.View.extend({
	
	className: 'projectView',
	id: 'project-view',
	
	events: {
		"click [data-href=contribute]"	: "changeTab",
		"click [data-href=overview]"	: "changeTab",
		"click [data-href=data]"		: "changeTab",
		"click [data-href=info]"		: "changeTab"
	},
	
	initialize: function(){
	
		this.listenTo(this.model, "change", this.render);
	
	},
	
	template: _.template($('#projectView_template').html()),
	
	render: function(){
		
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
		
		return this;
		
	},
	
	changeTab: function(e){
		
		var $e = $(e.currentTarget);
		
		console.log($e.attr('data-href'));
		
		/* Update navigation */
		this.$el.find('.tile-nav .tile.active').removeClass('active');
		$e.addClass('active');
		
		/* Update content */
		this.$el.find('.tab-content').hide();
		this.$el.find('#tab-' + $e.attr('data-href')).show();
	
	},
	
});


/* ROUTER */

var AppRouter = Backbone.Router.extend({
	
	routes: {
		
		""				: "index",
		"page/:id"		: "showPage",
		"account"		: "showAccount",
		"projects"		: "projectIndex",
		"project/:id"	: "showProject"
		
	},
	
	start: function(){

		Backbone.history.start();
	
	},
	
	index: function(){
	
		if (window.location.pathname == '/')
			this.showPage();
	
	},
	
	showPage: function(id){

		if (!this.page)
			this.page = new Page();
		if (!this.paveView)
			this.pageView = new PageView({model: this.page});

		this.page.on("request", loading_notice('show'));
		this.page.on("sync", loading_notice('hide'));

		this.page.set('id', id);
		this.page.fetch();
		
		var that = this;
		
		this.page.on("sync", function() {$('#guts').html(that.pageView.el)});
	
	},
	
	showAccount: function(){
		
		if (!this.user)
			this.user = new User();
		
		if (!this.userView)
			this.userView = new UserView({model: this.user});
		
		$('#guts').html(this.userView.el);
		
		this.user.fetch();
	
	},

	projectIndex: function(){
		
		this.showPage('projects');
	
	},
	
	showProject: function(id){
		
		this.project = new Project();
			
		this.project.on("request", loading_notice('show'));
		this.project.on("sync", loading_notice('hide'));

		this.project.set('id', id);
		
		this.project.fetch();
		
		this.projectView = new ProjectView({model: this.project});
		
		$('#guts').html(this.projectView.el);
	
	}

	
});


$(function() {
	
	var app = app || {};
	
	window.app = app;
	
	window.app.router = new AppRouter();
	
	window.app.router.start();

});

</script>

<? } /* if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') */ ?>
</body>
</html>
