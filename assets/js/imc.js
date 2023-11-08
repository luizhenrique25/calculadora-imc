const form = document.getElementById("form")

form.addEventListener('submit' , function(event){
    event.preventDefault();
    const peso = document.getElementById("weight").value;
    const altura = document.getElementById("height").value;
    const imc = peso / (altura * altura)

    document.getElementById("infos").classList.remove("hidden");
    let descricao;

    const campoImc = document.getElementById("value");

    campoImc.classList.add("attention")
    //condicões do Imc
    
    if(imc < 18.5){
        descricao = "você esta abaixo do seu peso!"
    }

    else if((imc > 18.5)&&(imc <= 25)){
        descricao = "você esta no seu peso ideal"
        // campoImc.classList.remove("attention")
        // campoImc.classList.add("normal")
        campoImc.style.color = "green"
    }

    else if((imc > 25) && (imc<= 30)){
        descricao = "você esta acima do peso"
        campoImc.style.color = "orange"
    }

    else if((imc >30) && (imc<= 35)){
        descricao = "você esta com obesidade moderada"
        campoImc.style.color = "orange-red"
    }

    else if((imc >35) && (imc<= 40)){
        descricao = "você esta com obesidade severa"
        campoImc.style.color = "red"
    }

    else{
        descricao = "cuidado você esta com obesidade orbita"
        campoImc.style.color = "black"
    }
    
    document.getElementById("description").textContent = descricao;
    campoImc.textContent = imc.toFixed(2)

});