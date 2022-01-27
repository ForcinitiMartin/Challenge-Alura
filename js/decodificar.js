
function desencriptar(){
    var boton = document.querySelector("#btn-desencriptar");
    boton.addEventListener("click",function(event){
        event.preventDefault();
        var input = document.getElementById("input-texto").value;
        var re = /a/g;
        input = input.replaceAll("enter","e");
        input = input.replaceAll("imes","i");
        input = input.replaceAll("ai","a");
        input = input.replaceAll("ober","o");
        input = input.replaceAll("ufat","u");
        document.getElementById("msg").value = input;
        document.getElementById("input-texto").value = "";
    });
}

   
