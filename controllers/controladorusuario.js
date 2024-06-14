
let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method:"GET",
    headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    // recorriendo la respuesta para hacer render

    let fila=document.getElementById("fila")
    respuesta.forEach(function(usuario){
    let columna=document.createElement("div") 
    columna.classList.add("col") 
    let tarjeta=document.createElement("div") 
    tarjeta.classList.add("card","shadow","h-100")
    

    let nombreUsuario=document.createElement("h3")
    nombreUsuario.classList.add("text-center")
    nombreUsuario.textContent=usuario.nombres

    
    let Cedula=document.createElement("h3")
    Cedula.classList.add("text-center")
    Cedula.textContent=usuario.cedula
    
    let Correo=document.createElement("h3")
    Correo.classList.add("text-center")
    Correo.textContent=usuario.correo


    
    tarjeta.appendChild(nombreUsuario)
    tarjeta.appendChild(Cedula)
    tarjeta.appendChild(Correo)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    })
})
.catch(function(respuesta){
    console.log(respuesta)
})