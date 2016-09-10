function videoPopUpItin() {
    $(".wpv-link");
    btnOffset = wHeight / 2,
    popUpV.css({
        top: btnOffset
    })
}
function resizeCanvas(t) {
    null !== t && (t.height = $(t).closest(".circles-plate").height(),
    t.width = $(t).closest(".circles-plate").width())
}
function CircleCoord(t, e) {
    this.x = t,
    this.y = e
}
function renderGrid(t, e, i, n, o, r, a) {
    if (null !== t) {
        e.save(),
        e.lineWidth = .5,
        e.strokeStyle = n,
        e.setLineDash([o, r]);
        for (var s = a; s <= t.height; s += i)
            e.beginPath(),
            e.moveTo(a, s),
            e.lineTo(t.width, s),
            e.closePath(),
            e.stroke();
        for (var c = a; c <= t.width; c += i)
            e.beginPath(),
            e.moveTo(c, a),
            e.lineTo(c, t.height),
            e.closePath(),
            e.stroke();
        for (var c = a; c <= t.height; c += i)
            for (var s = a; s <= t.width; s += i) {
                var d = new CircleCoord(s,c);
                circleCoords.push(d)
            }
        e.restore()
    }
}
function Circle(t, e, i, n, o) {
    this.radius = t,
    this.speed = e,
    this.width = i,
    this.xPos = n,
    this.yPos = o,
    this.opacity = .05 + .5 * Math.random(),
    this.randomCircle = Math.floor(2 * Math.random()),
    this.randomCircleMove = Math.floor(2 * Math.random()),
    this.counter = 0;
    var r = Math.floor(2 * Math.random());
    1 == r ? this.sign = -1 : this.sign = 1
}
function drawCircles() {
    function t() {
        cirCtx.clearRect(0, 0, cirCan.width, cirCan.height);
        for (var e = 0; e < circles.length; e++) {
            var i = circles[e];
            i.update()
        }
        null !== cirCanCopy && (cirCtxCopy.clearRect(0, 0, cirCanCopy.width, cirCanCopy.height),
        cirCtxCopy.drawImage(cirCan, 0, 0, cirCanCopy.width, cirCanCopy.height, 0, 0, cirCanCopy.width, cirCanCopy.height)),
        null !== gridCanCopy && (gridCtxCopy.clearRect(0, 0, gridCanCopy.width, gridCanCopy.height),
        gridCtxCopy.drawImage(gridCan, 0, 0, gridCanCopy.width, gridCanCopy.height, 0, 0, gridCanCopy.width, gridCanCopy.height)),
        requestAnimationFrame(t)
    }
    if (null !== cirCan) {
        for (var e = 0; e < circleCoords.length; e++) {
            var i = Math.floor(2 * Math.random());
            if (1 == i)
                ;
            else {
                var n = circleCoords[e].x
                  , o = circleCoords[e].y
                  , r = .2 + 3 * Math.random()
                  , a = 2
                  , s = new Circle(40,r,a,n,o);
                circles.push(s)
            }
        }
        t()
    }
}
function fixXs(t) {
    for (var e = ".sinlge-esteemed", i = $(e).length, n = "<div class='net'></div>", o = 1; t >= o; o++)
        $(e).eq(i - o).parent().prepend(n)
}
function hideForm(t) {
    var e = t.parents("div.wrapper");
    t.find(".btn").removeClass("disabled"),
    $(e).find(".the-form").fadeOut(function() {
        $(e).find(".grateful").fadeIn()
    }),
    t.trigger("reset")
}
function closeGrateful(t) {
    var e = t.parents("div.wrapper");
    t.find(".btn").removeClass("disabled"),
    t.trigger("reset"),
    $(e).find(".grateful").fadeOut(function() {
        $(e).find(".the-form").fadeIn()
    })
}
$(".user-menu-btn").on("click", function(t) {
    t.preventDefault(),
    $("header").toggleClass("menu-opened")
}),
$(".contact-btn").on("click", function(t) {
    t.preventDefault();
    var e = $(".contact-btn").find(".btn")
      , i = $(".pop-up")
      , n = $(".footer").height();
    i.find("section").hasClass("animated") ? ($("body").removeClass("stop"),
    i.height(0),
    i.find("section").removeClass("animated"),
    e.removeClass("disabled")) : (i.find("section").addClass("animated"),
    i.css({
        bottom: n,
        height: "calc(100% - " + n + "px)"
    }),
    $(this).find(".btn").addClass("disabled"),
    $("body").addClass("stop"))
}),
$("html").bind("mousewheel DOMMouseScroll", function(t) {
    $("body").hasClass("stop") && !$(t.target).closest(".bio").length > 0 && !$(t.target).closest(".ui-selectmenu-open").length > 0 && t.preventDefault()
});
var popUpV = $(".video-pop-up");
$(".wpv-link").on("click", function(t) {
    t.preventDefault();
    $(this);
    popUpV.css({
        top: 0,
        height: "100%"
    }),
    popUpV.removeClass("hidden")
}),
$(".close-video").on("click", function(t) {
    t.preventDefault(),
    popUpV.css({
        top: btnOffset,
        height: 0
    }),
    popUpV.addClass("hidden")
});
var btnOffset, cirCan = document.getElementById("circles");
if (null !== cirCan)
    var cirCtx = cirCan.getContext("2d");
var gridCan = document.getElementById("grid");
if (null !== gridCan)
    var gridCtx = gridCan.getContext("2d");
var cirCanCopy = document.getElementById("circles-copy");
if (null !== cirCanCopy)
    var cirCtxCopy = cirCanCopy.getContext("2d");
var gridCanCopy = document.getElementById("grid-copy");
if (null !== gridCanCopy)
    var gridCtxCopy = gridCanCopy.getContext("2d");
var circles = new Array;
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
        window.setTimeout(t, 1e3 / 60)
    }
}(),
window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
    clearTimeout(t)
}
);
var circleCoords = new Array;
Circle.prototype.update = function() {
    this.counter += this.sign * this.speed,
    cirCtx.beginPath(),
    this.theRandomX = 0,
    this.theRandomY = 0,
    this.randomCircleMove ? 1 == this.randomCircle ? (this.theRandomX = Math.cos(this.counter / 100) * this.radius,
    this.theRandomY = 0) : (this.theRandomX = 0,
    this.theRandomY = Math.cos(this.counter / 100) * this.radius) : (this.theRandomX = 0,
    this.theRandomY = 0),
    cirCtx.arc(this.xPos + this.theRandomX, this.yPos + this.theRandomY, this.width, 0, 2 * Math.PI, !1),
    cirCtx.closePath(),
    cirCtx.fillStyle = "rgba(7, 83, 126,1)",
    cirCtx.fill()
}
,
$(".reveal-btn").on("click", function(t) {
    t.preventDefault();
    var e = $(this).closest(".cover-parent");
    e.addClass("smooth");
    var i = e.height()
      , n = $(this).closest(".cover-parent").find(".covered-block")
      , o = e.find(".covering-block")
      , r = o.parent().find(".button-place")
      , a = n.outerHeight() + r.height()
      , s = a - o.height();
    n.hasClass("short") ? (o.height(a),
    n.removeClass("short"),
    e.height(i + s),
    $(this).addClass("h")) : (o.removeAttr("style"),
    e.removeAttr("style"),
    n.addClass("short"),
    $(this).removeClass("h"))
}),
$(".close-grateful").on("click", function(t) {
    t.preventDefault(),
    closeGrateful($(this))
});
