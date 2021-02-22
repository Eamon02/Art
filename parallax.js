document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querSelectorAll(".layer").foreach(layer => {
        const speed = layer.getAttribute("data-speed")
        const x = (window.innerWidth - e.pageX*speed)
        const y = (window.heightWidth - e.pageY*speed)
        layer.style.transform = `translateX(${x}px)translate(${y}px`
    })
}