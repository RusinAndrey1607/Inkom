$(function() {
    $('.catalog__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev catalog__slider-btn  catalog__prev"><svg width="42" height="68" viewBox="0 0 42 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.0334 0L41.9667 7.93333L15.9001 34L41.9667 60.0667L34.0334 68L0.0333977 34L34.0334 0Z" fill="#CFA55B"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next catalog__slider-btn catalog__next"><svg width="42" height="68" viewBox="0 0 42 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.96663 0L0.0332947 7.93333L26.1 34L0.0332947 60.0667L7.96663 68L41.9666 34L7.96663 0Z" fill="#CFA55B"/></svg></button>',
    })
})

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const body = document.querySelector(".body");
const btn = document.querySelectorAll('.catalog__btn ')
btn.forEach((item) => {
    item.addEventListener("click", () => {
        btn.forEach((button) => {
            button.classList.remove("active")
        })
        item.classList.toggle("active")
    })
})

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("active");
    header.classList.toggle("active");
});


menu.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
})