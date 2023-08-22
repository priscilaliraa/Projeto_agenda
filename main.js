const form = document.getElementById('form-agenda');
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputNumeroTelefone = document.getElementById('numeroTelefone');

    if (contatos.includes(inputNomeContato.value)) {
        alert (`O telefone de ${inputNomeContato.value} já existe em sua agenda!`);
    } else {

    contatos.push(inputNomeContato.value);
    telefone.push (parseFloat(inputNumeroTelefone.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }


    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
