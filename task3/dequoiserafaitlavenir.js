// de quoi sera fait l'avenir
let travel = 1;
shapes = [String.fromCodePoint(0x1bfc),
    String.fromCodePoint(0x1bfd),
    String.fromCodePoint(0x1bfe),
    String.fromCodePoint(0x0df4),
    String.fromCodePoint(0x0c84),
    String.fromCodePoint(0x07f7),
    String.fromCodePoint(0x0489),
    String.fromCodePoint(0x2301),
    String.fromCodePoint(0x0488),
    String.fromCodePoint(0x058d),
    String.fromCodePoint(0x058e)
]

function preload() {
    thefuture = loadTable('GEPdata.csv', 'csv', 'header');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    //createCanvas(windowWidth, windowHeight);
    //   frameRate(10);


}

function draw() {
    background('#245899');
    size = 25;
    stroke(1);
    //make like weaving fates
    for (x = 0; x < width; x += size) {
        for (y = 0; y < height; y += size) {
            c = (x % 11);
            line(x, y, x + size, y + size);
            //line(x, y, x, y + size);
            fill(255);
            stroke(0);
            strokeWeight(4);
            // text(shapes[3], x, y);
            //cylinder(10, 100, 24, 16, true, false);
            //point(x, y, x + 100);
        }
    }
    //https://p5js.org/reference/#/p5/specularMaterial
    ambientLight(60);

    // add point light to showcase specular material
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    pointLight(255, 255, 255, locX, locY, 50);

    specularMaterial(25);
    shininess(80);
    torus(30, 10, 64, 64);
    //add data 
    //    beginShape();
    //    vertex(0, 0, 5, 0, 0);
    //    vertex(100, 0, 63, 1, 0);
    //    vertex(100, 100, 77, 1, 1);
    //    vertex(0, 100, 0, 0, 1);
    //    endShape(CLOSE); // makes last vertex connect to first
    if (mouseIsPressed) { travel *= -1 }
    translate(-width / 2, -height / 2, 0);
    for (x = 0; x < width; x += size) {
        for (y = 0; y < height; y += size) {
            //ambientMaterial(244);            
            normalMaterial();
            push();
            translate(x, y, 0);
            rotateZ(travel * frameCount * 0.01);
            rotateX(frameCount * 0.01);
            rotateY(frameCount * 0.01);
            ellipsoid(x + 5, y + 6, 11);
            pop();
        }
    }
}