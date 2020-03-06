var averificar;

function cambiarcolor(answer){
	switch(answer){
		case"boton1":
			document.getElementById(answer).style.backgroundColor= "#66ccff";
			document.getElementById(answer).style.boxShadow="none";
			document.getElementById("boton2").style.backgroundColor= "#0066cc";
			document.getElementById("boton2").style.boxShadow="5px 5px 5px #696969";
			document.getElementById("boton3").style.backgroundColor= "#0066cc";
			document.getElementById("boton3").style.boxShadow="5px 5px 5px #696969";
			document.getElementById("c2").disabled = false;
			document.getElementById("c1").disabled = false;
			averificar=1;
			break;
		case"boton2":
			document.getElementById(answer).style.backgroundColor= "#66ccff";
			document.getElementById(answer).style.boxShadow="none";
			document.getElementById("boton1").style.backgroundColor= "#0066cc";
			document.getElementById("boton1").style.boxShadow="5px 5px 5px #696969";
			document.getElementById("boton3").style.backgroundColor= "#0066cc";
			document.getElementById("boton3").style.boxShadow="5px 5px 5px #696969";
			document.getElementById("c2").disabled = true;
			document.getElementById("c1").disabled = false;
			averificar=2;
			break;
		case"boton3":
			document.getElementById(answer).style.backgroundColor= "#66ccff";
			document.getElementById(answer).style.boxShadow="none";
			document.getElementById("boton1").style.backgroundColor= "#0066cc";
			document.getElementById("boton1").style.boxShadow="5px 5px 5px #696969";
			document.getElementById("boton2").style.backgroundColor= "#0066cc";
			document.getElementById("boton2").style.boxShadow="5px 5px 5px #696969";
			document.getElementById("c1").disabled = true;
			document.getElementById("c2").disabled = false;
			averificar=3
			break;
	}
}

function calcular(gx,fx,c1,c2,n0){
	var potencias1 = [];
	var potencias2 = [];

	for(var i=0; i<gx.length;i++) {
	    if (gx[i] === "^") potencias1.push(i+1);
	}
	for(var i=0; i<fx.length;i++) {
	    if (fx[i] === "^") potencias2.push(i+1);
	}

	let scope = {x:n0}
	switch(averificar){
		case 1:
			var resultado1 = c1*(math.eval(gx,scope));
			var resultado2 = c2*(math.eval(gx,scope));
			var resultado3 = (math.eval(fx,scope));
			if(resultado1<resultado3 && resultado2>resultado3){
				document.getElementById("res").innerHTML = "Si es &#920";
				document.getElementById("res").style.color = "#009933";
				document.body.style.transition = "all 1s";
				document.body.style.backgroundImage = "url('imagenes/fondo2v.png')";
			}else {
				document.getElementById("res").innerHTML = "No es &#920";
				document.getElementById("res").style.color = "#ff3300";
				document.body.style.transition = "all 1s";
				document.body.style.backgroundImage = "url('imagenes/fondo2r.png')";
			}
			break;
		case 2:
			var resultado1 = c1*(math.eval(gx,scope));
			var resultado2 = (math.eval(fx,scope));
			if(resultado1<resultado2){
				document.getElementById("res").innerHTML = "Si es &#937";
				document.getElementById("res").style.color = "#009933";
				document.body.style.transition = "all 1s";
				document.body.style.backgroundImage = "url('imagenes/fondo2v.png')";
			}else{
				document.getElementById("res").innerHTML = "No es &#937";
				document.getElementById("res").style.color = "#ff3300";
				document.body.style.transition = "all 1s";
				document.body.style.backgroundImage = "url('imagenes/fondo2r.png')";
			}
			break;
		case 3:
			var resultado1 = c2*(math.eval(gx,scope));
			var resultado2 = (math.eval(fx,scope));
			if(resultado1>resultado2){
				document.getElementById("res").innerHTML = "Si es O";
				document.getElementById("res").style.color = "#009933";
				document.body.style.transition = "all 1s";
				document.body.style.backgroundImage = "url('imagenes/fondo2v.png')";
			}else{
				document.getElementById("res").innerHTML = "No es O";
				document.getElementById("res").style.color = "#ff3300";
				document.body.style.transition = "all 1s";
				document.body.style.backgroundImage = "url('imagenes/fondo2r.png')";
			}
			break;
	}
}
