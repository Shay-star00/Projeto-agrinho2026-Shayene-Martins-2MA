// Arquivo JavaScript - script.js
// O código original não tinha JavaScript, então está vazio.
// Adicione suas funções JavaScript aqui quando precisar.

// Exemplo: função para voltar ao topo com animação
document.querySelector('.floating').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

console.log('Script carregado com sucesso!');