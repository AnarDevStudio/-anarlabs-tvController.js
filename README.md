# 🀞 TV Controller JavaScript

A lightweight focus management library for Smart TV apps. Navigate with remote controls using simple HTML attributes.
<br>
[![npm version](https://img.shields.io/npm/v/tvcontroller-javascript)](https://www.npmjs.com/package/tvcontroller-javascript)
[![npm downloads](https://img.shields.io/npm/dw/tvcontroller-javascript)](https://www.npmjs.com/package/tvcontroller-javascript)
[![license](https://img.shields.io/npm/l/tvcontroller-javascript)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/AnarDevStudio/tvcontroller-javascript)](
https://github.com/AnarDevStudio/tvcontroller-javascript
)



## 📦 Installation

```bash
npm install tvcontroller-javascript
```

## 🚀 Quick Start

```javascript
import { tvController } from "tvcontroller-javascript";

tvController().init();
```

```css
.tv-focused {
  border: 3px solid #ff0000;
  transform: scale(1.1);
  transition: all 200ms ease;
}
```

```html
<button tv-focus="true" tv-enter="playVideo()">
  ▶ Play Movie
</button>
```

## 📖 Attributes

| Attribute | Description |
|-----------|-------------|
| `tv-focus="true"` | Makes element focusable |
| `tv-enter="..."` | Runs on OK/Enter press |
| `tv-focused="..."` | Runs when focused |
| `tv-back="..."` | Runs on Back press |

## 💡 Examples

### Movie Grid

```html
<div class="movie-card" tv-focus="true" tv-enter="playMovie('stranger-things')">
  <img src="movie.jpg" alt="Movie">
</div>
```

### Menu

```html
<div tv-focus="true" tv-enter="navigateToHome()">Home</div>
<div tv-focus="true" tv-enter="navigateToMovies()">Movies</div>
<div tv-focus="true" tv-enter="navigateToSettings()">Settings</div>
```

### Player Controls

```html
<button tv-focus="true" tv-enter="togglePlay()">⏯ Play/Pause</button>
<button tv-focus="true" tv-enter="rewind()">⏪ -10s</button>
<button tv-focus="true" tv-enter="forward()">⏩ +10s</button>
```

## 🎨 Style Examples

```css
/* Glow effect */
.tv-focused {
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.8);
}

/* Slide effect */
.tv-focused {
  transform: translateX(10px) scale(1.05);
}
```

## ⌨️ Controls

- **Arrow Keys**: Navigate
- **Enter/OK**: Select
- **Back**: Go back

## 📱 Compatible With

Samsung Tizen, LG webOS, Android TV, Fire TV, and more.

## 📄 License

MIT

---

**⭐ Star us on GitHub if you find this useful!**
**From AnarLabs❤️**