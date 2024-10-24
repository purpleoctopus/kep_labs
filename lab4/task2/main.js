let num1, num2, correctAnswer, score = 0, sum = 0;
let usedQuestions = new Set(); // Зберігає унікальні питання
let generated = true;

function nextQuestion() {
    do {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
    } while (usedQuestions.has(`${num1}*${num2}`));

    usedQuestions.add(`${num1}*${num2}`);
    correctAnswer = num1 * num2;

    document.getElementById('question').innerText = `Скільки буде ${num1} * ${num2}?`;
    document.getElementById('result').innerText = ''; 
    document.getElementById('answer').value = ''; 
    generated = true
}

function checkAnswer() {
    if(!generated) return

    let userAnswer = parseInt(document.getElementById('answer').value);

    if (!isNaN(userAnswer)) {
        sum++;
        if (userAnswer === correctAnswer) {
            document.getElementById('result').innerText = 'Правильно!';
            score++
        } else {
            document.getElementById('result').innerText = `Неправильно! Правильна відповідь: ${correctAnswer}`;
        }
        document.getElementById('percent').innerText = `${(score/sum * 100).toFixed(2)}% `
        document.getElementById('score').innerText = `${score}/${sum}`
        generated = false
    } else {
        document.getElementById('result').innerText = 'Введіть число.';
    }
}

nextQuestion();