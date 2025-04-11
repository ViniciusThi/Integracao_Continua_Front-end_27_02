Vinicius,Micaella,Mikelly,Lidiane,Luan
# Sistema de Login e Operações Matemáticas

Este projeto consiste em um sistema de login simples com redirecionamento para uma página de operações matemáticas. O sistema foi desenvolvido utilizando HTML, CSS e JavaScript.

## Funcionalidades

### Sistema de Login
- Tela de login com campos para usuário e senha
- Validação de campos obrigatórios
- Credenciais predefinidas (usuário: admin, senha: 1234)
- Mensagens de feedback para o usuário
- Link para "Esqueci minha senha" (não funcional)

### Operações Matemáticas
Após o login bem-sucedido, o usuário é redirecionado para uma página com as seguintes operações matemáticas:
- Soma
- Subtração
- Multiplicação
- Divisão

Cada operação possui:
- Campos para inserção de dois números
- Validação de entrada
- Exibição do resultado
- Tratamento de erros (ex: divisão por zero)
- Link para retornar à página de operações

## Estrutura do Projeto

```
.
├── index.html              # Página de login
├── operations.html         # Página de operações matemáticas
├── soma.html              # Página da operação de soma
├── subtracao.html         # Página da operação de subtração
├── multiplicacao.html     # Página da operação de multiplicação
├── divisao.html           # Página da operação de divisão
├── styles.css             # Estilos CSS globais
├── package.json           # Configuração do projeto e dependências
└── js/
    ├── login.js           # Lógica do login
    ├── operacoes.js       # Funções matemáticas
    ├── soma.js            # Lógica da soma
    ├── subtracao.js       # Lógica da subtração
    ├── multiplicacao.js   # Lógica da multiplicação
    └── divisao.js         # Lógica da divisão
└── tests/
    └── operacoes.test.js  # Testes unitários
```

## Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Insira as credenciais:
   - Usuário: admin
   - Senha: 1234
3. Após o login bem-sucedido, você será redirecionado para a página de operações
4. Selecione a operação desejada
5. Insira os números e clique em "Calcular"
6. O resultado será exibido na tela

## Testes Unitários

O projeto utiliza o Jest para testes unitários. Os testes cobrem todas as operações matemáticas e verificam:

- Operações com números positivos
- Operações com números negativos
- Operações com números positivos e negativos
- Validação de divisão por zero
- Validação de tipos de entrada

### Como Executar os Testes

1. Instale as dependências:
   ```
   npm install
   ```

2. Execute os testes:
   ```
   npm test
   ```

## Validações Implementadas

- Campos de login obrigatórios
- Validação de credenciais
- Campos numéricos obrigatórios nas operações
- Tratamento de divisão por zero
- Feedback visual para sucesso e erro

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Jest (para testes unitários) 
