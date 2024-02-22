// de quoi sera fait l'avenir

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

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    //noStroke(0);
    textSize(25);
    frameRate(10);


}

function draw() {
    background('#245899');
    size = 25;
    stroke(1);
    //make like weaving fates
    for (x = 0; x < width; x += size) {
        for (y = 0; y < height; y += size) {
            c = (x % 11);
            //line(x, y, x + size, y + size);
            line(x, y, x, y + size);
            text(shapes[c], x, y);
        }
    }

    //add data from Polymarket API https://github.com/Polymarket/clob-client
    //or python https://github.com/Polymarket/py-clob-client

    if (keyIsPressed) {
        set(0, 0, img);
    }

}