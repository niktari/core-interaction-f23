let c = document.getElementById('container')

console.log(c)

// define a function that sets min-height of my-element to window.innerHeight:

const setHeight = () => {
    c.style.height = "calc(" + window.innerHeight + "px" + " - 48px)"
};

console.log(c.style.height)

// define mobile screen size:

let deviceWidth = window.matchMedia("(max-width: 1024px)");

if (deviceWidth.matches) {
// set an event listener that detects when innerHeight changes:

    window.addEventListener("resize", setHeight);

// call the function once to set initial height:

    setHeight();
}
