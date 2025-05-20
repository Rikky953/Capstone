# CSS Checklist 

---

## 1. Global Reset
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```
- Ensures consistent box sizing and removes default spacing across browsers.

---

## 2. CSS Variables
```css
:root {
  --primary-color: navy;
  --text-color: #333;
  --btn-radius: 6px;
}
```
- Declared in the root for reuse (theme colors, styling constants).

---

## 3. Organized Code Structure
- Sections are grouped logically: header, nav, layout, cards, etc.
- Class names are semantic and scoped (e.g., `.team-card`, `.player-card`).

---

## 4. Responsive Design
```css
#resultsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}
```
- Uses CSS Grid with flexible column sizes
- Relative units used (`rem`, `%`, `auto`)

---

## 5. Typography Styling
```css
body {
  font-family: Arial, sans-serif;
}
```
- Clean, readable system font stack
- Dark mode supported with `body.dark`

---

## 6. Color Scheme & Contrast
- Light background (`whitesmoke`) with navy/dark text
- Dark mode uses `#1e1e1e` and white for improved readability

---

## 7. Flexbox/Grid Layouts
```css
.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
```
- Flexbox used for nav bar alignment
- Grid used for team layout

---

## 8. Button/Input Styling
```css
.team-button,
.back-button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: var(--btn-radius);
  background-color: navy;
  color: white;
  border: none;
  cursor: pointer;
}
```
- Consistent button design with hover/focus transitions

---

## 9. Reusable Utility Classes (Example)
- Could be added to make margins and spacing reusable:
```css
.mt-2 { margin-top: 0.5rem; }
.text-center { text-align: center; }
```

---

## 10. Transitions & Hover Effects
```css
.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```
- Cards animate on hover for visual feedback
- Smooth transitions help users recognize interactivity

---

## 11. Containers and Wrappers
```css
.wrapper {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
}
```
- Your layout uses container-based structure with padding

---

## 12. Theme Customization – Dark Mode
```css
body.dark {
  background-color: #1e1e1e;
  color: white;
}
```
- Theme toggled via button or Shift+D

---
