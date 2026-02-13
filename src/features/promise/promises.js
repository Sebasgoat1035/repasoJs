// Función que crea la promesa
function verificarVocal(cadena) {

    return new Promise(function (resolve, reject) {

        let ultimoCaracter = cadena.charAt(cadena.length - 1);

        let vocales = "aeiouAEIOU";

        if (vocales.includes(ultimoCaracter)) {
            resolve(ultimoCaracter);
        } else {
            reject("El caracter no es una vocal");
        }

    });
}


// Función que se ejecuta al hacer clic
function verificarCadena() {

    let cadena = document.getElementById("cadena").value;

    verificarVocal(cadena)
        .then(function (resultado) {
            document.getElementById("resultado").innerText =
                "Termina en vocal: " + resultado;
        })
        .catch(function (error) {
            document.getElementById("resultado").innerText = error;
        });
}
