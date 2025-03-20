function calculate() {

    let num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var resultBox = document.getElementById("result");


    // if (isNaN(num1) || isNaN(num2) || operator === "") {
    //     resultBox.value = "Invalid Input!";
    //     return;
    // }

    if (operator == "+") {
        result = num1 + num2;
    } else if (operator == "-") {
        result = num1 - num2;
    } else if (operator == "*") {
        result = num1 * num2;
    } else if (operator == "/") {
        result = num1 / num2;
    } else {
        alert("Invalid operator");
    }

    // var result;


    // switch (operator) {
    //     case "+":
    //         result = num1 + num2;
    //         break;
    //     case "-":
    //         result = num1 - num2;
    //         break;
    //     case "*":
    //         result = num1 * num2;
    //         break;
    //     case "/":
    //         result = num2 !== 0 ? num1 / num2 : "Error! Division by Zero";
    //         break;
    //     default:
    //         result = "Invalid Operator!";
    // }


    resultBox.value = result;
}


// document.getElementById("num1").addEventListener("keydown", function (event) {
//     if (event.key === "e" || event.key === "E" || event.key === "+" || event.key === "-") {
//         event.preventDefault();
//     }
// });

// document.getElementById("num2").addEventListener("keydown", function (event) {
//     if (event.key === "e" || event.key === "E" || event.key === "+" || event.key === "-") {
//         event.preventDefault();
//     }
// });
