
// get width, position, and center point of each app
var appArray = $('.app');
var appWidth = $('.app').width();

// get screen width
var windowWidth = $(window).width();

$( '#dock-container' ).mousemove(function(e) {
	var x = e.pageX - this.offsetLeft;

    appArray.each(function(i) {
		var appPos = appArray.eq(i).position().left;
		var appCenter = appPos + (appWidth*.5);

		// get distance from App icon
		var d = Math.abs(x-appCenter);

		// set the number of pixels the animation will play over
		var range = 360;

	    // height
	    var heightFactor = 100;
	    var heightValue = (1-(d/range))*heightFactor;
	    if (heightValue > 90) {
	    	heightValue = 90;
	    }
	    if (heightValue < appWidth) {
	    	heightValue = appWidth;
	    }

	    // width
	    var widthFactor = 100;
	    var widthValue = (1-(d/range))*widthFactor;
	    if (widthValue > 90) {
	    	widthValue = 90;
	    }
	    if (widthValue < appWidth) {
	    	widthValue = appWidth;
	    }

	    appArray.eq(i).css({
	    	transformOrigin: '50% 100%',
	    	height: Math.floor(heightValue) + 'px',
	    	width: Math.floor(widthValue) + 'px'
	    });

	    $('#debug').html("d: " + d + "<br>marginValue: " + heightValue);
	});

});

// $('#dock-container').on({
// 	mouseenter: function() {
// 		$('.dock-inner-container').transition({ 'min-width': '40%' });
// 	},
// 	mouseleave: function() {
// 		$('.dock-inner-container').transition({ 'min-width': '20%' });
// 	}
// });

$('#dock-container').on({
	mouseleave: function() {
		appArray.each(function(i) {
			appArray.eq(i).css({
		    	height: appWidth + 'px',
		    	width: appWidth + 'px'
		    });
		});
	}
});
