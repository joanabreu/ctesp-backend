var i =0;
var d = 0.5;
var str ="Hello";

function calcularFinalGrade(practical , theoreticalGrade)
var finalGrade = (practical + theoreticalGrade) /2;
return finalGrade;
}

//alínea 6//Forma Inicial

console.log ("Teste");
function monthByName(monthNumber){

    if(monthNumber == 1){
        console.log("January");
    }else if(monthNumber == 2){
        console.log("February")
    }

    }


/*Avançado
function Mes(a) {
    var Meses = { 1:"Janeiro", 2:"Fevereiro", 3:"Março", 4:"Abril", 5:"Maio", 6:"Junho",7:"Julho",8:"Agosto",9:"Setembro",10:"Outubro",11:"Novembro",12:"Dezembro"}
    return (Meses[a])
}
console.log(Mes(1)*/


//switch//Implementação da Função
function monthByName(monthNumber){

    switch (monthNumber) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        default:
            console.log("N/A");
            break;
    }
}

monthByName(3);
/*Evocar a função*/

/*Alínea7*/

function calculator(operand1, operand2, operador){
    if(operator == '+'){
        console.log(operand1 + operand2);
    }
        
    else if(operator == '-'){
        console.log(operand1 - operand2);
}

    else if(operator == 'x'){
    console.log(operand1 x operand2);
}

    else if(operator == '/'){
    console.log(operand1 / operand2);
}

calculator(2,2, '+');

/*Alínea 8*/
function multipleOfFive(value){
    for (let i = 1; i <= value; i++) {
        if(i%5 == 0){
            console.log(i);
        }
    }        
}

multipleOfFive(20);

/*Alínea 9*/
function sumOf(value){
    var soma = 0;
    for (let i = 1; i <= value; i++) {
        soma = soma + i;
    }
    console.log(soma);
}
sumOf(3);
/*soma= 1 + 2 + 3 + 4 + ... + 100*/

/*Alínea 10*/
function calculateFact(value){
    /*3 x 2 x 1*/
    var fact = 1;
    for (let i = value; i >= 1; i--) {
        fact = fact * i;      
    }
    console.log(fact);
    return fact;
}
/*calculateFact (3); */

var f = calculateFact (3);
console.log("f:" + f);

/*Alínea 11*/
function (){
    
}


