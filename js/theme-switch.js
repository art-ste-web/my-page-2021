//themeSwitcher.addEventListener('change', )

class ThemeSwitcher {
    constructor() {
              
    }
    
    switchTheme() {
        const pageBody = document.querySelector('.page-body');
        const themeSwitch = document.querySelector('.theme-switch');
        const navBar = document.querySelector('.navbar');
        const logo = document.querySelector('.navbar-brand img');
        const firstScreen = document.querySelector('.first-screen');
        const aboutBlock = document.querySelector('.about-me');
        const portfolioBlock = document.querySelector('.portfolio');
        const portfolioSlider = document.querySelector('.portfolio .carousel');
        const devProcessBlock = document.querySelector('.dev-process');
        const blogBlock = document.querySelector('.blog');
        
        if(themeSwitch.checked == true) {
            localStorage.setItem('theme', 'dark');
            console.log('dark');
            pageBody.classList.add('dark-bg');
            navBar.classList.add('dark-nav');
            logo.src = 'img/logo-dark.png';
            firstScreen.classList.add('dark-first-screen');
            aboutBlock.classList.add('dark-about-me');
            portfolioBlock.classList.add('dark-portfolio');
            portfolioSlider.classList.remove('carousel-dark');
            devProcessBlock.classList.add('dark-dev');
            blogBlock.classList.add('dark-blog');
        }
        else {
            localStorage.setItem('theme', 'light');
            console.log('light');
            pageBody.classList.remove('dark-bg');
            navBar.classList.remove('dark-nav');
            logo.src = 'img/logo.png';
            firstScreen.classList.remove('dark-first-screen');
            aboutBlock.classList.remove('dark-about-me');
            portfolioBlock.classList.remove('dark-portfolio');
            portfolioSlider.classList.add('carousel-dark');
            devProcessBlock.classList.remove('dark-dev');
            blogBlock.classList.remove('dark-blog');
        }
    }
    setDefualtTheme() {
       let lSthemeValue = localStorage.getItem('theme');
       const themeSwitch = document.querySelector('.theme-switch');
       
        if(lSthemeValue == 'dark') {
            themeSwitch.checked = true;
            this.switchTheme();
            console.log(lSthemeValue);
        }
        
    }
}
const themeSwitcher = new ThemeSwitcher();
const themeSwitchBtn = document.querySelector('.theme-switch');

themeSwitchBtn.addEventListener('change', themeSwitcher.switchTheme);
themeSwitcher.setDefualtTheme();