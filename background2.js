var path = anime.path('.background1 path');

anime({
  targets: '.background1 .el',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});

// $("path").on('scroll', change)

// function change(){
    
// }