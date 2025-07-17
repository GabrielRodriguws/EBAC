const form = document.getElementById('formDescobrir'); // Seleciona o formulário pelo ID para manipular o envio

function validaNumero(numeroMaior, numeroMenor){ // Função que verifica se o primeiro número é maior que o segundo
    return Number(numeroMaior) > Number(numeroMenor); // Converte os valores para número e compara
}

form.addEventListener('submit', function(e){ // Adiciona um "ouvinte" para quando o formulário for enviado
    e.preventDefault(); // Impede que o formulário recarregue a página automaticamente
    
    const campoMaior = document.getElementById('numeroMaior'); // Pega o elemento do input onde deve estar o número maior
    const campoMenor = document.getElementById('numeroMenor'); // Pega o elemento do input onde deve estar o número menor

    const mensagemSucesso = `Parabéns agora você sabe que <b>${campoMaior.value}</b> é maior que <b>${campoMenor.value}</b>`; // Mensagem exibida se a validação for verdadeira
    const mensagemErro = 'O primeiro numero deve ser maior que o segundo, continue tentando!'; // Mensagem exibida se a validação falhar

    let validaForm = false; // Cria a variável de controle que será usada para saber se o formulário está válido
    validaForm = validaNumero(campoMaior.value, campoMenor.value); // Atribui à variável o resultado da validação

    if(validaForm){ // Se o formulário for válido (número maior > número menor)
        const containerMensagemSucesso = document.querySelector('.mensagemSucesso'); // Seleciona o container da mensagem de sucesso
        containerMensagemSucesso.innerHTML = mensagemSucesso; // Insere a mensagem de sucesso no HTML
        containerMensagemSucesso.style.display = 'block'; // Exibe a mensagem de sucesso

        const containerMensagemErro = document.querySelector('.mensagemErro'); // Seleciona o container da mensagem de erro
        containerMensagemErro.style.display = 'none'; // Garante que a mensagem de erro fique escondida

        campoMaior.value = ''; // Limpa o campo de número maior após a verificação
        campoMenor.value = ''; // Limpa o campo de número menor após a verificação
    }else{ // Se o formulário NÃO for válido (número maior não é maior)
        const containerMensagemErro = document.querySelector('.mensagemErro'); // Seleciona o container da mensagem de erro
        containerMensagemErro.innerHTML = mensagemErro // Insere a mensagem de erro no HTML
        containerMensagemErro.style.display = 'block'; // Exibe a mensagem de erro
    }
});