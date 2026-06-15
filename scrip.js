// Função para controlar a troca de Abas (Tabs) de forma dinâmica e interativa
function openTab(evt, tabName) {
    // Esconde todos os elementos com a classe "tab-content"
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-content");
    }

    // Remove a classe "active" de todos os botões
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Mostra a aba atual clicada e adiciona a classe ativa ao botão correspondente
    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}

// FUNCIONALIDADE EXTRA: Alternar Modo Escuro ao clicar no fundo vazio
document.body.addEventListener('click', function(event) {
    // O Javascript verifica se o clique foi feito diretamente no 'body' ou no 'html' 
    // (ou seja, nas partes vazias da tela onde não há caixas de texto ou botões)
    if (event.target === document.body || event.target === document.documentElement) {
        // Liga/Desliga a classe "dark-mode" no CSS
        document.body.classList.toggle('dark-mode');
    }
});