/// <reference types="../@types/jquery" />

//Sidebar
$("#closebtn").on("click", function () {
  $(".menu").animate({ width: "toggle" }, 500);
});
$("#openbtn").on("click", function () {
  $(".menu").animate({ width: "toggle" }, 500);
});

//Second Section
$(".singer").on("click", function () {
  const element = this.nextElementSibling;
  $(".singer").siblings(".quote").slideUp(500);
  //check if the singer quote is displayed
  if ($(element).css("display") == "none") {
    $(element).slideToggle(500);
  }
});

//Event Timer
const countdown = new Date("Jul 28, 2031 15:15:25").getTime();
const day_change = 1000 * 60 * 60 * 24;
const hr_change = 1000 * 60 * 60;
const min_change = 1000 * 60;
const sec_change = 1000;
function displayTime() {
  const now = new Date().getTime();
  const diff = countdown - now;
  const days = Math.floor(diff / day_change);
  const mins = Math.floor((diff % day_change) / hr_change);
  const hrs = Math.floor((diff % hr_change) / min_change);
  const secs = Math.floor((diff % min_change) / sec_change);

  $(".day").html(days);
  $(".hour").html(mins);
  $(".minute").html(hrs);
  $(".second").html(secs);
}

displayTime();

setInterval(() => {
  displayTime();
}, 1000);

//Goto Section
$("a[href^='#']").on("click", function () {
  const topDistance = $(this.getAttribute("href")).offset().top;
  $("body,html").animate({ scrollTop: topDistance }, 2000);
});

//Characters Remaining
let chars = 100;
$("textarea").on("keyup", (e) => {
  chars = 100 - e.target.value.length;
  $('#number').html(chars)
});
