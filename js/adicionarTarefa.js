const adicionarTarefa = ({ valor }) => {
  const tarefa = document.createElement("li");
  tarefa.classList.add("task");

  const conteudo = `<p class="content"> ${valor}</p>`;
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConluir());
  tarefa.appendChild(BotaoDeletar());
  return tarefa;
};
