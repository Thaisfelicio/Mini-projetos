//a tarefa completa
let item = document.getElementsByClassName("item");
let bordaVidro = document.querySelector(".border");

//botoes da lista
let salvarTarefa = document.getElementsByClassName("salvarTarefa");
let deletar = document.getElementById("deletar");
let adicionarTarefa = document.querySelectorAll(".adicionarTarefa");

function addTask(){
    //crio uma div nova para armazenar o conteudo
    let proximoItem = document.createElement("div");
    //adiciono a classe item nela
    proximoItem.classList.add("item");

    //crio uma variavel com o conteudo da div
    let itemNovo = 
        "<span>" + "<i class='fa-solid fa-hands-clapping'>" + "</i>" +"</span>" +
        "<input type='text'>" +
        "<a class='salvarTarefa'>" + "<i class='fa-solid fa-floppy-disk'>" + "</i>" + "</a>" +
        "<a id='deletar'>" + "<i class='fa-solid fa-trash'>" + "</i>" + "</a>" /*+
        "<a class='adicionarTarefa'>" + "<i class='fa-solid fa-plus'>" + "</i>" + "</a>"*/;
    
    //adiciono o conteudo criado dentro da div
    proximoItem.innerHTML = itemNovo;   
    //adiciono a div completa dentro da div com borda de vidro através do appendChild
    bordaVidro.appendChild(proximoItem);
}

    adicionarTarefa[0].addEventListener("click", ()=>{
        addTask();
})

 




