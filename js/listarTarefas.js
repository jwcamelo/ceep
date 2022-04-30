(() => {
  const novaTarefa = document.querySelector("[data-form-button]");
  const novoItem = (event) => {
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const lista = document.querySelector("[data-lista]");
    const calendario = document.querySelector("[data-form-date]");
    const data = moment(calendario.value);
    const valor = input.value;
    const dataFormatada = data.format("DD / MM / YYYY");

    const dados = {
      valor,
      dataFormatada,
    };

    const criaTarefa = adicionarTarefa(dados);

    lista.appendChild(criaTarefa);
    input.value = "";
  };

  novaTarefa.addEventListener("click", novoItem);
})();
