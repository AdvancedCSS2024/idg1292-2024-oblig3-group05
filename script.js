// DOMContentLoaded for å passe på at dom loader før js.
document.addEventListener('DOMContentLoaded', function () {

	const sections = document.querySelectorAll("section");
	const faders = document.querySelectorAll(".fade-in");
	

	const options = {
		root: null,
		threshold: 0.25,
		rootMargin: "10px"
	};

	const observer = new IntersectionObserver(function
		(entries, observer) {
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
	})

	const appearOptions = {
		threshold: 0.5,
		rootMargin: "0px"
	};

	const appearOnScroll = new IntersectionObserver(function (
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
