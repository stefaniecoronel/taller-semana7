function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


let contraseña = document.getElementById("password1");
let repetirContraseña = document.getElementById("password2");
let registro = document.getElementsById("regBtn");

registro.addEventListener("submit", function(verificación) {
    if (contraseña.value !== repetirContraseña.value) {
        alert("Las contraseñas no coinciden.");
        verificación.preventDefault();
    }
});
