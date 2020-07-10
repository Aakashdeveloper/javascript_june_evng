/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = parseFloat(a)+parseFloat(b);
    document.getElementById('output').innerText=out

}

function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = parseFloat(a)-parseFloat(b);
    document.getElementById('output').innerText=out

}*/


function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(opt=="Add"){
        out = parseFloat(a)+parseFloat(b);
    }else{
        out = parseFloat(a)-parseFloat(b);
    }
    document.getElementById('output').innerText=out
}