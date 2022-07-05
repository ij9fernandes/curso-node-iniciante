### TREINAMENTO BÁSICO DE NODE.JS

# Primeiro Contato

1. Criando pela primeira vez a estrutura de NODE;
2. Instalação dos módulos NPM;
3. Verificando a versão do NODE instalada;
4. Criando arquivo 'package.json';
5. Criando arquivos 'index.js' e 'person.js';
6. Executando pela primeira vez o arquivo 'index.js';
7. Instalando biblioteca para reiniciar servidor automaticamente após alterações;
   7.1 - Comando: npm install -g nodemon --save-dev
8. Criando repositório GIT;
9. Criando arquivo 'gitignore' para excluir pasta 'node_modules';
10. Criando script 'start:dev' para inicializar aplicação;
11. Testando funções para manipular pastas e arquivos através do arquivo 'fs.js':
    11.1 - mkdir
    11.2 - writeFile
    11.3 - appendFile
    11.4 - redFile

# Criando um servidor HTTP

1. Utilizando módulo nativo do NODE:

   1.1 - Criando arquivo 'http.js'
   1.2 - Importando o 'HTTP';
   1.3 - Definindo porta virtual;
   1.4 - Definindo uma função com os objetos 'REQ' - Requisição
   'RES' - Resposta
   1.5 - Criando uma condicional para verificar 'Origem da Requisição', e tratando a resposta
   ao cliente:
   1.5.1 - statusCode (ver códigos de statusCode)
   1.6 - Colocando servidor on-line: 'server.listen(port, () => console.log(`Executando na porta ${port}!`));'
   1.7 - Testando no navegador com endereço definido: localhost:8080/home
   1.8 - Testando o envio de respostas através da página 'user' em JSON

2. Utilizando 'express':

   2.1 - Instalando 'express': npm install express
   2.2 - Criando arquivo: 'express.js'
   2.3 - Usando 'Get' (requisição e resposta na mesma linha de código)
   2.4 - Definindo porta;
   2.5 - Definindo 'Listen' (ouvir as conexões);
   2.6 - Rodando 'express' através do comando: 'npm run start:dev'
   2.7 - Criando comandos de respostas do servidor: 'app.get'

3. Conectando aplicação ao db (mongoDB):

   3.1 - Criar e configurar uma conta no MongoDB;
   3.2 - Instalar biblioteca 'mongoose npm';
   3.3 - Criar pastas 'SRC', 'DataBase', e dentro dessa última criar arquivo 'connect.js'
   3.4 - Criar função 'connectToDataBase' como async;
   3.5 - E dentro dessa função criamos o método 'await mongoose.connect()' que retornará
   a string gerada no site do 'MongoDb', está receberá dois parametros:
   1º a string propriamente dita;
   2º uma função que retornará o estado da conexão;
   3.6 - Exportaremos a função para permitir seu uso em 'index.js';
   IMPORTANTE!!!
   3.7 - Colocaremos as credencias de acesso ao DB fora da string de conexão por questões de
   segurança, utilizamos variáveis de ambiente.
   3.8 - Criaremos o arquivo '.env' na pasta base (IREMOS IGNORAR ESTE ARQUIVO PARA O GIT);
   3.9 - Para usar as variáveis de ambiente dentro de '.env' será necessário importar a biblioteca 'dotenv'
   Usaremos o seguinte comando no terminal: 'npm install dotenv'
   3.10 - Faremos um 'require' do 'dotenv' dentro do 'index.js' e chamaremos o config do 'dotenv':
   'dotenv.config();'
   3.11 - Após realizar esses três procedimentos anteriores conseguiremos acessar as variáveis de ambiente a partir do 'connect.js'.
   a) Alteraremos a 'string' para uma 'template string' com crase (`) no inicio e no final da sentença;
   b) Certificaremos de inserir as variáveis correspondentes ao nome de usuário e senha no lugar correto dentro da 'template string';
   3.12 - Chamaremos a função dentro do 'index.js', deve ser chamada após o 'dotenv.config();' pois esse é que nos permite acessar as váriaveis de ambiente.
   3.13 - Agora é so executar o comando npm para rodar aplicação e ver o resultado da conexão com o DB:
   'npm run start:dev'
