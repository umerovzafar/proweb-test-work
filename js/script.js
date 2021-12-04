window.addEventListener("DOMContentLoaded", () => {
    var sliderKey = 0;
    var slides = document.querySelectorAll(".slide__item");
    var slides_image = document.querySelectorAll(".slide__content");
    var nextButton = document.getElementById("next-btn")
    var lastButton = document.getElementById("last-btn")

    function slider(reverse = false) {
        if (reverse && sliderKey === 0) {
            sliderKey = slides.length
        }
        if (!reverse && sliderKey === (slides.length - 1)) {
            sliderKey = 0
        } else {
            reverse ? --sliderKey : sliderKey++
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.add("d-none");
            if (sliderKey === i) {
                slides[i].classList.remove("d-none");
            }
        }
        for (var j = 0; j < slides_image.length; j++) {
            slides_image[j].classList.add("d-none");
            if (sliderKey === j) {
                slides_image[j].classList.remove("d-none");
            }
        }
    }

    nextButton.addEventListener("click", function () {
        slider(false)
    });
    lastButton.addEventListener("click", function () {
        slider(true)
    })
})

