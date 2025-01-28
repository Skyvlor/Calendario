/* Creare un calendario utilizando HTML CSS and Javascritp 
Podria ser como una APi 
*/

/*th es la fila 
tr es el titulo para el grid
td es columna */


calendario = document.getElementById('calendario');
let contenido = '<tr>';
let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let Meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let Titulo = ['Calendario 2025'];
let InicioDelMes = new Date(2025, 0, 1);
console.log(InicioDelMes);

contenido += `<th colspan="7">${Titulo}</th></tr><tr>`;

for (let i = 0; i < Meses.length; i++) {
    contenido += `<th colspan="7">${Meses[i]}</th></tr><tr>`;

    for (let j = 0; j < diasSemana.length; j++) {
        contenido += `<th>${diasSemana[j]}</th>`;
    }

    contenido += '</tr><tr>';

    let primerDiaMes = new Date(2025, i, 1).getDay();
    primerDiaMes = (primerDiaMes + 6) % 7; // Ajustar para que Lunes sea el primer día

    for (let k = 0; k < primerDiaMes; k++) {
        contenido += '<td></td>';
    }

    let diasEnMes = new Date(2025, i + 1, 0).getDate();

    for (let dia = 1; dia <= diasEnMes; dia++) {
        contenido += `<td class='dia'>${dia}</td>`;

        if ((dia + primerDiaMes) % 7 === 0) {
            contenido += '</tr><tr>';
        }
    }

    contenido += '</tr><tr>';
}

contenido += '</tr>';
calendario.innerHTML = contenido;