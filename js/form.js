function validar(){
	var nombre, correo, pais, mensaje, expresion;
	nombre = document.getElementsById("nombre").value;
	correo = document.getElementsById("email").value;
	pais = document.getElementsById("pais").value;
	mensaje = document.getElementsById("mensaje").value;

    expresion = /\w+@\w+\.+[a-z]/;

	if(nombre === "" || correo === "" || pais === "" || mensaje === ""  ){
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if(nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}
	else if(correo.length>100){
		alert("El correo es muy largo");
		return false;
	}
	else if (!expresion.test(correo)) {
		alert("El correo no es válido");
		return false;

	}
	else if(pais.length>30){
		alert("El pais es muy largo");
		return false;
	}
};



var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
    	if (this.value.length>=1) {
    		this.nextElementSibling.classList.add('fijar');
    } else{
    	this.nextElementSibling.classList.remove('fijar');
    }
  });
}
