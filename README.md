# EXAMEN U2
- Nombre: Jordy Mejia
- Cedula: ---------7

**Descripción**

Pequeña aplicación interactiva desarrollada con LitElement que muestra información sobre carreras de la Universidad ESPE mediante dos Web Components reutilizables.

**Estructura del Proyecto**

```bash
src/
├── components/
│ ├── career-card.js
│ ├── career-selector.js
│ └── index.js
├── data/
│ └── careers.js
├── styles/
└──── themes.js
.babelrc
.gitignore
index.html
webpack.config.js
...
```

**Instrucciones**

1. Clonar el repositorio:

```bash
git clone https://github.com/appkalorder/EXAMEN_U2_INTEGRATIVA.git
cd EXAMEN_U2_INTEGRATIVA
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el proyecto:
```bash
npm start
```

**Props**

`career-card`: recibe un objeto ``career`` con los campos:

* ``nombre``
* ``facultad``
* ``descripcion``
* ``imagen``

``career-selector``: emite evento ``career-selected`` con los datos de la carrera elegida.

# Preview

* Ejecucion de los componentes en una opcion:
![Vista del componente ejecutandose 1](/public/img/Captura1.png)

* Ejecucion de los componentes en otra opcion:
![Vista del componente ejecutandose 2](/public/img/Captura2.png)