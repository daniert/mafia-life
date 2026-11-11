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

Empiezas con $500 y un trabajo de poca monta. Comete crímenes, entrena en el gimnasio, estudia, monta tu banda y convierte tu nombre en leyenda de Nueva York a Palermo. Pasarás de ratero a Don.

> 🕰️ **Un homenaje.** Mafia Life es un tributo a aquellos juegos de mafia para Android a los que jugaba allá por 2010-2012 con la gente de la oficina: energía que se recarga, valor para los crímenes, la cárcel, el hospital y peleas entre compañeros a la hora del café.

## ✨ Qué incluye

| | |
|---|---|
| 💼 **Crímenes** | Gastan valor; la práctica y la inteligencia mejoran el éxito. Si sale mal, al hospital o a la cárcel |
| 🏋️ **Gimnasio** | Gasta energía para entrenar Fuerza, Agilidad, Guardia y Trabajo; rinde más con voluntad alta |
| 🥊 **Peleas** y ⚔️ **guerras de bandas** | Peleas con energía, guerras con valor; arriesgas salud, dinero y miembros |
| 👥 **Tu banda** | Recluta gente para ganar fuerza |
| 💼 **Tu trabajo** | Sueldo por minuto; los mejores puestos piden Trabajo e Inteligencia |
| 🎓 **Escuela** | Cursos en tiempo real que suben la Inteligencia |
| 🏥 **Hospital** y 🚔 **cárcel** | Tiempo de espera real; paga o usa cristales para salir antes |
| 💎 **Cristales** y templo | Se ganan jugando; rellenan barras, dan inteligencia o dinero |
| 🎰 **Casino** | Tragaperras, ruleta y cajas de la suerte (5 al día) |
| 🛒 **Tiendas** e 🎒 **inventario** | Armas, protección y objetos (botiquín, bebida energética…) |
| 🏢 **Negocios** y 🏦 **banco** | Ingresos pasivos y dinero a salvo |
| ✈️ **Viajar** | Nueva York, Chicago, Las Vegas, La Habana y Palermo |
| 📜 **Eventos** | Historial de lo que te ha pasado |

Las barras son las del original: **Energía**, **Voluntad**, **Valor**, **Salud** y **XP**. En el móvil la navegación va abajo; en pantallas anchas hay una columna lateral con estadísticas y menú, como en el juego de la época.

## 💾 Partidas

La partida se guarda en el navegador (`localStorage`) y se puede exportar e importar desde **Perfil**. Las partidas antiguas se migran solas al abrir el juego sin perder nada: el Ataque pasa a ser Fuerza, la Defensa pasa a ser Guardia y el Aguante pasa a ser Valor. Las estadísticas nuevas empiezan en 5.

## 📱 Instalar como app

Es una PWA: abre la [web](https://daniert.github.io/mafia-life/) en el móvil y elige **«Añadir a pantalla de inicio»**. Funciona sin conexión.

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
