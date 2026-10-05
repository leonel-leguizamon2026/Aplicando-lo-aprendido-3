const Tarea = {

    mostrarDetalles() {
        console.log("Nombre:", this.nombre);
        console.log("Descripcion:", this.descripcion);
        console.log("Estado:", this.estado);
        console.log("Dificultad:", this.dificultad);
        console.log("Creacion:", this.creacion);
        console.log("Ultima modificacion:", this.ultimaModificacion);
        console.log("Vencimiento:", this.vencimiento);
    },

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
        this.ultimaModificacion = new Date();
    },

    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
        this.ultimaModificacion = new Date();
    },

    cambiarDescripcion(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
        this.ultimaModificacion = new Date();
    },

    cambiarDificultad(nuevaDificultad) {
        this.dificultad = nuevaDificultad;
        this.ultimaModificacion = new Date();
    }

};

export default Tarea;