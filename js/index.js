document.addEventListener("DOMContentLoaded", ()=>{
    let user = localStorage.getItem('usuario');
    
    if (user == null) {
      alert("Para continuar debe ingresar al sitio con su usuario y contraseña");
      location.href= 'login.html';
    } else {
      document.getElementById('usuario').innerHTML = user;
    };
      
    })

document.getElementById('cerrar').addEventListener("click", ()=> {
    alert("Cerrando sesión");
    localStorage.clear();
    location.href= 'index.html';
})



document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});
