var tentativas = 0;
var quantidadeTentativas = 4;
var acertou = "falso";
var posicao = "";
var segredo = parseInt(Math.random() * 11);

function Chutar() {
    var resultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    if (chute >= 0 && chute <= 10) {
        if (tentativas < quantidadeTentativas) {
            tentativas = tentativas + 1;
            resultado.innerHTML =
                "Na sua tentativa " + tentativas + " o seu chute foi: " + chute;
            if (chute == segredo) {
                document.getElementById("valor").value = "";
                resultado.innerHTML = "O seu chute foi: " +
                    chute + " - Parabéns, você acertou!";
                document.getElementById("valor").disabled = true;
                document.getElementById("valor").visible = false;
            } else {
                if (segredo > chute) {
                    posicao = "maior";
                } else {
                    posicao = "menor";
                }
                document.getElementById("valor").value = "";
                resultado.innerHTML = "O seu chute foi: " +
                    chute + " - Que pena, você errou! O número secreto é " + posicao +
                    "! Restam apenas " + (quantidadeTentativas - tentativas) + " tentativas.";
            }
        } else {
            resultado.innerHTML = "Suas tentativas acabaram"
        }
    } else {
        resultado.innerHTML = "Digite um número entre 0 e 10 !!";
    }

}