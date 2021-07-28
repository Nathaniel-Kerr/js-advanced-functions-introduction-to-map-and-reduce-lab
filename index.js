function mapToNegativize(array) {
    return array.map( x => x * -1);
}

function  mapToNoChange(array) {
    return array.map(x => x);
}

function  mapToDouble(array) {
    return array.map(x => x * 2);
}

function  mapToSquare(array) {
    return array.map(x => x * x);
}

function reduceToTotal(array, start = 0) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer, start);
}

function reduceToAllTrue(array) {
    const reducer = function(accumulator, currentValue){
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return array.reduce(reducer, true)
}

function reduceToAnyTrue(array) {
    const reducer = function(accumulator, currentValue){
        if(accumulator === true){
            return true;
        } else {
            return !!currentValue;
        }
    }
    return array.reduce(reducer)
}