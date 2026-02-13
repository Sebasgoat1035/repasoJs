// Bases de datos
const baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];

const baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];


// Función que imprime cuando se encuentra el país
function encontrado() {
    document.getElementById("resultado").innerText = "País encontrado";
}


// Buscar en baseDatos2
function busquedaBaseDatos2(pais, callback) {

    if (baseDatos2.includes(pais)) {
        callback();
    } else {
        document.getElementById("resultado").innerText = "Dato no encontrado";
    }
}


// Buscar en baseDatos1
function busquedaBaseDatos1(pais, callbackEncontrado, callbackNoEncontrado) {

    if (baseDatos1.includes(pais)) {
        callbackEncontrado();
    } else {
        callbackNoEncontrado(pais, callbackEncontrado);
    }
}


// Función que inicia la búsqueda (la del botón)
function iniciarBusqueda() {

    const pais = document.getElementById("pais").value;

    busquedaBaseDatos1(
        pais,
        encontrado,
        busquedaBaseDatos2
    );
}
