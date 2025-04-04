let tentativas = 0;
const gerador = Math.floor(Math.random() * 100) + 1;
console.log(gerador);

function adivinhacao() {
    const limiteTentativas = 10;
    const contador = document.getElementById("tentativasRestantes");
    const mensagem = document.getElementById("mensagem");
    const botao = document.querySelector("button"); 
    
    
    if (tentativas >= limiteTentativas) {
        return;
    }

    const palpite = parseInt(document.getElementById("palpite").value);
    
    tentativas++;
    const tentativasRestantes = limiteTentativas - tentativas;
    contador.textContent = tentativasRestantes >= 0 ? tentativasRestantes : 0;

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById('dica').innerText = "Digite um valor entre 1 e 100.";
    } else if (palpite < gerador) {
        document.getElementById('dica').innerText = "Esse valor está baixo.";
    } else if (palpite > gerador) {
        document.getElementById('dica').innerText = "Esse valor está alto.";
    } else if (palpite === gerador) {
        document.getElementById('dica').innerText = `Parabéns! Você adivinhou o número ${gerador} em ${tentativas} tentativas!`;
        mensagem.textContent = "Você venceu!";
        botao.disabled = true; 
    }

    if (tentativas >= limiteTentativas) {
        mensagem.textContent = `Game Over! Você esgotou todas as tentativas. O número era ${gerador}`;
        
        contador.textContent = 0;
        botao.disabled = true;
    }
}

