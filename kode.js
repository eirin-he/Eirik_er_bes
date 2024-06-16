
document.getElementById('search-button').addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the value entered in the search input field
    var query = document.getElementById('search-bar').value.trim().toLowerCase();
    console.log('Search query:', query);  // Debugging line
    
    // Define a mapping of keywords to URLs
    var searchMap = {
        'tornerose': 'Sider/tornerose.html',
        'aladdin': 'Sider/aladdin.html',
        'wonka': 'Sider/wonka.html',
        'superhelt': 'Sider/superhelt.html',
        'eirik': 'Sider/eirik.html',
        'historie': 'Sider/historie.html',
        'novelle': 'Sider/novelle.html',
        'kokebok': 'Sider/kokebok.html',
        'mcdonalds': 'Sider/dikt.html',
        'boardgamegeek.com': 'Sider/spill.html',
        'symfoni': 'Sider/symfoni.html',
        'ordbok': 'Sider/ordbok.html',
        'love letter': 'Sider/loveletter.html',
        'loveletter': 'Sider/loveletter.html',
        'helene': 'Sider/helene.html',
        'gul': 'Sider/gul.html',
    };
    
    // Check if the entered query matches one of the keys in the searchMap
    if (query in searchMap) {
        console.log('Redirecting to:', searchMap[query]);  // Debugging line
        // Redirect to the corresponding page
        window.location.href = searchMap[query];
    } else {
        // Optionally, handle the case where the keyword is not valid
        alert('Dust. Kanskje ta tredje igjen?');
    }
}
)