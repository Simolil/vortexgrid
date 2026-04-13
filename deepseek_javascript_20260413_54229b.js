// VORTEXGRID - Game Database
// Add your games here with real embed URLs from GameDistribution

const GAMES = [
    {
        id: 1,
        title: "Vex 7",
        category: "platform",
        thumbnail: "https://placehold.co/400x400/6C47FF/white?text=Vex+7",
        embedUrl: "https://html5.gamedistribution.com/rvvASMiM7e4game/8a3f2e1d4c5b6a7f8e9d0c1b2a3f4e5d/",
        description: "The ultimate platform challenge. Run, jump, and flip through challenging levels."
    },
    {
        id: 2,
        title: "Slope",
        category: "action",
        thumbnail: "https://placehold.co/400x400/ff4444/white?text=Slope",
        embedUrl: "https://html5.gamedistribution.com/6e5d4c3b2a1f4e5d8c7b6a5f4e3d2c1b/",
        description: "Roll down the slope at high speed. Avoid red blocks and stay on track!"
    },
    {
        id: 3,
        title: "Moto X3M",
        category: "racing",
        thumbnail: "https://placehold.co/400x400/ffaa00/white?text=Moto+X3M",
        embedUrl: "https://html5.gamedistribution.com/5d4c3b2a1f4e5d8c7b6a5f4e3d2c1b0a/",
        description: "Epic bike racing game with crazy stunts and challenging obstacles."
    },
    {
        id: 4,
        title: "Drive Mad",
        category: "racing",
        thumbnail: "https://placehold.co/400x400/00cc88/white?text=Drive+Mad",
        embedUrl: "https://html5.gamedistribution.com/4c3b2a1f4e5d8c7b6a5f4e3d2c1b0a9f8e/",
        description: "Drive your car through insane obstacle courses. Can you keep your cool?"
    },
    {
        id: 5,
        title: "Retro Bowl",
        category: "sports",
        thumbnail: "https://placehold.co/400x400/ff6600/white?text=Retro+Bowl",
        embedUrl: "https://html5.gamedistribution.com/0e9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b/",
        description: "Classic football game with retro graphics and addictive gameplay."
    },
    {
        id: 6,
        title: "Bob the Robber 2",
        category: "action",
        thumbnail: "https://placehold.co/400x400/9933ff/white?text=Bob+Robber",
        embedUrl: "https://html5.gamedistribution.com/7e5a4b3c2d1f4e5a8b7c6d5e4f3a2b1c/",
        description: "Sneak, steal, and solve puzzles in this exciting stealth adventure."
    },
    {
        id: 7,
        title: "2048",
        category: "puzzle",
        thumbnail: "https://placehold.co/400x400/ffcc00/white?text=2048",
        embedUrl: "https://html5.gamedistribution.com/8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0/",
        description: "Merge numbers to reach the 2048 tile. Simple but addictive puzzle game."
    },
    {
        id: 8,
        title: "Vex 6",
        category: "platform",
        thumbnail: "https://placehold.co/400x400/6C47FF/white?text=Vex+6",
        embedUrl: "https://html5.gamedistribution.com/rvvASMiM7e4game/7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3/",
        description: "More challenging platforming action in the Vex series."
    },
    {
        id: 9,
        title: "Moto X3M 2",
        category: "racing",
        thumbnail: "https://placehold.co/400x400/ffaa00/white?text=Moto+X3M+2",
        embedUrl: "https://html5.gamedistribution.com/1f4e5d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a/",
        description: "The sequel with more bikes, more levels, and crazier stunts."
    },
    {
        id: 10,
        title: "Vex 5",
        category: "platform",
        thumbnail: "https://placehold.co/400x400/6C47FF/white?text=Vex+5",
        embedUrl: "https://html5.gamedistribution.com/rvvASMiM7e4game/3b2a1f4e5d8c7b6a5f4e3d2c1b0a9f8e7d/",
        description: "Master new mechanics in this intense platform challenge."
    },
    {
        id: 11,
        title: "Vex 4",
        category: "platform",
        thumbnail: "https://placehold.co/400x400/6C47FF/white?text=Vex+4",
        embedUrl: "https://html5.gamedistribution.com/rvvASMiM7e4game/2a1f4e5d8c7b6a5f4e3d2c1b0a9f8e7d6c/",
        description: "Classic Vex platforming with new traps and secrets."
    },
    {
        id: 12,
        title: "1v1.LOL",
        category: "shooting",
        thumbnail: "https://placehold.co/400x400/ff4444/white?text=1v1.LOL",
        embedUrl: "https://html5.gamedistribution.com/7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9/",
        description: "Build, shoot, and outplay opponents in this competitive battle game."
    }
];

// Render games to the grid
function renderGames(games) {
    const grid = document.getElementById('gamesGrid');
    if (!grid) return;
    
    grid.innerHTML = games.map(game => `
        <a href="/play.html?id=${game.id}" class="game-card" data-name="${game.title.toLowerCase()}" data-category="${game.category}">
            <div class="game-thumb">
                <img src="${game.thumbnail}" alt="${game.title}" loading="lazy">
                <div class="play-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-category">${game.category}</div>
            </div>
        </a>
    `).join('');
}

// Get game by ID
function getGameById(id) {
    return GAMES.find(game => game.id === parseInt(id));
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GAMES, getGameById };
}