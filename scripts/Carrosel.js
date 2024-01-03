const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    // Call handleSlideButtons when image list scrolls
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });

    // Initialize slide buttons initially
    handleSlideButtons();
};

//depois fazer esses carrosel com if por que isso aqui ta muito feio ta mlk

const initSlider2 = () => {
    const imageList = document.querySelector("#divdoslider #divdasimage");
    const slideButtons = document.querySelectorAll("#divdoslider .buttonslegais");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    // Call handleSlideButtons when image list scrolls
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });

    // Initialize slide buttons initially
    handleSlideButtons();
};


window.addEventListener("resize", initSlider2);
window.addEventListener("load", initSlider2);


window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);