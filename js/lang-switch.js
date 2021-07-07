// const uaText = {
//     nav : { item1 : "Про мене", item2 : "Портфоліо", item3 : "Робочий процес" },
//     mainDesc : "Інформаційный сайт / сайт-портфоліо /  лендинг / блог / інтернет магазин / графічний дизайн",

// };

const uaText = {
    nav : ["Про мене", "Портфоліо", "Робочий процес"],
    mainDesc : "Інформаційный сайт / сайт-портфоліо /  лендинг / блог / інтернет магазин / графічний дизайн",

};

const ruText = {
    nav : ["Обо мне", "Портфолио", "Рабочий процесс"],
    mainDesc : "Информационный сайт / сайт-портфолио /  лендинг / блог / интернет магазин / графический дизайн",

};





class LangSwitcher {
    constructor() {
    }
    setLangDataToLs(langData, langKey) {
        localStorage.setItem(langKey, JSON.stringify(langData));
    }
    getLangDataFromLs(lang) {
        const curLang =localStorage.getItem(lang);
        return JSON.parse(curLang);
    }
    changeNavLang(activeLangData) {
        const navItems = document.querySelectorAll('#navbarNav li a');
        for(let i = 0; i < navItems.length; i++) {
            navItems[i].innerHTML = activeLangData.nav[i];
        }
        console.log(activeLangData.nav);
    }
    setDefaultLang() {
        const userLang = navigator.language || navigator.userLanguage;
        console.log(userLang);
        if(userLang === 'ru-RU') {
            const ruLangData = this.getLangDataFromLs('ru');
            this.changeNavLang(ruLangData);
        }
        else {
            const uaLangData = this.getLangDataFromLs('ua');
            this.changeNavLang(uaLangData);
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
        console.log(activeLangData);
        langSwitcher.changeNavLang(activeLangData);
    } )
}