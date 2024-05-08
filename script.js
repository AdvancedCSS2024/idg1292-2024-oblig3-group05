document.addEventListener('DOMContentLoaded', function() {'use strict';
	// selecting items that shall be faded inn
    const sections = document.querySelectorAll("section");
    const faders = document.querySelectorAll(".fade-in");

	// intersection obererver settings
    const options = {
        root: null,
        threshold: 0.25,
        rootMargin: "10px"
    };

	// IntersectionObserver for fading in elements
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
				// Adding animation class if the element is in viewport
                entry.target.querySelectorAll('.fish, .fish--small, .question-mark, #trash--waterbottle, #trash-floor--bag, #trash-floor--straw')
                    .forEach(el => {
                        el.classList.add('animate');
                    });
            } else {
				// Removing animation class if the element is not in viewport
                entry.target.querySelectorAll('.fish, .fish--small, .question-mark, #trash--waterbottle, #trash-floor--bag, #trash-floor--straw')
                    .forEach(el => {
                        el.classList.remove('animate');
                    });
            }
        });
    }, options);

	// Observing all sections if they are intersectiing
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
        const fishGoAway = document.querySelector('.fish--dead');
        
        backGrounds.classList.add("niceweather");
        oceanNasty.classList.add("nastywaves");
        oceanClean.classList.add("cleanwaves");
        sectionTwoNasty.classList.add("nastywaves");
        sectionTwoClean.classList.add("cleanwaves");
        fishGoAway.classList.add("nastywaves");
        coralLeftNasty.classList.add("nastyCorals");
        coralRightNasty.classList.add("nastyCorals");
        coralLeftClean.classList.remove("nastyCorals");
        coralRightClean.classList.remove("nastyCorals");
        waterGradient.classList.add('unpolluted');
        cleanTheOceanElArr.forEach(el => el.classList.add('cleanTrash'));

        setTimeout(() => {
            cleanTheOceanElArr.forEach(el => el.classList.add('cleanedTrash'));
        }, 3000);
    });

	// intersection obererver settings for appearonscroll
    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px"
    };

	// IntersectionObserver for elements appearingonscroll
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

	// Observing elements to be faded in
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
