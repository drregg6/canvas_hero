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