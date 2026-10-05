import rl from "readline-sync"; 
import { CrearTarea } from "./CrearTarea.js";
import { BuscarTarea, MostrarTareas} from "./FuncionesTareas.js";

const tareas=[];
let op1=0,op2=0


console.log("Por defecto el orden en el que se muestran");
console.log("las tareas es por fecha de creacion");
do{
    //MENU PRINCIPAL
    console.log("              ");
console.log("Hola Leo");
console.log("¿Que desea hacer?");
console.log("[1] ver mis tareas");
console.log("[2] Buscar una tarea");
console.log("[3] Agregar una tarea");
console.log("[0] salir");
op1=rl.questionInt("Ingrese una opcion:  ");
switch(op1){
 
    //MENU VER MIS TAREAS
 case 1:{ do{
console.log("              ");
console.log("¿Que tareas desea ver?");
console.log("[1] Ver TODAS las tareas");
console.log("[2] Ver las tareas PENDIENTES");
console.log("[3] Ver tareas en CURSO");
console.log("[4]Ver tareas TERMINADAS");
console.log("[5]Ver tareas CANCELADAS");
console.log("[0] Volver");
op2=rl.questionInt("Ingrese una opcion:  ");
 
//Submenu 
switch(op2){
case 1:{
    console.log("              ");
    console.log("Estas son todas las tareas: ");

      MostrarTareas(tareas, rl, "Todas");


    break};
case 2:{
    console.log("              ");
 console.log("Estas son todas las tareas PENDIENTES: ");

  
    MostrarTareas(tareas, rl, "Pendiente");



    break};
case 3:{
    console.log("              ");
  console.log("Estas son todas las tareas EN CURSO: ");

   MostrarTareas(tareas, rl, "En curso");


    break};
case 4:{
    console.log("              ");
 console.log("Estas son todas las tareas TERMINADAS: ");

   MostrarTareas(tareas, rl, "Terminada");


    break};
    case 5:{
         console.log("              ");
 console.log("Estas son todas las tareas CANCELADAS: ");

  MostrarTareas(tareas, rl, "Cancelada");


        break};
case 0 :{
  
    break};
    default:{
        console.log("              ");
console.log("Valor invalido");
console.log("ingrese una de las opciones en pantalla");
    break};
} }while(op2!=0)
    break};


//BUSCAR TAREA
case 2:{
  BuscarTarea(tareas,rl);
break};



//CREAR TAREA
case 3:{
    CrearTarea(tareas,rl);
break};
//CONFIGURACION



//SALIR
 case 0:{
console.log("Selecciono Salir");
break};

 default:{
console.log("Valor invalido");
console.log("ingrese una de las opciones en pantalla");
 }
};


}while(op1!=0);
console.log("Saliendo");