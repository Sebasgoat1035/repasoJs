// funcion que retorna una promesa
function obtenerDoble(numero) {

    // se crea una nueva promesa
    return new Promise(function (resolve) {

        setTimeout(function () {

            resolve(numero * 2);

        }, 200);

    });
}


// funcion async que usa await
async function calcularDoble() {

    let numero = parseFloat(document.getElementById("numero").value);

    let resultado = await obtenerDoble(numero);

    // se muestra el resultado en el html
    document.getElementById("resultado").innerText =
        "El doble es: " + resultado;
}
