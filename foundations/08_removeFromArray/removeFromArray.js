const removeFromArray = function(array, ...theArgs) {
    return array.filter(item => !theArgs.includes(item));
    //takes the item --item-- and compares it to the array of the args
    //if the item is included, itreturns true which will then be converted into false by the NOT logic
}

// Do not edit below this line
module.exports = removeFromArray;
