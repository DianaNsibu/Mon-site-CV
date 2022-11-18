var hamburgerToggler = document.querySelector('.hamburger');
var NavLinks= document.querySelector('.nav-item-container');
var links = document.getElementsByClassName('nav-item');

function toggleNav(){
    hamburgerToggler.classList.toggle('open');
    NavLinks.classList.toggle('visible');
 }

hamburgerToggler.addEventListener('click', toggleNav);
NavLinks.addEventListener('click',toggleNav);

function activeLink(){
     for(let i =0 ; i < links.length; i++){    
        links[i].addEventListener('click',function(e){
           for(let j=0; j<links.length;j++){
               links[j].classList.remove('actif');
          }
          this.classList.add('actif');
         })
    }
}
activeLink();