!function(n){function e(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,a){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:a})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=40)}({12:function(n,e,t){"use strict";function a(){swal({title:"Export to HTML",text:"Export template to single HTML file",type:"info",showCancelButton:!0,showLoaderOnConfirm:!0},function(){setTimeout(function(){swal("Template has been exported successfully"),$('#export-form [name="type"]').val("html"),$("#export-form").submit()},1e3)})}function o(){swal({title:"Export to ZIP",text:"Export template to zip-archive",type:"info",showCancelButton:!0,showLoaderOnConfirm:!0},function(){setTimeout(function(){swal("Template has been exported successfully"),$('#export-form [name="type"]').val("zip"),$("#export-form").submit()},1e3)})}function i(){var n=$("#campaignmodal");return $.fancybox.open({src:"#campaignmodal",type:"inline",opts:{afterShow:function(){$(".modal-btn-cancel",n).off("click"),$(".modal-btn-ok",n).off("click"),$(".modal-btn-cancel",n).on("click",function(n){$.fancybox.close()}),$(".modal-btn-ok",n).on("click",function(n){var e="Save"+($("input[name=send_campaign]").is(":checked")?" and send":"")+" campaign?";swal({title:e,type:"info",showCancelButton:!0,closeOnConfirm:!1,showLoaderOnConfirm:!0},function(){var n=[];$(".list_ids:checked").each(function(){n.push(this.value)});var e=new Date,t=0==$("input[name=subject]").val().length?"Campaign - "+e.toLocaleString():$("input[name=subject]").val();$.ajax({url:"_ajax.php",type:"POST",dataType:"json",data:{process_campaign:1,from_name:$("input[name=from_name]").val(),from_email:$("input[name=from_email]").val(),reply_to:$("input[name=reply_to]").val(),subject:t,plain_text:$("input[name=plain_text]").val(),html_text:$("#templateHTML").val(),brand_id:$("#brand_id").val(),send_campaign:$("input[name=send_campaign]").is(":checked")?1:0,list_ids:n,query_string:$("input[name=query_string]").val()},success:function(n){if("success"==n.type){var e=n.message;!0===e.status&&$.ajax({url:"_ajax.php",type:"POST",dataType:"json",data:{get_latest_campaign:1,brand_id:$("#brand_id").val()},success:function(t){"success"==n.type?(swal({title:"Success",text:e.message,type:"success",confirmButtonText:"Go to campaign page",showCancelButton:!0,closeOnConfirm:!1,showLoaderOnConfirm:!0},function(n){n&&(window.location.href="https://emailcampaign.me/send-to?i="+t.app+"&c="+t.id)}),$("input[name=brand_id]").val(""),$("input[name=from_name]").val(""),$("input[name=from_email]").val(""),$("input[name=reply_to]").val(""),$("input[name=subject]").val(""),$("input[name=plain_text]").val(""),$("input[name=send_campaign]").prop("checked",!1),$("input[name=query_string]").val(""),$.fancybox.close()):swal("Error",e.message,"error")},error:function(n,e){}})}},error:function(n,e){}})})})}}}),!1}function c(){return $.fancybox.open({src:"#sendyhelpers",type:"inline"}),!1}window.top.jsEmailBuilderEmitter.on("init",function(){$('[data-action="export-html"]').on("click",function(n){a()}),$('[data-action="export-zip"]').on("click",function(n){o()}),$('[data-action="campaign-settings"]').on("click",function(n){i()}),$('[data-action="sendy-helpers"]').on("click",function(n){c()}),$('[data-action="expand-account"]').on("click",function(n){var e=this;$(e).closest(".nav-item").find(".subnav").slideToggle()}),$("#brand_id").on("change",function(n){var e=this.value;$.ajax({url:"_ajax.php",type:"POST",dataType:"json",data:{get_lists:1,brand_id:e},success:function(n){if("success"!=n.type)$("#subscribers-list-container").html(n.message);else{var e=n.message,t="";e instanceof Array?$.each(e,function(n,e){t+='<label><input class="list_ids" type="checkbox" name="list_ids[]" value="'+e.id+'">'+e.name+"</label>"}):t=e,$("#subscribers-list-container").html(t)}},error:function(n,e){}}),$.ajax({url:"_ajax.php",type:"POST",dataType:"json",data:{get_brand_info:1,brand_id:e},success:function(n){if("success"==n.type){var e=n.message;$("input[name=from_name]").val(e.from_name),$("input[name=from_email]").val(e.from_email),$("input[name=reply_to]").val(e.reply_to)}},error:function(n,e){}})})})},40:function(n,e,t){n.exports=t(12)}});