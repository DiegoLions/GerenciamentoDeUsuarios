const prompt = require('prompt-sync')();

function cadastrarUsuario(mainMenu, usuarios) {
    const nome = prompt('Nome do usuário: ');

    let email;
    while (true) {
        email = prompt('Email do usuário: ');
        if (usuarios.some(usuario => usuario.email.toLowerCase() === email.toLowerCase())) {
            console.log("Erro: Já existe um usuário cadastrado com esse e-mail. Por favor, use um e-mail diferente.");
        } else {
            break;
        }
    }
    
    const telefones = [];
    while (true) {
        const telefone = prompt('Telefone (ou digite "pronto" para parar de adicionar): ');
        if (telefone.toLowerCase() === 'pronto') {
            break;
        }
        if (isNaN(telefone) || telefone.trim() === '') {
            console.log("Telefone inválido. Por favor, digite apenas números.");
        } else {
            telefones.push(telefone);
        }
    }
    
    const proximoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;

    const novoUsuario = {
        id: proximoId,
        nome: nome,
        email: email,
        telefones: telefones,
    };
    
    usuarios.push(novoUsuario);
    console.log('Usuário cadastrado com sucesso!');

    const cadastrarNovoUsuario = prompt("Deseja cadastrar um novo usuário? (s/n) ");
    if (cadastrarNovoUsuario.toLowerCase() === 's') {
        return cadastrarUsuario(mainMenu, usuarios);
    } else {
        mainMenu(usuarios);
    }
}

module.exports = cadastrarUsuario;
