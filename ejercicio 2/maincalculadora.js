import rl from "readline-sync";
import cal from "./calculadora.js";

 let num1 = rl.questionInt("Ingrese el primer numero: ");
 let num2 = rl.questionInt("Ingrese el segundo numero: ");

 const calculadora = new cal(num1, num2);
console.log(calculadora.sumar());
console.log(calculadora.restar());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());