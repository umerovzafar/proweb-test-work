window.addEventListener("DOMContentLoaded", () => {
    let sliderKey = 0;
    let slides = document.querySelectorAll(".slide__item");
    let slides_image = document.querySelectorAll(".slide__content");
    let nextButton = document.getElementById("next-btn")
    let lastButton = document.getElementById("last-btn")

    function slider(reverse = false) {
        if (reverse && sliderKey === 0) {
            sliderKey = slides.length
        }
        if (!reverse && sliderKey === (slides.length - 1)) {
            sliderKey = 0
        } else {
            reverse ? --sliderKey : sliderKey++
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add("d-none");
            if (sliderKey === i) {
                slides[i].classList.remove("d-none");
            }
        }
        for (let j = 0; j < slides_image.length; j++) {
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

