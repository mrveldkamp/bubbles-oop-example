// Bubble OOP Example

// Declare Global Variables
let bubbles = [];
let colors = ['blue', 'red', 'green'];

// Setup Function (runs once before draw)
function setup() {
    createCanvas(800, 600);
    
    // Initialize Global Variables
    for (let n = 0; n < 20; n++) {
        bubbles.push(new Bubble());
    }

    for (let n = 0; n < 10; n++) {
      console.log("hi");
    }
}

// Draw Function (runs 60 frames per second)
function draw() {
    // LOGIC
    
    // DRAW
    background('white');
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

// Event Functions
function mousePressed() {
    // Check if a bubble is clicked
    for (let i = bubbles.length - 1; i >= 0; i--) {
        if (bubbles[i].isClicked()) {
            bubbles.splice(i, 1);
        }
    }
}

function keyPressed() {
    bubbles.push(new Bubble());
}
