// variables declaration
var canvas, cxt; // canvas
var colorsArr, circlesArr; // arrays
var circles, minRadius, maxRadius, mouseObj; // constants
var body, div, divHtml;

canvas = document.querySelector('canvas');
cxt = canvas.getContext('2d');

colorsArr = ['#f2385a', '#f5a503', '#e9f1df', '#4ad9d9', '#36b1bf'];
circlesArr = [];
circles = 1400;
minRadius = 4;
maxRadius = 35;
mouseObj = {
    x: undefined,
    y: undefined
}

body = document.querySelector('body');
div = document.createElement('div');
div.classList.add('hero');
divHtml = '<h1>Dave Regg</h1><hr>';
divHtml += '<p>A Computer Programmer</p>';
div.innerHTML = divHtml;
body.appendChild(div);

// set the height and width of the canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;



// resize accordingly
window.addEventListener('resize', function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    init();
});

window.addEventListener('mousemove', function(ev) {
    mouseObj.x = ev.x;
    mouseObj.y = ev.y;
});


// on load
animate();
init();