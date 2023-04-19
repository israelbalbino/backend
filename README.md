Tecnologias usadas:
nodeJS/express/postgresSql

Para executar o projeto localmente, siga os passos abaixo:
Clone o repositório para sua máquina local.
Navegue até a pasta do projeto e instale as dependências usando npm install ou yarn.
Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias para a configuração do banco de dados e outras configurações. Por exemplo:
bash
DATABASE_URL="postgresql://postgres:admin@localhost:5432/tasklist?schema=public"

# Secret JWT https://www.md5hashgenerator.com/

JWT_SECRET=9d4e01674fe433e0aee3da5ea15d50dc
...
Inicie o servidor de desenvolvimento abrindo no cmd e navegando na pasta raiz do projeto e use npm run start:dev ou yarn start:dev.

Se encontrar problemas ao executar o projeto, verifique se todas as dependências foram instaladas 
corretamente e se as variáveis de ambiente estão configuradas corretamente.
Você também pode entrar em contato conosco para obter suporte ou fazer perguntas.
