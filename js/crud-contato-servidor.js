
    function carregarContatosServidor() {

        var method = "GET";
        var url = getEndpointServer() + "/list-all";

        var xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onreadystatechange = function(){

            if(xhr.readyState == 4){

                var resposta = xhr.responseText;

                if(xhr.status == 200){

                    var jsonResposta = JSON.parse(resposta);

                    jsonResposta.forEach(function (contato) {

                        var contatoAdd = {
                            id: contato.id,
                            nome: contato.name,
                            tipoTelefone: contato.typeCellphone,
                            operadora: contato.operator,
                            telefone: contato.cellphone
                        };

                        inserirContatoTabela(contatoAdd);
                    });

                }else{
                    console.log('Erro ao importar: ' + resposta);
                }
            }
        };
        xhr.send();
    }

    function salvarContatoServidor(contato) {

        var cc = {
            "name": contato.nome,
            "cellphone" : contato.telefone,
            "typeCellphone" : contato.tipoTelefone,
            "operator": contato.operadora
        };

        //*** Convertendo para formato json
        var novoContato = JSON.stringify(cc);

        var xhr = new XMLHttpRequest();

        var method = "POST";
        var url = getEndpointServer() + "/save";

        xhr.open(method, url);

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){

                var resposta = xhr.responseText;

                if(xhr.status === 201){
                    inserirContatoTabela(converterJsonServidorTabela(JSON.parse(resposta)));
                }else{
                    console.log('Erro: ' + resposta);
                }
            }
        };

        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("data-type", "application/json");
        xhr.send(novoContato);
    }
    
    function atulizarContatoServidor(contato) {

        var novoContato = JSON.stringify(contato);

        var xhr = new XMLHttpRequest();
        var method = "PUT";
        var url = getEndpointServer() + "/update";

        xhr.open(method, url);

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){

                var resposta = xhr.responseText;
                if(xhr.status === 200){
                    console.log('Contato atualizado com sucesso!');
                }else{
                    console.log('Erro ao atualizar contato ' + resposta);
                }
            }
        };

        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("data-type", "application/json");

        xhr.send(novoContato);
    }

    function converterJsonServidorTabela(objContato) {

        return {
            id: objContato.id,
            nome: objContato.name,
            telefone: objContato.cellphone,
            tipoTelefone: objContato.typeCellphone,
            operadora: objContato.operator
        };
    }

    function getEndpointServer() {
        return "http://localhost:3003/api/v1/phonebook";
    }