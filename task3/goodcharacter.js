    let backlines = true;
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
        createCanvas(windowWidth, windowHeight, WEBGL);
        //createCanvas(windowWidth, windowHeight);
        frameRate(20);

    }

    function draw() {
        //make like weaving fates
        if (backlines) {
            for (x = 0; x < width; x += size) {
                for (y = 0; y < height; y += size) {
                    c = (x % 11);
                    //line(x - size * 2, y - size * 3, x + size * 2, y + size * 3);
                    //line(x, y, x, y + size);
                    fill(255);
                    stroke(0);
                    //strokeWeight(4);
                    //text(shapes[c], x, y);
                    //cylinder(10, 100, 24, 16, true, false);
                    //point(x, y, x + 100);
                }
            }
        }
    }