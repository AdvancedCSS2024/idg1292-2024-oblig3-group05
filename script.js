// DOMContentLoaded for å passe på at dom loader før js.
document.addEventListener('DOMContentLoaded', function() {
	
    const sections = document.querySelectorAll("section")
	const faders = document.querySelectorAll(".fade-in");

	const options = {
		root: null,
		threshold: 0.25,
		rootMargin: "10px"
	};

    const observer = new IntersectionObserver(function
	(entries, observer) {
        entries.forEach(entry => {

			if(entry.isIntersecting){
				console.log(entry.target);
				entry.target.classList.add("inverse");
			}else{
				entry.target.classList.remove("inverse");
			}
        });
    }, options);

	sections.forEach(section => {
		observer.observe(section);
	})

	const appearOptions = {
		threshold: 0.5,
		rootMargin: "0px"
	  };
	  
	  const appearOnScroll = new IntersectionObserver(function(
		entries,
		appearOnScroll
	  ) {
		entries.forEach(entry => {
		  if (!entry.isIntersecting) {
			return;
		  } else {
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target);
		  }
		});
	  },
	  appearOptions);
	  
	  faders.forEach(fader => {
		appearOnScroll.observe(fader);
	  });
	  
});

 // Get the button element
 const cleanupButton = document.getElementById('cleanocean');

 // Add a click event listener to the button
 cleanupButton.addEventListener('click', function() {
   // Get the element with class clouds__small--one
   const smallCloudElOne = document.querySelector('.clouds__small--one');
   const smallCloudElTwo = document.querySelector('.clouds__small--two');
   const smallCloudElThree = document.querySelector('.clouds__small--three');
   const largeCloudElOne = document.querySelector('.clouds__large--one');
   const largeCloudElTwo = document.querySelector('.clouds__large--two');
   const largeCloudElThree = document.querySelector('.clouds__large--three');
   const backGrounds = document.querySelector('.section--1');
   const oceanNasty = document.querySelector('.beach-wave--nasty');
   const oceanClean = document.querySelector('.beach-wave');
   const sectionTwoNasty = document.querySelector('.wave-nasty');
   const sectionTwoClean = document.querySelector('.section2waves');
   const coralLeftNasty = document.querySelector('.coral--left--nasty');
   const coralRightNasty = document.querySelector('.coral--right--nasty');
   const coralLeftClean = document.querySelector('.coral--left');
   const coralRightClean = document.querySelector('.coral--right');

   // Add the class 'clean' to the element
   smallCloudElOne.classList.remove("nasty");
   smallCloudElOne.classList.add("clean");
   smallCloudElTwo.classList.remove("nasty");
   smallCloudElTwo.classList.add("clean");
   smallCloudElThree.classList.remove("nasty");
   smallCloudElThree.classList.add("clean");
   largeCloudElOne.classList.remove("nasty");
   largeCloudElOne.classList.add("clean");
   largeCloudElTwo.classList.remove("nasty");
   largeCloudElTwo.classList.add("clean");
   largeCloudElThree.classList.remove("nasty");
   largeCloudElThree.classList.add("clean");
   backGrounds.classList.add("niceweather");
   oceanNasty.classList.add("nastywaves");
   oceanClean.classList.add("cleanwaves");
   sectionTwoNasty.classList.add("nastywaves");
   sectionTwoClean.classList.add("cleanwaves");
   coralLeftNasty.classList.add("nastyCorals");
   coralRightNasty.classList.add("nastyCorals");
   coralRightClean.classList.add("cleanCorals");
   coralLeftClean.classList.add("cleanCorals");
 });