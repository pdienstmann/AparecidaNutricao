var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("tbody");


tabela.addEventListener("dblclick",(event) => {
   
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover
    
    event.target.parentNode.classList.add("fadeOut");


    setTimeout(()=>{
        paiDoAlvo.remove(); // ou event.target.parentNode.remove();

    }, 500);
 
   
    
})















// pacientes.forEach(paciente => {


//     paciente.addEventListener("dblclick", function(){
//         console.log("fui clicado");
//         this.remove();

//     })
    
// });
