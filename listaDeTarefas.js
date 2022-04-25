const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", adicionarTarefa);

function adicionarTarefa(event) {
  event.preventDefault();
  const lista = document.querySelector("[data-lista]");
  const input = document.querySelector("[data-form-input]");
  const tarefa = document.createElement("li");

  tarefa.classList.add("task");

  const conteudo = `<p class="content">${input.value}</p>`;

  tarefa.innerHTML = conteudo;

  lista.appendChild(tarefa);
  input.value = "";
}
