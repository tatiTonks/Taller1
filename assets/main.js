//Aquí el 1
let puntoUno = document.querySelector("#formulario1")
puntoUno.addEventListener("submit", (uno) => {
    uno.preventDefault()
    let noSeQueNombrePoner = uno.target.numero1n.value
    let sumitas= 0
    let estaSiEs = document.querySelector("#auxilioSiFuncionaLloro")

    
    for (let sos = 1; sos <= noSeQueNombrePoner; sos++) {
        sumitas += sos;
        estaSiEs.innerHTML += `${sumitas} + ${sos} = ${ sumitas + sos } <br>`
      }console.log(`${sumitas}`)
    
})//sos auxilio
// Aquí 2 Número Par
let puntoDos = document.querySelector("#formulario2")
puntoDos.addEventListener("submit", (cosas)=> {
    cosas.preventDefault()
    let numeroRecibido =cosas.target.escojaSuNumero.value

if (numeroRecibido == "") {
        console.log("esa no es la idea mor")
} else if (numeroRecibido !== 1) {
        if (numeroRecibido % 2 == 0) {
            console.log("Su número es par")
        } else {
            console.log("Su númro es impar")
        }
    }
if (numeroRecibido >= 1) {
   if(numeroRecibido % 2 == 0) {
    console.log("Su número es par")
    }else {
        console.log("su número es impar")
    }
}else{
    console.log("Por Favor ingrese un número valido")
}
}
)
//Aquí 3
let formulario = document.querySelector("#formulario3")
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    let numeroUsuario = evento.target.edadDel.value
    let genero = evento.target.genero.value

    if (numeroUsuario < 10 && genero === "F") {
        console.log("Reclama un jugo y una pizza Hawaiana")

    } else if (numeroUsuario < 10 && genero === "M") {
        console.log("Reclama un jugo y una pizza de carnes")
    } else if (numeroUsuario > 18 && genero === "F") {
        console.log("Reclama una cerveza y una pizza Hawaiana")
    } else if (numeroUsuario > 18 && genero === "M") {
        console.log("Reclama una cerveza y una pizza de carnes")
    } else if (genero === "M") {
        console.log("Reclama una pizza de carnes")
    } else if (genero === "F") {
        console.log("Reclama una pizza Hawaiana")
    }
})
//Aqui 4
let menuUsuario = []
const menu = [
    { nombre: 'Hamburguesa', precio: 25000 },
    { nombre: 'Pizza', precio: 15000 },
    { nombre: 'Ensalada', precio: 20000 },
    { nombre: 'Ajiaco', precio: 30000 },
    { nombre: 'Helado', precio: 12000 },
    { nombre: 'Jugo', precio: 7000 },
];
let respuestas = document.querySelector("#formulario4")
respuestas.addEventListener("submit", (e) => {
    e.preventDefault()
    let comer = e.target.respuest.value

    let filtrar = menu.filter(notaEditar => notaEditar.nombre == comer)

    menuUsuario.push(filtrar[0])

let precios = 0
menuUsuario.forEach(plato => {
    precios = precios + plato.precio
    console.log(`El Valor total es ${precios}`)
});
})

//5
let formularioNumero = document.querySelector("#formulario5")
formularioNumero.addEventListener("submit", (event) => {
    event.preventDefault()

    let validarNumero = event.target.nuevoNumero.value
    let multiplicacion = event.target.multiplicaciones.value
    let popodiv = document.querySelector("#popo")
    for (let jeje = 1; jeje <= multiplicacion; jeje++) {
        popodiv.innerHTML += `${validarNumero} X ${jeje} = ${ validarNumero * jeje } <br>`
     }

})

//6
let formularioPromedio = document.querySelector("#formulario6")
formularioPromedio.addEventListener("submit", (aaa) => {
    aaa.preventDefault()
    
    let promedioIngresado = aaa.target.promedioDelEstudiante.value
    let precioDelSemestre = 1000000
    let porcentajeDeDescuento ={}

    if (promedioIngresado >= 0 && promedioIngresado <= 5) {
        if (promedioIngresado < 3 && promedioIngresado >= 0 ) {
            console.log(` El Valor de la matricula del estudiante es: $${precioDelSemestre}`)
        }else if (promedioIngresado >4 && promedioIngresado <=5) {
            porcentajeDeDescuento = (precioDelSemestre * 0.5)
            precioDelSemestre = precioDelSemestre - porcentajeDeDescuento
            console.log(`El Valor de la matricula del estudiante es: $${precioDelSemestre}`)
        }else if (promedioIngresado >3 && promedioIngresado <= 4) {
            porcentajeDeDescuento = precioDelSemestre * 0.05
            precioDelSemestre = precioDelSemestre - porcentajeDeDescuento
            console.log(`El Valor de la matricula del estudiante es: $${precioDelSemestre}`)
        }
    }else {
        console.log('Por favor ingrese un número valido')
    }
     
})
//a.	Si el promedio fue menor a 3 no se le descuenta nada.
// b.	Cuando el promedio sea entre 3 y 4 se le descuenta el 5%
// c.	Cuando el promedio sea mayor que 4, se le descuenta 50%
