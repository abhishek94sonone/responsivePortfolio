window.addEventListener("load", (event) => {
    let ham = document.getElementsByClassName('menu-hamburger')[0];
    ham.addEventListener("click" , (e) => {
        if (ham.classList.contains('open')) {
            ham.classList.remove('open');
        } else {
            ham.classList.add('open')
        }
    });
});