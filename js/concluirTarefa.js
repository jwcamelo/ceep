const BotaoConluir = () => {
  const botaoConcluir = document.createElement("button");

  botaoConcluir.classList.add("check-button");
  botaoConcluir.innerText = "Concluir";

  botaoConcluir.addEventListener("click", concluirTarefa);

  return botaoConcluir;
};

function concluirTarefa(event) {
  const botaoConcluir = event.target;
  const tarefaCompleta = botaoConcluir.parentElement;

  tarefaCompleta.classList.toggle("done");
}
