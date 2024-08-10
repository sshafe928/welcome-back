// Ensure the DOM is fully loaded before executing the script
$(document).ready(function() {
    // Iterate over each <h1> element on the page
    $("h1").each(function(index, element) {
        // Create a GSAP animation for each <h1> element
        var animation = gsap.to(this, {
            duration: 0.1,                // Duration of the animation (0.1 seconds)
            className: '+= superShadow',  // Add the 'superShadow' class to the element
            marginTop: '-10px',           // Animate margin-top to -10px
            marginBottom: '10px',         // Animate margin-bottom to 10px
            ease: "power1.inOut",         // Easing function for smooth animation
            paused: true                  // Initially pause the animation
        });

        // Store the animation object on the <h1> element for later use
        element.animation = animation;
    });

    // Add hover event listeners to <h1> elements
    $('h1').hover(function() {
        // On mouse enter, play the animation
        this.animation.play();
    }, function() {
        // On mouse leave, reverse the animation
        this.animation.reverse();
    });
});