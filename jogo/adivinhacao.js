let tentativas = 0; 

const gerador = Math.floor(Math.random()* 100) + 1 ;

console.log(gerador);

let palpite = parseInt(document.getElementById('palpite'));
document.getElementById("tentativasRestantes").textContent = limiteTentativas;
chute = document.getElementById("chute");
dica = document.getElementById("dica");

    

function adivinhacao(){
    const limiteTentativas = 10;   
    const contador = document.getElementById("tentativasRestantes"); 
    const mensagem = document.getElementById("mensagem"); 
    
    // Entrada de dados 
    const palpite = parseInt(document.getElementById("palpite").value);
    const tentativasRestantes = limiteTentativas - tentativas;
    
     
    tentativas++;

    if (palpite < 1 || palpite > 100) {
        document.getElementById('dica').innerText = "Digite um valor entre 1 e 100.";
    } else if (palpite < gerador) {
        document.getElementById('dica').innerText = "Esse valor está baixo.";
    } else if (palpite > gerador) {
        document.getElementById('dica').innerText = "Esse valor está alto.";
    } else if (palpite === gerador){
        document.getElementById('dica').innerText = `Parabéns! Você adivinhou o número ${gerador} em ${tentativas} tentativas!`;
        
    }
    if (tentativas >= limiteTentativas) {
        document.getElementById("mensagem").textContent = 
            "Game Over! Você esgotou todas as tentativas. O número era " + numeroSecreto;
        document.getElementById("mensagem").style.color = "red";
        
    }

    contador.textContent = tentativasRestantes;
    
    if (tentativasRestantes === 0) {
        mensagem.textContent = "Game Over! Você esgotou todas as tentativas. O número era " + gerador;
        
    }
    return tentativas;
}