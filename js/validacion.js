
 
    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }
    
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }
    
    
        document.getElementById('regBtn').addEventListener('click', function(){
            
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const email = document.getElementById('email').value;
            const password1 = document.getElementById('password1').value;
            const password2 = document.getElementById('password2').value;
            const terminos = document.getElementById('terminos').checked;
            if (nombre && apellido && email && terminos && password1 === password2) {
        
                showAlertSuccess();
            }else { showAlertError();
            
                }
        });


