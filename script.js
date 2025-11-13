
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
//EventListener usado para tratar o click do mouse, fora ou dentro
//dos botões
buttonsContainer.addEventListener('click',(event) => {
    if(event.target.matches('button')) {
        return;
}
    const value = event.target.dataset.value;
    handleInput(value);
}
);

window.addEventListener('keydown', (event) => {
    const key = event.key;
    let value = null;

    if (key >= '0' && key <= '9') {
        value = key;
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        value = '.';
    } else if (key === 'Enter' || key === '=') {
        value = '=';
    } else if (key === 'Escape') {
        value = 'C';
    } else if (key === 'Backspace') {
        value = '<=';
    }
});
