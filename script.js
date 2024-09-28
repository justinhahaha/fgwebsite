// Scroll to fleet-info section when the arrow is clicked
document.getElementById("arrow-down").addEventListener("click", function() {
    document.querySelector("#fleet-info").scrollIntoView({
        behavior: "smooth"
    });
});


const carouselTrack = document.querySelector('.carousel-track');

carouselTrack.addEventListener('mouseover', () => {
    carouselTrack.style.animationPlayState = 'paused';
});

carouselTrack.addEventListener('mouseout', () => {
    carouselTrack.style.animationPlayState = 'running';
});















