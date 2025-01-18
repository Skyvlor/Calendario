/* Creare un calendario utilizando HTML CSS and Javascritp 
Podria ser como una APi 
*/



calendario = document.getElementById('calendario');
let contenido = '<tr>';
let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let Titulo = ['Calendario'];

contenido += `<th colspan="7">${Titulo}</th></tr><tr>`;

for (let i = 0; i < diasSemana.length; i++) {
    contenido += `<th>${diasSemana[i]}</th>`;   
};

contenido+= '</tr><tr>';

for (let i = 1; i <= 42; i++) {
    let dia = i <= 31 ? i : '';
    contenido += `<td>${dia}</td>`;

    if (i % 7 === 0) {
        contenido += '</tr><tr>';
    }
}

contenido += '</tr>';
calendario.innerHTML = contenido;