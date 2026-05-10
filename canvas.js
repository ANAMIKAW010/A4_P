// --- COMPLETE DATASET FOR INDIA ---
const stateData = {
    // --- NORTH ---
    "Jammu and Kashmir": { region: 'north', cultureHub: 'Srinagar', knownFor: 'Shikaras & Sufi Shrines', economy: 'Tourism & Handicrafts', bestFor: 'Nature', notes: 'Watch the incredible Kashmir Great Lakes.', tags: ['Mountains', 'Trekking'] },
    "Ladakh": { region: 'north', cultureHub: 'Leh', knownFor: 'Monasteries', economy: 'Tourism', bestFor: 'Adventure', notes: 'Acclimatization is key before exploring.', tags: ['Adventure', 'Buddhism'] },
    "Himachal Pradesh": { region: 'north', cultureHub: 'Shimla', knownFor: 'Hill Stations', economy: 'Hydropower & Apples', bestFor: 'Trekking', notes: 'Check out the stunning Kareri Lake.', tags: ['Himalayas', 'Trekking'] },
    "Punjab": { region: 'north', cultureHub: 'Amritsar', knownFor: 'Golden Temple', economy: 'Agriculture', bestFor: 'Heritage & Culinary', notes: 'Do not miss the Wagah Border ceremony.', tags: ['Food', 'Heritage'] },
    "Haryana": { region: 'north', cultureHub: 'Kurukshetra', knownFor: 'Vedic Heritage', economy: 'Auto manufacturing', bestFor: 'Historical Tourism', notes: 'Famous for the Surajkund Crafts Mela.', tags: ['History', 'Crafts'] },
    "Chandigarh": { region: 'north', cultureHub: 'Sector 17', knownFor: 'Urban Planning', economy: 'IT & Services', bestFor: 'Architecture', notes: 'Visit the famous Rock Garden.', tags: ['Modern', 'Gardens'] },
    "Uttarakhand": { region: 'north', cultureHub: 'Rishikesh', knownFor: 'Yoga & Char Dham', economy: 'Tourism', bestFor: 'Pilgrimage', notes: 'Experience the secret Silk Route.', tags: ['Yoga', 'Trekking'] },
    "Uttar Pradesh": { region: 'north', cultureHub: 'Lucknow', knownFor: 'Taj Mahal & Ganga Ghats', economy: 'Agriculture & Tourism', bestFor: 'Heritage Trails', notes: 'Home to the magnificent Taj Mahal in Agra.', tags: ['Heritage', 'Spiritual'] },
    "Delhi": { region: 'north', cultureHub: 'Old Delhi', knownFor: 'Mughal Architecture', economy: 'Commerce', bestFor: 'Historical Trails', notes: 'The heart and capital of the nation.', tags: ['History', 'Urban'] },

    // --- CENTRAL ---
    "Madhya Pradesh": { region: 'central', cultureHub: 'Bhopal', knownFor: 'Wildlife & Temples', economy: 'Agriculture', bestFor: 'Wildlife Safaris', notes: 'The "Heart of India". Incredible jungle safaris.', tags: ['Wildlife', 'Temples'] },
    "Chhattisgarh": { region: 'central', cultureHub: 'Bastar', knownFor: 'Tribal Culture', economy: 'Mining', bestFor: 'Offbeat Travel', notes: 'Explore the Naya Raipur Jungle Safari.', tags: ['Safari', 'Nature'] },

    // --- WEST ---
    "Rajasthan": { region: 'west', cultureHub: 'Jaipur', knownFor: 'Forts & Palaces', economy: 'Tourism & Textiles', bestFor: 'Royal Heritage', notes: 'A complete guide to majestic forts and royal palaces.', tags: ['Heritage', 'Forts'] },
    "Gujarat": { region: 'west', cultureHub: 'Ahmedabad', knownFor: 'Rann of Kutch', economy: 'Trade & Diamonds', bestFor: 'Culture Trails', notes: 'Visit the Statue of Unity.', tags: ['Desert', 'Textiles'] },
    "Maharashtra": { region: 'west', cultureHub: 'Mumbai', knownFor: 'Bollywood & Caves', economy: 'Finance & IT', bestFor: 'Diverse Experiences', notes: 'Experience the Ganesh Chaturthi festival.', tags: ['Beaches', 'Caves'] },
    "Goa": { region: 'west', cultureHub: 'Panaji', knownFor: 'Beaches & Churches', economy: 'Tourism', bestFor: 'Relaxation', notes: 'Explore the old churches in South Goa.', tags: ['Beaches', 'Nightlife'] },
    "Dadra and Nagar Haveli and Daman and Diu": { region: 'west', cultureHub: 'Daman', knownFor: 'Portuguese Forts', economy: 'Manufacturing', bestFor: 'Coastal retreats', notes: 'Quiet coastal charm.', tags: ['Coastal', 'History'] },

    // --- SOUTH ---
    "Karnataka": { region: 'south', cultureHub: 'Mysuru', knownFor: 'Hampi & Tech', economy: 'IT & Coffee', bestFor: 'Heritage & Tech', notes: 'Coffee estates in Coorg are a must-visit.', tags: ['Heritage', 'Coffee'] },
    "Kerala": { region: 'south', cultureHub: 'Kochi', knownFor: 'Backwaters & Ayurveda', economy: 'Tourism & Spices', bestFor: 'Ecotourism', notes: 'Trekking to the beautiful Vazhvanthol Waterfalls.', tags: ['Trekking', 'Wellness'] },
    "Tamil Nadu": { region: 'south', cultureHub: 'Madurai', knownFor: 'Dravidian Temples', economy: 'Auto & Textiles', bestFor: 'Temple Architecture', notes: 'Home to the magnificent Meenakshi Temple.', tags: ['Temples', 'Culture'] },
    "Andhra Pradesh": { region: 'south', cultureHub: 'Tirupati', knownFor: 'Tirumala Temple', economy: 'Agriculture & IT', bestFor: 'Pilgrimage', notes: 'Famous for Kalamkari art.', tags: ['Spiritual', 'Art'] },
    "Telangana": { region: 'south', cultureHub: 'Hyderabad', knownFor: 'Charminar', economy: 'IT & Pharma', bestFor: 'Culinary & History', notes: 'Explore the Golconda Fort.', tags: ['Food', 'History'] },
    "Puducherry": { region: 'south', cultureHub: 'White Town', knownFor: 'French Quarter', economy: 'Tourism', bestFor: 'Spiritual Retreats', notes: 'Rent a cycle to explore the colorful streets.', tags: ['French Vibe', 'Yoga'] },
    "Lakshadweep": { region: 'south', cultureHub: 'Kavaratti', knownFor: 'Coral Reefs', economy: 'Fishing', bestFor: 'Scuba Diving', notes: 'Pristine, untouched beaches.', tags: ['Islands', 'Diving'] },
    "Andaman and Nicobar Islands": { region: 'south', cultureHub: 'Port Blair', knownFor: 'Cellular Jail', economy: 'Tourism', bestFor: 'Water Sports', notes: 'Visit Radhanagar Beach.', tags: ['Beaches', 'History'] },

    // --- EAST ---
    "West Bengal": { region: 'east', cultureHub: 'Kolkata', knownFor: 'Durga Puja', economy: 'Agriculture & Tea', bestFor: 'Literature', notes: 'Try the local sweets (Rasgulla).', tags: ['Culture', 'Tigers'] },
    "Odisha": { region: 'east', cultureHub: 'Bhubaneswar', knownFor: 'Konark Temple', economy: 'Mining', bestFor: 'Ancient Architecture', notes: 'Rich in classical Odissi dance.', tags: ['Temples', 'Beaches'] },
    "Bihar": { region: 'east', cultureHub: 'Bodh Gaya', knownFor: 'Birthplace of Buddhism', economy: 'Agriculture', bestFor: 'Spiritual Heritage', notes: 'Visit the ancient Nalanda University ruins.', tags: ['Buddhism', 'History'] },
    "Jharkhand": { region: 'east', cultureHub: 'Ranchi', knownFor: 'Tribal Heritage', economy: 'Mining', bestFor: 'Nature Walks', notes: 'Known as the Land of Forests.', tags: ['Forests', 'Waterfalls'] },

    // --- NORTH EAST ---
    "Assam": { region: 'northeast', cultureHub: 'Guwahati', knownFor: 'Tea Gardens & Rhinos', economy: 'Tea & Oil', bestFor: 'Wildlife Safari', notes: 'Incredible Kaziranga National Park Jungle Safari.', tags: ['Safari', 'Wildlife'] },
    "Sikkim": { region: 'northeast', cultureHub: 'Gangtok', knownFor: 'Kanchenjunga', economy: 'Organic Farming', bestFor: 'Himalayan Views', notes: 'India’s first fully organic state.', tags: ['Organic', 'Mountains'] },
    "Arunachal Pradesh": { region: 'northeast', cultureHub: 'Tawang', knownFor: 'Dawn-lit Mountains', economy: 'Agriculture', bestFor: 'Untouched Nature', notes: 'Home to the massive Tawang Monastery.', tags: ['Himalayas', 'Tribal'] },
    "Nagaland": { region: 'northeast', cultureHub: 'Kohima', knownFor: 'Hornbill Festival', economy: 'Agriculture', bestFor: 'Tribal Culture', notes: 'Famous for indigenous warrior tribes.', tags: ['Festivals', 'Tribes'] },
    "Manipur": { region: 'northeast', cultureHub: 'Imphal', knownFor: 'Loktak Lake', economy: 'Handlooms', bestFor: 'Scenic Beauty', notes: 'See the floating national park.', tags: ['Lakes', 'Dance'] },
    "Mizoram": { region: 'northeast', cultureHub: 'Aizawl', knownFor: 'Bamboo Dance', economy: 'Agriculture', bestFor: 'Quiet Retreats', notes: 'Highly literate and peaceful state.', tags: ['Hills', 'Culture'] },
    "Tripura": { region: 'northeast', cultureHub: 'Agartala', knownFor: 'Palaces', economy: 'Agriculture', bestFor: 'Offbeat Heritage', notes: 'Visit the Neermahal water palace.', tags: ['Palaces', 'Crafts'] },
    "Meghalaya": { region: 'northeast', cultureHub: 'Shillong', knownFor: 'Living Root Bridges', economy: 'Tourism', bestFor: 'Caving & Waterfalls', notes: 'The "Abode of Clouds".', tags: ['Nature', 'Caves'] }
};

// --- DYNAMIC FLICKR PHOTO GALLERIES (Guaranteed to load) ---
const regionGalleries = {
    "north": [
        { url: 'https://loremflickr.com/600/400/tajmahal,india/all', caption: 'Mughal Architecture' },
        { url: 'https://loremflickr.com/600/400/himalayas,mountains/all', caption: 'Himalayan Treks' },
        { url: 'https://loremflickr.com/600/400/goldentemple,india/all', caption: 'Spiritual Shrines' },
        { url: 'https://loremflickr.com/600/400/delhi,market/all', caption: 'Cultural Markets' }
    ],
    "south": [
        { url: 'https://loremflickr.com/600/400/kerala,backwaters/all', caption: 'Tranquil Backwaters' },
        { url: 'https://loremflickr.com/600/400/temple,southindia/all', caption: 'Dravidian Temples' },
        { url: 'https://loremflickr.com/600/400/munnar,tea/all', caption: 'Lush Hill Stations' },
        { url: 'https://loremflickr.com/600/400/kerala,beach/all', caption: 'Coastal Escapes' }
    ],
    "west": [
        { url: 'https://loremflickr.com/600/400/rajasthan,fort/all', caption: 'Royal Palaces & Forts' },
        { url: 'https://loremflickr.com/600/400/thar,desert/all', caption: 'Desert Safaris' },
        { url: 'https://loremflickr.com/600/400/goa,beach/all', caption: 'Vibrant Beaches' },
        { url: 'https://loremflickr.com/600/400/mumbai,city/all', caption: 'Bustling Metropolises' }
    ],
    "east": [
        { url: 'https://loremflickr.com/600/400/kolkata,festival/all', caption: 'Cultural Festivities' },
        { url: 'https://loremflickr.com/600/400/konark,temple/all', caption: 'Ancient Architecture' },
        { url: 'https://loremflickr.com/600/400/darjeeling,train/all', caption: 'Mountain Railways' },
        { url: 'https://loremflickr.com/600/400/sundarbans/all', caption: 'Mangroves & Wildlife' }
    ],
    "central": [
        { url: 'https://loremflickr.com/600/400/tiger,safari,india/all', caption: 'Tiger Reserves' },
        { url: 'https://loremflickr.com/600/400/khajuraho/all', caption: 'Historic Monuments' },
        { url: 'https://loremflickr.com/600/400/waterfall,india/all', caption: 'Pristine Waterfalls' },
        { url: 'https://loremflickr.com/600/400/tribal,india/all', caption: 'Tribal Art & Heritage' }
    ],
    "northeast": [
        { url: 'https://loremflickr.com/600/400/rhino,india/all', caption: 'Rhino Sanctuaries' },
        { url: 'https://loremflickr.com/600/400/buddhist,monastery,india/all', caption: 'Buddhist Monasteries' },
        { url: 'https://loremflickr.com/600/400/assam,tea/all', caption: 'Rolling Green Valleys' },
        { url: 'https://loremflickr.com/600/400/meghalaya/all', caption: 'Living Root Bridges' }
    ]
};

// --- GOOGLE CHARTS API LOGIC ---
google.charts.load('current', { 'packages':['geochart'] });
google.charts.setOnLoadCallback(drawRegionsMap);
window.addEventListener('resize', drawRegionsMap);

function drawRegionsMap() {
    const mapContainer = document.getElementById('indiaMap');
    if (!mapContainer) return;

    const data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Value'); 
    data.addColumn({type: 'string', role: 'tooltip'});

    const rows = [];
    Object.keys(stateData).forEach((state) => {
        let mapLocation = state;
        if (state === "Odisha") mapLocation = { v: 'Orissa', f: 'Odisha' };
        else if (state === "Uttarakhand") mapLocation = { v: 'Uttaranchal', f: 'Uttarakhand' };

        rows.push([mapLocation, 1, 'Click to explore']); 
    });
    data.addRows(rows);

    const options = {
        region: 'IN',
        displayMode: 'regions',
        resolution: 'provinces',
        backgroundColor: 'transparent',
        datalessRegionColor: '#e0e0e0',
        defaultColor: '#f5f5f5',
        colorAxis: {colors: ['#FF9933', '#FF9933']}, 
        legend: 'none',
        tooltip: { textStyle: { color: '#333' }, showColorCode: false },
        keepAspectRatio: true
    };

    const chart = new google.visualization.GeoChart(mapContainer);
    
    google.visualization.events.addListener(chart, 'select', function() {
        const selection = chart.getSelection();
        if (selection.length > 0) {
            const stateName = data.getValue(selection[0].row, 0);
            updatePanel(stateName);
            const showcase = document.querySelector('.state-showcase');
            if (showcase) showcase.scrollIntoView({ behavior: 'smooth' });
        }
    });

    chart.draw(data, options);
}

// --- UPDATE THE FULL WIDTH INFO PANEL & PHOTOS ---
function updatePanel(stateName) {
    const data = stateData[stateName];
    
    if (data) {
        document.getElementById('stateTitle').textContent = stateName;
        document.getElementById('cultureHub').textContent = data.cultureHub;
        document.getElementById('knownFor').textContent = data.knownFor;
        document.getElementById('economy').textContent = data.economy;
        document.getElementById('bestFor').textContent = data.bestFor;
        
        const longDesc = `${stateName} is a mesmerizing destination primarily known for its ${data.knownFor.toLowerCase()}. Culturally anchored by ${data.cultureHub}, this region offers travelers an incredible blend of experiences, making it best for ${data.bestFor.toLowerCase()}. ${data.notes} Economically, the state is driven by ${data.economy.toLowerCase()}, which shapes the local lifestyle and sustainable tourism initiatives available to visitors.`;
        document.getElementById('stateDescription').textContent = longDesc;

        const tagsContainer = document.getElementById('stateTags');
        if (tagsContainer) {
            tagsContainer.innerHTML = ''; 
            data.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'state-chip';
                span.textContent = tag;
                tagsContainer.appendChild(span);
            });
        }

        const gallery = document.getElementById('stateGallery');
        const photosToDisplay = regionGalleries[data.region];
        
        if (gallery && photosToDisplay) {
            gallery.innerHTML = ''; 
            photosToDisplay.forEach(photo => {
                const card = document.createElement('div');
                card.className = 'photo-card';
                
                // NO SCRIPTS, JUST A PURE IMAGE TAG
                card.innerHTML = `
                    <img src="${photo.url}" alt="${photo.caption}">
                    <div class="photo-caption">${photo.caption}</div>
                `;
                gallery.appendChild(card);
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('explorerForm');
    const searchInput = document.getElementById('stateSearch');
    const msg = document.getElementById('formMessage');
    const regionSelect = document.getElementById('regionSelect');
    const autocompleteList = document.getElementById('autocomplete-list');

    function renderAutocomplete(query) {
        const selectedRegion = regionSelect.value;
        autocompleteList.innerHTML = ''; 
        
        const filteredStates = Object.keys(stateData).filter(stateName => {
            const matchesRegion = selectedRegion === "" || stateData[stateName].region === selectedRegion;
            const matchesQuery = stateName.toLowerCase().startsWith(query.toLowerCase());
            return matchesRegion && matchesQuery;
        });

        if (filteredStates.length === 0) {
            autocompleteList.classList.add('hidden');
            return;
        }

        filteredStates.forEach(stateName => {
            const li = document.createElement('li');
            const matchLen = query.length;
            li.innerHTML = `<strong>${stateName.substring(0, matchLen)}</strong>${stateName.substring(matchLen)}`;
            
            li.addEventListener('click', () => {
                searchInput.value = stateName;
                autocompleteList.classList.add('hidden');
                
                msg.textContent = `Insights loaded for ${stateName}!`;
                msg.style.color = '#007bff';
                updatePanel(stateName);
                
                const showcase = document.querySelector('.state-showcase');
                if (showcase) showcase.scrollIntoView({ behavior: 'smooth' });
                
                setTimeout(() => msg.textContent = '', 2000);
            });
            
            autocompleteList.appendChild(li);
        });
        
        autocompleteList.classList.remove('hidden');
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderAutocomplete(e.target.value));
        searchInput.addEventListener('focus', () => renderAutocomplete(searchInput.value));
    }
    
    if (regionSelect && searchInput) {
        regionSelect.addEventListener('change', () => {
            searchInput.value = ''; 
            renderAutocomplete('');
        });
    }

    document.addEventListener('click', (e) => {
        if (searchInput && autocompleteList && e.target !== searchInput && e.target !== autocompleteList) {
            autocompleteList.classList.add('hidden');
        }
    });

    if(form && searchInput && msg) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const query = searchInput.value.trim().toLowerCase();
            const match = Object.keys(stateData).find(key => key.toLowerCase() === query);

            if (match) {
                msg.textContent = `Insights loaded for ${match}!`;
                msg.style.color = '#007bff';
                updatePanel(match);
                const showcase = document.querySelector('.state-showcase');
                if (showcase) showcase.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => msg.textContent = '', 2000);
            } else {
                msg.textContent = "State not found. Try 'Kerala' or 'Rajasthan'.";
                msg.style.color = '#dc3545';
            }
        });

        form.addEventListener('reset', () => {
            updatePanel("Rajasthan"); 
            msg.textContent = "";
        });
    }

    // Load default state on page load
    updatePanel("Rajasthan");
});
// === DARK MODE THEME TOGGLE ===
(function() {
  const themeBtn = Object.assign(document.createElement('button'), {
    className: 'theme-toggle',
    textContent: 'Dark Mode'
  });
  document.body.appendChild(themeBtn);
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
  });
})();
