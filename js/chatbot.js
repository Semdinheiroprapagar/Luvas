// Configuração do Chatbase
window.chatbaseConfig = {
    chatbotId: "SEU_CHATBOT_ID", // Substitua pelo seu ID real do Chatbase
    domain: "www.chatbase.co",
    language: "pt",
    title: "Atendimento Luvas Academia",
    subtitle: "Tire suas dúvidas sobre nossos produtos e treinamentos",
    welcomeMessage: "Olá! Sou o assistente virtual da Luvas Academia. Como posso ajudar hoje?",
    theme: {
        primaryColor: "#c2ff00",
        backgroundColor: "#ffffff",
        textColor: "#000000"
    }
};

// Inicializa o widget do Chatbase
(function() {
    var chatbaseScript = document.createElement('script');
    chatbaseScript.src = "https://www.chatbase.co/embed.min.js";
    chatbaseScript.defer = true;
    chatbaseScript.id = "chatbase-bubble-script";
    document.head.appendChild(chatbaseScript);
    
    console.log("Chatbase carregado com sucesso!");
})(); 