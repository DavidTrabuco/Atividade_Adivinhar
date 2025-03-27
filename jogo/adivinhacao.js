const gerador = Math.floor(Math.random()* 100) + 1 ;
console.log(gerador);

let palpite = parseInt(document.getElementById('palpite'));

chute = document.getElementById("chute");
dica = document.getElementById("dica");

    

function adivinhacao(){

    // Entrada de dados 
    const palpite = parseInt(document.getElementById("palpite").value);
    
    let tentativas = 0; 
    tentativas++;

    if (palpite < 1 || palpite > 100) {
        document.getElementById('dica').innerText = "Digite um valor entre 1 e 100.";
    } else if (palpite < gerador) {
        document.getElementById('dica').innerText = "Esse valor está baixo.";
    } else if (palpite > gerador) {
        document.getElementById('dica').innerText = "Esse valor está alto.";
    } else if (palpite === gerador){
        document.getElementById('dica').innerText = `Parabéns! Você adivinhou o número ${gerador} .`;
    }
}