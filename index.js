// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    const headquaters = 42;
    const blocksAway = Math.abs(headquaters - pickup);
    return blocksAway;
}

function distanceFromHqInFeet(pickup){
    const feetPerBlock = 264;
    const blocks =distanceFromHqInBlocks(pickup);
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(sBlock, eBlock){
    const feetPerBlock = 264;
    const blocks = Math.abs(eBlock - sBlock);
    return blocks * feetPerBlock;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance > 2500){
        return 'cannot travel that far';
    }
    else if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * .02;
    }
    else{
        return 25;
    }

}