const { soma, subtracao, multiplicacao, divisao } = require('../js/operacoes');

describe('Operação de Soma', () => {
    test('deve somar dois números positivos corretamente', () => {
        expect(soma(2, 3)).toBe(5);
        expect(soma(10, 20)).toBe(30);
    });

    test('deve somar números negativos corretamente', () => {
        expect(soma(-2, -3)).toBe(-5);
        expect(soma(-10, -20)).toBe(-30);
    });

    test('deve somar um número positivo e um negativo corretamente', () => {
        expect(soma(5, -3)).toBe(2);
        expect(soma(-10, 20)).toBe(10);
    });

    test('deve lançar erro quando os valores não são números', () => {
        expect(() => soma('2', 3)).toThrow('Os valores devem ser números');
        expect(() => soma(2, '3')).toThrow('Os valores devem ser números');
    });
});

describe('Operação de Subtração', () => {
    test('deve subtrair dois números positivos corretamente', () => {
        expect(subtracao(5, 3)).toBe(2);
        expect(subtracao(20, 10)).toBe(10);
    });

    test('deve subtrair números negativos corretamente', () => {
        expect(subtracao(-2, -3)).toBe(1);
        expect(subtracao(-10, -20)).toBe(10);
    });

    test('deve subtrair um número positivo e um negativo corretamente', () => {
        expect(subtracao(5, -3)).toBe(8);
        expect(subtracao(-10, 20)).toBe(-30);
    });

    test('deve lançar erro quando os valores não são números', () => {
        expect(() => subtracao('2', 3)).toThrow('Os valores devem ser números');
        expect(() => subtracao(2, '3')).toThrow('Os valores devem ser números');
    });
});

describe('Operação de Multiplicação', () => {
    test('deve multiplicar dois números positivos corretamente', () => {
        expect(multiplicacao(2, 3)).toBe(6);
        expect(multiplicacao(10, 20)).toBe(200);
    });

    test('deve multiplicar números negativos corretamente', () => {
        expect(multiplicacao(-2, -3)).toBe(6);
        expect(multiplicacao(-10, -20)).toBe(200);
    });

    test('deve multiplicar um número positivo e um negativo corretamente', () => {
        expect(multiplicacao(5, -3)).toBe(-15);
        expect(multiplicacao(-10, 20)).toBe(-200);
    });

    test('deve lançar erro quando os valores não são números', () => {
        expect(() => multiplicacao('2', 3)).toThrow('Os valores devem ser números');
        expect(() => multiplicacao(2, '3')).toThrow('Os valores devem ser números');
    });
});

describe('Operação de Divisão', () => {
    test('deve dividir dois números positivos corretamente', () => {
        expect(divisao(6, 2)).toBe(3);
        expect(divisao(20, 5)).toBe(4);
    });

    test('deve dividir números negativos corretamente', () => {
        expect(divisao(-6, -2)).toBe(3);
        expect(divisao(-20, -5)).toBe(4);
    });

    test('deve dividir um número positivo e um negativo corretamente', () => {
        expect(divisao(6, -2)).toBe(-3);
        expect(divisao(-20, 5)).toBe(-4);
    });

    test('deve lançar erro quando divide por zero', () => {
        expect(() => divisao(5, 0)).toThrow('Não é possível dividir por zero');
    });

    test('deve lançar erro quando os valores não são números', () => {
        expect(() => divisao('2', 3)).toThrow('Os valores devem ser números');
        expect(() => divisao(2, '3')).toThrow('Os valores devem ser números');
    });
}); 