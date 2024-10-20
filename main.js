const nometarefa = document.getElementById("tarefaformulario");
const enviar = document.getElementById("enviar");
const ficha = document.getElementById("ficha");

$(enviar).on("click", function(event) {
    event.preventDefault();

    // Cria uma nova linha a cada clique
    const novalinha = ficha.insertRow();
    const cellnome = novalinha.insertCell(0);

    // Define o conteúdo da célula com o valor de nometarefa
    cellnome.textContent = $(nometarefa).val();

    // Adiciona o evento de clique à nova célula
    $(cellnome).on("click", function() {
        $(this).toggleClass("line-through");
    });

    // Limpa o campo de tarefa
    $(nometarefa).val("");
});




