//a tarefa completa
let item = document.getElementsByClassName("item");
let bordaVidro = document.querySelector(".border");

//botoes da lista
let salvarTarefa = document.getElementById("salvarTarefa");
let deletar = document.getElementById("deletar");
let adicionarTarefa = document.getElementById("adicionarTarefa");

adicionarTarefa.addEventListener("click", ()=>{
    let itemNovo = document.createElement("div");
    itemNovo.classList.add("item");
    bordaVidro.appendChild(itemNovo);
})