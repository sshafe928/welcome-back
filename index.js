$(document).ready(function() {
    $("h1").each(function(index, element) {
        var animation = gsap.to(this, {
            duration: 0.1,
            className: '+= superShadow',
            marginTop: '-10px',
            marginBottom: '10px',
            ease: "power1.inOut",
            paused: true
        });
        element.animation = animation;
    });

    $('h1').hover(function() {
        this.animation.play();
    }, function() {
        this.animation.reverse();
    });

});