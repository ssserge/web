/*var f = document.getElementById();
var f = document.getElementById();
var f = document.getElementById();

function sum() {
    d.innerHTML = Number(f.value) + Number(s.value);
}

function sub() {
    d.innerHTML = Number(f.value) - Number(s.value);
}

function mul() {
    d.innerHTML = Number(f.value) * Number(s.value);
}

function dev() {
    d.innerHTML = Number(f.value) / Number(s.value);
}

document.getElementById("sum").onclick = sum;
document.getElementById("sub").onclick = sub;
document.getElementById("mul").onclick = mul;
document.getElementById("dev").onclick = dev;*/
////////////////////////////////////////////////////////
var textBox = document.getElementById("text");

var firstNumber;
var operation;

function addNum(namber) {    
    if ((textBox.value == 0) && (textBox.value.indexOf(".") == -1)) { 
    textBox.value = namber;
    } else {
        textBox.value = textBox.value + namber;
    }
    document.getElementById("myaudio").play ();
}

function operationConfirm(op) {
    operation = op;
    firstNumber = textBox.value;
    textBox.value = "";
    document.getElementById("myaudio").play ();    
}

document.getElementById("zero").onclick = function () {
    addNum(0);
}
document.getElementById("one").onclick = function () {
    addNum(1);
}
document.getElementById("two").onclick = function () {
    addNum(2);
}
document.getElementById("three").onclick = function () {
    addNum(3);
}
document.getElementById("four").onclick = function () {
    addNum(4);
}
document.getElementById("five").onclick = function () {
    addNum(5);
}
document.getElementById("six").onclick = function () {
    addNum(6);
}
document.getElementById("seven").onclick = function () {
    addNum(7);
}
document.getElementById("eight").onclick = function () {
    addNum(8);
}
document.getElementById("nine").onclick = function () {
    addNum(9);
}

document.getElementById("point").onclick = function () {    
    if (textBox.value.length == 0) {
        textBox.value = "0.";
    } else {
        if (textBox.value.indexOf(".") == -1) {
            textBox.value += ".";
        }
    }
    document.getElementById("myaudio").play ();
}

document.getElementById("divided").onclick = function () {
    operationConfirm("/");
    /*if(operationConfirm === "/" && textBox.value === "0") {
        display.innerHTML = error;
        alert(error);
    }*/
}
document.getElementById("multiply").onclick = function () {
    operationConfirm("*");
}
document.getElementById("minus").onclick = function () {
    operationConfirm("-");
}
document.getElementById("plus").onclick = function () {
    operationConfirm("+");
}

document.getElementById("plusmn").onclick = function () {
    textBox.value *= -1;
    document.getElementById("myaudio").play ();
}


document.getElementById("equally").onclick = function () {
    /*switch (operation) {
        case "/":
            textBox.value = +firstNumber / +textBox.value;
            break;
        case "*":
            textBox.value = +firstNumber * +textBox.value;
            break;
        case "-":
            textBox.value = +firstNumber - +textBox.value;
            break;
        case "+":
            textBox.value = +firstNumber + +textBox.value;
    }*/
    if (operation == "/") {
        if (textBox.value == "0") {
            document.getElementById("my1audio").play ();
            textBox.value = "ERROR";
            alert("ERROR");
        } else {
        textBox.value = +firstNumber / +textBox.value;       
        }
    } else if (operation == "*") {
            textBox.value = +firstNumber * +textBox.value;
    } else if (operation == "-") {
            textBox.value = +firstNumber - +textBox.value;
    } else if (operation == "+") {
            textBox.value = +firstNumber + +textBox.value;        
    }
    document.getElementById("myaudio").play ();
}



document.getElementById("reset").onclick = function () {
    document.getElementById("myaudio").play ();
    /*textBox.value = "0";
    firstNumber = "0";
    operation = 0;*/    
}


/*// Button Press Sound
document.getElementsByClassName("button").onclick = function () {
    document.getElementById("myaudio").play ();
}*/

/*function bPS/*buttonPressSound () {
    document.getElementById("myaudio").play ();
}*/


/*if(lastActionChar == '/' && lastChar == '0'){
				display.innerHTML = error;
			}*/