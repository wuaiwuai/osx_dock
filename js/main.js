
// get position of app
var appWidth = $( '.app' ).width();
var test = $( '.app' ).position().left;
var appCenter = test + (appWidth*.5)

$( '#dock-container' ).mousemove(function(e) {
	var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    $('#debug').html(x +', '+ y);

    var d = x-appCenter;
	// $( '.app' ).stop().transition({ scale: d*2, duration: 0 });
    console.log( d );
    // if (d > 1) {
    // 	$( '.app' ).stop().transition({ scale: d*2, duration: 0 });
    // }

});

// $( '.app' ).on({
// 	mouseenter: function() {
// 		$(this).transition({ scale: 2 });
// 	},
// 	mouseleave: function() {
// 		$(this).stop().transition({ scale: 1 });
// 	}
// });

