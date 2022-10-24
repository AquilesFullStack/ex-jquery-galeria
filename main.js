$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();//trás o valor da nova imagem (js: var = document.queryselector('seletor'.value))
        const novoItem = $('<li style="display> none"></li>'); // cria uma nova linha no HTML / para aplicar efeito dele aparecendo o estilo precisa estar none (abaixo o fadeIn)
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem); // inseri a imagem dentro da li que foi criada
        $(`<div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
        Ver imagem em tamanho real
        </a>
        </div>`).appendTo(novoItem); // Inserir a formatação na li
        $(novoItem).appendTo('ul'); //Inseri a li dentro da ul que foi criada
        $(novoItem).fadeIn(); //Efeito de aparecimento / é uma função
        $('#endereco-imagem-nova').val(''); // Torna o valor do campo vazio depois do submit
    })
})