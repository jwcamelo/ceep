const novoItem = (event) => {
  event.preventDefault();
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const input = document.querySelector("[data-form-input]");
  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);
  const valor = input.value;
  const dataFormatada = data.format("DD / MM / YYYY");
  const concluida = false;

  const dados = {
    valor,
    dataFormatada,
    concluida,
  };

  const tarefasAtt = [...tarefas, dados];

  localStorage.setItem("tarefas", JSON.stringify(tarefasAtt));

  input.value = "";
  exibirTarefas();
};
