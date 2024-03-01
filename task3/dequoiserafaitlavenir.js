// de quoi sera fait l'avenir
let travelZ = 1;
let travelX = 1;
let travelY = 1;

function preload() {
    //thefuture = loadTable('https://github.com/margelle/algorithmic-art-tasks/blob/main/task3/GEPData.csv', 'csv', 'header');
    //thefuture = loadTable('GEPData.csv', 'csv', 'header');
    thefuture = [
        ["Advanced economies", "AME", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.5, 2.5, 1.5, 1.2, 1.6],
        ["East Asia and Pacific", "EAS", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.5, 3.4000001, 5.0999999, 4.5, 4.4000001],
        ["Emerging market and developing economies", "EMD", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7, 3.7, 4, 3.9000001, 4],
        ["Euro Area", "EMU", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.9000001, 3.4000001, 0.40000001, 0.69999999, 1.6],
        ["Europe and Central Asia", "ECS", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.0999999, 1.2, 2.7, 2.4000001, 2.7],
        ["Latin America and the Caribbean", "LCN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.1999998, 3.9000001, 2.2, 2.3, 2.5],
        ["Middle East and North Africa", "MEA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.8, 5.8000002, 1.9, 3.5, 3.5],
        ["South Asia", "SAS", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 8.3000002, 5.9000001, 5.6999998, 5.5999999, 5.9000001],
        ["Sub-Saharan Africa", "SSF", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.4000001, 3.7, 2.9000001, 3.8, 4.0999999],
        ["World (WBG members)", "WLT", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6.1999998, 3, 2.5999999, 2.4000001, 2.7],
        ["Afghanistan", "AFG", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -20.700001, null, null, null, null],
        ["Albania", "ALB", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 8.8999996, 4.8000002, 3.5999999, 3.2, 3.2],
        ["Algeria", "DZA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.4000001, 3.2, 2.5, 2.5999999, 2.5999999],
        ["Angola", "AGO", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.2, 3, 0.5, 2.8, 3.0999999],
        ["Argentina", "ARG", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 10.7, 5, -2.5, 2.7, 3.2],
        ["Armenia", "ARM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.8000002, 12.6, 7.0999999, 4.6999998, 4.5],
        ["Azerbaijan", "AZE", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.5999999, 4.5999999, 1.5, 2.4000001, 2.5],
        ["Bahamas, The", "BHS", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 17, 14.4, 4.3000002, 1.8, 1.6],
        ["Bahrain", "BHR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 2.7, 4.9000001, 2.8, 3.3, 3.2],
        ["Bangladesh", "BGD", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6.9000001, 7.0999999, 6, 5.5999999, 5.8000002],
        ["Barbados", "BRB", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -0.80000001, 13.8, 4.5999999, 4, 3],
        ["Belarus", "BLR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 2.4000001, -4.6999998, 3, 0.80000001, 0.80000001],
        ["Belize", "BLZ", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 15.2, 12.7, 4.5, 3.5, 3.3],
        ["Benin", "BEN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.1999998, 6.3000002, 5.8000002, 6, 6],
        ["Bhutan", "BTN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -3.3, 4.8000002, 4.5999999, 4, 4.5999999],
        ["Bolivia", "BOL", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6.0999999, 3.5, 1.9, 1.5, 1.5],
        ["Bosnia and Herzegovina", "BIH", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.4000001, 3.9000001, 2.2, 2.8, 3.4000001],
        ["Botswana", "BWA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 11.8, 5.8000002, 3.8, 4.0999999, 4.3000002],
        ["Brazil", "BRA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5, 2.9000001, 3.0999999, 1.5, 2.2],
        ["Bulgaria", "BGR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.6999998, 3.9000001, 1.7, 2.4000001, 3.3],
        ["Burkina Faso", "BFA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6.9000001, 1.5, 4.3000002, 4.8000002, 5.0999999],
        ["Burundi", "BDI", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.0999999, 1.8, 2.9000001, 4.1999998, 4.5],
        ["Cabo Verde", "CPV", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.5999999, 17.1, 4.5, 4.6999998, 4.6999998],
        ["Cambodia", "KHM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3, 5.1999998, 5.4000001, 5.8000002, 6.0999999],
        ["Cameroon", "CMR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.5999999, 3.8, 4, 4.1999998, 4.5],
        ["Central African Republic", "CAF", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1, 0.5, 1.3, 1.6, 3.0999999],
        ["Chad", "TCD", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -1.2, 2.2, 3, 2.8, 2.7],
        ["Chile", "CHL", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 11.7, 2.4000001, -0.40000001, 1.8, 2.3],
        ["China", "CHN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 8.3999996, 3, 5.1999998, 4.5, 4.3000002],
        ["Colombia", "COL", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 11, 7.3000002, 1.2, 1.8, 3],
        ["Comoros", "COM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 2.0999999, 2.5999999, 3, 3.5, 4],
        ["Congo, Dem. Rep.", "COD", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6.1999998, 8.8999996, 6.8000002, 6.5, 6.1999998],
        ["Congo, Rep.", "COG", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1, 1.5, 3.2, 4.0999999, 3],
        ["Costa Rica", "CRI", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.8000002, 4.3000002, 5.1999998, 3.9000001, 3.5999999],
        ["Cote d'Ivoire", "CIV", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7, 6.6999998, 6.3000002, 6.5, 6.5],
        ["Croatia", "HRV", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 13.8, 6.3000002, 2.5, 2.7, 3],
        ["Djibouti", "DJI", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.5, 3.0999999, 4.6999998, 5.0999999, 5.6999998],
        ["Dominica", "DMA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6.9000001, 5.9000001, 4.9000001, 4.5999999, 4],
        ["Dominican Republic", "DOM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 12.3, 4.9000001, 2.5, 5.0999999, 5],
        ["Ecuador", "ECU", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.1999998, 2.9000001, 1.3, 0.69999999, 2],
        ["Egypt, Arab Rep.", "EGY", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.3, 6.5999999, 3.8, 3.5, 3.9000001],
        ["El Salvador", "SLV", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 11.2, 2.5999999, 2.8, 2.3, 2.3],
        ["Equatorial Guinea", "GNQ", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -0.89999998, 3.0999999, -2.5, -6.0999999, -3.9000001],
        ["Eritrea", "ERI", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 2.9000001, 2.5, 2.5999999, 3.2, 3.3],
        ["Eswatini", "SWZ", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 10.7, 0.5, 3.5999999, 2.9000001, 2.8],
        ["Ethiopia", "ETH", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6.3000002, 6.4000001, 5.8000002, 6.4000001, 7],
        ["Fiji", "FJI", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -5.0999999, 20, 7.5999999, 4, 3.7],
        ["Gabon", "GAB", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.5, 3, 2.7, 3, 2.8],
        ["Gambia, The", "GMB", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.3000002, 4.3000002, 4.8000002, 5.3000002, 5.5],
        ["Georgia", "GEO", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 10.5, 10.4, 6.5, 4.8000002, 4.5],
        ["Ghana", "GHA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.0999999, 3.0999999, 2.3, 2.8, 4.4000001],
        ["Grenada", "GRD", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.6999998, 6.3000002, 3.9000001, 3.8, 3.5],
        ["Guatemala", "GTM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 8, 4.0999999, 3.4000001, 3.5, 3.5],
        ["Guinea", "GIN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.3000002, 4.6999998, 5.0999999, 5.8000002, 6.1999998],
        ["Guinea-Bissau", "GNB", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6.4000001, 3.5, 2.8, 5.5999999, 4.5],
        ["Guyana", "GUY", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 20.1, 63.400002, 29, 38.200001, 15.2],
        ["Haiti", "HTI", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -1.8, -1.7, -2.5, 1.3, 2.2],
        ["Honduras", "HND", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 12.5, 4, 3.2, 3.2, 3.4000001],
        ["India", "IND", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 9.1000004, 7.1999998, 6.3000002, 6.4000001, 6.5],
        ["Indonesia", "IDN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.7, 5.3000002, 5, 4.9000001, 4.9000001],
        ["Iran, Islamic Rep.", "IRN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.6999998, 3.8, 4.1999998, 3.7, 3.2],
        ["Iraq", "IRQ", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -2.0999999, 7, -2.9000001, 4.1999998, 2.9000001],
        ["Jamaica", "JAM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.5999999, 5.1999998, 2.3, 2, 1.4],
        ["Jordan", "JOR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.7, 2.4000001, 2.5999999, 2.5, 2.5999999],
        ["Jpan", "JPN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 2.5999999, 1, 1.8, 0.89999998, 0.80000001],
        ["Kazakhstan", "KAZ", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.3000002, 3.2, 4.5, 4.3000002, 4.5],
        ["Kenya", "KEN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.5999999, 4.8000002, 5, 5.1999998, 5.3000002],
        ["Kiribati", "KIR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.9000001, 1.2, 2.5, 2.4000001, 2.3],
        ["Kosovo", "XKX", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 10.7, 5.1999998, 3.2, 3.9000001, 4],
        ["Kuwait", "KWT", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.3, 7.9000001, 0.80000001, 2.5999999, 2.7],
        ["Kyrgyz Republic", "KGZ", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.5, 6.3000002, 3.5, 4, 4],
        ["Lao PDR", "LAO", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 2.5, 2.7, 3.7, 4.0999999, 4.3000002],
        ["Lebanon", "LBN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -7, -0.60000002, 0.2, null, null],
        ["Lesotho", "LSO", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.6, 1.8, 2.2, 2.5, 2],
        ["Liberia", "LBR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5, 4.8000002, 4.5, 5.4000001, 6.1999998],
        ["Libya", "LBY", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 31.4, -1.2, 14.1, 4.0999999, 4.3000002],
        ["Madagascar", "MDG", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.6999998, 3.8, 4, 4.8000002, 4.6999998],
        ["Malawi", "MWI", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 2.8, 0.89999998, 1.6, 2.8, 3.3],
        ["Malaysia", "MYS", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.3, 8.6999998, 3.9000001, 4.3000002, 4.1999998],
        ["Maldives", "MDV", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 37.700001, 13.9, 6.5, 5.1999998, 5.5],
        ["Mali", "MLI", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.0999999, 3.7, 4, 4, 5],
        ["Marshall Islands", "MHL", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1, -4.5, 3, 3, 2],
        ["Mauritania", "MRT", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 0.69999999, 6.4000001, 4.8000002, 5.0999999, 5.5],
        ["Mauritius", "MUS", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.4000001, 8.8000002, 5, 4.5999999, 3.5999999],
        ["Mexico", "MEX", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.8000002, 3.9000001, 3.5999999, 2.5999999, 2.0999999],
        ["Micronesia, Fed. Sts.", "FSM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -3.2, -0.60000002, 2.8, 2.8, 1.3],
        ["Moldova", "MDA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 13.9, -5, 1.8, 4.1999998, 4.0999999],
        ["Mongolia", "MNG", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.6, 5, 5.8000002, 6.1999998, 6.4000001],
        ["Montenegro", "MNE", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 13, 6.4000001, 4.8000002, 3.2, 3.0999999],
        ["Morocco", "MAR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 8, 1.3, 2.8, 3.0999999, 3.3],
        ["Mozambique", "MOZ", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 2.3, 4.1999998, 6, 5, 5],
        ["Myanmar", "MMR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -12, 4, 1, 2, null],
        ["Namibia", "NAM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.5, 4.5999999, 2.8, 2.9000001, 3.0999999],
        ["Nauru", "NRU", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.1999998, 2.8, 0.60000002, 1.4, 1.2],
        ["Nepal", "NPL", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.8000002, 5.5999999, 1.9, 3.9000001, 5],
        ["Nicaragua", "NIC", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 10.3, 3.8, 3.0999999, 3.2, 3.5],
        ["Niger", "NER", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.4, 11.5, 2.3, 12.8, 7.4000001],
        ["Nigeria", "NGA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.5999999, 3.2, 2.9000001, 3.3, 3.7],
        ["North Macedonia", "MKD", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.5, 2.2, 1.8, 2.5, 2.9000001],
        ["Oman", "OMN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.0999999, 4.3000002, 1.4, 2.7, 2.9000001],
        ["Pakistan", "PAK", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.8000002, 6.1999998, -0.2, 1.7, 2.4000001],
        ["Palau", "PLW", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -13.4, -2, 0.80000001, 12.4, 11.9],
        ["Panama", "PAN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 15.8, 10.8, 4.9000001, 4.5999999, 5.3000002],
        ["Papua New Guinea", "PNG", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -0.80000001, 5.1999998, 3, 5, 3.0999999],
        ["Paraguay", "PRY", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4, 0.1, 4.5999999, 3.8, 3.8],
        ["Peru", "PER", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 13.4, 2.7, -0.40000001, 2.5, 2.3],
        ["Philippines", "PHL", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.6999998, 7.5999999, 5.5999999, 5.8000002, 5.8000002],
        ["Poland", "POL", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6.9000001, 5.0999999, 0.5, 2.5999999, 3.4000001],
        ["Qatar", "QAT", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.5, 4.9000001, 2.8, 2.5, 3.0999999],
        ["Romania", "ROU", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.6999998, 4.5999999, 1.8, 3.3, 3.8],
        ["Russia", "RUS", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.5999999, -2.0999999, 2.5999999, 1.3, 0.89999998],
        ["Rwanda", "RWA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 10.9, 8.1999998, 6.9000001, 7.5, 7.8000002],
        ["Samoa", "WSM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -7.0999999, -5.3000002, 8, 4.5, 3.5999999],
        ["Sao Tome and Principe", "STP", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.9, 0.1, 0.5, 2.5, 3.3],
        ["Saudi Arabia", "SAU", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.9000001, 8.6999998, -0.5, 4.0999999, 4.1999998],
        ["Senegal", "SEN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6.5, 4.1999998, 4, 8.8000002, 9.3000002],
        ["Serbia", "SRB", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.6999998, 2.5, 2, 3, 3.8],
        ["Seychelles", "SYC", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.4000001, 9, 4.3000002, 4.0999999, 3.9000001],
        ["Sierra Leone", "SLE", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.0999999, 3.5, 3.0999999, 3.7, 4.3000002],
        ["Solomon Islands", "SLB", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -0.60000002, -4.0999999, 1.8, 2.7, 3.0999999],
        ["South Africa", "ZAF", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.6999998, 1.9, 0.69999999, 1.3, 1.5],
        ["South Sudan", "SSD", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -5.0999999, -2.3, -0.40000001, 2.3, 2.4000001],
        ["Sri Lanka", "LKA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.5, -7.8000002, -3.8, 1.7, 2.4000001],
        ["St. Lucia", "LCA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 12.2, 15.9, 3.2, 2.9000001, 2.3],
        ["St. Vincent and the Grenadines", "VCT", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 0.80000001, 4.9000001, 6, 4.8000002, 3.7],
        ["Sudan", "SDN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -1.9, -1, -12, -0.60000002, 0.2],
        ["Suriname", "SUR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -2.4000001, 2.4000001, 2, 2.5999999, 3],
        ["Syrian Arab Republic", "SYR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.3, -3.5, -5.5, null, null],
        ["Tajikistan", "TJK", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 9.3999996, 8, 7.5, 5.5, 4.5],
        ["Tanzania", "TZA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.3000002, 4.5999999, 5.0999999, 5.5, 6.0999999],
        ["Thailand", "THA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.5, 2.5999999, 2.5, 3.2, 3.0999999],
        ["Timor-Leste", "TLS", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 2.9000001, 3.9000001, 2.4000001, 3.5, 4.3000002],
        ["Togo", "TGO", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 6, 5.8000002, 5.1999998, 5.1999998, 5.8000002],
        ["Tonga", "TON", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -2.7, -2, 2.5999999, 2.5, 2.2],
        ["Trinidad and Tobago", "TTO", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", null, null, null, null, null],
        ["Tunisia", "TUN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.4000001, 2.4000001, 1.2, 3, 3],
        ["Turkiye", "TUR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 11.4, 5.5, 4.1999998, 3.0999999, 3.9000001],
        ["Turkmenistan", "TKM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", null, null, null, null, null],
        ["Tuvalu", "TUV", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 1.8, 0.69999999, 3.9000001, 3.5, 2.4000001],
        ["Uganda", "UGA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.4000001, 4.6999998, 5.3000002, 6, 6.5999999],
        ["Ukraine", "UKR", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.4000001, -29.1, 4.8000002, 3.2, 6.5],
        ["United Arab Emirates", "ARE", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 3.5, 6.5999999, 3.4000001, 3.7, 3.8],
        ["United States", "USA", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.8000002, 1.9, 2.5, 1.6, 1.7],
        ["Uruguay", "URY", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 5.3000002, 4.9000001, 1.2, 3.2, 2.5999999],
        ["Uzbekistan", "UZB", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7.4000001, 5.6999998, 5.5, 5.5, 5.5],
        ["Vanuatu", "VUT", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 0.60000002, 1.9, 1.5, 2.5999999, 3.5],
        ["Venezuela, RB", "VEN", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", null, null, null, null, null],
        ["Vietnam", "VNM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 2.5999999, 8, 4.6999998, 5.5, 6],
        ["West Bank and Gaza", "PSE", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 7, 3.9000001, -3.7, -6, 5.4000001],
        ["Yemen, Rep.", "YEM", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", -1, 1.5, -0.5, 2, null],
        ["Zambia", "ZMB", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 4.5999999, 4.6999998, 2.7, 4.5999999, 4.8000002],
        ["Zimbabwe", "ZWE", "GDP growth, constant (average 2010-19 prices and exchange rates)", "NYGDPMKTPKDZ", 8.5, 6.5, 4.5, 3.5, 3.5]
    ];

    thefutureslice = thefuture.slice(11, 162).map(i => i.slice(4, 8));
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    //createCanvas(windowWidth, windowHeight);
    frameRate(20);
    background('#424242');
    fate = random(1, 7);
    kismet = random(1, 5);
    circumstance = random(15, 50);
}

function draw() {
    size = circumstance;

    ambientLight(80);

    // add point light 
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    pointLight(255, 255, 255, locX, locY, 50);

    specularMaterial(25);
    shininess(80);

    //change the direction of travel into the future
    if (mouseIsPressed) { travelZ *= -1 }
    if (frameCount % 23 == 0) { travelX *= -1 }
    if (frameCount % 53 == 0) { travelY *= -1 }
    translate(-width / fate, -height / kismet, 0);

    for (x = 1; x < width; x += size) {
        country = Math.floor(Math.random() * thefutureslice.length)
        futuresizesX = thefutureslice[country][3];
        futuresizesX = futuresizesX || 0;
        futuresizesY = thefutureslice[country][4];
        futuresizesY = futuresizesY || 0;
        for (y = 0; y < height; y += size) {
            ambientMaterial(24, 20, 29);
            normalMaterial();
            fill(6, 140, 250);
            push();
            translate(x, y, 0);
            rotateZ(travelZ * frameCount * 0.01);
            rotateX(travelX * frameCount * 0.01);
            rotateY(travelY * frameCount * 0.01);
            ellipsoid(x + futuresizesX, y + futuresizesY, 14);
            //ellipsoid(x + 6, y + 8, 11);+
            pop();
        }
    }

}