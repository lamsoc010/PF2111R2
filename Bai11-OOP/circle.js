class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return 2 * Math.PI * this.radius;
    }

    getArea() { 
        return Math.PI * this.radius * this.radius;
    }

    drawCircle() {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(250, 250, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}