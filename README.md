# 🚀 API - Orientador de Carreira 🤖📄

> Este é o **projeto back-end** do serviço de **Orientador de Carreira**, responsável por gerar relatórios personalizados com base em habilidades e interesses do usuário, utilizando inteligência artificial e geração dinâmica de PDF.

---

## ✨ Recursos Principais

✅ **Endpoint Único:** Rota `/api/analise` que orquestra todo o fluxo.  
💾 **Persistência de Dados:** Armazena análises no banco de dados **SQLite**.  
🧠 **Inteligência Artificial:** Integração com a **API do Google Gemini** para gerar análises detalhadas.  
📝 **Geração de PDF:** Usa **Puppeteer** e **Marked** para converter Markdown da IA em PDF estilizado.  
📥 **Download Direto:** Força o download automático do relatório no navegador (`res.download`).

---

## 🧰 Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|--------------|
| **Back-end** | Node.js, Express.js |
| **Geração de PDF** | Puppeteer, Marked |
| **Banco de Dados** | SQLite3 |
| **IA** | Google Gemini (via `geminiService.js`) |
| **Utilitários** | dotenv, cors |

---

## ⚙️ Instalação e Configuração

### 🔹 1. Pré-requisitos
- Node.js **v18+**
- NPM

### 🔹 2. Clone o Repositório
```bash
git clone https://seu-repositorio-aqui.git
cd nome-da-pasta
🔹 3. Instale as Dependências
bash
Copiar código
npm install
🔹 4. Variáveis de Ambiente
Crie um arquivo chamado .env na raiz do projeto e adicione sua chave da API do Gemini:

ini
Copiar código
# .env
GEMINI_API_KEY=SUA_CHAVE_API_SECRETA_DO_GEMINI_AQUI
🚀 Executando o Projeto
O servidor inicializa o banco de dados (setupDb()) automaticamente antes de começar a escutar na porta configurada.

bash
Copiar código
npm start
# ou
node server.js
Servidor disponível em:
👉 http://localhost:3001

🔌 Endpoints da API
POST /api/analise
Recebe os dados do usuário, executa o fluxo completo (armazenamento, IA, PDF) e força o download do relatório gerado.

🧾 Exemplo de Request Body:
json
Copiar código
{
  "nome": "João Vitor Madruga",
  "habilidades": "React, Node.js, SQL, Liderança",
  "interesses": "IA, tecnologia, games, gerenciamento de projetos",
  "experiencia": "Júnior"
}
✅ Resposta de Sucesso:
http
Copiar código
Status: 200 OK
Content-Type: application/pdf
Content-Disposition: attachment; filename="Relatorio_Carreira_Joao_Vitor_Madruga.pdf"
O corpo da resposta é o arquivo PDF.

❌ Resposta de Erro:
json
Copiar código
{
  "message": "Erro interno no servidor."
}
🧑‍💻 Estrutura do Projeto
pgsql
Copiar código
📁 backend-projeto
 ┣ 📜 server.js
 ┣ 📜 pdfService.js
 ┣ 📜 geminiService.js
 ┣ 📜 database.js
 ┣ 📜 package.json
 ┗ 📜 .env
🧠 Sobre o Projeto
Este projeto foi desenvolvido com foco em automatizar a orientação de carreira através de IA.
A aplicação traduz informações simples do usuário em insights profissionais personalizados, apresentando tudo em um relatório PDF elegante e pronto para download.

💬 Contato
👨‍💻 Desenvolvido por: João Vitor Madruga Marques
