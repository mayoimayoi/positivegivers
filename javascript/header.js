$(function () {
  $(".header-menu--hunger--toggle").click(function () {
    $("#hungermenu").toggleClass("dblock");
    $(".header-menu--hunger--toggle i:first-child").toggleClass("dnone");
    $(".header-menu--hunger--toggle i:nth-child(2)").toggleClass("dnone");
  });
});
