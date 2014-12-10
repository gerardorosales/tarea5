$(document).ready(function(){

	$('a').click(function(){
	$('html, body').animate({
	    scrollTop: $( $.attr(this, 'href') ).offset().top}, 700);
	    return false;
	});

	$('.borrar').click(function() {
	    $(this).parent().toggle(1000);
   	});   	

    var botonDisabled=true;


    $(document).on('click','.fav',function(){
                if(botonDisabled==true)
                {
                    $(this).replaceWith("<img class='der fav' src='img/04.jpg' alt='Favorito'/>");
                    botonDisabled=false;
                }else{
                    $(this).replaceWith("<img class='der fav' src='img/02.jpg' alt='Favorito'/>");
                    botonDisabled=true;
                }
            });

	$('.carrito').click(function(evento){
     	$('#comprasT').html("<h3>Tus compras:</h3>");
   });

	$('#carrito1').click(function(evento){
     	$('#compras').append("<div class='compra'> <p>Canon EOS 1200D - $5900 <a class='cerrar' href='#compras'> <img src='img/x.png' alt='x'/></a></p></div>");
     	$(this).parent().parent().parent().toggle(1200);
     	$(this).parent().parent().parent().replaceWith("<div class='grid_1 movil'><img class='producto' src='img/snx1000 01.jpg' alt='' /><h3>Samsung NX1000</h3><p>Cámara compacta de 21.1 Mp pantalla de 3', zoom óptico 26x, estabilizador, vídeo Full HD</p><div class='precio'>$7300</div><div class='grid_4'><a href='#compras'><img id='carrito5' class='der carrito' src='img/03.jpg' alt='Comprar'/></a><img class='der fav' src='img/02.jpg' alt='Favorito'/></div></div>");
  });

	$('#carrito2').click(function(evento){
     	$('#compras').append("<div class='compra'> <p>Nikon D3100 - $7200 <a class='cerrar' href='#compras'> <img src='img/x.png' alt='x'/></a></p></div>");
     	$(this).parent().parent().parent().toggle(1200);
     	$(this).parent().parent().parent().replaceWith("<div class='grid_1 movil'><img class='producto' src='img/ct5 01.jpg' alt='' /><h3>Canon t5</h3><p>Cámara compacta de 21.1 Mp pantalla de 3', zoom óptico 26x, estabilizador, vídeo Full HD</p><div class='precio'>$5300</div><div class='grid_4'><a href='#compras'><img id='carrito6' class='der carrito' src='img/03.jpg' alt='Comprar'/></a><img class='der fav' src='img/02.jpg' alt='Favorito'/></div></div>");
     });

	$('#carrito3').click(function(evento){
     	$('#compras').append("<div class='compra'> <p>Sony DSC-HX400 - $5400 <a class='cerrar' href='#compras'> <img src='img/x.png' alt='x'/></a></p></div>");
     	$(this).parent().parent().parent().toggle(1000);
     	$(this).parent().parent().parent().replaceWith("<div class='grid_1 movil'><img class='producto' src='img/sa700 01.jpg' alt='' /><h3>Sony a700</h3><p>Cámara compacta de 21.1 Mp pantalla de 3', zoom óptico 26x, estabilizador, vídeo Full HD</p><div class='precio'>$7000</div><div class='grid_4'><a href='#compras'><img id='carrito7' class='der carrito' src='img/03.jpg' alt='Comprar'/></a><img class='der fav' src='img/02.jpg' alt='Favorito'/></div></div>");
     });

	$('#carrito4').click(function(evento){
     	$('#compras').append("<div class='compra'> <p>Nikon L620 - $3400 <a class='cerrar' href='#compras'> <img src='img/x.png' alt='x'/></a></p></div>");
     	$(this).parent().parent().parent().toggle(100);
     	$(this).parent().parent().parent().toggle(1000);
     	$(this).parent().parent().parent().replaceWith("<div class='grid_1 movil'><img class='producto' src='img/m7000 01.jpg' alt='' /><h3>Minolta AF7000</h3><p>Cámara compacta de 21.1 Mp pantalla de 3', zoom óptico 26x, estabilizador, vídeo Full HD</p><div class='precio'>$3300</div><div class='grid_4'><a href='#compras'><img id='carrito8' class='der carrito' src='img/03.jpg' alt='Comprar'/></a><img class='der fav' src='img/02.jpg' alt='Favorito'/></div></div>");
     });

	$(document).on('click','#carrito5',function(){
     	$('#compras').append("<div class='compra'> <p>Samsung NX1000- $7300 <a class='cerrar' href='#compras'> <img src='img/x.png' alt='x'/></a></p></div>");
     	$(this).parent().parent().parent().toggle(1000);
	});
	$(document).on('click','#carrito6',function(){
     	$('#compras').append("<div class='compra'> <p>Canon T5 - $5300 <a class='cerrar' href='#compras'> <img src='img/x.png' alt='x'/></a></p></div>");
     	$(this).parent().parent().parent().toggle(1000);
	});
	$(document).on('click','#carrito7',function(){
     	$('#compras').append("<div class='compra'> <p>Sony a700 - $7000 <a class='cerrar' href='#compras'> <img src='img/x.png' alt='x'/></a></p></div>");
     	$(this).parent().parent().parent().toggle(1000);
	});
	$(document).on('click','#carrito8',function(){
		
     	$('#compras').append("<div class='compra'> <p>Minolta AF7000 - $3300 <a class='cerrar' href='#compras'> <img src='img/x.png' alt='x'/></a></p></div>");
     	$(this).parent().parent().parent().toggle(1000);
   
	});
	});

	$(document).on('click','div.compra a',function(){//busca las etiquetas a dentro de los contenedores de clase compra
			$(this).parent().remove();
	});