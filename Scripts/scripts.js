function ValidaciónNombre() {
    let x = document.forms["Inscripción a showroom"]["Nombre"].value;
    if (x == "") {
        alert("Debe completar el campo Nombre");
        return false;
    }
}
function ValidaciónApellido() {
    let x = document.forms["Inscripción a showroom"]["Apellido"].value;
    if (x == "") {
        alert("Debe completar el campo Apellido");
        return false;
    }
}
function ValidaciónTeléfono() {
    let x = document.forms["Inscripción a showroom"]["Teléfono"].value;
    if (x == "") {
        alert("Debe completar el campo Teléfono");
        return false;
    }
}
function ValidaciónCorreo() {
    let x = document.forms["Inscripción a showroom"]["Correo"].value;
    if (x == "") {
        alert("Debe completar el campo Correo electrónico");
        return false;
    }
}