// JavaScript Document







$(document).ready(function(){
    length = 200;
    cHtml = $(".content").html();
    cText = $(".content").text().substr(0, length).trim();
    $(".content").addClass("compressed").html(cText + "... <a href='#' class='exp'>More</a>");
    window.handler = function()
    {
        $('.exp').click(function(){
            if ($(".content").hasClass("compressed"))
            {
                $(".content").html(cHtml + "<a href='#' class='exp'>Less</a>");
                $(".content").removeClass("compressed");
                handler();
                return false;
            }
            else
            {
                $(".content").html(cText + "... <a href='#' class='exp'>More</a>");
                $(".content").addClass("compressed");
                handler();
                return false;
            }
        });
    }
    handler();
});






$(document).ready(function () {
  $(".social_gallery li:lt(12)").show();

  $(".less").hide();

  var items = 24;

  var shown = 12;

  $(".more").click(function () {
    $(".less").show();

    shown = $(".social_gallery li:visible").size() + 6;

    if (shown < items) {
      $(".social_gallery li:lt(" + shown + ")").show();
    } else {
      $(".social_gallery li:lt(" + items + ")").show();

      $(".more").hide();
    }
  });

  $(".less").click(function () {
    $(".social_gallery li").not(":lt(12)").hide();

    $(".more").show();

    $(".less").hide();
  });
});

(function () {
  /**

     

     * This is the call we have to do to execute

     

     * the plugin giving a custom params

     

     */

  $("#booNavigation").booNavigation({
    slideSpeed: 400,
  });
})();

$(document).ready(function () {
  $("#menu_row ul li img").hide();

  $("#menu_row ul li").hover(
    function () {
      $(this).find("img").fadeIn("slow");
    },

    function () {
      $("#menu_row ul li").mouseleave(function () {
        $(this).find("img").hide();
      });
    }
  );
});

$(document).ready(function () {
  $("#countries").msDropdown();
});
$(document).ready(function () {
  $("#countries2").msDropdown();
});

$(function () {
  $("#countries").on("change", function () {
    var selectedcountry = $("#countries option:selected").val();
	
	console.log(selectedcountry);
    if (selectedcountry == "locator") {
      window.open($("#countries option:selected").attr("url"), "_blank");
    } else {
   $("#countryChanged").html("I want to stay on <a class=\"countryselected\" href=\"https://"+selectedcountry+".citizenshop.me\">https://"+selectedcountry+".citizenshop.me  </a>");
      $("#consolPopup2").fancybox({
        'overlayShow': true
    }).trigger('click');	
      //window.location.href = $("#countries option:selected").attr("url");
    }
  });
});
$(function () {
  $("#countries2").on("change", function () {
    var selectedcountry = $("#countries2 option:selected").val();
	
	console.log(selectedcountry);
    if (selectedcountry == "locator") {
      window.open($("#countries2 option:selected").attr("url"), "_blank");
    } else {
   $("#countryChanged").html("I want to stay on <a class=\"countryselected\" href=\"https://"+selectedcountry+".citizenshop.me\">https://"+selectedcountry+".citizenshop.me  </a>");
      $("#consolPopup2").fancybox({
        'overlayShow': true
    }).trigger('click');	
      //window.location.href = $("#countries2 option:selected").attr("url");
    }
  });
});

(function (window) {
  // get vars

  var searchEl = document.querySelector("#input");

  var labelEl = document.querySelector("#label");

  // register clicks and toggle classes

  labelEl.addEventListener("click", function () {
    if (classie.has(searchEl, "focus")) {
      classie.remove(searchEl, "focus");

      classie.remove(labelEl, "active");
    } else {
      classie.add(searchEl, "focus");

      classie.add(labelEl, "active");
    }
  });

  // register clicks outisde search box, and toggle correct classes

  document.addEventListener("click", function (e) {
    var clickedID = e.target.id;

    if (clickedID != "search-terms" && clickedID != "search-label") {
      if (classie.has(searchEl, "focus")) {
        classie.remove(searchEl, "focus");

        classie.remove(labelEl, "active");
      }
    }
  });
})(window);

$(".filter_bt").on("click", function () {
  $("#filter_menu").css("display", "block");
});

$(".close").on("click", function () {
  $("#filter_menu").css("display", "none");
});

/*$(document).ready(function () {
  $(".add").click(function (e) {
    e.stopPropagation();

    if ($(this).hasClass("active")) {
      $(".list_detail_share").fadeOut(200);

      $(this).removeClass("active");
    } else {
      $(".list_detail_share").delay(300).fadeIn(200);

      $(this).addClass("active");
    }
  });

  function closeMenu() {
    $(".list_detail_share").fadeOut(200);

    $(".add").removeClass("active");
  }

  $(document.body).click(function (e) {
    closeMenu();
  });

  $(".list_detail_share").click(function (e) {
    e.stopPropagation();
  });
});
*/
$(".banner_desktop").on("click", function () {
  $("#filter_menu").css("display", "none");
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  //console.log(scroll);

  if (scroll >= 250) {
    //console.log('a');

    $(".staticnav").addClass("fixednav");
  } else {
    //console.log('a');

    $(".staticnav").removeClass("fixednav");
  }
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  //console.log(scroll);

  if (scroll >= 500) {
    //console.log('a');

    $(".staticfilter").addClass("fixedfilter");
  } else {
    //console.log('a');

    $(".staticfilter").removeClass("fixedfilter");
  }
});

$("#banner_desktop").bxSlider({
  auto: true,

  autoControls: true,

  mode: "horizontal",

  useCSS: false,

  infiniteLoop: true,

  pager: true,

  easing: "easeInOutQuint",

  slideMargin: 0,

  pause: 10000,

  speed: 2000,
});

$("#banner_mobile").bxSlider({
  auto: true,

  autoControls: true,

  mode: "horizontal",

  useCSS: false,

  infiniteLoop: true,

  pager: false,

  easing: "easeInOutQuint",

  slideMargin: 0,

  pause: 10000,

  speed: 2000,
});

$(".listing").bxSlider({
  minSlides: 1,

  maxSlides: 5,

  mode: "horizontal",

  useCSS: false,

  infiniteLoop: false,

  pager: false,

  easing: "easeInOutQuint",

  pager: false,
});






$(".variations").bxSlider({
  minSlides: 2,

  maxSlides: 4,

  auto: false,


  autoControls: true,

  mode: "horizontal",

  useCSS: false,

  infiniteLoop: true,

  pager: false,

  easing: "easeInOutQuint",

  pager: false,

  slideWidth: 292,

slideMargin: 0

});








$(function () {
  var slider1 = $(".bxslider_car01").bxSlider({
    minSlides: 2,

    maxSlides: 4,

    auto: false,

    autoControls: true,

    mode: "horizontal",

    useCSS: false,

    infiniteLoop: true,

    pager: false,

    slideWidth: "270%",

    slideMargin: 30,

    speed: 5000,
  });

  var slider2 = $(".bxslider_car02").bxSlider({
    //nextSelector: '#slider-next',

    // prevSelector: '#slider-prev',

    minSlides: 2,

    maxSlides: 4,

    auto: false,

    autoControls: true,

    mode: "horizontal",

    useCSS: false,

    infiniteLoop: true,

    pager: false,

    easing: "easeInOutQuint",

    pager: false,

    slideWidth: "270%",

    slideMargin: 30,
  });

  var slider3 = $(".bxslider_car03").bxSlider({
    //nextSelector: '#slider-next',

    // prevSelector: '#slider-prev',

    minSlides: 2,

    maxSlides: 4,

    moveSlides: 4,

    auto: false,

    autoControls: true,

    mode: "horizontal",

    useCSS: false,

    infiniteLoop: true,

    pager: false,

    easing: "easeInOutQuint",

    pager: false,

    slideWidth: "270%",

    slideMargin: 30,
  });

  $("#tb01").on("click", function () {
    slider1.reloadSlider();
  });

  $("#tb02").on("click", function () {
    slider2.reloadSlider();
  });

  $("#tb03").on("click", function () {
    slider3.reloadSlider();
  });
});

var checkScroll = function () {
  if ($(".secondary_footer_bg")[0]) {
    var el = $(".secondary_footer_bg");

    var top_of_object = el.offset().top;

    var bottom_of_object = el.offset().top + el.outerHeight();

    var top_of_window = $(window).scrollTop();

    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (
      top_of_window <= bottom_of_object &&
      bottom_of_window >= top_of_object
    ) {
      $(".mobilefixedprice02").hide();
      $(".tabbyMobileFixed").hide();

      $(".mobilefixedprice12").hide();
    } else {
      $(".mobilefixedprice02").show();
      $(".tabbyMobileFixed").show();

      $(".mobilefixedprice12").show();
    }
  }
};

$(window).on("scroll", function () {
  checkScroll();
});

// Magnifier Script

$("#zoom_10").elevateZoom({
  easing: true,

  //zoomType	: "inner",

  cursor: "crosshair",

  zoomWindowFadeIn: 500,

  zoomWindowFadeOut: 750,
});

// Magnifier Script

$("#zoom_11").elevateZoom({
  easing: true,

  //zoomType	: "inner",

  cursor: "crosshair",

  zoomWindowFadeIn: 500,

  zoomWindowFadeOut: 750,
});

// Magnifier Script

$("#zoom_12").elevateZoom({
  easing: true,

  //zoomType	: "inner",

  cursor: "crosshair",

  zoomWindowFadeIn: 500,

  zoomWindowFadeOut: 750,
});

// Magnifier Script

$("#zoom_13").elevateZoom({
  easing: true,

  //zoomType	: "inner",

  cursor: "crosshair",

  zoomWindowFadeIn: 500,

  zoomWindowFadeOut: 750,
});

// Write the CSS 'left' value to a span.

function leftValue(handle) {
  return handle.parentElement.style.left;
}

$(function () {
  // BUTTON

  $(".fg-button").hover(
    function () {
      $(this).removeClass("ui-state-default").addClass("ui-state-focus");
    },

    function () {
      $(this).removeClass("ui-state-focus").addClass("ui-state-default");
    }
  );
});

/* Open the sidenav */

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";

  document.getElementById("mySidenav").style.left = "";
}

/* Close/hide the sidenav */

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

  document.getElementById("mySidenav").style.left = "-200px";
} //

/*//////////// Accordion ////////////*/ function myFunction() {
  var x = document.getElementById("myFilterDiv");

  if (x.style.display === "none") {
    x.style.display = "block";

    $("button").text("-");
  } else {
    x.style.display = "none";

    $("button").text("+");
  }
}

/*Modified March 26 2017*/

function showonlyone(thechosenone) {
  $(".newboxes").each(function (index) {
    if ($(this).attr("id") == thechosenone) {
      $(this).show(10);

      $("#" + thechosenone + "img").elevateZoom({
        easing: true,

        cursor: "crosshair",

        zoomWindowFadeIn: 500,

        zoomWindowFadeOut: 750,
      });
    } else {
      $(this).hide(10);
    }
  });
}

$(document).ready(function () {
  hideDiv("#watchLineupUl", "#watchLineup");

  hideDiv("#customerServiceUl", "#customerService");

  hideDiv("#aboutCitizenUl", "#aboutCitizen");

  hideDiv("#stayInTouchUl", "#stayInTouch");
});

function hideDiv(divId, toggleId) {
  $(toggleId).click(function () {
    $(divId).toggle(400);

    return false;
  });
}

function hideScroller() {
  div1 = $(".socialmedia_new");

  div2 = $(".staticfilter");

  div1FromTop = div1.offset().top;

  div2FromTop = $(window).scrollTop() + $(window).height();

  if (div1FromTop <= div2FromTop) div2.hide();
  else div2.show();
}

$(window).scroll(function () {
  hideScroller();
});

/*Modified Nov 26 2017*/






