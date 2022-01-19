function multNum(arr){
    return arr.map(function(item){
        return item * 2;
    })
}
const array = [1, 2, 3, 4]
console.log(multNum(array))