const navtoggle = document .querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navtoggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(element => {
    element.addEventListener('click',() =>
    {
        document.body.classList.remove('nav-open');
    })
})