# Welcome to my backend app

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#deploy-🌟">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#webgrafia">Webgrafia</a></li>
    <!-- <li><a href="#desarrollo">Desarrollo</a></li> -->
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Objetivo

Este proyecto requería realizar una base de datos con MySQL, Express y Sequelize.

## Sobre el proyecto

Se trata de la web de una clinica dental, en la que el usuario puede registrarse, hacer login/logout y pedir, modificar o anular sus citas médicas.

## Deploy 🌟

<div align="center">
    ⭐🌟⭐<a href="https://www.google.com"><strong>Url a producción </strong></a>⭐🌟⭐
</div>

## Stack

Tecnologías utilizadas:

<div align="center">
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://sequelize.org/">
    <img src= "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>

## Diagrama BD

!['imagen-db'](./images/sampleDb.png)

## Instalación en local

1. Clonar el repositorio
2. `$ npm install`
3. Conectamos nuestro repositorio con la base de datos
4. `$ Ejecutamos las migraciones`
5. `$ Ejecutamos los seeders`
6. `$ npm run dev`
7. ...

## Endpoints

<details>
<summary>Endpoints</summary>

- AUTH

  - REGISTER

          POST http://localhost:3000/api/register

    body:

    ```js
        {
            "user": "David",
            "email": "david@david.com",
            "password": "princes"
        }
    ```

  - LOGIN

          POST http://localhost:3000/api/login

    body:

    ```js
        {
            "user": "David",
            "email": "david@david.com",
            "password": "princes"
        }
    ```

- RUTINAS - RECUPERAR RUTINAS

              GET http://localhost:3000/api/rutina

      - ...

  </details>

## Futuras funcionalidades

[ ] Añadir create book  
[ ] Añadir logs con winston  
[ ] Validaciones de la solicitud con express-validator  
[ ] ...


## Licencia

Este proyecto se encuentra bajo licencia de "Mi Nombre"

## Webgrafia:

Para conseguir mi objetivo he recopilado información de:

- link a repositorios
- link a documentacion de librerias externas
- ...

<!-- ## Desarrollo:

```js
const developer = "datata";

console.log("Desarrollado por: " + datata);
``` -->

## Contacto

<a href = "mailto:micorreoelectronico@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/linkedinUser/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</p>
