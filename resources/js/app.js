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
		"click [data-href=info]"		: "changeTab",
		"click [data-href=edit]"		: function() {window.app.router.navigate("//project/" + this.model.get('id') + "/edit")}
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

var ProjectEditView = ProjectView.extend({
	
	className: 'projectEditView',
	id: 'project-edit-view',
	
	events: {
		"click [data-href=contribute]"	: "changeTab",
		"click [data-href=overview]"	: "changeTab",
		"click [data-href=data]"		: "changeTab",
		"click [data-href=info]"		: "changeTab",
		"click [data-href=edit]"		: function() {window.app.router.navigate("//project/" + this.model.get('id'))}
	},
	
	template: _.template($('#projectEditView_template').html()),
	
});


/* ROUTER */

var AppRouter = Backbone.Router.extend({
	
	routes: {
		
		""				: "index",
		"page/:id"		: "showPage",
		"account"		: "showAccount",
		"projects"		: "projectIndex",
		"project/:id"	: "showProject",
		"project/:id/:act"	: "editProject",
		
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
	
	init_project: function() {

		window.app.project = new Project();
			
		window.app.project.on("request", loading_notice('show'));
		window.app.project.on("sync", loading_notice('hide'));
		
	},
	
	showProject: function(id){
		
		if (!window.app.project)
			this.init_project();
		
		if (window.app.project.get('id') !== id)
			window.app.project.set('id', id);
		
		window.app.project.fetch();
		
		window.app.projectView = new ProjectView({model: window.app.project});
		
		$('#guts').html(window.app.projectView.el);
	
		window.app.projectView.render();
	
	},
	
	editProject: function(id){
		
		if (!window.app.project)
			this.init_project();
		
		if (window.app.project.get('id') !== id)
			window.app.project.set('id', id);
		
		window.app.project.fetch();
		
		window.app.projectEditView = new ProjectEditView({model: window.app.project});
		
		$('#guts').html(window.app.projectEditView.el);
		
		window.app.projectEditView.render();
	
	}

	
});