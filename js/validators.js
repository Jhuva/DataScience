const datos = {
    correo: ''
}

const correo = document.querySelector('#correo');
const formulario = document.querySelector('.form-register')

correo.addEventListener('input', leerTexto);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const { correo } = datos;

    if( correo === '' ) {
        mostrarAlerta('Escribe tu correo electronico', true)
        return;
    }

    if ( !isValidEmail() ) {
        mostrarAlerta('Escribe correctamente su correo electrónico', true)
        return;
    }
    
    window.location.href="./pages/registerNombreCorreo.html";

})

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('DIV');
    alerta.textContent = mensaje;

    if( error ) {
        alerta.classList.add('form-register__error');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

let isValidEmail = function () {
    let email = document.getElementById('correo');
    return /^\w+([\.\+\-\_]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)
}