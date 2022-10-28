$(document).ready(function() {
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
        Cep: {
            required: true
        },
        cpf: {
            required: true
        }
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

    $('#telefone').mask(`(00) 00000-0000`)
    $('#Cep').mask(`000000-00`)
    $('#cpf').mask(`000.000.000-00`)
  
})

