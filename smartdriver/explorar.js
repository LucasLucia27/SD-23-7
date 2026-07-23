//==========================
// TABS INTERIOR / EXTERIOR / 360
//==========================

const tabs = document.querySelectorAll(".tab");
const contenidos = document.querySelectorAll(".contenido");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(boton => {
            boton.classList.remove("active");
        });

        contenidos.forEach(panel => {
            panel.classList.remove("active");
        });

        tab.classList.add("active");

        const panel = document.getElementById(tab.dataset.tab);

        panel.classList.add("active");

        panel.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(20px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 350,
                easing: "ease"
            }
        );

    });

});

//==========================
// CAMBIO DE COLOR
//==========================

function changeColor(image, button){

    document.getElementById("carImage").src = image;

    document.querySelectorAll(".color").forEach(color => {

        color.classList.remove("active");

    });

    button.classList.add("active");

}
//==========================
// EFECTO HOVER
//==========================

const imagenes = document.querySelectorAll("img");

imagenes.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});