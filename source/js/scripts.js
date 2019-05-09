var ifNoJs = function () {
  var noJs = document.querySelector(".site-nav__wrapper--nojs");
  console.log(noJs)
  noJs.classList.remove("site-nav__wrapper--nojs");
  noJs.classList.add("site-nav__wrapper--close");
}

ifNoJs ();

var navToggle = document.querySelector(".site-nav__toggle");
var navWrap = document.querySelector(".site-nav__wrapper");
var headerTop = document.querySelector(".site-header__nav-wrapper");
console.log(headerTop);

navToggle.addEventListener( "click", function(evt) {
  evt.preventDefault();
  navToggle.classList.toggle("site-nav__toggle--open");
  navWrap.classList.toggle("site-nav__wrapper--close");
  navWrap.classList.toggle("site-nav__list--close");
  headerTop.classList.toggle("site-header__nav-wrapper--close")
});
