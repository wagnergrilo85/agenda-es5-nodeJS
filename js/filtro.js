/**
 * Created by wagner.junior on 18/10/2017.
 */

    var filtrarTabela = document.querySelector("#filtrar-tabela");

    filtrarTabela.addEventListener("input", function (event) {

        var contatos = document.querySelectorAll('.contato');

        if(contatos.length > 0){

            for(var i = 0; i < contatos.length; i++){

                var contato = contatos[i];
                var nome = contato.querySelector('.info-nome').textContent;
                var telefone = contato.querySelector('.info-telefone').textContent;

                var exp_nome = new RegExp(this.value, 'i');
                var exp_telefone = new RegExp(this.value, 'i');

                if(!exp_nome.test(nome)){
                    contato.classList.add('invisivel');
                }else{
                    contato.classList.remove('invisivel');
                }
            }
        }else{
            for(var i = 0; i < contatos.length; i++) {
                var contato = contatos[i];
                contato.classList.remove('invisivel');
            }
        }


    });