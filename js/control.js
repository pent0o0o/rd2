// JavaScript Document
var typed = new Typed('.element', {
               	strings: ["Web Designer.", "Code Developer.","Apps Designer.","Film Maker"],
       	 	typeSpeed:40,
        		backSpeed:40,
        		loop:true,
        		});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});

  AOS.init();