import database from 'context/DatabaseContext';

const BASE_PATH = '/actuators/';

export async function getActuatorsData(userID){
    

    var data = database.ref(BASE_PATH);
    
    return data.once('value')
    .then( (snapshot) => {
        return snapshot.val();
    });
}

export async function updateLuminosityService(newValue){
    var update = {};
    update[BASE_PATH + 'luminosity/intensity'] = newValue;
    return database.ref().update(update);
}

export async function updateFanService(newValue){
    var update = {};
    
    if (newValue > 0){
        newValue = 3;
    }

    update[BASE_PATH + 'fan/speed'] = newValue;
    return database.ref().update(update);
}