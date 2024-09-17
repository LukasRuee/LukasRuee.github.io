//Loading boxes in
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

//Fullscreen pictures
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


