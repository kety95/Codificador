let texto;
let textoCriptografado;
let textoDescriptografado;

let textarea = document.getElementsByClassName("left__campo-texto")[0];

textarea.addEventListener("input", function() {
    let texto = textarea.value.trim();
    if (texto === '') {
        exibirResultado(null, false);
    }
});

function criptografar(){
    coletarTexto();
    if (texto !== '') {
        textoCriptografado = texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/aimes/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        exibirResultado(textoCriptografado, true);
    }
}

function descriptografar(){
    coletarTexto();
    if (texto !== ''){
        textoDescriptografado = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")  
        .replace(/ufat/g, "u");
        exibirResultado(textoDescriptografado, true);
    }
}

function exibirResultado(texto_resultado, mostrar){
    document.getElementsByClassName("right__resultado")[0].style.display = mostrar? "inline-block" : "none";
    document.getElementsByClassName("right__resultado")[0].innerHTML = texto_resultado;
    visibilidadeBotaoCopiar(mostrar? true : false);
    esconderElementos(mostrar? true : false);
}

function coletarTexto(){
    texto = document.getElementsByClassName("left__campo-texto")[0].value;
}

async function copiar(){
    text = document.getElementsByClassName("right__resultado")[0].textContent;
    await navigator.clipboard.writeText(text);
}

function visibilidadeBotaoCopiar(mostrar){
    document.getElementsByClassName("right__botao-copiar")[0].style.display = mostrar? 'inline-block':'none';
}

function esconderElementos(mostrar){
        document.getElementsByClassName("right__ilustracao")[0].style.display = mostrar? "none": "";
        document.getElementsByClassName("right__mensagens")[0].style.display = mostrar? "none": "";
        document.getElementsByClassName("right__mensagens__mensagem2")[0].style.visibility = mostrar? "hidden": "";
}