import $ from 'jquery';

$(document).ready(function() {
  $(window).load(function () {
    setTimeout(function () {
      $("#preloader").css({ top: "-100%" });
      $("body").css({ "overflow-y": "scroll" });
      $("#header").css({ top: "0px" });
    }, 100);
    setTimeout(function () {
      $("#preloader").css({ display: "none" });
    }, 500);
  });

  setInterval(function () {
    $(".active").next().addClass("active");
    $(".active").prev().removeClass("active");
    if ($(".sl-img-in:last-child").hasClass("active")) {
      setTimeout(function () {
        $(".sl-img-in:first-child").addClass("active");
        $(".sl-img-in:last-child").removeClass("active");
      }, 3200);
    }
  }, 6400);

  $(".downbutt").click(function () {
    $("html,body").animate(
      { scrollTop: $(".counter").offset().top - 150 },
      1300
    );
  });

  $("#next").click(function () {
    $(".active").next().addClass("active");
    $(".active").prev().removeClass("active");
  });

  $("#prev").click(function () {
    $("#showin .active").prev().addClass("active");
    $("#showin .active").next().removeClass("active");
  });

  $(".con-type");
  var t = $(".con-type"),
    e = $(window);
  e.on("scroll resize", function () {
    e.height();
    var s = e.scrollTop();
    each(t, function () {
      var t = $(this),
        e = t.outerHeight(),
        o = t.offset().top;
      s >= o - 400 && s <= o + e - 25
        ? t.delay(3e3).css({ opacity: "1", top: "0" })
        : t.delay(3e3).css({ opacity: "0", top: "20px" });
    });
  });
  e.trigger("scroll");
  var s = 0;
  $(document).scroll(function () {
    var t = $(this).scrollTop();
    t >= $(".services").offset().top - 400 &&
      ($("#bluebg").delay(3e3).css({ height: "1250px" }),
      $(".services .con-type-cont")
        .delay(3e3)
        .css({ opacity: "1", top: "-20px" }));
    t >= $(".apps").offset().top - 300 &&
      $(".apps-in:last-child,.apps-in:first-child")
        .delay(3e3)
        .css({ opacity: "1" });
    t >= $(".apps").offset().top - 50 &&
      $(".apps-in:nth-child(2)").delay(3e3).css({ opacity: "1" });
    if (s == 0 && t >= $(".counter").offset().top - 400) {
      $(".count").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            { Counter: $(this).text() },
            {
              duration: 6e3,
              easing: "swing",
              step: function (t) {
                $(this).text(Math.ceil(t));
              },
            }
          );
      });
      s = 1;
    }