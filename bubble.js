class Bubble {
    constructor() {
        // Properties (State)
        this.x = random(0, width);
        this.y = random(0, height);
        this.r = random(15, 30);
        this.speed = random(1, 3);
        this.col = random(colors);
    } 

     // Methods (Behaviour)
     move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    show() {
        fill(this.col);
        ellipse(this.x, this.y, this.r * 2);
    }

    isClicked() {
        // Teleport to a random spot if clicked
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.r) {
            return true;
        }
        return false;
    }
}