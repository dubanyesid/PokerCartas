function cargarTabla (){

	const tabla = document.getElementById("tabla_carta");
 	const tr = document.createElement('tr');

     for (i=0; i<input.length; i++) {

        const tdNumero= document.createElement('td');
            tdNumero.textContent = input[i].addEventListener;
            tr.appendChild(tdNumero);

            const tdCarta = document.createElement('td');
            tdCarta.textContent =input[i].addEventListener;
            tr.appendChild(tdCarta);
            
            tabla.appendChild(tr);
    }
    
}


function obtenerdatos(){
    var url = "http://demo6497253.mockable.io/cartas";

	fetch  (url)
	    .then(response => response.json())
		.then(data => generarTabla(data))
	.catch(error => {});
}