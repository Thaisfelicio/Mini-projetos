/**
 * 1- Faça um programa com vários botões que mudam de cor quando clica neles
 * 2- Altere também a cor da fonte do texto dos botões. Use cores aleatórias
 * 3- Mude o programa para que as alterações ocorram quando o mouse passe sobre o botão, ao invés de clicar
 * 4- Faça um programa com um único botão,que "foge" do mouse.
 */

// let botoes = document.querySelectorAll('button');

// botoes.forEach(function(element){
//   element.addEventListener('click', ()=>{
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     element.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
//   });
// });

let botao = document.querySelector('button');

botao.addEventListener('mouseenter',()=>{
  let x = Math.floor(Math.random()*1000);
  let y = Math.floor(Math.random()*1000);
  botao.style.translate = `${x}px ${y}px`;
});

//Exemplo do professor
// const geraCor = ()=>{
//   const R = Math.floor(Math.random()*255);
//   const G = Math.floor(Math.random()*255);
//   const B = Math.floor(Math.random()*255);

//   return rgb = `rgb(${R}, ${G}, ${B})`;
// }

// botoes.forEach((el)=>{
//   // el.style.width = "80px";
//   // el.style.height = "80px";

//   el.addEventListener('mouseenter', ()=>{
//     el.style.backgroundColor = geraCor();
//     el.style.color = geraCor();

//   })
// });

