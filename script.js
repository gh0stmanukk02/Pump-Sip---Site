const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
});

function criarCard(titulo, imagem) {
  return { titulo,imagem };
}

let cardsGaleria = [
  criarCard(
    'Conceito',
    'ideia1.jpg'
  ),
  criarCard(
    'Programação',
    '_MG_6654.JPG'
  ),
  criarCard(
    'Artes e Design',
    'boneco peso.jpg'
  )
];
document.addEventListener('DOMContentLoaded', () => {
  const figures = document.querySelectorAll('#desenvolvimento .galeria figure ');
  for (let i = 0; i < cardsGaleria.length && i < figures.length; i++) {
    const figure = figures[i];
    const img = figure.querySelector('img');
    img.src = cardsGaleria[i].imagem;
    img.alt = cardsGaleria[i].titulo;
  }
});