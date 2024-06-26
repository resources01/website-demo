/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('.changeLanguage').click(function(){
  $('.en').toggleClass('d-none');
  $('.vn').toggleClass('d-none');
  $('.language-V').toggleClass('d-none');
  $('.language-E').toggleClass('d-none');
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active');
    $('ul.nav').toggleClass('show');
    $('.change-language').toggleClass('disa');
});

//button control
var btnTop = $('#button-top');
var btnHome = $('#button-home');
var btnHotline = $('#button-hotline');


$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btnTop.addClass('show');
    btnHome.addClass('show');
    btnHotline.addClass('show');
  } else {
    btnTop.removeClass('show');
    btnHome.removeClass('show');
    btnHotline.removeClass('show');
  }
});

btnTop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '1200');
});

//end button control



  
  