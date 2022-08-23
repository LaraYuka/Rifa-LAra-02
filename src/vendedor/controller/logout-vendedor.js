$(document).ready(function() {

    $('#logout').click(function(e) {
        e.preventDefault()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            url: 'src/vendedor/model/logout-vendedor.php',
            success: function(dados) {

                if (dados.tipo == 'success') {
                    $(location).attr('href', 'sistema.html')
                } else {
                    Swal.fire({
                        title: 'Sistema de rifas',
                        text: dados.mensagem,
                        icon: dados.tipo,
                        confirmButtonText: 'OK'
                    })
                }

            }
        })

    })


})