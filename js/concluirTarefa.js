const BotaoConluir = (atualiza, id) => {
  const botaoConcluir = document.createElement("button");

  botaoConcluir.classList.add("check-button");
  botaoConcluir.innerText = "Concluir";

  botaoConcluir.addEventListener("click", () => concluirTarefa(atualiza, id));

  return botaoConcluir;
};

function concluirTarefa(atualiza, id) {
  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));
  tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;

  localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));

  atualiza();
}
