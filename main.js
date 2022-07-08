function calc(callback) {
    var n1 = parseInt(document.getElementById("number1").value);
    var n2 = parseInt(document.getElementById("number2").value);
    var result = callback(n1, n2);
    document.getElementById("result").value =  parseFloat(result);
}

function multiplyNum(n1, n2) {
    console.log("hi");
    return n1 * n2;
}
function divideNum(n1, n2) {
    return n1 / n2;
}
function addNum(n1, n2) {
    return n1 + n2;
}
function subtractNum(n1, n2){
    return n1-n2;
}
