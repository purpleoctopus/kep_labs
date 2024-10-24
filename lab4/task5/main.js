let captchaValue = '';

const pixelDigits = {
    "0": [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    "1": [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1]
    ],
    "2": [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1]
    ],
    "3": [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ],
    "4": [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],
    "5": [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ],
    "6": [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    "7": [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],
    "8": [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    "9": [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ]
};

function generateRandomNumber(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10)
    }
    return result;
}

function initCaptcha(length) {
    const captchaContainer = document.getElementById('captcha-container');
    captchaContainer.innerHTML = '';
    captchaValue = generateRandomNumber(length);

    for (let i = 0; i < captchaValue.length; i++) {
        const digit = captchaValue[i];
        const pixelMap = pixelDigits[digit];

        const digitContainer = document.createElement('div');
        digitContainer.style.display = 'inline-block';
        digitContainer.style.margin = '1px';

        for (let row = 0; row < pixelMap.length; row++) {
            const rowContainer = document.createElement('div');
            for (let col = 0; col < pixelMap[row].length; col++) {
                const pixel = document.createElement('span');
                pixel.style.display = 'inline-block';
                pixel.style.width = '20px';
                pixel.style.height = '20px';
                rowContainer.style.height = '20px'
                if (pixelMap[row][col] === 1) {
                    pixel.style.backgroundColor = 'red';
                } else {
                    pixel.style.backgroundColor = 'white';
                }

                rowContainer.appendChild(pixel);
            }
            digitContainer.appendChild(rowContainer);
        }
        captchaContainer.appendChild(digitContainer);
    }
}

function checkCaptcha() {
    const userInput = document.getElementById('captcha-input').value;
    const resultElement = document.getElementById('captcha-result');

    if (userInput === captchaValue) {
        resultElement.innerText = 'Капча введена правильно!';
        resultElement.style.color = 'green';
    } else {
        resultElement.innerText = 'Неправильна капча. Спробуйте ще раз.';
        resultElement.style.color = 'red';
        initCaptcha(5)
    }
}

initCaptcha(5);