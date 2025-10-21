document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("formOS").addEventListener("submit", cadastrarServico);
});

function cadastrarServico(e) {
  e.preventDefault();

  const cliente = document.getElementById("cliente").value;
  const descricao = document.getElementById("descricaoServico").value;
  const tipo = document.getElementById("tipoServico").value;
  const valor = parseFloat(document.getElementById("valorServico").value);
  const data = new Date().toLocaleDateString("pt-BR");

  const os = {
    id: Date.now(),
    cliente,
    descricao,
    tipo,
    valor,
    data,
    status: "Em andamento",
  };

  const listaOS = JSON.parse(localStorage.getItem("ordensServico")) || [];
  listaOS.push(os);
  localStorage.setItem("ordensServico", JSON.stringify(listaOS));

  alert("Serviço cadastrado com sucesso!");
  document.getElementById("formOS").reset();
}

