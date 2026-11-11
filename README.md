<p align="center">
  <img src="icons/icon-192.png" width="120" alt="Mafia Life">
</p>

<h1 align="center">Mafia Life</h1>

<p align="center">
  Juego de rol mafioso por turnos, en el navegador y sin instalación.<br>
  <a href="https://daniert.github.io/mafia-life/"><strong>▶ Jugar ahora</strong></a>
</p>

<p align="center">
  <img alt="PWA" src="https://img.shields.io/badge/PWA-instalable-5A0FC8">
  <img alt="Vanilla JS" src="https://img.shields.io/badge/JS-vanilla-F7DF1E">
  <img alt="Sin dependencias" src="https://img.shields.io/badge/dependencias-0-brightgreen">
  <img alt="GitHub Pages" src="https://img.shields.io/badge/hosting-GitHub%20Pages-222">
</p>

---

## 🎩 De qué va

Empiezas con $500 y un trabajo de poca monta. Haz trabajos, pelea, monta tu banda y convierte tu nombre en leyenda de Nueva York a Palermo.

## ✨ Qué incluye

| | |
|---|---|
| 💼 **Trabajos** | Gastan energía; cuanto más repites uno, más fácil sale |
| 🥊 **Peleas** y ⚔️ **guerras de bandas** | Gastan aguante; arriesgas salud y dinero |
| 👥 **Tu banda** | Recluta gente para ganar fuerza |
| 🔫 **Armas** y 🛡️ **protección** | Mejora ataque y defensa |
| 🏢 **Negocios** | Ingresos pasivos |
| 📈 **Habilidades** | Reparte puntos al subir de nivel |
| 🏦 **Banco** y 🏥 **hospital** | Guarda tu dinero y cúrate |
| ✈️ **Viajar** | Nueva York, Chicago, Las Vegas, La Habana y Palermo |

## 📱 Instalar como app

Es una PWA: abre la [web](https://daniert.github.io/mafia-life/) en el móvil y elige **«Añadir a pantalla de inicio»**. Funciona sin conexión y la partida se guarda en el navegador (`localStorage`).

## 🛠️ Desarrollo

No hay build ni dependencias. Sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8000
```

Y abre http://localhost:8000.

```
index.html             juego completo (HTML + CSS + JS)
manifest.webmanifest   metadatos de la PWA
sw.js                  service worker (caché offline)
icons/                 iconos de la app
```

## 🚀 Despliegue

Cada push a `main` se publica automáticamente en GitHub Pages.
