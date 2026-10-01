function setup() {
    createCanvas(300,300)
}
function draw() {
background(205,0,255)
fill(0,255,255,200)
strokeWeight(30)
stroke(0,0,200, 100)
rectMode(CENTER)
rect(150,150,100,300)
fill(0,255,255, 200)
strokeWeight(30)
stroke(0,0,200, 100)
rectMode(CENTER)
rect(150,150,300,100)
fill(255,255,0,100)
stroke(255,255,200, 100)
triangle(150,100,100,200,200,200);
triangle(100,100,200,100,150,200)
}