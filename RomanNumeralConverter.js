function convertToRoman(num) {
    const numbers = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var accumulator = '';
    for (var key in numbers) {
        var keyValue = numbers[key];
        while (keyValue <= num) {
            num -= keyValue;
            accumulator += key;
        }
    }
    return accumulator;
}

let result = convertToRoman(4);
console.log(result);