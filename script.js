/* Simple VanillaJS to toggle class */
window.onload=function(){
	setTimeout(function() {
  [].map.call(document.querySelectorAll('.profile'), function(el) {
    el.classList.toggle('profile--open');
  });
}, 700);


}