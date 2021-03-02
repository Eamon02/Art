const text2 = new Letterize({
    targets: ".sqr2"
  });


function animation() { anime({
targets: text2.listAll,
scale: [
{value: .1, easing: 'easeOutSine', duration: 500},
{value: 1, easing: 'easeInOutQuad', duration: 1200}
],
delay: anime.stagger(200, {grid: [text2.list[0].length, text2.list.length], from: 'center'}),
loop: true,
endDelay: 5000,
})};

// $(".sqr").on("click", animation);
$(window).on("load", animation);
        