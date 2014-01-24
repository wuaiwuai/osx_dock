
// get width, position, and center point of each app
var appArray = $('.app');
var appWidth = $('.app').width();
var appHeight = $('.app').width();

// get screen width
var windowWidth = $(window).width();

$( '#dock-container' ).mousemove(function(e) {
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;

    appArray.each(function(i) {
		var appLeftPos = appArray.eq(i).position().left;
		var appHorizontalCenter = appLeftPos + (appWidth*.5);

		var appTopPos = appArray.eq(i).position().top;
		var appVerticalCenter = appTopPos + (appHeight*.5);

		// get horizontal distance from App icon
		var xd = Math.abs(x-appHorizontalCenter);

		// get vertical distance from App icon
		var yd = Math.abs(y-appVerticalCenter);

		// set the number of pixels the animation will play over
		var range = 360;

	    // height
	    var heightFactor = 100;
	    var heightValue = (1-(xd/range))*heightFactor;
	    if (heightValue > 90) {
	    	heightValue = 90;
	    }
	    if (heightValue < appWidth) {
	    	heightValue = appWidth;
	    }

	    // width
	    var widthFactor = 100;
	    var widthValue = (1-(xd/range))*widthFactor;
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

	    $('#debug').html("y: " + y + "yd: " + yd);
	});

});

$('.app-inner-container').on({
	mouseenter: function() {
		$(this).children('.title').show();
	},
	mouseleave: function() {
		$(this).children('.title').hide();
	}
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
