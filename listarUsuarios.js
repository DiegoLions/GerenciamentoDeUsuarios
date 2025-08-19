const prompt = require('prompt-sync')();

function listarUsuarios(mainMenu, usuarios) {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
    } else {
        console.log('\n=== USUÁRIOS CADASTRADOS NO GERENCIADOR ===');
        
        usuarios.forEach((usuario, index) => {
            console.log(`\n${index + 1}. ID: ${usuario.id} | Nome: ${usuario.nome} | Email: ${usuario.email}`);
            
            if (usuario.telefones && usuario.telefones.length > 0) {
                console.log(`   Telefone(s):`);
                usuario.telefones.forEach(telefone => {
                    console.log(`   - ${telefone}`);
                });
            } else {
                console.log(`   Telefone(s): N/A`);
            }
        });
    }
    console.log("\nPressione Enter para voltar ao menu principal...");
    prompt('');
    
    mainMenu(usuarios);
}

module.exports = listarUsuarios;

