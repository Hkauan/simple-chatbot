# Chatbot by Harry

Este é um chatbot básico implementado em HTML, CSS e JavaScript. Ele simula um chat estilizado como o WhatsApp, onde o usuário pode enviar mensagens que serão respondidas automaticamente.

## Visão Geral

O projeto consiste em um ícone de chat flutuante, que abre uma janela de conversa quando clicado. A janela de chat exibe as mensagens do usuário e do bot em balões de conversa. Toda a interface é estilizada para lembrar o visual do WhatsApp.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica do chatbot.
- **CSS**: Estilos visuais, incluindo efeitos de transição e layout responsivo.
- **JavaScript**: Funcionalidade do chatbot, como abrir/fechar a janela e enviar mensagens.

## Estrutura do Projeto

- `index.html`: Arquivo principal do projeto, onde a estrutura do chatbot é definida.
- `styles.css`: Contém todos os estilos CSS para a interface e a janela de chat.
- `script.js`: (a ser criado) Para adicionar a funcionalidade do chatbot, como alternar a visibilidade da janela e enviar mensagens.

## Funcionalidades

1. **Ícone de Chat**: Um ícone circular que fica no canto inferior direito da página. Ao clicar, ele abre ou fecha a janela do chat.
2. **Janela de Chat**: Uma janela de conversa com um cabeçalho, área de mensagens e área de entrada de texto.
3. **Envio de Mensagens**: O usuário pode enviar mensagens, e o bot responde automaticamente.

## Como Usar

1. Clique no ícone de chat no canto inferior direito para abrir a janela do chatbot.
2. Digite uma mensagem no campo de entrada e pressione "Enter" ou clique no botão "Enviar" para ver a resposta automática do bot.
3. Para fechar a janela, clique novamente no ícone de chat.

## Código

### HTML (`index.html`)

O HTML define a estrutura básica, incluindo o ícone de chat e a área de mensagens.

### CSS (`styles.css`)

O CSS estiliza o chatbot para dar uma aparência semelhante ao WhatsApp. Ele define estilos para o ícone, a janela de chat, os balões de mensagem, animações e transições.

### JavaScript (`script.js`)

O JavaScript adiciona a funcionalidade:
- `toggleChatWindow()`: Abre e fecha a janela de chat.
- `sendMessage()`: Envia a mensagem do usuário e exibe a resposta automática do bot.
- `handleEnter(event)`: Detecta a tecla "Enter" para enviar a mensagem sem precisar clicar no botão.

## Exemplo de Uso

Ao iniciar o chatbot e enviar uma mensagem, a janela exibirá algo como:



[Bot]: Olá! Como posso ajudar?....
Create by cwb_harry
