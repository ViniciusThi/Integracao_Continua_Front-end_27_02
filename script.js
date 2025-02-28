// Usuário e senha corretos (em um sistema real, isso estaria no servidor)
const usuarioCorreto = "admin";
const senhaCorreta = "123";

function fazerLogin() {
    // Pegar os valores digitados
    var usuario = document.getElementById("username").value;
    var senha = document.getElementById("password").value;
    var mensagem = document.getElementById("mensagem");

    // Verificar se os campos estão vazios
    if (usuario === "" || senha === "") {
        mensagem.style.color = "red";
        mensagem.innerHTML = "Por favor, preencha todos os campos!";
        return;
    }

    // Verificar se o usuário e senha estão corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        mensagem.style.color = "green";
        mensagem.innerHTML = "Login realizado com sucesso!";
        alert("Bem-vindo " + usuario + "!");
        // Aqui você pode redirecionar para outra página
    } else {
        mensagem.style.color = "red";
        mensagem.innerHTML = "Usuário ou senha incorretos!";
    }
} 