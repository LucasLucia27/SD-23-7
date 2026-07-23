const checks = document.querySelectorAll("input[type='checkbox']");

checks.forEach(check=>{

    check.addEventListener("change",()=>{

        console.log(check.parentElement.textContent.trim(),check.checked);

    });

});

const buscador=document.querySelector(".search input");

buscador.addEventListener("keyup",(e)=>{

    console.log("Buscando:",e.target.value);

});
/*=============================
      FILTRO POR ESTRELLAS
=============================*/

const ratingChecks = document.querySelectorAll(".rating-filter");
const cards = document.querySelectorAll(".card-taller");

ratingChecks.forEach(check => {

    check.addEventListener("change", filtrarGasolineras);

});

function filtrarGasolineras(){

    const activos = [];

    ratingChecks.forEach(check=>{

        if(check.checked){

            activos.push(parseInt(check.value));

        }

    });

    cards.forEach(card=>{

        const rating = parseFloat(card.dataset.rating);

        if(activos.length===0){

            card.style.display="flex";

        }else{

            const mostrar = activos.some(valor=> rating>=valor);

            card.style.display = mostrar ? "flex" : "none";

        }

    });

}


/*=============================
      LIMPIAR FILTROS
=============================*/

document.getElementById("limpiarFiltros").addEventListener("click",()=>{

    ratingChecks.forEach(check=>{

        check.checked=false;

    });

    filtrarGasolineras();

});