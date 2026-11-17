<p align="center">
  <img src="icons/icon-192.png" width="120" alt="Mafia Life">
</p>

<h1 align="center">Mafia Life</h1>

<p align="center">
  Juego de mafia en el navegador. Gratis, sin registro y sin anuncios.<br>
  <a href="https://daniert.github.io/mafia-life/"><strong>▶ Jugar ahora</strong></a>
</p>

<p align="center">
  <img src="docs/screenshots/inicio.jpg" width="200" alt="Pantalla de inicio en Las Vegas">
  <img src="docs/screenshots/crimenes.jpg" width="200" alt="Crímenes en Palermo">
  <img src="docs/screenshots/banda.jpg" width="200" alt="Tu banda en La Habana">
  <img src="docs/screenshots/inventario.jpg" width="200" alt="Inventario en Hong Kong">
</p>

## 🎩 De qué va

Empiezas con $500 en Nueva York y sin nombre. Comete crímenes, entrena, estudia, monta negocios y forma tu banda hasta pasar de **Ratero** a **Don**.

Es un homenaje a los juegos de mafia para Android de 2010-2012: energía que se recarga con el tiempo, cárcel, hospital y peleas entre compañeros a la hora del café.

## ✨ Qué puedes hacer

- 💼 **Crímenes** para ganar dinero y experiencia (y arriesgarte a la cárcel)
- 🏋️ **Gimnasio**, 🎓 **escuela** y 💼 **empleo** para mejorar tu personaje
- 🥊 **Peleas** con rivales y ⚔️ **guerras** con tu banda
- 🔫 **Armas**, ropa blindada y vehículos para equiparte
- 🏢 **Negocios**, 🏦 **banco** y 🎰 **casino** para mover el dinero
- ✈️ **Viajar** por nueve ciudades, de Nueva York a Montecarlo, cada una con su ambiente

Lo demás, lo descubres jugando.

<p align="center">
  <img src="docs/screenshots/escritorio.jpg" width="800" alt="Versión de escritorio en Marsella">
</p>

## 📱 Instalar

Abre la [web](https://daniert.github.io/mafia-life/) en el móvil y elige **«Añadir a pantalla de inicio»**. En el ordenador, usa el botón de instalar de la barra de direcciones. Funciona sin conexión y la partida se guarda en tu dispositivo; puedes exportarla para pasarla a otro.

## 🛠️ Desarrollo

Sin build ni dependencias: todo el juego está en `index.html`. Para probarlo en local:

```bash
python3 -m http.server 8000
```

Cada push a `main` se publica en GitHub Pages mediante GitHub Actions, que también genera la lista de archivos que el service worker guarda para jugar sin conexión.
