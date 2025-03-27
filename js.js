var player = "O"
var won = false;

function clickBox(box){
    if (box.innerText != "" || won) return;
    box.innerText = player;
   
    player == "O" ? player = "X" : player = "O";

        checkGame();
    
}
function checkGame(){
    for (var i = 0; i <=2; i++){
        var first = document.getElementById("0_" + i).innerText;
        var second = document.getElementById("1_" + i).innerText;
        var third = document.getElementById("2_" + i).innerText;

        if (first == "") continue;

        if (first == second && first == third){
            alert("WINNER"); 
            won = true;
       }   
    }
    for (var i = 0; i <=2; i++){
        var first = document.getElementById(i + "_0").innerText;
        var second = document.getElementById(i + "_1").innerText;
        var third = document.getElementById(i + "_2").innerText;

        if (first == "") continue;

        if (first == second && first == third){
            alert("WINNER"); 
            won = true;
       }   
    }
    var firstD1 = document.getElementById("0_0").innerText;
    var secondD1 = document.getElementById("1_1").innerText;
    var thirdD1 = document.getElementById("2_2").innerText;

    if (firstD1 !="" && firstD1 ==secondD1 && firstD1 == thirdD1){
        alert("Winner");
        won = true;
    }

    // Проверка диагоналей /  вида
    var firstD2 = document.getElementById("2_0").innerText;
    var secondD2 = document.getElementById("1_1").innerText;
    var thirdD2 = document.getElementById("0_2").innerText;

    if (firstD2 !="" && firstD2 ==secondD2 && firstD2 == thirdD2){
        alert("Winner");
        won = true;
    }
}