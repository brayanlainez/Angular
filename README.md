# Cursos o Talleres de Angular

Instalar NodeJS

## TypeScript

Instalar
    npm install -g typescript
Versión
    tsc -v

Compilar
    tsc nombre_archivo.ts

Crear archivo de configuracion para compilar
    tsc --init

Autocompilar al guardar
    tsc -w
    tsc --watch

# Angular

Instalar Angular Cli
    npm install -g @angular/cli

Versión
    ng version

Crear y Ejecutar la aplicación 
No se permiten numeros al principio
    ng new my-app
    cd my-app
    ng serve --open
    
Añadir el flag 
No crear archivo html: -it
No crear archivo css : -is
No crear archivo test: --spec= false

Crear un Componente
    ng g c components/name_componente
    
Crear un Servicio
    ng g s services/name_servicio

Crear un Pipe
    ng g p pipes/name_pipe

Agrega soporte para una biblioteca externa del proyecto.
Idiomas en la fechas
    ng add @angular/localize

# npm
Instalar Bootstrap
    npm install bootstrap --save

Instalar Jquery
    npm install jquery --save

Instalar Popper
    npm install popper.js --save

Instalar Http
    npm install --save @angular/http
    

Documentación
    https://angular.io/
    https://cli.angular.io/