$("#result").click(function () {
    
    $("audio")[1].play();
    
    var result = 0;

    for (var i = 0; i < $(":radio").length; i++) {
        if ($(":radio").eq(i).prop("checked")) {            
            if (i == 0 || i == 6 || i == 11) {                
                result += 1;
            }
        }
    }
        
    var tmpResult = 0;
    
    for (var i = 0; i < $(":checkbox").length; i++) {
        if ($(":checkbox").eq(i).prop("checked")) {            
            if (i == 1 || i == 2 || i == 4 || i == 5) {
                tmpResult +=0.5;
            } else {
                tmpResult -=0.5;
            }
        }
    }
    if (tmpResult > 0) {
        result += tmpResult;
    }
    
    //alert("Вы набрали " + result * 20 + "%, " + result + " баллов.");
    $("#modalAlert").text("Вы набрали " + result * 20 + "%, " + result + " баллов.");    
});

$ (":input, #close") .click(function () {$("audio")[0].play();})