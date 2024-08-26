function filtrarEntrada(event) {
    const tecla = event.key;
    // Permite apenas letras minúsculas e espaços
    if (!/[a-z\s]/.test(tecla)) {
        event.preventDefault();
    alert("Digite apenas letras minúsculas e sem acentos. Não é aceito caracteres especiais!");
    }
}

function criptografar () {
    let textoEntrada = document.getElementById("textoEntrada").value;
    let textoCriptografado = textoEntrada
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("textoSaida").value = textoCriptografado;
    atualizarVisibilidadeResultado();
    
}

function descriptografar() {
    let textoEntrada = document.getElementById("textoEntrada").value;
    let textoDescriptografado = textoEntrada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById("textoSaida").value = textoDescriptografado;
    atualizarVisibilidadeResultado();
}

    function copiarTexto() {
        let textoSaida = document.getElementById("textoSaida");
        textoSaida.select();
        navigator.clipboard.writeText(textoSaida.value) 
            .then(() => alert("Texto copiado para a área de transferência!"))
            .catch(err => console.error("Erro ao copiar texto: ", err));
    }
    
    function atualizarVisibilidadeResultado() {
        let textoSaida = document.getElementById("textoSaida").value;
        let botaoCopiar = document.getElementById("botaoCopiar");
        let mensagemPlaceholder = document.getElementById("mensagemPlaceholder");

        if (textoSaida === "") {
            document.getElementById("textoSaida").style.backgroundImage = "url(/Imagens/Procurando.png)";
            botaoCopiar.style.display = "none";
            mensagemPlaceholder.style.display = "block";
        } else {
            document.getElementById("textoSaida").style.backgroundImage = "none";
            mensagemPlaceholder.style.display = "none";
            botaoCopiar.style.display = "inline-block";
        }
    }

    document.getElementById("textoEntrada").addEventListener("keydown", filtrarEntrada);

    atualizarVisibilidadeResultado();