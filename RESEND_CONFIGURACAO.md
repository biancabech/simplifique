# 🚀 Configuração do Resend para Simplifique+

## 📋 **PASSO A PASSO COMPLETO**

### **1. Criar conta no Resend**
1. Acesse: https://resend.com/
2. Clique em "Get Started Free"
3. Crie sua conta com o email: `fullstack.ads@gmail.com`
4. Verifique seu email

### **2. Obter API Key**
1. No dashboard do Resend, vá em **"API Keys"**
2. Clique em **"Create API Key"**
3. Dê um nome: `Simplifique+ Site`
4. **COPIE a chave** (formato: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
5. ⚠️ **IMPORTANTE**: Guarde bem esta chave!

### **3. Configurar domínio (OPCIONAL)**
Para usar `noreply@simplifique.com.br`, você precisa:
1. Ir em **"Domains"** no dashboard
2. Adicionar seu domínio
3. Configurar DNS

**OU** use o domínio padrão do Resend:
- `onboarding@resend.dev` (já configurado)

### **4. Atualizar o código**
No arquivo `index.html`, linha 826, substitua:
```javascript
'Authorization': 'Bearer re_YOUR_API_KEY_HERE',
```

**POR:**
```javascript
'Authorization': 'Bearer SUA_CHAVE_RESEND_AQUI',
```

**Exemplo:**
```javascript
'Authorization': 'Bearer re_1234567890abcdef1234567890abcdef',
```

### **5. Testar**
1. Salve o arquivo
2. Faça commit e push
3. Teste o formulário no site
4. Verifique se o email chega em `fullstack.ads@gmail.com`

## 🔧 **CONFIGURAÇÃO ATUAL**

### **Email de destino:** `fullstack.ads@gmail.com`
### **Domínio de envio:** `onboarding@resend.dev` (padrão)
### **Limite gratuito:** 3.000 emails/mês

## 📧 **FORMATO DO EMAIL**

O email será enviado com:
- **Assunto:** "Novo contato do site Simplifique+ - [Nome] ([Empresa])"
- **Conteúdo:** Todos os dados do formulário formatados em HTML
- **Reply-to:** Email do cliente (para responder diretamente)

## ⚠️ **PROBLEMAS COMUNS**

### **Erro 401 (Unauthorized)**
- Verifique se a API Key está correta
- Certifique-se de que não há espaços extras

### **Erro 403 (Forbidden)**
- Verifique se a conta está ativa
- Confirme se não excedeu o limite mensal

### **Erro 422 (Unprocessable Entity)**
- Verifique se o domínio está configurado
- Use `onboarding@resend.dev` se não tiver domínio próprio

## 🎯 **PRÓXIMOS PASSOS**

1. ✅ Obter API Key do Resend
2. ✅ Substituir no código
3. ✅ Testar envio
4. ✅ Verificar recebimento

**Depois disso, o formulário estará 100% funcional!** 🚀
