const exibirTarefas = () => {
  const lista = document.querySelector("[data-lista]");
  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];

  lista.innerHTML = "";
  const datasUnicas = removeDatasRepetidas(tarefasCadastradas);
  ordenaDatas(datasUnicas);
  datasUnicas.forEach((dia) => {
    lista.appendChild(criarData(dia));
  });
};
