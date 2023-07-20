$(function () {
  //gyobo
  $("#gyobobox")
    .mouseenter(function () {
      $("#gyobo > li").stop().animate({ marginTop: "-1230px" }, 8000);
    })
    .mouseleave(function () {
      $("#gyobo > li").stop().animate({ marginTop: "0px" }, 800);
    });

  //vittz
  $("#vittzbox")
    .mouseenter(function () {
      $("#vittz > li").stop().animate({ marginTop: "-2550px" }, 8000);
    })
    .mouseleave(function () {
      $("#vittz > li").stop().animate({ marginTop: "0px" }, 800);
    });

  //lvmh
  $("#lvmhbox")
    .mouseenter(function () {
      $("#lvmh > li").stop().animate({ marginTop: "-1930px" }, 8000);
    })
    .mouseleave(function () {
      $("#lvmh > li").stop().animate({ marginTop: "0px" }, 800);
    });

  //설공
  $("#sugafreebox")
    .mouseenter(function () {
      $("#sugafree > li").stop().animate({ marginTop: "-1900px" }, 8000);
    })
    .mouseleave(function () {
      $("#sugafree > li").stop().animate({ marginTop: "0px" }, 800);
    });
});
