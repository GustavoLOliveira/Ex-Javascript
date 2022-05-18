
function capturar() {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    soma = num1 + num2;

    if (soma >= 18) {
        alert("O valor é maior ou igual a 18");
    }else {
        alert(" O valor é menor que 18");
    }
}