let numeros = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19, 20]
const maior = document.getElementById("maior");
const menor = document.getElementById("menor");
const selectElement = document.getElementById('select');
const pElement = document.getElementById('p');


// Gera número aleatorio da array e o apaga da array
function gerar() {
    const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
    document.getElementById("nmr"); nmr.innerHTML = numeroAleatorio;
    console.log(numeroAleatorio)
    let index = numeros.indexOf(numeroAleatorio);
    if (index > -1){
        numeros.splice(index, 1);
    }
}
function reinciarJogo(){ 
    if(numeros >= 0){
      alert("Parabéns! Você ganhou!");
    }
}
// Pegar o select maior ou menor
// Verifcar se é maior ou menor

// conferir se continua ou para
