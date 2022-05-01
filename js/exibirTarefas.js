const exibirTarefas = () => {
  const lista = document.querySelector("[data-lista]");
  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];

  lista.innerHTML = "";
  tarefasCadastradas.forEach((tarefa) => {
    lista.appendChild(adicionarTarefa(tarefa));
  });
};
