import { divisao } from './operacoes.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('divisaoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const resultadoDiv = document.getElementById('resultado');
            
            console.log('Valores inseridos:', num1, num2);
            
            try {
                const resultado = divisao(num1, num2);
                console.log('Resultado:', resultado);
                resultadoDiv.textContent = `Resultado: ${resultado}`;
                resultadoDiv.style.backgroundColor = '#e8f5e9';
                resultadoDiv.style.color = '#2e7d32';
            } catch (error) {
                console.error('Erro:', error.message);
                resultadoDiv.textContent = error.message;
                resultadoDiv.style.backgroundColor = '#ffebee';
                resultadoDiv.style.color = '#c62828';
            }
        });
    } else {
        console.error('Formulário de divisão não encontrado');
    }
}); 