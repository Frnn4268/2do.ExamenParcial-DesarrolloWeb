document.addEventListener('DOMContentLoaded', function () {
    
    const formulario = document.getElementById('formulario');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const edadInput = document.getElementById('edad');
    const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
    const guardarButton = document.getElementById('guardar');

    guardarButton.addEventListener('click', function () {
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const edad = edadInput.value;

        const fila = tabla.insertRow();
    
        const celdaNombre = fila.insertCell(0);
        const celdaApellido = fila.insertCell(1);
        const celdaEdad = fila.insertCell(2);

        celdaNombre.innerHTML = nombre;
        celdaApellido.innerHTML = apellido;
        celdaEdad.innerHTML = edad;

        nombreInput.value = '';
        apellidoInput.value = '';
        edadInput.value = '';

        event.preventDefault();
    });
});
