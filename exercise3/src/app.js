  $(function(){$("button").click(function (event) {
      var elem = $(this.parentNode.childNodes[7]);
      $(".fa-angle-up").addClass("fa-angle-down");
      $(".fa-angle-up").removeClass("fa-angle-up");
      if (elem.hasClass("active")) {
          $(elem).toggle();
          $(elem).removeClass("active");
          $(this).removeClass("fa-angle-up");
          $(this).addClass("fa-angle-down");
      } else {
          $(".active").toggle();
          $(".active").removeClass("active");

          $(elem).addClass("active");
          $(elem).show();
          $(this).removeClass("fa-angle-down");
          $(this).addClass("fa-angle-up");
    
      }
    })
  });
