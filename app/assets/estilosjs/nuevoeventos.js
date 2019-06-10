$(document).ready(function(){
    $('.subopciones_menu').hide();
    var espacio 		=  $('#menu').offset().top;
    var alto 			= $(window).height();
    var medida_grid		= (alto - espacio);
    $('#contenedor_dashboard').css({'max-height':medida_grid,'min-height':medida_grid});
    $('#menu').css({'height':medida_grid});
    $('#pantalla').css({'height':medida_grid});

    $('#historial_cuenta').hide();
    $('#historial_billetera').hide();
    $('.text_menu').hide();

    var flechas = {
        flechaderecha : '/imagenes/flechaderecha.png',
        flechaizquierda : '/imagenes/flechaizquierda.png'
    };
    // new Morris.Line({
    //     // ID of the element in which to draw the chart.
    //     element: 'myfirstchart',
    //     // Chart data records -- each entry in this array corresponds to a point on
    //     // the chart.
    //     data: [
    //         { year: '2008', value: 20, cantidad: 0 },
    //         { year: '2009', value: 10, cantidad: 10},
    //         { year: '2010', value: 5,  cantidad: 20},
    //         { year: '2011', value: 2.3, cantidad: 30},
    //         { year: '2012', value: 20, cantidad: 40}
    //     ],
    //     // The name of the data record attribute that contains x-values.
    //     xkey: 'year',
    //     // A list of names of data record attributes that contain y-values.
    //     ykeys: ['value'],
    //     // Labels for the ykeys -- will be displayed when you hover over the
    //     // chart.
    //     labels: ['cantidad']
    // });
    
    $('.subopciones_menu').hide();
    // $('#putisima_madre').hide();

    show_todos_tipo_mercancia(2);

    //mostrar submenu
    $(document).on('mouseover','.opcion_menu',function(){
        var rutaimg = $(this).children('.icon_menu').children('.icono_menu').attr('src').replace(2,'');
        $(this).children('.icon_menu').children('.icono_menu').attr('src',rutaimg);
        var topSubmenus = '-80px';

        if($(this).attr('id') == 'opcion_final')
            topSubmenus = '-205px';

        $(this).children('.subopciones_menu').show();
        var widthOpcionMenu = "" + $(this).width() + "px";
        var heightWindow = $(window).height();
        var heightSubMenu = $(this).children('.subopciones_menu').height();
        //var posicionSubMenu = $(this).children('.subopciones_menu').offset().top;

        $(this).children('.subopciones_menu').css({'margin-top': topSubmenus});
        $(this).children('.subopciones_menu').css({'margin-left':widthOpcionMenu});
    });

    //ocultar submenu
    $(document).on('mouseout','.opcion_menu',function(){
        var rutaimg = $(this).children('.icon_menu').children('.icono_menu').attr('src').replace('.','2.');
        $(this).children('.icon_menu').children('.icono_menu').attr('src',rutaimg);
        $('.subopciones_menu').hide();
    });

    $(document).on('mouseover','.subopcion_menu',function(){
        var rutaimg = $(this).children('a').children('.icon_submenu').children('.icono_submenu').attr('src').replace(2,'');
        $(this).children('a').children('.icon_submenu').children('.icono_submenu').attr('src',rutaimg);
    });

    $(document).on('mouseout','.subopcion_menu',function(){
        var rutaimg = $(this).children('a').children('.icon_submenu').children('.icono_submenu').attr('src').replace('.','2.');
        $(this).children('a').children('.icon_submenu').children('.icono_submenu').attr('src',rutaimg);
    });

    $(document).on('click','#estadocuenta', function(){
        $('#estado_cuenta').show();
        $('#tabla_secundaria').show();
        $('#historial_cuenta').hide();
    });

    $(document).on('click','#historialcuenta', function(){
        $('#historial_cuenta').show();
        $('#estado_cuenta').hide();
        $('#tabla_secundaria').hide();
    });

    $(document).on('click','#pedirdinero', function(){
        $('#contenedor_pedirdinero').show();
        $('#historial_billetera').hide();
    });

    $(document).on('click','#historialbilletera', function(){
        $('#historial_billetera').show();
        $('#contenedor_pedirdinero').hide();
    });

    $(document).on('click', '#expande_menu', function(){
        if($('.text_menu').is(':visible')){
            $('#menu').css({
                    'width': '106px',
                    'text-align': 'center',
                }
            );
            $('.text_menu').hide();
            //$('.text_menu').css({'display': 'inline-block'});
            $('.opcion_menu').css({'padding-left': '0px'});
            $(this).children().children().prop('src', flechas.flechaderecha);
            $(this).css({'text-align': 'center'});


        }else{
            $('#menu').css({
                    'width': '300px',
                    'text-align': 'initial',
                }
            );
            $('.text_menu').show();
            $('.text_menu').css({'display': 'inline-block'});
            $('.opcion_menu').css({'padding-left': '10px'});
            $(this).children().children().prop('src', flechas.flechaizquierda);
            $(this).css({'text-align': 'right'});
        }

        // $(this).children().children().prop('src') != flechas.flechaderecha ? $(this).children().children().prop('src', flechas.flechaizquierda): $(this).children().children().prop('src', flechas.flechaderecha);
    });

    $(document).on('click', '#menu_burger1', function(){
            //$('#menu').slideToggle( "fast", function() {
            $('#menu').css({
                    'width': '300px',
                    'text-align': 'initial',
                }
            );
            $('.text_menu').show();
            $('.text_menu').css({'display': 'inline-block'});
            $('.opcion_menu').css({'padding-left': '10px'});
            $('#menu').show();
            //$(this).children().children().prop('src', flechas.flechaizquierda);
            //$(this).css({'text-align': 'right'});
          //});
    });

    $(document).on('click', '#menu_burger2', function(){
        $('#menu').hide();
        $('.text_menu').hide();
        $('#menu').attr('style','');
        $('.text_menu').attr('style','');
        $('.opcion_menu').attr('style','');
    });


    // var canvas = document.getElementById('graficaedocuenta');
    // if (canvas && canvas.getContext) {
    //     var ctx = canvas.getContext('2d');
    //     if (ctx) {
    //         // var oData = {
    //         // 'IE': '10.2',
    //         // 'Firefox': '26.9',
    //         // 'Chrome': '55.7',
    //         // 'Safari': '3.9',
    //         // 'Opera': '1.8'
    //         // };
    //         // var oColores = {
    //         // 'IE': '#6495ED',
    //         // 'Firefox': '#FF8C00',
    //         // 'Chrome': '#FFD700',
    //         // 'Safari': '#32CD32',
    //         // 'Opera': '#DC143C',
    //         // 'otros': '#ddd'
    //         // };
    //         // el radio del gráfico;					
    //         var r = 100;
    //         // las coordenadas del centro del canvas
    //         var X = canvas.width / 2
    //         var Y = canvas.height / 2;
    //         // dibuja un circulo gris en el centro del canvas
    //         ctx.fillStyle = '#ddd';
    //         ctx.moveTo(X, Y);
    //         ctx.arc(X, Y, r, 0, 2 * Math.PI);
    //         ctx.fill();
    //         // dibuja un sector circular		
    //         var ap = 0;
    //         var af = (2 * Math.PI / 100) * 75.0;
    //         var Xap = X + r * Math.cos(ap);
    //         var Yap = Y + r * Math.sin(ap);

    //         ctx.beginPath();
    //         ctx.fillStyle = '#6495ED';
    //         ctx.moveTo(X, Y);
    //         ctx.lineTo(Xap, Yap);
    //         ctx.arc(X, Y, r, ap, af);
    //         ctx.closePath();
    //         ctx.fill();
            
            
    //     }
    // }

//         var ctx3 = document.getElementById('myChart').getContext('2d');
    // var chart = new Chart(ctx3, {
    //     type: 'bar',
    //     data: {
    //         labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    //         datasets: [{
    //             label: 'Ingresos',
    //             backgroundColor: '#42a5f5',
    //             borderColor: 'gray',
    //             data: [7, 8, 5, 2, 8, 10, 7,-7,4,9,-8,5]
    //         },{
    //             label: 'Gastos',
    //             backgroundColor: '#ffab91',
    //             borderColor: 'yellow',
    //             data: [5, -8, 10, 3,-7,6,8,-2,-6,9,-7,2]
    //         }		
    // 		]},
    //     options: {responsive: true}
    // });

    // var canvas = document.getElementById('lienzo');
    //     if (canvas && canvas.getContext) {
    //         var ctx = canvas.getContext('2d');
    //         if (ctx) {
    //             var oData = {
    //             'IE': '10.2',
    //             'Firefox': '26.9',
    //             'Chrome': '55.7',
    //             'Safari': '3.9',
    //             'Opera': '1.8'
    //             };
    //             var oColores = {
    //             'IE': '#6495ED',
    //             'Firefox': '#FF8C00',
    //             'Chrome': '#FFD700',
    //             'Safari': '#32CD32',
    //             'Opera': '#DC143C',
    //             'otros': '#ddd'
    //             };
    //             // el radio del gráfico;					
    //             var r = 100;
    //             // las coordenadas del centro del canvas
    //             var X = canvas.width / 2
    //             var Y = canvas.height / 2;
    //             // dibuja un circulo gris en el centro del canvas
    //             ctx.fillStyle = '#ddd';
    //             ctx.moveTo(X, Y);
    //             ctx.arc(X, Y, r, 0, 2 * Math.PI);
    //             ctx.fill();
    //             // dibuja un sector circular		
    //             var ap = 0;
    //             var af = (2 * Math.PI / 100) * oData.IE;
    //             var Xap = X + r * Math.cos(ap);
    //             var Yap = Y + r * Math.sin(ap);

    //             ctx.beginPath();
    //             ctx.fillStyle = oColores.IE;
    //             ctx.moveTo(X, Y);
    //             ctx.lineTo(Xap, Yap);
    //             ctx.arc(X, Y, r, ap, af);
    //             ctx.closePath();
    //             ctx.fill();
                
                
    //         }
    //     }
    // if(typeof document.getElementById('graficaganancias') != 'undefined'){
    //     var ctx1 = document.getElementById('graficaganancias').getContext('2d');
    //     var chart = new Chart(ctx1, {
    //         type: 'line',
    //         data: {
    //             labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    //             datasets: [{
    //                 label: 'Ganancias',
    //                 // backgroundColor: '#42a5f5',
    //                 borderColor: 'gray',
    //                 data: [7, 8, 5, 2, 8, 10, 7,7,4,9,8,5]
    //             }		
    //             ]},
    //         options: {}
    //     });
    // }

    // if(typeof document.getElementById('graficasemanal') != 'undefined'){
    //     var ctx2 = document.getElementById('graficasemanal').getContext('2d');
    //     var chart = new Chart(ctx2, {
    //         type: 'pie',
    //         data: 	
    //         {
    //                     datasets: [{
    //                         data: [60,18,10, 8, 4],
    //                         backgroundColor: ['#42a5f5', 'red', 'green','blue','violet'],
    //                         label: 'Comparacion de navegadores'
    //                     }],
    //                     labels: [
    //                         'Google Chrome',
    //                         'Safari',
    //                         'Edge',
    //                         'Firefox',
    //                         'Opera'
    //                     ]},
    //         options: {}
    //     });
    // }

    // if(typeof document.getElementById('graficaedocuenta') != 'undefined'){
    //     var ctx3 = document.getElementById('graficaedocuenta').getContext('2d');
    //     var chart = new Chart(ctx3, {
    //         type: 'pie',
    //         data: 	
    //         {
    //             datasets: [{
    //                 data: [60,40,],
    //                 backgroundColor: ['#6495ED','grey'],
    //                 label: 'Comparacion de navegadores'
    //             }],
    //             labels: [
    //                 'inversion',
    //                 'faltante'
    //             ]
    //         },
    //         options: {}
    //     });
    // }

    update_cart_button();

    //muestra_arbol();
});

function show_todos_tipo_mercancia(tipoMercancia) {
    // iniciarSpinner();
    $.ajax({
        type: "get",
        url: "carrito2/show_todos_tipo_mercancia",
        data: { tipoMercancia: tipoMercancia},
        success:function(msg){
            // FinalizarSpinner();
            $("#mercancias_producto").html(msg);
    
        }
    });
}

function show_todos(idTipoRed) {
    // iniciarSpinner();
    $.ajax({
        type: "get",
        url: "carrito2/show_todos",
        data: { id: idTipoRed},
        success:function(msg){
            // FinalizarSpinner();
            $("#mercancias_producto").html(msg);
    
        }
    });
}

function compra_prev(id,tipo,desc) {
    var datos={'id':id,'tipo':tipo,'desc':desc};
    $.ajax({
        data: {info:JSON.stringify(datos)},
        type: "get",
        url: "carrito2/add_carrito",
        success: function(msg){
            //console.log(msg);
            // $('#putisima_madre').show();
            bootbox.dialog({
                message: msg,
                title: "Descripcion",
                className: "div_info_merc",
                buttons: {
                    danger: {
                        label: "Cancelar",
                        className: "btn-danger",
                        callback: function() {
                            }
                    }
                }
            })
        }
    });
}

function comprar(id,tipo) {
    
    var qty=$("#cantidad").val();
    var inv=$("#inversion").val();

    var datos={'id':id,'tipo':tipo,'inversion':inv,'qty':qty};
    $.ajax({
        data:{info:JSON.stringify(datos)},
        type: 'get',
        url: 'carrito2/add_merc',
        success: function(msg){
            console.log(msg);
            if(msg=="Error")
            {
                bootbox.dialog({
                    message: "¡Ooops! El producto se ha agotado, intente mas tarde porfavor.",
                    title: "Error",
                    className: "",
                    buttons: {
                        danger: {
                        label: "Ok!",
                        className: "btn-danger",
                        callback: function() {
                            }
                        }
                    }
                });
            }
            else
            {
                console.log("no es error");
                bootbox.dialog({
                    message: "El producto se ha añadido al carrito",
                    title: "Exito",
                    className: "",
                    buttons: {
                        success: {
                        label: "Ok!",
                        className: "btn-success",
                        callback: function() {
                                bootbox.hideAll();
                            }
                        }
                    }
                });
                update_cart_button();
            }			
        }
    });
}

function ver_cart() {
    $.ajax({
        type: 'get',
        url: 'carrito2/ver_carrito',
        success: function(msg){
             bootbox.dialog({
                    message: msg,
                    title: "Ver carro",
                    className: "",
                    buttons: {
                        success: {
                        label: "Aceptar",
                        className: "btn-success",
                        callback: function() {
                            }
                        }
                    }
                })
        }
    });
}

function update_cart_button()
{
    console.log("update_cart_button");
    $.ajax({
        type: "get",
        url: "carrito2/printContentCartButton",
        success:function(msg){
            console.log("entro al print");
            $(".cartButton").html(msg);
            
        }
    });
}


function quitar_producto(id) {
    
    $.ajax({
        type: "POST",
        url: "/auth/show_dialog",
        data: {message: '¿ Esta seguro que desea Eliminar la mercancia ?'},
    })
    .done(function( msg )
    {
        bootbox.dialog({
            message: msg,
            title: 'Eliminar Mercancia',
            buttons: {
                success: {
                label: "Aceptar",
                className: "btn-success",
                callback: function() {
                    
                        $.ajax({
                            type: "POST",
                            url: "/ov/compras/quitar_producto",
                            data: {id:id}
                        })
                        .done(function( msg )
                        {
                            window.location.href='/ov/compras/carrito'
                        });//Fin callback bootbox
                    }
        
                },
                    danger: {
                    label: "Cancelar!",
                    className: "btn-danger",
                    callback: function() {

                        }
                }
            }
        })
    });
    
}

function a_comprar() {
    $.ajax({
        type: "get",
        url: "carrito2/DatosEnvio",
        success:function(msg){
            console.log(msg);
            window.location.href=msg;						

            //$(".cartButton").html(msg);
            
        }
    });
    // window.location.href="DatosEnvio";						
}

function muestra_arbol() {
    $.ajax({
        type: "get",
        url: "red2/red_arbol1",
        success:function(msg){
            $('#prueba_arbol').html(msg);
        }
    });
}

function detalles(id)
{
	$.ajax({
		type: "POST",
		url: "/ov/perfil_red/detalle_usuario",
		data: {id: id},
	})
	.done(function( msg )
	{
		bootbox.dialog({
			message: msg,
			title: "Información Personal",
			buttons: {
				success: {
					label: "Cerrar!",
					className: "btn-success",
					callback: function() {
					//location.href="";
					}
				}
			}
		});
	});
}

function subred(id, profundidad)
{
    debugger;
	$("#"+id).children(".quitar").attr('onclick','');

	$.ajax({
		type: "POST",
		url: "/ov/perfil_red/get_red_ver",
		data: {
			id: id,
			red: 1,
			profundidad: profundidad
		},
	})
	.done(function( msg )
	{
		$("#"+id).append(msg);
        $("#"+id).attr("onclick","");
	});
}



//    <h4>Estadísticas de uso de navegadores<br>
// <small>( para el mes de enero del año 2014 )</small></h4>
// <canvas id="lienzo" width="400" height="300">Su navegador no soporta canvas :( </canvas>
// <script>
// var canvas = document.getElementById('lienzo');
// if (canvas && canvas.getContext) {
//   var ctx = canvas.getContext('2d');
//   if (ctx) {
//     var oData = {
//       'IE': '10.2',
//       'Firefox': '26.9',
//       'Chrome': '55.7',
//       'Safari': '3.9',
//       'Opera': '1.8'
//     };
//     var oColores = {
//       'IE': '#6495ED',
//       'Firefox': '#FF8C00',
//       'Chrome': '#FFD700',
//       'Safari': '#32CD32',
//       'Opera': '#DC143C',
//       'otros': '#ddd'
//     };
//     // el radio del gráfico;					
//     var r = 100;
//     // las coordenadas del centro del canvas
//     var X = canvas.width / 2
//     var Y = canvas.height / 2;
//     // dibuja un circulo gris en el centro del canvas
//     ctx.fillStyle = '#ddd';
//     ctx.moveTo(X, Y);
//     ctx.arc(X, Y, r, 0, 2 * Math.PI);
//     ctx.fill();
//     // dibuja un sector circular		
//     var ap = 0;
//     var af = (2 * Math.PI / 100) * oData.Chrome;
//     var Xap = X + r * Math.cos(ap);
//     var Yap = Y + r * Math.sin(ap);

//     ctx.beginPath();
//     ctx.fillStyle = oColores.Chrome;
//     ctx.moveTo(X, Y);
//     ctx.lineTo(Xap, Yap);
//     ctx.arc(X, Y, r, ap, af);
//     ctx.closePath();
//     ctx.fill();
    
    
//   }
// }
// </script> 
 