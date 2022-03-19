function helloWorld() {
    alert("Hello");
}

let hello = async() => "Hello everybody";

function shfaq() {
    hello().then((value) => console.log(value));
}

async function afishoMesazh(){
    let msg = new Promise(function(res) {
        setTimeout(function() { res("Mirese Erdhet!!");}, 3000)
    });
    document.getElementById("mesazhiyne").innerHTML = await msg;
}

function trigger() {
    document.getElementById("ifshehuri").classList.remove("hidden");
    afishoMesazh();
}

/* ==== Ajax function ==== */
function loadDocument(){
    const variable = new XMLHttpRequest();
    variable.onload = function(){
        document.getElementById("mesazhifillestar").innerHTML = this.responseText;
    }
    variable.open("GET","sometext.txt");
    variable.send();
}


