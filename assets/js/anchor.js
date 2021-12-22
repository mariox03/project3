var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
const btn = document.getElementById('myBtn');

btn.addEventListener('click', () => window.scrollTo({
    top: 1,
    behavior: 'smooth',
}))

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;;
}

AOS.init();