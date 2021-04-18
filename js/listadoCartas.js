var divs = document.getElementsByClassName("btn-carta");

for (let i of divs) {
    i.addEventListener('click', function() {

        var datos = localStorage.getItem('datos');
        datos = JSON.parse(datos);

        for (let item of datos) {
            if (item.numero == this.dataset.carta) {
                item.cantidad++;
            }
        }

        localStorage.setItem('datos', JSON.stringify(datos));
        rellenarTabla();

    });
}

function cargarJSON() {
    var datosJSON = [{ numero: 7, carta: "Picas", cantidad: 0}, { numero: 9, carta: "Corazones", cantidad: 0 }]
    localStorage.setItem("datos", JSON.stringify(datosJSON))
}

function cargarSelect() {
    const select = document.getElementById("numero");

    for (let i = 1; i < 14; i++) {

        const numero = document.createElement("option")

        numero.value = i
        numero.textContent = i

        select.appendChild(numero)
    }
}

function guardarCarta() {
    const numero = document.getElementById("numero");
    const descripcion = document.getElementById("descripcion-carta");
    var datos = localStorage.getItem("datos");

    datos = JSON.parse(datos);
    console.log(datos)

    var dato = { numero: numero.value, carta: descripcion.value, cantidad: '0' };

    datos.push(dato)

    localStorage.setItem("datos", JSON.stringify(datos))

    rellenarTabla();
}

function rellenarTabla() {
    const tabla = document.getElementById("customers");
    const trhead = document.getElementById("tr-head");
    let datos = localStorage.getItem("datos");

    datos = JSON.parse(datos)

    console.log(datos);

    tabla.innerHTML = "";
    tabla.appendChild(trhead)
    for (let i = 0; i < datos.length; i++) {

        tabla.innerHTML += `<tr>
                            <td> ${datos[i].numero} </td>
                            <td> ${datos[i].carta} </td>
                            <td> ${datos[i].cantidad} </td>
                        </tr>`
    }

}

cargarJSON();
cargarSelect();
rellenarTabla();