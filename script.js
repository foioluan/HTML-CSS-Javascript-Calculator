function insert(n){
    let num = document.getElementById("display").innerHTML;
    if(num.toString().length<19)
        document.getElementById("display").innerHTML = num + n;
    else
        alert("Esse é o máximo de caracteres suportados!");
}

function clean(){
    document.getElementById("display").innerHTML = "";
}

function back(){
    let display = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = display.substring(0, display.length - 1);
}

function calc(){
    let display = document.getElementById("display").innerHTML;
    if(display){
        document.getElementById("display").innerHTML = eval(display).toFixed(1);
    }
}
