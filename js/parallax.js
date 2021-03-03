var timeout;
$(".page1").mousemove(function (e) {
  if (timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
});

function callParallax(e) {
//   parallaxIt(e, ".mainCard", 15);
  parallaxIt(e, ".parallax1", -10);
  parallaxIt(e, ".parallax2", -15);
  parallaxIt(e, ".parallax3", -20);
  parallaxIt(e, ".parallax4", -5);
  parallaxIt(e, ".parallax5", -1);
  parallaxIt(e, ".parallax6", -30);
  parallaxIt(e, ".parallax7", -10);
  parallaxIt(e, ".parallax8", -7);
  parallaxIt(e, ".parallax9", -10);
  parallaxIt(e, ".parallax10", -10);
  parallaxIt(e, ".parallax10", -10);
}

function parallaxIt(e, target, movement) {
  var $this = $(".page1");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement,
    ease: Power2.easeOut,
  });
}
