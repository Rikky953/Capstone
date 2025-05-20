const teamsData = [
  {
    name: "Golden State Warriors",
    logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
    starters: [
      { name: "Stephen Curry", position: "PG", stats: "27 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png" },
      { name: "Klay Thompson", position: "SG", stats: "20 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/202691.png" },
      { name: "Andrew Wiggins", position: "SF", stats: "15 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203952.png" },
      { name: "Draymond Green", position: "PF", stats: "7 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png" },
      { name: "Kevon Looney", position: "C", stats: "6 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626172.png" }
    ]
  },
  {
    name: "Phoenix Suns",
    logo: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
    starters: [
      { name: "Kevin Durant", position: "SF", stats: "28 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png" },
      { name: "Devin Booker", position: "SG", stats: "26 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png" },
      { name: "Bradley Beal", position: "PG", stats: "23 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203078.png" },
      { name: "Grayson Allen", position: "PF", stats: "11 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628960.png" },
      { name: "Jusuf Nurkić", position: "C", stats: "10 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203994.png" }
    ]
  },
  {
    name: "Los Angeles Lakers",
    logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
    starters: [
      { name: "LeBron James", position: "SF", stats: "25 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png" },
      { name: "Anthony Davis", position: "C", stats: "24 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png" },
      { name: "D'Angelo Russell", position: "PG", stats: "17 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626156.png" },
      { name: "Austin Reaves", position: "SG", stats: "14 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630559.png" },
      { name: "Rui Hachimura", position: "PF", stats: "13 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629060.png" }
    ]
  },
  {
    name: "Denver Nuggets",
    logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg",
    starters: [
      { name: "Nikola Jokic", position: "C", stats: "26 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png" },
      { name: "Jamal Murray", position: "PG", stats: "20 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627750.png" },
      { name: "Michael Porter Jr.", position: "SF", stats: "17 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629008.png" },
      { name: "Aaron Gordon", position: "PF", stats: "13 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203932.png" },
      { name: "Kentavious Caldwell-Pope", position: "SG", stats: "10 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203484.png" }
    ]
  },
  {
    name: "Dallas Mavericks",
    logo: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
    starters: [
      { name: "Luka Doncic", position: "PG", stats: "32 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png" },
      { name: "Kyrie Irving", position: "SG", stats: "25 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png" },
      { name: "Derrick Jones Jr.", position: "SF", stats: "10 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627884.png" },
      { name: "P.J. Washington", position: "PF", stats: "12 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629685.png" },
      { name: "Daniel Gafford", position: "C", stats: "9 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629655.png" }
    ]
  },
  {
    name: "LA Clippers",
    logo: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
    starters: [
      { name: "Kawhi Leonard", position: "SF", stats: "24 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png" },
      { name: "Paul George", position: "SG", stats: "23 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png" },
      { name: "James Harden", position: "PG", stats: "20 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png" },
      { name: "Ivica Zubac", position: "C", stats: "11 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627826.png" },
      { name: "Russell Westbrook", position: "PG", stats: "15 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png" }
    ]
  },
  {
    name: "Oklahoma City Thunder",
    logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
    starters: [
      { name: "Shai Gilgeous-Alexander", position: "PG", stats: "31 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png" },
      { name: "Josh Giddey", position: "SG", stats: "12 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630581.png" },
      { name: "Jalen Williams", position: "SF", stats: "15 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631114.png" },
      { name: "Chet Holmgren", position: "C", stats: "14 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631096.png" },
      { name: "Lu Dort", position: "PF", stats: "10 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629652.png" }
    ]
  },
  {
    name: "Minnesota Timberwolves",
    logo: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
    starters: [
      { name: "Anthony Edwards", position: "SG", stats: "25 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630162.png" },
      { name: "Karl-Anthony Towns", position: "C", stats: "22 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626157.png" },
      { name: "Rudy Gobert", position: "C", stats: "13 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203497.png" },
      { name: "Mike Conley", position: "PG", stats: "11 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/201144.png" },
      { name: "Jaden McDaniels", position: "SF", stats: "9 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630182.png" }
    ]
  },
  {
    name: "New Orleans Pelicans",
    logo: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
    starters: [
      { name: "Zion Williamson", position: "PF", stats: "22 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629627.png" },
      { name: "Brandon Ingram", position: "SF", stats: "24 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627742.png" },
      { name: "CJ McCollum", position: "SG", stats: "21 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203468.png" },
      { name: "Herbert Jones", position: "SG", stats: "10 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630529.png" },
      { name: "Jonas Valanciunas", position: "C", stats: "15 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/202685.png" }
    ]
  },
  {
    name: "San Antonio Spurs",
    logo: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
    starters: [
      { name: "Victor Wembanyama", position: "C", stats: "20 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641705.png" },
      { name: "Devin Vassell", position: "SG", stats: "19 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630170.png" },
      { name: "Keldon Johnson", position: "SF", stats: "17 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629640.png" },
      { name: "Jeremy Sochan", position: "PF", stats: "10 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631111.png" },
      { name: "Tre Jones", position: "PG", stats: "9 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630200.png" }
    ]
  },
  {
    name: "Houston Rockets",
    logo: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
    starters: [
      { name: "Jalen Green", position: "SG", stats: "19 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630224.png" },
      { name: "Fred VanVleet", position: "PG", stats: "17 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627832.png" },
      { name: "Alperen Sengun", position: "C", stats: "18 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630578.png" },
      { name: "Dillon Brooks", position: "SF", stats: "14 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628415.png" },
      { name: "Jabari Smith Jr.", position: "PF", stats: "13 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631092.png" }
    ]
  },
  {
    name: "Portland Trail Blazers",
    logo: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
    starters: [
      { name: "Scoot Henderson", position: "PG", stats: "14 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641723.png" },
      { name: "Anfernee Simons", position: "SG", stats: "20 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629014.png" },
      { name: "Shaedon Sharpe", position: "SF", stats: "15 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631107.png" },
      { name: "Jerami Grant", position: "PF", stats: "19 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203924.png" },
      { name: "Deandre Ayton", position: "C", stats: "15 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629028.png" }
    ]
  },
  {
    name: "Sacramento Kings",
    logo: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
    starters: [
      { name: "De'Aaron Fox", position: "PG", stats: "25 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628368.png" },
      { name: "Domantas Sabonis", position: "C", stats: "19 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627734.png" },
      { name: "Harrison Barnes", position: "SF", stats: "12 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203084.png" },
      { name: "Kevin Huerter", position: "SG", stats: "13 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628989.png" },
      { name: "Keegan Murray", position: "PF", stats: "12 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631099.png" }
    ]
  },
  {
    name: "Utah Jazz",
    logo: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
    starters: [
      { name: "Lauri Markkanen", position: "PF", stats: "24 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628374.png" },
      { name: "Jordan Clarkson", position: "SG", stats: "17 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203077.png" },
      { name: "Collin Sexton", position: "PG", stats: "15 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629012.png" },
      { name: "Walker Kessler", position: "C", stats: "9 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630624.png" },
      { name: "John Collins", position: "SF", stats: "11 PPG", photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628381.png" }
    ]
  }
];
