$(document).ready(function () {

  arrowMoving();

});

function arrowMoving() {
  $("#arrow")
    .animate({
      marginTop: "20px"
    }, 700, "", function () {
      $("#arrow")
        .animate({
          marginTop: "0px"
        }, 700, "", function () {

          arrowMoving();
        });
    });
}