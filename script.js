
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    
    var nombre = document.getElementById("firstname").value;
    var apellido = document.getElementById("lastname").value;
    var fechaNacimiento = document.getElementById("nacimiento").value;

    
    var registro = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    
    var jsonData = JSON.stringify(registro);

    
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('registro:', data);
        alert('se registro!');
    })
    .catch(error => {
        console.error('error:', error);
        alert('no funca');
    });
});












/*

var formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(e){
    e.preventDefault();

   

console.log('hiciste click')

var datos = new FormData (formulario) 

 })



 /*
const name = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const nacimiento = document.getElementById('nacimiento');
const json = document.getElementById('json');

btn.addEventListener('click', () => {
    const obj = {
      nombre: fisrtname.value,
      lastname: lastname.value,
      nacimiento: nacimiento.value,
    };
    json.innerHTML = JSON.stringify(obj);
  });  */