var botaoAdicionar = document.querySelector("#buscar-paciente");
var buscado = false;


botaoAdicionar.addEventListener("click", function(){
    

    var xhr = new XMLHttpRequest();


    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        var atualizado = document.querySelector("#atualizado");
        



        if(xhr.status==200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
         
            if(buscado) atualizado.classList.remove("invisivel");

            if(!buscado){

                pacientes.forEach((paciente) => {
                    adicionaPacienteNaTabela(paciente);
                })

                buscado = true;
                

            }
            
           
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
           
           
        }
        
        

    })

    xhr.send();


  


   
})

