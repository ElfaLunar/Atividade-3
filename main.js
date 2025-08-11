// cria referÊncia ao form a ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
const veiculo = frm.inVeiculo.value; // obtém o ome digitado no form
const preco = Number(inPreco.value); // exibe a resposta do programa 
  
const entrada = preco * 0.50;
  const parcela = (preco * 0.50) / 12;

  resp1.innerText = `Promoção: ${veículo}`;
  resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
  resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`;

  e.preventDefault();
