// const test = new Letterize({
//         targets: ".sqr"
//       });

//       const animation = anime.timeline({
//         targets: test.listAll,
//         delay: anime.stagger(100, {
//           grid: [test.list[0].length, test.list.length],
//           from: "center"
//         }),
//         loop: true
//       });

//       animation
//         .add({
//           scale: 0.5
//         })
//         .add({
//           letterSpacing: "10px"
//         })
//         .add({
//           scale: 1
//         })
//         .add({
//           letterSpacing: "6px"
//         });
    
// const test = new Letterize({
//             targets: ".sqr"
//           });


// const animation = anime.timeline({
//     targets: test.listAll,
//     scale: [
//         {value: .1, easing: 'easeOutSine', duration: 500},
//         {value: 1, easing: 'easeInOutQuad', duration: 500}
//       ],
//       delay: anime.stagger(200, {grid: [test.list[0].length, test.list.length], from: 'center'}),
//       loop: true
// });

// animation
//         .add({
//           scale: 0.5
//         })
//         .add({
//           letterSpacing: "10px"
//         })
//         .add({
//           scale: 1
//         })
//         .add({
//           letterSpacing: "6px"
//         });


const text = new Letterize({
    targets: ".sqr"
  });


function animation() { anime({
targets: text.listAll,
scale: [
{value: .1, easing: 'easeOutSine', duration: 1200},
{value: 1, easing: 'easeInOutQuad', duration: 1200}
],
delay: anime.stagger(300, {grid: [text.list[0].length, text.list.length], from: 'center'}),
loop: true,
endDelay: 5000,
})};

// $(".sqr").on("click", animation);
$(window).on("load", animation);
$(".sqr").on("mouseover", scaleAnimation);


function scaleAnimation() { anime({
    scale: 0.5,
    letterSpacing: "10px",
})}

// animation
// .add({
//   scale: 0.5
// })
// .add({
//   letterSpacing: "10px"
// })
// .add({
//   scale: 1
// })
// .add({
//   letterSpacing: "6px"
// });

        