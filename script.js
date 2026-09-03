// ========== БАЗА ДАННЫХ: ВСЕ МЕСТА ==========
const locations = [
    // === РУМЫНИЯ: НЭВОДАРИ И РАДИУС 3 КМ ===
    {
        name: 'Нэводари (центр)',
        category: '🏙️ Город',
        distance: '0 км',
        fact: 'Город на черноморском побережье Румынии, бывшая деревня Каракиой',
        vibe: '🌊 Морской воздух и история',
        region: 'Добруджа',
        country: 'Румыния'
    },
    {
        name: 'Собор Святого Андрея',
        category: '⛪ Архитектура',
        distance: '0.8 км',
        fact: 'Главный православный храм Нэводари, виден из любой точки города',
        vibe: '🕯️ Уют и величие',
        region: 'Добруджа',
        country: 'Румыния'
    },
    {
        name: 'Парк Нэводари',
        category: '🌳 Природа',
        distance: '1.2 км',
        fact: 'Зелёный оазис в центре города для спокойных прогулок',
        vibe: '🌿 Тишина и тень',
        region: 'Добруджа',
        country: 'Румыния'
    },
    {
        name: 'Озеро Тасол',
        category: '💧 Природа',
        distance: '1.5 км',
        fact: 'Самое большое озеро Румынии! Солоноватая вода и потрясающие закаты',
        vibe: '🌅 Романтика и простор',
        region: 'Добруджа',
        country: 'Румыния'
    },
    {
        name: 'Канал Нэводари-Тасол',
        category: '🚤 Природа',
        distance: '2 км',
        fact: 'Соединяет озеро Тасол с Чёрным морем, любят рыбаки',
        vibe: '🎣 Рыбацкая идиллия',
        region: 'Добруджа',
        country: 'Румыния'
    },
    {
        name: 'Plaja Navodari (городской пляж)',
        category: '🏖️ Пляж',
        distance: '2.5 км',
        fact: 'Центральный пляж Нэводари, летом здесь кипит жизнь',
        vibe: '☀️ Шумный, весёлый',
        region: 'Добруджа',
        country: 'Румыния'
    },
    {
        name: 'Порт Нэводари',
        category: '⚓ Индустрия',
        distance: '2.8 км',
        fact: 'Небольшая рыбацкая гавань с видом на море',
        vibe: '⛵ Морская романтика',
        region: 'Добруджа',
        country: 'Румыния'
    },
    {
        name: 'Plaja Ancutei (Раду)',
        category: '🏖️ Пляж',
        distance: '3 км',
        fact: 'Пляж с престижным «Голубым флагом» за чистоту воды',
        vibe: '🏆 Спокойный, семейный',
        region: 'Добруджа',
        country: 'Румыния'
    },

    // === ДРУГИЕ ГОРОДА МИРА (для разнообразия) ===
    {
        name: 'Рейкьявик',
        category: '🌌 Город',
        distance: '3300 км',
        fact: 'Столица Исландии, где можно увидеть северное сияние',
        vibe: '❄️ Холод и магия',
        region: 'Исландия',
        country: 'Европа'
    },
    {
        name: 'Токио',
        category: '🌆 Город',
        distance: '8500 км',
        fact: 'Город будущего, где сакура цветёт рядом с неоновыми огнями',
        vibe: '🌸 Неон и традиции',
        region: 'Хонсю',
        country: 'Япония'
    },
    {
        name: 'Кейптаун',
        category: '🏔️ Город',
        distance: '9600 км',
        fact: 'У подножия Столовой горы, где океан встречается с саванной',
        vibe: '🌊 Драйв и свобода',
        region: 'Западный Кейп',
        country: 'ЮАР'
    },
    {
        name: 'Перт',
        category: '🌴 Город',
        distance: '13000 км',
        fact: 'Самый уединённый мегаполис мира, окружённый пляжами',
        vibe: '🏄‍♂️ Релакс и океан',
        region: 'Западная Австралия',
        country: 'Австралия'
    },
    {
        name: 'Барселона',
        category: '🎨 Город',
        distance: '2200 км',
        fact: 'Город Гауди, где архитектура превращается в искусство',
        vibe: '🎭 Творчество и солнце',
        region: 'Каталония',
        country: 'Испания'
    }
];

// ========== ЭЛЕМЕНТЫ DOM ==========
const plane = document.getElementById('plane');
const randomBtn = document.getElementById('randomBtn');
const infoCard = document.getElementById('infoCard');
const cityName = document.getElementById('cityName');
const categoryBadge = document.getElementById('categoryBadge');
const cardFact = document.getElementById('cardFact');
const cardVibe = document.getElementById('cardVibe');
const cardDistance = document.getElementById('cardDistance');
const cardRegion = document.getElementById('cardRegion');
const cardCountry = document.getElementById('cardCountry');
const totalPlaces = document.getElementById('totalPlaces');

// Показываем количество мест в коллекции
totalPlaces.textContent = locations.length;

// ========== ОСНОВНАЯ ФУНКЦИЯ ==========
function flyToRandomPlace() {
    // 1. Анимация самолёта (улетает)
    plane.classList.remove('fly');
    infoCard.classList.remove('show');
    
    // 2. Случайное место
    const randomIndex = Math.floor(Math.random() * locations.length);
    const place = locations[randomIndex];
    
    // 3. Запускаем самолёт через небольшую задержку
    setTimeout(() => {
        plane.classList.add('fly');
    }, 100);
    
    // 4. Показываем карточку с новыми данными (синхронизируем с анимацией)
    setTimeout(() => {
        cityName.textContent = place.name;
        categoryBadge.textContent = place.category;
        cardFact.textContent = place.fact;
        cardVibe.textContent = place.vibe;
        cardDistance.textContent = `✈️ ${place.distance}`;
        cardRegion.textContent = `📍 ${place.region}`;
        cardCountry.textContent = place.country;
        
        // Смена цвета бейджа в зависимости от категории (опционально)
        updateBadgeColor(place.category);
        
        infoCard.classList.add('show');
    }, 700);
    
    // 5. Сброс самолёта через 4 секунды (чтобы можно было нажать снова)
    setTimeout(() => {
        plane.classList.remove('fly');
    }, 4000);
}

// ========== ЦВЕТА ДЛЯ КАТЕГОРИЙ ==========
function updateBadgeColor(category) {
    const badge = document.querySelector('.card-badge');
    const colors = {
        '🏙️ Город': 'rgba(100, 200, 255, 0.2)',
        '🏖️ Пляж': 'rgba(100, 255, 200, 0.2)',
        '🌳 Природа': 'rgba(100, 255, 100, 0.2)',
        '⛪ Архитектура': 'rgba(255, 200, 100, 0.2)',
        '💧 Природа': 'rgba(100, 200, 255, 0.2)',
        '🚤 Природа': 'rgba(100, 200, 255, 0.2)',
        '⚓ Индустрия': 'rgba(200, 200, 200, 0.2)',
        '🌌 Город': 'rgba(200, 150, 255, 0.2)',
        '🌆 Город': 'rgba(200, 150, 255, 0.2)',
        '🏔️ Город': 'rgba(200, 150, 255, 0.2)',
        '🌴 Город': 'rgba(200, 150, 255, 0.2)',
        '🎨 Город': 'rgba(200, 150, 255, 0.2)'
    };
    badge.style.background = colors[category] || 'rgba(255,255,255,0.1)';
}

// ========== ЗАПУСК ПО КНОПКЕ ==========
randomBtn.addEventListener('click', flyToRandomPlace);

// ========== АВТОЗАПУСК ПРИ ЗАГРУЗКЕ ==========
// Чтобы не было пустого экрана, показываем случайное место через 0.5 сек
setTimeout(flyToRandomPlace, 500);
