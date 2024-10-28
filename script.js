// Dados do chatbot
const responses = {
    "que horas funciona?": "Nosso horário de funcionamento é de segunda a sexta-feira, das 9h às 18h.",
    "Qual é o horário de funcionamento?": "Nosso horário de funcionamento é de segunda a sexta-feira, das 9h às 18h.",
    "Onde vocês estão localizados?": "Estamos localizados na Rua Exemplo, 123, Bairro Central, Cidade, Estado.",
    "Qual é o telefone de contato?": "Você pode nos ligar pelo telefone (11) 1234-5678.",
    "Qual é o e-mail de contato?": "Você pode nos enviar um e-mail para contato@exemplo.com.",
    "default": "Desculpe, não conseguimos entender oque quis dizer, e tambem como podemos ajuda-lo.",
};

// Função para alternar a visibilidade da janela de chat
function toggleChatWindow() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('show');
}

// Função para enviar a mensagem do usuário e obter a resposta
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return; // Não faz nada se o campo estiver vazio
    
    const chatMessages = document.getElementById('chat-messages');

    // Exibir mensagem do usuário
    chatMessages.innerHTML += `<div class="message user-message">${escapeHtml(userInput)}</div>`;
    
    // Obter resposta do chatbot
    const response = responses[userInput] || responses["default"];
    
    // Exibir resposta do chatbot
    chatMessages.innerHTML += `<div class="message bot-message">${escapeHtml(response)}</div>`;
    
    // Limpar campo de entrada
    document.getElementById('user-input').value = '';
    
    // Manter rolagem automática para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para escapar caracteres especiais em HTML
function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function (match) {
        const escape = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escape[match];
    });
}

// Função para enviar mensagem com a tecla Enter
function handleEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
}
