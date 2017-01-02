var textBox = $("#text");
var firstNumber;
var operation;

function addNum(namber) {    
    if ((textBox.val() == 0) && (textBox.val().indexOf(".") == -1)) { 
    textBox.val(namber);
    } else {
        textBox.val(textBox.val() + namber);
    }
    $("audio")[0].play();
}

function operationConfirm(op) {
    operation = op;
    firstNumber = textBox.val();
    textBox.val("0");
    $("audio")[0].play();   
}

$("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine").click(function () {
    addNum($(this).val());
});
 
$("#point").click(function () {    
    if (textBox.val().length == 0) {
        textBox.val("0.");
    } else {
        if (textBox.val().indexOf(".") == -1) {
            textBox.val(textBox.val() + ".");
        }
    }
    $("audio")[0].play();
});

$("#divided, #multiply, #minus, #plus").click(function () {
    operationConfirm($(this).val());
});

$("#plusmn").click(function () {
    textBox.val(textBox.val() * -1);
    $("audio")[0].play();
});

$("#equally").click(function () {   
    if (operation == "/") {
        if (textBox.val() == "0") {
            $("audio")[1].play();
            //textBox.val("!!! ERROR !!! ERROR !!!");
            //textBox.val("Malfunction! Malfunction!");
            textBox.val("Error! Malfunction! Error!");
        } else {
        textBox.val(+firstNumber / +textBox.val());       
        }
    } else if (operation == "*") {
            textBox.val(+firstNumber * +textBox.val());
    } else if (operation == "-") {
            textBox.val(+firstNumber - +textBox.val());
    } else if (operation == "+") {
            textBox.val(+firstNumber + +textBox.val());        
    }    
    $("audio")[0].play();
});

$("#reset").click(function () {
    $("audio")[0].play(); 
    textBox.val(0);
    firstNumber = 0;
    operation = 0;
});

