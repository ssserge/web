var chB1 = document.getElementsByName("table");
var chB2 = document.getElementsByName("form");

document.getElementById("result").onclick = function () {
    document.getElementById("myaudio2").play();
    var result = 0;
    
    if (document.getElementById("radio1").checked) {
        result += 1;
    }
    if (document.getElementById("radio7").checked) {
        result += 1;
    } 
    if (document.getElementById("radio11").checked) {
        result += 1;        
    }
    
    var tmpResult = 0;
    for (var i = 0; i < chB1.length; i++) {
        if (chB1[i].checked) {
            if (i == 1 || i == 2) {
                tmpResult +=0.5;
            } else {
                tmpResult -=0.5;
            }
        }
    }
    if (tmpResult > 0) {
        result += tmpResult;
    }
    
    var tmpResult = 0;
    for (var i = 0; i < chB2.length; i++) {
        if (chB2[i].checked) {
            if (i == 0 || i == 1) {
                tmpResult +=0.5;
            } else {
                tmpResult -=0.5;
            }
        }
    }
    if (tmpResult > 0) {
        result += tmpResult;
    }
    
    alert("Вы набрали " + result * 20 + "%, " + result + " баллов.");
}

////////////////////////////////////////////////////////////////////////////

function tc () {
    document.getElementById("myaudio").play();
}
document.getElementById("radio1").onclick = function () {tc();}
document.getElementById("radio2").onclick = function () {tc();}
document.getElementById("radio3").onclick = function () {tc();}
document.getElementById("radio4").onclick = function () {tc();}
document.getElementById("radio5").onclick = function () {tc();}
document.getElementById("radio6").onclick = function () {tc();}
document.getElementById("radio7").onclick = function () {tc();}
document.getElementById("radio8").onclick = function () {tc();}
document.getElementById("radio9").onclick = function () {tc();}
document.getElementById("radio10").onclick = function () {tc();}
document.getElementById("radio11").onclick = function () {tc();}
document.getElementById("radio12").onclick = function () {tc();}
document.getElementById("checkbox1").onclick = function () {tc();}
document.getElementById("checkbox2").onclick = function () {tc();}
document.getElementById("checkbox3").onclick = function () {tc();}
document.getElementById("checkbox4").onclick = function () {tc();}
document.getElementById("checkbox5").onclick = function () {tc();}
document.getElementById("checkbox6").onclick = function () {tc();}
document.getElementById("checkbox7").onclick = function () {tc();}
document.getElementById("checkbox8").onclick = function () {tc();}
