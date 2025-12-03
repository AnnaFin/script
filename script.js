const functionSelect = document.getElementById('functionSelect');
const inputFields = document.getElementById('inputFields');
const testButton = document.getElementById('testButton');
const resultDiv = document.getElementById('result');
const resultOutput = document.getElementById('resultOutput');

function updateInputFields() {
    const selectedFunction = functionSelect.value;
    let html = '';
    
    switch(selectedFunction) {
        case 'sumThree':
            html = `
                <div class="input-group">
                    <label for="input1">Первое число (a):</label>
                    <input type="number" id="input1" value="5">
                </div>
                <div class="input-group">
                    <label for="input2">Второе число (b):</label>
                    <input type="number" id="input2" value="3">
                </div>
                <div class="input-group">
                    <label for="input3">Третье число (c):</label>
                    <input type="number" id="input3" value="7">
                </div>
            `;
            break;
            
        case 'isNegative':
            html = `
                <div class="input-group">
                    <label for="input1">Число:</label>
                    <input type="number" id="input1" value="-5">
                </div>
            `;
            break;
            
        case 'multiply':
            html = `
                <div class="input-group">
                    <label for="input1">Первое число (a):</label>
                    <input type="number" id="input1" value="6">
                </div>
                <div class="input-group">
                    <label for="input2">Второе число (b):</label>
                    <input type="number" id="input2" value="7">
                </div>
            `;
            break;
            
        case 'isInteger':
            html = `
                <div class="input-group">
                    <label for="input1">Число:</label>
                    <input type="number" id="input1" value="3.14" step="any">
                </div>
            `;
            break;
            
        case 'percentage':
            html = `
                <div class="input-group">
                    <label for="input1">Общее число (total):</label>
                    <input type="number" id="input1" value="200">
                </div>
                <div class="input-group">
                    <label for="input2">Процент (percent):</label>
                    <input type="number" id="input2" value="15">
                </div>
            `;
            break;

        case 'lastChar':
            html = `
                <div class="input-group">
                    <label for="input1">Строка:</label>
                    <input type="text" id="input1" value="Дмитрий Витальевич">
                </div>
            `;
            break;
            
        case 'toLower':
            html = `
                <div class="input-group">
                    <label for="input1">Строка:</label>
                    <input type="text" id="input1" value="Дмитрий Витальевич">
                </div>
            `;
            break;
            
        case 'contains':
            html = `
                <div class="input-group">
                    <label for="input1">Строка:</label>
                    <input type="text" id="input1" value="Дмитрий Витальевич!">
                </div>
                <div class="input-group">
                    <label for="input2">Подстрока:</label>
                    <input type="text" id="input2" value="Витальевич">
                </div>
            `;
            break;
            
        case 'repeatTwice':
            html = `
                <div class="input-group">
                    <label for="input1">Строка:</label>
                    <input type="text" id="input1" value="Маша">
                </div>
            `;
            break;
            
        case 'trimSpaces':
            html = `
                <div class="input-group">
                    <label for="input1">Строка:</label>
                    <input type="text" id="input1" value="   Дмитрий Витальевич   ">
                </div>
            `;
            break;

        case 'andNot':
            html = `
                <div class="input-group">
                    <label for="input1">Первое значение (a):</label>
                    <select id="input1">
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
                <div class="input-group">
                    <label for="input2">Второе значение (b):</label>
                    <select id="input2">
                        <option value="true">true</option>
                        <option value="false" selected>false</option>
                    </select>
                </div>
            `;
            break;
            
        case 'isTrue':
            html = `
                <div class="input-group">
                    <label for="input1">Значение:</label>
                    <select id="input1">
                        <option value="true">true</option>
                        <option value="false">false</option>
                        <option value="other">другое</option>
                    </select>
                </div>
            `;
            break;
            
        case 'isSame':
            html = `
                <div class="input-group">
                    <label for="input1">Первое значение (a):</label>
                    <select id="input1">
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
                <div class="input-group">
                    <label for="input2">Второе значение (b):</label>
                    <select id="input2">
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
            `;
            break;
            
        case 'xor':
            html = `
                <div class="input-group">
                    <label for="input1">Первое значение (a):</label>
                    <select id="input1">
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
                <div class="input-group">
                    <label for="input2">Второе значение (b):</label>
                    <select id="input2">
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
            `;
            break;
            
        case 'toggle':
            html = `
                <div class="input-group">
                    <label for="input1">Значение:</label>
                    <select id="input1">
                        <option value="true">true</option>
                        <option value="false" selected>false</option>
                    </select>
                </div>
            `;
            break;

        case 'hasKey':
            html = `
                <div class="input-group">
                    <label for="input1">Объект:</label>
                    <input type="text" id="input1" value='{"имя": "Маша", "возраст": 20, "город": "Минск"}'>
                </div>
                <div class="input-group">
                    <label for="input2">Ключ для проверки:</label>
                    <input type="text" id="input2" value="возраст">
                </div>
            `;
            break;
            
        case 'getKeys':
            html = `
                <div class="input-group">
                    <label for="input1">Объект:</label>
                    <input type="text" id="input1" value='{"Аня": 1, "Даша": 2, "Настя": 3}'>
                </div>
            `;
            break;
            
        case 'isEqual':
            html = `
                <div class="input-group">
                    <label for="input1">Первый объект:</label>
                    <input type="text" id="input1" value='{"Оля": 10, "Дана": 20}'>
                </div>
                <div class="input-group">
                    <label for="input2">Второй объект:</label>
                    <input type="text" id="input2" value='{"Оля": 10, "Дана": 20}'>
                </div>
            `;
            break;
            
        case 'removeKey':
            html = `
                <div class="input-group">
                    <label for="input1">Объект:</label>
                    <input type="text" id="input1" value='{"имя": "Маша", "возраст": 20, "город": "Минск"}'>
                </div>
                <div class="input-group">
                    <label for="input2">Ключ для удаления:</label>
                    <input type="text" id="input2" value="возраст">
                </div>
            `;
            break;
            
        case 'isValueEqual':
            html = `
                <div class="input-group">
                    <label for="input1">Объект:</label>
                    <input type="text" id="input1" value='{"Фамилия Имя": "Оскар Пиастри", "врзраст": 24}'>
                </div>
                <div class="input-group">
                    <label for="input2">Ключ:</label>
                    <input type="text" id="input2" value="Фамилия Имя">
                </div>
                <div class="input-group">
                    <label for="input3">Значение для проверки:</label>
                    <input type="text" id="input3" value="Оскар Пиастри">
                </div>
            `;
            break;

        case 'createArray':
            html = `
                <div class="input-group">
                    <label for="input1">Начальное число:</label>
                    <input type="number" id="input1" value="1">
                </div>
                <div class="input-group">
                    <label for="input2">Конечное число:</label>
                    <input type="number" id="input2" value="5">
                </div>
            `;
            break;
            
        case 'containsArray':
            html = `
                <div class="input-group">
                    <label for="input1">Массив:</label>
                    <input type="text" id="input1" value='[1, 2, 3, 4, 5]'>
                </div>
                <div class="input-group">
                    <label for="input2">Элемент для поиска:</label>
                    <input type="text" id="input2" value="3">
                </div>
            `;
            break;
            
        case 'getLength':
            html = `
                <div class="input-group">
                    <label for="input1">Массив:</label>
                    <input type="text" id="input1" value='["яблоко", "банан", "мандарин"]'>
                </div>
            `;
            break;
            
        case 'addToEnd':
            html = `
                <div class="input-group">
                    <label for="input1">Массив:</label>
                    <input type="text" id="input1" value='[1, 2, 3]'>
                </div>
                <div class="input-group">
                    <label for="input2">Элемент для добавления:</label>
                    <input type="text" id="input2" value="4">
                </div>
            `;
            break;
            
        case 'getLastElement':
            html = `
                <div class="input-group">
                    <label for="input1">Массив:</label>
                    <input type="text" id="input1" value='["Маша", "Даша", "Настя"]'>
                </div>
            `;
            break;

        case 'logElements':
            html = `
                <div class="input-group">
                    <label for="input1">Массив:</label>
                    <input type="text" id="input1" value='["яблоко", "банан", "мандарин"]'>
                </div>
            `;
            break;
            
        case 'sumArray':
            html = `
                <div class="input-group">
                    <label for="input1">Массив чисел:</label>
                    <input type="text" id="input1" value='[10, 20, 30, 40]'>
                </div>
            `;
            break;
            
        case 'toUpperCase':
            html = `
                <div class="input-group">
                    <label for="input1">Массив строк:</label>
                    <input type="text" id="input1" value='["яблоко", "банан", "мандарин"]'>
                </div>
            `;
            break;
            
        case 'countNegatives':
            html = `
                <div class="input-group">
                    <label for="input1">Массив чисел:</label>
                    <input type="text" id="input1" value='[5, -3, 10, -7, 0, -1]'>
                </div>
            `;
            break;
            
        case 'logEven':
            html = `
                <div class="input-group">
                    <label for="input1">Массив чисел:</label>
                    <input type="text" id="input1" value='[1, 2, 3, 4, 5, 6, 7, 8]'>
                </div>
            `;
            break;

        case 'squareNumbers':
            html = `
                <div class="input-group">
                    <label for="input1">Массив чисел:</label>
                    <input type="text" id="input1" value='[1, 2, 3, 4, 5]'>
                </div>
            `;
            break;
            
        case 'doubleElements':
            html = `
                <div class="input-group">
                    <label for="input1">Массив чисел:</label>
                    <input type="text" id="input1" value='[1, 2, 3, 4, 5]'>
                </div>
            `;
            break;
            
        case 'getFirstLetters':
            html = `
                <div class="input-group">
                    <label for="input1">Массив строк:</label>
                    <input type="text" id="input1" value='["яблоко", "банан", "мандарин"]'>
                </div>
            `;
            break;
            
        case 'addPrefix':
            html = `
                <div class="input-group">
                    <label for="input1">Массив строк:</label>
                    <input type="text" id="input1" value='[" лаба ИСИТ", " лаба Веб", " лаба СБД"]'>
                </div>
                <div class="input-group">
                    <label for="input2">Префикс:</label>
                    <input type="text" id="input2" value="сдана ">
                </div>
            `;
            break;
            
        case 'numbersToStrings':
            html = `
                <div class="input-group">
                    <label for="input1">Массив:</label>
                    <input type="text" id="input1" value='[1, "Даша Талько", 3.14, true, 42]'>
                </div>
            `;
            break;
    }
    
    inputFields.innerHTML = html;
}

function getInputValue(id, isBoolean = false) {
    const element = document.getElementById(id);
    if (!element) return null;
    
    const value = element.value.trim();
    
    if (isBoolean) {
        return value === 'true';
    }

    try {
        return JSON.parse(value);
    } catch (e) {
        if (!isNaN(value) && value !== '') {
            return Number(value);
        }
        return value;
    }
}

function testFunction() {
    const selectedFunction = functionSelect.value;
    let result;
    
    try {
        switch(selectedFunction) {
            case 'sumThree':
                const a = getInputValue('input1');
                const b = getInputValue('input2');
                const c = getInputValue('input3');
                result = sumThree(a, b, c);
                break;
                
            case 'isNegative':
                result = isNegative(getInputValue('input1'));
                break;
                
            case 'multiply':
                result = multiply(getInputValue('input1'), getInputValue('input2'));
                break;
                
            case 'isInteger':
                result = isInteger(getInputValue('input1'));
                break;
                
            case 'percentage':
                result = percentage(getInputValue('input1'), getInputValue('input2'));
                break;

            case 'lastChar':
                result = lastChar(getInputValue('input1'));
                break;
                
            case 'toLower':
                result = toLower(getInputValue('input1'));
                break;
                
            case 'contains':
                result = contains(getInputValue('input1'), getInputValue('input2'));
                break;
                
            case 'repeatTwice':
                result = repeatTwice(getInputValue('input1'));
                break;
                
            case 'trimSpaces':
                result = trimSpaces(getInputValue('input1'));
                break;

            case 'andNot':
                result = andNot(getInputValue('input1', true), getInputValue('input2', true));
                break;
                
            case 'isTrue':
                const value = getInputValue('input1');
                const boolValue = value === 'true' || value === true;
                result = isTrue(boolValue);
                break;
                
            case 'isSame':
                result = isSame(getInputValue('input1', true), getInputValue('input2', true));
                break;
                
            case 'xor':
                result = xor(getInputValue('input1', true), getInputValue('input2', true));
                break;
                
            case 'toggle':
                result = toggle(getInputValue('input1', true));
                break;

            case 'hasKey':
                result = hasKey(getInputValue('input1'), getInputValue('input2'));
                break;
                
            case 'getKeys':
                result = getKeys(getInputValue('input1'));
                break;
                
            case 'isEqual':
                result = isEqual(getInputValue('input1'), getInputValue('input2'));
                break;
                
            case 'removeKey':
                result = removeKey(getInputValue('input1'), getInputValue('input2'));
                break;
                
            case 'isValueEqual':
                result = isValueEqual(getInputValue('input1'), getInputValue('input2'), getInputValue('input3'));
                break;

            case 'createArray':
                result = createArray(getInputValue('input1'), getInputValue('input2'));
                break;
                
            case 'containsArray':
                result = containsArray(getInputValue('input1'), getInputValue('input2'));
                break;
                
            case 'getLength':
                result = getLength(getInputValue('input1'));
                break;
                
            case 'addToEnd':
                const array = getInputValue('input1');
                const element = getInputValue('input2');
                result = addToEnd(array, element);
                break;
                
            case 'getLastElement':
                result = getLastElement(getInputValue('input1'));
                break;

            case 'logElements':
                result = logElements(getInputValue('input1'));
                break;
                
            case 'sumArray':
                result = sumArray(getInputValue('input1'));
                break;
                
            case 'toUpperCase':
                result = toUpperCase(getInputValue('input1'));
                break;
                
            case 'countNegatives':
                result = countNegatives(getInputValue('input1'));
                break;
                
            case 'logEven':
                result = logEven(getInputValue('input1'));
                break;

            case 'squareNumbers':
                result = squareNumbers(getInputValue('input1'));
                break;
                
            case 'doubleElements':
                result = doubleElements(getInputValue('input1'));
                break;
                
            case 'getFirstLetters':
                result = getFirstLetters(getInputValue('input1'));
                break;
                
            case 'addPrefix':
                result = addPrefix(getInputValue('input1'), getInputValue('input2'));
                break;
                
            case 'numbersToStrings':
                result = numbersToStrings(getInputValue('input1'));
                break;
        }

        let formattedResult;
        if (Array.isArray(result)) {
            formattedResult = JSON.stringify(result, null, 2);
        } else if (typeof result === 'object' && result !== null) {
            formattedResult = JSON.stringify(result, null, 2);
        } else if (typeof result === 'boolean') {
            formattedResult = result ? 'true' : 'false';
        } else {
            formattedResult = String(result);
        }
        
        resultOutput.textContent = formattedResult;
        resultDiv.style.display = 'block';
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
    } catch (error) {
        resultOutput.textContent = 'Ошибка: ' + error.message;
        resultDiv.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    functionSelect.addEventListener('change', updateInputFields);
    testButton.addEventListener('click', testFunction);
    updateInputFields();
    functionSelect.focus();
});