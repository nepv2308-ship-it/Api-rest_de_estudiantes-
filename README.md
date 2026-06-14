# API REST con Node.js y Express

> Una API REST básica y escalable estructurada con arquitectura de rutas, configurada con variables de entorno y optimizada para el desarrollo local.

---

## 🚀 Descripción

Este proyecto es el inicio de una **API REST** desarrollada en **Node.js** utilizando el framework **Express**. Cuenta con una estructura limpia donde las rutas están modularizadas (`user.routes.js`) y el servidor principal (`index.js`) gestiona las peticiones en formato JSON y las variables de entorno de forma segura.

## 🛠️ Tecnologías utilizadas

*   **Entorno de ejecución:** Node.js
*   **Framework:** Express
*   **Gestor de paquetes:** pnpm
*   **Variables de Entorno:** dotenv
*   **Herramientas de Desarrollo:** nodemon (para reinicio automático del servidor)

---

## 📂 Estructura del Proyecto

Basado en la arquitectura actual del repositorio:
*   `SRC/`: Carpeta contenedora del código fuente.
    *   `routes/`: Definición de los endpoints y rutas de la aplicación (Ej: `user.routes.js`).
    *   `index.js`: Punto de entrada del servidor Express.
*   `.env`: Configuración de variables de entorno (como el puerto `PORT`).
*   `.gitignore`: Archivo para excluir carpetas como `node_modules` del control de versiones.

---

## 📦 Instalación y Configuración

Si quieres clonar este proyecto y ejecutarlo en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**
```bash
   git clone <URL_DE_TU_REPOSITORIO>
