function shfaqNumber()  {
    var randomNumber = Math.random();
    randomNumber = randomNumber*100;
    if(randomNumber > 50 && randomNumber<=100){
        document.getElementById('numri').innerHTML = randomNumber+" vlera me e madhe se 50";
    }else if(randomNumber < 50 && randomNumber<=20){
        document.getElementById('numri').innerHTML = randomNumber+" vlera me e vogel se 50";
    }else{
        var data = new Date();
        document.getElementById('numri').innerHTML = "Data e sotme:" + data;
    }
  
    
}

function shfaqMax() {
    var maksimumi = Math.max(23,13,12,50,45);
    document.getElementById('numrimax').innerHTML = "Maksimumi eshte: "+maksimumi;
}

function shfaqMin() {
    var minimum = Math.min(23,13,12,50,45);
    document.getElementById('numrimin').innerHTML = "Minimumi eshte: "+minimum;
}

function validate(){
    
}

function vleraAbsolute() {
    var nr1 = parseInt(document.getElementById("numrione").value);
    var nr2 = parseInt(document.getElementById("numritwo").value);

    var diferenca = nr1 - nr2;
    if(diferenca < 0){
        diferenca = "Vlera absolute: "+Math.abs(diferenca);
    }
    document.getElementById('vleraabs').innerHTML = "Numri i pare eshte:" + nr1 + " Numri i dyte eshte: " + nr2 + " totali= "+diferenca;
}