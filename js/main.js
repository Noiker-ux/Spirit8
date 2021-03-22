const Team = new Swiper('.Team-slider', {
    // Optional parameters
    loop: true,
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 5,


    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
        // when window width is >= 480px
        780: {
            slidesPerGroup: 3,
            slidesPerView: 3,
        },
        // when window width is >= 940px
        940: {
            slidesPerGroup: 4,
            slidesPerView: 4,
        }
    }
});


const Client = new Swiper('.Clients-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.client-pagination',
    },

});


const Review = new Swiper('.Review-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    // If we need pagination
    pagination: {
        el: '.review-pagination',
    },
});

function Photos() {
    document.querySelectorAll(".Mobile_Work").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".Web_Work").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".Photo_Work").forEach(item => {
        item.style.display = "flex"
    })
}

function MDesign() {
    document.querySelectorAll(".Photo_Work").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".Web_Work").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".Mobile_Work").forEach(item => {
        item.style.display = "flex"
    })
}

function WDesign() {
    document.querySelectorAll(".Photo_Work").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".Mobile_Work").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".Web_Work").forEach(item => {
        item.style.display = "flex"
    })
}

function AllWork() {
    document.querySelectorAll(".Web_Work").forEach(item => {
        item.style.display = "flex"
    })
    document.querySelectorAll(".Photo_Work").forEach(item => {
        item.style.display = "flex"
    })
    document.querySelectorAll(".Mobile_Work").forEach(item => {
        item.style.display = "flex"
    })
}