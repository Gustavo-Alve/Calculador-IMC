const frm = document.querySelector("form")


frm.addEventListener("submit",function(event){
    
    const weight = document.getElementById("peso").value;
    const height = document.getElementById("altura").value;

    const bmi = (weight / (height * height)).toFixed(2);
    
    const value = document.getElementById("value");
    let description = '';
    

    document.getElementById('infos').classList.remove('hidden');

    if (bmi <18.5){ //&& funciona como e 
        description = 'cuidado Voce está abaixo do peso';
    } else if (bmi >=18.5 && bmi <= 25){ 
        description = 'Você está no peso ideal';
    } else if (bmi >25 && bmi <=30)  {
        description = 'Cuidado Você está com sobrepeso';
    } else if (bmi >30 && bmi <=35){
        description = 'Cuidado Você está com obesidade moderada';
    } else if (bmi >35 && bmi <=40){
        description = ' Cuidado Você está com obesidade severa'
    } else {
        description = ' Cuidado Você está com obesidade morbida'
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
    event.preventDefault();
})