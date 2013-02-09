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


<script type="text/javascript">

$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  options.url = '/server' + options.url;
});

var Page = Backbone.Model.extend({
	
	urlRoot: '/page',
	
	defaults: {
		title:		'',
		content:	''
	},
	
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

var AppRouter = Backbone.Router.extend({
	
	routes: {
		
		"" : "index",
		"page/:id" : "showPage"
		
	},
	
	init: function(){
	
		this.is_init = true;
		
		this.page = new Page();
		this.pageView = new PageView({model: this.page});
		$('#guts').html(this.pageView.el);
	
	},
	
	is_init: false,
	
	start: function(){

		Backbone.history.start();
	
	},
	
	index: function(){
	
		if (window.location.pathname == '/')
			this.showPage();
	
	},
	
	showPage: function(id){

		if (!this.is_init)
			this.init();

		this.page.on("request", loading_notice('show'));
		this.page.on("sync", loading_notice('hide'));

		this.page.set('id', id);
		this.page.fetch();
	
	}
	
});


$(function() {
	
	var router = new AppRouter();
	
	router.start();

});

</script>

<? } /* if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') */ ?>
</body>
</html>
