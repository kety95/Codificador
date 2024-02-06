let texto;
let textoCriptografado;
let textoDescriptografado;

function criptografar(){
    trabalharNoTexto();
    if (texto !== '') {
        textoCriptografado = texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/aimes/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        document.getElementsByClassName("right__mensagens__mensagem2")[0].innerHTML = textoCriptografado;
        esconderElementos(true);
        botaoCopiar(true);
    }
}

function descriptografar(){
    trabalharNoTexto();
    if (texto !== ''){
        textoDescriptografado = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")  
        .replace(/ufat/g, "u");
        // botaoCopiar(true);
        var elementoParaSubstituir = document.getElementsByClassName("substituir")[1];
        var novoParagrafo = document.createElement("p");
        novoParagrafo.classList.add("right__mensagens__resultado");
        novoParagrafo.textContent = textoDescriptografado;
        elementoParaSubstituir.parentNode.replaceChild(novoParagrafo, elementoParaSubstituir);

        // document.getElementById("resultado").innerHTML = textoDescriptografado;
        // document.getElementById("resultado").classList.add("right__mensagens__resultado");
        // let mostrar = true;
        // document.getElementsByClassName("right__mensagens__mensagem2")[0].style.visibility = mostrar? "hidden": "";
        esconderElementos(true);
        botaoCopiar(true);
    }
}

function trabalharNoTexto(){
    texto = document.getElementsByClassName("left__campo-texto")[0].value;
}

async function copiar(){
    text = document.getElementsByClassName("right__mensagens__mensagem2")[0].textContent;
    await navigator.clipboard.writeText(text);
}

function botaoCopiar(mostrar){
    document.getElementsByClassName("right__botao-copiar")[0].style.display = mostrar? 'inline-block':'none';
}

function esconderElementos(mostrar){
        document.getElementsByClassName("right__ilustracao")[0].style.visibility = mostrar? "hidden": "";
        document.getElementsByClassName("right__mensagens__mensagem1")[0].style.visibility = mostrar? "hidden": "";
}