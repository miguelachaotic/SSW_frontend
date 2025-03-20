# SSW

Repositorio para las prácticas de Servicios y Sistemas Web de la Universidad de Valladolid.

## Prerrequisitos

Para el funcionamiento de esta práctica es necesario tener instalado
[Node.js](https://nodejs.org/en/download). También es necesario tener
conexión a Internet.

## Instalación

Para instalar el proyecto clona el repositorio en una carpeta local.
```shell
git clone https://github.com/miguelachaotic/SSW_frontend.git
cd SSW_frontend
```
Una vez instalado, ejecutamos
```sh
npm install
```
Para instalar todas las dependencias del proyecto.

Por último, para ejecutarlo de forma rápida, sin compresión,
podemos ejecutar el siguiente comando:
```sh
npm run dev
```
O bien ejecutamos el siguiente comando para tener la versión optimizada y compilada.
```shell
npm run build
npm run preview
```

# Aspectos a tener en cuenta
Existe un botón situado en la parte superior izquierda de forma absoluta en la página. Este botón lo único que permite
hacer es cambiar entre vistas. No tiene ninguna otra funcionalidad. Gracias a que el desarrollo lo estamos haciendo
usando Vue.js como framework de desarrollo no hay que implementar apenas funcionalidad para esto. No estará presente
en la versión completa de la aplicación.

Nuestra intención desde un inicio era evitar usar ningún tipo de funcionalidad adicional, pero este botón nos facilita
mucho la tarea posterior de enlazar con el proceso backend.