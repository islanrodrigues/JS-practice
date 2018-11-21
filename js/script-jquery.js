$(document).ready(function() {
    
    $('#btnCalcular').click(calcularFunction);
    $('#btnRefresh').click(refreshFunction);

});

    function calcularFunction() {

        var n1 = $('#number1');
        var n2 = $('#number2');

        var valor;
        let cond = false;

        if (n1.val() === "" || n2.val() === "") {
            alert("Há campos de entrada vazios!");
            window.location.reload();
                        
        } else if (isNaN(n1.val()) || isNaN(n2.val())) {
            alert("Valores de entrada devem ser numéricos!");
            window.location.reload();

        } else if ($('#select').val() === "0") {
            alert('Selecione a operação a ser realizada!');

        } else {
            cond = true;
            switch($('#select').val()) {
                case "1":
                    valor = parseFloat(n1.val()) + parseFloat(n2.val());
                    console.log(valor);
                    break;

                case "2":
                    valor = parseFloat(n1.val()) - parseFloat(n2.val());
                    console.log(valor);
                    break;

                case "3":
                    valor = parseFloat(n1.val()) * parseFloat(n2.val());
                    console.log(valor);
                    break;

                case "4":
                    valor = parseFloat(n1.val()) / parseFloat(n2.val());
                    console.log(valor);
                    break;

                default:
                    cond = false;
                    alert('Aconteceu algo inesperado. Não foi possível finalizar essa operação.');
                    break;

            } //switch

            if (cond) {
                $('#result').text("Resultado = " + valor.toFixed(2)).fadeIn('slow')
                .delay(4000)
                .fadeOut("slow");
            }
                        
        } // if - else

    } // function
                        
    
    function refreshFunction() {

        $('#number1').val("");
        $('#number2').val("");
        $('#result').text("Resultado = ???").css('color', 'red');
    
    } //function
                    