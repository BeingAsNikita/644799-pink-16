var ifNoJs = function () {
  var noJs = document.querySelector(".site-nav__wrapper--nojs");
  console.log(noJs)
  noJs.classList.remove("site-nav__wrapper--nojs");
  noJs.classList.add("site-nav__wrapper--close");
}

ifNoJs ();

var navToggle = document.querySelector(".site-nav__toggle");
var navWrap = document.querySelector(".site-nav__wrapper");

navToggle.addEventListener( "click", function(evt) {
  evt.preventDefault();
  navToggle.classList.toggle("site-nav__toggle--open");
  navWrap.classList.toggle("site-nav__wrapper--close");
});
