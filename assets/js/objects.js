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