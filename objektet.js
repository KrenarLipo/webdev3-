const car = {
   /* key => value */
    marka:"Mercedes Benz",
    motorri: {
        lloji:"diesel",
        tipi: "benzine"
    },
    shpejtesiMax: 250,
    vitProdhimi: 2021,
    makineri:"Automatike",
    tedhenatnumerike : function(){
        return this.shpejtesiMax + " " + this.vitProdhimi;
    }
};

function afishoMakine() {
    var test = typeof(car);
    console.log(test);
    console.log(car.makineri);
    document.getElementById("tedhenatmakines").innerHTML = "Makina " + car.marka + " ka motorr " + car.motorri.tipi + 
             " Car details:" + car.tedhenatnumerike();
}

/* ==== Objekti version i thjeshte ==== */
const gjymnazi = {
    emergjymnazi:"Ismail Qemali",
    lagjia: "Njesia Bashkiake 2",
    cikli: "Cikel profesional",
    studentet: {
        emer: "Student 1",
        mbiemer: "Mbiemer 1",
        notamesatare: 8,
        vendindja: "Tirane"
    }
};

function tedhenaGjymnazi(){
    document.getElementById("tedhenagjymnazi").innerHTML = "Gjymnazi: "+gjymnazi.emergjymnazi+"<hr><br>"+"Jeton ne: "
                                                            +gjymnazi.studentet.vendindja+"<br>"+gjymnazi.studentet.emer+"<br>"
                                                            +gjymnazi.studentet.mbiemer + "<br><span>Nota mesatare:</span> "
                                                            +gjymnazi.studentet.notamesatare;
}

const studenti = {
    emer: "Krenar Lipo",
    vendlindja: "Tirane",
    gjymnazi: "Ismail Qemali",
    lenda: "Matematike"
}

document.getElementById('studentipara').innerHTML = "Studenti: "+studenti.emer+"<br>"
                                                +"Pret noten e lendes: "+studenti.lenda;

/* ==== Shtimi i nje key nga perdoruesi ==== */
function notaStudent() {
    var nota = parseInt(document.getElementById("notastudent").value);
    studenti.notaMatematike = nota; //shtojme keys notaMatemaike
    document.getElementById('studentipara').innerHTML = "Studenti: "+studenti.emer+"<br>"
                                                +"Mori noten e lendes "+studenti.lenda
                                                +":"+studenti.notaMatematike;
    console.log(studenti);
}