// 🔹 База данных вопросов (Расширенная версия) 🔹
const questions = {
    "Математика": {
        "Алгебра": [
            { question: "Найдите значение выражения (a² - b²) / (a - b), если a = -5, b = -3.", options: ["-8", "-2", "8", "2"], answer: "-8" },
            { question: "Решите уравнение (x² - 9) / (x + 3) = x - 3.", options: ["x может быть любым числом", "x ≠ -3", "x = -3", "Решений нет"], answer: "x ≠ -3" },
            { question: "В геометрической прогрессии b₁ = -8, знаменатель q = -1/2. Найдите сумму первых трех членов.", options: ["-14", "-12", "-16", "-10"], answer: "-14" },
            { question: "Упростите выражение: 3x(2x - 5) - 2x(3x + 1).", options: ["-17x", "12x² - 17x", "6x² - 17x", "-13x"], answer: "-17x" },
            { question: "Разложите на множители: x² - 16.", options: ["(x-4)(x+4)", "(x-8)(x+2)", "(x-16)(x+1)", "Не раскладывается"], answer: "(x-4)(x+4)" },
            { question: "Чему равен корень уравнения 2x + 7 = 15?", options: ["4", "8", "2", "11"], answer: "4" }
        ],
        "Геометрия": [
            { question: "В равнобедренном треугольнике угол при основании равен 54°. Чему равен внешний угол при вершине?", options: ["72°", "108°", "126°", "54°"], answer: "126°" },
            { question: "Сумма двух углов, образованных при пересечении двух прямых, равна 180°. Являются ли эти углы смежными?", options: ["Да, всегда", "Нет, никогда", "Да, если они находятся по одну сторону от секущей", "Да, если они вертикальные"], answer: "Да, всегда" },
            { question: "Чему равна сумма углов выпуклого четырёхугольника?", options: ["180°", "360°", "540°", "720°"], answer: "360°" },
            { question: "Найдите площадь прямоугольника со сторонами 5 см и 8 см.", options: ["13 см²", "26 см²", "40 см²", "45 см²"], answer: "40 см²" },
            { question: "Как называется треугольник, у которого все стороны равны?", options: ["Равнобедренный", "Разносторонний", "Равносторонний", "Прямоугольный"], answer: "Равносторонний" }
        ]
    },
    "Физика": {
        "Механика": [
            { question: "Сила тяжести на Луне в 6 раз меньше земной. Во сколько раз изменится вес тела?", options: ["Увеличится в 6 раз", "Уменьшится в 6 раз", "Не изменится", "Уменьшится в 36 раз"], answer: "Уменьшится в 6 раз" },
            { question: "Два тела массами m и 2m движутся с одинаковыми скоростями v. Каково отношение их кинетических энергий?", options: ["1 : 1", "1 : 2", "2 : 1", "4 : 1"], answer: "1 : 2" },
            { question: "Какая единица измеряется сила в системе СИ?", options: ["Джоуль", "Ватт", "Ньютон", "Паскаль"], answer: "Ньютон" },
            { question: "Тело движется равномерно со скоростью 10 м/с. Какой путь оно пройдёт за 5 секунд?", options: ["2 м", "50 м", "15 м", "100 м"], answer: "50 м" },
            { question: "Что измеряется в килограммах?", options: ["Вес", "Масса", "Сила", "Давление"], answer: "Масса" }
        ],
        "Давление и газы": [
            { question: "Как изменится давление газа в закрытом сосуде при увеличении температуры в 3 раза?", options: ["Увеличится в √3 раз", "Увеличится в 3 раза", "Уменьшится в 3 раза", "Не изменится"], answer: "Увеличится в 3 раза" },
            { question: "Какое давление оказывает на пол ученик массой 50 кг, если площадь подошвы одного ботинка равна 150 см²?", options: ["~33 кПа", "~16 кПа", "~8 кПа", "~4 кПа"], answer: "~33 кПа" },
            { question: "В каких единицах измеряется давление в системе СИ?", options: ["Ньютон", "Джоуль", "Паскаль", "Ватт"], answer: "Паскаль" },
            { question: "Как изменится атмосферное давление при подъёме в горы?", options: ["Увеличится", "Уменьшится", "Не изменится", "Сначала увеличится, потом уменьшится"], answer: "Уменьшится" }
        ]
    },
    "Русский язык": {
        "Морфология": [
            { question: "В каком словосочетании выделенное слово является наречием?", options: ["говорил (как?) громко", "(какой?) громкий голос"], answer: "говорил (как?) громко" },
            { question: "Найдите предложение с деепричастным оборотом.", options: ["Он читал книгу лежа на диване.", "Книга лежала на столе."], answer: "Он читал книгу лежа на диване." },
            { question: "Какая часть речи отвечает на вопросы «кто?», «что?»?", options: ["Глагол", "Существительное", "Прилагательное", "Местоимение"], answer: "Существительное" },
            { question: "Сколько падежей в русском языке?", options: ["5", "6", "7", "8"], answer: "6" },
            { question: "Найдите имя прилагательное.", options: ["бежать", "красивый", "быстро", "дом"], answer: "красивый" }
        ],
        "Синтаксис": [
            { question: "Определите тип предложения 'Когда прозвенел звонок, урок начался'.", options: ["Сложносочиненное", "Простое осложненное", "Сложноподчиненное", "Бессоюзное"], answer: "Сложноподчиненное" },
            { question: "Чем осложнено предложение 'Ветер, дувший с моря, усиливался'?", options: ["Однородными членами", "Обособленным определением"], answer: "Обособленным определением" },
            { question: "Найдите простое предложение.", options: ["Я пришёл, и он ушёл.", "Солнце светило ярко.", "Когда я пришёл, он уже ушёл."], answer: "Солнце светило ярко." },
            { question: "Что является грамматической основой предложения?", options: ["Подлежащее и сказуемое", "Подлежащее и дополнение", "Сказуемое и обстоятельство"], answer: "Подлежащее и сказуемое" }
        ],
        "Союзы": [
            {
                question: 'В каком предложении союз «и» соединяет части сложносочиненного предложения?',
                options: ['Мы знали, что он придёт.', 'Дождь закончился, и выглянуло солнце.', 'Он сказал, чтобы я ушёл.'],
                answer: 'Дождь закончился, и выглянуло солнце.',
                explanation: 'Союз «и» соединяет два простых предложения в одно сложное (сложносочиненное), равноправные по смыслу.'
            },
            {
                question: 'Какой союз является подчинительным?',
                options: ['а', 'но', 'однако', 'потому что'],
                answer: 'потому что',
                explanation: 'Союзы «а», «но», «однако» — сочинительные. Союз «потому что» — подчинительный.'
            },
            {
                question: 'Найдите предложение с разделительным союзом.',
                options: ['Я приду, если смогу.', 'Он не то пел, не то кричал.', 'Мы пошли гулять, потому что погода была хорошая.'],
                answer: 'Он не то пел, не то кричал.',
                explanation: 'Повторяющийся союз «не то... не то» является разделительным.'
            }
        ]
    },
    "История": {
        "Древняя Русь": [
            { question: "В каком году произошло Крещение Руси?", options: ["988", "862", "1054", "1237"], answer: "988" },
            { question: "Кто был первым князем Киевской Руси?", options: ["Олег", "Игорь", "Рюрик", "Святослав"], answer: "Рюрик" },
            { question: "Как назывался главный торговый путь Древней Руси?", options: ["Шёлковый путь", "Путь из варяг в греки", "Янтарный путь", "Соляной путь"], answer: "Путь из варяг в греки" },
            { question: "Кто написал «Повесть временных лет»?", options: ["Нестор", "Иларион", "Кирилл", "Мефодий"], answer: "Нестор" }
        ],
        "Московское государство": [
            { question: "Кто был первым царём всея Руси?", options: ["Иван III", "Иван IV Грозный", "Пётр I", "Александр Невский"], answer: "Иван IV Грозный" },
            { question: "В каком году произошло Куликовское сражение?", options: ["1237", "1380", "1480", "1612"], answer: "1380" },
            { question: "Кто возглавил ополчение в 1612 году?", options: ["Минин и Пожарский", "Суворов и Кутузов", "Невский и Донской"], answer: "Минин и Пожарский" }
        ]
    },
    "География": {
        "План и карта": [
            { question: "Какой масштаб карты крупнее?", options: ["1:10000", "1:100000", "1:1000000", "1:10000000"], answer: "1:10000" },
            { question: "Как называется линия, соединяющая Северный и Южный полюса?", options: ["Экватор", "Меридиан", "Параллель", "Изогипса"], answer: "Меридиан" },
            { question: "Чему равен масштаб, если 1 см на карте = 1 км на местности?", options: ["1:1000", "1:10000", "1:100000", "1:1000000"], answer: "1:100000" },
            { question: "Как называется уменьшенная модель Земли?", options: ["Карта", "План", "Глобус", "Атлас"], answer: "Глобус" }
        ],
        "Природа Земли": [
            { question: "Какой океан самый большой?", options: ["Атлантический", "Индийский", "Тихий", "Северный Ледовитый"], answer: "Тихий" },
            { question: "Какая река самая длинная в мире?", options: ["Нил", "Амазонка", "Янцзы", "Миссисипи"], answer: "Амазонка" },
            { question: "Как называется самая высокая гора Земли?", options: ["К2", "Эльбрус", "Эверест", "Килиманджаро"], answer: "Эверест" }
        ]
    },
    "Биология": {
        "Клетка и ткани": [
            { question: "Какая органелла отвечает за синтез белка?", options: ["Митохондрия", "Рибосома", "Лизосома", "Вакуоль"], answer: "Рибосома" },
            { question: "Что является основной структурной единицей живого?", options: ["Ткань", "Орган", "Клетка", "Организм"], answer: "Клетка" },
            { question: "Где находится ДНК в растительной клетке?", options: ["Только в ядре", "В ядре, митохондриях и хлоропластах", "Только в цитоплазме", "В клеточной стенке"], answer: "В ядре, митохондриях и хлоропластах" }
        ],
        "Человек и здоровье": [
            { question: "Сколько камер в сердце человека?", options: ["2", "3", "4", "5"], answer: "4" },
            { question: "Какой орган очищает кровь от токсинов?", options: ["Сердце", "Печень", "Почки", "Лёгкие"], answer: "Печень" },
            { question: "Сколько зубов у взрослого человека в норме?", options: ["28", "30", "32", "34"], answer: "32" }
        ]
    }
};

// 🔹 Константы для системы очков 🔹
const POINTS_CORRECT = 10;    // Очки за правильный ответ
const POINTS_INCORRECT = -5;  // Штраф за неправильный ответ

// 🔹 Переменные состояния 🔹
let currentSubject = '';
let currentTopic = '';
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let selectedAnswer = null;
let currentUser = null;
let testPointsEarned = 0; // Очки заработанные в текущем тесте

// 🔹 Элементы DOM 🔹
const authScreen = document.getElementById('auth-screen');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const authTabs = document.querySelectorAll('.auth-tab');
const loginUsername = document.getElementById('login-username');
const registerUsername = document.getElementById('register-username');
const registerEmail = document.getElementById('register-email');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const authMessage = document.getElementById('auth-message');
const displayUsername = document.getElementById('display-username');
const displayPoints = document.getElementById('display-points');
const quizUsername = document.getElementById('quiz-username');
const quizPoints = document.getElementById('quiz-points');
const userFinalMessage = document.getElementById('user-final-message');
const pointsEarned = document.getElementById('points-earned');
const totalPoints = document.getElementById('total-points');
const pointsChange = document.getElementById('points-change');
const logoutBtn = document.getElementById('logout-btn');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const backFromLeaderboardBtn = document.getElementById('back-from-leaderboard-btn');
const leaderboardScreen = document.getElementById('leaderboard-screen');
const leaderboardBody = document.getElementById('leaderboard-body');
const userRank = document.getElementById('user-rank');
const subjectSelect = document.getElementById('subject');
const topicSelect = document.getElementById('topic');
const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const quizArea = document.getElementById('quiz-area');
const progressNum = document.getElementById('current-num');
const totalNum = document.getElementById('total-num');
const questionBox = document.getElementById('question-box');
const optionsBox = document.getElementById('options-box');
const submitBtn = document.getElementById('submit-btn');
const resultMessage = document.getElementById('result-message');
const nextBtn = document.getElementById('next-btn');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const finalMessage = document.getElementById('final-message');
const restartBtn = document.getElementById('restart-btn');
const backToMenuBtn = document.getElementById('back-to-menu-btn');
const explanationBox = document.getElementById('explanation-box');

// 🔹 Проверка сохранённого пользователя при загрузке 🔹
window.onload = () => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showStartScreen();
    }
    
    // Заполнение предметов
    for (let subject in questions) {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    }
};

// 🔹 Переключение вкладок авторизации 🔹
authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        if (tab.dataset.tab === 'login') {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        }
        authMessage.textContent = '';
        authMessage.className = 'auth-message';
    });
});

// 🔹 Вход пользователя 🔹
loginBtn.addEventListener('click', () => {
    const username = loginUsername.value.trim();
    
    if (!username) {
        showAuthMessage('Пожалуйста, введите имя!', 'error');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        showAuthMessage(`Добро пожаловать, ${username}! 🎉`, 'success');
        setTimeout(() => showStartScreen(), 1000);
    } else {
        const newUser = { username, email: '', registeredAt: new Date().toISOString(), points: 0, totalTests: 0, bestScore: 0 };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        showAuthMessage(`Пользователь ${username} зарегистрирован! 🎉`, 'success');
        setTimeout(() => showStartScreen(), 1000);
    }
});

// 🔹 Регистрация пользователя 🔹
registerBtn.addEventListener('click', () => {
    const username = registerUsername.value.trim();
    const email = registerEmail.value.trim();
    
    if (!username) {
        showAuthMessage('Пожалуйста, введите имя!', 'error');
        return;
    }
    
    if (username.length < 2) {
        showAuthMessage('Имя должно быть не менее 2 символов!', 'error');
        return;
    }
    
    if (!email) {
        showAuthMessage('Email обязателен для участия в рейтинге!', 'error');
        return;
    }
    
    // Простая валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAuthMessage('Введите корректный email!', 'error');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.username === username)) {
        showAuthMessage('Пользователь с таким именем уже существует!', 'error');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        showAuthMessage('Этот email уже зарегистрирован!', 'error');
        return;
    }
    
    const newUser = {
        username,
        email,
        registeredAt: new Date().toISOString(),
        points: 0,
        totalTests: 0,
        bestScore: 0
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    showAuthMessage(`Регистрация успешна! Добро пожаловать, ${username}! 🎉`, 'success');
    setTimeout(() => showStartScreen(), 1000);
});

// 🔹 Показать сообщение авторизации 🔹
function showAuthMessage(message, type) {
    authMessage.textContent = message;
    authMessage.className = `auth-message ${type}`;
}

// 🔹 Показать экран выбора предмета 🔹
function showStartScreen() {
    authScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    quizArea.classList.add('hidden');
    endScreen.classList.add('hidden');
    leaderboardScreen.classList.add('hidden');
    
    displayUsername.textContent = currentUser.username;
    displayPoints.textContent = currentUser.points || 0;
    quizUsername.textContent = `👤 ${currentUser.username}`;
    quizPoints.textContent = currentUser.points || 0;
}

// 🔹 Выход пользователя 🔹
logoutBtn.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    
    startScreen.classList.add('hidden');
    quizArea.classList.add('hidden');
    endScreen.classList.add('hidden');
    leaderboardScreen.classList.add('hidden');
    authScreen.classList.remove('hidden');
    
    loginUsername.value = '';
    registerUsername.value = '';
    registerEmail.value = '';
    subjectSelect.value = '';
    topicSelect.innerHTML = '<option value="" disabled selected>Сначала выберите предмет</option>';
    topicSelect.disabled = true;
});

// 🔹 Открыть таблицу лидеров 🔹
leaderboardBtn.addEventListener('click', () => {
    showLeaderboard();
    startScreen.classList.add('hidden');
    leaderboardScreen.classList.remove('hidden');
});

// 🔹 Вернуться из таблицы лидеров 🔹
backFromLeaderboardBtn.addEventListener('click', () => {
    leaderboardScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
});

// 🔹 Показать таблицу лидеров 🔹
function showLeaderboard() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Фильтруем только пользователей с email
    const rankedUsers = users
        .filter(u => u.email && u.email.trim() !== '')
        .sort((a, b) => (b.points || 0) - (a.points || 0));
    
    leaderboardBody.innerHTML = '';
    
    if (rankedUsers.length === 0) {
        leaderboardBody.innerHTML = '<tr><td colspan="4">Пока нет участников в рейтинге 😔</td></tr>';
        userRank.classList.add('hidden');
        return;
    }
    
    rankedUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;
        
        row.innerHTML = `
            <td>${medal}</td>
            <td>${escapeHtml(user.username)}</td>
            <td><strong>${user.points || 0}</strong></td>
            <td>${user.totalTests || 0}</td>
        `;
        
        // Подсветка текущего пользователя
        if (currentUser && user.username === currentUser.username) {
            row.style.backgroundColor = '#ffeaa7';
        }
        
        leaderboardBody.appendChild(row);
    });
    
    // Показать ранг текущего пользователя
    if (currentUser) {
        const userIndex = rankedUsers.findIndex(u => u.username === currentUser.username);
        if (userIndex !== -1) {
            userRank.textContent = `Ваше место: ${userIndex + 1} из ${rankedUsers.length}`;
            userRank.classList.remove('hidden');
        } else {
            userRank.textContent = 'Вы пока не в рейтинге (добавьте email в настройках)';
            userRank.classList.remove('hidden');
        }
    }
}

// 🔹 Экранирование HTML для безопасности 🔹
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 🔹 Обновление тем при смене предмета 🔹
subjectSelect.addEventListener('change', () => {
    currentSubject = subjectSelect.value;
    topicSelect.innerHTML = '<option value="" disabled selected>Выберите тему</option>';
    topicSelect.disabled = false;
    
    if (currentSubject) {
        for (let topic in questions[currentSubject]) {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            topicSelect.appendChild(option);
        }
    } else {
        topicSelect.disabled = true;
    }
});

// 🔹 Старт теста 🔹
startBtn.addEventListener('click', () => {
    currentSubject = subjectSelect.value;
    currentTopic = topicSelect.value;
    
    if (!currentSubject || !currentTopic) {
        alert('Пожалуйста, выберите предмет и тему.');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    testPointsEarned = 0;
    shuffledQuestions = shuffleArray(questions[currentSubject][currentTopic]);
    
    startScreen.classList.add('hidden');
    quizArea.classList.remove('hidden');
    endScreen.classList.add('hidden');
    
    loadQuestion();
});

// 🔹 Загрузка вопроса в интерфейс 🔹
function loadQuestion() {
    resetState();
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    
    progressNum.textContent = currentQuestionIndex + 1;
    totalNum.textContent = shuffledQuestions.length;
    questionBox.textContent = currentQuestion.question;
    
    currentQuestion.options.forEach(optionText => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = optionText;
        
        input.addEventListener('change', () => {
            selectedAnswer = optionText;
        });
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${optionText}`));
        optionsBox.appendChild(label);
    });
    
    submitBtn.classList.remove('hidden');
}

// 🔹 Проверка ответа 🔹
submitBtn.addEventListener('click', () => {
    if (!selectedAnswer) {
        alert('Пожалуйста, выберите вариант ответа!');
        return;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.answer) {
        score++;
        testPointsEarned += POINTS_CORRECT;
        resultMessage.textContent = `🌟 Молодец, ${currentUser.username}! Правильно!`;
        resultMessage.className = 'result-message correct';
        explanationBox.classList.add('hidden');
        
        // Показать изменение очков
        showPointsChange(POINTS_CORRECT);
    } else {
        testPointsEarned += POINTS_INCORRECT;
        resultMessage.textContent = `❌ ${currentUser.username}, попробуй ещё раз.`;
        resultMessage.className = 'result-message incorrect';
        
        if (currentQuestion.explanation) {
            explanationBox.textContent = `💡 Пояснение: ${currentQuestion.explanation}`;
            explanationBox.classList.remove('hidden');
        } else {
            explanationBox.classList.add('hidden');
        }
        
        // Показать изменение очков
        showPointsChange(POINTS_INCORRECT);
    }

    // Обновить очки в интерфейсе
    quizPoints.textContent = (currentUser.points || 0) + testPointsEarned;

    Array.from(optionsBox.children).forEach(child => {
        child.firstChild.disabled = true;
    });
    
    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
});

// 🔹 Показать изменение очков 🔹
function showPointsChange(points) {
    pointsChange.textContent = points > 0 ? `+${points} 🏆` : `${points} 🏆`;
    pointsChange.className = `points-change ${points > 0 ? 'positive' : 'negative'}`;
    pointsChange.classList.remove('hidden');
    
    setTimeout(() => {
        pointsChange.classList.add('hidden');
    }, 2000);
}

// 🔹 Переход к следующему вопросу 🔹
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
        nextBtn.classList.add('hidden');
        resultMessage.textContent = '';
        selectedAnswer = null;
        explanationBox.classList.add('hidden');
        pointsChange.classList.add('hidden');
    } else {
        endQuiz();
    }
});

// 🔹 Завершение теста 🔹
function endQuiz() {
    quizArea.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    const totalQuestions = shuffledQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    finalScore.textContent = `${score}/${totalQuestions}`;
    pointsEarned.textContent = testPointsEarned > 0 ? `+${testPointsEarned}` : testPointsEarned;
    
    // Обновить данные пользователя
    updateUserData(testPointsEarned, percentage);
    
    totalPoints.textContent = currentUser.points || 0;
    
    if (percentage === 100) {
        finalMessage.textContent = "Идеальный результат! 🏆";
        userFinalMessage.textContent = `${currentUser.username}, ты настоящий чемпион!`;
    } else if (percentage >= 70) {
        finalMessage.textContent = "Хороший результат! 👍";
        userFinalMessage.textContent = `${currentUser.username}, отличная работа!`;
    } else {
        finalMessage.textContent = "Нужно ещё потренироваться 📚";
        userFinalMessage.textContent = `${currentUser.username}, не сдавайся!`;
    }
}

// 🔹 Обновление данных пользователя 🔹
function updateUserData(pointsEarned, percentage) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.username === currentUser.username);
    
    if (userIndex !== -1) {
        users[userIndex].points = (users[userIndex].points || 0) + pointsEarned;
        users[userIndex].totalTests = (users[userIndex].totalTests || 0) + 1;
        if (percentage > (users[userIndex].bestScore || 0)) {
            users[userIndex].bestScore = percentage;
        }
        localStorage.setItem('users', JSON.stringify(users));
        currentUser = users[userIndex];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Обновить отображение очков
        displayPoints.textContent = currentUser.points || 0;
    }
}

// 🔹 Повторное прохождение 🔹
restartBtn.addEventListener('click', () => {
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    
    currentSubject = '';
    currentTopic = '';
    currentQuestionIndex = 0;
    score = 0;
    testPointsEarned = 0;
    shuffledQuestions = [];
    selectedAnswer = null;
    
    subjectSelect.value = '';
    topicSelect.innerHTML = '<option value="" disabled selected>Сначала выберите предмет</option>';
    topicSelect.disabled = true;
    
    resetState();
    explanationBox.classList.add('hidden');
});

// 🔹 Возврат в меню 🔹
backToMenuBtn.addEventListener('click', () => {
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    quizArea.classList.add('hidden');
    
    currentSubject = '';
    currentTopic = '';
    currentQuestionIndex = 0;
    score = 0;
    testPointsEarned = 0;
    shuffledQuestions = [];
    selectedAnswer = null;
    
    subjectSelect.value = '';
    topicSelect.innerHTML = '<option value="" disabled selected>Сначала выберите предмет</option>';
    topicSelect.disabled = true;
    
    resetState();
    explanationBox.classList.add('hidden');
});

// 🔹 Вспомогательные функции 🔹
function resetState() {
    nextBtn.classList.add('hidden');
    resultMessage.textContent = '';
    resultMessage.className = 'result-message';
    while (optionsBox.firstChild) {
        optionsBox.removeChild(optionsBox.firstChild);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}