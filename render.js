function renderTeams() {
  const container = document.getElementById('resultsContainer');
 
  teamsData.forEach((team, index) => {
    const teamDiv = document.createElement('div');
    teamDiv.className = 'team-card';
    teamDiv.innerHTML = `
      <img src="${team.logo}" alt="${team.name} logo" class="team-logo" />
      <button class="team-button" onclick="renderStarters(${index})">${team.name}</button>
    `;
    container.appendChild(teamDiv);
  });
}

function renderStarters(teamIndex) {
  const team = teamsData[teamIndex];
  const container = document.getElementById('resultsContainer');
  container.innerHTML = `<h2>${team.name} - Starters</h2>`;

  team.starters.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `
      <img src="${player.photo}" alt="${player.name}" class="player-photo" />
      <h3>${player.name}</h3>
      <p><strong>Position:</strong> ${player.position}</p>
      <p><strong>Stats:</strong> ${player.stats}</p>
    `;
    container.appendChild(card);
  });

  const backBtn = document.createElement('button');
  backBtn.textContent = "Back to Teams";
  backBtn.className = "back-button";
  backBtn.addEventListener('click', renderTeams);
  container.appendChild(backBtn);
}

function renderAbout() {
  const container = document.getElementById('resultsContainer');
  container.innerHTML = `
    <h2>About This Project</h2>
    <p>This app displays NBA Western Conference teams and their starters with stats and images.</p>
  `;
}

function renderStats() {
  const container = document.getElementById('resultsContainer');
  container.innerHTML = `
    <h2>Stats</h2>
    <p>Compare team averages, player stats, and win percentages (coming soon).</p>
  `;
}

document.getElementById('navHome').addEventListener('click', (e) => {
  e.preventDefault();
  renderTeams();
});

document.getElementById('navAbout').addEventListener('click', (e) => {
  e.preventDefault();
  renderAbout();
});

document.getElementById('navStats').addEventListener('click', (e) => {
  e.preventDefault();
  renderStats();
});

const searchInput = document.getElementById("searchInput");

function performSearch(term) {
  const searchTerm = term.toLowerCase();
  const container = document.getElementById("resultsContainer");

  const filteredTeams = teamsData.filter(team =>
    team.name.toLowerCase().includes(searchTerm)
  );

  container.innerHTML = "<h2>Search Results</h2>";

  if (filteredTeams.length === 0) {
    container.innerHTML += "<p>No matching teams found.</p>";
    return;
  }

  filteredTeams.forEach((team) => {
    const teamDiv = document.createElement("div");
    teamDiv.className = "team-card";
    teamDiv.innerHTML = `
      <img src="${team.logo}" alt="${team.name} logo" class="team-logo" />
      <button class="team-button" onclick="renderStarters(${teamsData.indexOf(team)})">${team.name}</button>
    `;
    container.appendChild(teamDiv);
  });
}

// Search on input
searchInput.addEventListener("input", (e) => {
  performSearch(e.target.value);
});

// Save on Enter and search
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const term = e.target.value.trim();
    let lastSearch = JSON.parse(localStorage.getItem("lastSearch")) || [];
    if (term) {
      // check if term is already in lastSearch
      lastSearch.push(term)
      
      localStorage.setItem("lastSearch", JSON.stringify(lastSearch));

      // add list to page
      performSearch(term);
    }
  }
});


renderTeams();
