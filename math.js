// math.js

// Função para somar dois números
function add(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtract(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiply(a, b) {
    return a * b;
}

// Função para dividir dois números
function divide(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}

// Exportando as funções para uso em outros arquivos
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
