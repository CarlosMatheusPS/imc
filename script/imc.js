const calcular = document.getElementById("calcular");

function imc() {

    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome === '' || altura === '' || peso === '') {
        resultado.textContent = `[ERRO] Preencha todos os dados!`
    } else {
        const imc = (peso / (altura * altura));
        let classsificacao = '';
        if (imc < 18.5) {
            classsificacao = 'abaixo do peso.'
        } else if (imc < 25) {
            classsificacao = 'no peso normal.'
        } else if (imc < 30) {
            classsificacao = 'com sobrepeso.'
        } else if (imc < 35) {
            classsificacao = 'com Obesidade Grau I.'
        } else if (imc < 40) {
            classsificacao = 'com Obresidade Grau II.'
        } else {
            classsificacao = 'com Obesidade Grau III.'
        }
        resultado.textContent = `${nome}, seu imc é: ${Math.round(imc)} e você está ${classsificacao}`
    }
}