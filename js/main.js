
    var botaoCadastrar = document.querySelector("#botao-cadastrar");
    var botaoEditar = document.querySelector("#botao-editar");

    carregarContatosServidor();

    botaoCadastrar.addEventListener("click", function (event) {

        event.preventDefault();

        var form = document.querySelector("#form");

        var objContato = pegarObjetoFormulario(form);

        //*** Validar dados do contato
        var arrayErros = validarFormulario(objContato);

        if(arrayErros.length > 0){
            mostrarMensagensErro(arrayErros);
            return;
        }

        //*** Salva contato no servidor
        salvarContatoServidor(objContato);

        //*** Limpa mensagens de erro
        limparMensagemErros();

        //*** Limpar form
        form.reset();
        document.querySelector("#nome").focus();

    });
    
     botaoEditar.addEventListener("click", function (event) {

        event.preventDefault();

        var form = document.querySelector("#form");

        var objContato = pegarObjetoFormulario(form);

        //*** Validar dados do contato
        var arrayErros = validarFormulario(objContato);

        if(arrayErros.length > 0){
            mostrarMensagensErro(arrayErros);
            return;
        }

        //*** Limpa mensagens de erro
        limparMensagemErros();

        //*** Colocar o dados do novo contato na tabela
        inserirContatoTabela(objContato);

        atulizarContatoServidor(objContato);

        //*** Limpar form
        form.reset();
        document.querySelector("#nome").focus();

         document.querySelector("#botao-cadastrar").style.display = "block";
         document.querySelector("#botao-cadastrar").classList.remove('disabled');

         document.querySelector("#botao-editar").style.display = "none";
         document.querySelector("#botao-editar").classList.add('disabled');

    });

    function mostrarMensagensErro(arrayErros) {

        var mensagemErros = document.querySelector("#mensagem-erros");
        limparMensagemErros();

        if(arrayErros.length > 0) {
            arrayErros.forEach(function (ArrayErro) {
                var li = document.createElement("li");
                li.textContent = ArrayErro.mensagem;
                mensagemErros.appendChild(li);
            });
            mensagemErros.style.display = "block";
        }
    }

    function limparMensagemErros() {
        var mensagemErros = document.querySelector("#mensagem-erros");
        mensagemErros.innerHTML = "";
        mensagemErros.style.display = "none";
    }

    function inserirContatoTabela(objContato) {

         var tabela = document.querySelector("#tabela-contatos");

        var contatoTr = document.createElement("tr");
        contatoTr.classList.add("contato");

        var tdId            = montaTdTabelContato(objContato.id, "info-id");
        var tdNome          = montaTdTabelContatoNome(objContato.nome, "info-nome");
        var tdTelefone      = montaTdTabelContato(objContato.telefone, "info-telefone");
        var tdTipoTelefone  = montaTdTabelContato(objContato.tipoTelefone, "info-tipo-telefone");
        var tdOperadora     = montaTdTabelContato(objContato.operadora, "info-operadora");

        contatoTr.appendChild(tdId);
        contatoTr.appendChild(tdNome);
        contatoTr.appendChild(tdTelefone);
        contatoTr.appendChild(tdTipoTelefone);
        contatoTr.appendChild(tdOperadora);

        tabela.appendChild(contatoTr);
    }

    function montaTdTabelContato(dado, classe) {
        var td = document.createElement("td");
        td.classList.add(classe);
        td.textContent = dado;
        return td;
    }

    function montaTdTabelContatoNome(dado, classe) {
        var td = document.createElement("td");
        td.classList.add(classe);
        td.innerHTML = "<a href = '#'class = 'carregarContato'> " + dado + "</a>";
        return td;
    }

    function pegarObjetoFormulario(form) {

        var el_tipoTelefone = document.querySelector("#tipo-telefone");
        var tipoTelefone = el_tipoTelefone.options[el_tipoTelefone.selectedIndex].text;

        var el_tipoOperadora = document.querySelector("#operadora");
        var operadora = el_tipoOperadora.options[el_tipoOperadora.selectedIndex].text;

        return {
            id: form.id.value,
            nome: form.nome.value,
            telefone: form.telefone.value,
            tipoTelefone: tipoTelefone,
            operadora: operadora
        }
    }

