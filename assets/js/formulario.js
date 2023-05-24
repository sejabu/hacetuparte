// Implementacion para validar los datos del formulario //

function validarFormulario() {
    // var formulario = document.getElementsByName("formulario");       //Otra forma para asignar (Me quedo con el de la siguiente linea).
    var formulario = document.forms["formulario"];      // Asignacion para acceder al formulario mas directamente.
    var validacionExistosa = true;                      // Asignacion en true, con el objetivo de que si algun dato no se ingreso cambie a false y se detenga el envio del formulario en el html.
    //console.log("Ingresaste a la funcion...");  // Solo lo coloque para ver si en el html estaba accediendo a la funcion de este .js
    //var nombre = formulario.elements["Nombre"].value;   // Con esa asignacion nos ahorramos acceder en cada ocasion que la necesitemos... Siempre accedemos mediante el name del formulario

    if (formulario.elements["Nombre"].value === "") {   // Verifica si el campo "Nombre" esta vacio
        alert("Tiene que ingresar un nombre para continuar.");  // Alerta sobre el campo vacio
        return validacionExistosa = false;  // Retorna un false para detener el envio del formulario
    }

    // Todas las funciones son similares en la explicacion.

    if (formulario.elements["Apellido"].value === "") {   // Verifica si el campo "Apellido" esta vacio
        alert("Tiene que ingresar un apellido para continuar.");
        return validacionExistosa = false;
    }

    if (formulario.elements["Fecha-Nacimiento"].value === "") {   // Verifica si el campo "Fecha de nacimiento" esta vacio
        alert("Tiene que ingresar una fecha para continuar.");
        return validacionExistosa = false;
    }

    if (formulario.elements["Email"].value === "") {   // Verifica si el campo "Email" esta vacio
        alert("Tiene que ingresar un email para continuar.");
        return validacionExistosa = false;
    }

    if (formulario.elements["Email"].value !== formulario.elements["Email2"].value) {   // Verifica si el campo "Email" coincide con el "Email2" 
        alert("Tiene que coincidir el email para continuar.");
        return validacionExistosa = false;
    }

    if (formulario.elements["Contra"].value === "") {   // Verifica si el campo "Contra" esta vacio
        alert("Tiene que ingresar un password para continuar.");
        return validacionExistosa = false;
    }
    else if (formulario.elements["Contra"].value.length < 8){   // Verifica si el campo "Contra" tiene un minimo de 8 caracteres
        alert("La contraseña debe tener un minimo de 8 caracteres.");
        return validacionExistosa = false;
    }

    // Nota: En el HTML cambie el input de "password" a "text" porque fui bloqueado de Formspree.

    if (formulario.elements["gridCheck"].checked === false) {   // Verifica si el campo "Check" esta "pulsado". En este caso, si el Check no esta "pulsado" entonces su valor seria false.
        alert("Tiene que aceptar los términos y condiciones para continuar.");
        return validacionExistosa = false;
    }

    return validacionExistosa;      // Retorna true al formulario del html, ya que si llego hasta aca significa que todos los datos fueron ingresados correctamente.
}
