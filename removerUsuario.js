const prompt = require('prompt-sync')();

function removerUsuario(mainMenu, usuarios) {
    if (usuarios.length === 0) {
        console.log('Nenhum usuário cadastrado no gerenciador. Primeiro, cadastre um usuário para, só então, se necessário, poder removê-lo.');
        console.log('\nPressione Enter para voltar ao menu...');
        prompt();
        return mainMenu(usuarios);
    }
  
    console.log('\n=== USUÁRIOS DISPONÍVEIS PARA REMOÇÃO ===');
    usuarios.forEach((usuario, index) => {
        const telefonesStr = usuario.telefones && usuario.telefones.length > 0 ? usuario.telefones.join(', ') : 'N/A';
        console.log(
            `\n${index + 1}. ID: ${usuario.id} | Nome: ${usuario.nome} | Email: ${usuario.email} | Telefone(s): ${telefonesStr}`
        );
    });

    let id;
    let indexParaRemover;

    while (true) {
        id = prompt('Digite o número do ID do usuário que deseja remover: ');
        const numericId = parseInt(id);

        if (isNaN(numericId)) {
            console.log("ID inválido. Por favor, digite um número.");
            continue;
        }
        
        indexParaRemover = usuarios.findIndex(c => c.id === numericId);

        if (indexParaRemover === -1) {
            console.log(`Não foi encontrado um usuário com o ID ${numericId}. Por favor, tente novamente.`);
        } else {
            break;
        }
    }

    
    const usuarioParaRemover = usuarios[indexParaRemover];
    const confirmacao = prompt(`Tem certeza que deseja remover o usuário "${usuarioParaRemover.nome}"? (s/n) `);
    
    if (confirmacao.toLowerCase() === 's') {
        usuarios.splice(indexParaRemover, 1);
        console.log("Usuário removido com sucesso!");
    } else {
        console.log("Remoção cancelada.");
    }
    
    const removerNovoUsuario = prompt("Deseja remover outro usuário? (s/n) ");
    if (removerNovoUsuario.toLowerCase() === 's') {
        return removerUsuario(mainMenu, usuarios);
    } else {
        return mainMenu(usuarios);
    }
}

module.exports = removerUsuario;

