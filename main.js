// задача 1
function speed(V,flag){
    if(flag===1){
        document.getElementById("m/s").innerHTML = V / 3.6
        document.getElementById("begin1").innerHTML = V
    }
    else{
        document.getElementById("km/h").innerHTML = V * 3.6
        document.getElementById("begin2").innerHTML = V
    }
}
// задача 2
function triangle(a,b,c){
    var a = Number (document.getElementById("a").value);
    var b = Number (document.getElementById("b").value);
    var c = Number (document.getElementById("c").value);
    var ok;
    if ( ( a > 0 ) && ( b > 0 ) && ( c > 0) && ( ( a + b > c ) && ( b + c > a ) && ( a + c > b ) ) ) {
        var p = (a + b + c);
        var s = Math.sqrt(p * (p - a) * (p - b) * (p - c)); 
        // ok = document.getElementById('ok').innerHTML ="Треугольник существует <br> Периметр = " + p + " <br>  Площадь = " + s + "<br> Соотношение = " + (p/s);
        ok = document.getElementById('ok').innerHTML =`Треугольник существует <br> Периметр ${p} <br>  Площадь = ${s} <br> Соотношение = ${(p/s)}`
        } 
    else {
        ok = document.getElementById('ok').innerHTML ="Треугольника не существует";
    }
}
// задача 3

function fizzbuzz(fu){
    var fu = Number (document.getElementById("fu").value);
    var pr = "";
    for (var i=0; i<fu; i++ )
    {
        if((i % 5!=0)&& (i % 2==0) || (i==0)){
            pr += i+" buzz <br>"
        }
        else if(i%5==0){
            pr += i+" fizzbuzz <br>"
        }
        else if(i%2==1){
            pr += i +" fizz <br>"
        } 
    }
    document.getElementById('fizzbuzz').innerHTML = pr;
}
// задача 4
function elka(sym){
    var sym = Number (document.getElementById("sym").value);
    var pr = "";
    var let;
    for (var i=0; i<=sym; i++ )
    {
        if(i % 2==0){
            let = "#"
        }
        else if(i%2==1){
            let = "*"
        } 
        for(var j=0;j<i;j++){
            pr+=let
        }
        pr+="<br>"
    }
    pr+="||";
    document.getElementById('elka').innerHTML = pr;
}

// задача 5
var randsym;
function rund() {
    randsym = Math.floor(Math.random()*100);
    console.log(randsym)
}
function ugadaika(num){
    var num = Number (document.getElementById("num").value);
    if(typeof(randsym)!="number"){
        document.getElementById('otvet').innerHTML = "загадайте число";
    }
    else {
        if(num > randsym){
        document.getElementById('otvet').innerHTML = "ваше число больше";
        }
        else if(num < randsym){
            document.getElementById('otvet').innerHTML = "ваше число меньше";
        }
        else {
            document.getElementById('otvet').innerHTML = "угадано";
        }
    }
}

// задача 6
function delenie(n,x,y){
    var n = Number (document.getElementById("n").value);
    var x = Number (document.getElementById("x").value);
    var y = Number (document.getElementById("y").value);
    var truefalse;
    if ( ( n > 0 ) && ( x > 0 ) && ( y > 0) ) {
        if(n%x==0 && n%y==0){
            truefalse = document.getElementById('truefalse').innerHTML ="n = " + n + " x = " + x + " y = " + y + "=>  true";
        }
        else{
            truefalse = document.getElementById('truefalse').innerHTML ="n = " + n + " x = " + x + " y = " + y + "=> false";
        }
        } 
    else {
        truefalse = document.getElementById('truefalse').innerHTML =" числа меньше 0 или равны ему";
    }
}

// задача 7
function month(month){
    var month = Number (document.getElementById("month").value);
    var kvartal;
    if((month>=1 && month<=12)&&(month%1==0)){
        if (month >= 1 && month <= 3){
            kvartal = document.getElementById('kvartal').innerHTML ="месяц "+ month + " => 1 квартал";
        }
        else if (month >= 4 && month <= 6){
            kvartal = document.getElementById('kvartal').innerHTML ="месяц "+ month + " => 2 квартал";
        } 
        else if (month >= 7 && month <= 9){
            kvartal = document.getElementById('kvartal').innerHTML ="месяц "+ month + " => 3 квартал";
        } 
        else{
            kvartal = document.getElementById('kvartal').innerHTML ="месяц "+ month + " => 4 квартал";
        } 
    }
    else{
        kvartal = document.getElementById('kvartal').innerHTML ="число не соответствует месяцу";
    }
}

// задача 2
function absValue(startnum){
    var startnum = Number (document.getElementById("startnum").value);
    var absValue;
    if(startnum >= 0){
        absValue = document.getElementById('absValue').innerHTML =`absValue(${startnum}) -> ${startnum}`;
    }
    else{
        absValue = document.getElementById('absValue').innerHTML =`absValue(${startnum}) -> ${-startnum}`;
    }
}

// задача 3
function dannie(studentnum){
    var studentnum = Number (document.getElementById("studentnum").value);
    var dannie;
    let student1 = {
        group: 201,
        last_name: "Иванов",
        first_name: "Иван"
        };
    let student2 = {
        group: 203,
        last_name: "Сергеев",
        first_name: "Сергей"
        };
    let student3 = {
        group: 206,
        last_name: "Кириллов",
        first_name: "Кирилл"
        };
    if(studentnum == 1){
        dannie = document.getElementById('dannie').innerHTML =`Список свойств: ${Object.keys(student1)}<br>
        Студент ${student1.first_name} ${student1.last_name} учится в ${student1.group} группе`;
    }
    else if(studentnum == 2){
        dannie = document.getElementById('dannie').innerHTML =`Список свойств: ${Object.keys(student2)}<br>
        Студент ${student2.first_name} ${student2.last_name} учится в ${student2.group} группе`;
    }
    else if(studentnum == 3){
        dannie = document.getElementById('dannie').innerHTML =`Список свойств: ${Object.keys(student3)}<br>
        Студент ${student3.first_name} ${student3.last_name} учится в ${student3.group} группе`;
    }
    else{
        dannie = document.getElementById('dannie').innerHTML ="Такой номер отсутствует"
    }
}

// задача 4
function Randomnum(min, max) {
    var min = Number (document.getElementById("min").value);
    var max = Number (document.getElementById("max").value);
    let rund = Math.floor(Math.random()*(max - min - 1) + min + 1);
    var Randomnum;
    Randomnum = document.getElementById('Randomnum').innerHTML =`randomNumber(${min}, ${max}) -> ${rund}`
}

// задача 5
function ValuesArray(mas) {
    var mas = Number (document.getElementById("mas").value);
    let Array = [1,2,3,4,5,6,7];
    let NewArray = [];
    var ValuesArray;
    for (let i = 0; i < mas; i++) {
        NewArray.push(Array[Math.floor(Math.random()*Array.length)]);
    }
    ValuesArray = document.getElementById('ValuesArray').innerHTML =`Array([${Array}], ${mas}) ->[${NewArray}]`;
}
