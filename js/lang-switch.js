
const uaText = {
    nav : ["Про мене", "Портфоліо", "Робочий процес", "Блог", "Контакти"],
    mainDesc : "Інформаційный сайт / сайт-портфоліо /  лендинг / блог / інтернет магазин / графічний дизайн",
    moreBtn : "Детальніше",
    aboutMeHeader: "Про мене",
    aboutMeText: `Вітаю, мене звуть Артем, я займаюсь веб-дизайном та розробкою сайтів різного
        призначення. Маю вищу технічну освіту, закінчив курси веб-розробки, намагаюсь 
        постійно вдосконалювати свої знання.
        Роботу над проектом завжди організовую таким чином, щоб замовник міг 
        контролювати процес виконання проекту та брати участь у його реалізації на кожному з 
        этапів виконання.`,
    portfolioHead: "Портфоліо",
    portfolioDesc: "Приклади реалізованих проектів",
    portfolioMoreBtn: "Детальніше про проекти...",
    devProcessHead: "Процес розробки сайту",
    devProcessDesc: "Основні етапи створення сайту",
    devProcessTzHead: "Складання ТЗ спільно з замовником:",
    devProcessTzDesc: `Визначення цілей та задач сайту, його структури та змісту,
        загальних вимог до дизайну. Візначення технічних вимог,
        які технології будуть використані, вимоги до адаптивності. Попередній розрахунок вартості.`,
    devProcessStructHead: "Розробка структурного макету:",
    devProcessStructDesc: `Розташування елементів навігації, основні блоки,
        їх послідовність, текстове наповнення, створення загального структурного макету.`,
    devProcessLayoutHead: "Створення графічного дизайн-макету:",
    devProcessLayoutDesc: `Вибір кольорової схеми для сайту з урахуванням тематики,
            цільової аудиторії та побажань замовника. Підбір типографіки та графічних матеріалів.
            Розробка графічного макету та підготовка сайту до верстки.`,
    devProcessDevHead: "Розробка сайту:",
    devProcessDevDesc: `Верстка сайту по дизайн-макету, програмування поведінки
                інтерактивних елементів, розробка додаткових модулей
                (калькулятори вартості, форми зворотнього зв'язку, чат-боти), інтеграція з CMS.`,
    devProcessDeployHead: "Розміщення на хостингу, тестування та запуск сайту:",
    devProcessDeployDesc: `Регістрація доменого імені, налаштування хостингу, підключення SSL сертифікату,
                    створення бази даних. Початкова SEO оптимізація, тестування та запуск сайту.`,

};

const ruText = {
    nav : ["Обо мне", "Портфолио", "Рабочий процесс", "Блог", "Контакты"],
    mainDesc : "Информационный сайт / сайт-портфолио /  лендинг / блог / интернет магазин / графический дизайн",
    moreBtn : "Узнать больше",
    aboutMeHeader: "Обо мне",
    aboutMeText: `Здравствуйте, меня зовут Артем, я занимаюсь веб-дизайном и разработкой сайтов различного
        назначения. Имею высшее техническое образование, закончил курсы веб-разработки, стараюсь 
        постоянно совершенствовать свои навыки путем самообучения.
        Работу над проектом всегда организовываю таким образом, чтобы заказчик мог 
        контроллировать процесс выполнения проекта и участвовать в его реализации на каждом из 
        этапов выполнения.`,
    portfolioHead: "Портфолио",
    portfolioDesc: "Примеры выполненных проектов",
    portfolioMoreBtn: "Подробнее о проектах...",
    devProcessHead: "Процесc разработки сайта",
    devProcessDesc: "Основные этапы создания сайта",
    devProcessTzHead: "Cоставление ТЗ совместно с заказчиком:",
    devProcessTzDesc: `Определение целей и задач сайта, его структуры и содержание,
        общих требований к дизайну. Определение технических требований,
        используемые технологии, требования к адаптивности. Предварительный расчет стоимости.`,
    devProcessStructHead: "Разработка структурного макета:",
    devProcessStructDesc: `Расположение элементов навигации, основные блоки, их последовательность,
        текстовое наполнение, создание общего структурного макета.`,
    devProcessLayoutHead: "Создание графического дизайн-макета:",
    devProcessLayoutDesc: `Выбор цветовой схемы для сайта с учетом тематики,
        целевой аудитории и пожеланий заказчика. Подбор типографики и графических материалов.
        Разработка графического макета и подготовка сайта к верстке.`,
    devProcessDevHead: "Разработка сайта:",
    devProcessDevDesc: `Верстка сайта по дизайн-макету, программирование поведения
        интерактивных элементов, разработка дополнительных модулей
        (калькуляторы стоимости, формы обратной связи, чат-боты), интерграция с CMS.`,
    devProcessDeployHead: "Размещение на хостинге, тестирование и запуск сайта:",
    devProcessDeployDesc: `Регистрация доменного имени, настройка хостинга, подключение SSL сертификата,
        создание базы данных. Базовая SEO оптимизация, тестирование и запуск сайта.`,
};





class LangSwitcher {
    constructor() {
    }

    //local storage methods
    setSelectedLangToLs(selectedLang) {
        localStorage.setItem('selectedLang', JSON.stringify(selectedLang));
    }
    setLangDataToLs(langData, langKey) {
        localStorage.setItem(langKey, JSON.stringify(langData));
    }
    getLangDataFromLs(lang) {
        const curLang =localStorage.getItem(lang);
        return JSON.parse(curLang);
    }
    //change elemets lang
    changeNavLang(activeLangData) {
        const navItems = document.querySelectorAll('#navbarNav li a');
        for(let i = 0; i < navItems.length; i++) {
            navItems[i].innerHTML = activeLangData.nav[i];
        }
        // console.log(activeLangData.nav);
    }
    changeElementsLang(activeLangData) {
        //first screen
        const mainDesc = document.querySelector('.short-desc');
        const moreBtn = document.querySelector('.more-btn');
        mainDesc.innerHTML = activeLangData.mainDesc;
        moreBtn.innerHTML = activeLangData.moreBtn;

        //about
        const aboutMeHeader = document.querySelector('#about .block-header h1');
        const aboutMeText = document.querySelector('.about-text p');
        aboutMeHeader.innerHTML = activeLangData.aboutMeHeader;
        aboutMeText.innerHTML = activeLangData.aboutMeText;

        //portfolio
        const portfolioHead = document.querySelector('#portfolio h1');
        const portfolioDesc = document.querySelector('#portfolio p');
        const portfolioBtn = document.querySelector('#portfolio .prjcts-btn');
        portfolioHead.innerHTML = activeLangData.portfolioHead;
        portfolioDesc.innerHTML= activeLangData.portfolioDesc;
        portfolioBtn.innerHTML = activeLangData.portfolioMoreBtn;

        //dev process
        const devHead = document.querySelector('#dev_process h1');
        const devDecs = document.querySelector('#dev_process .desc');
        const devTzHead = document.querySelector('#dev_process .dev-tz h2');
        const devTzDesc = document.querySelector('#dev_process .dev-tz p');
        const devStructHead = document.querySelector('#dev_process .struct h2');
        const devStructDesc = document.querySelector('#dev_process .struct p');
        const devLayoutHead = document.querySelector('#dev_process .layout h2');
        const devLayoutDesc = document.querySelector('#dev_process .layout p');
        const devDevHead = document.querySelector('#dev_process .dev h2');
        const devDevDesc = document.querySelector('#dev_process .dev p');
        const devDeployHead = document.querySelector('#dev_process .deploy h2');
        const devDeployDesc = document.querySelector('#dev_process .deploy p');
        devHead.innerHTML = activeLangData.devProcessHead;
        devDecs.innerHTML = activeLangData.devProcessDesc;
        devTzHead.innerHTML = activeLangData.devProcessTzHead;
        devTzDesc.innerHTML = activeLangData.devProcessTzDesc;
        devStructHead.innerHTML = activeLangData.devProcessStructHead;
        devStructDesc.innerHTML = activeLangData.devProcessStructDesc;
        devLayoutHead.innerHTML = activeLangData.devProcessLayoutHead;
        devLayoutDesc.innerHTML = activeLangData.devProcessLayoutDesc;
        devDevHead.innerHTML = activeLangData.devProcessDevHead;
        devDevDesc.innerHTML = activeLangData.devProcessDevDesc;
        devDeployHead.innerHTML = activeLangData.devProcessDeployHead;
        devDeployDesc.innerHTML = activeLangData.devProcessDeployDesc;
                
    }
    addActiveLangBtnState(activeLang) {
        this.resetLangBtnState();
        const actBtn = document.querySelector(`[lang=${activeLang}]`);
        
        actBtn.classList.add('cur-lang');
        
    }
    resetLangBtnState() {
        const langBtns = document.querySelectorAll('.lang-btn');
        for(let i = 0; i<langBtns.length; i++) {
            langBtns[i].classList.remove('cur-lang');
            // console.log('lang btn reset');
        }
    }

    //default lang by client lang or user previous select
    setDefaultLang() {
        const selectedLang = this.getLangDataFromLs('selectedLang');
        const langData = this.getLangDataFromLs(selectedLang);
        // console.log(selectedLang);
        if(selectedLang) {
            this.changeNavLang(langData);
            this.changeElementsLang(langData);
            this.addActiveLangBtnState(selectedLang);
        }
        else {
            const clientLang = navigator.language || navigator.userLanguage;
            console.log(clientLang);
            const userLang = clientLang == 'ru-RU' ? 'ru' : 'ua';
            console.log(userLang);
            const langData = this.getLangDataFromLs(userLang);
            this.changeNavLang(langData);
            this.changeElementsLang(langData);
            this.addActiveLangBtnState(userLang);
            this.setSelectedLangToLs(userLang);
        }
        
        
        
    }
    
}

const langSwitcher = new LangSwitcher;
langSwitcher.setLangDataToLs(uaText, 'ua');
langSwitcher.setLangDataToLs(ruText, 'ru');
langSwitcher.setDefaultLang();




const switchLangBtn = document.querySelectorAll('.lang-btn');
for(let i = 0; i < switchLangBtn.length; i++) {
    switchLangBtn[i].addEventListener('click', (e)=> {
        const activeLangData = langSwitcher.getLangDataFromLs(e.target.lang);
        console.log(e.target.lang);
        // console.log(activeLangData);
        langSwitcher.changeNavLang(activeLangData);
        langSwitcher.changeElementsLang(activeLangData);
        langSwitcher.addActiveLangBtnState(e.target.lang);
        langSwitcher.setSelectedLangToLs(e.target.lang);
    } )
}