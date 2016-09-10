function formAnObject() {
    if ($(".outer-ring").length > 0) {
        for (var e = 1; leavesNUm >= e; e++)
            $(".outer-ring").append('<div class="leaves leaf-' + e + '"></div>');
        return "we be having fun"
    }
}
function blockParax(e) {
    if (paralaxParnt.length > 0) {
        var t = paralaxParnt.offset().top
          , i = e - t;
        paralaxImage.css({
            top: i / 1.5
        })
    }
}
function newsShowTitle() {
    var e = $(".covering_h")
      , t = e.height();
    $(".news-type").height(t + e.find(".button-news-more").height())
}
function changeTapeHeight() {
    var e = $(".covering_h")
      , t = e.height();
    $(".news-type").height(t),
    e.find(".button-news-more").css("display", "none"),
    showTape()
}
function showTape() {
    var e = $(window).height();
    $("#news-tape").find(".news_title").each(function() {
        e > $(this).offset().top && $(this).addClass("animated")
    })
}
function addLink() {
    var e = window.getSelection()
      , t = pagelink
      , i = document.createElement("div");
    i.style.position = "absolute",
    i.style.left = "-99999px",
    document.body.appendChild(i),
    i.innerHTML = t,
    e.selectAllChildren(i),
    window.setTimeout(function() {
        document.body.removeChild(i)
    }, 100)
}
var wHeight, wWidth, bannerDelay;
$(document).ready(function() {
    wHeight = $(window).height(),
    wWidth = $(window).width(),
    $("div.fancy-select ul.options").mCustomScrollbar(),
    $(".field").find("input, textarea").each(function() {
        $(this).val() && $(this).removeClass("empty")
    }),
    $(".field").find("input, textarea").on("change", function() {
        "" == $(this).val() ? $(this).addClass("empty") : $(this).removeClass("empty")
    }),
    resizeCanvas(gridCan),
    renderGrid(gridCan, gridCtx, 40, "rgba(131, 139, 145, 0.3)", 2, 5, -30),
    resizeCanvas(cirCan),
    resizeCanvas(cirCanCopy),
    resizeCanvas(gridCanCopy),
    drawCircles(),
    fixXs(6),
    formAnObject(),
    $(".selectmenu_select").each(function() {
        var e = $(this);
        e.selectmenu({
            appendTo: e.closest("form")
        }).selectmenu("menuWidget").addClass("overflow")
    }),
    $("#joinNewsForm").removeClass("hiddenOnLoad")
});
var videoBGs = $(".video-bg"), videoBGsvids = videoBGs.find("video"), isBigger = !1, tempRes;
$(window).resize(function() {
    clearTimeout(tempRes),
    tempRes = setTimeout(function() {
        wHeight = $(window).height(),
        wWidth = $(window).width(),
        resizeCanvas(gridCan),
        resizeCanvas(cirCan),
        circles = new Array,
        circleCoords = new Array,
        renderGrid(gridCan, gridCtx, 40, "rgba(131, 139, 145, 0.3)", 2, 5, -30),
        resizeCanvas(cirCanCopy),
        resizeCanvas(gridCanCopy),
        drawCircles()
    }, 300)
}),
$(".register-now").on("click", function(e) {
    e.preventDefault(),
    $("html, body").animate({
        scrollTop: $("#registration-block").offset().top - (wHeight - $("#registration-block").height()) / 2
    }, "slow")
});
var dscrlt = $(document).scrollTop();
$(document).scroll(function() {
    dscrlt = $(document).scrollTop(),
    blockParax(dscrlt),
    $("section").each(function() {
        $(this).attr("animate");
        $(this).height() < $(window).height() ? dscrlt + 100 + ($(window).height() - $(this).height()) / 2 > $(this).offset().top && $(this).addClass("animated") : dscrlt + 100 + ($(this).height() - $(window).height()) / 2 > $(this).offset().top && $(this).addClass("animated")
    }),
    $(".news_title").each(function() {
        $(this).attr("animate");
        dscrlt + $(window).height() - 100 > $(this).offset().top && $(this).addClass("animated")
    })
}),
$(document).ready(function() {
    newsShowTitle(),
    showTape()
}),
$(document).ready(function() {
    $(".slider-wrapper").find(".nav-btn").on("click", function(e) {
        e.preventDefault()
    }),
    $(".page_news_content, .page_static_content").find(".slider-gallery").slick({
        prevArrow: $(".slider-wrapper .prev"),
        nextArrow: $(".slider-wrapper .next"),
        dots: !1,
        infinite: !1,
        swipe: !1,
        cssEase: "ease-in-out"
    })
});
var leavesNUm = 24
  , paralaxParnt = $(".paralax-parent")
  , paralaxImage = paralaxParnt.find(".image")
  , popupPArent = $(".team-member-bio");
$(".single-person").on("click", function(e) {
    e.preventDefault(),
    $("body").addClass("stop");
    var t = $(this)
      , i = t.data("member");
    popupPArent.find(".member-info[data-member=" + i + "]").addClass("show"),
    popupPArent.removeClass("hidden");
    var n = popupPArent.find(".member-info[data-member=" + i + "] .bio");
    n.height(popupPArent.height() - (popupPArent.find(".member-info[data-member=" + i + "]").height() - n.height()) + 25 - 58 - 50)
}),
$(".close-bio").on("click", function() {
    $(this).closest(".team-member-bio").addClass("hidden"),
    popupPArent.find(".member-info").removeClass("show"),
    $("body").removeClass("stop")
});
var canvasCustomHeight = 0;
canvasCustomHeight = $(".welcome-bord").height() - $(".covering-block").height() + $(".welcome-description").height() + $(".button-bord-more").height(),
$(".custom-plate").find(".circles-plate").height(92 + canvasCustomHeight + 50),
$(document).ready(function() {
    $(".history-life-gallery").find(".btn-link").on("click", function(e) {
        e.preventDefault()
    }),
    $(".history-life-gallery").find(".event-slider").slick({
        prevArrow: $(".history-life-gallery .prev"),
        nextArrow: $(".history-life-gallery .next"),
        dots: !0,
        infinite: !1,
        swipe: !1,
        cssEase: "ease-in-out"
    }),
    $(".scientific-slider").find(".btn-link").on("click", function(e) {
        e.preventDefault()
    }),
    $(".scientific-slider").find(".event-slider").slick({
        prevArrow: $(".scientific-slider .prev"),
        nextArrow: $(".scientific-slider .next"),
        dots: !1,
        infinite: !1,
        swipe: !1,
        cssEase: "ease-in-out"
    }),
    $(".years-list").find("li").on("click", function() {
        var e = $(this).attr("data-nav");
        $(".slick-dots").find("li[aria-controls=" + e + "]").find("button").click()
    }),
    $(document).scroll(function() {
        dscrlt = $(document).scrollTop(),
        $(".nav-section-c").each(function() {
            if (dscrlt + $(window).height() / 5 > $(this).offset().top) {
                var e = $(".right_fixed_menu");
                e.find("li").removeClass("cur-nav");
                var t;
                clearTimeout(t),
                t = setTimeout(function() {}, 300),
                e.find("li[data-screen=" + $(this).attr("data-screen") + "]").addClass("cur-nav")
            }
        })
    })
}),
$(".right_fixed_menu").find("li").on("click", function() {
    var e = $(".nav-section-c[data-screen=" + $(this).attr("data-screen").toLocaleString() + "]")
      , t = e.offset().top;
    $("html, body").stop().animate({
        scrollTop: t - $(window).height() / 5 + 10
    }, 600)
});
var popUpTrailer = $(".video-pop-up");
$(".btn_video_popup").on("click", function(e) {
    e.preventDefault(),
    popUpTrailer.css({
        top: 0,
        height: "100%"
    }),
    popUpTrailer.removeClass("hidden")
}),
$(".close-video").on("click", function(e) {
    e.preventDefault(),
    popUpTrailer.css({
        top: btnOffset,
        height: 0
    }),
    popUpTrailer.addClass("hidden")
});
var btnOffset;
document.addEventListener("copy", addLink),
$("img").bind("contextmenu", function(e) {
    e.preventDefault(),
    $(".custom-menu-hide").finish().toggle(200).css({
        top: e.pageY + "px",
        left: e.pageX + "px"
    })
}),
$(document).bind("mousedown", function(e) {
    !$(e.target).parents(".custom-menu-hide").length > 0 && $(".custom-menu-hide").hide(200)
});
