function mostrarPersona() {

    const person = {
        name: 'Sebas Agudelo',
        age: 18,
        city: 'Medellín',
        profession: 'Desarrollador'
    };

    // Destructuring
    const { name, age, profession } = person;

    document.getElementById("resultado").innerHTML =
        `Nombre: ${name} <br>
         Edad: ${age} <br>
         Profesión: ${profession}`;
}
