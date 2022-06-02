const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {

    mario.classList.remove('jump');

  }, 500); //setTimeout ela recebe dois parametros uma função
}

const loop = setInterval(() => {

  console.log('loop')

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');// substitui o numero de px que 180 para nada em vez de usar number pra converte e so colocar um mais na frente 

  
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`

    mario.src = 'imagens/game-over.png'; //troca a imagem
    mario.style.width = '75px'
    mario.style.marginLeft = '52px'

    clearInterval(loop);// para para o jogo

  }

}, 10);

const verificar = () => {
  mario.classList.add('jump')

  setTimeout(() => {

    mario.classList.remove('jump');

  }, 500); //setTimeout ela recebe dois parametros uma função
}

document.addEventListener('keydown', jump);




