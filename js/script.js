    window.onload = function() {
        var number1 = document.getElementById('number1');
        var number2 = document.getElementById('number2');
        var btnCalcular = document.getElementById('btnCalcular');
        var select = document.getElementById('select');
        var result = document.getElementById('result');
        var btnRefresh = document.getElementById('btnRefresh');

        btnCalcular.onclick = calcularFunction;
        btnRefresh.onclick = refreshFunction;

    }

    
    function calcularFunction() {

        let cond = false;
        let valor;

        if (number1.value === "" || number2.value === "") {
            alert('Há campos de entrada vazios!');
            window.location.reload(1);

        } else if (isNaN(number1.value) || isNaN(number2.value)) {
            alert('Valores de entrada devem ser numéricos!');
            window.location.reload(1);

        } else if (select.options.selectedIndex === 0){
            alert('Selecione a operação a ser realizada!');

        } else {
            cond = true;

            switch(select.options.selectedIndex) {
                case 1:
                    valor = parseFloat(number1.value) + parseFloat(number2.value);
                    console.log(valor);
                    break;

                case 2:
                    valor = parseFloat(number1.value) - parseFloat(number2.value);
                    console.log(valor);
                    break; 

                case 3:
                    valor = parseFloat(number1.value) * parseFloat(number2.value);
                    console.log(valor);
                    break; 
                                        
                case 4:
                    valor = parseFloat(number1.value) / parseFloat(number2.value);
                    console.log(valor);
                    break;       

                default:
                    alert('Aconteceu algo inesperado. Não foi possível finalizar essa operação.');
                    cond = false;
                    break;
            
            } // switch  

                if (cond) {
                    result.textContent = "Resultado = " + valor.toFixed(2);
                }
                                              
            
        } // if - else

    } // function


    function refreshFunction() {
        number1.value = "";
        number2.value = "";
        result.textContent = "Resultado = ???"

    } // function