let galleryLoaded = false;
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    const hint = document.querySelector(".hint");
    const wrapper = document.querySelector(".wrapper");
    const carouselInner = document.querySelector(".carousel-inner");
    const leftBtn = document.querySelector(".nav.left");
    const rightBtn = document.querySelector(".nav.right");

    title.addEventListener("click", async () => {
        hint.style.display = "none";
        hint.style.pointerEvents = "none";

        title.classList.remove("hoverable");
        title.classList.add("active");

        setTimeout(() => {
            wrapper.classList.add("visible");
        }, 550);
        if (!galleryLoaded) {
            await loadGallery();
            wrapper.classList.add("visible");
            galleryLoaded = true;
            currentSlide = 0;
        }
    });

    leftBtn.addEventListener("click", () => {
        const slides = document.querySelectorAll(".carousel-inner img");
        if (slides.length === 0) return;

        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    });

    rightBtn.addEventListener("click", () => {
        const slides = document.querySelectorAll(".carousel-inner img");
        if (slides.length === 0) return;

        currentSlide = (currentSlide + 1) % slides.length;
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
});
