function sumThree(a, b, c) {
    return a + b + c;
}

function isNegative(num) {
    return num < 0;
}

function multiply(a, b) {
    return a * b;
}

function isInteger(num) {
    return Number.isInteger(num);
}

function percentage(total, percent) {
    return (total * percent) / 100;
}

function lastChar(str) {
    return str.charAt(str.length - 1);
}

function toLower(str) {
    return str.toLowerCase();
}

function contains(str, subStr) {
    return str.includes(subStr);
}

function repeatTwice(str) {
    return str + str;
}

function trimSpaces(str) {
    return str.trim();
}

function andNot(a, b) {
    return a && !b;
}

function isTrue(value) {
    return value === true;
}

function isSame(a, b) {
    return a === b;
}

function xor(a, b) {
    return (a || b) && !(a && b);
}

function toggle(value) {
    return !value;
}

function hasKey(obj, key) {
    return key in obj;
}

function getKeys(obj) {
    return Object.keys(obj).join(", ");
}

function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function removeKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

function isValueEqual(obj, key, value) {
    return obj[key] === value;
}

function createArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

function containsArray(array, element) {
    return array.includes(element);
}

function getLength(array) {
    return array.length;
}

function addToEnd(array, element) {
    const newArray = [...array];
    newArray.push(element);
    return newArray;
}

function getLastElement(array) {
    return array[array.length - 1];
}

function logElements(array) {
    const result = [];
    array.forEach((element, index) => {
        result.push(`Элемент [${index}]: ${element}`);
    });
    return result;
}

function sumArray(array) {
    let sum = 0;
    array.forEach(num => {
        if (typeof num === 'number') {
            sum += num;
        }
    });
    return sum;
}

function toUpperCase(array) {
    const result = [];
    array.forEach(item => {
        if (typeof item === 'string') {
            result.push(item.toUpperCase());
        } else {
            result.push(item);
        }
    });
    return result;
}

function countNegatives(array) {
    let count = 0;
    array.forEach(num => {
        if (typeof num === 'number' && num < 0) {
            count++;
        }
    });
    return count;
}

function logEven(array) {
    const result = [];
    array.forEach(num => {
        if (typeof num === 'number' && num % 2 === 0) {
            result.push(`Чётное число: ${num}`);
        }
    });
    return result.length > 0 ? result : ["Чётных чисел не найдено"];
}

function squareNumbers(array) {
    return array.map(num => {
        if (typeof num === 'number') {
            return num * num;
        }
        return num;
    });
}

function doubleElements(array) {
    return array.map(item => {
        if (typeof item === 'number') {
            return item * 2;
        }
        return item;
    });
}

function getFirstLetters(array) {
    return array.map(str => {
        if (typeof str === 'string' && str.length > 0) {
            return str.charAt(0);
        }
        return '';
    });
}

function addPrefix(array, prefix) {
    return array.map(item => {
        if (typeof item === 'string') {
            return prefix + item;
        }
        return item;
    });
}

function numbersToStrings(array) {
    return array.map(item => {
        if (typeof item === 'number') {
            return item.toString();
        }
        return item;
    });
}