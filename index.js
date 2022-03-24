// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let hq =  42;
    distance = Math.abs(distance-hq);
        return distance;
    }
function distanceFromHqInFeet(inFeet){
    const blocksInfeet = distanceFromHqInBlocks(inFeet);
    return Math.abs(blocksInfeet * 264);
}        
function distanceTravelledInFeet(pickUp, dropOff){
    return Math.abs(pickUp-dropOff)*264;
}
function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400){
        return 0;
    } else if (feet <= 2000 ){
        return 2.56;
    }else if (feet >= 2000 && feet <= 2500){
        return 25;
    }else if (feet > 2500){
        return 'cannot travel that far';
    }

}