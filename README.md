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

Empiezas con $500 y un trabajo de poca monta. Comete crímenes, entrena en el gimnasio, estudia, compra negocios y vehículos, monta tu banda y convierte tu nombre en leyenda de Nueva York a Palermo. Pasarás de ratero a Don.

> 🕰️ **Un homenaje.** Mafia Life es un tributo a aquellos juegos de mafia para Android a los que jugaba allá por 2010-2012 con la gente de la oficina: energía que se recarga, valor para los crímenes, la cárcel, el hospital y peleas entre compañeros a la hora del café.

## ✨ Qué incluye

| | |
|---|---|
| 💼 **Crímenes** | Gastan energía y valor, y cada golpe necesita un tiempo antes de repetirlo. Si sale mal, al hospital o a la cárcel |
| 🚔 **Crímenes de cárcel** | Mientras estás dentro: poco dinero, buena experiencia y bastante riesgo para la salud |
| 🏋️ **Gimnasio** | Entrena Fuerza, Agilidad o Guardia; cada sesión gasta energía, voluntad y una cuota |
| 🥊 **Peleas** | Rivales de tu zona; gastan energía y valor, y te juegas salud y dinero |
| 👥 **Tu banda** y ⚔️ **guerras** | Recluta miembros y enfréntate a las bandas rivales de cada ciudad |
| 💼 **Empleo** | Sueldo por minuto y experiencia que llega sola; los mejores puestos piden Trabajo e Inteligencia |
| 🎓 **Escuela** | Cursos en tiempo real que suben la Inteligencia |
| 🏥 **Hospital** y 🚔 **cárcel** | Tiempo de espera real; paga o usa gemas para salir antes |
| 💎 **Gemas** y joyería | Se ganan jugando y se cambian por barras llenas, inteligencia o dinero |
| 🎰 **Casino** | Tragaperras, ruleta y cajas de la suerte (5 al día) |
| 🛒 **Tiendas** e 🎒 **inventario** | Armas, protección, vehículos y objetos (botiquín, bebida energética…) |
| 🏢 **Negocios** y 🏦 **banco** | Ocho negocios para ingresos pasivos (los mejores piden inteligencia) y dinero a salvo |
| ✈️ **Viajar** | Nueva York, Chicago, Las Vegas, La Habana y Palermo |
| 📈 **Habilidades** | Cada punto de nivel sube 1 el máximo de una barra |
| 📜 **Eventos** | Historial de lo que te ha pasado |

Las barras son las del original: ⚡ **Energía**, ✊ **Voluntad**, 💪 **Valor**, ❤️ **Salud** y ⭐ **XP**. Cada acción indica con esos mismos iconos lo que cuesta; el resto de efectos los tendrás que descubrir jugando. En el móvil la navegación va abajo; en pantallas anchas hay una columna lateral con estadísticas y menú, como en el juego de la época.

Los rangos van de **Ratero** a **Matón**, **Hombre de honor**, **Capo**, **Consigliere** y **Don**.

## 💾 Partidas

La partida se guarda en el navegador (`localStorage`) y se puede exportar, importar o borrar desde **Explorar → Partida**. Las partidas antiguas se adaptan solas al abrir el juego.

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
