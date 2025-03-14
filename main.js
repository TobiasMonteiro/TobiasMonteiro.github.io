let nota;

function adicionarNota() {
    nota = document.getElementById("inserirNota").value;
    document.getElementById("notas").innerHTML += `<p class="${notaClass}">${nota}</p>`
}
