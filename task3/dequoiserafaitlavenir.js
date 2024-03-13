// de quoi sera fait l'avenir
let travelZ = 1;
let travelX = 1;
let travelY = 1;
let thefuture;
let currentYear = 0;
let scenario = 1;
let ocean = ['#469280', '#2f7a78', '#1d5a67', '#13404d', '#10313e']
let lake = ['#26444c', '#011322', '#13455e', '#256685', '#6497b1']
let thebigone = 1.7;
let bygones = 0.001;

function preload() {
    //<Statistics Canada. Table 17-10-0057-01  Projected population, by projection scenario, age and sex, as of July 1 (x 1,000)
    //https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710005701
    thefuture = loadTable('1710005701-noSymbol_trimmed.csv', 'csv', 'header');
}

function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
    frameRate(7);
    water = lake;
    shutDownEverything();
}

function shutDownEverything() {
    //reset the random values after awhile to keep things lively    
    background('#424242');
    destin = random(60, 99);
    kismet = random(1.5, 2.1); //factor height translation
    fate = random(1.618, 3.14); //factor width translation
    circumstance = random(15, 35);
    circonstance = random(20, 40);
    dizzy = random(8, 32);
    currentYear = 0;
    console.log('r', destin, kismet, fate, circumstance, circonstance, dizzy);
}

function draw() {
    size = circumstance;

    ambientLight(destin);

    // add point light 
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    pointLight(255, 255, 255, locX, locY, 50);
    specularMaterial(circonstance);
    shininess(80);

    //change the direction of travel into the future
    if (frameCount % 243 == 0) {
        travelX *= -1;
        scenario += 1;
    };
    if (frameCount % 877 == 0) { travelY *= -1 };
    if (mouseIsPressed) {
        shutDownEverything;
        travelZ *= -1;
    }
    currentYear += 1;
    if (currentYear == thefuture.getRowCount()) { currentYear = 0 };
    if (scenario == thefuture.getColumnCount()) { scenario = 1 };
    translate(-width / fate, -height / kismet, 0);
    futuresize = parseFloat(thefuture.getString(currentYear, scenario)) / parseFloat(thefuture.getString(0, scenario));
    futuresize = futuresize || 1;
    xs = 1;
    ys = 1;
    zs = 1;
    for (x = 0; x < width; x += size) {
        for (y = 0; y < height; y += size) {
            normalMaterial();
            c = Math.floor(y % water.length);
            push();
            translate(x + random(-1, 1) * size, y + random(-1, 1) * size, 0);
            rotateZ(travelZ * frameCount * 0.05);
            rotateX(travelX * frameCount * 0.04);
            rotateY(travelY * frameCount * 0.03);
            fill(color(water[c]));
            xs *= futuresize * random(0.88, 0.99);
            ys *= futuresize * random(0.77, 0.99);
            zs *= futuresize * random(0.66, 0.99);
            ellipsoid(constrain(xs, bygones * size, thebigone * size), constrain(ys, bygones * size, thebigone * size), constrain(zs, bygones * size, thebigone * size));
            console.log(xs, ys, zs, currentYear + 2024);
            pop();
        }
    }
}