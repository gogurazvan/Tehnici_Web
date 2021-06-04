function insertQ(){
    var x=[];
    x=x.concat( JSON.parse( localStorage.getItem("q") ) );
    x.push( document.getElementById("question").value );
    localStorage.setItem("q", JSON.stringify(x));
    location.reload();
}
function showQ(){
    var x=JSON.parse( localStorage.getItem("q") );
    xLen = x.length;

    text = "<ul>";
    for (i = 1; i < xLen; i++) {
    text += "<li>" + x[i] + "</li><br>";
    }
    text += "</ol>";
    document.getElementById("faq").innerHTML = text;
}
function resetFAQ(){
    localStorage.removeItem("q");
    location.reload();
}

function hfill(){
    var col = window.getComputedStyle( document.getElementById("heart"), null ).getPropertyValue("fill");
    if(col=="rgb(255, 255, 255)"){
        document.getElementById("heart").style.fill = "red";
        localStorage.setItem("fill", 1);
    }else{
        document.getElementById("heart").style.fill = "white";
        localStorage.removeItem("fill");
    }
}

function searcher(event){
    var x = event.code;
    if(x=="Enter"){
        var y=document.getElementById("cauta").value;
        y=y.toLowerCase();
        if(y.search("gen")!=-1 || y.search("eva")!=-1) 
            window.location.assign("main.html");
    }
}
var index_poze = 0;
function presentation() {
    var i;
    var poze = document.getElementsByClassName("transition");
    for (i = 0; i < poze.length; i++) {
      poze[i].style.display = "none";  
    }
    index_poze++;
    if (index_poze > poze.length) {index_poze = 1}    
    poze[index_poze-1].style.display = "block"; 
    setTimeout(presentation, 5000);
}


function formconfirm(){
    var ver = 0;
    var mess=document.getElementsByTagName("P");
    
    var i;var n=mess.length;
    for(i=n-1; i>=0; i--){
        mess[i].remove();
    }

    var x = document.forms["register"]["user"].value;
    if (x=="") {
        var err = document.createElement("P");
        err.style.color = "red";
        err.innerHTML = "*informatii lipsa in casuta user";
        document.body.appendChild(err);
        ver=1;
    }
    var x = document.forms["register"]["pass"].value;
    if (x=="") {
        var err = document.createElement("P");
        err.style.color = "red";
        err.innerHTML = "*informatii lipsa in casuta parola";
        document.body.appendChild(err);
        ver=1;
    }

    var x = document.forms["register"]["nume"].value;
    if (x=="") {
        var err = document.createElement("P");
        err.style.color = "red";
        err.innerHTML = "*informatii lipsa in casuta nume";
        document.body.appendChild(err);
        ver=1;
    }
    var x = document.forms["register"]["pnume"].value;
    if (x=="") {
        var err = document.createElement("P");
        err.style.color = "red";
        err.innerHTML = "*informatii lipsa in casuta prenume";
        document.body.appendChild(err);
        ver=1;
    }
    if(ver==1) return false;

    localStorage.setItem("user", document.forms["register"]["user"].value);
    localStorage.setItem("pass", document.forms["register"]["pass"].value);
    localStorage.setItem("pnume", document.forms["register"]["pnume"].value);
    localStorage.setItem("nume", document.forms["register"]["nume"].value);
    if(document.getElementById("man").checked == false)
        localStorage.setItem("gender", 0);
    else localStorage.setItem("gender", 1);

    localStorage.setItem("data", document.forms["register"]["date"].value);
}


function login(){
    var ver = 0;
    var mess=document.getElementsByTagName("P");
    
    var i;var n=mess.length;
    for(i=n-1; i>=0; i--){
        mess[i].remove();
    }

    var x = document.forms["log"]["user"].value;
    if (x!=localStorage.getItem("user")) {
        ver=1;
    }
    var x = document.forms["log"]["pass"].value;
    if (x!=localStorage.getItem("pass")) {
        ver=1;
    }
    localStorage.setItem("log_red",ver);
    if(ver==1){ 
        var err = document.createElement("P");
        err.style.color = "red";
        err.innerHTML = "*parola sau user invalide";
        document.body.appendChild(err);
        return false;
    }

}
function detail(){
    var x;
    if(localStorage.getItem("gender")==1) x="Domnul ";
    else  x="Doamna ";
    x+=localStorage.getItem("nume");
    x=x+" "; x=x+localStorage.getItem("pnume");
    x+="<br><br>Varsta: ";
    var dat=new Date();
    var yr=dat.getFullYear();
    dat=localStorage.getItem("data");
    var yr2=dat.slice(0,4);
    x+=yr-yr2;
    document.getElementById("detaliu").innerHTML = x;
}
function unlog(){
    localStorage.setItem("log_red",1);
}

function redirect(){
    if(localStorage.getItem("log_red")==0)
        window.location.assign("detalii.html");
}
function stiliz(x){
    document.getElementById(x).classList.add("rez");
}

function clock(){
    var time = setInterval(clock, 1000);
    var data = new Date();
    document.getElementById("ceas").innerHTML = data.toLocaleTimeString();
}