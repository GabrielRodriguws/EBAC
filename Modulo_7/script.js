const form = document.getElementById('formDeposito');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    let validaForm = false;
    e.preventDefault();

    const nome = document.getElementById('nome');
    const numeroConta = document.getElementById('numeroConta');
    const valor = document.getElementById('valor');
    const descricao = document.getElementById('descricao');
    const mensagemSucesso = `valor de: <b>$${valor.value}</b> depositado para: <b>${nome.value}</b> - conta: ${numeroConta.value}`;
    const mensagemErro = 'Por favor informar nome completo';

    validaForm = validaNome(nome.value)
    if (validaForm){
        const containerMensagemSucesso = document.querySelector('.mensagemSucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        const containerMensagemErro = document.querySelector('.mensagemErro');
        containerMensagemErro.style.display = 'none';


        nome.value = '';
        numeroConta.value = '';
        valor.value = '';
        descricao.value = '';
    } else{
        const containerMensagemErro = document.querySelector('.mensagemErro');
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block';

    }
})