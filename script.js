// Генерация двух случайных чисел
let num1, num2, correctAnswer;

function generateEquation() {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    correctAnswer = num1 + num2;

    document.getElementById('equation').textContent = `${num1} + ${num2} = ?`;
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('userAnswer').value = '';
}

// Проверка ответа пользователя
document.getElementById('submitAnswer').addEventListener('click', function () {
    const userAnswer = Number(document.getElementById('userAnswer').value);
    const resultMessage = document.getElementById('resultMessage');
    
    if (userAnswer === correctAnswer) {
        resultMessage.textContent = 'Правильно!';
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = 'Неверно, попробуйте еще раз.';
        resultMessage.style.color = 'red';
    }
});

// Генерация нового примера
document.getElementById('newEquation').addEventListener('click', generateEquation);

// Инициализация первого примера при загрузке страницы
generateEquation();



// 3. JavaScript отвечает за логику приложения:
//         * Генерируются два случайных числа.

//         * После нажатия на кнопку "Проверить" приложение сравнивает ответ пользователя с правильным ответом.

//         * Если ответ правильный, появляется сообщение "Правильно!", если неправильный — "Неверно, попробуйте еще раз".

//         * Кнопка "Новое задание" генерирует новый пример для решения. 