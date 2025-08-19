# GerenciamentoDeUsuarios
CRUD de Gerenciamento de Usuários criado para realização de atividade avaliativa

Nome: Diego Enrique da Silva

## Requisitos detalhados para cada etapa/função:
### a)mainMenu
Essa etapa é bastante simples e concentra as opções disponíveis para o usuário interagir com o gerenciador de usuários, sendo elas:
1. Cadastrar Usuário
2. Listar Usuários
3. Atualizar Usuário
4. Remover Usuário
5. Sair do Gerenciador de Usuários
Ao selecionar qualquer uma das opções o sistema conduz até a função específica que contempla a usabilidade desejada. Ex: Selecionando a opção 1, o sistema levará ao cadastro de usuário, pedindo que o usuário preencha informações como Nome, e-mail e telefone.

### b)Cadastrar Usuário
Nessa etapa o sistema armazena as informações fornecidas pelo usuário no array "usuarios". Essas informações incluem nome, telefone e e-mail, além disso o sistema cria, de forma automática um ID para este usuário. Não havendo nenhum usuário cadastrado, o primeiro será cadastrado com o ID 1, e assim sucessivamente, sempre adicionando 1 número a mais para o próximo ID. No caso mencionado anteriormente, um segundo usuário seria cadastrado com o ID 2. Para essa etapa, também é observada a possibilidade do usuário cadastrar múltiplos telefones, sempre devendo atender ao critério de que esse telefone precisa representar um número inteiro. Também é feita uma validação no e-mail. No caso, não é permitido o cadastro de um e-mail que já tenha sido previamente cadastrado. Se isso ocorrer, o sistema não permitirá o cadastro, exibindo uma mensagem de erro.

### c) Listar Usuários
Essa etapa é relativamente simples. Ela exibe todas as informações cadastradas na etapa de cadastro e portanto salvas no array de "usuarios" na tela, ou seja, "nome", "e-mail" e uma lista contendo o(s) telefones cadastrados para aquele usuário, além do ID, que foi gerado automáticamente seguindo a lógica sequencial.

### d)Atualizar Usuário
Essa etapa permite que o usuário atualize informações de usuários previamente cadastrados. Essa atualização pode contemplar todos os dados do usuário ou apenas dados específicos. Além disso na atualização do telefone, é possibilitado ao usuário que atualize, ou seja, edite um telefone específico da lista, ou mesmo, o remova. Também é adicionada uma camada de proteção ao impedir que o usuário atualize o e-mail com um e-mail já existente utilizado por outro usuário. Caso isso venha ocorrer o sistema exibe uma mensagem de erro, não permitindo a atualização deste dado.
Ainda, ao finalizar a atualização, é perguntado se o usuário deseja fazer uma nova atualização de outro usuário.

### e)Remover Usuário
Nessa etapa, a função levará a remoção de um usuário previamente cadastrado. Para tal remoção, o usuário deve especificar o ID correespodente ao usuário que deseja remover. Além disso, a etapa conta com uma camada de proteção, certificando-se de que o usuário realmente deseja remover aquele determinando usuário, evitando assim remoções acidentais. Só após a confirmação de que deseja remover o usuário, é que a remoção ocorrerá de fato. Ainda, ao finalizar a remoção, é perguntado se o usuário deseja fazer uma nova remoção de outro usuário.

### f) Sair do Gerenciador de Usuários
Essa etapa apenas encerra o gerenciador de usuários exibindo uma mensagem de agradecimento pelo uso do gerenciador e retornando pro terminal.






