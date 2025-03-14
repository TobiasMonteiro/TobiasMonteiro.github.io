let nota;


function adicionarNota() {
    nota = document.getElementById("inserirNota").value;
    document.getElementById("notas").innerHTML += `<p>${nota}</p>`
}
