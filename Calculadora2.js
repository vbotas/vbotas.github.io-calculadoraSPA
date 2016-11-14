$(document).ready(function() {
	var pantalla = '';
	var num1=00;
	var operacion = 0;

//CODIGO PARA LAS TECLAS DE CLASE "botonNumero"
	$('.botonNumero').mouseenter(function() {
			$(this).css("background", "#757575");
		});
		$('.botonNumero').mouseleave(function() {
			$(this).css("background", "#232223");
		});
	$('.botonNumero').click(function(){
		if (operacion===0) {
		num1 = parseInt($(this).html());
		pantalla = pantalla + ($(this).html());
		$('#pantalla').text(pantalla);
		numero1=parseInt(pantalla);
		console.log('El numero1 es ' + numero1);
		}
		else {
		num2 = parseInt($(this).html());
		pantalla = pantalla + ($(this).html());
		$('#pantalla').text(pantalla);
		numero2=parseInt(pantalla);
		console.log('El numero2 es ' + numero2);
		}
	});


//CODIGO PARA LAS TECLAS DE CLASE "botonOperador"
	$('.botonOperador').mouseenter(function() {
		$(this).css("background", "#757575");
	});
	$('.botonOperador').mouseleave(function() {
		$(this).css("background", "#232223");
	});
	$('.botonOperador').click(function() {
		//console.log(numero1);
		operador = $(this).html();
		if (operador === '+') {
			operacion = 1;
		}
		else if (operador === '-') {
			operacion = 2;
		}
		else if (operador === 'x') {
			operacion = 3;
		}
		else if (operador === '/') {
			operacion = 4;
		}
		else if (operador === 'sgn') {
			operacion = 5;
		}
		/*else if (operador === '.') {
			operacion = 6;
		}*/
		else if (operador === 'C') {
			numero1 = 0;
			numero2 = 0;
			num1 = 0;
			num2 = 0;
			operacion = 0;
			pantalla = '';
			$('#pantalla').text('');
		}
		console.log(numero1 + ' ' + operador);
		$('#pantalla').text('');
		pantalla = '';
		//console.log(pantalla);
		console.log('La operacion es ' + operacion);
	});

//CODIGO PARA LA TECLA "igual".
	$('#igual').mouseenter(function() {
		$(this).css("background", "#757575");
	});
	$('#igual').mouseleave(function() {
		$(this).css("background", "#232223");
	});
	$('#igual').click(function() {
		switch (operacion) {
			case 1:
			result = parseFloat(numero1) + parseFloat(numero2);
			$('#pantalla').text(result);
			break;
		case 2:
			result = parseFloat(numero1) - parseFloat(numero2);
			$('#pantalla').text(result);
			break;
		case 3:
			result = parseFloat(numero1) * parseFloat(numero2);
			$('#pantalla').text(result);
			break;
		case 4:
			result = parseFloat(numero1) / parseFloat(numero2);
			$('#pantalla').text(result);
			break;
		case 5:
			result = -numero1;
			$('#pantalla').text(result);
			break;
		}
	});

});
