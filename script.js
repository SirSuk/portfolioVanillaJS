const menu = document.getElementById("hamburguer");
const btn = document.getElementById("btn_Colors");


btn.addEventListener('click', () => {
  document.body.style.background = randomColor();
});

function randomColor() { 
  return `hsl(${Math.floor(Math.random() * 220)}, 70%, 50%)`;
}
