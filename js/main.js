
// get position of app
var appWidth = $( '.app' ).width();
var test = $( '.app' ).position().left;
console.log(test + (appWidth*.5));

$( '#dock-container' ).mousemove(function(e) {
	var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    $('#debug').html(x +', '+ y);
});

// $( '.app' ).on({
// 	mouseenter: function() {
// 		$(this).transition({ scale: 2 });
// 	},
// 	mouseleave: function() {
// 		$(this).stop().transition({ scale: 1 });
// 	}
// });

