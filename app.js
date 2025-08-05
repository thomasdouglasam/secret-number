const rangeMax = 10;
let secretNumber = generateRandonNumber(rangeMax);
let attempts = 1;
// console.log(secretNumber)
function displayText(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text
}

function mainMessage() {
    displayText('h1', 'Jogo do Número Secreto');
    displayText('p', `Escolha um número de 1 a ${rangeMax}`);
}

mainMessage();

function generateRandonNumber(max) {
    return parseInt(Math.random() * max + 1);
}


function cleanInputField() {
    const chute = document.querySelector('input');
    chute.value = ''
}


function verificarChute() {
    let chute = +document.querySelector('input').value;

    if (chute === secretNumber) {
        const attemptWord = attempts > 1 ? 'tentativas' : 'tentativa';
        const winMessage = `Você acertou com ${attempts} ${attemptWord}`;
        displayText('h1', winMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('tentar').setAttribute('disabled', true);
    } else {
        if (chute < secretNumber) {
            displayText('p', 'O número secreto é maior');
        } else {
            displayText('p', 'O número secreto é menor');
        }
        cleanInputField();
        attempts++;
    }
}

function resetGame() {
    mainMessage();
    secretNumber = generateRandonNumber(rangeMax);
    attempts = 1;
    cleanInputField();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('tentar').removeAttribute('disabled');
    console.log(secretNumber)
}