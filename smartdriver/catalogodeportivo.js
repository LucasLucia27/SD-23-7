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

        // TÍTULO
        tituloCatalogo: "Explora los Vehículos",

        // CATEGORÍAS
        electricos: "Autos Eléctricos",
        deportivos: "Autos Deportivos",
        camionetas: "Camionetas",

        // TARJETA 1
        supra: "Toyota GR Supra",
        hecha: "Conduce en el mundo impulsado por adrenalina del GR Supra",
        explorar: "Explorar",

        // TARJETA 2
        porsche: "Porsche 911 Turbo S",
        equipada: "Un deportivo de lujo reconocido por su velocidad, precisión y comodidad para el uso diario",
        explorar2: "Explorar",

        // TARJETA 3
        nissan: "Nissan Z",
        hecha2: "Un potente motor V6 biturbo en la parte delantera y una transmisión manual estándar en la parte central",
        explorar3: "Explorar",

        // TARJETA 4
        ferrari: "Ferrari 296 GTB",
        equipada2: "Un superdeportivo híbrido que combina un diseño elegante con una aceleración impresionante y tecnología de última generación",
        explorar4: "Explorar"

    },

    en: {

        // NAV
        inicio: "HOME",
        catalogo: "CATALOG",
        recursos: "RESOURCES",
        contacto: "CONTACT",

        // TÍTULO
        tituloCatalogo: "Explore the Vehicles",

        // CATEGORÍAS
        electricos: "Electric Cars",
        deportivos: "Sports Cars",
        camionetas: "SUVs",

        // TARJETA 1
        supra: "Toyota GR Supra",
        hecha: "Drive into the adrenaline-powered world of the GR Supra.",
        explorar: "Explore",

        // TARJETA 2
        porsche: "Porsche 911 Turbo S",
        equipada: "A luxury sports car known for its speed, precision and everyday comfort.",
        explorar2: "Explore",

        // TARJETA 3
        nissan: "Nissan Z",
        hecha2: "A powerful twin-turbo V6 engine up front with a standard manual transmission.",
        explorar3: "Explore",

        // TARJETA 4
        ferrari: "Ferrari 296 GTB",
        equipada2: "A hybrid supercar combining elegant design, impressive acceleration and cutting-edge technology.",
        explorar4: "Explore"

    }

};


/* =====================
   CAMBIO DE IDIOMA
===================== */

function cambiarIdioma(idioma){

    const t = traducciones[idioma];

    // NAV
    document.getElementById("navInicio").textContent = t.inicio;
    document.getElementById("navCatalogo").textContent = t.catalogo;
    document.getElementById("navRecursos").textContent = t.recursos;
    document.getElementById("navContacto").textContent = t.contacto;

    // TÍTULO
    document.getElementById("Exploralosvehículos").textContent = t.tituloCatalogo;

    // CATEGORÍAS
    document.getElementById("autosElectricos").textContent = t.electricos;
    document.getElementById("AutosDeportivos").textContent = t.deportivos;
    document.getElementById("Camionetas").textContent = t.camionetas;

    // TARJETA 1
    document.getElementById("Toyota GR Supra").textContent = t.supra;
    document.getElementById("Hecha").textContent = t.hecha;
    document.getElementById("Explorar").textContent = t.explorar;

    // TARJETA 2
    document.getElementById("Equipada").textContent = t.equipada;
    document.getElementById("Explora2").textContent = t.explorar2;

    // TARJETA 3
    document.getElementById("Nissan Z").textContent = t.nissan;
    document.getElementById("Hecha2").textContent = t.hecha2;
    document.getElementById("Explorar3").textContent = t.explorar3;

    // TARJETA 4
    document.getElementById("Ferrari 296 GTB").textContent = t.ferrari;
    document.getElementById("Equipada2").textContent = t.equipada2;
    document.getElementById("Explora4").textContent = t.explorar4;

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