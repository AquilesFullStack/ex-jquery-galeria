$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle(); // faz o movimento de down e se já estiver faz o contrário up
    })

    $('form').validate({  //aplica a validação, usando o plugin validate, plugin trabalha com a propriedade "name"
        rules: { //se os campos forem verdadeiros, ou seja, preenchidos
            nome: {
                required: true
            },
            email: { //precisa de uma validação personalizada por isso adiciona o email:true
                required: true,
                email:true,
            },
            telefone: {
                required: true
            },
            VeiculoDeInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages:{ //altera a mensagem do plugin    
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form){ //intercepta o submit de envio do form
            console.log(form)
        },
        invalidHandler: function(evento, validador) //intercepta o clique do enviar caso formulário esteja inválido
        {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    
    $('#telefone').mask(`(00) 00000-0000`) //mascara o formulário com o plugin mask (numero-0/letra-S)

    $('.lista-veiculos button').click(function(){ //todo botão clicado na lista será rolado para o formulário
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text(); // jquery busca o texto do elemento pai

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({ //animação necessária para o documento
            scrollTop: destino.offset().top //quando rolar envia para o end da variável /offset retorna a posição
        }, 1000) //duração da animação
    })

    $('nav li').click(function(){
        const sobre= $(`#sobreLi`)
        const sobreScroll= $(`#sobre-a-loja`)
        const emDestaque= $(`#emDestaqueLi`)
        const emDestaqueScroll= $(`#emDestaque`)
        const promocoes= $(`#promocoesli`)
        const promocoesScroll= $(`#promocoes`)
        const contato= $(`#contatoli`)
        const contatoScroll= $(`#contato`)

        if(sobre){
            $('html').animate({ //animação necessária para o documento
                scrollTop: ($(sobreScroll).offset().top) //quando rolar envia para o end da variável /offset retorna a posição
            }, 1000)
        }
        if(emDestaque){
            $('html').animate({ //animação necessária para o documento
                scrollTop: ($(emDestaqueScroll).offset().top) //quando rolar envia para o end da variável /offset retorna a posição
            }, 1000)
        }
        if(promocoes){
            $('html').animate({ //animação necessária para o documento
                scrollTop: ($(promocoesScroll).offset().top) //quando rolar envia para o end da variável /offset retorna a posição
            }, 1000)
        }
        if(contato){
            $('html').animate({ //animação necessária para o documento
                scrollTop: ($(contatoScroll).offset().top) //quando rolar envia para o end da variável /offset retorna a posição
            }, 1000)
        }
    })
})