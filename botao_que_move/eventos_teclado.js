/**
 * 
 * Altere o programa do exercicio anterior para 
 * que o botão seja movido com as setas do teclado
 * 
 */

const botao = document.querySelector('button');
let valorCima = 0;
let valorEsquerda = 0;

window.addEventListener('keydown',(elemento)=>{
  // console.log(elemento.code);
    /** com o translate */

    // switch(elemento.code){
    //   case 'ArrowUp':
    //     console.log('mova para cima');
    //     valorCima -=30;
    //     botao.style.translate = '0 ' + valorCima +'px';
    //     break;
    //   case 'ArrowDown':
    //     console.log('mova para baixo');
    //     valorCima += 30;
    //     botao.style.translate = '0 ' + valorCima + 'px';
    //     break;
    //   case 'ArrowLeft':
    //     console.log('mova para esquerda');
    //     valorEsquerda -= 30;
    //     botao.style.translate = valorEsquerda + 'px 0';
    //     break;
    //   case 'ArrowRight':
    //     console.log('mova para direita');
    //     valorEsquerda += 30;
    //     botao.style.translate = valorEsquerda + 'px 0';
    //     break;
    //   default:
    //     console.log('Ignorado');
    // }
  /** Com posição absoluta */
    switch(elemento.code){
        case 'ArrowUp':
          console.log('mova para cima');
          valorCima -=30;
          botao.style.top = valorCima +'px';
          break;
        case 'ArrowDown':
          console.log('mova para baixo');
          valorCima += 30;
          botao.style.top = valorCima + 'px';
          break;
        case 'ArrowLeft':
          console.log('mova para esquerda');
          valorEsquerda -= 30;
          botao.style.left = valorEsquerda + 'px';
          break;
        case 'ArrowRight':
          console.log('mova para direita');
          valorEsquerda += 30;
          botao.style.left = valorEsquerda + 'px';
          break;
        default:
          console.log('Ignorado');
    }
});