const fruta = ['Molla','Portokall'];
let text = "";
for(let i in fruta){
    text += fruta[i];
}

document.getElementById('arrayfillestare').innerHTML = "["+text+"]";

function showArrayConverted() {
    var arrConverted = fruta.join(' dhe ');
    document.getElementById('result').innerHTML = arrConverted;
}

const elektroshtepiake = [
                            "Fshese me korrent",
                            "Mikrovale",
                            "Televizor",
                            "Lavastovilje",
                            "Hekur"
                        ];

/* ==== detyra 11/03/2022
    Gjeni metoden me te shkurter per te afishuar 
    edhe elementet e fshire edhe te mbeturit
    njekohesisht tek metoda splice
 ==== */

function fshiElemetet(){
    var nr = -3;
    //elementet e fshire
    var finalelements = elektroshtepiake.splice(nr);
    /*
        elektroshtepiake.splice(nr);
        document.getElementById('result').innerHTML = elektroshtepiake.join(' , ');
    */
    document.getElementById('result').innerHTML = finalelements.join(' , ');
}

function mapElement(){
    const numbers = [12,23,34,4];
    const pas_shumezimit = numbers.map(shumezhoMedhjete);
    document.getElementById('result').innerHTML = pas_shumezimit.join(' , ');
}

function shumezhoMedhjete(num){
    return num*10;
}
