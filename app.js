function guardarNombre(){

    let nombre =document.getElementById("nombreGuardar").value.trim();

    if(nombre===""){
        alert("Por favor ingrese el nombre🤗");
        return;
    }else{
        let listaNombres =JSON.parse(localStorage.getItem("Nombre")) ||[];
        listaNombres.push(nombre);

        localStorage.setItem("Nombre", JSON.stringify(listaNombres));

        document.getElementById("nombreGuardar").value ="";
        document.getElementById("resultadoGuardar").innerText=`Nombre guardado ${nombre}`;
        `Nombre guardado : ${nombre} - Total nombres: ${listaNombres.length}`
    }
}

function mostrarNombre(){

    let listaNombres = JSON.parse(localStorage.getItem("Nombre")) || [];

    let resultado = document.getElementById("resultadoMostrar");

    if (listaNombres.length === 0) {
        resultado.innerHTML ="<li>No hay nombres guardados</li>";
        return;
    }


    resultado.innerHTML = listaNombres.map(n => `<li>${n}</li>`).join("");

}

function editarNombre(){

    let posicion  = document.getElementById("posicionEditar").value;

    let nuevoNombre = document.getElementById("nuevoNombre").value.trim();

    let listaNombres = JSON.parse(localStorage.getItem("Nombre")) || [];

    if(posicion === "" || nuevoNombre === ""){
        alert("Complete todos los campos✌️"); 
        return;
    }

    posicion = Number(posicion) -1;

    if(posicion <0 || posicion>= listaNombres.length){
        alert("La posición no existe❌");
        return;
    }

    listaNombres[posicion] = nuevoNombre;

    localStorage.setItem("Nombre", JSON.stringify(listaNombres));

    document.getElementById("resultadoEditar").innerText =
    "Nombre actualizado correctamente🥰";
         
    document.getElementById("nuevoNombre").value ="";
} 

function eliminarNombre(){

    localStorage.removeItem("Nombre");

    document.getElementById("resultadoEliminar").innerText =
        "Se eliminaron todos los nombres🥰"
}

function guardarMascota(){
    const mascota={
        nombre: document.getElementById("mascota").value.trim(),
        raza: document.getElementById("raza").value.trim(),
        edad:Number(document.getElementById("edad").value)
    };
    
    localStorage.setItem("mascota", JSON.stringify(mascota));
    document.getElementById("resultadoMascota").textContent =
    "Mascota guardada correctamente❤️🐾"; 
}