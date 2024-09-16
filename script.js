document.addEventListener('mousemove', updateBackground);

function updateBackground(e) {
    let x = e.clientX / window.innerWidth;
    let angle = Math.round(x * 360);
    document.body.style.background = `linear-gradient(${angle}deg, #564875, #222)`;
}
document.addEventListener('DOMContentLoaded', function() {
    const textBoxes = document.querySelectorAll('.text-box');
    const projectBoxes = document.querySelectorAll('.project');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05
    });

    const allBoxes = [...textBoxes, ...projectBoxes];

    allBoxes.forEach(box => {
        observer.observe(box);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleSlider = document.getElementById('style-toggle-slider');
    const projectSection = document.getElementById('projects');
    const modeIndicator = document.getElementById('mode-indicator');

    function updateView() {
        if (toggleSlider.checked) {
            projectSection.classList.remove('project-card-view');
            projectSection.classList.add('project-list-view');
            modeIndicator.textContent = 'List View';
        } else {
            projectSection.classList.remove('project-list-view');
            projectSection.classList.add('project-card-view');
            modeIndicator.textContent = 'Card View'; 
        }
    }

    toggleSlider.addEventListener('change', updateView);

    projectSection.classList.add('project-card-view');
    modeIndicator.textContent = 'Card View';
});

document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.project img');

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                img.requestFullscreen();
            }
        });

        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                img.classList.add('fullscreen');
            } else {
                img.classList.remove('fullscreen');
            }
        });
    });
});


