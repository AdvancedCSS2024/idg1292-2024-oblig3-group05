document.addEventListener('DOMContentLoaded', function() {
    
    'use strict';

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
                entry.target.querySelectorAll('.fish, .fish--small, .question-mark, #trash--waterbottle, #trash-floor--bag, #trash-floor--straw')
                    .forEach(el => {
                        el.classList.add('animate');
                    });
            } else {
                entry.target.querySelectorAll('.fish, .fish--small, .question-mark, #trash--waterbottle, #trash-floor--bag, #trash-floor--straw')
                    .forEach(el => {
                        el.classList.remove('animate');
                    });
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

    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px"
    };

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
