# 📧 **CONFIGURAÇÃO DO EMAILJS - SOLUÇÃO PARA CORS**

## 🚨 **PROBLEMA RESOLVIDO**

O erro de CORS acontece porque o Resend API não permite requisições diretas do frontend. O **EmailJS** é a solução perfeita para isso!

## 📋 **PASSO A PASSO COMPLETO**

### **1. Criar conta no EmailJS**
1. **Acesse:** https://www.emailjs.com/
2. **Clique:** "Sign Up Free"
3. **Crie conta** com: `fullstack.ads@gmail.com`
4. **Verifique** seu email

### **2. Configurar serviço de email**
1. **No dashboard**, vá em **"Email Services"**
2. **Clique:** "Add New Service"
3. **Escolha:** "Gmail" (recomendado)
4. **Configure:**
   - **Email:** `fullstack.ads@gmail.com`
   - **Senha:** Sua senha do Gmail
   - **Nome:** `Simplifique+ Gmail`
5. **Anote o Service ID** (ex: `service_abc123`)

### **3. Criar template de email**
1. **Vá em:** "Email Templates"
2. **Clique:** "Create New Template"
3. **Use este template:**

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

4. **Anote o Template ID** (ex: `template_xyz789`)

### **4. Obter chave pública**
1. **Vá em:** "Account" → "General"
2. **Anote sua Public Key** (ex: `user_abc123def456`)

### **5. Atualizar o código**
No arquivo `index.html`, substitua:

**Linha 801:**
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```
**POR:**
```javascript
emailjs.init('SUA_PUBLIC_KEY_AQUI');
```

**Linha 814:**
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```
**POR:**
```javascript
emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
```

**Exemplo completo:**
```javascript
emailjs.init('user_abc123def456');
emailjs.send('service_xyz789', 'template_abc123', templateParams)
```

## ✅ **VANTAGENS DO EMAILJS**

- ✅ **Sem problemas de CORS**
- ✅ **Funciona direto do frontend**
- ✅ **200 emails/mês gratuitos**
- ✅ **Fácil configuração**
- ✅ **Templates HTML**
- ✅ **Reliable delivery**

## 🎯 **APÓS CONFIGURAR**

1. ✅ Substitua as chaves no código
2. ✅ Salve o arquivo
3. ✅ Faça commit e push
4. ✅ Teste o formulário
5. ✅ Verifique se o email chega

## 📞 **SE TIVER DIFICULDADES**

1. **Use Gmail** como serviço (mais confiável)
2. **Verifique spam** se não receber emails
3. **Teste o template** antes de usar no site
4. **Confirme as chaves** estão corretas

**O EmailJS resolve o problema de CORS e funciona perfeitamente!** 🚀
