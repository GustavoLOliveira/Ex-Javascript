function verificarCondicaoIf()
{
    receberLetras = prompt("Escolha entre AA, BB, CC ou DD !")
    
    if (receberLetras == "AA")
    {
        alert("O valor armazenado na variável é AA");
    }
    else if (receberLetras == "BB")
    {
        alert("O valor armazenado na variável é BB");
    }
    else if(receberLetras == "CC")
    {
        alert("O valor armazenado na variável é CC");
    }
    else if(receberLetras == "DD")
    {
        alert("O valor armazenado na variável é DD");
    }
    else {
        alert("O valor armazenado não está previsto nessa lógica");
    }
}