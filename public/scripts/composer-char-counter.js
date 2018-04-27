$(function() {
  $(".new-tweet textarea").on("input", function(){
    const $ogNum = $(".new-tweet .counter").contents();
    let countNum  = 140 - $(this).val().length;
    $ogNum.replaceWith(countNum);
    if (countNum < 0) {
      $(".counter").eq(0).css( "color", "red");
    }
    else {
      $(".counter").eq(0).css( "color", "black");
    }
  });
  $("#tweet-submit").on("submit", function(){
    const $ogNum = $(".new-tweet .counter").contents();
    let countNum  = 140 - $(this).val().length;
    $ogNum.replaceWith(countNum);
    if (countNum < 0) {
      $(".counter").eq(0).css( "color", "red");
    }
    else {
      $(".counter").eq(0).css( "color", "black");
    }
  })
});