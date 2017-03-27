var enviar = document.getElementById("enviar");
var pacientes = [];

enviar.addEventListener("click", function(evento){
  evento.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad = document.getElementById("edad").value;
  var genero = document.getElementById("genero").value;
  var ciudad = document.getElementById("ciudad").value;
  var pais = document.getElementById("pais").value;

  function Datos(nombre, apellido, edad, genero, ciudad, pais) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.genero = genero;
      this.ciudad = ciudad;
      this.pais = pais;
      this.ficha = function mostrarFicha(nombre,apellido,edad,pais){
          return "<div class='datos-paciente'> Nombre: " + this.nombre + " " + this.apellido + "<br>" + "Edad: " + this.edad + "<br>" + "País: " + this.pais + "</div><br>";
      }
  };
  pacientes.push(new Datos(nombre,apellido,edad,genero,ciudad,pais));

  if (nombre == "" || apellido == "" || edad == "" || pais == ""){
     alert("Por favor ingrese \n Nombre \n Apellido \n Edad \n País");
   } else{
      var imprimir = document.getElementById("imprimir");
      imprimir.innerHTML += pacientes[pacientes.length-1].ficha();
      document.getElementById("fichaDatos").reset()
  }
})

  var validLetras = function(e){
    var codigoTecla = e.keyCode;
    console.log(codigoTecla);
    if((codigoTecla >= 97 && codigoTecla <= 122) || (codigoTecla >= 65 && codigoTecla <= 90) || codigoTecla == 39 || codigoTecla == 32){
      this.nextElementSibling.nextElementSibling.innerText="";
      return true;
    } else {
      this.nextElementSibling.nextElementSibling.innerText="*Este campo solo permite letras"
      return false;
    }
  }

  var validNumeros =  function(n){
    var codigoTecla = n.keyCode;
    console.log(codigoTecla);
    if(codigoTecla >= 48 && codigoTecla <= 57 && this.value.length < 2){
      return true;
    } else {
      return false;
    }}

  nombre.onkeypress = validLetras;
  apellido.onkeypress = validLetras;
  edad.onkeypress=validNumeros;

  var inputs = document.getElementsByClassName("input-registro");
  var validacionInput = function(){
    if(this.value.trim().length == 0){
      this.value = "";
      this.nextElementSibling.nextElementSibling.innerText = "*Este campo es obligatorio";
    } else{
      this.nextElementSibling.nextElementSibling.innerText="";
    }

    var arreglo = this.value.split(" ");
    var arrMayus = "";
    for(var i=0; i<arreglo.length; i++){
      arrMayus += arreglo[i].charAt(0).toUpperCase()+ arreglo[i].substring(1).toLowerCase() + " ";
    }
    this.value= arrMayus;
  }
  for(var i=0; i<inputs.length; i++){
    inputs[i].onblur=validacionInput;
  }
