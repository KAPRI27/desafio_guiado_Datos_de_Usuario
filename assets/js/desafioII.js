//url https://randomuser.me/api

const boton = document.querySelector('#boton');

const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');



const usuario = async() => {

  try{
    const url = `https://randomuser.me/api/?results=10`;
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const data = results[0];
    console.log(data);
    
    
    foto.src = data.picture.large;
    nombre.textContent = data.name.first + " " +  data.name.last;
    email.textContent = data.email;
    telefono.textContent = data.phone;
    
  }
  catch(error) {
    console.error("¡OH por Dios! No lo encontramos... y ahora ¿quién podrá ayudarnos?");
  }
}

boton.addEventListener('click', usuario);