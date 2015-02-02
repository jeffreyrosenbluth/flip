var players = ['#p1', '#p2', '#p3', '#p4', '#p5', '#p6', '#p7', '#p8'
	      ,'#p9', '#p10', '#p11', '#p12', '#p13', '#p14', '#p15', '#p16'];

var cells = ['#cell1', '#cell2', '#cell3', '#cell4', '#cell5', '#cell6'
	    ,'#cell7', '#cell8', '#cell9', '#cell10','#cell11','#cell12'
	    ,'#cell13', '#cell14', '#cell15', '#cell16'];

function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function active(array) {
    return array.filter(function(x){return ($(x).text() !== "");});
}

var order = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

var anims = shuffle(
            ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
	     'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig',
	     'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig',
	     'flipOutX', 'flipOutY', 'lightSpeedOut',
	     'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
	     'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutRight', 'zoomOutUp',
	     'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp']);

var winner = shuffle(['bounce', 'flash', 'flip', 'rubberBand', 'shake', 'swing', 'tada', 'wobble']);

function addAnimation(elem, anim) {
    return function () {
	$(elem).addClass('animated ' + anim);
    }
};

// Why doesn't this work ???
// for (var k = 0; k < 16; k++) {
//     $(players[k]).keyup(function() {$(cells[k]).text($(this).val());});
// }
$("#p1" ).keyup(function() {$("#cell1" ).text($(this).val());});
$("#p2" ).keyup(function() {$("#cell2" ).text($(this).val());});
$("#p3" ).keyup(function() {$("#cell3" ).text($(this).val());});
$("#p4" ).keyup(function() {$("#cell4" ).text($(this).val());});
$("#p5" ).keyup(function() {$("#cell5" ).text($(this).val());});
$("#p6" ).keyup(function() {$("#cell6" ).text($(this).val());});
$("#p7" ).keyup(function() {$("#cell7" ).text($(this).val());});
$("#p8" ).keyup(function() {$("#cell8" ).text($(this).val());});
$("#p9" ).keyup(function() {$("#cell9" ).text($(this).val());});
$("#p10").keyup(function() {$("#cell10").text($(this).val());});
$("#p11").keyup(function() {$("#cell11").text($(this).val());});
$("#p12").keyup(function() {$("#cell12").text($(this).val());});
$("#p13").keyup(function() {$("#cell13").text($(this).val());});
$("#p14").keyup(function() {$("#cell14").text($(this).val());});
$("#p15").keyup(function() {$("#cell15").text($(this).val());});
$("#p16").keyup(function() {$("#cell16").text($(this).val());});

for (var i = 0; i < 16; i++) {
    $(cells[i]).css('-webkit-animation-duration', '2s');
}

function play() {
    var ps = active(cells);
    count = ps.length;
    if (count < 2) { return; }
    $(cells[order[0]]).addClass('animated ' + anims[order[0]])
        .one('webkitAnimationEnd', addAnimation(cells[order[1]], anims[order[1]]))
    for (var i = 1; i < 14; i++) {
        $(cells[order[i]]).one('webkitAnimationEnd', addAnimation(cells[order[i+1]], anims[order[i+1]]));
    }
    $(cells[order[15]]).css('webkit-animation-duration', '3s');
    $(cells[order[14]]).on('webkitAnimationEnd', addAnimation(cells[order[15]], 'animated ' + winner[0]));
}

$('#play').click(play);
