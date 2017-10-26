'use strict';

//create ripple
var tabs = document.querySelectorAll('li');

Array.prototype.forEach.call(tabs, function (b) {
  b.addEventListener('click', createRipple);
});

function createRipple(e) {
  var circle = document.createElement('div');
  this.appendChild(circle);

  var d = Math.max(this.clientWidth, this.clientHeight);

  circle.style.width = circle.style.height = d + 'px';

  var rect = this.getBoundingClientRect();
  circle.style.left = e.clientX - rect.left - d / 2 + 'px';
  circle.style.top = e.clientY - rect.top - d / 2 + 'px';

  circle.classList.add('ripple');
}

//slide to corresponding tab
$("li").click(function () {
  var tabreference = $(this).index();
  var slide = 160 * tabreference;

  $(".slider").css({
    left: slide + "px"
  });
});