// loader
setTimeout(()=> {
  $(".loader").fadeOut(100);
}, 3000);
// media file
var audio = new Audio("1.mp3");
// flag
var i = 0;
// play & pause button
$("#play-btn").click(()=> {
  if (audio.paused) {
    audio.play();
    $("#play-btn").html("pause_circle");
    $(".album").css("animation-play-state", "running");
  } else {
    audio.pause();
    $(".album").css("animation-play-state", "paused");
    $("#play-btn").html("play_circle_outline");
  }
});
// change dark/light mode
$("#mode").click(()=> {
  if (i == 0) {
    i = 1;
    $("#mode").html("light_mode").addClass("act");
    $("body,.hero,.album").addClass("dark");
  } else {
    i = 0;
    $("#mode").html("dark_mode").removeClass("act")
    $("body,.hero,.album").removeClass("dark");
  }
});
// prev & next and repeat & shuffle button for reset audio
$("#rep,#mex,#prev,#next").click(()=> {
  audio.currentTime = 0;
  audio.play();
  $("#play-btn").html("pause_circle");
  $(".album").css("animation-play-state", "running");
});