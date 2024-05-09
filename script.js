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

// -- Call to action --
    // This section of the script contains all the JS pertaining the call to action button.
    // This removes the trash in the ocean and beach, and changes the color theme of the website.

    // Declares a variable called "cleanupButton" which selects the button
    // element from the HTML document by its class name
    const cleanupButton = document.getElementById('cleanocean');

    // Adds an event listener to the button which will trigger a function
    // when the button is clicked
    cleanupButton.addEventListener('click', function() {

        // Selects all elements from the HTML document that we want the
        // script to interact with and stores them in variables
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

        // Selects all HTML elements with the class "garbage" and stores them in an array
        const cleanTheOceanElArr = document.querySelectorAll('.garbage');

        const fishGoAway = document.querySelector('.fish--dead');
        
        // Adds an additional class to all the elements selected previously
        // which has the property of display: none
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

        // For each element in variable, add class "cleanTrash" to class list
        // which has an animation property, to reflect the items being "cleaned up" from the ocean
        cleanTheOceanElArr.forEach(el => el.classList.add('cleanTrash'));

        // Function to add class "cleanedTrash" to each element in the array "cleanTheOceanElArr"
        // after a 3 second delay (3000 = ms), in order to give time for the "cleanTrash" animation to run
        // before the items are removed from the document flow 
        setTimeout(() => {
            cleanTheOceanElArr.forEach(el => el.classList.add('cleanedTrash'));
        }, 3000);
    });
    // -- Call to action END --

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
