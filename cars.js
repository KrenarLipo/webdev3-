//let productionyear = 2000;

class Car {
    constructor(mark, productionyear){
        this.mark = mark;
        this.productionyear = productionyear
    }
    /*
     ==== 
    public function gjejVitin() {
    } 
    makinaime->gjejVitin()
    === */
    gjejVitin(x){
        return x - this.productionyear;
    }
}

let date = new Date();
let vitikonkret = date.getFullYear();

function afishoTedhenaMakinash() {
    var nr1 = parseInt(document.getElementById("vitpro").value);
    if(!nr1) {
        document.getElementById("vitpro").className = document.getElementById("vitpro").className + " error";
        alert("Ju lutem jepni nje vit makine!!!");
        return false;
    }else if(nr1 > 2022){
        alert("Makina nuk eshte prodhuar ende");
        return false;
    }
    let makinaime = new Car("Toyota",nr1); 
    document.getElementById("vjetersia").innerHTML ="Makina ime eshte: " + makinaime.gjejVitin(vitikonkret) + " vjecare";
}