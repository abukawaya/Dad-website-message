// Select the class bubble
let time = document.getElementsByClassName('bubbles')[0];

// padding values for desktop (if needed, define them here)

// Scroll event listener
window.addEventListener('scroll', function () {
    let value = window.scrollY;   // Get Scroll Value (Mobile - High)

    // Move various elements based on scroll value
    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';
    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';
    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';
    explore.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.14 + 'px';
    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    // To prevent splash to move above sea water
    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

    // Move balls with varying speeds and amplitudes
    let balls = document.getElementsByClassName('balls');
    for (let i = 0; i < balls.length; i++) {
        let speed = 0.1 + i * 0.05; // Adjust speed for each ball
        let amplitude = 50 + i * 20; // Adjust amplitude for each ball
        balls[i].style.transform = `translate(${amplitude * Math.cos(value * speed)}px, ${amplitude * Math.sin(value * speed)}px)`;
    }
});

// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/abokawaya111/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/mohammed-abdelmutalab-3354a4291/", "_blank");
    }
    if (x == 3) {
        window.open("https://www.facebook.com/profile.php?id=61554988694661", "_blank");
    }
    if (x == 4) {
        window.open("https://026fcba9-425e-4e0c-bb5a-60fa5d2d69a4-00-1jq84yvn3qq41.picard.replit.dev/", "_blank");
    }
}
