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

Durante el desarrollo de este proyecto utilicé principalmente:

- **HTML:** para trabajar con la estructura existente de la página, incluyendo formularios, botones, modales y el `<template>` utilizado para las tarjetas.
- **CSS:** para mantener la presentación visual del proyecto y trabajar con los diferentes estados de los elementos interactivos.
- **JavaScript:** para agregar toda la lógica e interactividad de la página.
- **Manipulación del DOM:** mediante métodos como `querySelector()` y propiedades como `textContent`, `value`, `src` y `alt`.
- **Eventos:** utilizando `addEventListener()` para detectar acciones como `click` y `submit`.
- **Funciones reutilizables:** para evitar duplicar lógica en acciones comunes, como abrir y cerrar modales.
- **Arrays de objetos:** para almacenar la información inicial de las tarjetas dentro de `initialCards`.
- **`forEach()`:** para recorrer los datos iniciales y renderizar cada tarjeta.
- **`<template>` y `cloneNode(true)`:** para crear nuevas tarjetas dinámicamente a partir de una estructura reutilizable.
- **Manipulación de clases:** utilizando `classList.add()`, `classList.remove()` y `classList.toggle()` para controlar estados visuales e interactivos.
- **Formularios:** mediante el uso de `.value` para obtener datos ingresados por el usuario y `preventDefault()` para controlar su envío.
- **Métodos del DOM:** como `prepend()` para insertar nuevas tarjetas y `remove()` para eliminar elementos de la página.
- **Accesibilidad básica:** manteniendo atributos como `alt` y `aria-label` en los elementos correspondientes.
- **DevTools y consola del navegador:** para realizar pruebas, detectar errores y comprobar el funcionamiento de cada nueva funcionalidad.

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
