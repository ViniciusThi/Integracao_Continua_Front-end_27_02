function soma(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Os valores devem ser números');
    }
    return num1 + num2;
}

function subtracao(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Os valores devem ser números');
    }
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Os valores devem ser números');
    }
    return num1 * num2;
}

function divisao(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Os valores devem ser números');
    }
    if (num2 === 0) {
        throw new Error('Não é possível dividir por zero');
    }
    return num1 / num2;
}

export { soma, subtracao, multiplicacao, divisao }; 