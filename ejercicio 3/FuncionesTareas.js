// BUSCAR TAREA
export function BuscarTarea(tarea, rl) {

    if (tarea.length == 0) {

        console.log("NO HAY TAREAS");

    } else {

        let busqueda = rl.question(
            "Introduce el titulo de una Tarea para buscarla: "
        );

        let encontrada = false;

        console.log("       ");
        console.log("RESULTADOS DE LA BUSQUEDA: ");

        for (let i = 0; i < tarea.length; i++) {

            if (
                tarea[i].nombre
                    .toLowerCase()
                    .includes(busqueda.toLowerCase())
            ) {

                console.log("TAREA [", i + 1, "] ", tarea[i].nombre);

                encontrada = true;
            }
        }

        if (encontrada == true) {

            console.log(" ");
            console.log("¿Deseas ver los detalles de alguna?");

            let Detalle = rl.questionInt(
                "Introduce el numero para verla o 0 para volver: "
            );

            if (Detalle != 0) {
                MostrarDetalles(Detalle, tarea, rl);
            }

        } else {

            console.log(" ");
            console.log("No hay tareas relacionadas con la búsqueda.");
        }
    }
}


// MOSTRAR DETALLES
export function MostrarDetalles(Indice, tarea, rl) {

    if (Indice == 0) {
        return;
    }

    if (tarea.length == 0) {

        console.log("NO HAY TAREAS");
        console.log("         ");

    } else if (Indice < 1 || Indice > tarea.length) {

        console.log("Valor invalido.");

    } else {

        // Ahora usamos el método del prototipo
        tarea[Indice - 1].mostrarDetalles();
    }

    console.log(
        "Si desea editar la tarea presione E, sino 0 para volver"
    );

    let edit = rl.question("Ingrese una opcion:  ");

    if (edit == "E" || edit == "e") {
        EditarTarea(Indice, tarea, rl);
    }
}


// INDICE
export function Indice(Indice, Estado, tarea, rl) {

    if (Indice == 0) {
        return;
    }

    if (Indice < 1 || Indice > tarea.length) {

        console.log(
            "Valor invalido. Ingrese uno de los numeros mostrados en pantalla."
        );

    } else if (tarea[Indice - 1].estado != Estado) {

        console.log(
            "Valor invalido. Ingrese uno de los numeros mostrados en pantalla."
        );

    } else {

        MostrarDetalles(Indice, tarea, rl);
    }
}


// EDITAR TAREA
export function EditarTarea(Indice, tarea, rl) {

    console.log("              ");
    console.log(
        "Si desea mantener los atributos de la tarea, presione Enter sin escribir nada"
    );


    // EDITAR NOMBRE
    let NuevoNombre = rl.question(
        "Ingrese el nuevo nombre de la tarea: "
    );

    if (NuevoNombre == "") {

        console.log("Se mantiene el nombre actual");

    } else if (NuevoNombre == " ") {

        console.log(
            "El titulo no puede quedar vacio. No se actualizo el nombre"
        );

    } else if (NuevoNombre.length <= 100) {

        console.log("Nombre Actualizado");

        tarea[Indice - 1].cambiarNombre(NuevoNombre);

    } else {

        console.log(
            "El titulo no puede superar los 100 caracteres, No se actualizo el nombre de la tarea"
        );
    }


    // EDITAR DESCRIPCION
    let NuevaDescripcion = rl.question(
        "Ingrese la nueva descripcion de la tarea: "
    );

    if (NuevaDescripcion == " ") {

        console.log("Descripcion eliminada");

        tarea[Indice - 1].cambiarDescripcion("");

    } else if (NuevaDescripcion != "") {

        if (NuevaDescripcion.length <= 500) {

            console.log("Descripcion Actualizada");

            tarea[Indice - 1].cambiarDescripcion(NuevaDescripcion);

        } else {

            console.log(
                "La descripcion no puede superar los 500 caracteres, No se actualizo la descripcion de la tarea"
            );
        }
    }


    // EDITAR ESTADO
    let NuevoEstado;

    do {

        console.log("              ");
        console.log("Ingrese el nuevo estado de la tarea:");

        NuevoEstado = rl.question(
            "1=Pendiente, 2=En curso, 3=Terminada, 4=Cancelada: "
        );

        if (NuevoEstado == "") {

            console.log("              ");
            console.log("Se mantiene el estado actual");
            break;

        } else if (NuevoEstado == " ") {

            console.log("El estado no puede quedar vacio.");

        } else if (
            NuevoEstado != "1" &&
            NuevoEstado != "2" &&
            NuevoEstado != "3" &&
            NuevoEstado != "4"
        ) {

            console.log(
                "Valor invalido. Ingrese 1, 2, 3 o 4."
            );
        }

    } while (
        NuevoEstado != "1" &&
        NuevoEstado != "2" &&
        NuevoEstado != "3" &&
        NuevoEstado != "4"
    );


    if (NuevoEstado == "1") {

        tarea[Indice - 1].cambiarEstado("Pendiente");
        console.log("Estado Actualizado");

    } else if (NuevoEstado == "2") {

        tarea[Indice - 1].cambiarEstado("En curso");
        console.log("Estado Actualizado");

    } else if (NuevoEstado == "3") {

        tarea[Indice - 1].cambiarEstado("Terminada");
        console.log("Estado Actualizado");

    } else if (NuevoEstado == "4") {

        tarea[Indice - 1].cambiarEstado("Cancelada");
        console.log("Estado Actualizado");
    }


    // EDITAR DIFICULTAD
    console.log("              ");
    console.log("Ingrese la nueva dificultad de la tarea:");

    let NuevaDificultad = rl.question(
        "1=Facil, 2=Medio, 3=Dificil: "
    );

    if (NuevaDificultad == "") {

        console.log("Se mantiene la dificultad actual");

    } else if (NuevaDificultad == " ") {

        console.log(
            "La dificultad no puede quedar vacia. No se actualizo"
        );

    } else if (NuevaDificultad == "1") {

        tarea[Indice - 1].cambiarDificultad("Facil *");
        console.log("Dificultad Actualizada");

    } else if (NuevaDificultad == "2") {

        tarea[Indice - 1].cambiarDificultad("Medio **");
        console.log("Dificultad Actualizada");

    } else if (NuevaDificultad == "3") {

        tarea[Indice - 1].cambiarDificultad("Dificil ***");
        console.log("Dificultad Actualizada");

    } else {

        console.log(
            "Valor invalido. No se actualizo la dificultad."
        );
    }


    // EDITAR VENCIMIENTO
    console.log("              ");

    let NuevoVencimiento;

    do {

        NuevoVencimiento = rl.question(
            "Ingrese la fecha de vencimiento (DD/MM/AAAA), Enter para mantener o espacio para borrar: "
        );

        if (NuevoVencimiento == "") {

            console.log("              ");
            break;

        } else if (NuevoVencimiento == " ") {

            tarea[Indice - 1].vencimiento = "";
            console.log("Fecha de vencimiento eliminada");
            break;

        } else if (NuevoVencimiento.length != 10) {

            console.log("Formato invalido. Use DD/MM/AAAA");

        } else if (
            NuevoVencimiento[2] != "/" ||
            NuevoVencimiento[5] != "/"
        ) {

            console.log("Formato invalido. Use DD/MM/AAAA");

        } else {

            tarea[Indice - 1].cambiarVencimiento(NuevoVencimiento);
            console.log("Fecha de vencimiento actualizada");
            break;
        }

    } while (true);


    // ULTIMA MODIFICACION
    tarea[Indice - 1].ultimaModificacion = new Date();

    console.log("              ");
}


// MOSTRAR TAREAS
export function MostrarTareas(tareas, rl, Estado) {

    if (tareas.length == 0) {

        console.log("NO HAY TAREAS");

    } else {

        if (Estado == "Todas") {

            for (let i = 0; i < tareas.length; i++) {

                console.log(
                    "TAREA [",
                    i + 1,
                    "] ",
                    tareas[i].nombre
                );
            }

        } else {

            for (let i = 0; i < tareas.length; i++) {

                if (tareas[i].estado == Estado) {

                    console.log(
                        "TAREA [",
                        i + 1,
                        "] ",
                        tareas[i].nombre
                    );
                }
            }
        }

        console.log("Desea ver los detalles de alguna");

        let Detalle = rl.questionInt(
            "Introduce el numero para verla o 0 para volver: "
        );

        if (Detalle != 0) {

            if (Estado == "Todas") {

                MostrarDetalles(Detalle, tareas, rl);

            } else {

                Indice(Detalle, Estado, tareas, rl);
            }
        }
    }
}