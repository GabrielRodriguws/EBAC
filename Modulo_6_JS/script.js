const nomes = ['gabriel', 'Luana', 'Eren', 'Vash'];

console.log(nomes);
console.log(nomes[2]);

nomes.push('Laura');

console.log(nomes);

let numeros = 7;
numeros =7;

//condições (else if)

if(nomes == 'felipe'){
    console.log('verdadeiro!')
}
else if(nomes !== 'felipe'){
    console.log('tem ninguem com esse nome aqui não')
}

/*
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