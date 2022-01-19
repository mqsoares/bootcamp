function somaTodos(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    });
}

const myArray = [1, 2, 3]

console.log(somaTodos(myArray))