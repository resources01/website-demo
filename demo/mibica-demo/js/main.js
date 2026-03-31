(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
    //togle read more
    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll('.toggle-btn');

        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                const p = this.parentElement.querySelector('p');

                p.classList.toggle('expanded');

                if (p.classList.contains('expanded')) {
                    this.innerHTML = '<i class="fa fa-minus text-primary me-2"></i>Hidden';
                } else {
                    this.innerHTML = '<i class="fa fa-plus text-primary me-2"></i>Read More';
                }
            });
        });
    });

    window.addEventListener("scroll", function () {
        document.querySelectorAll('.why-choose p.expanded').forEach(p => {
            p.classList.remove('expanded');

            const btn = p.parentElement.querySelector('.toggle-btn');
            if (btn) {
                btn.innerHTML = '<i class="fa fa-plus text-primary me-2"></i>Read More';
            }
        });
    });

    // Khi click vào link có href bắt đầu bằng #
    document.addEventListener("DOMContentLoaded", function () {

    // ===== CLICK TRONG TRANG =====
    document.querySelectorAll('.team-text a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (!target) return;

            // Ẩn hết
            document.querySelectorAll('.profile .row[id]').forEach(section => {
                section.classList.remove('active');
            });

            // Hiện đúng section
            target.classList.add('active');

            // Scroll mượt
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    const hash = window.location.hash;

        if (hash) {
            const target = document.querySelector(hash);

            if (target) {
                document.querySelectorAll('.profile .row[id]').forEach(section => {
                    section.classList.remove('active');
                });                
                target.classList.add('active');
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 200);
            }
        }

    });

    let scrollTimeout;

    window.addEventListener("scroll", function () {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            const profile = document.querySelector('.profile');
            if (!profile) return;
            const rect = profile.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
                document.querySelectorAll('.profile .row[id]').forEach(section => {
                    section.classList.remove('active');
                });
            }
        }, 150);
    });




    
})(jQuery);

