var logo = ("F a r m e r &nbsp; D e l i g h t ").split(" ");
var slogan = (" F a s t&nbsp; <p></p> F o o d,&nbsp; <p></p> S l o w&nbsp; <p></p> p r i c e s,&nbsp; <p></p> F a s t&nbsp; <p></p> s e r v i c e ...").split(" ");
var intro = ("G a d w a l l&nbsp; <p></p> I n s p i r e d&nbsp; <p></p> T a s t e ...").split(" ");
var trans_time = .4;
$(window).on("load", function () {
    setTimeout(function () {
        $(".pre-load-content").fadeOut("slow");
    }, 1_000);
    
});
$(window).on("scroll", function () {
    var height = $(window).scrollTop();
    
    if (height > 20) {
        $("body").addClass("scrolled");
    }
    else {
        $("body").removeClass("scrolled");
    }
});
$(document).ready(function () {
    function animateText($class, text, display) {
        if(display == "block") {
            text.forEach((e) => {
                var text = `<span style='transition-delay: ${trans_time.toFixed(2)}s;'>${e}</span><br />`;
                var $span = $(text);
                $class.append($span);
                trans_time += 0.05;
            });
        }
        else if(display == "inline") {
            text.forEach((e) => {
                var text = `<span style='transition-delay: ${trans_time.toFixed(2)}s;'>${e}</span>`;
                if(e.endsWith("&nbsp;"))
                    text += "<p></p>"
                var $span = $(text);
                $class.append($span);
                trans_time += 0.05;
            });
        }
    }
    setTimeout(function (){
        $(".wrapper").removeClass("hidden")
    }, 1_000);
    setTimeout(function () {
        $("body").addClass("animation");
    }, 1_500);
    $(".toggle-menu").on("click", function () {
        $("body").toggleClass("isMenu");
        $(".fa-times").toggleClass("fa-bars");
    });
    animateText($(".title-header .slogan"), slogan, "inline");
    animateText($(".title-header .intro"), intro, "inline");
    animateText($(".side-text-logo"), logo, "block");
});