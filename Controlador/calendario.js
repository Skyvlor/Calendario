/* Creare un calendario utilizando HTML CSS and Javascritp 
Podria ser como una APi 
*/

/*tr es salto de linea 
th es el titulo para el grid
td es columna */


calendario = document.getElementById('calendario');
let contenido = '<tr>';
let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let Meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let Titulo = ['Calendario'];

contenido += `<th colspan="7">${Titulo}</th></tr><tr>`;


for (let i =0; i<Meses.length; i++){
    
    contenido += `<th>${Meses[i]}</th>`;
    contenido+= '</tr><tr>';

    for (let i = 0; i < diasSemana.length; i++) {
        contenido += `<th>${diasSemana[i]}</th>`;
       
    };

    contenido += '</tr><tr>';

    for (let idia = 1; idia <= 42; idia++) {
        
        let dia = idia <= 31 ? idia : '';
        contenido += `<td>${dia}</td>`;
        
    
        if (idia % 7 === 0) {
            contenido += '</tr><tr>';
        }
    }
    contenido+= '</tr><tr>';
};

contenido += '</tr>';
calendario.innerHTML = contenido;