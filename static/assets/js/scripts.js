const video = document.querySelector('video');
video.volume = 0.3; // Set default volume to 30%

video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
});

video.addEventListener('error', (e) => {
    console.error('Error loading video:', e);
});

// Slideshow functionality
const previews = document.querySelectorAll('.preview');
let currentPreviewIndex = 0;

function showNextPreview() {
    previews[currentPreviewIndex].style.display = 'none';
    currentPreviewIndex = (currentPreviewIndex + 1) % previews.length;
    previews[currentPreviewIndex].style.display = 'flex';
}

setInterval(showNextPreview, 1500);
previews[currentPreviewIndex].style.display = 'flex'; // Show the first preview initially

document.getElementById('home-link').addEventListener('click', () => {
    document.getElementById('home-content').style.display = 'block';
    document.getElementById('changelog-content').style.display = 'none';
});

document.getElementById('changelog-link').addEventListener('click', () => {
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('changelog-content').style.display = 'block';
});

// Remove the collapsible functionality
// const collapsibles = document.querySelectorAll('.collapsible');
// collapsibles.forEach((collapsible) => {
//     collapsible.addEventListener('click', function() {
//         this.classList.toggle('active');
//         const content = this.nextElementSibling;
//         if (content.style.display === 'block') {
//             content.style.display = 'none';
//         } else {
//             content.style.display = 'block';
//         }
//     });
// });
