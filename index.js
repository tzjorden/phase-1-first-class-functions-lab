// Code your solution in this file!
// Code your solution in this file!
const returnFirstTwoDrivers=(drivers)=> {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
    const length = drivers.length
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

const createFareMultiplier = (multiplier) => {
    return(fare) => {
        return fare* multiplier
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3)

let cost = fareDoubler(50);

cost = fareTripler(50)

const selectDifferentDrivers = (drivers, fn) => {

}

selectDifferentDrivers([drivers], returnFirstTwoDrivers);
selectDifferentDrivers([drivers], returnLastTwoDrivers);