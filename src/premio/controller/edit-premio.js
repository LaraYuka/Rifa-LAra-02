$(document).ready(function() {

    $('#table-premio').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de registro')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/premio/model/view-premio.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/premio/view/form-premio.html', function() {

                        $('#NOME').val(dado.dados.NOME)


                        $('#DESCRICAO').val(dado.dados.DESCRICAO)

                        $('#VALOR').val(dado.dados.VALOR)

                        $('#premio_ID').empty()


                        //$('#premio_ID').empty()
                        $('#ID').val(dado.dados.ID)

                        var premio_ID = dado.dados.premio_ID

                        //Consultar todos os tipos cadastrados no banco de daods
                        $.ajax({
                            dataType: 'json',
                            type: 'POST',
                            assync: true,
                            url: 'src/promocao/model/all-promocao.php',
                            success: function(dados) {
                                for (const result of dados) {
                                    if (result.ID == premio_ID) {
                                        $('#PROMOCAO_ID').append(`<option value="${result.ID}" selected>${result.TITULO}</option>`)
                                    } else {
                                        $('#PROMOCAO_ID').append(`<option value="${result.ID}">${result.TITULO}</option>`)
                                    }

                                }
                            }
                        })
                    })
                    $('.btn-save').removeAttr('data-operation', 'insert')
                    $('.btn-save').show()
                    $('#modal-premio').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'Sistema de Rifas', // Título da janela SweetAlert
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // premio de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})