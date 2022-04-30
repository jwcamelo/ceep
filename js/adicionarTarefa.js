const adicionarTarefa = ({ valor, dataFormatada }) => {
  const tarefa = document.createElement("li");
  tarefa.classList.add("task");

  const conteudo = `<p class="content"> ${dataFormatada} * ${valor}</p>`;
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConluir());
  tarefa.appendChild(BotaoDeletar());
  return tarefa;
};
