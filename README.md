# TripleTen web_project_around_es — Alrededor de los EE.UU.

**Alrededor de los EE.UU.** comenzó como un proyecto estático al que tuve la oportunidad de darle vida y dinamismo mediante JavaScript.

Agregué interactividad a los diferentes elementos de la página, permitiendo editar la información del perfil de usuario, crear y eliminar tarjetas de imágenes e interactuar con ellas.

Este proyecto fue una excelente oportunidad para seguir desarrollando mis habilidades en JavaScript y comprender mejor cómo este lenguaje aporta interactividad a las páginas web.

## ¿Qué encontrarás aquí?

Dentro de esta página encontrarás un perfil pensado para compartir imágenes de interés.

Podrás editar la información del perfil, agregando tu nombre y una breve descripción.

También encontrarás una sección que permite agregar nuevas imágenes mediante un enlace y acompañarlas con su respectiva descripción.

Cada tarjeta ofrece la opción de dar o quitar un "like", eliminar la imagen y abrirla en una vista ampliada para apreciarla con mayor detalle.

## ¿Cómo fue construido?

Este proyecto llegó a mis manos como una página construida únicamente con HTML y CSS.

Identifiqué sus elementos y me familiaricé con la estructura del DOM y las hojas de estilo existentes. Posteriormente, seleccioné los elementos que necesitaban adquirir interactividad.

Trabajé principalmente con tres modales: edición de perfil, creación de nuevas tarjetas de imágenes y visualización ampliada de fotografías.

Implementé funciones reutilizables para realizar acciones comunes, como abrir y cerrar modales. A su vez, desarrollé la lógica necesaria para editar el perfil y gestionar las tarjetas.

Conecté los eventos click y submit con sus respectivos comportamientos mediante JavaScript.

Después de cada tarea, realizaba pruebas y revisiones para comprobar su funcionamiento antes de continuar con la siguiente.

## Tecnologías y técnicas utilizadas

- **HTML5:** estructura semántica, formularios, validación mediante atributos y uso de `<template>`.
- **CSS3:** metodología BEM, diseño responsive, estados interactivos y estilos de validación.
- **JavaScript (ES6+):** lógica de la aplicación, módulos (`import`/`export`), funciones reutilizables, arrays de objetos, métodos como `forEach()`, `some()` y `trim()`, y operadores ternarios.
- **Manipulación del DOM:** `querySelector()`, `textContent`, `classList`, `cloneNode()`, `prepend()` y `remove()` para gestionar elementos dinámicos.
- **Eventos e interactividad:** `addEventListener()`, `removeEventListener()`, `preventDefault()` y gestión de eventos de teclado, formularios y ventanas emergentes.
- **Validación de formularios:** HTML5 Constraint Validation API, `ValidityState`, `validationMessage`, `setCustomValidity()` y control dinámico de botones.
- **Accesibilidad y depuración:** atributos `alt` y `aria-label`, herramientas DevTools y consola del navegador.

## Retos durante el desarrollo

Este proyecto representó un reto importante para mí. Sin embargo, al estar dividido en tres etapas, pude abordar su desarrollo y comprensión de manera progresiva. Aun así, el nivel de complejidad fue considerable al tratarse de mi primera experiencia implementando interactividad mediante JavaScript.

Uno de mis principales retos fue comprender la diferencia entre utilizar document.querySelector() para realizar selecciones globales y element.querySelector() para trabajar dentro de elementos específicos. Esta diferencia fue cobrando sentido a lo largo del proceso.

Comprender la función getCardElement() resultó especialmente interesante, aunque también complejo al principio, sobre todo a medida que la función fue creciendo e incorporando nuevas responsabilidades relacionadas con cada tarjeta.

Métodos como .remove(), classList.toggle() y cloneNode(true) me tomaron algo de tiempo antes de comprender su funcionamiento y comportamiento con los demás elementos del DOM.

## Aprendizajes

Este proyecto representó un salto importante en mi comprensión de JavaScript y de cómo se relaciona con HTML y CSS para el desarrollo de páginas web.

Desarrollar la interactividad del proyecto me permitió profundizar en esta relación y familiarizarme con conceptos como la selección, manipulación y actualización del DOM, así como con el uso de eventos, funciones y elementos dinámicos.

Queda mucho por aprender y practicar. Sin embargo, este proyecto me ayudó a construir una base sólida y a entender con mayor claridad cómo JavaScript puede dar vida a una página web.

## GitHub Pages:

Puedes visitar este proyecto desde el siguiente enlace:

[Ver el proyecto en GitHub Pages](https://jodajim.github.io/web_project_around_es/)

Desde mi perfil de GitHub también podrás encontrar este proyecto, mis trabajos actuales y los próximos proyectos que iré desarrollando.
