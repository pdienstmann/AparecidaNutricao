var paciente = document.querySelectorAll('.paciente');





for (let index = 0; index < paciente.length; index++) {
  
    var tdPeso = paciente[index].querySelector('.info-peso');
    var peso = tdPeso.textContent;


var tdAltura = paciente[index].querySelector('.info-altura');
var altura = tdAltura.textContent;






var pesoEhValido = validaPeso(peso);
var alturaEhValida = validaAltura(altura);


var tdIMC = paciente[index].querySelector('.info-imc');


if(!pesoEhValido){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdIMC.textContent = "Peso inválido";
    paciente[index].classList.add("paciente-invalido");
} 


if(!alturaEhValida){

    alturaEhValida = false;
    tdIMC.textContent = "Altura inválida";
    paciente[index].classList.add("paciente-invalido");
}



if(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso, altura);
    
    tdIMC.textContent = imc;
    
    

}




}



function validaPeso(peso){

    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){

        if(altura>=0 && altura < 3){
            return true;
        }else{
            return false;
        }
}

function calculaImc(peso, altura){

    var imc = 0;

    imc = peso / (altura*altura);



    return imc.toFixed(2);


}






