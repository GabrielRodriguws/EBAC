$(document).ready(function () {
    $('#taskForm').on('submit', function (e) { 
        e.preventDefault();

        const taskInput = $('#taskInput').val();
        const novaLinha = $(`<li>${taskInput} <span class="remove-task" style="color:red; cursor:pointer; margin-left:8px;">&#10006;</span></li>`);
        $(novaLinha).appendTo('ul');
        $('#taskInput').val('');
    });

    $('#taskList').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });

    $('#taskList').on('click', '.remove-task', function (e) {
        e.stopPropagation(); // Impede que o clique risque a tarefa
        $(this).parent().remove();
    });
});