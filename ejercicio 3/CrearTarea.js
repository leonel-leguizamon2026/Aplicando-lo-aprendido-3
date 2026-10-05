
import Tarea from "./Tarea.js";

export function CrearTarea(tareas, rl) {

    let nombre;
    let descripcion;
    let estado;
    let dificultad;
    let vencimiento;

    // INGRESAR NOMBRE
    do {
        nombre = rl.question("Ingrese el nombre de la tarea: ");

        if (nombre == "") {
            console.log("El nombre es obligatorio.");
        } else if (nombre.length > 100) {
            console.log("El nombre no puede superar los 100 caracteres.");
        }

    } while (nombre == "" || nombre.length > 100);


    // INGRESAR DESCRIPCIÓN
    do {
        descripcion = rl.question("Ingrese la descripcion de la tarea: ");

        if (descripcion.length > 500) {
            console.log("La descripcion no puede superar los 500 caracteres.");
        }

    } while (descripcion.length > 500);


    // INGRESAR ESTADO
    do {
        console.log("\nEstado de la tarea:");
        console.log("[1] Pendiente");
        console.log("[2] En curso");
        console.log("[3] Terminada");
        console.log("[4] Cancelada");

        estado = rl.questionInt("Seleccione un estado: ");

        if (estado < 1 || estado > 4) {
            console.log("Valor invalido.");
        }

    } while (estado < 1 || estado > 4);


    if (estado == 1) {
        estado = "Pendiente";
    } else if (estado == 2) {
        estado = "En curso";
    } else if (estado == 3) {
        estado = "Terminada";
    } else {
        estado = "Cancelada";
    }


    // INGRESAR DIFICULTAD
    do {
        console.log("\nDificultad:");
        console.log("[1] Facil");
        console.log("[2] Medio");
        console.log("[3] Dificil");

        dificultad = rl.questionInt("Seleccione una dificultad: ");

        if (dificultad < 1 || dificultad > 3) {
            console.log("Valor invalido.");
        }

    } while (dificultad < 1 || dificultad > 3);


    if (dificultad == 1) {
        dificultad = "Facil *";
    } else if (dificultad == 2) {
        dificultad = "Medio **";
    } else {
        dificultad = "Dificil ***";
    }


    // FECHAS
    const creacion = new Date();
    const ultimaModificacion = creacion;


    // VENCIMIENTO
    do {
        vencimiento = rl.question(
            "Ingrese la fecha de vencimiento (DD/MM/AAAA) o presione Enter para dejarla vacia: "
        );

        if (vencimiento !== "") {

            if (
                vencimiento.length !== 10 ||
                vencimiento[2] !== "/" ||
                vencimiento[5] !== "/"
            ) {
                console.log("Formato invalido. Use DD/MM/AAAA.");
            }
        }

    } while (
        vencimiento !== "" &&
        (
            vencimiento.length !== 10 ||
            vencimiento[2] !== "/" ||
            vencimiento[5] !== "/"
        )
    );


    // CREAR UNA NUEVA TAREA A PARTIR DEL PROTOTIPO
    const nuevaTarea = Object.create(Tarea);

    // PROPIEDADES PROPIAS DE LA NUEVA TAREA
    nuevaTarea.nombre = nombre;
    nuevaTarea.descripcion = descripcion;
    nuevaTarea.estado = estado;
    nuevaTarea.dificultad = dificultad;
    nuevaTarea.creacion = creacion;
    nuevaTarea.ultimaModificacion = ultimaModificacion;
    nuevaTarea.vencimiento = vencimiento == "" ? null : vencimiento;


    // AGREGAR LA TAREA AL ARRAY
    tareas.push(nuevaTarea);

    console.log("\nTarea creada correctamente.");
}
