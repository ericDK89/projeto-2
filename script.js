const form = document.getElementById("form-container");
const table = document.querySelector("tbody");

const approvedSpan = "<span class='approved'>APROVADO</span>";
const reprovedSpan = "<span class='reproved'>REPROVADO</span>";

const grades = [];
const activities = [];

let linhas = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewLine();
  updateTable();
});

const addNewLine = () => {
  const matterInput = document.getElementById("matter-input");
  const gradeInput = document.getElementById("grade-input");

  if (activities.includes(matterInput.value)) {
    alert("Matéria já adicionada");
    return;
  }

  let linha = "<tr>";
  linha += `<td>${matterInput.value}</td>`;
  linha += `<td>${gradeInput.value}</td>`;
  linha += `<td><img src="${
    gradeInput.value >= 7 ? "assets/aprovado.png" : "assets/reprovado.png"
  }"
  alt="${gradeInput.value >= 7 ? "Aprovado" : "Reprovado"}" /></td>`;

  linhas += linha;

  grades.push(Number(gradeInput.value));
  activities.push(matterInput.value);

  updateTable();

  matterInput.value = "";
  gradeInput.value = "";
};

const updateTable = () => {
  table.innerHTML = linhas;
  updateFinalMediaTable();
};

const calculateFinalMedia = () => {
  let sum = 0;

  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }

  return sum;
};

const updateFinalMediaTable = () => {
  let media = calculateFinalMedia() / grades.length;

  const finalMediaValue = document.getElementById("final-media-value");
  const finalMediaResult = document.getElementById("final-media-result");

  finalMediaValue.innerHTML = `<span>${media.toFixed(2)}</span>`;
  finalMediaResult.innerHTML = media >= 7 ? approvedSpan : reprovedSpan;
};
