const elementos = document.querySelectorAll('.reveal');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

elementos.forEach((el) => observador.observe(el));