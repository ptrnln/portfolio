//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    const root = document.documentElement;
    const themeSwitch = document.body.querySelector('#theme-switch');

    const theme = document.cookie.match(/theme=(\w+)/)?.[1];

    debugger
    if(theme) {
        if(theme === 'dark') {
            themeSwitch.checked = null;
            root.style.setProperty('--bs-body-bg', '#212529');
            root.style.setProperty('--bs-card-bg', '#2f363d');
            root.style.setProperty('--bs-card-color', '#7d868f');
            root.style.setProperty('--bs-header-color', '#fff');
        } else {
            themeSwitch.checked = 'checked';
            root.style.setProperty('--bs-body-bg', '#fff');
            root.style.setProperty('--bs-card-bg', '#fff');
            root.style.setProperty('--bs-card-color', '#212529');
            root.style.setProperty('--bs-header-color', '#343a40');
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.cookie = 'theme=dark';
        themeSwitch.checked = null;
        root.style.setProperty('--bs-body-bg', '#212529');
        root.style.setProperty('--bs-card-bg', '#2f363d');
        root.style.setProperty('--bs-card-color', '#7d868f');
        root.style.setProperty('--bs-header-color', '#fff');
    } else {
        document.cookie = 'theme=light';
        themeSwitch.checked = 'checked';
        root.style.setProperty('--bs-body-bg', '#fff');
        root.style.setProperty('--bs-card-bg', '#fff');
        root.style.setProperty('--bs-card-color', '#212529');
        root.style.setProperty('--bs-header-color', '#343a40');
    }


    themeSwitch.addEventListener('change', function () {
        if(!this.checked) {
            document.cookie = 'theme=dark';
            root.style.setProperty('--bs-body-bg', '#212529');
            root.style.setProperty('--bs-card-bg', '#2f363d');
            root.style.setProperty('--bs-card-color', '#7d868f');
            root.style.setProperty('--bs-header-color', '#fff');
            console.log(cookie);
        } else {
            document.cookie = 'theme=light';
            root.style.setProperty('--bs-body-bg', '#fff');
            root.style.setProperty('--bs-card-bg', '#fff');
            root.style.setProperty('--bs-card-color', '#212529');
            root.style.setProperty('--bs-header-color', '#343a40');
            console.log(document.cookie);
        }
    });

});
