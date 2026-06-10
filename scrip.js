document.querySelector('.floating').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

console.log('Script carregado com sucesso!');