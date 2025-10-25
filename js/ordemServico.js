document.addEventListener("DOMContentLoaded", () => {
  carregarTabela();
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

  document.getElementById("formOS").reset();
  carregarTabela();
}

function carregarTabela() {
  const listaOS = JSON.parse(localStorage.getItem("ordensServico")) || [];
  const tbody = document.querySelector("#tabelaOS tbody");
  tbody.innerHTML = "";

  listaOS.forEach((os) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${os.cliente}</td>
      <td>${os.descricao}</td>
      <td>${os.tipo}</td>
      <td>${os.data}</td>
      <td>${os.status}</td>
      <td>
        <button class="btn-editar" onclick="editarOS(${os.id})">✏️</button>
        <button class="btn-excluir" onclick="excluirOS(${os.id})">🗑️</button>
        ${
          os.status === "Em andamento"
            ? `<button class="btn-finalizar" onclick="finalizarOS(${os.id})">✅</button>`
            : "—"
        }
      </td>
    `;
    tbody.appendChild(row);
  });
}

function excluirOS(id) {
  if (!confirm("Deseja realmente excluir este serviço?")) return;

  let listaOS = JSON.parse(localStorage.getItem("ordensServico")) || [];
  listaOS = listaOS.filter((o) => o.id !== id);

  localStorage.setItem("ordensServico", JSON.stringify(listaOS));
  carregarTabela();
}

function finalizarOS(id) {
  const listaOS = JSON.parse(localStorage.getItem("ordensServico")) || [];
  const os = listaOS.find((o) => o.id === id);
  if (!os) return;

  os.status = "Concluído";

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push({
    id: Date.now(),
    descricao: `Serviço: ${os.descricao}`,
    preco: os.valor,
    quantidade: 1,
    fabricante: "Oficina",
    categoria: os.tipo,
    imagem: "../images/servico.png",
  });

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  localStorage.setItem("ordensServico", JSON.stringify(listaOS));
  alert("Serviço finalizado e enviado ao carrinho.");
  carregarTabela();
}

function editarOS(id) {
  const listaOS = JSON.parse(localStorage.getItem("ordensServico")) || [];
  const os = listaOS.find((o) => o.id === id);
  if (!os) return;

  document.getElementById("cliente").value = os.cliente;
  document.getElementById("descricaoServico").value = os.descricao;
  document.getElementById("tipoServico").value = os.tipo;
  document.getElementById("valorServico").value = os.valor;

  const novaLista = listaOS.filter((o) => o.id !== id);
  localStorage.setItem("ordensServico", JSON.stringify(novaLista));
}

