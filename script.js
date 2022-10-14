const navbar = document.querySelector('header')
const links = document.querySelectorAll('.linky')

window.onscroll=function(){
    let top = window.scrollY
    if(top > 480){
        navbar.classList.add('active')
        links.forEach((link) => {
            link.style.color = "#202020";
        });
        
    }else{
        navbar.classList.remove('active')
        links.forEach((link) => {
            link.style.color = "#ffffff";
        });
        
        
    }
}