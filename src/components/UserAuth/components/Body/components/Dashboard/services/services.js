import database from 'context/DatabaseContext';

async function getQuickData(){
    const q_path = '/quick_data/';

    var data = database.ref(q_path);
    
    return data.once('value')
    .then( (snapshot) => {
        return snapshot.val();
    });
}

async function getUserData(userID){
    var id = 'public';

    const path = `/data/${id}/`;

    var data = database.ref(path);
    
    return data.once('value')
    .then( (snapshot) => {
        return snapshot.val();
    });
}

/*export async function getCurrentDayTemperatureData(){

    const MONTHS = ["january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"];

    const date = new Date();

    const currentMonth = false ? MONTHS[date.getMonth()] : MONTHS[0];

    const userData = getUserData();
    
    const currentday = false ? date.getDate() : 1;

    return userData.then( (userData) => {
        let temperatureData = userData['temperature'][currentMonth][currentday]['values'];
        return temperatureData;
    });
}*/

export async function getCurrentDayTemperatureData(){
    const quickData = getQuickData();

    return quickData.then( (data) => {
        let tempData = data['temperature'];
        let realTempData = Object.keys(tempData).map((key) => tempData[key]);
        return realTempData;
    });
}

/*export async function getCurrentDayLightIntensityData(){

    const MONTHS = ["january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"];

    const date = new Date();

    const currentMonth = false ? MONTHS[date.getMonth()] : MONTHS[0];

    const userData = getUserData();
    
    const currentday = false ? date.getDate() : 1;

    return userData.then( (userData) => {
        let temperatureData = userData['lightIntensity'][currentMonth][currentday]['values'];
        return temperatureData;
    });
}*/

export async function getCurrentDayLightIntensityData(){
    let quickData = getQuickData();

    return quickData.then( (data) => {
        let lightData = data['luminosity'];
        let realData = Object.keys(lightData).map((key) => lightData[key]);
        return realData;
    });
}

/*export async function getCurrentDayNaturalGasData(){

    const MONTHS = ["january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"];

    const date = new Date();

    const currentMonth = false ? MONTHS[date.getMonth()] : MONTHS[0];

    const userData = getUserData();
    
    const currentday = false ? date.getDate() : 1;

    return userData.then( (userData) => {
        let temperatureData = userData['gas'][currentMonth][currentday]['values'];
        return temperatureData;
    });
}*/

export async function getCurrentDayNaturalGasData(){
    let quickData = getQuickData();

    return quickData.then( (data) => {
        let gasData = data['gas'];
        let realGasData = Object.keys(gasData).map((key) => gasData[key]);
        return realGasData;
    });
}


