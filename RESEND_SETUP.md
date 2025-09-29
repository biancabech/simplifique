# Configuração do Resend para Envio de Emails

## Opção 1: Usando EmailJS (Mais Fácil)

### Passo 1: Criar conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Verifique seu email

### Passo 2: Configurar serviço de email
1. No dashboard, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha "Gmail" ou "Outlook"
4. Configure com suas credenciais do Gmail
5. Anote o **Service ID**

### Passo 3: Criar template de email
1. Vá em "Email Templates"
2. Clique em "Create New Template"
3. Use este template:

```
Assunto: Novo contato do site Simplifique+ - {{from_name}}

Corpo do email:
<h2>Novo contato do site Simplifique+</h2>

<p><strong>Dados do contato:</strong></p>
<ul>
  <li><strong>Nome:</strong> {{from_name}}</li>
  <li><strong>Email:</strong> {{from_email}}</li>
  <li><strong>Empresa:</strong> {{empresa}}</li>
  <li><strong>Telefone:</strong> {{telefone}}</li>
  <li><strong>Cargo:</strong> {{cargo}}</li>
  <li><strong>Funcionários:</strong> {{funcionarios}}</li>
  <li><strong>Interesse:</strong> {{interesse}}</li>
  <li><strong>Mensagem:</strong> {{message}}</li>
</ul>

<hr>
<p><em>Enviado através do formulário de contato do site simplifique.com.br</em></p>
```

4. Anote o **Template ID**

### Passo 4: Obter chave pública
1. Vá em "Account" → "General"
2. Anote sua **Public Key**

### Passo 5: Atualizar o código
No arquivo `index.html`, substitua:
- `YOUR_PUBLIC_KEY` pela sua chave pública
- `YOUR_SERVICE_ID` pelo ID do serviço
- `YOUR_TEMPLATE_ID` pelo ID do template

## Opção 2: Usando Resend API (Mais Avançado)

### Passo 1: Criar conta no Resend
1. Acesse: https://resend.com/
2. Crie uma conta
3. Verifique seu domínio ou use o domínio de teste

### Passo 2: Obter API Key
1. No dashboard, vá em "API Keys"
2. Crie uma nova chave
3. Anote a chave (começa com `re_`)

### Passo 3: Configurar endpoint
1. Use o arquivo `api/send-email.js` criado
2. Substitua `RESEND_API_KEY` pela sua chave
3. Configure o domínio de envio
4. Deploy em Vercel, Netlify ou similar

### Passo 4: Atualizar frontend
Modifique o JavaScript para enviar para seu endpoint personalizado.

## Teste
1. Preencha o formulário no site
2. Verifique se o email chega em `fullstack.ads@gmail.com`
3. Verifique os logs no console do navegador

## Limites
- **EmailJS**: 200 emails/mês gratuitos
- **Resend**: 3.000 emails/mês gratuitos
