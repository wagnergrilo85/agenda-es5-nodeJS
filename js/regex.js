
    function regex_cep(target) {

        //*** 00000-000
        var regex = "\\d{5}-\\d{3}";

        var exp = new RegExp(regex, "gi");

        if(exp.test(target))
            return true;
        else
            return false;

    }


    function regex_telefone(target) {

        //*** (00)0000-0000
        var regex = "\\(\\d{2}\\)\\d{4}-\\d{4}";

        var exp = new RegExp(regex, "gi");

        if(exp.test(target))
            return true;
        else
            return false;
    }

    function regex_celular(target) {

        //*** (00)90000-0000
        var regex = "\\(\\d{2}\\)\\d{5}-\\d{4}";

        var exp = new RegExp(regex, 'gi');

        if(exp.test(target))
            return true;
        else
            return false;
    }
