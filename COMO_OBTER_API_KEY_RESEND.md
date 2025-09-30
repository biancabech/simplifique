# 🔑 **COMO OBTER API KEY DO RESEND**

## 📋 **PASSO A PASSO DETALHADO**

### **1. Criar conta no Resend**
1. **Acesse:** https://resend.com/
2. **Clique:** "Get Started" (botão verde)
3. **Escolha uma opção:**
   - **Opção A:** Login com Google (mais rápido)
   - **Opção B:** Login com GitHub
   - **Opção C:** Criar conta com email

### **2. Para Login com Google:**
1. Clique em "Login with Google"
2. Use o email: `fullstack.ads@gmail.com`
3. Digite a senha do Gmail
4. Aceite as permissões

### **3. Para Login com GitHub:**
1. Clique em "Login with GitHub"
2. Autorize o Resend
3. Complete o cadastro

### **4. Para criar conta com email:**
1. Digite: `fullstack.ads@gmail.com`
2. Crie uma senha forte
3. Clique em "Create Account"
4. Verifique o email (se necessário)

### **5. Obter API Key**
1. **Após fazer login**, você será redirecionado para o dashboard
2. **No menu lateral**, clique em **"API Keys"**
3. **Clique** em **"Create API Key"**
4. **Dê um nome:** `Simplifique+ Site`
5. **Copie a chave** (formato: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

### **6. Substituir no código**
No arquivo `index.html`, linha 826, substitua:
```javascript
'Authorization': 'Bearer re_1234567890abcdef1234567890abcdef',
```

**POR:**
```javascript
'Authorization': 'Bearer SUA_CHAVE_REAL_AQUI',
```

**Exemplo:**
```javascript
'Authorization': 'Bearer re_abc123def456ghi789jkl012mno345pqr678',
```

## ⚠️ **IMPORTANTE**

### **API Key atual é de TESTE**
- A chave `re_1234567890abcdef1234567890abcdef` é apenas um exemplo
- **NÃO funcionará** para envio real de emails
- **Você DEVE** substituir pela sua chave real

### **Após obter a chave real:**
1. ✅ Substitua no código
2. ✅ Salve o arquivo
3. ✅ Faça commit e push
4. ✅ Teste o formulário

## 🎯 **RESULTADO ESPERADO**

Após configurar a API Key real:
- ✅ Formulário funcionará 100%
- ✅ Emails chegarão em `fullstack.ads@gmail.com`
- ✅ Template HTML profissional
- ✅ Reply-to configurado

## 📞 **SE TIVER DIFICULDADES**

1. **Tente login com Google** (mais fácil)
2. **Use uma conta GitHub** existente
3. **Crie conta com email** se necessário
4. **Verifique spam** se não receber emails de verificação

**A API Key é GRATUITA e permite 3.000 emails/mês!** 🚀
