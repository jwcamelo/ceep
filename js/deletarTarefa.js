const BotaoDeletar = () => {
  const botaoDeletar = document.createElement("button");

  botaoDeletar.innerText = "Deletar";
  botaoDeletar.classList.add("delete-button");
  botaoDeletar.addEventListener("click", deletarTarefa);

  return botaoDeletar;
};

function deletarTarefa(event) {
  const tarefa = event.target.parentNode;
  const lista = document.querySelector("[data-lista]");
  lista.removeChild(tarefa);
}
