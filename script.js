function calculate() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let resultBox = document.getElementById("result");


    

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

    // if (isNaN(num1) || isNaN(num2) || operator === "") {
    //     resultBox.value = "Invalid Input!";
    //     return;
    // }

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
