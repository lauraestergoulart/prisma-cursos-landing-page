console.log("JavaScript conectado!");

function alternarStatus(botao) {
  console.log("Clique detectado!");

  if (botao.classList.contains("botao-pendente")) {
    botao.classList.remove("botao-pendente");
    botao.classList.add("botao-concluido");
    botao.textContent = "concluída";

    const idMissao = botao.dataset.missao;
    localStorage.setItem(idMissao, "concluida");
  }
}

window.onload = function () {
  const botoes = document.querySelectorAll("[data-missao]");

  botoes.forEach((botao) => {
    const idMissao = botao.dataset.missao;

    if (localStorage.getItem(idMissao) === "concluida") {
      botao.classList.remove("botao-pendente");
      botao.classList.add("botao-concluido");
      botao.textContent = "concluída";
    }
  });
};
