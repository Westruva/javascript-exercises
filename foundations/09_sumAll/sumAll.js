const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
        return "ERROR"
    } else {
        let array = [a, b].sort((a, b) => a - b);
        let rangeArray = []
        for (let i = array[0]; i <= array[1]; i++) {
            rangeArray.push(i);
        };
        return rangeArray.reduce((accumulator, currentvalue) => accumulator + currentvalue);
    };

}; 

// Do not edit below this line
module.exports = sumAll;
