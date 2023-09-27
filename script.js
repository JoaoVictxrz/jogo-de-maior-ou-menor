let numeros = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19, 20]
let numeroAleatorio;
let proximoNumero;
const maiorOuMenor = document.getElementById("maiorOuMenor");
const numerosAnteriores = document.getElementById('numerosAnteriores');
const resultado = document.getElementById('resultado');
const pElement = document.getElementById('p');

// Gera número aleatorio da array e o apaga da array
function gerar() {
    numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
    document.getElementById("nmr"); nmr.innerHTML = numeroAleatorio;
    console.log(numeroAleatorio)
    let index = numeros.indexOf(numeroAleatorio);
    if (index > -1){
        numeros.splice(index, 1);
    }
    document.addEventListener('click', numeroInicial)
 }

 function numeroInicial(){
    proximoNumero = numeros[Math.floor(Math.random() *numeros.length)];
    console.log(proximoNumero);
    let index = numeros.indexOf(proximoNumero);
    if (index > -1){
        numeros.splice(index, 1);
    }
}
// Se o numero for maior continua, se não alert que perdeu.
 function maior(){
    if (proximoNumero > numeroAleatorio) {
        gerar();
   } else if (proximoNumero<numeroAleatorio)
   {alert('Você perdeu!')
   window.location.reload(true);
 }   
}
// Se o numero for menor continua, se não alert que perdeu.
 function menor(){
    if (proximoNumero < numeroAleatorio) {
        gerar();
   } else  if (proximoNumero > numeroAleatorio){
    alert('Você perdeu!')
    window.location.reload(true);}
 }

function verify(){
    if(numeros.length = 0){
        window.Location.reload(true)
    }
}
