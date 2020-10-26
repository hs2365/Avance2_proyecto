let enviar = document.getElementById('btnEnviar');


const guardarComentario = (e, nombre, email, pais, mensaje) => {
   // Construyendo un objeto literal que contiene los datos del usuario
   const obj = {
      nombre,
      email,
      pais,
      mensaje
   }

   let comentarios;

   // Verificando si hay datos guardados en localstorage
   if(localStorage.getItem('comentarios') === null) {
      comentarios = [];
   } else {
      comentarios = JSON.parse(localStorage.getItem('comentarios'));
   }

   comentarios.push(obj);

   localStorage.setItem('comentarios', JSON.stringify(comentarios));

   //e.preventDefault();
}
// Eventos
enviar.addEventListener("click", (e) => {
   // Obteniendo los datos ingresados por el usuario
   const nombre = document.getElementById('nombre').value;
   const email = document.getElementById('email').value;
   const pais = document.getElementById('pais').value;
   const mensaje = document.getElementById('mensaje').value;
   
   // Verificando que se esten recibiendo todos los datos
   if(nombre != "" && email != "" && mensaje != "") {
      guardarComentario(e, nombre, email, pais, mensaje);
   }   
});

const comentarios = JSON.parse(localStorage.getItem('comentarios'));

comentarios.forEach( (mensajes) => {
   // creando los nodos en el documento
   // Obteniendo el contenedor de los comentarios
   let article = document.getElementById('comentarios');
   let div = document.createElement('div');
   let email = document.createElement('p');

   // Creando el contenedor de los datos nombre y pais
   let datos = document.createElement('div');
   let nombre = document.createElement('p');

   // Agregando atributos como la clase al parrafo que contiene el email del usuario
   email.setAttribute('class', 'email');
   email.textContent = mensajes.email;

   div.appendChild(email);
   div.setAttribute('class', 'mensajes');

   // Datos (nombre, pais)
   datos.setAttribute('class', 'datos');
   nombre.textContent = "Nombre: " + mensajes.nombre;

   // Ingresando los objetos datos dentro del div
   datos.appendChild(nombre);
   div.appendChild(datos);

   // Creando un nuevo nodo para el pais
   let pais = document.createElement('p');
   // Agregando los atributos
   pais.setAttribute('class', 'datos-info');
   // Agregando el contenido
   pais.textContent = "País: " + mensajes.pais;
   // Agregando el dato en el contenedor datos
   datos.appendChild(pais);

   // Nodo del mensaje ingresado por el usuario
   let comentario = document.createElement('textarea');
   // Atributos
   comentario.setAttribute('class', 'textarea-mensaje');
   comentario.setAttribute('readonly', 'readonly');
   // Contenido
   comentario.textContent = mensajes.mensaje;

   // Agregando el mensaje al contenedor div
   div.appendChild(comentario);

   article.appendChild(div);
});