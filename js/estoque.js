document.addEventListener("DOMContentLoaded", () => {
  renderizarTabela();
});

function aplicarFiltro() {
  const dataInicio = document.getElementById("filtroDataInicio").value;
  const dataFim = document.getElementById("filtroDataFim").value;
  const vendedor = document.getElementById("filtroVendedor").value.toLowerCase();

  let vendas = JSON.parse(localStorage.getItem("estoque")) || [];

  if (dataInicio)
    vendas = vendas.filter((v) => compararData(v.data) >= compararData(dataInicio));
  if (dataFim)
    vendas = vendas.filter((v) => compararData(v.data) <= compararData(dataFim));
  if (vendedor)
    vendas = vendas.filter((v) => v.vendedor.toLowerCase().includes(vendedor));

  renderizarTabela(vendas);
}

function limparFiltro() {
  document.getElementById("filtroDataInicio").value = "";
  document.getElementById("filtroDataFim").value = "";
  document.getElementById("filtroVendedor").value = "";
  renderizarTabela();
}

function compararData(dataBR) {
  const [dia, mes, ano] = dataBR.includes("/")
    ? dataBR.split("/")
    : dataBR.split("-").reverse();
  return new Date(`${ano}-${mes}-${dia}`);
}

function renderizarTabela(filtrado = null) {
  const vendas = filtrado || JSON.parse(localStorage.getItem("estoque")) || [];
  const container = document.getElementById("tabelaContainer");
  
  if (vendas.length === 0) {
    container.innerHTML = "<p>Nenhuma venda registrada.</p>";
    return;
  }

  container.innerHTML = `<p>${vendas.length} venda(s) encontrada(s)</p>`;
}

function voltar() {
  window.location.href = "cadastro.html";
}

