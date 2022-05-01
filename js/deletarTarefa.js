const BotaoDeletar = (atualiza, id) => {
  const botaoDeletar = document.createElement("button");

  botaoDeletar.innerText = "Deletar";
  botaoDeletar.classList.add("delete-button");
  botaoDeletar.addEventListener("click", () => deletarTarefa(atualiza, id));

  return botaoDeletar;
};

function deletarTarefa(atualiza, id) {
  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));
  tarefasCadastradas.splice(id, 1);
  localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));
  atualiza();
}
