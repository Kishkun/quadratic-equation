module.exports = function solveEquation(equation) {
    let newArr = [];
    let arr = equation.split(' ');
    let a = (arr[0]);
    let b = (arr[3] + arr[4]);
    let c = (arr[7] + arr[8]);
    let resultArr = (b * b - 4 * a * c);

    if (resultArr > 0) {
        let d = Math.round(Math.sqrt(resultArr));
        newArr[0] = ((-b) + d) / (2 * a);
        newArr[1] = ((-b) - d) / (2 * a);
    } else {
        return null;
    }
    Math.round(newArr);
    newArr.sort(compareNumeric);
    return newArr;
};

function compareNumeric(x, y) {
    return x - y;
}
