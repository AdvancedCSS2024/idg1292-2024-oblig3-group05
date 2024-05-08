document.addEventListener('DOMContentLoaded', function() {
    
    const sections = document.querySelectorAll("section");
    const faders = document.querySelectorAll(".fade-in");

    const options = {
        root: null,
        threshold: 0.25,
        rootMargin: "10px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target);
                entry.target.classList.add("inverse");
            } else {
                entry.target.classList.remove("inverse");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const cleanupButton = document.getElementById('cleanocean');

    cleanupButton.addEventListener('click', function() {
        const backGrounds = document.querySelector('.section--1');
        const oceanNasty = document.querySelector('.beach-wave--nasty');
        const oceanClean = document.querySelector('.beach-wave');
        const sectionTwoNasty = document.querySelector('.wave-nasty');
        const sectionTwoClean = document.querySelector('.section2waves');
        const coralLeftNasty = document.querySelector('.coral--left--nasty');
        const coralRightNasty = document.querySelector('.coral--right--nasty');
        const coralLeftClean = document.querySelector('.coral--left');
        const coralRightClean = document.querySelector('.coral--right');
        const waterGradient = document.querySelector('.underwater-gradient');
        const cleanTheOceanElArr = document.querySelectorAll('.garbage');
        const clearSkyLarge = document.querySelector('.sky--large--nasty');
        const clearSkySmall = document.querySelector('.sky--small--nasty');

        backGrounds.classList.add("niceweather");
        oceanNasty.classList.add("nastywaves");
        oceanClean.classList.add("cleanwaves");
        sectionTwoNasty.classList.add("nastywaves");
        sectionTwoClean.classList.add("cleanwaves");
        coralLeftNasty.classList.add("nastyCorals");
        coralRightNasty.classList.add("nastyCorals");
        coralLeftClean.classList.remove("nastyCorals");
        coralRightClean.classList.remove("nastyCorals");
        waterGradient.classList.add('unpolluted');
        clearSkyLarge.classList.add('cloudnice');
        clearSkySmall.classList.add('cloudnice');
        cleanTheOceanElArr.forEach(el => el.classList.add('cleanTrash'));

        setTimeout(() => {
            cleanTheOceanElArr.forEach(el => el.classList.add('cleanedTrash'));
        }, 3000);
    });

    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px"
    }; // Corrected the object closing brace position

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
