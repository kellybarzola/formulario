let mostrar = document.getElementById('mostrar');
let btnIniciarSesion = document.getElementById('btnIniciarSesion');

btnIniciarSesion.addEventListener('click',mostrarJSON);

function mostrarJSON(){
    fetch('data.json')
    .then(function(res){
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        let resultado = ''; 
        data.forEach( celular => {
            resultado +=`
            <div class="producto">
                <p> ${celular.Modelo} </p>
                <br>
                <p> ${celular.precio} </p>
                <br>
                <a href="${celular.webpage}">
                <img src="${celular.img}" width="200px" height="200px">
                <a/>
                <br>
            </div>`
        });
        (document.getElementById('resultado').innerHTML) = resultado;
    })
}

