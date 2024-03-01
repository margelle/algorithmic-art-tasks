// de quoi sera fait l'avenir
let travelZ = 1;
let travelX = 1;
let travelY = 1;
let thefuture;
let currentYear = 0;
let scenario = 1;
let ocean = ['#469280', '#2f7a78', '#1d5a67', '#13404d', '#10313e']
let lake = ['#26444c', '#011322', '#13455e', '#256685', '#6497b1']


function preload() {
    //<Statistics Canada. Table 17-10-0057-01  Projected population, by projection scenario, age and sex, as of July 1 (x 1,000)
    //https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710005701
    thefuture = loadTable('1710005701-noSymbol_trimmed.csv', 'csv', 'header');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(7);
    water = lake;
    shutDownEverything();
}

function shutDownEverything() {
    //reset the random values after awhile to keep things lively    
    background('#424242');
    destin = random(60, 99); //ambientLight
    kismet = random(1.5, 4); //division factor for initial height translation
    fate = random(1.25, 4); //division factor for initial width translation
    circumstance = random(15, 35); //size of loop steps
    circonstance = random(20, 40); //specularMaterial
    dizzy = random(8, 32);

    console.log('reset');
}

function draw() {
    size = circumstance;

    ambientLight(destin);

    // add point light 
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    pointLight(255, 255, 255, locX, locY, 50);
    // if (frameCount % 60 === 0) { cam.lookAt(random(-50, 50), random(-50, 50), 0); }
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
            translate(x, y, 0);
            rotateZ(travelZ * frameCount * 0.05);
            rotateX(travelX * frameCount * 0.04);
            rotateY(travelY * frameCount * 0.03);
            fill(color(water[c]));
            xs *= futuresize * random(0.88, 0.99);
            ys *= futuresize * random(0.77, 0.99);
            zs *= futuresize * random(0.66, 0.99);
            ellipsoid(xs, ys, zs);
            //ellipsoid(1 + x * futuresize, 1 + y * futuresize, 1 + y * futuresize);
            pop();
            if (xs > width || ys > height || zs > width) { break };
        }
        if (xs > width || ys > height || zs > width) { break };
    }

}

function footnotes() {
    footnotelist = [
        '1	The base population for these projections is derived from the official preliminary postcensal estimates of the population for Canada, provinces and territories as of July 1, 2018. In all scenarios, the population is projected until 2043 for the provinces and territories, and until 2068 for Canada as a whole. For more detail on the assumptions and scenarios, please refer to the projection report (catalogue 91-520) and the technical report (catalogue 91-620). Because of rounding, counts within tables may differ from the totals.',
        '2	The population is projected until 2043 for the provinces and territories, and until 2068 for Canada as a whole.',
        '3	The low-growth scenario contains the following assumptions at the Canada level: the total fertility rate reaches 1.40 children per woman in 2042/2043 and remains constant thereafter; life expectancy at birth reaches 85.6 years for males and 88.8 years for females in 2067/2068; interprovincial migration is based on the trends observed between 1991/1992 and 2016/2017; the immigration rate reaches 0.65% in 2042/2043 and remains constant thereafter; the annual number of non-permanent residents reaches 1,080,910 in 2043 and remains constant thereafter; the net emigration rate reaches 0.18% in 2042/2043 and remains constant thereafter.',
        '4	The medium-growth (M1) scenario contains the following assumptions at the Canada level: the total fertility rate reaches 1.59 children per woman in 2042/2043 and remains constant thereafter; life expectancy at birth reaches 87.0 years for males and 89.0 years for females in 2067/2068; interprovincial migration is based on the trends observed between 1991/1992 and 2016/2017; the immigration rate reaches 0.83% in 2042/2043 and remains constant thereafter; the annual number of non-permanent residents reaches 1,397,060 in 2043 and remains constant thereafter; the net emigration rate reaches 0.15% in 2042/2043 and remains constant thereafter.',
        '5	The medium-growth (M2) scenario contains the following assumptions at the Canada level: the total fertility rate reaches 1.59 children per woman in 2042/2043 and remains constant thereafter; life expectancy at birth reaches 87.0 years for males and 89.0 years for females in 2067/2068; interprovincial migration is based on the trends observed between 1995/1996 and 2010/2011; the immigration rate reaches 0.83% in 2042/2043 and remains constant thereafter; the annual number of non-permanent residents reaches 1,397,060 in 2043 and remains constant thereafter; the net emigration rate reaches 0.15% in 2042/2043 and remains constant thereafter.',
        '6	The medium-growth (M3) scenario contains the following assumptions at the Canada level: the total fertility rate reaches 1.59 children per woman in 2042/2043 and remains constant thereafter; life expectancy at birth reaches 87.0 years for males and 89.0 years for females in 2067/2068; interprovincial migration is based on the trends observed between 2003/2004 and 2008/2009; the immigration rate reaches 0.83% in 2042/2043 and remains constant thereafter; the annual number of non-permanent residents reaches 1,397,060 in 2043 and remains constant thereafter; the net emigration rate reaches 0.15% in 2042/2043 and remains constant thereafter.',
        '7	The medium-growth (M4) scenario contains the following assumptions at the Canada level: the total fertility rate reaches 1.59 children per woman in 2042/2043 and remains constant thereafter; life expectancy at birth reaches 87.0 years for males and 89.0 years for females in 2067/2068; interprovincial migration is based on the trends observed between 2009/2010 and 2016/2017; the immigration rate reaches 0.83% in 2042/2043 and remains constant thereafter; the annual number of non-permanent residents reaches 1,397,060 in 2043 and remains constant thereafter; the net emigration rate reaches 0.15% in 2042/2043 and remains constant thereafter.',
        '8	The medium-growth (M5) scenario contains the following assumptions at the Canada level: the total fertility rate reaches 1.59 children per woman in 2042/2043 and remains constant thereafter; life expectancy at birth reaches 87.0 years for males and 89.0 years for females in 2067/2068; interprovincial migration is based on the trends observed between 2014/2015 and 2016/2017; the immigration rate reaches 0.83% in 2042/2043 and remains constant thereafter; the annual number of non-permanent residents reaches 1,397,060 in 2043 and remains constant thereafter; the net emigration rate reaches 0.15% in 2042/2043 and remains constant thereafter.',
        '9	The medium-growth (M6) scenario contains the following assumptions at the Canada level: the total fertility rate reaches 1.59 children per woman in 2042/2043 and remains constant thereafter; life expectancy at birth reaches 83.7 years for males and 87.4 years for females in 2042/2043; interprovincial migration is based on the trends observed between 2018/2019 and 2020/2021; the immigration rate reaches 0.83% in 2042/2043 and remains constant thereafter; the annual number of non-permanent residents reaches 1,795,809 in 2043 and remains constant thereafter; the net emigration rate reaches 0.15% in 2042/2043 and remains constant thereafter.',
        '10	The high-growth scenario contains the following assumptions at the Canada level: the total fertility rate reaches 1.79 children per woman in 2042/2043 and remains constant thereafter; life expectancy at birth reaches 88.0 years for males and 91.3 years for females in 2067/2068; interprovincial migration is based on the trends observed between 1991/1992 and 2016/2017; the immigration rate reaches 1.08% in 2042/2043 and remains constant thereafter; the annual number of non-permanent residents reaches 1,944,400 in 2043 and remains constant thereafter; the net emigration rate reaches 0.13% in 2042/2043 and remains constant thereafter.',
        '11	The slow-aging scenario contains the following assumptions at the Canada level: the total fertility rate reaches 1.79 children per woman in 2042/2043 and remains constant thereafter; life expectancy at birth reaches 85.6 years for males and 88.8 years for females in 2067/2068; interprovincial migration is based on the trends observed between 1991/1992 and 2016/2017; the immigration rate reaches 1.08% in 2042/2043 and remains constant thereafter; the annual number of non-permanent residents reaches 1,944,400 in 2043 and remains constant thereafter; the net emigration rate reaches 0.13% in 2042/2043 and remains constant thereafter.',
        '12	The fast-aging scenario contains the following assumptions at the Canada level: the total fertility rate reaches 1.40 children per woman in 2042/2043 and remains constant thereafter; life expectancy at birth reaches 88.0 years for males and 91.3 years for females in 2067/2068; interprovincial migration is based on the trends observed between 1991/1992 and 2016/2017; the immigration rate reaches 0.65% in 2042/2043 and remains constant thereafter; the annual number of non-permanent residents reaches 1,080,910 in 2043 and remains constant thereafter; the net emigration rate reaches 0.18% in 2042/2043 and remains constant thereafter.'
    ];
    return footnotelist[Math.floor(random(footnotelist.length))];
}