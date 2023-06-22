$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            address: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: '<span class="error-message">Por favor, insira seu nome completo.</span>',
            email: '<span class="error-message">Por favor, insira seu E-mail.</span>',
            telefone: '<span class="error-message">Por favor, insira o seu telefone para contato.</span>',
            cpf: '<span class="error-message">Por favor, insira o seu CPF.</span>',
            address: '<span class="error-message">Por favor, insira o seu Endereço completo.</span>',
            cep: '<span class="error-message">Por favor, insira o CEP de sua cidade.</span>'
        },

        submitHandler: function(form) {
            console.log(form)
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })
})