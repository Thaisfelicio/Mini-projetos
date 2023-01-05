const tempoAtual = () =>{
    const elemento = document.querySelector("h1");

    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundos = data.getSeconds();

    hora = hora <10 ? `0${hora}` : hora;
    minuto = minuto <10 ? `0${minuto}` : minuto;
    segundos = segundos <10 ? `0${segundos}` : segundos;

    let tempo = `${hora}:${minuto}:${segundos}`;
    elemento.innerText = tempo;
};


setInterval(tempoAtual(), 500);
tempoAtual();