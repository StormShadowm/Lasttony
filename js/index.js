window.addEventListener("scroll", function () {
  let animacion = document.getElementById("animado");
  let posicionobj1 = animacion.getBoundingClientRect().top;
  console.log(posicionobj1);
  let tamanodepantana = window.innerHeight / 3.5;

  if (posicionobj1 < tamanodepantana) {
    animacion.style.animation = "mover 1s ease-out";
  }
});
