//a tarefa completa
let item = document.getElementsByClassName("item");
let bordaVidro = document.querySelector(".border");

//botoes da lista
let salvarTarefa = document.getElementsByClassName("salvarTarefa");
let deletar = document.querySelectorAll(".deletar");
let adicionarTarefa = document.querySelectorAll(".adicionarTarefa");

function addTask(){
    //crio uma div nova para armazenar o conteudo
    let proximoItem = document.createElement("div");
    //adiciono a classe item nela
    proximoItem.classList.add("item");

    //crio uma variavel com o conteudo da div
    let itemNovo = 
        "<input type='checkbox' class='selecionar'>" + "</input>" + 
        "<input type='text'>" +
        "<a class='salvarTarefa'>" + "<i class='fa-solid fa-floppy-disk'>" + "</i>" + "</a>" +
        "<a class='deletar'>" + "<i class='fa-solid fa-trash'>" + "</i>" + "</a>" /*+
        "<a class='adicionarTarefa'>" + "<i class='fa-solid fa-plus'>" + "</i>" + "</a>"*/;
    
    //adiciono o conteudo criado dentro da div
    proximoItem.innerHTML = itemNovo;   
    //adiciono a div completa dentro da div com borda de vidro através do appendChild
    let newItem = bordaVidro.appendChild(proximoItem);
    return newItem;
}

    adicionarTarefa[0].addEventListener("click", ()=>{
        addTask();
})
 
salvarTarefa[0].addEventListener("click", function(tarefa){
    let input = document.querySelector("input");
    let tarefaNova = document.createElement("h4");
    tarefaNova = document.createTextNode(tarefa)
    input.replaceChild(tarefaNova, item);
})


// item.forEach(item => {
//     item.addEventListener('click', function(e){
//         const itemFeito = e.target.parentElement;
//         itemFeito.remove();
//     })
// });


  