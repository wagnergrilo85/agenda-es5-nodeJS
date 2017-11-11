function validarFormulario(objContato) {

    var arrayErros = [];

    if(objContato.nome.length == 0){
        arrayErros.push({
            'mensagem' : 'O nome não pode ser vazio',
            'campo' : 'nome'
        });
    }

    if(objContato.telefone.length == 0){
        arrayErros.push({
            'mensagem' : 'O telefone não pode ser vazio!',
            'campo' : 'telefone'
        });
    }

    // if(isNaN(objContato.telefone)){
    //     arrayErros.push({
    //         'mensagem' : "O telefone tem que ser numérico!",
    //         'campo' : 'telefone'
    //     });
    // }

    if(objContato.tipoTelefone == 'Telefone'){
        if(!regex_telefone(objContato.telefone)){
            arrayErros.push({
                'mensagem' : 'Numero de telefone inválido. Ex:(00)0000-0000',
                'campo' : 'telefone'
            });
        }
    }

    if(objContato.tipoTelefone == 'Celular'){
        if(!regex_celular(objContato.telefone)){
            arrayErros.push({
                'mensagem' : 'Numero de celular inválido. Ex: (00)90000-0000',
                'campo' : 'telefone'
            });
        }
    }
    return arrayErros;
}