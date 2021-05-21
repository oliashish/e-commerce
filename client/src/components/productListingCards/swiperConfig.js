const SwiperConfig = {
    loop: true,

    slidesPerView: "1",
    spaceBetween: "1",
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    pagination: { clickable: true },
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
};
export default SwiperConfig;
