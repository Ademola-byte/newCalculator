function calc(){
    var a = parseFloat(document.querySelector("#num1").value);
    var b = parseFloat(document.querySelector("#num2").value);
    var c = document.querySelector("#operator").value;
    var calculate;



    if ( c == "+"){
        calculate = a + b;
    } else if( c == "-"){
        calculate = a - b;
    } else if( c == "*"){
        calculate = a * b;
    } else if(  c == "/"){
        calculate = a/b
    }
    document.querySelector("#result").innerHTML = calculate
}