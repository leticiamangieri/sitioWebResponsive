let opciones=document.getElementById("opciones");
let lista=document.getElementById("lista");


opciones.addEventListener("click",function(){
    if (window.innerWidth < 992) {                  //solo pantallas pequeñas
            lista.classList.toggle("d-none");
        }
    });