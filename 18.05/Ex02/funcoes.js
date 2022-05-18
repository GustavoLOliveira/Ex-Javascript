
function capturar() {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    num3 = document.getElementById('num3').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    if (num1 > num2 && num2 > num3 &&
            num1 != num2 && num1!= num3 && num2 != num3) {
        alert ("Os numeros são diferentes " + "\n" + num1 + "\n" + num2 + "\n" + num3);

    } else if (num1 > num3 && num3 > num2 &&
        num1 != num2 && num1!= num3 && num2 != num3) {
        alert ("Os numeros são diferentes " + "\n" +num1 + "\n" + num3 + "\n" + num2);

    }else if (num2 > num1 && num1 > num3 && 
        num1 != num2 && num1!= num3 && num2 != num3) {
        alert ("Os numeros são diferentes " + "\n" +num2 + "\n" + num1 + "\n" + num3);

    }else if (num2 > num3 && num3 > num1 && 
        num1 != num2 && num1!= num3 && num2 != num3){
        alert ("Os numeros são diferentes " + "\n" +num2 + "\n" + num3 + "\n" + num1);

    }else if (num3 > num1 && num1 > num2 && 
        num1 != num2 && num1!= num3 && num2 != num3){
        alert ("Os numeros são diferentes " + "\n" +num3 + "\n" + num1 + "\n" + num2);

    }else if (num3 > num2 && num2 > num1 && 
        num1 != num2 && num1!= num3 && num2 != num3){
        alert("Os números são diferentes! " + "\n" +num3 + "\n" + num2 + "\n" + num1);

    }else {
        alert("Os três números são iguais!")
    }
}