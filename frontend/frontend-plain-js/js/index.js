'use strict';

// scroll back to top button
let scrollToTopButton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction()
};

let scrollFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

let topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

