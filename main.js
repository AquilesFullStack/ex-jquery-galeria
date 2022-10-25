$('form').on('submit', function(e){
    e.preventDefault();
    const campoTarefa = $('#campo-tarefa').val();
    const novoItem = $('<li></li>');
    $(`
    <div id="addli">
        <li>${campoTarefa}</li>
    </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#campo-tarefa').val('');

    $('#addli').click(function(){
        $('<div id="addli" style="text-decoration:line-through"></div>')
    })
})

