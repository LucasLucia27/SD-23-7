document.getElementById("cardTalleres").addEventListener("click", () => {
    window.location.href = "talleres-recursos.html";
});

document.getElementById("cardConcesionarios").addEventListener("click", () => {
    window.location.href = "concesionarios-recursos.html";
});

document.getElementById("cardGasolineras").addEventListener("click", () => {
    window.location.href = "gasolineras-recursos.html";
});

document.getElementById("cardCentros").addEventListener("click", () => {
    window.location.href = "centros-recursos.html";
});

document.getElementById("cardLlantas").addEventListener("click", () => {
    window.location.href = "llantasRepuestos.html";
});

// ===== FUNCIÓN SEGURA =====
const traducciones = {
    es: {
        inicio: "INICIO",
        catalogo: "CATÁLOGO",
        recursosMenu: "RECURSOS",
        contacto: "CONTACTO",

        recursos: "RECURSOS AUTOMOTRICES",
        texto: "Servicios, herramientas y conocimientos para cualquier conductor.",

        busqueda: "Busca talleres, trámites, servicios o artículos...",

        accesos: "ACCESOS RÁPIDOS",

        talleres: "TALLERES",
        texto2: "Encuentra talleres cerca de ti",

        concesionarios: "CONCESIONARIOS",
        texto3: "Explora marcas y concesionarios",

        gasolineras: "GASOLINERAS",
        texto4: "Ubicaciones y precios de combustible",

        centros: "CENTROS DE CARGA",
        texto5: "Estaciones de carga para vehículos eléctricos",

        llantas: "LLANTAS Y REPUESTOS",
        texto6: "Tiendas y servicios especializados",

        aprende: "APRENDE SOBRE VEHÍCULOS",
        mantenimiento: "Mantenimiento Básico",
        compra: "Compra y Venta",
        conduccion: "Conducción y Seguridad",
        leyes: "Leyes y Normativas"
    },

    en: {
        inicio: "HOME",
        catalogo: "CATALOG",
        recursosMenu: "RESOURCES",
        contacto: "CONTACT",

        recursos: "AUTOMOTIVE RESOURCES",
        texto: "Services, tools and knowledge for every driver.",

        busqueda: "Search for repair shops, services or articles...",

        accesos: "QUICK ACCESS",

        talleres: "REPAIR SHOPS",
        texto2: "Find repair shops near you",

        concesionarios: "DEALERSHIPS",
        texto3: "Explore brands and dealerships",

        gasolineras: "GAS STATIONS",
        texto4: "Fuel locations and prices",

        centros: "CHARGING STATIONS",
        texto5: "Charging stations for electric vehicles",

        llantas: "TIRES & PARTS",
        texto6: "Specialized stores and services",

        aprende: "LEARN ABOUT VEHICLES",
        mantenimiento: "Basic Maintenance",
        compra: "Buying & Selling",
        conduccion: "Driving & Safety",
        leyes: "Laws & Regulations"
    }
};

//=================== FUNCIONES ===================

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function setPlaceholder(id, value) {
    const el = document.getElementById(id);
    if (el) el.placeholder = value;
}

function cambiarIdioma(idioma) {

    const t = traducciones[idioma];

    // Menú
    setText("navInicio", t.inicio);
    setText("navCatalogo", t.catalogo);
    setText("navRecursos", t.recursosMenu);
    setText("navContacto", t.contacto);

    // Hero
    setText("recursos", t.recursos);
    setText("texto", t.texto);
    setPlaceholder("busqueda", t.busqueda);

    // Accesos rápidos
    setText("ACCESOS", t.accesos);

    setText("talleres", t.talleres);
    setText("texto2", t.texto2);

    setText("concesionarios", t.concesionarios);
    setText("texto3", t.texto3);

    setText("gasolineras", t.gasolineras);
    setText("texto4", t.texto4);

    setText("centros", t.centros);
    setText("texto5", t.texto5);

    // En el HTML el id es "Llantas" con L mayúscula
    setText("Llantas", t.llantas);
    setText("texto6", t.texto6);

    // Aprende
    setText("aprende", t.aprende);
    setText("mantenimiento", t.mantenimiento);
    setText("compra", t.compra);
    setText("conduccion", t.conduccion);
    setText("leyes", t.leyes);

    document.documentElement.lang = idioma;
    localStorage.setItem("idioma", idioma);
}

//=================== INICIO ===================

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("idiomaBtnEs")
        .addEventListener("click", () => cambiarIdioma("es"));

    document.getElementById("idiomaBtnEN")
        .addEventListener("click", () => cambiarIdioma("en"));

    const idioma = localStorage.getItem("idioma") || "es";
    cambiarIdioma(idioma);

});

//=== barra de busqueda ===
const input = document.getElementById("busqueda");
const boton = document.getElementById("btnBuscar");

function buscar(){
    const texto = input.value.trim().toLowerCase();

    if (texto ===""){
        alert("Escribe tu nesecidad.");
        return;
    }

    alert("buscando: " + texto )
}
boton.addEventListener("click", buscar);

input.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        buscar();
    }

});