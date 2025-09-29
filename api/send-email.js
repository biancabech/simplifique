// API endpoint para envio de email via Resend
// Para usar com Vercel, Netlify Functions, ou similar

const RESEND_API_KEY = 're_1234567890abcdef'; // Substitua pela sua chave do Resend

export default async function handler(req, res) {
  // Permitir apenas POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { nome, empresa, email, telefone, cargo, funcionarios, interesse, mensagem } = req.body;

    // Validar campos obrigatórios
    if (!nome || !email || !telefone) {
      return res.status(400).json({ error: 'Campos obrigatórios não preenchidos' });
    }

    // Montar o corpo do email
    let emailBody = `
      <h2>Novo contato do site Simplifique+</h2>
      <p><strong>Dados do contato:</strong></p>
      <ul>
        <li><strong>Nome:</strong> ${nome}</li>
        ${empresa ? `<li><strong>Empresa:</strong> ${empresa}</li>` : ''}
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Telefone:</strong> ${telefone}</li>
        ${cargo ? `<li><strong>Cargo:</strong> ${cargo}</li>` : ''}
        ${funcionarios ? `<li><strong>Número de Funcionários:</strong> ${funcionarios}</li>` : ''}
        ${interesse ? `<li><strong>Interesse:</strong> ${interesse}</li>` : ''}
        ${mensagem ? `<li><strong>Mensagem:</strong> ${mensagem}</li>` : ''}
      </ul>
      <hr>
      <p><em>Enviado através do formulário de contato do site simplifique.com.br</em></p>
    `;

    // Enviar email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@simplifique.com.br', // Seu domínio verificado no Resend
        to: ['fullstack.ads@gmail.com'],
        subject: `Contato do Site - ${nome}${empresa ? ` (${empresa})` : ''}`,
        html: emailBody,
        reply_to: email, // Para responder diretamente ao cliente
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Resend API error: ${errorData.message}`);
    }

    const result = await response.json();
    
    return res.status(200).json({ 
      success: true, 
      message: 'Email enviado com sucesso!',
      id: result.id 
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      message: error.message 
    });
  }
}
