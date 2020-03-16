function getMin(array){
    var min = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}
var min = getMin(array);
console.log("Min:" + min);