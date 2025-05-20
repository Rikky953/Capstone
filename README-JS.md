# JavaScript Checklist  

This README describes how this project meets each JavaScript best practice outlined in the capstone rubric. Each section matches the rubric category and includes code examples and real implementation context from the app.

---

## 1. Variable Naming & Indentation
- Descriptive `camelCase` names used
- 2-space indentation consistently applied
```js
let teamData = [];
let lastSearch = localStorage.getItem("lastSearch");
```

## 2. Function Naming & Modularity
- Clear function names reflect purpose
- Logic broken into reusable functions
```js
function renderTeams() { ... }
function greetUser() { ... }
```

## 3. Arrays & Objects Usage
- `teamsData` is an array of objects with nested arrays
```js
teamsData = [{ name: 'Warriors', starters: [ {...}, {...} ] }];
```

## 4. Array Methods
- Uses `.filter()` for search
- `.forEach()` to render cards
```js
const filtered = teamsData.filter(t => t.name.includes(search));
teamsData.forEach(team => { ... });
```

## 5. Looping & Iteration
- Uses `forEach()` efficiently to output lists

## 6. JSON Data Handling
- Uses `JSON.stringify()` and `JSON.parse()` in localStorage
```js
localStorage.setItem("lastSearch", JSON.stringify(term));
const data = JSON.parse(localStorage.getItem("lastSearch"));
```

## 7. Web Storage (Local/Session)
- `localStorage` used to store search input
- `sessionStorage` tracks session time
```js
localStorage.setItem("theme", "dark");
sessionStorage.setItem("timeOnPage", seconds);
```

## 8. Saving/Retrieving User Data
```js
let savedSearch = localStorage.getItem("lastSearch");
if (savedSearch) performSearch(savedSearch);
```

## 9. Cookies with Expiry
- Used to check first-time visitors
```js
const expiry = new Date();
expiry.setDate(expiry.getDate() + 7);
document.cookie = `visitedBefore=true; expires=${expiry.toUTCString()};`;
```

## 10. DOM Manipulation
- Dynamically creates elements for teams, players, messages
```js
document.createElement("div");
element.innerHTML = `...`;
container.appendChild(element);
```

## 11. CSS Manipulation via JS
```js
teamCard.style.backgroundColor = "#eee";
document.body.classList.toggle("dark");
```

## 12. Theme Preference
- Saved to `localStorage`, applied on load
```js
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
```

## 13. Comments & Code Readability
- Helpful inline comments throughout
```js
// Show greeting based on visit history
// Filter teams on input change
```

## 14. Error Handling & Debugging
```js
try {
  const parsed = JSON.parse(data);
} catch (e) {
  console.error("Failed to parse:", e);
}
```

## 15. Regex Validation (Example if added)
```js
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
```

## 16. Timer & Date Object
```js
const now = new Date();
const seconds = Math.floor(totalSeconds % 60);
```

## 17. Math, String, Random Methods
```js
const rand = Math.floor(Math.random() * 100);
```

## 18. Event Listeners & Keyboard Support
```js
document.getElementById("themeToggle").addEventListener("click", toggleTheme);
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key === "D") themeToggle.click();
});
```

## 19. Real-Time Search & History
- Live filters teams and stores the search term
```js
searchInput.addEventListener("input", (e) => performSearch(e.target.value));
```

## 20. CRUD Functionality (Simulated)
- Add/edit/delete behavior can be extended using array and localStorage manipulation
```js
teams.push(newTeam);
teams[index] = updatedTeam;
teams.splice(index, 1);
```
