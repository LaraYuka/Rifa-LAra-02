$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo promocao')

        $('.modal-body').load('src/promocao/view/form-promocao.html', function() {
            // Criar um ajax para buscar todos os tipos de promocaoes possiveis
            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                url: 'src/tipo/model/all-tipo.php',
                success: function(dados) {
                    for (const result of dados) {
                        $('#TIPO_ID').append(`<option value="${result.ID}">${result.NOME}</option>`)
                    }
                }
            })
        })

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-promocao').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-promocao').modal('hide')
    })
})