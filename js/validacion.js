function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

<<<<<<< Updated upstream

let contraseña = document.getElementById("password1");
let repetirContraseña = document.getElementById("password2");
let registro = document.getElementsById("regBtn");

registro.addEventListener("submit", function(verificación) {
    if (contraseña.value !== repetirContraseña.value) {
        alert("Las contraseñas no coinciden.");
        verificación.preventDefault();
    }
});
=======
function requisitosRegistro() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;
    
}

if (nombre && apellido && email && password1 && password2 && terminos) {
    showAlertSuccess();
}else { showAlertError();

    }



document.getElementById('regBtn').addEventListener('click', requisitosRegistro);
>>>>>>> Stashed changes
