# Correr en dev

1. Clonar repositorio
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install```
4. Levantar la base de datos usando MongoDB
5. Correr las migraciones de prisma ```npx prisma migrate dev```
6. ejecutar el seed ```npm run seed```
7. correr el proyecto ```npm run dev```
8. Limpiar el localStorage del navegador.