const navigationResponsive=document.querySelector('.navigation');
const menubtn=document.querySelector('.menu-btn');
const navlinks=document.querySelectorAll('.navigation a');

menubtn.addEventListener('click',()=>{
    navigationResponsive.classList.toggle('open');
    document.querySelector(".line-1").classList.toggle('open');
    document.querySelector(".line-2").classList.toggle('open');
    document.querySelector(".line-3").classList.toggle('open');
    document.querySelectorAll(".line").classList.toggle('open');
});

navlinks.forEach(link=>{
    link.addEventListener('click',()=>{
        navigationResponsive.classList.toggle('open');
        document.querySelector(".line-1").classList.toggle('open');
        document.querySelector(".line-2").classList.toggle('open');
        document.querySelector(".line-3").classList.toggle('open');
        document.querySelectorAll(".line").classList.toggle('open');
    });
}
);