

document.getElementById("result").onclick = function () {
    document.getElementById("myaudio").play ();
    var result = 0;
    var mark = 0;
   /* var markPl = 0;
    if (mark > 0) {
        markPl = mark;
    }*/
    if (document.getElementById("radio1").checked) {
        result += 10;
        mark += 1;
    }
    if (document.getElementById("radio7").checked) {
        result += 10;
        mark += 1;
    } 
    if (document.getElementById("radio11").checked) {
        result += 10;
        mark += 1;
    }
    if (document.getElementById("checkbox1").checked) {        
        mark -= 0.5;
    }
    if (document.getElementById("checkbox2").checked) {
        result += 17.5;
        mark += 0.5;
    }
    if (document.getElementById("checkbox3").checked) {
        result += 17.5;
        mark += 0.5;
    } 
    if (document.getElementById("checkbox4").checked) {        
        mark -= 0.5;
    }
    if (document.getElementById("checkbox5").checked) {
        result += 17.5;
        mark += 0.5;
    } 
    if (document.getElementById("checkbox6").checked) {
        result += 17.5;
        mark += 0.5;
    } 
    if (document.getElementById("checkbox7").checked) {        
        mark -= 0.5;
    }
    if (document.getElementById("checkbox8").checked) {        
        mark -= 0.5;
    }
    alert("Вы набрали" + result + "%, " + mark + "баллов");
}

