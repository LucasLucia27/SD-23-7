/* ==========================
   CAMBIO DE IDIOMA CATÁLOGO
========================== */

const traducciones = {
    es: {
        // Menú
        inicio: "INICIO",
        catalogo: "CATÁLOGO",
        recursos: "RECURSOS",
        contacto: "CONTACTO",

        // Título
        titulo: "Explora los Vehículos",

        // Categorías
        electricos: "Autos Eléctricos",
        deportivos: "Autos Deportivos",
        camionetas: "Camionetas",

        // Vehículos
        nombre1: "Land Cruiser",
        nombre2: "Sequoia",
        nombre3: "Tundra",
        nombre4: "RAV4",

        // Descripciones
        descripcion1: "Hecha con el espíritu de la original y diseñada con el propósito del presente.",
        descripcion2: "Equipada y capacitada para dominar.",
        descripcion3: "Potentemente equipada para todos tus días.",
        descripcion4: "Una SUV cómoda, segura y eficiente, ideal para la ciudad y los viajes gracias a su espacio y versatilidad.",

        // Botón
        explorar: "Explorar"
    },

    en: {
        // Menú
        inicio: "HOME",
        catalogo: "CATALOG",
        recursos: "RESOURCES",
        contacto: "CONTACT",

        // Título
        titulo: "Explore Vehicles",

        // Categorías
        electricos: "Electric Cars",
        deportivos: "Sports Cars",
        camionetas: "SUVs",

        // Vehículos
        nombre1: "Land Cruiser",
        nombre2: "Sequoia",
        nombre3: "Tundra",
        nombre4: "RAV4",

        // Descripciones
        descripcion1: "Built with the spirit of the original and designed for today's purpose.",
        descripcion2: "Equipped and capable to dominate.",
        descripcion3: "Powerfully equipped for every day.",
        descripcion4: "A comfortable, safe and efficient SUV, ideal for city driving and long trips thanks to its space and versatility.",

        // Botón
        explorar: "Explore"
    }
};

// ==========================
// BOTONES DE IDIOMA
// ==========================

document.getElementById("idiomaBtnEs").addEventListener("click", () => {
    cambiarIdioma("es");
    localStorage.setItem("idioma", "es");
});

document.getElementById("idiomaBtnEN").addEventListener("click", () => {
    cambiarIdioma("en");
    localStorage.setItem("idioma", "en");
});

// ==========================
// FUNCIÓN PRINCIPAL
// ==========================

function cambiarIdioma(idioma) {

    // Menú
    document.getElementById("navInicio").textContent = traducciones[idioma].inicio;
    document.getElementById("navCatalogo").textContent = traducciones[idioma].catalogo;
    document.getElementById("navRecursos").textContent = traducciones[idioma].recursos;
    document.getElementById("navContacto").textContent = traducciones[idioma].contacto;

    // Título
    document.getElementById("Exploralosvehículos").textContent =
        traducciones[idioma].titulo;

    // Categorías
    const categorias = document.querySelectorAll(".categorias a");

    categorias[0].textContent = traducciones[idioma].electricos;
    categorias[1].textContent = traducciones[idioma].deportivos;
    categorias[2].textContent = traducciones[idioma].camionetas;

    // Nombres de vehículos
    document.getElementById("Landi-cruiser").textContent =
        traducciones[idioma].nombre1;

    document.querySelectorAll(".tarjeta h3")[1].textContent =
        traducciones[idioma].nombre2;

    document.getElementById("Toyota-tundra").textContent =
        traducciones[idioma].nombre3;

    document.querySelectorAll(".tarjeta h3")[3].textContent =
        traducciones[idioma].nombre4;

    // Descripciones
    document.getElementById("Hecha").textContent =
        traducciones[idioma].descripcion1;

    document.getElementById("Equipada").textContent =
        traducciones[idioma].descripcion2;

    document.getElementById("Hecha2").textContent =
        traducciones[idioma].descripcion3;

    document.getElementById("Equipada2").textContent =
        traducciones[idioma].descripcion4;

    // Botones
    document.querySelectorAll(".btn").forEach(btn => {
        btn.textContent = traducciones[idioma].explorar;
    });

    // Cambiar idioma del documento
    document.documentElement.lang = idioma;
}

// ==========================
// CARGAR IDIOMA GUARDADO
// ==========================

const idiomaGuardado = localStorage.getItem("idioma") || "es";
cambiarIdioma(idiomaGuardado);