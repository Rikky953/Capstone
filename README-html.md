# HTML Full Checklist

This README documents essential HTML standards and best practices to ensure your site is:
- Valid and accessible
- Responsive and user-friendly
- Organized and maintainable

---

## 1. Doctype & Structure
- Always declare the HTML5 doctype:
  ```html
  <!DOCTYPE html>
  ```
- Use proper opening and closing tags
- Ensure all tags are properly nested

---

## 2. Lang Attribute
- Define the language of your document:
  ```html
  <html lang="en">
  ```

---

## 3. Meta Tags
- Character set:
  ```html
  <meta charset="UTF-8">
  ```
- Viewport for mobile responsiveness:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Description for SEO:
  ```html
  <meta name="description" content="Brief description of the page">
  ```

---

## 4. Semantic Elements
Use semantic tags to structure your content:
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`

---

## 5. Headings Structure
- Use headings in order: `<h1>` to `<h6>`
- Nest headings based on content hierarchy

---

## 6. Alt Text for Images
- All images must have meaningful `alt` text:
  ```html
  <img src="photo.jpg" alt="Team logo of Golden State Warriors">
  ```

---

## 7. Navigation
- Use `<nav>` for menus
- Wrap menu items in `<ul>` and `<li>`:
  ```html
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </nav>
  ```

---

## 8. Form Structure
- Use `<label for="...">` with matching `id`:
  ```html
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  ```

---

## 9. Button & Input Elements
- Always define the type:
  ```html
  <input type="text">
  <button type="submit">Submit</button>
  ```

---

## 10. Anchor Tags
- Use real or descriptive URLs:
  ```html
  <a href="contact.html">Contact</a>
  <a href="tel:+1234567890">Call Now</a>
  ```
- Avoid meaningless href="#"

---

## 11. External CSS/JS Links
- Always reference styles/scripts properly:
  ```html
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
  ```

---

## 12. Responsive Meta & Layout
- Make pages mobile-friendly:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Use flexible containers and CSS grid/flexbox

---

## 13. Responsive Image & Media
- Images should scale nicely:
  ```html
  <img src="team.jpg" alt="Team Photo" style="max-width:100%; height:auto;">
  ```

---

## 14. Tables
- Structure data tables correctly:
  ```html
  <table>
    <thead>
      <tr><th>Name</th><th>Stats</th></tr>
    </thead>
    <tbody>
      <tr><td>Player A</td><td>27 PPG</td></tr>
    </tbody>
  </table>
  ```

---

## 15. Lists
- Use `<ul>` for unordered, `<ol>` for ordered lists
- Items go in `<li>` elements

---

## 16. Comments
- Label major sections with HTML comments:
  ```html
  <!-- Navigation Bar -->
  ```

---

## 17. Indentation & Formatting
- Use consistent indentation (2 or 4 spaces)
- Keep code neat and readable

---

## 18. Favicon
- Add a favicon:
  ```html
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  ```

---



