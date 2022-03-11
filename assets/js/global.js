/*! global.js | Friendkit | © Css Ninja. 2019-2020 */
"use strict";function changeDemoImages(){$("*[data-demo-src]").each((function(){var t=$(this).attr("data-demo-src");$(this).attr("src",t)})),$("*[data-demo-background]").each((function(){var t=$(this).attr("data-demo-background");$(this).attr("data-background",t)}))}function changeDemoHrefs(){$("*[data-demo-href]").each((function(){var t=$(this).attr("data-demo-href");$(this).attr("href",t)}))}function initBgImages(){$(".has-background-image").length&&$(".has-background-image").each((function(){var t=$(this).attr("data-background");void 0!==t&&$(this).css("background-image","url("+t+")")}))}function setThemeToLocalStorage(t){window.localStorage.setItem("theme",t),$("#friendkit-demo-landing").length||("dark"===t?$("body").addClass("is-dark"):$("body").removeClass("is-dark"))}function toggleTheme(){var t=window.localStorage.getItem("theme");console.log(t),null!=t&&null!=t&&(setThemeToLocalStorage(t),"dark"===t&&$(".theme-toggle input").prop("checked",!0),$(document).trigger("themeChange",t)),$(".theme-toggle input").on("change",(function(){!0===$(this).prop("checked")?(console.log("checked"),setThemeToLocalStorage("dark"),$(".theme-toggle input").prop("checked",!0),$(document).trigger("themeChange","dark")):(setThemeToLocalStorage("light"),$(".theme-toggle input").prop("checked",!1),$(document).trigger("themeChange","light"))}))}function initPageloader(){$(".pageloader").length&&($(".pageloader").toggleClass("is-active"),$(window).on("load",(function(){var t=setTimeout((function(){$(".pageloader").toggleClass("is-active"),$(".infraloader").toggleClass("is-active"),clearTimeout(t)}),700);if($("#main-feed").length)var o=setTimeout((function(){$("#shadow-dom").remove(),$(".true-dom").removeClass("is-hidden"),clearTimeout(o)}),2500);if($(".questions-wrap").length)o=setTimeout((function(){$("#questions-shadow-dom-settings, #questions-shadow-dom-single, #questions-shadow-dom-home, #questions-shadow-dom-stats, #questions-shadow-dom-categories").remove(),$(".true-dom").removeClass("is-hidden"),clearTimeout(o)}),2500)})))}function initSuggestionSearch(){$("#tipue_drop_input, #tipue_drop_input_mobile").tipuedrop()}function initNavDropdowns(){$(".drop-trigger").click((function(){$(".nav-drop").removeClass("is-active"),$(this).find(".nav-drop").addClass("is-active"),$(this).hasClass("is-account")&&$(this).addClass("is-opened")})),$(document).click((function(t){var o=t.target;$(o).is(".nav-drop")||$(o).parents().is(".drop-trigger")||($(".nav-drop").removeClass("is-active"),$(".is-account").removeClass("is-opened"))}))}function initNavbarCart(){$(".is-cart .cart-button").on("click",(function(){$(this).closest(".is-cart").find(".shopping-cart").addClass("is-active"),setTimeout((function(){$(".navbar-cart-loader").removeClass("is-active")}),800)})),$(document).click((function(t){var o=t.target;$(o).is(".is-cart .cart-button")||$(o).parents().is(".is-cart")||($(".shopping-cart").removeClass("is-active"),setTimeout((function(){$(".navbar-cart-loader").addClass("is-active")}),300))}))}function initDropdowns(){$(".dropdown-trigger").click((function(){$(".dropdown-trigger").removeClass("is-active"),$(this).addClass("is-active")})),$(document).click((function(t){var o=t.target;$(o).is(".dropdown-trigger img")||$(o).parents().is(".dropdown-trigger")||$(".dropdown-trigger").removeClass("is-active")}))}function initTabs(){$(".nav-tabs-wrapper ul li").on("click",(function(){var t=$(this).attr("data-tab");$(this).siblings("li").removeClass("is-active"),$(this).closest(".nav-tabs-wrapper").children(".tab-content").removeClass("is-active"),$(this).addClass("is-active"),$("#"+t).addClass("is-active")}))}function initModals(){$(".modal-trigger").length&&($(".modal-trigger").on("click",(function(){var t=$(this).attr("data-modal");$("#"+t).toggleClass("is-active")})),$(".modal-close, .close-modal").on("click",(function(){$(".modal.is-active").removeClass("is-active")})))}function initEmojiPicker(){var t=0;$(".post-comment.has-emojis").each((function(){t+=1;var o=$(this),i=o.find(".card-footer"),e=o.find("textarea"),s=o.find(".is-emoji");i.attr("id","post-comment-wrapper-"+t),e.attr("id","post-comment-textarea-"+t),s.attr("id","post-comment-button-"+t);var a=document.getElementById("post-comment-wrapper-"+t),n=document.getElementById("post-comment-textarea-"+t),c=document.getElementById("post-comment-button-"+t),r=new EmojiButton({position:"top-end",rootElement:a,autoHide:!1});r.on("emoji",(function(t){n.value+=t,n.dispatchEvent(new Event("keyup"))})),c.addEventListener("click",(function(){r.pickerVisible?r.hidePicker():r.showPicker(c)}))}))}function initLightboxEmojis(){var t=0;$(".has-lightbox-emojis").each((function(){t+=1;var o=$(this),i=o.find(".controls-inner"),e=o.find("textarea"),s=o.find(".emoji-button");i.attr("id","lightbox-post-comment-wrapper-"+t),e.attr("id","lightbox-post-comment-textarea-"+t),s.attr("id","lightbox-post-comment-button-"+t);var a=document.getElementById("lightbox-post-comment-wrapper-"+t),n=document.getElementById("lightbox-post-comment-textarea-"+t),c=document.getElementById("lightbox-post-comment-button-"+t),r=new EmojiButton({position:"top-end",rootElement:a,autoHide:!1});r.on("emoji",(function(t){n.value+=t,n.dispatchEvent(new Event("keyup"))})),c.addEventListener("click",(function(){r.pickerVisible?r.hidePicker():r.showPicker(c)}))}))}function initVideoEmbed(){$("#video-embed").length&&embedVideo("#video-embed")}function initLikeButton(){$(".like-button").on("click",(function(){$(this).toggleClass("is-active")}))}function initLoadMore(){var t;$(".load-more-button").on("click",(function(o){o.preventDefault(),clearTimeout(t),$(this).toggleClass("loading"),t=setTimeout((function(){$(".load-more-button").removeClass("loading")}),2500)}))}function initPostComments(){$(".fab-wrapper.is-comment, .close-comments").on("click",(function(t){$(this).addClass("is-active").closest(".card").find(".content-wrap, .comments-wrap").toggleClass("is-hidden");var o=$(this).closest(".is-post"),i=$(o).offset();console.log(i),$("html, body").stop().animate({scrollTop:i.top-70},500),t.preventDefault(),setTimeout((function(){$(".emojionearea-editor").val("")}),400)}))}function initSimplePopover(){$(".has-tip").webuiPopover({trigger:"hover",placement:"auto",width:300,padding:!1,offsetLeft:0,offsetTop:0,animation:"pop",cache:!1})}function initTooltips(){$(".has-tooltip").ggtooltip({html:!0,textcolor:"#fff",backcolor:"#444",bordercolor:"#444"})}function initUsersAutocomplete(){if($("#users-autocpl").length){var t="",o="",i={url:"assets/data/api/users/user-autocpl.json",getValue:"name",template:{type:"custom",method:function(t,o){return"<div class=template-wrapper><div class=avatar-wrapper><img class=autocpl-avatar src='"+o.pic+"' /><img class=avatar-badge src='"+o.badge+"' /></div><div class=entry-text>"+t+"<br><span>"+o.location+"</span></div></div> "}},highlightPhrase:!1,list:{maxNumberOfElements:5,showAnimation:{type:"fade",time:400,callback:function(){}},match:{enabled:!0},onChooseEvent:function(){var i=$("#users-autocpl").val();$("#users-autocpl").val(""),t='\n                        <div class="control tag-control">\n                            <div class="tags has-addons">\n                                <a class="tag is-link">'+i+'</a>\n                                <a class="tag is-delete is-inverted"></a>\n                            </div>\n                        </div>\n                    ',o='\n                        <span class="tagged-friend"><small>&mdash; with</small> <a class="is-inverted" href="#">'+i+"</a>,</span>\n                    ",$.when($("#tag-list").append(t)).done((function(){$("#options-summary").append(o),$(".tag.is-delete").on("click",(function(){var t=$(this).closest(".tags").find(".tag.is-link").text();$(this).closest(".tag-control").remove(),$(".tagged-friend a").each((function(){var o=$(this).text();if(t!==o)return!1;$(this).closest(".tagged-friend").remove()}))}))}))}}};$("#users-autocpl").easyAutocomplete(i)}}function initKSelect(){$(".custom-select").on("click",(function(){$(this).toggleClass("is-active")})),$(document).click((function(t){var o=t.target;$(o).is(".custom-select")||$(o).parents().is(".control")||$(".custom-select").removeClass("is-active")})),$(".custom-select input").on("change",(function(){var t=$(this).siblings(".option-meta").find("span").text();$(this).closest(".custom-select").find(".select-box span").html(t)}))}function initComboBox(){$(".is-combo .combo-box").on("click",(function(){$(this).toggleClass("is-active")})),$(".combo-box .box-dropdown li").on("click",(function(t){var o=t.target,i=$(this).find(".item-icon i").attr("class"),e=$(this).find(".item-icon i"),s=(i=$(this).find(".item-icon i").attr("class"),$(this).find(".item-icon").html()),a=$(this).find(".item-name").text(),n='<i class="'+i+'"></i>';console.log(s),$(o).is(".box-dropdown li, body")||$(o).parents().is(".box-dropdown")||$(".box-dropdown").removeClass("is-active"),$(o).is("body")&&$(".box-dropdown").removeClass("is-active"),$(this).siblings("li.is-active").removeClass("is-active"),$(this).addClass("is-active"),e.length?($(this).closest(".combo-box").find(".combo-item i").remove(),$(this).closest(".combo-box").find(".combo-item svg").remove(),$(this).closest(".combo-box").find(".combo-item").prepend(n),$(this).closest(".combo-box").find(".combo-item .selected-item").text(a)):($(this).closest(".combo-box").find(".combo-item i").remove(),$(this).closest(".combo-box").find(".combo-item").prepend(s),$(this).closest(".combo-box").find(".combo-item .selected-item").text(a))})),$(document).click((function(t){var o=t.target;$(o).is(".combo-box")||$(o).parents().is(".is-combo")||$(".combo-box").removeClass("is-active")}))}function initImageComboBox(){$(".is-combo .image-combo-box").on("click",(function(){$(this).toggleClass("is-active")})),$(".image-combo-box .box-dropdown li").on("click",(function(t){var o=t.target,i=$(this).find(".item-icon img").attr("src"),e=$(this).find(".item-name").text();$(o).is(".box-dropdown li, body")||$(o).parents().is(".box-dropdown")||$(".box-dropdown").removeClass("is-active"),$(o).is("body")&&$(".box-dropdown").removeClass("is-active"),$(this).siblings("li.is-active").removeClass("is-active"),$(this).addClass("is-active"),$(this).closest(".image-combo-box").find(".combo-item img").attr("src",i),$(this).closest(".image-combo-box").find(".combo-item .selected-item").text(e)})),$(document).click((function(t){var o=t.target;$(o).is(".image-combo-box")||$(o).parents().is(".is-combo")||$(".image-combo-box").removeClass("is-active")}))}function initUserComboBox(){$(".is-combo .user-combo-box").on("click",(function(){$(this).toggleClass("is-active")})),$(".user-combo-box .box-dropdown li").on("click",(function(t){var o=t.target,i=$(this).find(".item-icon .avatar").attr("src"),e=$(this).find(".item-icon .badge").attr("src"),s=$(this).find(".item-name").text();$(o).is(".box-dropdown li, body")||$(o).parents().is(".box-dropdown")||$(".box-dropdown").removeClass("is-active"),$(o).is("body")&&$(".box-dropdown").removeClass("is-active"),$(this).siblings("li.is-active").removeClass("is-active"),$(this).addClass("is-active"),$(this).closest(".user-combo-box").find(".combo-item .avatar").attr("src",i),$(this).closest(".user-combo-box").find(".combo-item .badge").attr("src",e),$(this).closest(".user-combo-box").find(".combo-item .selected-item").text(s)}))}function initStackedComboBox(){$(".is-combo .stacked-combo-box").on("click",(function(){$(this).toggleClass("is-active")})),$(".stacked-combo-box .box-dropdown li").on("click",(function(t){var o=t.target,i=$(this).find(".item-icon img").attr("src"),e=($(this).find(".item-name").text(),$(this).attr("data-skill")),s='\n            <img id="'+e+'" class="is-stacked" src="'+i+'">\n        ';$(o).is(".box-dropdown li, body")||$(o).parents().is(".box-dropdown")||$(".box-dropdown").removeClass("is-active"),$(o).is("body")&&$(".box-dropdown").removeClass("is-active"),$(this).toggleClass("is-active"),console.log(s),0==$(".stacked-combo-box li.is-active").length?($("#"+e).remove(),$("#skill-placeholder").removeClass("is-hidden"),$(this).closest(".stacked-combo-box").find(".selected-item").text("Select one or more skills")):($("#skill-placeholder").addClass("is-hidden"),$(this).closest(".stacked-combo-box").find(".selected-item").text(""),$("#"+e).length?$("#"+e).remove():$(this).closest(".stacked-combo-box").find(".combo-item").prepend(s))}))}function initBigComboBox(){$(".big-combo-box").on("click",(function(){$(this).toggleClass("is-active")})),$(".big-combo-box .box-dropdown li").on("click",(function(t){var o=t.target,i=$(this).find(".item-icon i").attr("class"),e=$(this).find(".item-name span:first-child").text(),s=$(this).find(".item-name span:nth-child(2)").text();$(o).is(".box-dropdown li, body")||$(o).parents().is(".box-dropdown")||$(".box-dropdown").removeClass("is-active"),$(o).is("body")&&$(".box-dropdown").removeClass("is-active"),$(this).siblings("li.is-active").removeClass("is-active"),$(this).addClass("is-active"),$(this).closest(".big-combo-box").find(".combo-item i").attr("class",i),$(this).closest(".big-combo-box").find(".combo-item .selected-item").text(e),$(this).closest(".big-combo-box").find(".combo-item .selected-desc").text(s)}))}function initTextFilter(){var t;t=$(".textFilter-input").val(),$(".textFilter-input").focus((function(o){$(this).val()===t&&$(this).val("")})).blur((function(o){""===$(this).val()&&$(this).val(t)})).keyup((function(t){var o=$(this).val().toLowerCase().split(" ");if(o.length&&($(".textFilter-target").hide().removeClass("is-match").addClass("is-not-match").filter((function(){for(var t=$(this).find(".textFilter-match").text().toLowerCase(),i=0;i<o.length;i++)if(-1===t.indexOf(o[i]))return!1;return!0})).show().removeClass("is-not-match").addClass("is-match"),$("#friends-page").length)){var i=$(".card-row-wrap.is-active").find(".friend-card.is-match").length;console.log(i),0==i?($(".card-row-wrap.is-active").find(".card-row").addClass("is-hidden"),$(".card-row-wrap.is-active").find(".card-row-placeholder").removeClass("is-hidden")):($(".card-row-wrap.is-active").find(".card-row-placeholder").addClass("is-hidden"),$(".card-row-wrap.is-active").find(".card-row").removeClass("is-hidden"))}}))}function initShareModal(){$(".small-fab.share-fab").on("click",(function(){var t=$(this),o=t.closest(".is-post").find(".post-image img").attr("src"),i=t.closest(".is-post").find(".user-block .image img").attr("src"),e=t.closest(".is-post").find(".post-text > p").html();void 0!==o?$("#share-modal-image").attr("src",o).removeClass("is-hidden"):$("#share-modal-image").addClass("is-hidden"),$("#share-modal-avatar").attr("src",i),$("#share-modal-text").html(e)}))}function initAboutGlider(){$(".about-glider").each((function(){if($(this).is(":visible")){var t=$(this).attr("id");new Glider(document.querySelector("#"+t),{slidesToShow:3,slidesToScroll:3,dots:"#slider-dots-"+t,draggable:!0,responsive:[{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,itemWidth:150,duration:.25}},{breakpoint:300,settings:{slidesToShow:1,slidesToScroll:1,duration:.25}}]})}}))}var toasts={};toasts.service={info:function(t,o,i,e,s){iziToast.show({class:"toast",icon:o,title:t,message:i,titleColor:"#fff",messageColor:"#fff",iconColor:"#fff",backgroundColor:"#0062ff",progressBarColor:"#bc7aff",position:e,transitionIn:"fadeInDown",close:!1,timeout:s,zindex:99999})},success:function(t,o,i,e,s){iziToast.show({class:"toast",icon:o,title:t,message:i,titleColor:"#fff",messageColor:"#fff",iconColor:"#fff",backgroundColor:"#0062ff",progressBarColor:"#fafafa",position:e,transitionIn:"fadeInDown",close:!1,timeout:s,zindex:99999})},error:function(t,o,i,e,s){iziToast.show({class:"toast",icon:o,title:t,message:i,titleColor:"#fff",messageColor:"#fff",iconColor:"#fff",backgroundColor:"#ff533d",progressBarColor:"#fff",position:e,transitionIn:"fadeInDown",close:!1,timeout:s,zindex:99999})}};