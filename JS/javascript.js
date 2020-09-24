//AUTHOR: José Antônio.
//INSTAGRAM: https://www.instagram.com/jose.antonion/
//GITHUB: https://github.com/joseantonion03/
//TÍTULO: PEDRA, PAPEL OU TESOURA - JOGO COM JAVASCRIPT.

//IMAGENS DA INTERNET:
//LINK DA IMAGEM PEDRA, PAPEL, TESOURA: https://photo-ac.com/en/photo/525641/rock-paper-scissors

function resultadoDoParceiro() {
    document.querySelector('.jogadas').classList.remove('none') // mostrar o resultado da jogada que estava com display none
    let parceiro = Math.floor(Math.random() * 3);
    console.log(parceiro)
    if (parceiro == 0) {
        return 'pedra';
    } else if (parceiro == 1) {
        return 'tesoura';
    } else {
        return "papel";
    }
}
let pontuacaoDaRodadaVC = 0;
let pontuacaoDaRodadaAD = 0;

function final() {
    if (pontuacaoDaRodadaAD == 20) {
        document.querySelector('.resultadoVitoria').innerHTML = "VOCÊ PERDEU";
        document.querySelector('.final').classList.add('block');

    } else if (pontuacaoDaRodadaVC == 20) {
        document.querySelector('.resultadoVitoria').innerHTML = "VOCÊ GANHOU";
        document.querySelector('.final').classList.add('block');
    }
}

document.querySelector('.pedra').addEventListener('click', function () {
    let ResuParceiro = resultadoDoParceiro();
    final();
    if (ResuParceiro == 'pedra') {
        document.querySelector('.imgParc').src = "IMG/pedra.png";
        document.querySelector('.resultadodajogada').innerHTML = "Empate";
    } else if (ResuParceiro == 'tesoura') {
        document.querySelector('.imgParc').src = "IMG/tesoura.png";
        document.querySelector('.resultadodajogada').innerHTML = "Você ganhou";
        pontuacaoDaRodadaVC = pontuacaoDaRodadaVC + 1;
        document.querySelector('.ptVC').innerHTML = pontuacaoDaRodadaVC;
    } else if (ResuParceiro == 'papel') {
        document.querySelector('.imgParc').src = "IMG/papel.png";
        document.querySelector('.resultadodajogada').innerHTML = "Você perdeu";
        pontuacaoDaRodadaAD = pontuacaoDaRodadaAD + 1;
        document.querySelector('.ptAD').innerHTML = pontuacaoDaRodadaAD;
    }
    document.querySelector('.imgSua').src = "IMG/pedra.png";
});
document.querySelector('.tesoura').addEventListener('click', function () {
    let ResuParceiro = resultadoDoParceiro();
    final();
    if (ResuParceiro == 'pedra') {
        document.querySelector('.imgParc').src = "IMG/pedra.png";
        document.querySelector('.resultadodajogada').innerHTML = "Você perdeu";
        pontuacaoDaRodadaAD = pontuacaoDaRodadaAD + 1;
        document.querySelector('.ptAD').innerHTML = pontuacaoDaRodadaAD;
    } else if (ResuParceiro == 'tesoura') {
        document.querySelector('.imgParc').src = "IMG/tesoura.png";
        document.querySelector('.resultadodajogada').innerHTML = "Empate";
    } else if (ResuParceiro == 'papel') {
        document.querySelector('.imgParc').src = "IMG/papel.png";
        document.querySelector('.resultadodajogada').innerHTML = "Você ganhou";
        pontuacaoDaRodadaVC = pontuacaoDaRodadaVC + 1;
        document.querySelector('.ptVC').innerHTML = pontuacaoDaRodadaVC;
    }
    document.querySelector('.imgSua').src = "IMG/tesoura.png";
});
document.querySelector('.papel').addEventListener('click', function () {
    let ResuParceiro = resultadoDoParceiro();
    final();
    if (ResuParceiro == 'pedra') {
        document.querySelector('.imgParc').src = "IMG/pedra.png";
        document.querySelector('.resultadodajogada').innerHTML = "Você ganhou";
        pontuacaoDaRodadaVC = pontuacaoDaRodadaVC + 1;
        document.querySelector('.ptVC').innerHTML = pontuacaoDaRodadaVC;
    } else if (ResuParceiro == 'tesoura') {
        document.querySelector('.imgParc').src = "IMG/tesoura.png";
        document.querySelector('.resultadodajogada').innerHTML = "Você perdeu";
        pontuacaoDaRodadaAD = pontuacaoDaRodadaAD + 1;
        document.querySelector('.ptAD').innerHTML = pontuacaoDaRodadaAD;
    } else if (ResuParceiro == 'papel') {
        document.querySelector('.imgParc').src = "IMG/papel.png";
        document.querySelector('.resultadodajogada').innerHTML = "Empate";
    }
    document.querySelector('.imgSua').src = "IMG/papel.png";
});