# 📚 Storybook + React + TypeScript = 🔥

Bienvenida/o a este repositorio ✨ donde el objetivo es **aprender**, **probar** y **dominar** cómo funciona la estructura de componentes en un proyecto de React con TypeScript usando... ¡🎉 STORYBOOK!  

Además, contiene un componente estrella llamado **`ToDo`**, que viene a poner orden en el caos del día a día. 🧹✅

---

## 🧪 ¿Qué es esto?

Este proyecto fue creado para entender:

- Cómo instalar y configurar Storybook desde cero
- Cómo organizar componentes y sus historias
- Cómo crear el glorioso componente `ToDo` que no sabías que necesitabas
- Qué hay dentro del `.storybook` y por qué debería importarte

---

## 🏗️ Estructura de carpetas

Este proyecto tiene una estructura pensada para claridad y escalabilidad. A continuación te muestro cómo están organizados los archivos y carpetas principales:


```
📦 raíz-del-proyecto/
├── 🧰 node_modules/         # Dependencias instaladas vía npm
├── 📄 .storybook/           # Configuración personalizada de Storybook
│   ├── main.ts             # Configura addons, framework y rutas de historias
│   ├── preview.ts          # Configura decoradores globales y estilos
│   └── manager.ts (opcional) # Personalización de UI
├── 📁 public/               # Archivos públicos (favicon, index.html)
├── 📁 src/                  # Código fuente principal
│   ├── 📁 components/       # Componentes reutilizables
│   │   └── 📝 ToDo/
│   │       ├── ToDo.tsx             # Lógica principal del componente
│   │       ├── ToDo.module.css      # Estilos con CSS Modules
│   ├── 📁 stories/             # Componentes de ejemplo generados por Storybook
│   ├── Button.stories.tsx
│   ├── Header.stories.tsx
│   └── Page.stories.tsx
│   ├── App.tsx              # Componente raíz
│   ├── index.tsx            # Punto de entrada
├── .gitignore              # Archivos ignorados por git
├── package.json            # Info del proyecto y scripts
├── README.md               # Documentación del proyecto
└── tsconfig.json           # Configuración de TypeScript
```

---

## 🧙 Instalación mágica

Clona el proyecto con tus poderes git:

```

bash
git clone https://github.com/Pal-cloud/storybook.git
cd storybook
npm install

´´´

## Invoca a Storybook con:

```
npx storybook@latest init
npm run storybook

```

## 🤝 Contribuciones

Si tienes ideas, chistes malos, mejoras de código o simplemente te cayó bien este repo... ¡haz un fork y manda un PR!
