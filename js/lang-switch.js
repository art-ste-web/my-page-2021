// const uaText = {
//     nav : { item1 : "Про мене", item2 : "Портфоліо", item3 : "Робочий процес" },
//     mainDesc : "Інформаційный сайт / сайт-портфоліо /  лендинг / блог / інтернет магазин / графічний дизайн",

// };

const uaText = {
    nav : ["Про мене", "Портфоліо", "Робочий процес"],
    mainDesc : "Інформаційный сайт / сайт-портфоліо /  лендинг / блог / інтернет магазин / графічний дизайн",
    moreBtn : "Детальніше",

};

const ruText = {
    nav : ["Обо мне", "Портфолио", "Рабочий процесс"],
    mainDesc : "Информационный сайт / сайт-портфолио /  лендинг / блог / интернет магазин / графический дизайн",
    moreBtn : "Узнать больше",
    aboutMeHeader: "Обо мне",
    aboutMeText: `Здравствуйте, меня зовут Артем, я занимаюсь веб-дизайном и разработкой сайтов различного
        назначения. Имею высшее техническое образование, закончил курсы веб-разработки, стараюсь 
        постоянно совершенствовать свои навыки путем самообучения.
        Работу над проектом всегда стараюсь организовать таким образом, чтобы заказчик мог 
        контроллировать процесс выполнения проекта и участвовать в его реализации на каждом из 
        этапов выполнения.`,
};





class LangSwitcher {
    constructor() {
    }

    //local storage methods
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
        mainDesc.innerHTML = activeLangData.mainDesc;
        moreBtn.innerHTML = activeLangData.moreBtn;
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

    //default lang by client lang
    setDefaultLang() {
        const userLang = navigator.language || navigator.userLanguage;
        console.log(userLang);
        if(userLang === 'ru-RU') {
            const ruLangData = this.getLangDataFromLs('ru');
            this.changeNavLang(ruLangData);
            this.addActiveLangBtnState('ru');
        }
        else {
            const uaLangData = this.getLangDataFromLs('ua');
            this.changeNavLang(uaLangData);
            this.addActiveLangBtnState('ua');
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
        
    } )
}