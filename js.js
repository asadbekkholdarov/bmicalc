var i = 0;
var text = "Hi guys, you can know your BMI...!";
type();
function type() {
    if( i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}


function calculateBmi(){
    const weightVal = document.getElementById("weight");
    const heightVal = document.getElementById("height");
    const name = document.getElementById("name");
    const result = document.getElementById("result");
    const advice = document.getElementById("advice");
    
    
    const height = parseFloat(heightVal.value);
    const weight = parseFloat(weightVal.value);
    
    let bmi = (weight / (height * height)).toFixed(2);
    
    result.innerHTML = ` ${name.value}'s Bmi is ${bmi} `;
    
    if(result<=18){
        advice.innerHTML = "Underweight - Advice: so you may need to put on some weight. You are recommended to ask your doctor or a dietitan for you";
    } else if(result>18 && result<=25){
        advice.innerHTML = "Normal: You are at a healthy weight, you lower your risk of developing serious health priblems, continue!";
    } else {
        advice.innerHTML = "Overweight - Adivce for you: you are slightly overweight. You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietitian for advice!";
    }
    
}