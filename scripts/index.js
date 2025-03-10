document.addEventListener("DOMContentLoaded", () => {
  const servicosModalidade = document.querySelector(".servicos-modalidade");

  if (servicosModalidade) {
    servicosModalidade.addEventListener("click", () => {
      servicosModalidade.classList.toggle("rotate");
    });
  }
});
