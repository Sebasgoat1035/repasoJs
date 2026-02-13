// cargar datos al iniciar
document.addEventListener("DOMContentLoaded", showData);

let editIndex = null;

// validar formulario
function validarFormulario() {

    let email = document.getElementById("email").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let documento = document.getElementById("documento").value.trim();

    if (email === "" || nombre === "" || documento === "") {
        alert("Completa todos los campos");
        return false;
    }

    if (!email.includes("@")) {
        alert("Correo no válido");
        return false;
    }

    return true;
}

// mostrar datos
function showData() {

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    let html = "";

    listData.forEach(function (element, index) {
        html += `
            <tr>
                <td>${element.email}</td>
                <td>${element.nombre}</td>
                <td>${element.documento}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="editData(${index})">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteData(${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("tableBody").innerHTML = html;
}

// agregar datos
function addData() {

    if (!validarFormulario()) return;

    let email = document.getElementById("email").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let documento = document.getElementById("documento").value.trim();

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    // VALIDAR DUPLICADOS
    let existe = listData.some(function (item) {
        return item.email === email || item.documento === documento;
    });

    if (existe) {
        alert("El correo o el documento ya existen");
        return;
    }

    listData.push({
        email: email,
        nombre: nombre,
        documento: documento
    });

    localStorage.setItem("listData", JSON.stringify(listData));

    showData();
    limpiarFormulario();
}

// eliminar registro
function deleteData(index) {

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    listData.splice(index, 1);

    localStorage.setItem("listData", JSON.stringify(listData));

    showData();
}

// editar registro
function editData(index) {

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    document.getElementById("email").value = listData[index].email;
    document.getElementById("nombre").value = listData[index].nombre;
    document.getElementById("documento").value = listData[index].documento;

    editIndex = index;

    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("btnUpdate").style.display = "block";
}

// actualizar registro
document.getElementById("btnUpdate").addEventListener("click", function () {

    if (!validarFormulario()) return;

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    let email = document.getElementById("email").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let documento = document.getElementById("documento").value.trim();

    // VALIDAR DUPLICADOS EXCLUYENDO EL ACTUAL
    let existe = listData.some(function (item, i) {
        return i !== editIndex &&
            (item.email === email || item.documento === documento);
    });

    if (existe) {
        alert("El correo o el documento ya existen");
        return;
    }

    listData[editIndex] = {
        email: email,
        nombre: nombre,
        documento: documento
    };

    localStorage.setItem("listData", JSON.stringify(listData));

    showData();
    limpiarFormulario();

    document.getElementById("btnAdd").style.display = "block";
    document.getElementById("btnUpdate").style.display = "none";
});

// limpiar formulario
function limpiarFormulario() {
    document.getElementById("email").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("documento").value = "";
}
