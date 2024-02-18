function handleKeyPress(event) {
    if (event.keyCode === 13) { // Verifica se a tecla pressionada é a tecla Enter
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Obtenha o valor do campo de entrada
        var inputValue = document.getElementById("inputGPT").value;

        document.getElementById("inputGPT").value = ""
    }
}