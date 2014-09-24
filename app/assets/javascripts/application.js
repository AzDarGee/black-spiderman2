// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require jquery.turbolinks
//= require turbolinks
//= require masonry/jquery.masonry
//= require masonry/jquery.imagesloaded.min

//= require_tree .

$(document).on('page:load',function() {

 //    var origHeight = $("div").outerHeight(true);

	// $("div").hover(function(e){
	//     $(this).stop().animate({
	//         height: e.type === "mouseenter" ? $(window).height() : origHeight
	//     });
	// });



	//Top navbar fixed

	// var smallWindow = false;

	// $(window).scroll(function() {
	// 	var scroll = $(window).scrollTop();

	// 	if (scroll >= 50) {
	// 		//$('#logo-image').attr('src', 'img/Acme_Monogram_Colour.png')
	// 		$(".important-class").addClass("padding-on-my-header");
	// 	}
	// 	if (scroll < 50) {
	// 		$(".important-class").removeClass("padding-on-my-header");
	// 		//$('#logo-image').attr('src', 'img/Acme_Colour.png')
	// 	}
	// }).resize(function(){
	// 	if ( !smallWindow && this.innerWidth <= 1024 ) {
	// 		smallWindow = true;
	// 		$('.top-bar-section').find('ul.right').hide(0).delay(500).show(0);
	// 	}
	// 	if ( smallWindow && this.innerWidth > 1024 ) {
	// 		smallWindow = false;
	// 	}
	// });

	// var columns    = 3,
 //        setColumns = function() { columns = $( window ).width() > 640 ? 3 : $( window ).width() > 320 ? 2 : 1; };
 
 //    setColumns();
 //    $( window ).resize( setColumns );
 
 //    $( '#list' ).masonry(
 //    {
 //        itemSelector: '.card',
 //        columnWidth:  function( containerWidth ) { return containerWidth / columns; }
 //    });


// $(function() {
//   return $('#list').imagesLoaded(function() {
//     return $('#list').masonry({
//       itemSelector: '.card',
//       isFitWidth: true
//     });
//   });
// });


});