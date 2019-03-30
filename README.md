# Introducción
- Configuración base para un entorno desarrollo seguro de react.js (trabajamos con webpack 3.x.x)
- Aplicación para ver los títulos, trailers y descripciones de las películas de Marvel

# Utilidades
```
npm i --save-dev babel-preset-react
npm i react react-dom
npm i prop-types
```

`babel-preset-react` es un loader para poder trabajar con react.js en un archivo javascript convencional

`prop-types` nos permite validar tipo de datos con la finalidad de no acarrear errores de dato al entorno de producción

# Contenido
- Utilización de git y npm (contenido del primer push)
- Bases de react.js (contenido del segundo push)
    - Configuración de Webpack
    - ReactDOM y JSX
    - Componentes
    - 2 formas de insertar estilos en JSX
    - Propiedades de Componentes
    - Validación de tipado de propiedades con `prop-types`
    - Enlazado de eventos del DOM
    - Estados de los componentes
- Utilizando componentes
    - Inclusión de api para practicar con listas de componentes
    - Actualización de componentes a tipo "funcional" o tipo "puros" para optimizar rendimiento
    - Separamos los componentes en una metodología comprendida como "componentes inteligentes" (contenedores: componentes con estado) y "componentes tontos" (componentes: puros o funcionales)
    - Composición de componentes
    - Inclusión mediante 'portales' en react.js, de una ventana de dialogo para visualizar a futuro los videos con el reproductor de video
    - Enlazado de componentes para cerrar y abrir la ventana de dialogo
    - Manejo de errores
    - Referencias a eventos de HTML y Formularios
- Creacion de un reproductor de video
    - Iniciando el reproductor de video con logica de Reproductor
    - Añadido de componente de titulo
    - Inclusión del botón Play y Pausa (accionar y lógica de componentes necesaria)
    - Creación de componente indicador de duración del tiempo y componente contenedor de botones de control
    - Añadido de tiempo transcurrido y formateo de tiempo


#Estructura de componentes

Opté por cambiar la organización del proyecto por una cuestión de comodidad. Como el proyecto es pequeño conviene tener una carpeta componente que contenga todos los componentes sin discriminar entre componentes "tontos" e "inteligentes", con la salvedad de que aquellos que tengan propiedades "inteligentes" lleven el nombre de "Contenedores" concatenado al nombre propio que tenga el componente.