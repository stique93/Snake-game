var numberOfTask = prompt('Какое задание?', 1);
var s = 0;
var v = 0;
var k = 0;
var numberForCycle = 0;
var n = "1"
var composition = 0;

switch(numberOfTask)
{
    case "1":   
        alert("1) Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height), шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s.");
        s = squareOfRectangle(prompt('Высота прямоугольника', 23),prompt('Ширина прямоугольника', 10));
        alert("Площадь прямоугольника: " + s + " см");
    break
    case "2":
        alert("Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v.");
        v = volumeOfCylinder(prompt('Высота цилиндра', 10),prompt('Диаметр цилиндра', 4));
        alert("Объем цилиндра: " + v + " метров кубических");
    break
    case "3":
        alert("У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).");
        k = hypotenuseOfTriangle(prompt('Сторона n', 3),prompt('Сторона m', 4));
        alert("Гипотенуза треугольника: " + k);
    break
    case "4":
        alert("Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.");
        whileCycle();
    break
    case "5":
        alert("Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.");
        whileCycleMultiples();
    break  
    case "6":
        alert("Напишите скрипт, который используя оператор for выполнит два предыдущих задания.");
        forCycle();
    break  
    case "7":
        alert("Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, который в зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)");
        switchCycle();
    break
    case "8":
        alert("Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»");
        hello2();
    break
    case "9":
        alert("Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.");
        composition = mul(prompt('Введите n', 10),prompt('Введите m', 10));
        alert("Произведение двух чисел: " + composition);
    break
    case "10":
        alert("Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка");
        var str = prompt('Введите строку', "");
        var countOfWord = prompt('Введите количество повториений', 2);
        repeat(str, countOfWord);
    break
    case "11":
        alert("Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных");
        var red = prompt('Введите интенсивность красного', "");
        var green = prompt('Введите интенсивность зеленого', "");
        var blue = prompt('Введите интенсивность синего', "");
        rgb(red,green,blue);
    break
    case "12":
        alert("Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).")
        avg();
    break
    case "13":
        alert("Создайте функцию m(a,b) оболочку для mul(). m() должна принимать два аргумента а возвращать результат работы mul() с этими двумя аргументами После выполнения задания поэкспериментируйте, создайте функцию log(), которая будет принимать одно значение, а вызывать  console.log() с этим значением.");
        m(prompt('Введите первое число', ""),prompt('Введите второе число', ""));
    break
}


function squareOfRectangle(height,width)
{
    //alert("Площадь прямоугольника: " + height*width + " см");
    return height*width;
}
function volumeOfCylinder(heightC,dC)
{
    return Math.PI*(Math.pow((dC/2),2))*heightC;
}
function hypotenuseOfTriangle(n,m)
{
    return Math.sqrt(Math.pow(n,2) + Math.pow(m,2));
}

function whileCycle()
{
    numberForCycle = 45;
    while(numberForCycle < 68)
    {
        console.log(numberForCycle);
        numberForCycle++;
    }
}

function whileCycleMultiples()
{
    numberForCycle = 50;
    while(numberForCycle < 680)
    {
        console.log(numberForCycle);
        numberForCycle +=10;
    }
}

function forCycle()
{
    for(var i = 45;i<68;i++)
    {
        console.log(i);  
    }
    console.log("________________________________________________________");
    for(var l = 50; l<680; l += 10)
    {
        console.log(l);  
    }
}

function switchCycle()
{
    n = prompt('Введите целое число:', 1)
    switch(n)
    {
        case "1": alert("Один");break
        case "2": alert("Два");break
        case "3": alert("Три");break
        case "4": alert("Четыре");break
        case "5": alert("Пять");break
        case "6": alert("Шесть");break
        case "7": alert("Семь");break
        case "8": alert("Восемь");break
        case "9": alert("Девять");break
        default: alert("Пошел нахрен ссаный ублюдок");        
    }
}

function hello2()
{
  var name = prompt('Введите имя:', "");
  if(name != "") alert("Привет, " + name);
  else alert("Привет, гость");
}

function mul(n,m)
{
    return n*m;
}

function repeat(str,countOfWord)
{
    var i = 0;
    var string = "";
    while(i < countOfWord)
    {
        string +=str;
        i++;
    }
    alert(string);
}

function rgb(red,green,blue)
{
    var array = [red,green,blue];
    for(var i = 0; i < array.length; i++){if (array[i] === "") array[i] = "0"}
    alert("rgb("+ array[0]  + "," + array[1]  + "," + array[2]  + ")");
}
function avg()
{
    var midCount = 0
    var stringOfNumber = prompt('Введите числовую строку:', "");
    var arrayOfNumbers = stringOfNumber.split(''); 
    for(var i = 0; i < arrayOfNumbers.length; i++)
    {
        midCount = midCount + parseInt(arrayOfNumbers[i],10);
    }
    midCount = midCount/arrayOfNumbers.length;
    alert(midCount);
}
function m(a,b)
{
    //mul(n,m)
    log(mul(a,b));
}
function log(x)
{
    console.log(x);
}