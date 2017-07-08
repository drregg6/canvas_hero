// variables declaration
var canvas, cxt; // canvas
var colorsArr, circlesArr; // arrays
var circles, minRadius, maxRadius, mouseObj; // constants
var hero;

canvas = document.querySelector('canvas');
cxt = canvas.getContext('2d');
hero = document.querySelector('.hero');

colorsArr = ['#f2385a', '#f5a503', '#e9f1df', '#4ad9d9', '#36b1bf'];
circlesArr = [];
circles = 400;
minRadius = 4;
maxRadius = 35;
mouseObj = {
    x: undefined,
    y: undefined
}

// set the height and width of the canvas
hero.style.height = window.innerHeight + 'px';
hero.style.width = window.innerWidth + 'px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// resize accordingly
window.addEventListener('resize', function() {
    hero.style.height = window.innerHeight + 'px';
    hero.style.width = window.innerWidth + 'px';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    init();
});

window.addEventListener('mousemove', function(ev) {
    mouseObj.x = ev.x;
    mouseObj.y = ev.y;
});


// on load
animate();
init();