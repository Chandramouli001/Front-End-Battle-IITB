document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("scrolling-container");
    container.addEventListener("wheel", function (event) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const movingText = document.querySelector('.moving-text');

    let position = window.innerWidth; 
    const speed = 2; 

    function moveText() {
        position--;
        movingText.style.left = position + 'px';

        if (position < -movingText.offsetWidth) {
            position = window.innerWidth;
        }

        requestAnimationFrame(moveText);
    }

    moveText();
});
 
   function scrollToDiv(divId) {
        var element = document.getElementById(divId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});
