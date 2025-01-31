/* Creare un calendario utilizando HTML CSS and Javascritp 
Podria ser como una APi 
*/

/*th es la fila 
tr es el titulo para el grid
td es columna */

//let DiasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let Meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let dates = document.getElementById("dates");
let month = document.getElementById("month");
let year = document.getElementById("year");

let prevMonthDom = document.getElementById("prev-month");
let nextMonthDom = document.getElementById("next-month");

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

month.textContent = Meses[monthNumber];
year.textContent = currentYear.toString();

prevMonthDom.addEventListener("click", () => lastMonth());
nextMonthDom.addEventListener("click", () => nextMonth());

writeMonth(monthNumber);

/* FUNCIONES */
function writeMonth(month) {
  for (let i = startDate(); i > 0; i--) {
    dates.innerHTML += `<div class ="lastdays">
    ${getTotalDays(monthNumber - 1) - (i - 1)}</div>`;
  }

  for (let i = 1; i <= getTotalDays(month); i++) {
    dates.innerHTML += `<div >${i}</div>`;
  }
}

function getTotalDays(month) {
  if (month === -1) month = 11;

  if (
    month === 0 ||
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 7 ||
    month === 9 ||
    month === 11
  ) {
    return 31;
  } else if (month == 3 || month == 5 || month == 8 || month == 10) {
    return 30;
  } else {
    return isLeap() ? 29 : 28;
  }
}

function isLeap() {
  return (
    currentYear % 100 !== 0 &&
    (currentYear % 4 === 0 || currentYear % 400 === 0)
  );
}

function startDate() {
  let start = new Date(currentYear, monthNumber, 1);
  return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
}
function lastMonth() {
  if (monthNumber !== 0) {
    monthNumber--;
  } else {
    monthNumber = 11;
    currentYear--;
  }

  setNewDate();
}
function nextMonth() {
  if (monthNumber !== 11) {
    monthNumber++;
  } else {
    monthNumber = 0;
    currentYear++;
  }

  setNewDate();
}
function setNewDate() {
  currentDate.setFullYear(currentYear, monthNumber, currentDay);
  month.textContent = Meses[monthNumber];
  year.textContent = currentYear.toString();
  dates.textContent = "";
  writeMonth(monthNumber);
}
// debug startDate
// se debe llamar desde css para iniciar el start grid column
// console.log("este es el dia de inicio" + " " + startDate());
