# Bienvenido a mi app backend

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <!-- <li><a href="#deploy-🌟">Deploy</a></li> -->
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <!-- <li><a href="#licencia">Licencia</a></li> -->
    <li><a href="#webgrafia">Webgrafia</a></li>
    <!-- <li><a href="#desarrollo">Desarrollo</a></li> -->
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Objetivo

Este proyecto requería realizar una base de datos con MySQL, Express y Sequelize.

## Sobre el proyecto

Se trata de la web de una clinica dental, en la que el usuario puede registrarse, hacer login/logout y pedir, modificar o anular sus citas médicas.

<!-- ## Deploy 🌟

<div align="center">
    ⭐🌟⭐<a href=""><strong>Url a producción </strong></a>⭐🌟⭐
</div> -->

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

!['image-db'](./public/images/DentalClinicDiagram.png)

## Instalación en local

1. Clonar el repositorio
2. `$ npm install`
3. Conectamos nuestro repositorio con la base de datos
4. `$ Ejecutamos las migraciones`
5. `$ Ejecutamos los seeders`
6. `$ npm run dev`

## Endpoints

<details>
<summary>Endpoints</summary>

- AUTH

    - REGISTER

          POST http://localhost:3000/auth/register/

    body:

    ```js
        {
            "user_first_name": "Nuevo",
            "user_last_name": "Usuario",
            "email": "nuevo@usuario.com",
            "password": "12345678"
        }
    ```

    - LOGIN

          POST http://localhost:3000/auth/login/

    body:

    ```js
        {
            "email": "nuevo@usuario.com",
            "password": "12345678"
        }
    ```

- USERS 

    - GET ALL USERS 

              GET http://localhost:3000/users?page=1

    - GET MY PROFILE

              GET http://localhost:3000/users/profile
 
    - UPDATE MY PROFILE

              POST http://localhost:3000/users/update-profile

                   

    body: 

     ```js
        {
            "user_first_name": "Nuevo",
            "user_last_name": "Usuario",
            "birthday": "2023-01-01",
            "email": "nuevo@usuario.com",
            "phone_number": 666778800 
        }
    ```

    - CREATE APPOINTMENT

              POST http://localhost:3000/users/create-appointment

                   

       body: 

     ```js
        {
            "customer_id": 1,
            "doctor_id": 2,
            "date": "2023-07-03",
            "time": "18:00"
        }
    ```
   
    - UPDATE APPOINTMENT

              PUT http://localhost:3000/users/update-appointment/3

                   

       body: 

     ```js
        {
            "customer_id": 1,
            "doctor_id": 2,
            "date": "2023-07-03",
            "time": "18:30"
        }
    ```
    - DELETE APPOINTMENT

              DEL http://localhost:3000/users/delete-appointment/3                

    - FIND USER APPOINTMENTS

              GET http://localhost:3000/users/user-appointments                 

    - FIND ALL APPOINTMENTS AS A DOCTOR

              GET http://localhost:3000/users/all-appointments              

    - FIND ALL CUSTOMERS AS A DOCTOR

              GET http://localhost:3000/users/all-customers

                   

  </details>

## Futuras funcionalidades

[ ] Mejorar permisos de roles 

<!-- ## Licencia

Este proyecto se encuentra bajo licencia de "Mi Nombre" -->

## Webgrafia:

Para conseguir mi objetivo he recopilado información de:

- https://developer.mozilla.org/en-US/
- https://www.w3schools.com/js/default.asp
- https://sequelize.org/docs/v6/getting-started/

<!-- ## Desarrollo:

```js
const developer = "datata";

console.log("Desarrollado por: " + datata);
``` -->

## Contacto

<a href = "mailto:adrianapardo1998@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/adriana-pardo-diez/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</p>
