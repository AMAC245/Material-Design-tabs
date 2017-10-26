'use strict';

//create ripple
const tabs = document.querySelectorAll('li');

Array.prototype.forEach.call(tabs, function (b) {
  b.addEventListener('click', createRipple);
});

function createRipple(e) {
  const circle = document.createElement('div');
  this.appendChild(circle);

  let d = Math.max(this.clientWidth, this.clientHeight);

  circle.style.width = circle.style.height = d + 'px';

  const dimensions = this.getBoundingClientRect();
  circle.style.left = e.clientX - dimensions.left - d / 2 + 'px';
  circle.style.top = e.clientY - dimensions.top - d / 2 + 'px';

  circle.classList.add('ripple');
}

//slide to corresponding tab
$("li").click(function () {
  const tabPosition = $(this).index();
  const slide = 160 * tabPosition;

  $(".slider").css({
    left: slide + "px"
  });
});
