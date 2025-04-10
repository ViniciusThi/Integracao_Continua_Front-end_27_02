document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // Credenciais predefinidas
    const validUsername = 'admin';
    const validPassword = '1234';
    
    // Validação dos campos
    if (!username || !password) {
        showMessage('Por favor, preencha todos os campos.', 'error');
        return;
    }
    
    // Verificação das credenciais
    if (username === validUsername && password === validPassword) {
        showMessage('Login realizado com sucesso!', 'success');
        // Redireciona para a página de operações matemáticas após 1 segundo
        setTimeout(() => {
            window.location.href = 'operations.html';
        }, 1000);
    } else {
        showMessage('Usuário ou senha incorretos.', 'error');
    }
});

function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = 'message ' + type;
} 