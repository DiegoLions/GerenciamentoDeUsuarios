const prompt = require('prompt-sync')();
const listarUsuarios = require('./listarUsuarios');
const cadastrarUsuario = require('./cadastrarUsuario');
const atualizarUsuario = require('./atualizarUsuario');
const removerUsuario = require('./removerUsuario');

const usuarios = [];

function mainMenu(usuarios){
console.log(`
    \n<<<GERENCIADOR DE USUÁRIOS>>>
1. Cadastrar Usuário
2. Listar Usuários
3. Atualizar Usuário
4. Remover Usuário
5. Sair do Gerenciador de Usuários
`);
const opcao = prompt('Escolha uma opção: ');
switch (opcao) {
case '1':
cadastrarUsuario(mainMenu, usuarios);
mainMenu()
break;
case '2':
listarUsuarios(mainMenu, usuarios);
break;
case '3':
atualizarUsuario(mainMenu, usuarios);
break;
case '4':
removerUsuario(mainMenu, usuarios);
break;
case '5':
console.log('Saindo do Gerenciador de Usuários. Obrigado por utilizá-lo! Até logo!');
return; 
default:
console.log('Opção inválida!');
}}
mainMenu(usuarios);
