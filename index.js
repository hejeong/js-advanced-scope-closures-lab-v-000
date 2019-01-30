function produceDrivingRange(blockRange){
    return function(start, end){
       const distance = Math.abs(parseInt(start)-parseInt(end));
       if(distance <= blockRange){
           return `within range by ${blockRange - distance}`;
       }else {
           return `${distance - blockRange} blocks out of range`;
       }
    };
}

function produceTipCalculator(percentage){
    return function(price){
        return percentage * price;
    }
}

function createDriver(){
    let driverId = 0;
    return class Driver {
        constructor(name){
            this.id = ++driverId;
            this.name = name;
        }
    }
}