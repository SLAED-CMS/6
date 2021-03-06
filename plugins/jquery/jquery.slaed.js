// jQuery call plug-ins
$(document).ready(function() {
	// Fancybox
	$('.screens').fancybox();
	$('.site-link').fancybox();
	// Table sorter 
	$('.sl_table_list_sort').tablesorter();
});

// jQuery image replace
$(function() {
	$("#img_replace").change(function() {
		var str = $(this).val();
		$("#picture").attr("src", str);
	});
});

// jQuery close or open elements and save cookies
$(function() {
	for (i = 0; i < 10; i++) {
		obj = 'sl_close_' + i;
		id = '#' + obj;
		if ($.cookie(obj) == '0') {
			$(id).css({'display' : 'none'});
		} else {
			$(id).css({'display' : 'block'});
		}
	}
});
$(function() {
	for (i = 0; i < 100; i++) {
		obj = 'sl_open_' + i;
		id = '#' + obj;
		if ($.cookie(obj) == '1') {
			$(id).css({'display' : 'block'});
		} else {
			$(id).css({'display' : 'none'});
		}
	}
});
function CloseOpen(obj, path) {
	var cname = obj;
	var cvalue = '';
	var cexpires = 30;
	var cpath = (path) ? location.pathname + location.search : '';
	var cdomain = location.host;
	var obj = '#' + obj;
	if ($(obj).css('display') == 'none') {
		$(obj).animate({height: 'show'}, 400);
		cvalue = 1;
	} else {
		$(obj).animate({height: 'hide'}, 200);
		cvalue = 0;
	}
	$.cookie(cname, cvalue, {expires: cexpires, path: cpath, domain: cdomain});
}

// jQuery display or hide elements
function HideShow(obj, eff, opt, dur) {
	// Set the effect type (type: blind, bounce, clip, drop, explode, fold, highlight, puff, pulsate, scale, shake, size, slide)
	var effect = (eff) ? eff : 'blind';
	// Set the options for the effect type chosen (type: right, left, up, down)
	var options = (opt) ? opt : 'left';
	// Set the duration (default: 400 milliseconds)
	var duration = (dur) ? dur : 400;
	$('#' + obj).toggle(effect, {direction: options}, duration);
}

// jQuery scroll top
function Upper(obj, dur) {
	var duration = (dur) ? dur : 200;
	$(obj).animate({scrollTop: 0}, duration);
	return false;
}

// jQuery UI tabs and cookies
$(function() {
	var obj = '';
	var cname = 'sl_tabs';
	var cvalue = '';
	var cexpires = 30;
	var cpath = location.pathname + location.search;
	var cdomain = location.host;
	for (i = 0; i < 10; i++) {
		obj = '#sl_tabs_' + i;
		$(obj).tabs({
			active: ($.cookie(cname) || 0),
			activate: function (event, ui) {
				cvalue = ui.newTab.parent().children().index(ui.newTab);
				$.cookie(cname, cvalue, {expires: cexpires, path: cpath, domain: cdomain});
			}
		});
	}
});

// jQuery UI tabs and cookies
/*
$(function() {
	var cname = 'sl_tabs';
	var cvalue = '';
	var cexpires = 30;
	var cpath = location.pathname + location.search;
	var cdomain = location.host;
	$('#sl_tabs').tabs({
		active: ($.cookie(cname) || 0),
		activate: function (event, ui) {
			var cvalue = ui.newTab.parent().children().index(ui.newTab);
			$.cookie(cname, cvalue, {expires: cexpires, path: cpath, domain: cdomain});
		}
	});
});
*/

// jQuery checkbox
function CheckBox(id, clas) {
	if ($(id).prop('checked')) {
		$(clas).prop('checked', true);
	} else {
		$(clas).prop('checked', false);
	}
}

// jQuery AJAX loading
function AjaxLoad(typ, ld, obj, adata, acheck) {
	if (typ == 'POST') {
		var form = $('#form' + obj)[0];
		var fdata = $(form).serialize();
		if (acheck != '') {
			var info = '';
			var nfound = 0;
			var elements = fdata.split('&');
			for (i = 0; i < elements.length; i++) {
				var svars = elements[i].split('=');
				for (var x in acheck) {
					if (svars[0] == x && svars[1] != '') {
						info = '';
						nfound = 1;
						break;
					} else {
						info = acheck[x];
					}
				}
			}
			if (info != '' && nfound != 1) {
				alert (info);
				return;
			}
		}
		var adata = (adata) ? adata + '&' + fdata : fdata;
	} else if (typ == 'GET') {
		var adata = adata;
	}
	if (ld == '1') {
		$('#rep' + obj).html('<span class="sl_loading"></span>');
	}
	if (typ == 'POST' || typ == 'GET') {
		$.ajax({
			type: typ,
			url: 'index.php',
			data: adata,
			cache: false,
			success: function(data) {
				$('#rep' + obj).fadeOut(250, function() {
					$(this).html(data);
					$(this).fadeIn(250);
				});
			}
		});
	}
}

// jQuery translator
function TranslateLang(input, output, lang, info, key) {
	var text = $('input.' + input).val();
	if (text) {
		$.getJSON('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + key + '&lang=' + lang, {
			text: text
		}, function (data) {
			$('input.' + output).fadeOut(250, function() {
				$(this).val(data.text);
				$(this).fadeIn(250);
			});
		});
	} else {
		alert(info);
	}
}