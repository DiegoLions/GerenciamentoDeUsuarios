const prompt = require('prompt-sync')();
function atualizarUsuario(mainMenu, usuarios) {
    if (usuarios.length === 0) {
        console.log('Nenhum usuário cadastrado no gerenciador. Primeiro, adicione um usuário para poder editá-lo.');
        console.log('\nPressione Enter para voltar ao menu...');
        prompt();
        return mainMenu(usuarios);
    }

    console.log('\n=== USUÁRIOS CADASTRADOS NO GERENCIADOR ===');
    usuarios.forEach((usuario, index) => {
        const telefonesnew = usuario.telefones && usuario.telefones.length > 0 ? usuario.telefones.join(', ') : 'N/A';
        console.log(
            `\n${index + 1}. ID: ${usuario.id} | Nome: ${usuario.nome} | Email: ${usuario.email} | Telefone(s): ${telefonesnew}`
        );
    });

    let id;
    let usuarioParaAtualizar;

    while (true) {
        id = prompt('Digite o número do ID do usuário que deseja atualizar: ');
        const numericId = parseInt(id);

        if (isNaN(numericId)) {
            console.log("ID inválido. Por favor, digite um número.");
            continue;
        }
        usuarioParaAtualizar = usuarios.find(c => c.id === numericId);

        if (!usuarioParaAtualizar) {
            console.log(`Não foi encontrado um usuário com o ID ${numericId}. Por favor, tente novamente.`);
        } else {
            break;
        }
    }

    
    while (true) {
        console.log(`\nAtualizando: ${usuarioParaAtualizar.nome} (ID: ${usuarioParaAtualizar.id})`);
        console.log('Qual informação você deseja atualizar?');
        console.log('1. Nome');
        console.log('2. E-mail');
        console.log('3. Telefones');
        console.log('4. Concluir e voltar ao menu');
        const opcao = prompt('Escolha uma opção (1-4): ');

        switch (opcao) {
            case '1':
                const novoNome = prompt('Digite o novo nome do usuário: ');
                usuarioParaAtualizar.nome = novoNome;
                console.log("Nome atualizado com sucesso!");
                break;

            case '2':
                let novoEmail;
                while (true) {
                    novoEmail = prompt('Digite o novo e-mail do usuário: ');
                    const emailEmUso = usuarios.some(
                        user => user.email.toLowerCase() === novoEmail.toLowerCase() && user.id !== usuarioParaAtualizar.id
                    );

                    if (emailEmUso) {
                        console.log('Erro: Este e-mail já está em uso por outro usuário. Por favor, use um e-mail diferente.');
                    } else {
                        usuarioParaAtualizar.email = novoEmail;
                        console.log("E-mail atualizado com sucesso!");
                        break;
                    }
                }
                break;

            case '3':
                console.log('\n--- ATUALIZAÇÃO DE TELEFONES ---');
                console.log('1. Adicionar um novo telefone');
                console.log('2. Remover um telefone existente');
                console.log('3. Cancelar');
                const opcaoTelefone = prompt('Escolha uma opção (1-3): ');

                switch (opcaoTelefone) {
                    case '1':
                        const novoTelefone = prompt('Digite o novo telefone para adicionar: ');
                        if (isNaN(parseInt(novoTelefone)) || novoTelefone.trim() === '') {
                            console.log("Telefone inválido. Nenhum telefone foi adicionado.");
                        } else {
                            usuarioParaAtualizar.telefones.push(novoTelefone);
                            console.log("Telefone adicionado com sucesso!");
                        }
                        break;
                    
                    case '2':
                        if (usuarioParaAtualizar.telefones.length === 0) {
                            console.log('Não há telefones para remover.');
                            break;
                        }
                        console.log('\nTelefones atuais:');
                        usuarioParaAtualizar.telefones.forEach((tel, i) => {
                            console.log(`${i + 1}. ${tel}`);
                        });
                        
                        const indexParaRemover = parseInt(prompt('Digite o número do telefone que deseja remover: ')) - 1;
                        
                        if (indexParaRemover >= 0 && indexParaRemover < usuarioParaAtualizar.telefones.length) {
                            usuarioParaAtualizar.telefones.splice(indexParaRemover, 1);
                            console.log("Telefone removido com sucesso!");
                        } else {
                            console.log('Número inválido. Nenhum telefone foi removido.');
                        }
                        break;
                    
                    case '3':
                        console.log('Operação cancelada.');
                        break;
                        
                    default:
                        console.log('Opção inválida. Nenhuma alteração de telefone foi feita.');
                        break;
                }
                break;
            
            case '4':
                console.log('Atualizações concluídas para o usuário. Voltando ao menu de atualização.');
                break;

            default:
                console.log('Opção inválida. Por favor, escolha uma das opções disponíveis.');
                break;
        }

        if (opcao === '4') {
            break;
        }
    }

    const atualizarNovoUsuario = prompt("Deseja atualizar outro usuário? (s/n) ");
    if (atualizarNovoUsuario.toLowerCase() === 's') {
        return atualizarUsuario(mainMenu, usuarios);
    } else {
        return mainMenu(usuarios);
    }
}

module.exports = atualizarUsuario;

