//document.getElementbyTagName => p, div, h1, img
//document.getElementbyClassName => kapen klasat e elementeve te ndryshem
// document.write()
//document.querySelectorAll
document.write('<h2>hhhhh</h2>');

function ngjyrosTekst(){
    const mycollection = document.getElementsByTagName('p');
    for(let i = 0; i<mycollection.length; i++){
        mycollection[i].style.color ="#f00";
    }
}

function ngjyrosTekstPerseri(){
    const mycollection2 = document.querySelectorAll('span');
    for(let i = 0; i<mycollection2.length; i++){
        mycollection2[i].style.color ="#00f";
    }
}

/* ==== funksion per validim ==== */
function validate(){
    var name = document.f1.name.value;
    var password = document.f1.password.value;
    var status = false;

    if(name.length<1){
        document.getElementById("nameloc").innerHTML = "Vendosni emrin tuaj";
        status = false;
    }else{
        status = true;
    }
    if(password.length<6){
        document.getElementById("passwordloc").innerHTML = "Passwordi jo me pak se 6 karaktere";
        status = false;
    }else{
        status = true;
    }

    return status;

}

/* ==== funksion per animation ==== */
function moveRectangles(){
    let id = null;
    const elem = document.getElementById("animate");
    const elem2 = document.getElementById("moves");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame,5);
    function frame() {
        if(pos==400){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + "px"; 
            elem.style.left = pos + "px"; 
            elem2.style.left = pos + "px";
            }
        }
}

/* ==== funksioni per scroll ==== */
window.onscroll = function(){checkScrolling()};

/* ==== funksioni kur shtypim x ==== */
window.onbeforeunload = function() {onPageClose()}

function checkScrolling() {
    if (document.documentElement.scrollTop > 70) {
        var ngjyrosP = document.getElementById('tektiperndryshim');
        ngjyrosP.style.color="#f00";
    }else {
        ngjyrosP.style.color="#00f";
    }
}

/* ==== Metoda 2 ==== */
function onPageClose(){
   document.getElementById('popup').style.display = "block";
}

//document.addEventListener("mouseout",onPageClose);

/* ==== funksioni er popuin === */
// function onMouseExit(event){
//     if(event.clientY < 50){
//         document.removeEventListener("mouseout", onMouseExit);
//         document.getElementById('popup').style.display = "block";
//     }  
// }

// document.addEventListener("mouseout",onMouseExit);

function displayColor(){
    var ngjyra = document.getElementById("ngjyrosjeteksti").value;
    var result = document.getElementById('afishimlive');
    result.style.color = "#"+ngjyra+'';
    result.innerHTML = ngjyra;
}
