$(document).ready(function () {
    // sticky navbar on scroll
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Blogger", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Blogger", "Developer", "Administrator", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // contact form submission to Google Sheets
    // contact form submission to Google Form (working IDs)
    $("#contact-form").on("submit", function (e) {
        e.preventDefault();

        const form = this;
        const formData = new FormData();
        formData.append("entry.22192394", form.name.value);       // Name
        formData.append("entry.650017811", form.email.value);     // Email
        formData.append("entry.1322673744", form.message.value);  // Message

        fetch("https://docs.google.com/forms/d/e/1FAIpQLSdrG7Esnh02PIY-NIFaF5_x56NIe-zd42tG5Lnhbq4bCM89Ug/formResponse", {
            method: "POST",
            mode: "no-cors",
            body: formData
        })
            .then(() => {
                alert("✅ Submitted successfully!");
                form.reset();
            })
            .catch(() => {
                alert("❌ Submission failed. Please try again.");
            });
    });

});
