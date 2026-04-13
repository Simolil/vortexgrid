// VORTEXGRID - Search and Filter

document.addEventListener('DOMContentLoaded', () => {
    // Render games
    renderGames(GAMES);
    
    const searchInput = document.getElementById('searchInput');
    const categoryBtns = document.querySelectorAll('.cat-btn');
    const gamesGrid = document.getElementById('gamesGrid');
    const noResults = document.getElementById('noResults');
    
    let currentCategory = 'all';
    let currentSearch = '';
    
    function filterAndRender() {
        let filtered = [...GAMES];
        
        // Filter by category
        if (currentCategory !== 'all') {
            filtered = filtered.filter(game => game.category === currentCategory);
        }
        
        // Filter by search
        if (currentSearch.trim()) {
            const searchLower = currentSearch.toLowerCase();
            filtered = filtered.filter(game => 
                game.title.toLowerCase().includes(searchLower)
            );
        }
        
        // Render or show no results
        if (filtered.length === 0) {
            gamesGrid.style.display = 'none';
            noResults.style.display = 'block';
        } else {
            gamesGrid.style.display = 'grid';
            noResults.style.display = 'none';
            renderGames(filtered);
            
            // Re-attach data attributes for filtering
            document.querySelectorAll('.game-card').forEach(card => {
                const gameTitle = card.querySelector('.game-title')?.textContent || '';
                const gameData = GAMES.find(g => g.title === gameTitle);
                if (gameData) {
                    card.setAttribute('data-name', gameData.title.toLowerCase());
                    card.setAttribute('data-category', gameData.category);
                }
            });
        }
    }
    
    // Search input handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            filterAndRender();
        });
    }
    
    // Category button handlers
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            filterAndRender();
        });
    });
    
    // Hero search sync
    const heroSearch = document.getElementById('heroSearch');
    if (heroSearch) {
        heroSearch.addEventListener('input', (e) => {
            if (searchInput) searchInput.value = e.target.value;
            currentSearch = e.target.value;
            filterAndRender();
        });
    }
    
    // Initial render
    filterAndRender();
});