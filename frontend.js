document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:5500/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: username,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                errorMessage.style.color = '#28a745';
                errorMessage.textContent = 'Login realizado com sucesso!';
                
                setTimeout(() => {
                    alert('Redirecionando para a página principal...');
                }, 1000);
            } else {
                throw new Error(data.message || 'Erro ao fazer login');
            }
        } catch (error) {
            errorMessage.style.color = '#d93025';
            errorMessage.textContent = error.message || 'Erro ao conectar com o servidor';
        }
    });
}); 