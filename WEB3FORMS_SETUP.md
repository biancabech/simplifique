# Configuração do Web3Forms para Envio de Emails

## Passo 1: Obter Access Key
1. Acesse: https://web3forms.com/
2. Clique em "Get Started Free"
3. Insira seu email: `fullstack.ads@gmail.com`
4. Clique em "Get Access Key"
5. Verifique seu email e copie a **Access Key**

## Passo 2: Atualizar o Código
No arquivo `index.html`, substitua:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
```

Pela sua Access Key real:
```html
<input type="hidden" name="access_key" value="sua-access-key-aqui">
```

## Passo 3: Testar
1. Abra o site no navegador
2. Preencha o formulário
3. Clique em "Enviar Mensagem"
4. Verifique se aparece a mensagem de sucesso
5. Verifique seu email `fullstack.ads@gmail.com`

## Vantagens do Web3Forms
- ✅ **Gratuito**: 250 envios/mês
- ✅ **Sem configuração**: Apenas uma chave
- ✅ **Funciona imediatamente**: Sem setup complexo
- ✅ **Anti-spam**: Proteção automática
- ✅ **Templates**: Emails formatados automaticamente

## Formato do Email Recebido
```
Assunto: Novo contato do site Simplifique+

Dados do contato:
- Nome: [Nome do usuário]
- Email: [Email do usuário]
- Empresa: [Empresa]
- Telefone: [Telefone]
- Cargo: [Cargo]
- Funcionários: [Número de funcionários]
- Interesse: [Interesse]
- Mensagem: [Mensagem]

Enviado através do formulário de contato do site simplifique.com.br
```

## Troubleshooting
- **Erro 403**: Access key inválida
- **Erro 429**: Limite de envios excedido
- **Erro 500**: Problema no servidor (tente novamente)

## Upgrade (Opcional)
Para mais de 250 envios/mês:
- Plano Pro: $9/mês - 10.000 envios
- Plano Business: $29/mês - 50.000 envios
