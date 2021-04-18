function cargarCartas() {
    const cartas = document.getElementById("grid");

    for (let i = 1; i < 14; i++) {

        const carta = document.createElement("div")
        const img = document.createElement("img")

        carta.id = "btn-carta"
        carta.className = "btn-carta"
        carta.setAttribute("data-carta", `${i}`)
        img.className = `btn-carta carta-${i}`
        img.src = `img/${i}.png`

        carta.appendChild(img)

        cartas.appendChild(carta)
    }
}

cargarCartas();