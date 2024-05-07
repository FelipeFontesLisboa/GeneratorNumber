// const btn = document.getElementById("button");
// const input = document.getElementById("inputTextArea");

// const gerar =("click",() => { const randon = Math.floor(Math.random() *(10 - 1) + 1);
//     input.textcontent = `Numero Sorteado ${randon}`;
//   });

// btn.addEventListener("click", gerar);


// ?correção do meu codigo
const btn = document.getElementById("button");
const input = document.getElementById("inputTextArea");

const gerar = () => {
  const randon = Math.floor(Math.random() * (20 - 1 + 1) + 1); // Corrigido o cálculo do número aleatório
  input.value = `Numero Sorteado ${randon}`; // Corrigido para input.value
};

btn.addEventListener("click", gerar); // Corrigido o método addEventListener
