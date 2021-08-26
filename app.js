const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');
let load = 0;

// Interval Function
let interval = setInterval(blurring, 30);

// Scale function for setting the opacity of the loadText
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function blurring() {
    // increament the value
    load++;

    // To stop the interval function
    if (load > 99) {
        clearInterval(interval)
    }

    // Showing load value to the DOM
    loadText.textContent = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}