//BACKSPACE BUTTON
function backspace(cal) {
    size = screenValue.length;
    screenValue = screenValue.substring(0, size - 1);
}


function calc(screenValue) {
    //   FACTORIAL
    if (screenValue.includes("!")) {

        size = screenValue.length;
        n = Number(screenValue.substring(0, size - 1));
        f = 1;

        for (i = 2; i <= n; i++)
            f = f * i;
        screenValue = f;
        return screenValue;
    }
    // PERCENTAGE
    else if (screenValue.includes("%")) {

        size = screenValue.length;
        n = Number(screenValue.substring(0, size - 1));
        screenValue = n / 100;
        return screenValue;
    }


}




let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");

let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", e => {
        btnText = e.target.innerText;

        // MULTIPLY
        if (btnText == "x") {
            btnText = "*";
            screenValue += btnText;
            screen.value = screenValue;
        }

        // SQUARE ROOT
        else if (btnText == "√") {
            screenValue = "Math.sqrt("
            screen.value = screenValue;
        }

        // FACTORIAL
        else if (btnText == "x!") {
            btnText = "!";

            screenValue += btnText;
            screen.value = calc(screenValue);

        }

        // PERCENTAGE
        else if (btnText == "%") {

            screenValue += btnText;

            screen.value = calc(screenValue);
        }

        // PI
        else if (btnText == "π") {
            btnText = "Math.PI*(";
            screenValue += btnText;

            screen.value = screenValue;
        }

        // DIVIDE
        else if (btnText == "÷") {
            btnText = '/';
            screenValue += btnText;

            screen.value = screenValue;
        }

        // POWER OF
        else if (btnText == "^") {
            screenValue = "Math.pow(";


            screen.value = screenValue;
        }

        //COSINE
        else if (btnText == "cos") {
            screenValue = "Math.cos("

            screen.value = screenValue;
        }

        // SINE
        else if (btnText == "sin") {
            screenValue = "Math.sin("

            screen.value = screenValue;
        }

        //TAN
        else if (btnText == "tan") {
            screenValue = "Math.tan("

            screen.value = screenValue;
        }

        //LOG(BASE 10)
        else if (btnText == "log") {
            screenValue = "Math.log10("

            screen.value = screenValue;
        }

        //LOG(NATURAL)
        else if (btnText == "ln") {
            screenValue = "Math.log("

            screen.value = screenValue;
        }

        //SIN INVERSE
        else if (btnText == "inv(sin)") {
            screenValue = "Math.asin(";

            screen.value = screenValue;
        }
        // COS INVERSE
        else if (btnText == "inv(cos)") {
            screenValue = "Math.acos(";

            screen.value = screenValue;
        }

        // TAN INVERSE
        else if (btnText == "inv(tan)") {
            screenValue = "Math.tan(";

            screen.value = screenValue;
        }

        // EXPONENT
        else if (btnText == "e") {
            screenValue = "Math.exp("

            screen.value = screenValue;
        }

        // CLEAR
        else if (btnText == "C") {
            screenValue = "";
            screen.value = screenValue;
        }

        // ANSWER
        else if (btnText == "=") {

            screen.value = eval(screenValue);
        }

        //BACKSPACE
        else if (btnText == "<--") {
            screen.value = backspace(screenValue);
            screen.value = screenValue;
        }

        //OTHERS
        else {

            screenValue += btnText;
            screen.value = screenValue;

        }


    })
}