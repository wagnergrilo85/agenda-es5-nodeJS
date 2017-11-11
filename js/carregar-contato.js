
    var btnCarregarContato = document.querySelector('#tabela-contatos');

    btnCarregarContato.addEventListener("click", function (event) {

        if(event.target && event.target.classList == "carregarContato"){

            var link = event.target;
            var td = link.parentNode;
            var tr = td.parentNode;

            var id = tr.querySelector('.info-id').textContent;
            var nome = tr.querySelector('.info-nome').textContent;
            var telefone = tr.querySelector('.info-telefone').textContent;
            var tipoTelefone = tr.querySelector('.info-tipo-telefone').textContent;
            var operadora = tr.querySelector('.info-operadora').textContent;

            var objContato = criarObjetoContato(id, nome, telefone, tipoTelefone, operadora);

            //*** popular formulario
            popularFormulario(objContato);

            tr.remove();
        }
    });

    function popularFormulario(objContato){

        var form = document.querySelector('#form');

        form.querySelector('#id').value = objContato.id;
        form.querySelector('#nome').value = objContato.nome;
        form.querySelector('#telefone').value = objContato.telefone;
        form.querySelector('#tipo-telefone').value = objContato.tipoTelefone;
        form.querySelector('#operadora').value = objContato.operadora;

        document.querySelector("#botao-cadastrar").style.display = "none";
        document.querySelector("#botao-cadastrar").classList.add('disabled');

        document.querySelector("#botao-editar").style.display = "block";
        document.querySelector("#botao-editar").classList.remove('disabled');
    }

    function criarObjetoContato(id, nome, telefone, tipoTelefone, operadora) {
        return{
            'id' : id,
            'nome' : nome,
            'telefone' : telefone,
            'tipoTelefone' : tipoTelefone,
            'operadora' : operadora
        }
    }