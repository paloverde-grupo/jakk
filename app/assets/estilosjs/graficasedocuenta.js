$(document).ready(function(){
    var prueba1 = $('#bonooculto').val() - $('#acumuladooculto').val();
    var prueba2 = $('#acumuladooculto').val();
    if(typeof document.getElementById('graficaedocuenta') != 'undefined'){
        var ctx3 = document.getElementById('graficaedocuenta').getContext('2d');
        var chart = new Chart(ctx3, {
            type: 'pie',
            data: 	
            {
                datasets: [{
                    data: [prueba2,prueba1,],
                    backgroundColor: ['#6495ED','grey'],
                    label: 'Comparacion de navegadores',
                    borderWidth: 0,
                }],
                labels: [
                    'inversion',
                    'faltante'
                ]
            },
            options: {}
        });
    }
});