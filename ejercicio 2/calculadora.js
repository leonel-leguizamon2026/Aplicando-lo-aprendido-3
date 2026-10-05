

class cal{
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
   return this.num1 / this.num2;
  }
}

}

export default cal;