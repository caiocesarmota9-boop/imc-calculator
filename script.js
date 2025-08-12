function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.textContent = "Preencha os campos corretamente.";
        return;
    }

    const imc = (peso / (altura ** 2)).toFixed(2);
    let classificacao = "";

    if (imc < 18,5) classificacao = "Abaixo do peso";
    else if (imc < 24,9) classificacao = "Peso normal";
    else if (imc < 29,9) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    resultado.textContent = `IMC: ${imc} - ${classificacao}`;
}
