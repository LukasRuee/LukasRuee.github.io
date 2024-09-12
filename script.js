
// Add mousemove event listener
document.addEventListener('mousemove', updateBackground);

// Function to update the background gradient based on mouse position and mode
function updateBackground(e) {
    let x = e.clientX / window.innerWidth;
    let angle = Math.round(x * 360);
    document.body.style.background = `linear-gradient(${angle}deg, #564875, #222)`;
}


document.addEventListener('DOMContentLoaded', function() {
    const toggleSlider = document.getElementById('style-toggle-slider');
    const projectSection = document.getElementById('projects');
    const modeIndicator = document.getElementById('mode-indicator');

    // Function to update the view based on slider state
    function updateView() {
        if (toggleSlider.checked) {
            projectSection.classList.remove('project-card-view');
            projectSection.classList.add('project-list-view');
            modeIndicator.textContent = 'List View'; // Update mode indicator text
        } else {
            projectSection.classList.remove('project-list-view');
            projectSection.classList.add('project-card-view');
            modeIndicator.textContent = 'Card View'; // Update mode indicator text
        }
    }

    // Event listener for slider change
    toggleSlider.addEventListener('change', updateView);

    // Initialize with card view
    projectSection.classList.add('project-card-view');
    modeIndicator.textContent = 'Card View'; // Set initial mode text
});
