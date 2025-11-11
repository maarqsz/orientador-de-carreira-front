import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// CORREÇÃO: Lê a URL da Vercel (VITE_API_URL) ou usa localhost se estiver em modo de desenvolvimento
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/analise';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    habilidades: '',
    interesses: '',
    experiencia: 'Júnior',
  });

  const [pdfUrl, setPdfUrl] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setPdfUrl('');
    setErro('');

    try {
      // O 'axios.post' agora usa a URL correta (da linha 5)
      const response = await axios.post(API_URL, formData);
      if (response.data.pdfUrl) {
        setPdfUrl(response.data.pdfUrl);
      } else {
        setErro('Ocorreu um erro ao gerar o PDF.');
      }
    } catch (error) {
      console.error('Erro ao chamar a API:', error);  
      // O erro agora deve ser mais claro (ex: 404, 500) em vez de ERR_NETWORK
      setErro('Erro ao conectar com o back-end. Verifique a URL da API.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="app-container">
      <div className="form-card">
        <h1>🧠 Orientador de Carreira IA</h1>
        <p>Descubra caminhos e oportunidades alinhadas ao seu perfil profissional.</p>

        <form onSubmit={handleSubmit} className="career-form">
          <label>Seu Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
            required
          />

          <label>Suas 3 principais habilidades:</label>
          <textarea
            name="habilidades"
            value={formData.habilidades}
            onChange={handleChange}
            placeholder="Ex: Comunicação, Operações matemáticas, Liderança..."
          />

          <label>Áreas de Interesse:</label>
          <textarea
            name="interesses"
            value={formData.interesses}
            onChange={handleChange}
            placeholder="Ex: Finanças, Saúde, Tecnologia..."
          />

          <label>Nível de Experiência:</label>
          <select
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
          >
            <option value="Júnior">Júnior</option>
            <option value="Pleno">Pleno</option>
            <option value="Sênior">Sênior</option>
          </select>

          <button type="submit" disabled={carregando}>
            {carregando ? 'Gerando Relatório PDF...' : 'Gerar Análise'}
          </button>
        </form>

        {/* === Animação de Carregamento === */}
        {carregando && (
          <div className="loading-overlay">
            <div className="spinner"></div>
            <p>Analisando seu perfil profissional...</p>
          </div>
        )}

        {/* === Caixa de Erro === */}
        {erro && (
          <div className="error-box">
            <p>{erro}</p>
          </div>
        )}

        {/* === Resultado Final === */}
        {pdfUrl && !carregando && (
          <div className="result-box">
            <h2>✅ Relatório Gerado com Sucesso!</h2>
            <p>Sua análise de carreira está pronta.</p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              Baixar Relatório (PDF)
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;