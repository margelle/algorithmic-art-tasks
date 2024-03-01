// de quoi sera fait l'avenir
let travelZ = 1;
let travelX = 1;
let travelY = 1;
let thefutureslice;
let currentYear = 0;
let scenario = 1; //different population scenarios

function preload() {

    //Statistics Canada. Table 17-10-0057-01  Projected population, by projection scenario, age and sex, as of July 1 (x 1,000)
    //https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710005701
    //rows are years, columns are growth scenarios
    thefuture = loadTable('1710005701-noSymbol_trimmed.csv', 'csv', 'header');
    thefutureslice = thefuture;
    //thefutureslice = thefuture.slice(11, 162).map(i => i.slice(4, 8));
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    //createCanvas(windowWidth, windowHeight);
    frameRate(20);
    resetIt();
}

function resetIt() {
    //reset the random values after awhile to keep things lively
    background(0, 0);
    background('#424242');
    destin = random(60, 99); //ambientLight
    kismet = random(1.75, 2.25); //division factor for initial height translation
    fate = random(1.75, 2.25); //division factor for initial width translation
    circumstance = random(15, 75); //size of loop steps
    circonstance = random(20, 40); //specularMaterial

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
    if (mouseIsPressed) { travelZ *= -1 };
    if (frameCount % 443 == 0) {
        travelX *= -1;
        scenario += 1;
    };
    if (frameCount % 877 == 0) { travelY *= -1 };
    if (mouseIsPressed) {
        resetIt;
        scenario += 1;
    }
    currentYear += 1;
    if (currentYear == thefutureslice.getRowCount()) { currentYear = 0 };
    if (scenario == thefutureslice.getColumnCount()) { scenario = 1 };
    //moves our drawing origin to the top left corner (WEBGL)
    translate(-width / fate, -height / kismet, 0);

    futuresizesX = parseFloat(thefutureslice.getString(currentYear, scenario)) / parseFloat(thefutureslice.getString(0, scenario));
    futuresizesX = futuresizesX || 1;
    futuresizesY = 1 / futuresizesX;
    for (x = 0; x < width; x += size) {
        for (y = 0; y < height; y += size) {
            //ambientMaterial(24, 20, 29);
            normalMaterial();
            fill(0, 65, 127);
            push();
            translate(x, y, 0);
            rotateZ(travelZ * frameCount * 0.01);
            rotateX(travelX * frameCount * 0.01);
            rotateY(travelY * frameCount * 0.01);
            ellipsoid(x + 6 * futuresizesX, y + 7 * futuresizesY, 8);
            pop();
        }
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