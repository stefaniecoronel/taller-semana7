function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


let contraseña = document.getElementById("");
let repetirContraseña = document.getElementById("");
let registro = document.getElementsByClassName("mb-3");

registro.addEventListener("submit", function(verificación) {
    if (contraseña.value !== repetirContraseña.value) {
        alert("Las contraseñas no coinciden.");
        verificación.preventDefault();
    }
});
