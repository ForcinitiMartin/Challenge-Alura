
function encriptar(){
var boton = document.querySelector("#btn-encriptar");
boton.addEventListener("click",function(event){
    event.preventDefault();
    var input = document.getElementById("input-texto").value;
    var re = /a/g;
        input = input.replaceAll("e","enter");
        input = input.replaceAll("i","imes");
        input = input.replaceAll("a","ai");
        input = input.replaceAll("o","ober");
        input = input.replaceAll("u","ufat");
        document.getElementById("msg").value = input;
        document.getElementById("input-texto").value = "";
    });
}
   



