const header = document.querySelector('.header-fixed')

window.onscroll = function() {
    if(window.pageYOffset >= 200) {
        header.classList.add('active')
    } else if (window.pageYOffset < 200 && header.classList.contains('active')) {
        header.classList.remove('active')
    }
}