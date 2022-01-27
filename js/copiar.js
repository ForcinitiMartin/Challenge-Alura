

function copiar(){
    var botonCopiar = document.querySelector("#btn-copy");
    botonCopiar.addEventListener("click",function(){
    var input = document.querySelector("#msg");
    input.select();
    document.execCommand("copy");
    document.querySelector("#btn-copy").value = "¡Copiado!"
    document.querySelector("#btn-copy").style.backgroundColor = "green";
    });
}
