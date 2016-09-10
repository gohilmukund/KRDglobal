function resizeMain(e) {
    wHeight = $(window).height(),
    wWidth = $(window).width(),
    "undefined" != typeof e && "" !== e && (videoBGsvids.height() < wHeight && videoBGsvids.width() >= wWidth ? $(".video-bg").find("video").css({
        width: "auto",
        height: "100%"
    }) : $(".video-bg").find("video").removeAttr("style")),
    $("#carousel_ul").css({
        top: -wHeight
    }),
    $("#carousel_inner").css({
        height: wHeight
    }),
    $(".slides-container").css({
        height: wHeight
    })
}
function showBanner(e) {
    clearTimeout(bannerDelay),
    "undefined" != typeof e && "" !== e ? zegSlide.removeClass("banner") : zegSlide.addClass("banner")
}
var wHeight, wWidth, bannerDelay;
$(document).ready(function() {
    wHeight = $(window).height(),
    wWidth = $(window).width(),
    resizeMain(),
    bannerDelay = setTimeout(function() {
        showBanner()
    }, 3e3)
});
var videoBGs = $(".video-bg"), videoBGsvids = videoBGs.find("video"), isBigger = !1, tempRes;
$(window).resize(function() {
    clearTimeout(tempRes),
    wHeight = $(window).height(),
    wWidth = $(window).width(),
    resizeMain(!0)
});
var zegSlide = $(".zeg"), slideTimer, navClicked = !1;
$(".down").click(function(e) {
    if (e.preventDefault(),
    !navClicked) {
        navClicked = !0,
        $("main").toggleClass("show");
        var i = $("#carousel_ul li.slides-container").outerHeight()
          , n = parseInt($("#carousel_ul").css("top")) - i;
        $("#carousel_ul li.slides-container:first").css({
            opacity: 0
        }),
        $("#carousel_ul li.slides-container").find(".slide").removeClass("current"),
        slideTimer = setTimeout(function() {
            $("#carousel_ul:not(:animated)").animate({
                top: n
            }, 1e3, function() {
                $("#carousel_ul li.slides-container:eq(2)").find(".slide").addClass("current"),
                $("#carousel_ul li.slides-container:last").after($("#carousel_ul li.slides-container:first")),
                $("video").each(function() {
                    $(this).get(0).paused && this.play()
                }),
                $("#carousel_ul").css({
                    top: -wHeight
                }),
                $("#carousel_ul li.slides-container").css({
                    opacity: 1
                }),
                $("main").toggleClass("show"),
                navClicked = !1
            })
        }, 1e3)
    }
}),
$(".up").click(function(e) {
    if (e.preventDefault(),
    !navClicked) {
        navClicked = !0,
        $("main").toggleClass("show");
        var i = $("#carousel_ul li.slides-container").outerHeight()
          , n = parseInt($("#carousel_ul").css("top")) + i;
        $("#carousel_ul li.slides-container:last").css({
            opacity: 0
        }),
        $("#carousel_ul li.slides-container").find(".slide").removeClass("current"),
        slideTimer = setTimeout(function() {
            $("#carousel_ul:not(:animated)").animate({
                top: n
            }, 1e3, function() {
                $("#carousel_ul li.slides-container:eq(0)").find(".slide").addClass("current"),
                $("#carousel_ul li.slides-container:first").before($("#carousel_ul li.slides-container:last")),
                $("video").each(function() {
                    $(this).get(0).paused && this.play()
                }),
                $("#carousel_ul li.slides-container").css({
                    opacity: 1
                }),
                $("#carousel_ul").css({
                    top: -wHeight
                }),
                $("main").toggleClass("show"),
                navClicked = !1
            })
        }, 1e3)
    }
}),
$(".close-btn").on("click", function(e) {
    e.preventDefault(),
    showBanner(close)
}),
KEY_CODES = {
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
},
document.onkeydown = function(e) {
    var i = e.keyCode ? e.keyCode : e.charCode;
    KEY_CODES[i] && (e.preventDefault(),
    "38" == i || "32" == i ? navClicked !== !0 && $(".up").trigger("click") : "40" == i && navClicked !== !0 && $(".down").trigger("click"))
}
,
$("html").bind("mousewheel DOMMouseScroll", function(e) {
    e.preventDefault();
    var i = e.originalEvent
      , n = i.deltaY
      , s = n > 0 ? "up" : "down";
    $("aside .nav li.current").index();
    navClicked !== !0 && $("." + s).trigger("click")
}),
$("body").mousedown(function(e) {
    return 1 == e.button ? !1 : void 0
});
