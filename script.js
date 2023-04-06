const form = document.getElementById("form-container");
const table = document.querySelector("tbody");

let linhas = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const matterInput = document.getElementById("matter-input").value;
  const gradeInput = document.getElementById("grade-input").value;

  let linha = "<tr>";
  linha += `<td>${matterInput}</td>`;
  linha += `<td>${gradeInput}</td>`;
  linha += `<td><img src="${
    gradeInput >= 7 ? "assets/aprovado.png" : "assets/reprovado.png"
  }"
  alt="${gradeInput >= 7 ? "Aprovado" : "Reprovado"}" /></td>`;

  linhas += linha;

  table.innerHTML = linhas;
});
