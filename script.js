const options = { 
    root: document.querySelector(".section--1"),
	rootMargin: "-20px",
	threshold: [1]
};

const observer = new IntersectionObserver(cb, options); 