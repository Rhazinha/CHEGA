document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".btn-proximo");

  botoes.forEach(botao => {
    botao.addEventListener("click", function () {
      const passoAtual = botao.closest(".passo");
      const proximoId = botao.getAttribute("data-proximo");
      const proximoPasso = document.getElementById(`passo-${proximoId}`);

      passoAtual.classList.remove("ativo");

      if (proximoPasso) {
        proximoPasso.classList.add("ativo");
        proximoPasso.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
