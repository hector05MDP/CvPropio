// enlaces nav
const enlaceNav = document.querySelectorAll(".navegacion a");
enlaceNav[0].href = "#experiencias";

// formulario de contacto
// const formularioDatos = {
//     nombre: '',
//     telefono: '',
//     email: '',
//     mensaje: ''
// }

// const nombre = document.querySelector('#nombre');
// const telefono = document.querySelector('#telefono');
// const email = document.querySelector('#email');
// const mensaje = document.querySelector('#mensaje');

// nombre.addEventListener('input', textoCampo);
// telefono.addEventListener('input', textoCampo);
// email.addEventListener('input', textoCampo);
// mensaje.addEventListener('input', textoCampo);

// function textoCampo(e) {
//     formularioDatos[e.target.id] = e.target.value;
// }


// const formulario = document.querySelector('.formulario');
// formulario.addEventListener('submit', function(evento) {
//     evento.preventDefault();

//     const {nombre, telefono, correoElectronico, mensaje} = formularioDatos;
    
//     if(nombre === '' || telefono === '' || correoElectronico === '' || mensaje === '') {
//         mostrarAlerta('Todos los datos son obligatorios.', true);

//         return; 
//     }
    
//         mostrarAlerta('Mensaje enviado correctamente.');
// });

// function mostrarAlerta(mensaje, error = null) {
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;

//     if(error) {
//         alerta.classList.add('error');
//     } else {
//         alerta.classList.add('correcto')
//     }

//     formulario.appendChild(alerta);

//     setTimeout(() => {
//         alerta.remove();
//     }, 5000);
// }