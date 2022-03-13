console.log('Самооценка 75 баллов (выполнены все требования согласно критериев оценки\nСмена изображений в секции portfolio +25 баллов\nПеревод страницы на два языка +25\nПереключение светлой и тёмной темы +25\nДополнительный функционал: выбранный пользователем язык отображения страницы и  тема сохраняются при перезагрузке страницы +5\nДополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5\n')

const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav_container');
const nav = document.querySelectorAll('.nav-link');
const theme = document.querySelector('.theme');
const logo = document.querySelector('.header_logo');
const headerBtn = document.querySelector('.button_one');
const language = document.querySelector('.language');
const buttons = document.querySelectorAll('.button_one')
let langLocalStorage = 'en';

function openMenu() {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    logo.classList.toggle('index');
    headerBtn.classList.toggle('index');
    language.classList.toggle('index');
    theme.classList.toggle('hidden');
}

function closeMenu(event) {
    if(event.target.classList.contains('nav-link')) {
        burger.classList.remove('open');
        menu.classList.remove('open');
        logo.classList.remove('index');
        headerBtn.classList.remove('index');
        language.classList.remove('index');
        theme.classList.remove('hidden');
    }
}

function getHoverBurger() {
    burger.classList.add('hover');
}

function removeHoverBurger() {
    burger.classList.remove('hover');
}

burger.addEventListener('click', openMenu);
burger.addEventListener('mouseenter', getHoverBurger);
burger.addEventListener('mouseleave', removeHoverBurger);
nav.forEach((el) => el.addEventListener('click', closeMenu));

/* Смена изображений в секции портфолио*/

const portfolioImages = document.querySelectorAll('.portfolio-image');
const btnWrapper = document.querySelector('.wrapper_button');

function changeImages(event) {
    if(event.target.classList.contains('button-winter')) {
        portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`);
    }
    if(event.target.classList.contains('button-autumn')) {
        portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpg`);
    }
    if(event.target.classList.contains('button-summer')) {
        portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpg`);
    }
    if(event.target.classList.contains('button-spring')) {
        portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpg`);
    }
}

btnWrapper.addEventListener('click', changeImages);

/*Кэширование изображений*/

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
    seasons.forEach((item, index) => {
        const img = new Image();
        img.src = `assets/img/${item}/${index + 1}.jpg`;
    })
}

preloadImages();


/*Подсветка автивной кнопки*/

const portfolioButtons = document.querySelectorAll('.button');
const autumnBtn = document.querySelector('.button-autumn');


function changeClassActive(event) {
    portfolioButtons.forEach(item => item.classList.remove('active'));
    autumnBtn.classList.add('none');
    if(event.target.classList.contains('button')) {
        event.target.classList.add('active');
    }
}

btnWrapper.addEventListener('click', changeClassActive);

/*Изменение темы*/
const skilsSection = document.querySelector('.skills_section');
const portfolioSection = document.querySelector('.portfolio_section');
const videoSection = document.querySelector('.video_section');
const priceSection = document.querySelector('.price_section');
const contactsSection = document.querySelector('.contacts_section');
const body = document.querySelector('.body');
const footer = document.querySelector('.footer');
const menuTheme = document.querySelector('.header_navigation');
const whiteTheme = [skilsSection, portfolioSection, videoSection, priceSection, contactsSection];
const buttonsWhiteTheme = [document.querySelector('.button-winter'), document.querySelector('.button-spring'), document.querySelector('.button-summer')];

function changeTheme(){
            body.classList.toggle('body_theme');
            footer.classList.toggle('black_theme');
            autumnBtn.classList.toggle('white');
            theme.classList.toggle('theme_dark');
            menuTheme.classList.toggle('menu-theme');
            burger.classList.toggle('black');
            whiteTheme.forEach(item => item.classList.toggle('light-theme'));
            buttonsWhiteTheme.forEach(item => item.classList.toggle('white'));

            if (body.classList.contains('body_theme')) {
                themeLocaLStorage = 'light';
            } else {
                themeLocaLStorage = 'dark';
            }
}

theme.addEventListener('click', changeTheme);


/* Перевод страницы*/ 

const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price-description-1-p-1': 'One location',
        'price-description-1-p-2': '120 photos in color',
        'price-description-1-p-3': '12 photos in retouch',
        'price-description-1-p-4': 'Readiness 2-3 weeks',
        'price-description-1-p-5': 'Make up, visage',
        'price-description-2-p-1': 'One or two locations',
        'price-description-2-p-2': '200 photos in color',
        'price-description-2-p-3': '20 photos in retouch',
        'price-description-2-p-4': 'Readiness 1-2 weeks',
        'price-description-2-p-5': 'Make up, visage',
        'price-description-3-p-1': 'Three locations or more',
        'price-description-3-p-2': '300 photos in color',
        'price-description-3-p-3': '50 photos in retouch',
        'price-description-3-p-4': 'Readiness 1 week',
        'price-description-3-p-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price-description-1-p-1': 'Одна локация',
        'price-description-1-p-2': '120 цветных фото',
        'price-description-1-p-3': '12 отретушированных фото',
        'price-description-1-p-4': 'Готовность через 2-3 недели',
        'price-description-1-p-5': 'Макияж, визаж',
        'price-description-2-p-1': 'Одна-две локации',
        'price-description-2-p-2': '200 цветных фото',
        'price-description-2-p-3': '20 отретушированных фото',
        'price-description-2-p-4': 'Готовность через 1-2 недели',
        'price-description-2-p-5': 'Макияж, визаж',
        'price-description-3-p-1': 'Три локации и больше',
        'price-description-3-p-2': '300 цветных фото',
        'price-description-3-p-3': '50 отретушированных фото',
        'price-description-3-p-4': 'Готовность через 1 неделю',
        'price-description-3-p-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить'
    }
}

const dataElemTranslate = document.querySelectorAll('[data-i18]');
const enLanguage = document.querySelector('.change');
const ruLanguage = document.querySelector('.change_another_language');
const skillsTitle = document.querySelector('.skills_title');
const potrfolioTitle = document.querySelector('.portfolio_title');
const videoTitle = document.querySelector('.video_title');
const priceTitle = document.querySelector('.price_title');
const contactsWrapper = document.querySelector('.contacts_wrapper');              


function getTranslate(event, lang) {
    if (event.target.classList.contains('change')) {
        lang = 'en';
        langLocalStorage = 'en';
        dataElemTranslate.forEach((elem) => elem.textContent = i18Obj[lang][elem.dataset.i18]);
        enLanguage.classList.remove('lang-color-white');
        ruLanguage.classList.remove('lang-color');
        skillsTitle.classList.remove('skills-theme');
        potrfolioTitle.classList.remove('portfolio-theme');
        videoTitle.classList.remove('video-theme');
        priceTitle.classList.remove('price-theme');
        contactsWrapper.classList.remove('contacts-theme');
    }
    if (event.target.classList.contains('change_another_language')) {
        lang = 'ru';
        langLocalStorage = 'ru';
        dataElemTranslate.forEach((elem) => elem.textContent = i18Obj[lang][elem.dataset.i18]);
        ruLanguage.classList.add('lang-color');
        enLanguage.classList.add('lang-color-white');
        skillsTitle.classList.add('skills-theme')
        potrfolioTitle.classList.add('portfolio-theme');
        videoTitle.classList.add('video-theme');
        priceTitle.classList.add('price-theme');
        contactsWrapper.classList.add('contacts-theme');
    }
}

language.addEventListener('click', getTranslate);

/* Cохранение данных в local storage */


function setLocalStorage() {
    localStorage.setItem('lang', langLocalStorage);
    localStorage.setItem('theme', themeLocaLStorage);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        getTranslateLocalStorage(lang);
    }
    if(localStorage.getItem('theme')) {
        const userTheme = localStorage.getItem('theme')
        getTheme(userTheme);
    }
}


window.addEventListener('load', getLocalStorage);

function getTranslateLocalStorage(lang) {
    if (lang === 'ru') {
        langLocalStorage = 'ru';
        dataElemTranslate.forEach((elem) => elem.textContent = i18Obj[lang][elem.dataset.i18]);
        ruLanguage.classList.add('lang-color');
        enLanguage.classList.add('lang-color-white');
        skillsTitle.classList.add('skills-theme')
        potrfolioTitle.classList.add('portfolio-theme');
        videoTitle.classList.add('video-theme');
        priceTitle.classList.add('price-theme');
        contactsWrapper.classList.add('contacts-theme');
    }
}


function getTheme(userTheme) {
    if(userTheme === 'light') {
        body.classList.add('body_theme');
        footer.classList.add('black_theme');
        autumnBtn.classList.add('white');
        theme.classList.add('theme_dark');
        menuTheme.classList.add('menu-theme');
        burger.classList.add('black');
        whiteTheme.forEach(item => item.classList.add('light-theme'));
        buttonsWhiteTheme.forEach(item => item.classList.toggle('white'))
    } else if(userTheme === 'dark') {
        body.classList.remove('body_theme');
        footer.classList.remove('black_theme');
        autumnBtn.classList.remove('white');
        theme.classList.remove('theme_dark');
        menuTheme.classList.remove('menu-theme');
        burger.classList.remove('black');
        whiteTheme.forEach(item => item.classList.remove('light-theme'))
        
    }
}


/* Реализация кнопки*/

function animateButton(event) {
    event.target.classList.remove('animate');
    event.target.classList.add('animate');
    setTimeout(function(){
    event.target.classList.remove('animate');
    },700);
};

buttons.forEach((item) =>item.addEventListener('click', animateButton, false));
portfolioButtons.forEach((item) =>item.addEventListener('click', animateButton, false));