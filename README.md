Markdown# API-REST (Node.js + Express + Prisma ORM + JWT)

Una API REST moderna construida con Node.js, Express, PostgreSQL, Prisma ORM y autenticación basada en JSON Web Tokens (JWT). El proyecto utiliza módulos de ECMAScript (ES Modules), Zod para la validación de peticiones y es administrado mediante `pnpm`.

## 🚀 Características
- **Autenticación segura:** Implementación de tokens mediante JWT (`jsonwebtoken`) utilizando middlewares personalizados.
- **Validación robusta:** Esquemas estrictos con Zod para interceptar datos incorrectos antes de tocar la base de datos.
- **ORM Potente:** Modelado e interactividad con PostgreSQL utilizando Prisma.
- **Arquitectura Limpia:** Estructura de carpetas modular (`routes`, `middleware`, `lib`) fácil de mantener y escalar.

---

## 📁 Estructura del Proyecto

```text
API-REST/
├── prisma/                 # Esquemas y migraciones de la Base de Datos (Prisma)
│   └── schema.prisma
├── src/
│   ├── lib/
│   │   └── prisma.js       # Instancia global del cliente de Prisma
│   ├── middleware/
│   │   ├── apikey.middleware.js
│   │   └── auth.midelwer.js # Middleware para validar el token JWT
│   ├── routes/
│   │   ├── auth.rautes.js  # Rutas y validaciones de Autenticación
│   │   └── user.routes.js  # Rutas de administración de estudiantes
│   └── index.js            # Punto de entrada de la aplicación
├── .env                    # Variables de entorno (Configuración local)
├── nodemon.json            # Configuración de reinicio automático en desarrollo
└── package.json            # Scripts y dependencias del proyecto
🗄️ Modelos de la Base de Datos (Prisma)El proyecto cuenta con las siguientes entidades mapeadas en PostgreSQL:Student (students)id (Int, PK, Autoincremental)SudentCode (String, Unique)firstName (String)lastName (String)email (String, Unique)password (String)phone (String, Unique)BirhtDay (DateTime, Opcional)Active (Boolean, Default: true)CreatedAt (DateTime, Default: now())UpdatedAt (DateTime)Subject (subjects)id (Int, PK, Autoincremental)Code (String, Unique)Name (String)Credits (Int, Default: 3)Active (Boolean, Default: true)CreatedAt (DateTime, Default: now())UpdatedAt (DateTime)🛣️ Endpoints de la APIAutenticación (/auth.rautes.js)MétodoEndpointMiddleware / ValidaciónDescripciónPOST/registerNingunoRegistra un nuevo estudiante en el sistema.POST/loginvalidate(loginSchema)Autentica un estudiante (Valida correo y contraseña >= 8 y <= 16 caracteres). Retorna token JWT.POST/logoutNingunoCierra la sesión activa del usuario.🔑 Seguridad: Para los endpoints protegidos bajo authMiddleware, se debe proveer el token en la cabecera HTTP de la siguiente forma: Authorization: Bearer <TU_TOKEN_JWT>.🛠️ Requisitos PreviosAsegúrate de tener instalados los siguientes componentes:Node.js (Versión LTS)pnpm (npm install -g pnpm)⚙️ Instalación y ConfiguraciónClonar el repositorio:Bashgit clone <URL_DE_TU_REPOSITORIO_DE_GITHUB>
cd API-REST
Instalar dependencias:Bashpnpm install
Configurar Variables de Entorno:Crea un archivo llamado .env en la raíz del proyecto y configura tus credenciales:Fragmento de códigoPORT=5000
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/tu_base_datos?schema=public"
JWT_SECRET="tu_palabra_secreta_super_segura_para_jwt"
Sincronizar la Base de Datos:Genera el cliente de Prisma y ejecuta las migraciones pendientes en PostgreSQL:Bashpnpm prisma migrate dev --name init
🏃 Ejecución del ProyectoModo Desarrollo (con recarga automática mediante Nodemon):Bashpnpm dev
El servidor se iniciará exponiendo el mensaje: El servidor está corriendo en el puerto 5000.
