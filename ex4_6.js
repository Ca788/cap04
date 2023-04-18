const frm = document.querySelector("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");
const resp3 = document.getElementById("outResp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const saque = Number(frm.inSaque.value)

  // Verifica se o valor do saque não é divisível por 10, o que significa que não pode ser retirado em notas de R$10, R$50 e R$100
  if(saque % 10 !== 0){
    alert(`Valor inválido para R$10, R$50, R$100 `);

  // Define o foco de entrada de volta para o campo de entrada
    frm.inSaque.focus()

  // Retorna para interromper a execução do código adicional
    return
  }

  // Calcula o número de notas de R$100
  const notasCem = Math.floor(saque / 100);

  
  const restoCem = saque % 100; // Calcula o resto do saque após retirar as notas de R$100

  // Calcula o número de notas de R$50 a partir do resto anterior
  const notasCinquenta = Math.floor(restoCem / 50);
  const restoCinquenta = restoCem % 50; // Calcula o resto do saque após retirar as notas de R$50

  const notasDez = Math.floor(restoCinquenta / 10);

  if(notasCem > 0) {
    resp1.innerText = ` Notas R$100:  ${notasCem}`
  }else{
    resp1.innerText = ""
  }
  
  if(notasCinquenta > 0) {
    resp2.innerText = ` Notas R$50:  ${notasCinquenta}`
  }else{
    resp2.innerText = ""
  }

  if(notasDez > 0) {
    resp3.innerText = ` Notas R$10:  ${notasDez}`
  }else{
    resp3.innerText = ""
  }
})