//Sticky Nav
$(document).ready(function () {
  /* hamburger icon switch - use bootstrap event */
  $(".splash-site-header .navbar").on("show.bs.collapse", function () {
    $(".navbar-toggler-icon").removeClass("collapse-svg");
    $(".navbar-toggler-icon").addClass("expanded-svg");
  });

  $(".splash-site-header .navbar").on("hide.bs.collapse", function () {
    $(".navbar-toggler-icon").removeClass("expanded-svg");
    $(".navbar-toggler-icon").addClass("collapse-svg");
  });

  $(".splash-site-header .dropdown").on("show.bs.dropdown", function () {
    $(".splash-site-header .nav-location > div > a")
      .css({ "background-color": "white" })
      .removeClass("text-white")
      .addClass("text-black");
  });

  $(".splash-site-header .dropdown").on("hide.bs.dropdown", function () {
    $(".splash-site-header .nav-location > div > a")
      .css({ "background-color": "inherit" })
      .removeClass("text-black")
      .addClass("text-white");
  });

  /* home redirection on logo click */
  $(".splash-site-header .nav-logo").click(function () {
    window.open("/index.html", "_self");
  });
});
