
/*Inicio do Script JS*/

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons');

/*Função para manipular a entrada*/
function handleInput(value) {
    const currentText = display.textContent

    if (value === 'AC') {
        display.textContent = '0';
    } else if (value === '<=') {
        if (currentText.length === 1 || currentText === 'Error') {
            display.textContent = '0';
        } else {
            display.textContent = currentText.slice(0, -1);
        }
    } else if (value === '=') {
        try {
            let result = eval(currentText.replace('Erro','0'));
            display.textContent = result;
        } catch (error) {
            display.textContent = 'Error';
        }
    } //numeros e operadores
    else {
        if (currentText === '0' && value !== '.' || currentText === 'Error')
            display.textContent = value;
        else
            display.textContent += value;
    }
}



const input = document.getElementById('input');
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', function() {
    const valorDigitado = input.ariaValueMax.trim();
    if (valorDigitado === '') {
        resultado.textContent = 'por favor, insira um valor.';
        resultado.style.color = 'red';
        return;

    }
    resultado.textContent = `Você digitou: ${valorDigitado}`;
    resultado.style.color = 'green';

});

input.addEventListener('input', function() {
    if (e.key === 'Enter') {
    botao.click();
    }

});



/*DOM - Document Object Model
O DOM é uma interface de programação para documentos HTML e XML. Ele representa a página para que os programas possam alterar a estrutura do documento, estilo e conteúdo. O DOM fornece uma representação estruturada do documento como uma árvore de nós e objetos, permitindo que linguagens de programação manipulem a estrutura, estilo e conteúdo do documento.*/

