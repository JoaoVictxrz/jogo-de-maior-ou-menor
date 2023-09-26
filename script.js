let numeros = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19, 20]
let numeroAleatorio;
let proximoNumero;
const maiorOuMenor = document.getElementById("maiorOuMenor");
const numerosAnteriores = document.getElementById('numerosAnteriores');
const resultado = document.getElementById('resultado');
const pElement = document.getElementById('p');
let maiorNumero = proximoNumero > numeroAleatorio;
let menorNumero = proximoNumero < numeroAleatorio;

// Gera número aleatorio da array e o apaga da array
function gerar() {
    const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
    document.getElementById("nmr"); nmr.innerHTML = numeroAleatorio;
    console.log(numeroAleatorio)
    let index = numeros.indexOf(numeroAleatorio);
    if (index > -1){
        numeros.splice(index, 1);
    }
    document.addEventListener('click', numeroInicial)
 }

 function numeroInicial(){
    const proximoNumero = numeros[Math.floor(Math.random() *numeros.length)];
    console.log(proximoNumero);
    let index = numeros.indexOf(proximoNumero);
    if (index > -1){
        numeros.splice(index, 1);
    }
}

 function maior(){
    if (proximoNumero >= numeroAleatorio) {
        gerar();
   } else (alert('Você perdeu!'))
   }
 function menor(){
    if (proximoNumero <= numeroAleatorio) {
        gerar();
   } else (alert('Você perdeu!'))
 }
