const onda1 = document.getElementById('onda1')

const onda2 = document.getElementById('onda2')

const onda3 = document.getElementById('onda3')

const onda4 = document.getElementById('onda4')



 window.addEventListener('scroll', function(){

const rolagemPos = window.scrollY

 onda1.style.backgroundPositionX = 400 + rolagemPos * 4 + 'px';

 })

 const titulo = document.querySelector('.titulo');
 const secaoPrincipal = document.querySelector('#principal');

window.addEventListener('scroll', function() {
  const rolagemPos = window.scrollY;
  const alturaTitulo = titulo.clientHeight;

  if (rolagemPos < secaoPrincipal.clientHeight - alturaTitulo) {
    titulo.style.transform = `translateY(${rolagemPos}px)`;
  } else {
    titulo.style.transform = `translateY(${secaoPrincipal.clientHeight - alturaTitulo}px)`;
  }
});


const acessibilidadeLink = document.getElementById('acessibilidade-link');
const acessibilidadeMenu = document.getElementById('acessibilidade-menu');

acessibilidadeLink.addEventListener('click', function (e) {
  e.preventDefault();
  acessibilidadeMenu.classList.toggle('active');
  acessibilidadeMenu.style.clipPath = 'circle(100% at 100% 0)';
});

  
