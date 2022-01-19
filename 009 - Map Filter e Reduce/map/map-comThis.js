const apple = {
    value:2,
}

const orange = {
    value:3,
}

function mapArray(arr, arg){
    return arr.map(function(item){
        return item * this.value;
    }, arg);
}

const array = [1, 2, 3, 4]
console.log(mapArray(array, apple))
console.log(mapArray(array, orange))