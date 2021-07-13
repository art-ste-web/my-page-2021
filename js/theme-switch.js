//themeSwitcher.addEventListener('change', )

class ThemeSwitcher {
    constructor() {
              
    }
    
    switchTheme() {
        const themeSwitch = document.querySelector('.theme-switch');
        const navBar = document.querySelector('.navbar');
        const logo = document.querySelector('.navbar-brand img');
        const firstScreen = document.querySelector('.first-screen');
        
        if(themeSwitch.checked == true) {
            localStorage.setItem('theme', 'dark');
            console.log('dark');
            navBar.classList.add('dark-nav');
            logo.src = 'img/logo-dark.png';
            firstScreen.classList.add('dark-first-screen');
            
        }
        else {
            localStorage.setItem('theme', 'light');
            console.log('light');
            navBar.classList.remove('dark-nav');
            logo.src = 'img/logo.png';
            firstScreen.classList.remove('dark-first-screen');
        }
    }
    setDefualtTheme() {
       let lSthemeValue = localStorage.getItem('theme');
       
       
        if(lSthemeValue == 'dark') {
            themeSwitch.checked = true;
            
            console.log(lSthemeValue);
        }
        
    }
}
const themeSwitcher = new ThemeSwitcher();
const themeSwitchBtn = document.querySelector('.theme-switch');

themeSwitchBtn.addEventListener('change', themeSwitcher.switchTheme);
