// variables declaration
var canvas, cxt; // canvas
var colorsArr, circlesArr; // arrays
var circles, minRadius, maxRadius, mouseObj; // constants

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

// mini function
function randRange(min, max) {
    return Math.random() * (max - min) + min;
}


// spawn new random circles with each resize
function init() {
    circlesArr = [];
    // for the amount of circles you want
    // push a new circle of random location and speed into an arr
    for (var i = 0; i < circles; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var radius = randRange(20, 30);
        var dx = (Math.random() - 0.5) * 3;
        var dy = (Math.random() - 0.5) * 3;

        circlesArr.push(new Circle(x, y, radius, dx, dy));
    }
}


// Circle object declared
function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = minRadius;
    this.dx = dx;
    this.dy = dy;
    this.arcEnd = Math.PI * 2;
    this.color = colorsArr[Math.floor(Math.random() * colorsArr.length)];
    
    // draw the circle
    this.draw = function() {
        cxt.beginPath();
        cxt.arc(this.x, this.y, this.radius, this.arcEnd, false);
        cxt.fillStyle = this.color;
        cxt.fill();
    }
    
    // move the circle's x and y locations based on the dx and dy
    this.move = function() {
        if (this.x - this.radius > window.innerWidth) {
            this.x = 0 - this.radius;
        }
        if (this.x + this.radius < 0) {
            this.x = window.innerWidth + this.radius;
        }
        if (this.y - this.radius > window.innerHeight) {
            this.y = 0 - this.radius;
        }
        if (this.y + this.radius < 0) {
            this.y = window.innerHeight + this.radius;
        }
        
        this.x += this.dx;
        this.y += this.dy;
        
        // interact as the mouse approaches the circle
        if (mouseObj.x - this.x < 50 && mouseObj.x - this.x > -50 && mouseObj.y - this.y < 50 && mouseObj.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > minRadius) {
            this.radius -= 1;
        }
        
        // redraw the circle with each animation loop
        this.draw();
    }
}


// animate in a continuous loop
function animate() {
    requestAnimationFrame(animate);
    // clear the canvas each time animation is run
    cxt.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    // move each circle in the arr
    circlesArr.forEach(function(circle) {
        circle.move();
    });
}


// on load
animate();
init();