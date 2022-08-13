function login() {
    let usuario = document.getElementById('usuario').value;
    let contrasena = document.getElementById('contrasena').value;

    if (usuario ==="" || contrasena ==="") {

    alert("Debe ingresar usuario y contraseña")    

    } else {
        localStorage.setItem('usuario',usuario);
        localStorage.setItem('contrasena',contrasena)
        location.href= 'index.html';
    }
}

document.addEventListener('DOMContentLoaded',()=> {

    document.getElementById('ingresar').addEventListener('click', ()=> {
        login();
    })

})

