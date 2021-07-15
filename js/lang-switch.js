// const uaText = {
//     nav : { item1 : "Про мене", item2 : "Портфоліо", item3 : "Робочий процес" },
//     mainDesc : "Інформаційный сайт / сайт-портфоліо /  лендинг / блог / інтернет магазин / графічний дизайн",

// };

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
        const mainDesc = document.querySelector('.short-desc');
        const moreBtn = document.querySelector('.more-btn');
        const aboutMeHeader = document.querySelector('#about .block-header h1');
        const aboutMeText = document.querySelector('.about-text p');
        mainDesc.innerHTML = activeLangData.mainDesc;
        moreBtn.innerHTML = activeLangData.moreBtn;
        aboutMeHeader.innerHTML = activeLangData.aboutMeHeader;
        aboutMeText.innerHTML = activeLangData.aboutMeText;
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