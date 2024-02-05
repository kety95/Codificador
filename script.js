let textoParaCriptografar;
let textoCriptografado;

function criptografar(){
    textoParaCriptografar = document.getElementsByClassName("left__campo-texto")[0].value;
        if (textoParaCriptografar !== '') {
            console.log(textoParaCriptografar);
            textoCriptografado = textoParaCriptografar
            .replace("/a/g", "ai")
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
            esconderElementos(true);
            document.getElementsByClassName("right__mensagens__mensagem2")[0].innerHTML = textoCriptografado;
            botaoCopiar(true);
        }
}

function descriptografar(){
    
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