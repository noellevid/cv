//Menu lateral
var URLactual = window.location.pathname;
const habilidadesURL = "CV/habilidades.html";
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

if (URLactual.match(habilidadesURL)) {

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let python = document.getElementById("python");
crearBarra(python);
let mysql = document.getElementById("mysql");
crearBarra(mysql);
let angular = document.getElementById("angular");
crearBarra(c);
let c = document.getElementById("c");
crearBarra(c);
let excel = document.getElementById("excel");
crearBarra(excel);


let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
let entro = false;


function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalPython = setInterval(function(){
            pintarBarra(python, 16, 0, intervalPython);
        },100);
        const intervalMysql = setInterval(function(){
            pintarBarra(mysql, 15, 3, intervalMysql);
        },100);
        const intervalAngular = setInterval(function(){
            pintarBarra(angular, 11, 5, intervalAngular);
        },100);
        const intervalC = setInterval(function(){
            pintarBarra(c, 11, 6, intervalC);
        },100);
        const intervalExcel = setInterval(function(){
            pintarBarra(excel, 11, 2, intervalExcel);
        },100);

    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#f2f53fe7";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}
}
