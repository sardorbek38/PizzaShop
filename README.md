# 🍕 PizzaShop - React Project

Figma dizayndan qayta yaratilgan React loyiha.

## 📁 Papka Strukturasi

```
pizzashop/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── assets/          ← Rasmlarni shu yerga qo'ying
    └── components/
        ├── Nav/
        │   ├── Nav.jsx
        │   └── Nav.css
        ├── Hero/
        │   ├── Hero.jsx
        │   └── Hero.css
        ├── Menu/
        │   ├── Menu.jsx
        │   └── Menu.css
        ├── Popular/
        │   ├── Popular.jsx
        │   └── Popular.css
        ├── Events/
        │   ├── Events.jsx
        │   └── Events.css
        ├── About/
        │   ├── About.jsx
        │   └── About.css
        └── Footer/
            ├── Footer.jsx
            └── Footer.css
```

## 🚀 Ishlatish

```bash
# 1. Papkaga kiring
cd pizzashop

# 2. Paketlarni o'rnating
npm install

# 3. Dev serverni yoqing
npm run dev
```

## 🖼️ Rasmlarni Qo'shish

1. Rasmlaringizni `src/assets/` papkasiga qo'ying
2. Har bir komponentda `import` qiling:

```jsx
// Hero.jsx da
import heroPizza from '../../assets/hero-pizza.jpg';

// Keyin img tagida:
<img src={heroPizza} alt="Pizza" />
```

## 🎨 Componentlar

| Komponent | Vazifasi |
|-----------|----------|
| `Nav` | Navigatsiya menyu |
| `Hero` | Bosh sahifa banner |
| `Menu` | Pizza menyu (filter bilan) |
| `Popular` | Mashhur pizzalar |
| `Events` | Aksiya va tadbirlar |
| `About` | Biz haqimizda |
| `Footer` | Pastki qism |

## 🎨 Ranglar (CSS Variables)

```css
--bg-dark: #1a0a00     /* Asosiy fon */
--bg-card: #2a1200     /* Karta fon */
--orange: #ff6b00      /* Asosiy rang */
--text-white: #ffffff
--text-gray: #b0a090
```
