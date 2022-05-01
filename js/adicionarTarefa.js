const adicionarTarefa = ({ valor, concluida }, id) => {
  const tarefa = document.createElement("li");

  if (concluida) {
    tarefa.classList.add("done");
  }
  tarefa.classList.add("task");

  const conteudo = `<p class="content"> ${valor}</p>`;
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConluir(exibirTarefas, id));
  tarefa.appendChild(BotaoDeletar(exibirTarefas, id));
  return tarefa;
};
