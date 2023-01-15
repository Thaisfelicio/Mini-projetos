//a tarefa completa
let item = document.getElementsByClassName("item");
let bordaVidro = document.querySelector(".border");

//botoes da lista
let salvarTarefa = document.getElementById("salvarTarefa");
let deletar = document.getElementById("deletar");
let adicionarTarefa = document.getElementById("adicionarTarefa");

adicionarTarefa.addEventListener("click", ()=>{
    //crio uma div nova para armazenar o conteudo
    let proximoItem = document.createElement("div");
    //adiciono a classe item nela
    proximoItem.classList.add("item");

    //crio uma variavel com o conteudo da div
    let itemNovo = 
        "<span>" + "<i class='fa-solid fa-hands-clapping'>" + "</i>" +"</span>" +
        "<input type='text'>" +
        "<a id='salvarTarefa'>" + "<i class='fa-solid fa-floppy-disk'>" + "</i>" + "</a>" +
        "<a id='deletar'>" + "<i class='fa-solid fa-trash'>" + "</i>" + "</a>" +
        "<a id='adicionarTarefa'>" + "<i class='fa-solid fa-plus'>" + "</i>" + "</a>";
    
    //adiciono o conteudo criado dentro da div
    proximoItem.innerHTML = itemNovo;   
    //adiciono a div completa dentro da div com borda de vidro através do appendChild
    bordaVidro.appendChild(proximoItem);
})

// <div class="item">
    //         <span><i class="fa-solid fa-hands-clapping"></i></span>
    //         <input type="text">
    //         <a href="#" id="salvarTarefa"><i class="fa-solid fa-floppy-disk"></i></a>
    //         <a href="#" id="deletar"><i class="fa-solid fa-trash"></i></a>
    //         <a href="#" id="adicionarTarefa"><i class="fa-solid fa-plus"></i></a>
    //     </div>