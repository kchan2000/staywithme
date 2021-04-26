let colors = ["#02a68d", "#c8cd7d", "#bb1e39", "#ba1a62", "#e4633b", "#44225e", "#4e5c5f", "#513c1f", "#016295"]

var canvas;

function windowResized() {
    console.log("resize");
    resizeCanvas(windowWidth, windowHeight);

}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    noStroke();
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}

function keyTyped() {
  
  if (key == 'c'){
    clear();
  }
  
}

  

function mouseDragged() {
    fill(random(colors));
    triangle(mouseX, mouseY, mouseX - 10, mouseY - 20, mouseX + 10, mouseY - 20);
}

function draw() {
//    background("beige");

}
