const addition = (arg1, arg2) => {
    return Number(arg1) + Number(arg2);
};

const subtraction = (minuend, subtrahend) => minuend - subtrahend;

const multiplication = (multiplicand, multiplier) => multiplicand * multiplier;

const division = (dividend, divider) => {
    if (divider != 0) {
        return dividend / divider;
    } else {
        throw new Error('Divider can\'t be zero');
    }
};

const exponentiation = (basis, power) => Math.pow(basis, power);

const percent = (basis, percent) => {
    if (percent >= 0) {
        return basis * (percent / 100);
    } else {
        throw new Error('Percent can\'t be negative');
    }
};

const sin = (arg) => Math.sin(arg);

const cos = (arg) => Math.cos(arg);

const tg = (arg) => {
    if(arg == Math.PI / 2 || arg == 3 * Math.PI / 2){
        throw new Error('Tan can\'t be found');
    }
    else return Math.tan(arg);
}
const ctg = (arg) => {
    if(arg == 0 || arg == 2 * Math.PI || arg == Math.PI){
        throw new Error('Ctg can\'t be found');
    }
    else return 1/Math.tan(arg);
}
const twoArgsOperations = {
    "+": addition,
    "-": subtraction,
    "*": multiplication,
    "/": division,
    "**": exponentiation,
    "%": percent
}

const oneArgOperations = {
    "sin": sin,
    "cos": cos,
    "tg": tg,
    "ctg": ctg
}

const getTwoArgsOperation = (selector) => {
    const operation = twoArgsOperations[selector];
    return operation !== undefined ? operation : () => { throw Error("Operation not implemented") };
}

const getOneArgOperation = (selector) => {
    const operation = oneArgOperations[selector];
    return operation !== undefined ? operation : () => { throw Error("Operation not implemented") };
}

module.exports = { getTwoArgsOperation, getOneArgOperation };
