const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

const li = document.createElement("li");
li.textContent = "Primeiro";
olItens.appendChild(li);

const li2 = document.createElement("li");
li2.textContent = "segundo";
olItens.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "segundo";
olItens.appendChild(li3);