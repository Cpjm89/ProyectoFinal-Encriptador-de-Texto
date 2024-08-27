const botonEncriptar = document.querySelector(".estilo-encriptar");
const EncriptarTexto = document.querySelector(".textarea-format");
const aviso = document.querySelector(".texto-alerta-minusculas");
const resultado = document.querySelector(".textarea-format2");
const quitarImagen = document.querySelector(".segundacaja-contenido");
const BotonDeCopiar = document.querySelector(".boton-copiar");

const botonDesEncriptar = document.querySelector(".estilo-desencriptar");


botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = EncriptarTexto.value;
    let txt = texto.normalize ("NFD").replace (/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto !==txt){
        aviso.style.color = "#FF0000";
        aviso.textContent = "Error: No debes incluir acentos y/o caracteres especiales.";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.color = "#FF0000";
        aviso.textContent = "Error: No debes incluir letras mayúsculas.";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace (/e/mg, "enter");
        texto = texto.replace (/i/mg, "imes");
        texto = texto.replace (/a/mg, "ai");
        texto = texto.replace (/o/mg, "ober");
        texto = texto.replace (/u/mg, "ufat");

        resultado.innerHTML = texto;
        BotonDeCopiar.style.visibility = "inherit";
        quitarImagen.remove();
    }
});


botonDesEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = EncriptarTexto.value;
    let txt = texto.normalize ("NFD").replace (/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto !==txt){
        aviso.style.color = "#FF0000";
        aviso.textContent = "Error: No debes incluir acentos y/o caracteres especiales.";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.color = "#FF0000";
        aviso.textContent = "Error: No debes incluir letras mayúsculas.";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace (/enter/mg, "e");
        texto = texto.replace (/imes/mg, "i");
        texto = texto.replace (/ai/mg, "a");
        texto = texto.replace (/ober/mg, "o");
        texto = texto.replace (/ufat/mg, "u");

        resultado.innerHTML = texto;
        BotonDeCopiar.style.visibility = "inherit";
        quitarImagen.remove();
    }
});

BotonDeCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = resultado;
    copiar.select();
    document.execCommand("copy");
});