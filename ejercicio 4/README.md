### EJERCICIO 2:
 Se utilizo la programacion orientada a objetos basada en cclases.

## Caracteristicas de la OOP utilizadas:
 1)Abstraccion: el programa representa una "cal"culadora mediante un objeto que contiene los datos necesarios (num1 y num2) y las operaciones que puede realizar sobre ellos,La clase "cal" contiene los dos numeros como atributos y mediante el constructor recibe esos valores,y las operaciones se encuentran definidas como metodos del objeto:
    
    class "cal"{
 num1;
 num2;
 constructor(num1, num2){
  this.num1 = num1;
  this.num2 = num2;
 }
sumar(){
  return this.num1 + this.num2;
 }
 restar(){
  return this.num1 - this.num2;
 }
multiplicar(){
  return this.num1 * this.num2;
 }
dividir(){
  if(this.num2 === 0){
   return "No se puede dividir entre cero";
  }else{
   return this.num1 / this.num2;}}}
 Para realizar por ejemplo una suma no es necesario conocer como se realiza internamente la operacion, desde el programa principal simplemente se utiliza:
   console.log("cal"culadora.sumar());
   Esto pone el foco en que hace el objeto y no en como realiza internamente cada operacion.



 2)Encapsulamiento: los datos (num1 y num2) y los metodos(sumar(),restar(),multiplicar() ydividir()) relacionados con la "cal"culadora se encuentran agrupados dentro de la clase "cal".

  Podemos decir que la "cal"culadora reune los datos y las operaciones que trabajan sobre esos datos dentro de un mismo objeto.
  
3)Moduaridad: el programa esta dividido en diferentes archivos, cada uno con una responsabilidad determinada.
 -"cal"culadora.js contiene la clase "cal" y sus operaciones.
 -main"cal"culadora.js se encarga de solicitar los numeros al usuario, crear el objeto y utilizar sus metodos.
    Esto permite separar la implementacion de la "cal"culadora del codigo encargado de interactuar con el usuario.

## Caracteristicas de la OOP  no utilizadas:
1)Polimorfismo: se trabaja con un tipo de objeto, que es la calculadora creada a partir de la clase "cal". No existen diferentes tipos de objetos que respondan de distintas formas ante un mismo mensaje.
   Cuando por ejemplo se utiliza "cal"culadora.sumar()" se esta utilizando el mismo metodo definido en ""cal"".

2)Herencia: la "cal"culadora no necesita obtener atributos o comportamientos de otro objeto o clase. Existe una unica clase, "cal", que contiene los atributos y metodos necesarios para resolver el problema. No se creo una segunda clase que herede de "cal".
  
3)Principio de ocultacion: no existe una restriccion que impida acceder directamente a ellos desde fuera del objeto.
 num1 y num2 son atributos publicos, es decir, que se puede modificar directamente su estado interno





 ### EJERCICIO 3:
 Se utilizo la programacion orientada a objetos basado en prototipos.

 # Caracteristicas de OOP utilizadas:
 1)Abstraccion: para representar una tarea mediante un objeto que contiene los datos y comportamientos necesarios para trabajar con ella se definieron metodos relacionados con las tareas, como por ejemplo:

mostrarDetalles()
cambiarEstado()
cambiarNombre()
cambiarDescripcion()
cambiarDificultad()

 Desde "FuncionesTareas" se puede cambiar el estado de una tarea utilizando:
-tarea[Indice - 1].cambiarEstado("Terminada");
Sin necesidad de repetir las instrucciones que realizan el cambio y actualizan la fecha.
  Esto permite utilizar el comportamiento del objeto sin tener que conocer todos los detalles de su implementacion interna.
 2)Encapsulamineto: los datos y comportamientos relacionados con una tarea se encuentran agrupados dentro del objeto Tarea.
   Dentro de "Tarea.js" se encuentran tanto las operaciones que puede realizar una tarea como los datos sobre los que trabajan dichas operaciones, por ejemplo:
   const Tarea = {
    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
        this.ultimaModificacion = new Date();
    },
    cambiarDescripcion(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
        this.ultimaModificacion = new Date();
    }};

    De esta forma, las operaciones relacionadas con una tarea estan agrupadas dentro de su prototipo.

 3)Herencia: En "Tarea.js" se creo el objeto "Tarea", que funciona como prototipo y contiene los metodos que pueden utilizar las tareas:
  const Tarea = {
     mostrarDetalles() {
     ...},
    cambiarEstado(nuevoEstado) {
    ...},
    cambiarNombre(nuevoNombre) {
    ...}};
   
   -Para crear una nueva tarea se utiliza:
const nuevaTarea = Object.create(Tarea);
 De esta manera "Tarea" pasa a ser el prototipo de "nuevaTarea", permitiendo que la nueva tarea utilice los metodos definidos en "Tarea" por ejemplo:
nuevaTarea.mostrarDetalles();
-Esto permite reutilizar los comportamientos definidos en el prototipo sin tener que copiarlos en cada nueva tarea.

 4)Modularidad: el programa fue dividido en diferentes archivos, separando las responsabilidades,
la estructura del programa es:
-Main.js
-CrearTarea.js
-Tarea.js
-FuncionesTareas.js
 "Tarea.js" contiene el prototipo Tarea y sus metodos.
"CrearTarea.js" se encarga de solicitar los datos y crear nuevas tareas.
"FuncionesTareas.js" contiene las funciones para buscar, mostrar y editar tareas.
"Main.js" se encarga principalmente del menu y del flujo general del programa.

Esto facilita la organizacion y el mantenimiento del programa.



 ## Caracteristicas de OOP no utilizadas:
 1)Polimorfismo: En este programa solamente se trabaja con un tipo de objeto principal, que es la tarea creada a partir del prototipo "Tarea". No existen diferentes tipos de tareas que implementen un mismo metodo de manera diferente.
 Por ejemplo, todas las tareas utilizan el mismo metodo:
-tarea.mostrarDetalles();
Ademas no existen diferentes objetos que tengan una implementacion distinta de mostrarDetalles().

 2)Principio de ocultacion: las propiedades de las tareas pueden ser accedidas y modificadas directamente desde otras partes del programa. Por ejemplo, se puede modificar directamente la propiedad vencimiento sin utilizar un metodo del objeto
