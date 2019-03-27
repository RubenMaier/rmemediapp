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


#Estructura de componentes

entry point: home -> Principal

- Index: contenedor
    - Principal: componente UI
    - Categorias: componente UI
        - Categoria: componente UI
            - Playlist: componente UI
                - Media: componente UI
    - Busqueda: contenedor
    - Modal: contenedor