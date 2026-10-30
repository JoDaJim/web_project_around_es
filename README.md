# TripleTen web_project_around_es — Alrededor de los EE.UU.

**Alrededor de los EE.UU.** comenzó como un proyecto estático al que tuve la oportunidad de darle vida y dinamismo mediante JavaScript.

A lo largo de su desarrollo agregué interacción real con los diferentes elementos de la página, permitiendo editar la información del perfil de usuario, agregar y eliminar fotografías, dejar un "like" en las tarjetas y ampliar cada imagen para poder apreciarla con mayor detalle.

Trabajar en este proyecto fue una excelente oportunidad para seguir desarrollando mis habilidades en JavaScript y comprender mejor cómo este lenguaje puede transformar una página estática en una experiencia interactiva.

## ¿Qué encontrarás aquí?

Dentro de esta página encontrarás un perfil pensado para compartir imágenes de interés.

También podrás editar la información del perfil, agregando tu nombre y una breve descripción sobre ti. Además, la página cuenta con una sección que permite agregar nuevas imágenes mediante un enlace y acompañarlas con su respectiva descripción.

Cada tarjeta incluye opciones para dar o quitar un "like", eliminar la imagen cuando ya no se desee mostrar y abrirla en una vista ampliada para apreciarla con mayor detalle.

## ¿Cómo fue construido?

Este proyecto llegó a mis manos como una página completamente estática, construida únicamente con HTML y CSS.

El primer paso fue identificar cada uno de sus elementos y familiarizarme con la estructura del DOM y las hojas de estilo existentes. Una vez comprendida la organización general del proyecto, comencé a seleccionar los elementos del DOM que necesitaban adquirir interactividad.

Durante el desarrollo trabajé principalmente con tres modales, cada uno con una función diferente: edición de perfil, creación de nuevas tarjetas para las imágenes y visualización ampliada de fotografías.

Con los elementos necesarios ya seleccionados, implementé funciones reutilizables para realizar acciones comunes, como abrir y cerrar los diferentes modales. También desarrollé la lógica necesaria para editar información del perfil, crear y eliminar tarjetas y manipular los datos ingresados mediante formularios.

Posteriormente conecté los diferentes eventos de la página, utilizando eventos de `click` para los elementos interactivos y `submit` para los formularios, asociando cada uno con su comportamiento correspondiente.

Cada funcionalidad fue desarrollada y probada de manera progresiva. Después de implementar una nueva parte del proyecto, realizaba pruebas para comprobar su funcionamiento, corregir errores y asegurarme de que las funciones anteriores continuaran trabajando correctamente.

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

Este proyecto representó un reto importante para mí. El hecho de que estuviera dividido en tres etapas fue de gran ayuda, ya que me permitió concentrarme en secciones específicas y trabajar cada concepto de forma aislada sin sentir una sobrecarga de información.

Aun así, el nivel de complejidad fue considerable al tratarse de mi primera experiencia agregando dinamismo real a una página web mediante JavaScript.

Entre las principales dificultades estuvo comprender mejor la diferencia entre utilizar `document.querySelector()` para realizar selecciones globales y `element.querySelector()` para trabajar dentro de elementos específicos. Al principio esta diferencia podía resultar confusa, pero poco a poco comenzó a tener más sentido al trabajar con modales y tarjetas independientes.

Otro reto importante fue comprender la función `getCardElement()`. Su funcionamiento resultó especialmente interesante, pero también complejo en las primeras etapas, sobre todo a medida que la función fue creciendo e incorporando nuevas responsabilidades relacionadas con cada tarjeta.

También aparecieron métodos y propiedades con los que todavía no estaba completamente familiarizado, como `.remove()`, `classList.toggle()` y `cloneNode(true)`. Comprender no solo qué hacían, sino también cómo interactuaban con los elementos del DOM, requirió práctica, pruebas y repetición.

Cada una de estas dificultades terminó convirtiéndose en una oportunidad para reforzar mi comprensión de JavaScript y de la forma en que una interfaz puede responder dinámicamente a las acciones del usuario.

## Aprendizajes

Trabajar en este proyecto representó un salto importante en mi comprensión de JavaScript y, sobre todo, en la forma en que este lenguaje se conecta e interactúa con la estructura principal de una página web.

Después de estudiar JavaScript de manera más teórica, todavía no tenía completamente claro cuál era su papel dentro del desarrollo de una página ni cómo se relacionaba con los elementos construidos en HTML y estilizados con CSS.

El desarrollo de la interactividad de este proyecto me permitió comprender mejor esa relación y comenzar a familiarizarme con conceptos relacionados con la selección, manipulación y actualización del DOM, así como con el uso de eventos, funciones y elementos dinámicos.

Todavía queda mucho por aprender y practicar, pero este proyecto me ayudó a construir una base mucho más sólida y a entender con mayor claridad cómo JavaScript puede transformar una página estática en una experiencia interactiva.

## GitHub Pages:

Puedes visitar este proyecto desde el siguiente enlace:

[Ver el proyecto en GitHub Pages](https://jodajim.github.io/web_project_around_es/)

Desde mi perfil de GitHub también podrás encontrar este proyecto, mis trabajos actuales y los próximos proyectos que iré desarrollando.
