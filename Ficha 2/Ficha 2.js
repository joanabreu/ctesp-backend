//exercício 1
function calculateIMC(weight, height){
    var imc = weight / (height * height);
    if(imc < 18.5){
        console.log("Abaixo do peso");
    }else if(imc >= 18.5 && imc < 25){
        console.log("Peso Normal");
    }

}
calculateIMC(80, 1.8);
calculateIMC(70, 1.5);

//exercício 2
function reverseStr(str){
    //"Hoje é Domingo"
    //["Hoje", "é", "Domingo"]
    var splitted = str.split(" ");
    
        splitted.forEach(item => {
            for (let i = item.length - 1; i >=0; i--) {
                inverted += item[i];
            }
            inverted += " ";
        
        
            //item "Hoje"
        
        //['H']
         
    });
    console.log(inverted);
}

reverseStr("Hoje é Domingo");

//exercício 3

function countVogals(str){
    //Shift + Alt + F
    //identar o código
    var count = 0;
    var vogals = ['a', ]
    for (let i = 0; i <  str.length; i++) {
        //const item = str[i];
        //if(str[i] == "a"){
            //count++;
        //)else if(str[i] == 'e'){
        for (let j = 0; j < vogals.length; j++) {
            if(str[i] == vogals[j]){
                count++;
            }
        }     
        }
        }
        }
    }
countVogals("Hello");

//alínea 4
//alínea 5
function calculateWorkTime(entry, exit){
    //console.log(entry);
    // converte a data para milisegundos desde 1970
    var entryT = entry.getTime();
    var exit = exit.getTime();

    var milisegundos = (exit - entry) / 1000;
    var sec = (miliseconds) % 60;
    var min = (miliseconds / 60) % 60;
    var hours = (miliseconds / 3600) % 24;

    //concatenar uma string
    console.log("H:" + hours + "M:" + min + "S:" + sec);
}

var entry = new Date("October 13, 2019 08:00:00");
var entry = new Date("October 13, 2019 09:00:00");

calculateWorkTime(entry, exit);

console.log(entry);

//alínea 6
function drawRectangle(width, height){
    var ast = '*';
   
    for (let i = 0; i < width; i++) {
        line += ast;
        
    }

    for (let j = 0; j < height; j++) {
        console.log(line);
        
    }
     //responsavel por imprimir uma linha
    //not a number
    //var a5 = ast * 5;
    //console.log(a5);
    //console.log('*****');

}

drawRectangle(5, 10);

//alínea 7
//alínea 8
//alínea 9 a)
//Declaração e inicialização de objectos
var std1 = {name: "Test", number:1, grade:12};
var std2 = {name: "Test1", number:1, grade:2};
var std3 = {name: "Test2", number:1, grade:19};
var std4 = {name: "Test3", number:1, grade:10};
//Declaração e inicialização de um array vazio
var students = [];
//Adicionar um objecto ao array
students.push(std1);
students.push(std2);
students.push(std3);
students.push(std4);
//students.pop();
console.log(students);

fucntion listGrades(array){
    array.forEach(item => {
        console.log(item.grade);
    });
}

listGrades(students);

fucntion showBestGrade (array) {
    var grade = array[0].grade;
    array.forEach(element=>) {
        if(element.grade > grade){
            grade = elemtn.grade;
        }
    });

    return grade;

}
var bestGrade = showBestGrade(students);
console.log ("A mlehor nota foi: " + bestGrade);

showBestGrade(students);