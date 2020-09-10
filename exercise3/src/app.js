  $("button").click(function (event) {
      var elem = $(this.parentNode.childNodes[9]);

      if (elem.hasClass("active")) {
          $(elem).toggle();
          $(elem).removeClass("active");
      } else {
          $(".active").toggle();
          $(".active").removeClass("active");

          $(elem).addClass("active");
          $(elem).show();
      }
  });
