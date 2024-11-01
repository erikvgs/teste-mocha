// test/math.test.js

const { add, subtract, multiply, divide } = require('../math');

describe('Funções matemáticas', () => {
    describe('add', () => {
        it('deve somar dois números corretamente', () => {
            const result = add(2, 3);
            if (result !== 5) throw new Error(`Esperado 5, mas obteve ${result}`);
        });
    });

    describe('subtract', () => {
        it('deve subtrair dois números corretamente', () => {
            const result = subtract(5, 2);
            if (result !== 3) throw new Error(`Esperado 3, mas obteve ${result}`);
        });
    });

    describe('multiply', () => {
        it('deve multiplicar dois números corretamente', () => {
            const result = multiply(3, 4);
            if (result !== 12) throw new Error(`Esperado 12, mas obteve ${result}`);
        });
    });

    describe('divide', () => {
        it('deve dividir dois números corretamente', () => {
            const result = divide(10, 2);
            if (result !== 5) throw new Error(`Esperado 5, mas obteve ${result}`);
        });

        it('deve lançar um erro ao dividir por zero', () => {
            try {
                divide(10, 0);
                throw new Error('Erro esperado não foi lançado');
            } catch (error) {
                if (error.message !== 'Divisão por zero não é permitida.') {
                    throw new Error(`Esperado "Divisão por zero não é permitida.", mas obteve "${error.message}"`);
                }
            }
        });
    });
});