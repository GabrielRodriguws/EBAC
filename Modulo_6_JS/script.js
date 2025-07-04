const nomes = ['gabriel', 'Luana', 'Eren', 'Vash'];

console.log(nomes);
console.log(nomes[2]);

nomes.push('Laura');

console.log(nomes);

let numeros = 7;
numeros =7;

//condições (else if)
// variavel do else if
/*
let idade = prompt('bem vindo, digite sua idade')

const resultado = idade >= 16 ? 'acesso liberado' : 'idade minima nescessaria de 16 anos'
alert(resultado)
*/
if(nomes == 'felipe'){
    console.log('verdadeiro!')
}
else{
    console.log('tem ninguem com esse nome aqui não')
}

/* operadores logicos
!=  diferente [parecido com == mas aqui verifica se os valores são diferentes]
==  compara valores
>=  maior ou igual
>   maior
<=  menor ou igual
<   menor
&&  multiplas virificações else if (nomes == 7 && nomes ==Eren) [nesse caso ambos precisam serem atestados]
||  multiplas virificações else if (nomes == 7 || nomes ==Eren) [nesse só um precisa ser verdadeiro]
*/

if(numeros <= 7){
    console.log('cabe mais, cabe mais')
}
if(numeros >= 7){
    console.log('agora foi demais')
}
if(numeros == 7){
    console.log('acertou misera')
}

//estrutura de repetição for [a ideia é distribuir uma função ex: for(x nas condições tal){faça tal coisa}]
// possivel usar while(enquanto) [while cria um loop de repetição que pode ser infinito]

for(let i = 0; i < nomes.length;){
    console.log('o nome é: '+ nomes[i])
    i++
}


let anoAtual = 2025

    function descobrirIdade(){
        document.getElementById('resultadoIdade').textContent = '';
            let anoNascimento = document.getElementById('anoNascimento').value;
            let idade = anoAtual - anoNascimento;
            const resultado = idade >= 16 ? 'Vamos seguir com o cadastramento.' : 'Para se cadastrar a idade minima é de 16 anos.'
            document .getElementById('resultadoIdade').textContent = resultado;
    }