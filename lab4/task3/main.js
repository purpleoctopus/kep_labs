let num1, num2, correctAnswer, score = 0, sum = 0;
let usedQuestions = new Set();
let generated = true;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateOptions(correctAnswer) {
    let answers = new Set();
    answers.add(correctAnswer);

    while (answers.size < 4) {
        let randomAnswer = getRandomInt(Math.ceil((correctAnswer-1)/2), (correctAnswer+1)*2);
        answers.add(randomAnswer);
    }

    return Array.from(answers); 
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function nextQuestion() {
    do {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
    } while (usedQuestions.has(`${num1}*${num2}`));

    usedQuestions.add(`${num1}*${num2}`);
    correctAnswer = num1 * num2;

    document.getElementById('question').innerText = `Скільки буде ${num1} * ${num2}?`;

    let options = generateOptions(correctAnswer);
    options = shuffle(options);

    document.getElementById('option1').value = options[0];
    document.getElementById('label1').innerText = options[0];

    document.getElementById('option2').value = options[1];
    document.getElementById('label2').innerText = options[1];

    document.getElementById('option3').value = options[2];
    document.getElementById('label3').innerText = options[2];

    document.getElementById('option4').value = options[3];
    document.getElementById('label4').innerText = options[3];

    document.getElementById('result').innerText = ''; 
    generated = true;
}

function checkAnswer() {
    if(!generated) return
    let userAnswer = document.querySelector('input[name="answer"]:checked');

    if (userAnswer) {
        sum++;
        let selectedAnswer = parseInt(userAnswer.value);

        if (selectedAnswer === correctAnswer) {
            document.getElementById('result').innerText = 'Правильно!';
            score++;
        } else {
            document.getElementById('result').innerText = `Неправильно! Правильна відповідь: ${correctAnswer}`;
        }
        
        document.getElementById('percent').innerText = `${(score / sum * 100).toFixed(2)}%`;
        document.getElementById('score').innerText = `${score}/${sum}`;
        generated = false
    } else {
        document.getElementById('result').innerText = 'Оберіть відповідь.';
    }
}

nextQuestion();