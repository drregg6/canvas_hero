var canvas = document.querySelector('canvas');
var cxt = canvas.getContext('2d');
var colorsArr = ['#f2385a', '#f5a503', '#e9f1df', '#4ad9d9', '#36b1bf'];
var circlesArr = [];
var circles = 1000;
var mouseObj = {
    x: undefined,
    y: undefined
}

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
animate();
init();

window.addEventListener('resize', function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    init();
});

window.addEventListener('mousemove', function(ev) {
    mouseObj.x = ev.x;
    mouseObj.y = ev.y;
});

function randRange(min, max) {
    return Math.random() * (max - min) + min;
}

function init() {
    circlesArr = [];
    for (var i = 0; i < circles; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var radius = randRange(20, 30);
        var dx = (Math.random() - 0.5) * 3;
        var dy = (Math.random() - 0.5) * 3;

        circlesArr.push(new Circle(x, y, radius, dx, dy));
    }
}

function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.dx = dx;
    this.dy = dy;
    this.arcEnd = Math.PI * 2;
    this.color = colorsArr[Math.floor(Math.random() * colorsArr.length)];
    
    this.draw = function() {
        cxt.beginPath();
        cxt.arc(this.x, this.y, this.radius, this.arcEnd, false);
        cxt.fillStyle = this.color;
        cxt.fill();
    }
    
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
        
        if (mouseObj.x - this.x < 50 && mouseObj.x - this.x > -50 && mouseObj.y - this.y < 50 && mouseObj.y - this.y > -50) {
            if (this.radius < 40) {
                this.radius += 1;
            }
        } else if (this.radius > 5) {
            this.radius -= 1;
        }
        
        this.draw();
    }
}

function animate() {
    requestAnimationFrame(animate);
    cxt.clearRect(0, 0, window.innerWidth, window.innerHeight);

    circlesArr.forEach(function(circle) {
        circle.move();
    });
}