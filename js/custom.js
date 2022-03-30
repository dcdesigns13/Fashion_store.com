/*$(document).ready(function() {
    $(".mCustomScrollbar").mCustomScrollbar({axis:"x"});
});*/
$(document).ready(function(){
		$('.aniview').AniView();
	});
	
	$(".showmenu").hover(function () {
		$("#menu").css("-webkit-transform", "rotateY(0deg)");
		$("#menu").css("-moz-transform", "rotateY(0deg)");
		$("#menu").css("-ms-transform", "rotateY(0deg)");
		$("#menu").css("-o-transform", "rotateY(0deg)");
		$("#menu").css("transform","rotateY(0deg)");
		$('body').addClass("activebody");
		$(".navbar-default").css("border-bottom-color","#fff");
		$(".top_bar").css("border-bottom-color","#fff");
		
	}, function() {
		$("#menu").css("-webkit-transform", "rotateY(-30deg) translateX(-100%)");
		$("#menu").css("-moz-transform", "rotateY(-30deg) translateX(-100%)");
		$("#menu").css("-ms-transform", "rotateY(-30deg) translateX(-100%)");
		$("#menu").css("-o-transform", "rotateY(-30deg) translateX(-100%)");
		$("#menu").css("transform","rotateY(-30deg) translateX(-100%)");
		$('body').removeClass("activebody");
		$(".navbar-default").css("border-bottom-color","#e7e7e7");
		$(".top_bar").css("border-bottom-color","#e7e7e7");
	});
<!--quantity box-->
$(function() {
  $('.box').on('click', '.minus', function () {
    var $quantity = $(this).siblings('.quantity'),
        value     = +$quantity.val();
    
    if (value > 1) {
      $quantity.val(value - 1);
    }
  });
  
  $('.box').on('click', '.plus', function () {
    var $quantity = $(this).siblings('.quantity'),
        value     = +$quantity.val();
    
    if (value < 10) {
      $quantity.val(value + 1);
    }
  });
});
<!--quantity box-->

/*Range slider*/
$(document).ready(function() {
	  $(".range-example-input-2").asRange({
		range: true,
		limit: false,
	  });
	});
/*Range slider*/
	
$('.plus_click').click(function(){
	 if($(this).hasClass('add_myclass'))
	 {
	    var id = $(this).attr('id');
	    $('.show_detail_'+id).show();
		$(this).removeClass('add_myclass');
	 }
	 else
	 {
		var id = $(this).attr('id');
	    $('.show_detail_'+id).hide();
		$(this).addClass('add_myclass');
	 }
 });
 
 $(document).on("click",".plus_click",function (){	
		if(!$(this).find("i").hasClass("fa-minus")) {
			//$(this).next().slideDown(200);
			$(".question1").find("i").removeClass("fa-minus").addClass("fa-plus");
			$(this).find("i").removeClass("fa-plus").addClass("fa-minus");
			$(this).parent().next().find("td").slideDown(200);
		} else {
			$(this).parent().next().find("td").slideUp(200);
			$(this).find("i").removeClass("fa-minus").addClass("fa-plus");
		}
	});		
	
 /*---------------------
 Color Scheme Select
--------------------- */
(function ($) {	
	$('.color-scheme-select-btn').on('click', function(){		
		$('.color-scheme-select').toggleClass('color-scheme-select-visible');
	});

	$('.color-scheme-theme-item').on('click', function(e){
		e.preventDefault();
		$('.color-scheme-theme-item').removeClass('color-scheme-theme-selected');
		$(this).addClass('color-scheme-theme-selected');
		var colorLink = $(this).attr('id');
		$('.color-scheme-theme').attr('href', 'css/' + colorLink + '.css');
		$.cookie('color', colorLink);
	});

	$('.color-scheme-content').on('click', function(e){
		e.preventDefault();
		$('.color-scheme-content').removeClass('color-scheme-selected');
		$(this).addClass('color-scheme-selected');
		var colorLink = $(this).attr('id');			
		$.cookie('color', colorLink);
		$('.color-scheme-color').attr('href', 'css/theme/' + colorLink + '.css');
	});
 
})(jQuery); 

jQuery(document).on('ready', function() {
	if (jQuery.cookie('color') != null) {
		var id=$.cookie('color');
		$('.color-scheme-content').removeClass('color-scheme-selected');
		$('#'+id).addClass('color-scheme-selected');
		$('.color-scheme-color').attr('href', 'css/theme/' + id + '.css');
         //$this.setColor($.cookie('color'));
	}
});



