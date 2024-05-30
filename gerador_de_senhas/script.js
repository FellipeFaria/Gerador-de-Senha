function gerarSenha() {
    var span_senha = document.getElementById('senha');
    var tamanho = document.getElementById('tamanho').value;

    var senha = '';
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    var alfabeto_maiusc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numeros = '0123456789';
    var simbolos = '!@#$%&*-+=[]{}|;:,.<>?';

    const todosCa = alfabeto + alfabeto_maiusc + numeros + simbolos;


    if (tamanho < 8 || tamanho > 16) {
        alert('Tamanho de Senha invalido.')
    } else {
        for (let i = 0; i < tamanho; i++) {
            const randomIndex = Math.floor(Math.random() * (todosCa.length - 1));
            senha += todosCa[randomIndex];
        }

        span_senha.innerHTML = senha;
    }
}


function copiar() {
    var senha = document.getElementById('senha');
    var texto = senha.textContent;

    if (texto.length > 0) {
        var inputTemporario = document.createElement('textarea');
        inputTemporario.value = texto;
        document.body.appendChild(inputTemporario);

        inputTemporario.select();
        inputTemporario.setSelectionRange(0, 99999);

        document.execCommand('copy');

        document.body.removeChild(inputTemporario);

        alert('Senha copiada para a area de transferência.');
    }
}
