function in_array (needle, haystack, argStrict) {
  var key = '',
    strict = !! argStrict;

  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        return true;
      }
    }
  }

  return false;
}

function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}

function close() {
$(".window-overlay").delay(30).fadeOut(150);
$(".window").fadeOut(150, function() {
	resetWindow();
});
}

function current_url(num) {
	
	var path = window.location.hash.split('/');
	
	return path[num];
	
}


$.fn.serializeObject = function()
{
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

function modal(title, type, contentid, vars, callback) {

	/*	title		Title of Modal
		type		Type of Modal; chooses which function to parse the data with
		contentid	?
		vars		Custom variables for each  type  , typically get posted through  btn_save_href  and the type's function
		
		modal_***	Functions that return for the content of the modal.
		
	*/

	if (!vars) {
		vars = Array();
	}
	
	if (!callback) {
		callback = function() {};
	}

	/* Set the ID of the modal being used */
	if (vars.modalid) {
		var id = vars.modalid;
	}
	else {
		var id = '#globalModal';
	}
	
	var modal_content;
	
	var btn_close_enabled;
	var btn_close_href;
	var btn_close_color;
	var btn_close_text;
	var btn_save_enabled;
	var btn_save_href;
	var btn_save_color;
	var btn_save_text;

	/* Reset modal to original state */
	modal_handler('loader', 'hide', id);
	modal_handler('error', 'reset', id);

	/* Set the title */
	$(id+' .modal-header h3').html(title);
	
	switch (type) {
	
		case 'songfiles':
		
			modal_content		= modal_songfiles(id, contentid, vars);
			btn_save_enabled	= false;
		
		break;
		case 'songFiles_delete':
			
			modal_content 		= modal_songFiles_delete(id, contentid, vars);
			btn_close_text		= '<i class="icon-remove"></i>&nbsp;Cancel';
			btn_close_enabled 	= true;
			btn_save_text		= '<i class="icon-white icon-trash"></i>&nbsp;&nbsp;Delete';
			btn_save_enabled 	= true;
			btn_save_href		= "javascript:songFiles_delete('delete', '"+vars['file']+"', '"+vars['filepath']+"')";
			btn_save_color		= "danger";
			
		break;
		case 'songFiles_addDir':
			
			modal_content 		= modal_songFiles_addDir(id, contentid, vars);
			btn_close_text		= '<i class="icon-remove"></i>&nbsp;Cancel';
			btn_close_enabled 	= true;
			btn_save_text		= '<i class="icon-white icon-plus"></i>&nbsp;&nbsp;Add';
			btn_save_enabled 	= true;
			btn_save_href		= "javascript:songFiles_addDir('addDir')";
			
		break;
		case 'attend':
		
			modal_content 		= modal_attend(id, contentid, vars);
			btn_close_text		= '<i class="icon-remove"></i>&nbsp;Cancel';
			btn_save_text		= '<i class="icon-ok icon-white"></i>&nbsp;&nbsp;Confirm';
			btn_save_enabled 	= true;
			btn_save_href		= "javascript:goattend('"+vars[0]+"','"+vars[1]+"','"+vars[2]+"', '"+id+"')";
			btn_save_color		= "primary";
		
		break;
		case 'save':
			
			modal_content 		= modal_saving(id, contentid, vars);
			btn_close_enabled	= false;
			btn_save_enabled 	= false;
			
		break;
		case 'attendSave':
			
			modal_content 		= modal_saving(id, contentid, vars);
			btn_close_enabled	= false;
			btn_save_enabled 	= false;
			
		break;
		case 'userSave':
			
			modal_content 		= modal_saving(id, contentid, vars);
			btn_close_enabled	= false;
			btn_save_enabled 	= false;
			
		break;
		case 'songNew':
			
			modal_content 		= modal_saving(id, contentid, vars);
			btn_close_enabled	= true;
			btn_save_enabled 	= false;
			
		break;
		case 'songSave':
			
			modal_content 		= modal_saving(id, contentid, vars);
			btn_close_enabled	= false;
			btn_save_enabled 	= false;
			
		break;
		case 'songRename':
			
			modal_content 		= modal_songRename(id, contentid, vars);
			btn_close_text		= 'Cancel';
			btn_close_enabled 	= true;
			btn_save_enabled 	= true;
			btn_save_href		= "javascript:songRename('rename', '"+vars['songid']+"', '"+vars['songName']+"')";
			
		break;
		case 'scheduleEmail':
			
			modal_content 		= modal_scheduleEmail(id, contentid, vars);
			btn_close_enabled	= true;
			btn_close_text		= '<i class="icon-remove"></i>&nbsp;Cancel';
			btn_save_enabled 	= true;
			btn_save_text		= '<i class="icon-white icon-ok"></i>&nbsp;&nbsp;Okay';
			btn_save_href		= 'javascript:scheduleEmail(\'save\', \''+vars.formid+'\')';
			
		break;
		case 'scheduleSave':
			
			modal_content 		= modal_saving(id, contentid, vars);
			btn_close_enabled	= false;
			btn_save_enabled 	= false;
			
		break;
		case 'bulkSave':
			
			modal_content 		= modal_saving(id, contentid, vars);
			btn_close_enabled	= false;
			btn_save_enabled 	= false;
			
		break;
		case 'userRoles':
			
			modal_content 		= modal_userRoles(id, contentid, vars);
			btn_close_enabled	= true;
			btn_close_text		= '<i class="icon-remove"></i>&nbsp;Cancel';
			btn_save_enabled 	= true;
			btn_save_text		= '<i class="icon-white icon-ok"></i>&nbsp;&nbsp;Okay';
			btn_save_href		= 'javascript:userRoles(\'save\', \''+vars.usernum+'\', \''+vars.name+'\')';
			
		break;
		case 'userPassword':
		
			modal_content 		= modal_userPassword(id, contentid, vars);
			btn_close_enabled	= true;
			btn_close_text		= '<i class="icon-remove"></i>&nbsp;Cancel';
			btn_save_enabled 	= true;
			btn_save_text		= '<i class="icon-white icon-ok"></i>&nbsp;&nbsp;Change Password';
			btn_save_href		= 'javascript:userPassword(\'save\', \''+vars.usernum+'\', \''+vars.name+'\')';
		
		break;
		case 'userDelete':
		
			modal_content 		= modal_userDelete(id, contentid, vars);
			btn_close_text		= '<i class="icon-remove"></i>&nbsp;Cancel';
			btn_save_text		= '<i class="icon-white icon-trash"></i>&nbsp;&nbsp;Delete';
			btn_save_enabled 	= true;
			btn_save_href		= "javascript:userDelete('"+vars[0]+"', '"+addslashes(vars[1])+"', '"+id+"')";
			btn_save_color		= "danger";
		
		break;
		
		case 'unsupportedIE':
			
			modal_content		= modal_unsupportedIE(id, contentid, vars);
			btn_close_enabled	= true;
			btn_close_text		= 'Continue Browsing';
			btn_save_enabled	= false;
			
		break;
		
		default:
		
			modal_content 		= '<div class="alert alert-error"><h4 class="alert-heading">Invalid Modal Type</h4></div>';
			btn_close_enabled	= true;
			btn_save_enabled 	= false;
		
		break;
		
	} /* switch (type) */
	
	$(id+' .modal-body').html(modal_content);
	
	/* Handle whether or not the CLOSE btn is used, and if so, configure it */
	if (btn_close_enabled!==false) {
		
		/* Set href of button */
		modal_handler('button', 'href', id, {'button':'close', 'href':btn_close_href});
		
		/* Set color of button */
		modal_handler('button', 'color', id, {'button':'close', 'color':btn_close_color});
		
		/* Set text of button */
		modal_handler('button', 'text', id, {'button':'close', 'text':btn_close_text});
		
		/* Show Button */
		modal_handler('button', 'show', id, {'button':'close'});
		
	}
	else {
		modal_handler('button', 'hide', id, {'button':'close'});
	}
	
	/* Handle whether or not the SAVE btn is used, and if so, configure it */
	if (btn_save_enabled!==false) {
		
		/* Set href of button */
		modal_handler('button', 'href', id, {'button':'save', 'href':btn_save_href});
		
		/* Set color of button */
		modal_handler('button', 'color', id, {'button':'save', 'color':btn_save_color});
		
		/* Set text of button */
		modal_handler('button', 'text', id, {'button':'save', 'text':btn_save_text});
		
		/* Show Button */
		modal_handler('button', 'show', id, {'button':'save'});
		
	}
	else {
		modal_handler('button', 'hide', id, {'button':'save'});
	}

	/* Finally, show the modal */
	$(id).modal('show');
	
	setTimeout(function(){$(id).on('shown', callback());}, 400);

}

function modal_handler(type, act, modalid, vars) {

	var vars;

	switch (type) {
	
		case 'content':
			
			switch (act) {
			
				case 'reset':
					$(modalid+' .modal-body').html();
				break;
				case 'replace':
					$(modalid+' .modal-body').html(vars[0]);
				break;
				case 'append':
					$(modalid+' .modal-body').append(vars[0]);
				break;
				case 'prepend':
					$(modalid+' .modal-body').prepend(vars[0]);
				break;
				
			} /* switch (act) */
			
		break;
		case 'loader':
			
			switch (act) {
				case 'show':
					$(modalid+' .modal-footer').prepend('<i class="loader"></i>');
				break;
				case 'hide':
					$(modalid+' .modal-footer .loader').remove();
				break;
			} /* switch (act) */
			
		break;
		case 'error':
			
			modal_handler('loader', 'hide', modalid);
			
			if (act==='reset') {
				$(modalid+' .modal-error').css('display', 'none');
				$(modalid+' .modal-error .alert-content').html('[error details]');
			}
			else {
	            $(modalid+' .alert-content').html(act);
	            $(modalid+' .modal-error').slideDown(400);
	            modal_handler('button', 'show', modalid, {'button':'close'});
	       	}
			
		break;
		case 'button':
			
			var button_selector = modalid+' .modal-footer .modal-'+vars['button'];
		
			switch(act) {
				
				case 'show':
				
					$(button_selector).css('display', 'inline-block');
				
				break;
				case 'hide':
				
					$(button_selector).css('display', 'none');
				
				break;
				case 'color':
				
					if (!vars.color) {
					
						if (vars.button=='save') {
							vars.color = 'primary';
						}
						if (vars.button=='close') {
							vars.color = 'default';
						}
						
					}
					
					$(button_selector).attr('class', 'btn modal-'+vars.button+' btn-'+vars.color);
				
				break;
				case 'text':
				
					if (!vars.text) {
					
						if (vars.button=='save') {
							vars.text = '<i class="icon-white icon-ok"></i>&nbsp;&nbsp;Save';
						}
						if (vars.button=='close') {
							vars.text = '<i class="icon-remove"></i>&nbsp;Close';
						}
						
					}
				
					$(button_selector).html(vars.text);
				
				break;
				case 'href':
				
					if (vars.href) {
						$(button_selector).attr('href', vars.href);
					}
					else {
						$(button_selector).removeAttr('href');
					}
				
				break;
				
			}
		
		break;
	
	} /* switch (type) */

} /* modal_handler() */

function modal_saving(id, contentid, vars) {
	
	var html = '<center>Saving...<i class="loading"></i></center>';

	return html;
}

function modal_loading(id, contentid, vars) {
	
	var html = '';

	return html;
}

function modal_songfiles(id, contentid, vars) {

	var html = '<div id="songfiles_modal_content"></div>';

	return html;

}

function modal_songFiles_delete(id, contentid, vars) {
	
	var html = '<center><p>You are about to delete the following file</p><code>'+vars['file']+'</code><p></p><p><strong>This action cannot be undone.</strong></p><p></p></center>';

	return html;
}

function modal_songFiles_addDir(id, contentid, vars) {
	
	var html = '<center><label for="addDir_name">New Folder Name: </label><input id="addDir_name" name="addDir_name" type="text" /></center>';

	return html;
}

function modal_userDelete(id, contentid, vars) {
	
	var html = '<center><p>You are about to delete the user "'+vars[1]+'"</p><p><strong>Warning:</strong> All unsaved changes on this page will be lost</p><p></center>';

	return html;
}

function modal_userRoles(id, contentid, vars) {

	var html = '<div id="userroles_modal_content"></div>';

	return html;

}

function modal_userPassword(id, contentid, vars) {

	var html = '<div id="userroles_modal_content"><br /><form action="javascript:void()" class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="pass1">New Password</label><div class="controls"><input type="password" class="text" name="pass1" id="pass1" value=""></div></div><div class="control-group"><label class="control-label" for="pass2">Confirm Password</label><div class="controls"><input type="password" class="text" name="pass2" id="pass2" value=""></div></div></fieldset></form></div>';

	return html;

}

function modal_unsupportedIE(id, contentid, vars) {
	
	var html = '<center><img src="/resources/images/ie.jpg" alt="ielogo" style="width: 68px; height: 68px; "><p>We do not support Internet Explorer versions older than IE 9.</p><p>We suggest updating your version of Internet Explorer, <br /><strong>but for best results, you should upgrade below:</strong></p><a href="http://browsehappy.com/" target="_blank" class="browser_ad"><img src="/resources/images/browser_ad.jpg" /></a></p><p>Most of the site <i>should</i> still work, however, you will<br />have <strong>no access to admin pages</strong> unless you update or switch.</center>';
	
	return html;
}

function showConfirm(type, url, value) {

	switch (type) {
	
		case 'pageDelete':
			html = '<p>You are about to delete the page "'+value+'".</p>';
		break;
		
		case 'userDelete':
			html = '<p>You are about to delete the user "'+value+'".</p>';
		break;
		
		case 'custom':
			html = value;
		break;
		
		default:
			html = 'undefined event "'+type+'"<br />confirming to "'+url+'"';
		break;
	
	}
	
	$("#showConfirm_bg").fadeIn(200);
	$("#showConfirm_content").html(html+'<p>Are you sure?</p><div class="button-holder"><a href="'+url+'" class="button green">Confirm</a> <a href="javascript:closeConfirm()" class="button red">Cancel</a></div>');
	$("#showConfirm_box").fadeIn(200);
} 
/* showConfirm() */

function loading_notice(act, callback) {

	switch (act) {
	
		case 'show':
		
			$("#loader-holder").show(0, function(){
			
				$('.modal:visible').each(function(i) {
					
					modal_handler('loader', 'show', '#'+this.id);
					
				});
				
				if (callback && typeof(callback) === "function") {
					callback();
				}
				
			});
			
		break
		case 'hide':
		
			$("#loader-holder").fadeOut(300, function(){
				
				$('.modal:visible').each(function(i) {
					
					modal_handler('loader', 'hide', '#'+this.id);
					
				});
				
				if (callback && typeof(callback) === "function") {
					callback();
				}
				
			});
			
		break;
		
	}
	
}
/* loading_notice() */

function resetWindow() {
$(".window .window-change").html('');
}

function addslashes(str) {
str=str.replace(/\\/g,'\\\\');
str=str.replace(/\'/g,'\\\'');
str=str.replace(/\"/g,'\\"');
str=str.replace(/\0/g,'\\0');
return str;
}


function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
   {
   myfield.form.submit();
   return false;
   }
else
   return true;
}

function ow_ajax(url, data, success, error, vars) {

	/*	url*		URL to post data to
		data*		Data to post to  url
		success		Calback function upon success; returns function(json.content)
		error		Callback function upon error; returns function(json.content)
		vars		Custom vars, such as  modalid, alertid
			vars.modalid	If set, acts on a modal
			vars.alertid	If set, uses the specified element for alerts
	*/
	
	if (success==undefined) {
		error = function(){};
	}
	
	if (error==undefined) {
		error = function(){};
	}

	loading_notice('show', function() {

		if (!vars) {
			vars = Array();
		}

		if (vars.modalid) {
			modalid = vars.modalid;
			alertid = modalid+' .modal-error';
		}
		else {
			modalid = false;
			alertid = '#alert-global';
		}
		
		if (vars.alertid) {
			alertid = vars.alertid;
		}
	
		var ajaxRequest = $.ajax({
	        type: "POST",
	        url: url,
	        data: data,
	        dataType: "html",
	        timeout: 6000,
	        success: function(data) {
	        	
	        	try {
				    json = $.parseJSON(data);
				    
				    switch (json.code) {
						case 'success':
				        	success(json.content);
				        break;
				        case 'error':
				        	ow_ajax_handler('error', ['', 'Error', json.content, modalid], alertid);
				        	error(json.content);
				        break;
				        default:
			        		ow_ajax_handler('error', ['', 'Unknown error code', json.code, modalid], alertid);
			        		error(json.content);
				        break;
				   	}
				    
				} catch (e) {
				
					/* Allow for redirects */
				
					var live_data = $('<div>',{html:data});
	            	
	            	var data_text = trim($(live_data).text());
	            	
	            	if ( data_text.indexOf('REDIRECT:') === 0 ) {
		            	
		            	window.location = data_text.substring(9);
		            	
	            	}
	            	else {
				
				    	ow_ajax_handler('error', ['', 'Error parsing JSON ('+e+')', data, modalid], alertid);
				    
				    }
				}
			   	
			   	loading_notice('hide');
			   	
	        },
	        error: function(request, status, err) {
	            ow_ajax_handler('error', [request, status, err, modalid], alertid);
	            loading_notice('hide');
	        }
	    });
	    
	});
	
}
/* ow_ajax() */

function ow_ajax_handler(type, act, alert_id) {

	if (alert_id!='') {
		var alertid = alert_id;
	}
	else {
		var alertid = '#alert-global';
	}
	
	var request = act[0];
	var status 	= act[1];
	var err 	= act[2];
	var modalid = act[3];

	switch (type) {
	
		case 'error':
			
			modal_handler('loader', 'hide', modalid);
			
			$(alertid+' .alert-heading').html('Error');
			
			if (act==='reset') {
				$(alertid+' .alert-content').html('[error details]');
				$(alertid).css('display', 'none');
			}
			else {
				
				switch (status) {
					
					case 'timeout':
						
						alert_content = 'Action timed out. Please try again later.';
						
					break;
					case 'Error':
					case 'error':
					
						alert_content = err;
					
					break;
					default:
					
						alert_content = status+': '+err;
					
					break;
					
				}
				
				$(alertid+' .alert-content').html(alert_content);
				
		        $(alertid).slideDown(400);
		   	}
			
		break;
	
	} /* switch (type) */
	
}
/* ow_ajax_handler() */

function songFiles(title, songid, type) {
	
	var modalid;
	
	/* Set if files are being vuiewed in a modal or inline element */
	switch (type) {
		case 'inline':
		
			modalid = '';
			
		break;
		
		case 'modal':
		default:
		
			modalid	= '#globalModal';
			type	= 'modal'; /* Set type to "modal" by default */
			
		break;
	}
	
	var action = '/resources/return/files.php';
	
	if (title=='') {
		title = 'Song Files ('+id+')';
	}
	
	ajax_function = function() {
		
		ow_ajax(action, {
			id:		songid,
			type: 	type
		},
		function(data){
			
			if (type=='modal') {
				modal_handler('loader','hide', modalid);
				$(modalid+ ' #songfiles_modal_content').html(data);
			}
			else {
				$('#songfiles_inline_content').html(data);
			}
			
			if ($(window).height() > 480) {
				$("#songfiles_inline_content table").stickyTableHeaders({ fixedOffset: $(".navbar") });
			}
			
			songFiles_reset_header();
						
			pageLoad();
			
		},function(data){}, {'modalid':modalid});
		
	}
    
    if (type=='modal') {
    
		modal(title, 'songfiles', songid, {'modalid':modalid}, function() {
		
		    modal_handler('loader','show', modalid);
		
			ajax_function();
			
		});
		
	}
	else {
		
		ajax_function();
		
	}
			
}


function songFiles_header(tr_id) {
	
	var $file_tr 	= $('#'+tr_id);
	var thead		= '#songfiles_inline_content table thead';
	
	/* Mobile Optimizations */
	
	
	/* Type */
	
	$(thead+' .file_type').html('<i class="' + $file_tr.children('.file_type').children('i').attr('class') + '"></i>');
	
	
	/* Name */
	
	$(thead+' .file_name').html($file_tr.children('.file_name').text());
	
	
	/* Actions */
	
	var new_actions = "";
	
	if ($file_tr.attr('filetype')=='file') {
		new_actions += songFiles_btn(tr_id, 'download') + '&nbsp;&nbsp;';
		new_actions += songFiles_btn(tr_id, 'open') + '&nbsp;&nbsp;';
	}
	else {
		new_actions += songFiles_btn(tr_id, 'upload') + '&nbsp;&nbsp;';
	}
	
	new_actions += '<div class="btn-group">' + songFiles_btn(tr_id, 'actions') + '<ul class="dropdown-menu">'
	
		new_actions += songFiles_btn(tr_id, 'move', true);
		
		convert_allowed_exts = Array('mp4', 'm4v', 'avi', 'mkv', 'mov');
		if ($file_tr.attr('filetype')=='file' && in_array($file_tr.attr('fileext'), convert_allowed_exts))
			new_actions += songFiles_btn(tr_id, 'convert', true);
			
		new_actions += songFiles_btn(tr_id, 'add_dir', true);
		
		new_actions += '<li class="divider"></li>';
		
		new_actions += songFiles_btn(tr_id, 'delete', true);
	
	new_actions += '</ul></div>';
	
	$(thead+' .file_actions').html(new_actions);
	
	$(thead+' .close_holder').html('<button class="close" onclick="javascript:songFiles_close_header()">x</button>');
	
}


function songFiles_reset_header() {
	
	var thead		= '#songfiles_inline_content table thead';
	var tr_id		= 'songfiles_inline_content table thead';
		
	$(thead+' .file_type').html('');
	
	$(thead+' .file_name').html('');
	
	var new_actions = "";
	
	new_actions += songFiles_btn(tr_id, 'upload') + '&nbsp;&nbsp;';
	new_actions += songFiles_btn(tr_id, 'add_dir') + '&nbsp;&nbsp;';
	
	$(thead+' .file_actions').html(new_actions);
	
	$(thead+' .close_holder').html('');
	
}

function songFiles_close_header() {
	
	songFiles_reset_header();
	
	$('#songfiles_inline_content table tr.focus').removeClass('focus');
	
}


function songFiles_btn(tr_id, btn_type, is_in_dropdown) {
	
	/* Generate button HTML
		Returns button HTML */
	
	var $file_tr 	= $('#'+tr_id);
	
	var btn_html 	= "";
	var btn_vars	= {	
		'href'		: '',
		'type'		: '',
		'icon'		: '',
		'text'		: '',
		'disabled'	: false,
		'class'		: ''
	};
	var btn_attrs = '';
	
	var is_dropdown	= false;
	
	
	/* Set vars based on btn_type */
	
	switch (btn_type) {
		
		case 'open':
		
			// uses such as image preview, audio/video player, text/pdf reader, etc
			
			btn_vars['href'] 	= "javascript:alert('Sorry, that feature isn\\'t built yet');";
			btn_vars['type'] 	= 'info';
			btn_vars['icon']	= 'icon-eye-open';
			btn_vars['text']	= 'View';
		
		break;
		case 'download':
		
			// download file
			
			btn_vars['href'] 	= $file_tr.children('.file_actions').children('a[ow_type="download"]').attr('href');
			btn_vars['type'] 	= 'primary';
			btn_vars['icon']	= 'icon-download-alt';
			btn_vars['text']	= 'Download';
		
		break;
		case 'upload':
		
			// upload to folder/root
			
			btn_vars['href'] 	= "javascript:alert('Sorry, that feature isn\\'t built yet');";
			btn_vars['type'] 	= 'info';
			btn_vars['icon']	= 'icon-arrow-up';
			btn_vars['text']	= 'Upload';
		
		break;
		case 'add_dir':
		
			// upload to folder/root
			
			btn_vars['href'] 	= "javascript:alert('Sorry, that feature isn\\'t built yet');";
			btn_vars['type'] 	= 'info';
			btn_vars['icon']	= 'icon-plus';
			btn_vars['text']	= 'Add Folder';
		
		break;
		case 'move':
		
			// move files/folders
			
			btn_vars['href'] 	= "javascript:alert('Sorry, that feature isn\\'t built yet');";
			btn_vars['type'] 	= 'info';
			btn_vars['icon']	= 'icon-hand-right';
			btn_vars['text']	= 'Move';
		
		break;
		case 'convert':
		
			// convert files
			
			btn_vars['href'] 	= "javascript:alert('Sorry, that feature isn\\'t built yet');";
			btn_vars['type'] 	= 'info';
			btn_vars['icon']	= 'icon-share-alt';
			btn_vars['text']	= 'Convert';
		
		break;
		case 'delete':
		
			// delete files/folders
			
			btn_vars['href'] 	= $file_tr.children('.file_actions').children('a[ow_type="delete"]').attr('onclick');
			btn_vars['type'] 	= 'danger';
			btn_vars['icon']	= 'icon-trash';
			btn_vars['text']	= 'Delete';
		
		break;
		case 'actions':
		
			// triggers dropdown of additional actions
			
			btn_vars['href'] 	= '#';
			btn_vars['type'] 	= 'info';
			btn_vars['icon']	= 'icon-cog';
			btn_vars['text']	= '';
			
			is_dropdown = true;
		
		break;
		default:
		
			alert("Invalid btn type");
		
		break;
		
	}
	
	
	/* Type */
	
	var btn_type = '';
	
	if (btn_vars['type']) {
	
		btn_type = 'btn-' + btn_vars['type'];
	
	}

	
	/* Class */
	
	var btn_class = '';
	
	if (!is_in_dropdown) {
				
		btn_class += 'btn ' + btn_type;
		
	}
	
	if (btn_vars['class']) {
	
		btn_class += ' ' + btn_vars['class'];
	
	}
	
	/* Disabled */
	
	if (btn_vars['disabled']) {
	
		btn_attrs += ' disabled="disabled"';
		btn_class += ' disabled';
	
	}
	
	/* Content */
	
	var btn_content = '';
	
	if (btn_vars['icon'] && !is_in_dropdown) {
		
		btn_content = '<i class="' + btn_vars['icon'] + ' icon-white"></i>';
		
		if (btn_vars['text'] && $(window).height() > 480) {
			
			btn_content += '&nbsp;&nbsp;';
			
		}
	
	}
	
	if ($(window).height() > 480 || is_in_dropdown)
		btn_content += btn_vars['text'];
	
	/* Dropdown Button */
	
	if (is_dropdown) {
		btn_attrs += ' data-toggle="dropdown"';
		btn_class += ' dropdown-toggle';
		btn_content += '&nbsp;&nbsp;<span class="caret"></span>';
	}
	
	/* Build & return button HTML */
	
	btn_html = '<a href="' + btn_vars['href'] + '" class="' + btn_class + '" ow_type="' + btn_type + '"' + btn_attrs + '>' + btn_content + '</a>';
	
	if (is_in_dropdown) {
		
		btn_html = '<li>' + btn_html + '</li>';
		
	}
	
	return btn_html;
	
}

function songFiles_handler(act, tr_id, type) {
	
	var modalid;
	
	/* Set if files are being vuiewed in a modal or inline element */
	switch (type) {
		case 'inline':
		
			modalid = '';
			
		break;
		
		case 'modal':
		default:
		
			modalid	= '#globalModal';
			type	= 'modal'; /* Set type to "modal" by default */
			
		break;
	}
	
	var action  = '/resources/return/files.php';
	
	var $file_tr 	= $('#'+tr_id);
	
	var existing_classes = $file_tr.attr('class');
	var file_name 	= $file_tr.children('.file_name').text();
	var file_type	= $file_tr.attr('fileType');
	var file_ext	= $file_tr.attr('fileExt');
	var file_path	= $file_tr.attr('filePath');
	var song_id		= $file_tr.attr('songId');
	
	if ($file_tr.hasClass('focus') || act == 'details') {
		
		if (file_type==='dir'&&$file_tr.hasClass('dir_loaded')) {
	
			$file_tr.children('td').children('.icon-folder-open').removeClass('icon-folder-open').addClass('icon-folder-close');
			$file_tr.children('td').children('a').children('.icon-chevron-up').removeClass('icon-chevron-up').addClass('icon-chevron-down');
			
			$('.dir_files_'+tr_id).remove();
			$file_tr.removeClass('dir_loaded');
		
		}
		else if (file_type === 'dir') {
			
			if (type=='modal') {
				modal_handler('loader','show', modalid);
			}
			
			ow_ajax(action, { 
				id:			song_id,
				trId:		tr_id,
				type:		type,
				existingClasses: existing_classes,
				fileType:	file_type,
				fileExt:	file_ext,
				filePath: 	file_path,
				fileName:	file_name
			},
			function(data){
			
				if (type=='modal') {
					modal_handler('loader','hide', modalid);
				}
				
				$file_tr.addClass('dir_loaded');
				$file_tr.after(data);
				$file_tr.children('td').children('.icon-folder-close').removeClass('icon-folder-close').addClass('icon-folder-open');
				$file_tr.children('td').children('a').children('.icon-chevron-down').removeClass('icon-chevron-down').addClass('icon-chevron-up');
				
			},function(data){}, {'modalid':modalid});
		
		}
		
	} else {
	
		$('#songfiles_inline_content tr.focus').each(function() {
			
			$(this).removeClass('focus');
			
		})
	
		$file_tr.addClass('focus');
		
		songFiles_header(tr_id);	
		
	}
	
	return true;
	
}

function songFiles_delete(act, file, filepath) {
	
	var modalid = '#globalModal';
	
	switch (act) {
			
		case 'confirm':
		
			modal('Delete File', 'songFiles_delete', 'songFiles_delete', {'modalid':modalid, 'file':file, 'filepath':filepath});
		
		break;
		case 'delete':
		
			modal_handler('loader','show', modalid);
						
			var action 		= '/resources/return/file-actions.php';
		
			ow_ajax(action, {action: "delete", filepath: filepath},
			function(data){
				
				songFiles('Public Files', 'public', 'inline');
				$(modalid).modal('hide');
				
			},function(data){}, {'modalid':modalid});
		
		break;
	
	}
	
}

function songFiles_addDir(act) {
	
	var modalid = '#globalModal';
	
	switch (act) {
			
		case 'confirm':
		
			modal('Add Folder', 'songFiles_addDir', 'songFiles_addDir', {'modalid':modalid});
		
		break;
		case 'addDir':
		
			modal_handler('loader','show', modalid);
						
			var action 		= '/resources/return/file-actions.php';
			var name		= $(modalid+' #addDir_name').val();
		
			ow_ajax(action, {action: "addDir", name: name},
			function(data){
				
				$(modalid).modal('hide');
				
			},function(data){}, {'modalid':modalid});
		
		break;
	
	}
	
}

function jsonDataDecode(jsonDataReturn) {
	
	var r = $.parseJSON(jsonDataReturn);
	
	return r;
	
}

function bootstrap_toggle_fix() {
	
	function updateBtnState(btn, input, updateRadios) {
        btn.toggleClass('active', input.prop('checked'));
        btn.toggleClass('disabled', input.prop('disabled'));
    }

    $(document).live('change', '.btn-toggle input', function(e) {
        var input = $(e.target);
        // radio button that are automatically unchecked dont trigger a change event
        if (input.is(':radio')) {
            var selector = 'input[type="radio"][name="' + input.attr('name') + '"]';
            $(selector).each(function() {
                var input = $(this),
                    btn = input.parents('.btn-toggle');
                updateBtnState(btn, input);
            });
        } else {
            var btn = input.parents('.btn-toggle');
            updateBtnState(btn, input);
        }
    });
    
    $('.btn-toggle').each(function() {
        var btn = $(this),
            input = btn.find('input');
        updateBtnState(btn, input);
    });
	
	/* For that extra help */
	$('.btn-toggle-notice label.btn-toggle').change(function() {
		if ($(this).children().hasClass('orig_check')) {
			$(this).parent().children().removeClass('btn-warning');
			$(this).parent().children('.btn-toggle-notice-revert').remove();
		}
		else {
			$(this).parent().children().addClass('btn-warning');
			$(this).parent().children('.btn-toggle-notice-revert').remove();
			$(this).parent().append('<a class="btn btn-toggle-notice-revert"><i class="icon-remove-circle"></i></a>');
			bootstrap_toggle_notice();
		}
	});
	
}

function bootstrap_toggle_notice() {

	$('.btn-toggle-notice-revert').bind('click', function() {
		
		$(this).parent().children().children().removeAttr('checked');
		$(this).parent().children().removeClass('active');
		$(this).parent().children().removeClass('btn-warning');
		$(this).parent().children().children('.orig_check').attr('checked', 'checked').parent().addClass('active');
		$(this).remove();
	
	});

}


/* USERS */
function userSave() {
    
    var modalid	= '#globalModal';
    
	modal('Saving', 'userSave', 'userSave', {'modalid':modalid}, function() {
	
	    modal_handler('loader','show', modalid);
	
	    var action = '/resources/save/users.php';
	    var userMax = $('input[name=userMax]').val();
	    var userMax2 = parseFloat(userMax) * 2;
	    var serviceId = $('input[name=serviceid]').val();
	    var scheduleEmail = $('input[name=scheduleEmail]:checked').val();
	    var newId = $('input[name=newId]').val();
	    var successful_saves = 0;
	
	    for (i = 1; i <= userMax; i++) {
	    
	        if (i == newId) {
	            var newUser = 'yes';
	            var newUserPassword = $('input[name="newUserPassword' + i + '"]').val();
	        }
	        else {
	            var newUser = '';
	            var newUserPassword = '';
	        }
	
			ow_ajax("/resources/save/users.php", {
				userstable: 'true',
	            userid: $('input[name="userid' + i + '"]').val(),
	            name_first: $('input[name="name_first' + i + '"]').val(),
	            name_last: $('input[name="name_last' + i + '"]').val(),
	            email: $('input[name="email' + i + '"]').val(),
	            send: $('input[name="send' + i + '"]:checked').val(),
	            role: $('input[name="role' + i + '"]:checked').val(),
	            roles: $('input[name="userRoles' + i + '"]').val(),
	            newUser: newUser,
	            newUserPassword: newUserPassword
	        },
			function(data){
				successful_saves++;
				if (successful_saves == userMax) {
					
					$(modalid).modal('hide');
					
					dynamicPage_load('reload');
					
				}
				
			},function(data){}, {'modalid':modalid});
	
	    } /* end for */
    
    });

}

function userDelete(id, name, modalid) {
	
	modal_handler('loader','show', modalid);
	
	ow_ajax("/resources/save/users.php", { userDelete: 'true', id: id, name: name },
	function(data){
		
		$(modalid).modal('hide');
		
		dynamicPage_load('reload');
		
	},function(data){}, {'modalid':'#globalModal'});

}

function newUser(act) {

	userid_new = $('input[name=useridNew]').val();
	
	switch (act) {
		case 'show':
			
			$('input[name=userMax]').val(userid_new);
			$('input[name=newId]').val(userid_new);
			$("#newUserButton").hide();
			
			$("#newUser").show();
			
		break;
		case 'hide':
		
			old_user_max = parseFloat(userid_new) - 1;

			$('input[name=userMax]').val(old_user_max);
			$('input[name=newId]').val('no');
			$("#newUserButton").show();
			
			$("#newUser").hide();

		break;
	}
}

function userRoles(act, usernum, name) {
	
	var modalid		= '#globalModal';
	
	var userid		= $('.users-admin input[name="userid'+usernum+'"]').val();
	
	var roleDataElem = '.users-admin input[name="userRoles'+usernum+'"]';
	
	switch(act) {
	
		case 'edit':
			
			modal('Edit Roles <small>'+name+'</small>', 'userRoles', 'userRoles', {'modalid':modalid, 'usernum':usernum, 'name':name}, function() {
			
			    modal_handler('loader','show', modalid);
						
				var action 		= '/resources/return/users-roles-admin.php';
				var sendData	= $(roleDataElem).val();
			
				ow_ajax(action, {userid: userid, existing_data: sendData},
				function(data){
						
					modal_handler('loader','hide', modalid);
					
					$('#userroles_modal_content').html(data);
					
				},function(data){}, {'modalid':modalid});
				
			});
		
		break;
		case 'save':
			
			var data = JSON.stringify($(modalid+ ' form#user-roles').serializeObject());
			
			$(roleDataElem).val(data);
			
			$(modalid).modal('hide');
			
		break;
		
	}
	
}

function userPassword(act, usernum, name) {
	
	var modalid		= '#globalModal';
	
	var userid		= $('.users-admin input[name="userid'+usernum+'"]').val();
	
	switch(act) {
	
		case 'edit':
			
			modal('Change Password <small>'+name+'</small>', 'userPassword', 'userPassword', {'modalid':modalid, 'usernum':usernum, 'name':name}, function() {});
		
		break;
		case 'save':
			
			ow_ajax("/resources/save/users.php", {
				userPassword: 'true',
	            userid: $('input[name="userid' + usernum + '"]').val(),
	            cpass: $(modalid+' input[name=cpass]').val(),
				pass1: $(modalid+' input[name=pass1]').val(),
				pass2: $(modalid+' input[name=pass2]').val(),
	        },
			function(data){
					
				$(modalid).modal('hide');
				
			},function(data){}, {'modalid':modalid});
			
		break;
		
	}
	
}

function pageLoad() {

	bootstrap_toggle_fix();
    bootstrap_toggle_notice();

}

function dynamicPage() {

	var newHash      = "",
        $mainContent = $("#main-content"),
        $el;

    $(".nav li").not('.dropdown').delegate("a", "click", function() {
        if (!~($(this).attr("href")).indexOf('http://')) {
			window.location.hash = $(this).attr("href");
			return false;
        }
    });

    $(window).bind('hashchange', function(){

        dynamicPage_load('hashchange');

    });

    $(window).trigger('hashchange');
	
} /* dynamicPage() */

function dynamicPage_load(act, callback) {

	if (!callback) { var callback = function(){}; }
	
	var newHash      = "",
        $mainContent = $("#main-content"),
        $el;
	
	newHash = window.location.hash.substring(1);

	currentHash = ""+$('.nav li.active > a').attr('href');
	
	if (newHash.indexOf('siteadmin') != -1 && currentHash.indexOf('siteadmin') == -1) {
		
		console.log(currentHash);
		
		window.location = '/siteadmin/#' + newHash;
		
	}
	else if (newHash.indexOf('siteadmin') == -1 && window.location.pathname.indexOf('siteadmin') != -1) {

		window.location = '/#' + newHash;
		
	}

    if (newHash) {
    	
    	if (newHash!==currentHash) {
    	
        	loading_notice('show', callback);
        	
        	$(".nav li").removeClass("active");
			$('.nav li a[href="'+newHash+'"]').parent().addClass("active");
			$('.nav li a[href="/#'+newHash+'"]').parent().addClass("active");
            $('.nav li a[href="'+newHash+'"]').parent().parent().parent().addClass("active");
	        
	        $.ajax({
            	url: newHash,
            	success: function(data) {
	            	
	            	var live_data = $('<div>',{html:data});
	            	
	            	var data_text = trim($(live_data).text());
	            	
	            	if ( data_text.indexOf('REDIRECT:') === 0 ) {
		            	
		            	window.location = data_text.substring(9);
		            	
		            	return true;
		            	
	            	}
	            	
	            	start = document.title.indexOf('-') + 1;
	            	
	            	if (start == -2) {
		            	start = 0;
		            }
	            	
	            	document.title = $('.nav li a[href="'+newHash+'"]').text() + ' - ' + document.title.substr(start);

            		loading_notice('hide');
					
					ow_ajax_handler('error', 'reset', '#alert-global');
					
					$('#fullPageCarousel').remove();
					
					var subnav_html = live_data.find('#subnav_content').html();
					
					$('.subnav').html(subnav_html);
					
					if (subnav_html) {
						$('.subnav').show();
					}
					else {
						$('.subnav').hide();
					}
					
					live_data.find('#subnav_content').remove();
					var html = live_data.html();
					
					$mainContent.html(html);
					
                    $mainContent.animate({
                        opacity: 1.0
                    }, 0, function() {
                    	pageLoad();
                    	callback();
                    	
                    	try {
					    	custom_pageLoad();
						}
						catch (e) {}
                    	
                    });
            	},
            	error: function(request, status, err) {
            		ow_ajax_handler('error', [request, status, err, false], '#alert-global');
            	}
        	});
		
		}
    }
    
} /* dynamicPage_load() */

$(function() {
	
	dynamicPage();
	
	pageLoad();
	
	try {
    	custom_pageLoad();
	}
	catch (e) {}

});