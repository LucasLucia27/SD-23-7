/* =====================
   TRADUCCIONES
===================== */

const traducciones = {

    es: {

        // NAV
        inicio: "INICIO",
        catalogo: "CATÁLOGO",
        recursos: "RECURSOS",
        contacto: "CONTACTO",

        // TITULO
        exploralosvehiculos: "Explora los Vehículos",

        // CATEGORÍAS
        electricos: "Autos Eléctricos",
        deportivos: "Autos Deportivos",
        camionetas: "Camionetas",

        // TARJETA 1
        prius: "Prius",
        hecha: "Dinámica con o sin movimiento.",
        explorar: "Explorar",

        // TARJETA 2
        equipada: "Alegría y felicidad en cada viaje.",
        explorar2: "Explorar",

        // TARJETA 3
        bz: "bZ",
        hecha2: "Hecha para moverte. Diseñada para electrizarte.",
        explorar3: "Explorar",

        // TARJETA 4
        camry: "Camry",
        equipada2: "Siente la emoción cada día con estilo.",
        explorar4: "Explorar"

    },

    en: {

        // NAV
        inicio: "HOME",
        catalogo: "CATALOG",
        recursos: "RESOURCES",
        contacto: "CONTACT",

        // TITULO
        exploralosvehiculos: "Explore the Vehicles",

        // CATEGORÍAS
        electricos: "Electric Cars",
        deportivos: "Sports Cars",
        camionetas: "SUVs",

        // TARJETA 1
        prius: "Prius",
        hecha: "Dynamic with or without movement.",
        explorar: "Explore",

        // TARJETA 2
        equipada: "Joy and happiness on every trip.",
        explorar2: "Explore",

        // TARJETA 3
        bz: "bZ",
        hecha2: "Built to move you. Designed to electrify you.",
        explorar3: "Explore",

        // TARJETA 4
        camry: "Camry",
        equipada2: "Feel the excitement every day in style.",
        explorar4: "Explore"

    }

};


/* =====================
   CAMBIO DE IDIOMA
===================== */

function cambiarIdioma(idioma){

    const t = traducciones[idioma];

    function cambiar(id, texto){
        const elemento = document.getElementById(id);
        if(elemento){
            elemento.textContent = texto;
        }
    }

    // NAV
    cambiar("navInicio", t.inicio);
    cambiar("navCatalogo", t.catalogo);
    cambiar("navRecursos", t.recursos);
    cambiar("navContacto", t.contacto);

    // TÍTULO
    cambiar("Exploralosvehiculos", t.exploralosvehiculos);

    // CATEGORÍAS
    cambiar("autosElectricos", t.electricos);
    cambiar("AutosDeportivos", t.deportivos);
    cambiar("Camionetas", t.camionetas);

    // TARJETA 1
    cambiar("Prius", t.prius);
    cambiar("Hecha", t.hecha);
    cambiar("Explorar", t.explorar);

    // TARJETA 2
    cambiar("Equipada", t.equipada);
    cambiar("Explora2", t.explorar2);

    // TARJETA 3
    cambiar("bZ", t.bz);
    cambiar("Hecha2", t.hecha2);
    cambiar("Explorar3", t.explorar3);

    // TARJETA 4
    cambiar("Camry", t.camry);
    cambiar("Equipada2", t.equipada2);
    cambiar("Explora4", t.explorar4);

    document.documentElement.lang = idioma;
}

/* =====================
   BOTONES
===================== */

document.getElementById("idiomaBtnEs").addEventListener("click", () => {
    cambiarIdioma("es");
});

document.getElementById("idiomaBtnEN").addEventListener("click", () => {
    cambiarIdioma("en");
});


// Idioma por defecto
cambiarIdioma("es");