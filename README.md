API - Orientador de Carreira 🤖📄
Este é o projeto back-end para o serviço de Orientador de Carreira.

Esta API recebe informações de um usuário (habilidades, interesses, etc.), salva esses dados em um banco de dados, consulta o Google Gemini para uma análise de carreira detalhada e, por fim, gera um relatório profissional em PDF e força o download no navegador do cliente.

✨ Recursos Principais
Endpoint Único: Uma rota principal /api/analise que orquestra todo o fluxo.

Persistência de Dados: Salva cada análise em um banco de dados SQLite.

Inteligência Artificial: Integra-se com a API do Google Gemini para gerar a análise de carreira.

Geração de PDF: Utiliza Puppeteer e Marked para converter a resposta da IA (em Markdown) em um PDF com CSS personalizado.

Download Direto: A API não retorna um link, mas sim força o download (res.download) do arquivo PDF com um nome amigável (ex: Relatorio_Carreira_Usuario.pdf).

🔧 Tecnologias Utilizadas
Back-end: Node.js, Express.js

Geração de PDF: Puppeteer (para renderizar o HTML) e Marked (para converter Markdown em HTML)

Banco de Dados: SQLite3

IA: Google Gemini (via geminiService.js)

Utilitários: cors, dotenv

⚙️ Instalação e Configuração
Siga estes passos para rodar o projeto localmente.

1. Pré-requisitos
Node.js (versão 18 ou superior)

NPM

2. Clone o Repositório
Bash

git clone https://seu-repositorio-aqui.git
cd nome-da-pasta
3. Instale as Dependências
Bash

npm install
4. Variáveis de Ambiente
Crie um arquivo chamado .env na raiz do projeto e adicione sua chave da API do Gemini:

Ini, TOML

# .env
GEMINI_API_KEY=SUA_CHAVE_API_SECRETA_DO_GEMINI_AQUI
🚀 Executando o Projeto
O servidor (no seu server.js) já está configurado para inicializar o banco de dados (setupDb()) antes de começar a ouvir na porta.

Para iniciar o servidor, rode:

Bash

npm start
# ou
node server.js
O servidor estará rodando em http://localhost:3001.

🔌 Endpoints da API
O projeto possui um endpoint principal.

POST /api/analise
Recebe os dados do usuário, executa todo o processo (banco de dados, IA, PDF) e força o download do relatório.

Request Body (Exemplo):

JSON

{
  "nome": "João Vitor Madruga",
  "habilidades": "React, Node.js, SQL, Liderança",
  "interesses": "IA, tecnologia, games, gerenciamento de projetos",
  "experiencia": "Júnior"
}
Resposta de Sucesso (200 OK):

Content-Type: application/pdf

Content-Disposition: attachment; filename="Relatorio_Carreira_Joao_Vitor_Madruga.pdf"

O corpo da resposta é o próprio arquivo PDF.

Resposta de Erro (500 Internal Server Error):

JSON

{
  "message": "Erro interno no servidor."
}