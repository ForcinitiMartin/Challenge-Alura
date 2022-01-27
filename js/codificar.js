var boton = document.querySelector("#btn-encriptar");
boton.addEventListener("click",function(event){
    event.preventDefault();
    var input = document.getElementById("input-texto").value;
    input = input.split("");

    for (var i = 0; i < input.length; i++){
        if (input[i]==="a"){
            input[i] = "a1";
        }
    }
    console.log(input);
});
    





