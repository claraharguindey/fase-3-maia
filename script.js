document.addEventListener("DOMContentLoaded", function () {
  // Definir textos dinámicos
  const textos = {
    tituloPrincipal: "Qué hacemos - RedActs",
    encabezado: "Qué hacemos",
    descripcion:
      "La red ACTS es la malla que articula la comunidad formada por diversos agentes clave...",
    objetivos: [
      "ARTICULAR  la diversidad de prácticas y agentes de ACTS impulsando propuestas, proyectos, dispositivos o iniciativa conjuntas, y contribuir a tramar ese tejido atendiendo a la diversidad y complementariedad de las ACTS mediante alianzas entre diferentes actores y comunidades ampliando progresivamente la red.",
      "GENERAR CONOCIMIENTO sobre las prácticas ACTS en base a los aprendizajes de sus pilotos y de la investigación en torno a su desarrollo y resultado, para fortalecer el marco teórico y práctico ACTS, el análisis de procesos, metodologías y dinámicas, y la creación de protocolos e informes de buenas prácticas a disposición de toda la comunidad",
      "CONSOLIDAR la propia red, los nodos y sus redes locales, mediante la generación de espacios de colaboración, interlocución y escucha interna para promover la sostenibilidad del sector de las ACTS. Impulsar la toma de conciencia y el autoreconocimiento de la heterogeneidad y complementariedad del ámbito para generar agencia propia en la interlocución con las diferentes  administraciones",
      "COMUNICAR y DIFUNDIR la actividad de la propia red, así como de la diversidad de agentes y prácticas que la conforman, así como conectar a la comunidad ACTS desde la creación de un repositorio de prácticas y conocimiento.",
      "GENERAR ALIANZAS y PROVOCAR SINERGIAS y corredores de prácticas entre contextos locales, autonómicos, estatales e internacionales, y entre administraciones, universidades, centros de investigación científica, centros de investigación, experimentación y difusión artística y cultural, entidades interesadas en los retos ecosociales, y otras personas agentes del ámbito ACTS.",
    ],
    deDondeVenimos:
      "La Red ACTS es una iniciativa surgida en el marco de ISEA 2022 en Barcelona, con el objetivo de crear un entorno fluido de colaboración entre agentes que trabajan en la intersección entre Arte, Ciencia, Tecnología y Sociedad en el Estado español. La primera propuesta de articulación de la red surge de la alianza entre el CCCB, Hangar, la UOC (Estudios de Arte y Humanidades) y HacTe en 2022, gracias al impulso de la Fundación Daniel y Nina Carasso, a través de su línea de proyectos de Arte, Ciencia y Sociedad. La red ACTS da un siguiente paso en su consolidación en 2023 a través de diversas reuniones articuladas desde los nodos en Catalunya, Euskadi, Madrid y València. Actualmente la red aglutina a más de un centenar de  agentes de todo el territorio entre los que se encuentran centros culturales de difusión, producción e investigación, universidades, asociaciones y otras entidades, así como personas individuales.",
    footer: "Red de intersecciones entre Arte, Ciencia, Tecnología y Sociedad",
  };

  document.title = textos.tituloPrincipal;

  document.querySelector("h1.elementor-heading-title").textContent =
    textos.encabezado;

  document.querySelector(".elementor-widget-text-editor p").textContent =
    textos.descripcion;

  let listaObjetivos = document.querySelectorAll(
    ".elementor-widget-text-editor ul li"
  );
  textos.objetivos.forEach((texto, index) => {
    if (listaObjetivos[index]) {
      listaObjetivos[index].textContent = texto;
    }
  });

  document.querySelector(".elementor-element-de2d44b p").textContent =
    textos.deDondeVenimos;

  document.querySelector(".elementor-widget-text-editor p.p1").textContent =
    textos.footer;
});
