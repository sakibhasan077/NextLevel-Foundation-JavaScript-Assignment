//! Problem 1
function describeValue (value) {
    let boolValue = Boolean(value) ? "truthy" : "falsy";
    return `${typeof value} | ${boolValue}`;
}

//! Problem 2

function getDayType (day) {
    let lowerCaseValue = day.toLowerCase();
    switch(lowerCaseValue){
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day" ;
        default:
            return "Invalid Day";
    }
}

//! Problem 3

function validateUsername (userName) {
    let lowerCaseValue = userName.toLowerCase();
    if(lowerCaseValue.length < 4){
        return "Too Short";
    }
    else if(lowerCaseValue.includes(" ")){
        return "No Space Allowed"
    }
    else if(lowerCaseValue.includes("admin")){
        return "Reserved Word";
    }
    else{
        return "Available";
    }
}

//! Problem 4

function getCngFare(distance, isNight = false, waitingMinutes = 0){

    let cost = distance <= 2 ? 50 + (2* waitingMinutes) : 50 + ((distance -2)* 15) + (2* waitingMinutes);

    if(isNight) cost = cost +  (cost * (20 / 100))
    return cost
}

//! Problem 5

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded  = target - scored;
    let requiredRate = (runsNeeded / ballsLeft) * 6;
    if(runsNeeded <= 0 ){
        return "Won";
    }
    else if(ballsLeft <= 0){
        return "Lost";
    }
    else if(requiredRate <= 6){
        return `Need ${target - scored} runs in ${ballsLeft} balls | Comfortable`
    }
    else if(requiredRate > 6 && requiredRate <= 12 ){
        return `Need ${target - scored} runs in ${ballsLeft} balls | Tough`
    }
    else if( requiredRate > 12 ){
        return `Need ${target - scored} runs in ${ballsLeft} balls | Almost Impossible`
    }
}