const trip = {
  window: "Future dates",
  start: "Australia",
  route: "Tokyo, Hakone, Kyoto, Osaka",
  style: "Food, rail, culture, cities",
  stops: [
    {
      name: "Australia",
      coords: [-33.8688, 151.2093],
      note: "Departure point. Replace with Brisbane, Sydney, Melbourne, or your actual airport.",
      type: "flight",
    },
    {
      name: "Tokyo",
      coords: [35.6764, 139.6500],
      note: "Arrival, neighbourhood exploring, food, museums, shopping, and day-trip options.",
      type: "city",
    },
    {
      name: "Hakone / Fuji area",
      coords: [35.2324, 139.1069],
      note: "Onsen stay, mountain views, lake crossing, and a slower reset between cities.",
      type: "nature",
    },
    {
      name: "Kyoto",
      coords: [35.0116, 135.7681],
      note: "Temples, gardens, old streets, markets, and nearby Nara or Uji day trips.",
      type: "culture",
    },
    {
      name: "Osaka",
      coords: [34.6937, 135.5023],
      note: "Street food, nightlife, shopping, and an easy Kansai Airport departure option.",
      type: "food",
    },
  ],
  destinations: [
    {
      name: "Tokyo",
      days: "4-6 nights",
      bestFor: ["Food", "Shopping", "Day trips"],
      summary: "Use Tokyo as the high-energy arrival base. Pick accommodation near a useful rail hub rather than chasing every neighbourhood.",
      access: "Fly into Haneda or Narita, then base near a useful rail hub. For the first stay, Shinjuku, Shibuya, Ueno, Tokyo Station, or Ginza all work depending on the balance of nightlife, rail convenience, and budget.",
      bestTime: "Spring and autumn are the easiest weather windows. Winter is crisp and often clear. Summer works, but plan indoor breaks for heat and humidity.",
      walkTitle: "Asakusa, Ueno, and Akihabara cluster",
      walkNote: "Best as a half-day to full-day east Tokyo route using trains between the larger clusters, then walking within each area.",
      center: [35.7116, 139.7966],
      attractions: [
        { name: "Sensoji Temple", coords: [35.7148, 139.7967], detail: "Classic first Tokyo temple stop; go early or evening for calmer photos." },
        { name: "Nakamise-dori", coords: [35.7118, 139.7964], detail: "Snack and souvenir street leading to Sensoji." },
        { name: "Ueno Park", coords: [35.7156, 139.7745], detail: "Museums, ponds, shrines, and cherry blossoms in season." },
        { name: "Akihabara", coords: [35.6984, 139.7730], detail: "Electronics, games, anime shops, arcades, and themed cafes." },
      ],
      nearby: ["Kamakura for temples and coast", "Nikko for shrines and mountain scenery", "Yokohama for waterfront and Chinatown", "Mt Fuji / Kawaguchiko if weather is clear"],
    },
    {
      name: "Hakone / Fuji area",
      days: "1-2 nights",
      bestFor: ["Onsen", "Views", "Slower pace"],
      summary: "A compact break between the biggest city stops. Weather matters for Fuji views, so keep expectations flexible.",
      access: "From Shinjuku, Odakyu trains run to Hakone-Yumoto in about 90 minutes. From Tokyo Station, take the Tokaido Shinkansen to Odawara, then the Hakone Tozan Railway to Hakone-Yumoto.",
      bestTime: "Autumn and winter usually give the best chance of clear Fuji views. Spring is good for flowers. Avoid overloading the day if rain or volcanic-area closures affect the loop.",
      walkTitle: "Moto-Hakone lakeside cluster",
      walkNote: "Lake Ashi sights are walkable once you are there, but Hakone overall needs trains, buses, ropeways, boats, or taxis.",
      center: [35.2055, 139.0266],
      attractions: [
        { name: "Hakone Shrine", coords: [35.2049, 139.0252], detail: "Lakeside shrine with the famous torii view." },
        { name: "Lake Ashi Pier", coords: [35.2011, 139.0312], detail: "Boat connections and Fuji views on clear days." },
        { name: "Hakone Checkpoint", coords: [35.1927, 139.0262], detail: "Restored Edo-period Tokaido checkpoint." },
        { name: "Old Tokaido Cedar Avenue", coords: [35.1994, 139.0310], detail: "Short atmospheric walk near the lake." },
      ],
      nearby: ["Hakone Open-Air Museum", "Owakudani volcanic valley", "Gora onsen area", "Odawara Castle before or after Hakone"],
    },
    {
      name: "Kyoto",
      days: "3-5 nights",
      bestFor: ["Culture", "Walking", "Temples"],
      summary: "Kyoto rewards early starts and grouped neighbourhood days. Avoid crossing the city too many times in one day.",
      access: "Kyoto is on the Tokaido-Sanyo Shinkansen from Tokyo, Nagoya, Osaka, and beyond. The nearest major airports are Itami and Kansai International in Osaka Prefecture, roughly 1 to 1.5 hours away.",
      bestTime: "Spring and autumn are beautiful but crowded. Early mornings matter more than the exact month. Winter can be excellent for quieter temples.",
      walkTitle: "Higashiyama and Gion cluster",
      walkNote: "One of the best walking days in Kyoto: start early around Kiyomizu-dera and drift north through lanes, shrines, and Gion.",
      center: [35.0007, 135.7787],
      attractions: [
        { name: "Kiyomizu-dera", coords: [34.9949, 135.7850], detail: "Major hillside temple; start early to beat crowds." },
        { name: "Ninenzaka / Sannenzaka", coords: [34.9981, 135.7808], detail: "Historic lanes with shops and tea houses." },
        { name: "Yasaka Shrine", coords: [35.0037, 135.7786], detail: "Useful anchor between Higashiyama and Gion." },
        { name: "Gion", coords: [35.0031, 135.7750], detail: "Evening atmosphere, traditional streets, and careful etiquette around residents and working maiko/geiko." },
      ],
      nearby: ["Arashiyama bamboo grove and river", "Fushimi Inari", "Uji for tea and Byodoin", "Nara day trip"],
    },
    {
      name: "Osaka",
      days: "2-3 nights",
      bestFor: ["Food", "Nightlife", "Kansai base"],
      summary: "A relaxed final city with excellent food and airport access. It can also work as a base for Hiroshima or Himeji.",
      access: "From Tokyo, take the Tokaido-Sanyo Shinkansen to Shin-Osaka in about 2.5 hours, then transfer locally. From Kansai International Airport, JR and Nankai lines connect into Tennoji, Namba, and other hubs.",
      bestTime: "April is strong for Osaka Castle cherry blossoms. Autumn is comfortable for food walks. Summer festivals can be exciting, but expect heat.",
      walkTitle: "Namba, Dotonbori, and Shinsekai cluster",
      walkNote: "Best in late afternoon and evening when food streets, neon, arcades, and bars are active.",
      center: [34.6656, 135.5023],
      attractions: [
        { name: "Dotonbori", coords: [34.6687, 135.5013], detail: "Neon canal, street food, signs, and busy night atmosphere." },
        { name: "Kuromon Market", coords: [34.6652, 135.5064], detail: "Food market near Namba; best earlier in the day." },
        { name: "Namba Yasaka Shrine", coords: [34.6616, 135.4960], detail: "Distinctive lion-head shrine near Namba." },
        { name: "Shinsekai / Tsutenkaku", coords: [34.6525, 135.5063], detail: "Retro food and nightlife district south of Namba." },
      ],
      nearby: ["Himeji Castle", "Kobe waterfront and beef restaurants", "Universal Studios Japan", "Wakayama or Koyasan with more time"],
    },
    {
      name: "Nara",
      days: "Day trip",
      bestFor: ["History", "Parks", "Easy rail"],
      summary: "A straightforward day from Kyoto or Osaka with major temples and a walkable park area.",
      access: "Reach Nara easily from either Osaka or Kyoto. Nara Park and Naramachi are accessible from both JR Nara Station and Kintetsu Nara Station.",
      bestTime: "Spring and autumn are the most comfortable walking seasons. Go early if combining Todai-ji, Kasuga Taisha, and Naramachi in one day.",
      walkTitle: "Nara Park temple cluster",
      walkNote: "This is one of the easiest walking days: stations, temples, parkland, deer areas, and old-town lanes are close enough for a relaxed loop.",
      center: [34.6851, 135.8398],
      attractions: [
        { name: "Kintetsu Nara Station", coords: [34.6844, 135.8278], detail: "Most convenient start for the main park sights." },
        { name: "Kofuku-ji", coords: [34.6827, 135.8328], detail: "Temple complex near the station and park entrance." },
        { name: "Todai-ji", coords: [34.6890, 135.8398], detail: "Home of the Great Buddha Hall." },
        { name: "Kasuga Taisha", coords: [34.6814, 135.8484], detail: "Lantern-lined shrine reached through the park." },
        { name: "Naramachi", coords: [34.6773, 135.8301], detail: "Old merchant-town lanes for a slower finish." },
      ],
      nearby: ["Uji from Kyoto on a different day", "Horyu-ji for older temple architecture", "Yamanobe-no-michi for a walking-focused extension"],
    },
    {
      name: "Hiroshima / Miyajima",
      days: "1-2 nights or long day",
      bestFor: ["History", "Scenery", "Extension"],
      summary: "A strong optional extension if the trip has enough days. Best added after Kyoto or Osaka.",
      access: "Hiroshima is on the JR Tokaido-Sanyo Shinkansen from Tokyo, Osaka, Kyoto, Nagoya, and Fukuoka. Miyajima is reached by local train/tram plus ferry.",
      bestTime: "Spring and autumn are the easiest walking seasons. If staying overnight, split Peace Park and Miyajima across two slower days.",
      walkTitle: "Peace Park and central Hiroshima cluster",
      walkNote: "Central Hiroshima is compact. Use trams for longer hops, then walk the memorial park and castle/garden area.",
      center: [34.3948, 132.4547],
      attractions: [
        { name: "Atomic Bomb Dome", coords: [34.3955, 132.4536], detail: "World Heritage memorial and central orientation point." },
        { name: "Peace Memorial Museum", coords: [34.3915, 132.4536], detail: "Allow emotional bandwidth and do not rush the visit." },
        { name: "Hiroshima Castle", coords: [34.4015, 132.4594], detail: "Reconstructed castle north of the memorial area." },
        { name: "Shukkeien Garden", coords: [34.4007, 132.4676], detail: "Compact garden near Hiroshima Station." },
      ],
      nearby: ["Miyajima and Itsukushima Shrine", "Onomichi cycling or temple walk", "Kure naval history museums", "Himeji as a rail stop en route"],
    },
    {
      name: "Yokohama",
      days: "Day trip or 1 night",
      bestFor: ["Waterfront", "Food", "Easy from Tokyo"],
      summary: "A low-friction Tokyo side trip with a very different feel: bay views, Chinatown, museums, and evening lights.",
      access: "JR and private rail lines connect central Tokyo to Yokohama Station in under an hour. Haneda Airport to Yokohama Station is about 20 minutes by Keikyu train.",
      bestTime: "Good year-round. Clear winter evenings are strong for skyline views, while spring and autumn make the waterfront walk easier.",
      walkTitle: "Minato Mirai to Chinatown waterfront walk",
      walkNote: "A simple bay walk links modern waterfront sights, old port buildings, Yamashita Park, and Chinatown.",
      center: [35.4443, 139.6425],
      attractions: [
        { name: "Minato Mirai", coords: [35.4578, 139.6329], detail: "Skyline, shopping, museums, and bay views." },
        { name: "Red Brick Warehouse", coords: [35.4527, 139.6427], detail: "Historic port buildings now used for shops, events, and food." },
        { name: "Yamashita Park", coords: [35.4458, 139.6500], detail: "Waterfront park with easy bay walking." },
        { name: "Yokohama Chinatown", coords: [35.4437, 139.6466], detail: "Dense dining area; best when you want an easy food-focused side trip." },
      ],
      nearby: ["Kamakura coast and temples", "Cup Noodles Museum", "Kirin brewery tours", "Return to Tokyo for evening plans"],
    },
    {
      name: "Kanazawa",
      days: "1-2 nights",
      bestFor: ["Gardens", "Craft", "Seafood"],
      summary: "A polished optional add-on for gardens, samurai streets, tea districts, museums, and excellent seafood.",
      access: "From Tokyo, take the Hokuriku Shinkansen to Kanazawa in about 2.5 hours. From Osaka or Kyoto, take the Thunderbird Limited Express to Tsuruga, then transfer to the Hokuriku Shinkansen; total travel time is about 2 hours.",
      bestTime: "Spring and autumn suit gardens and walking. Winter can be atmospheric for seafood and snowy gardens, but pack for cold rain or snow.",
      walkTitle: "Castle, Kenrokuen, and old districts cluster",
      walkNote: "Kanazawa's core sights are close enough for a slow walking day, with buses useful for returning to the station.",
      center: [36.5656, 136.6620],
      attractions: [
        { name: "Kenrokuen Garden", coords: [36.5621, 136.6625], detail: "One of Japan's best-known landscape gardens." },
        { name: "Kanazawa Castle Park", coords: [36.5650, 136.6598], detail: "Large castle grounds opposite Kenrokuen." },
        { name: "21st Century Museum", coords: [36.5610, 136.6582], detail: "Modern art stop in the main sightseeing cluster." },
        { name: "Nagamachi Samurai District", coords: [36.5632, 136.6506], detail: "Canals, earthen walls, and samurai-house atmosphere." },
        { name: "Higashi Chaya District", coords: [36.5720, 136.6669], detail: "Preserved teahouse streets and gold-leaf shops." },
      ],
      nearby: ["Shirakawa-go by bus", "Toyama as a rail stop", "Noto Peninsula only if the route and recovery conditions make sense", "Kaga onsen towns"],
    },
  ],
  itinerary: [
    {
      day: "Days 1-2",
      title: "Fly Australia to Tokyo",
      description: "Arrive, clear immigration, collect data SIM or eSIM setup, and keep the first evening simple.",
      tags: ["Flight", "Arrival", "Jet lag buffer"],
    },
    {
      day: "Days 3-6",
      title: "Tokyo base",
      description: "Group days by area: west-side city energy, east-side old Tokyo, one flexible shopping or museum day, and one possible day trip.",
      tags: ["Tokyo", "Food", "Neighbourhoods"],
    },
    {
      day: "Days 7-8",
      title: "Hakone or Fuji reset",
      description: "Travel light if possible, stay somewhere calm, and use this section as a slower midpoint.",
      tags: ["Onsen", "Rail", "Views"],
    },
    {
      day: "Days 9-12",
      title: "Kyoto and nearby day trips",
      description: "Start early for the famous areas, keep evenings for food streets and river walks, and add Nara or Uji if pacing feels right.",
      tags: ["Kyoto", "Culture", "Walking"],
    },
    {
      day: "Days 13-15",
      title: "Osaka finale",
      description: "Food-first final stop with easier luggage logistics. Depart from Kansai Airport or return to Tokyo by shinkansen if flights work better.",
      tags: ["Osaka", "Departure", "Kansai"],
    },
  ],
  transport: [
    "Compare open-jaw flights into Tokyo and out of Osaka/Kansai against return flights from one city.",
    "Use IC cards for local transport where supported, plus individual rail tickets for longer intercity legs.",
    "Price a Japan Rail Pass only after the route is final; it is not automatically the best value for a simple Tokyo-Kyoto-Osaka route.",
    "Book airport transfers and luggage forwarding around hotel changes if bags become annoying.",
  ],
  budget: [
    "Flights from Australia",
    "Accommodation by city and night count",
    "Intercity rail and local transport",
    "Food, coffee, snacks, and convenience stores",
    "Tickets, tours, museums, and experiences",
    "Shopping buffer and emergency buffer",
  ],
  checklist: [
    "Choose travel month and total nights",
    "Decide whether to arrive Tokyo and depart Osaka",
    "Shortlist neighbourhoods for each city",
    "Check passport validity and visa rules for Australian travellers before booking",
    "Pick phone data option: eSIM, roaming, or physical SIM",
    "Create a shared calendar once dates are locked",
  ],
};

document.getElementById("trip-window").textContent = trip.window;
document.getElementById("trip-start").textContent = trip.start;
document.getElementById("trip-route").textContent = trip.route;
document.getElementById("trip-style").textContent = trip.style;

const destinationGrid = document.getElementById("destination-grid");
const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

destinationGrid.innerHTML = trip.destinations.map((destination) => `
  <article class="destination-card destination-detail">
    <div class="destination-main">
      <div>
        <h3>${destination.name}</h3>
        <div class="meta">
          <span class="pill">${destination.days}</span>
          ${destination.bestFor.map((item) => `<span class="pill">${item}</span>`).join("")}
        </div>
      </div>
      <p>${destination.summary}</p>
      <div class="destination-facts">
        <section>
          <h4>How to get there</h4>
          <p>${destination.access}</p>
        </section>
        <section>
          <h4>Best time to visit</h4>
          <p>${destination.bestTime}</p>
        </section>
      </div>
      <section>
        <h4>Nearby attractions and useful details</h4>
        <ul class="attraction-list">
          ${destination.attractions.map((attraction) => `<li><strong>${attraction.name}</strong><span>${attraction.detail}</span></li>`).join("")}
        </ul>
      </section>
      <section>
        <h4>Good add-ons nearby</h4>
        <div class="nearby-list">
          ${destination.nearby.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>
    </div>
    <div class="destination-map-panel">
      <h4>${destination.walkTitle}</h4>
      <p>${destination.walkNote}</p>
      <div id="destination-map-${slugify(destination.name)}" class="mini-map" aria-label="Walkable attractions map for ${destination.name}"></div>
    </div>
  </article>
`).join("");

const itineraryList = document.getElementById("itinerary-list");
itineraryList.innerHTML = trip.itinerary.map((item) => `
  <article class="timeline-item">
    <span class="day-label">${item.day}</span>
    <div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="timeline-tags">
        ${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
      </div>
    </div>
  </article>
`).join("");

document.getElementById("transport-list").innerHTML = trip.transport.map((item) => `<li>${item}</li>`).join("");
document.getElementById("budget-list").innerHTML = trip.budget.map((item) => `<li>${item}</li>`).join("");
document.getElementById("checklist").innerHTML = trip.checklist.map((item) => `<li>${item}</li>`).join("");

const routeList = document.getElementById("route-list");
routeList.innerHTML = trip.stops.map((stop) => `<li><strong>${stop.name}</strong><span>${stop.note}</span></li>`).join("");

const map = L.map("map", {
  scrollWheelZoom: false,
});

const baseTileLayer = (targetMap) => {
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(targetMap);
};

baseTileLayer(map);

const routeCoords = trip.stops.map((stop) => stop.coords);
const australiaToJapan = [trip.stops[0].coords, trip.stops[1].coords];
const japanRail = trip.stops.slice(1).map((stop) => stop.coords);

L.polyline(australiaToJapan, {
  color: "#b83535",
  weight: 3,
  dashArray: "8 10",
}).addTo(map);

L.polyline(japanRail, {
  color: "#245044",
  weight: 4,
}).addTo(map);

trip.stops.forEach((stop, index) => {
  L.circleMarker(stop.coords, {
    radius: index === 0 ? 7 : 9,
    fillColor: index === 0 ? "#c08a2d" : "#b83535",
    color: "#ffffff",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.95,
  })
    .addTo(map)
    .bindPopup(`<strong>${stop.name}</strong><br>${stop.note}`);
});

map.fitBounds(L.latLngBounds(routeCoords), {
  padding: [28, 28],
});

const destinationMaps = trip.destinations.map((destination) => {
  const destinationMap = L.map(`destination-map-${slugify(destination.name)}`, {
    attributionControl: false,
    dragging: true,
    scrollWheelZoom: false,
    zoomControl: false,
  });
  baseTileLayer(destinationMap);

  const attractionCoords = destination.attractions.map((attraction) => attraction.coords);
  const bounds = L.latLngBounds(attractionCoords);

  destination.attractions.forEach((attraction) => {
    L.circleMarker(attraction.coords, {
      radius: 7,
      fillColor: "#b83535",
      color: "#ffffff",
      weight: 2,
      fillOpacity: 0.95,
    })
      .addTo(destinationMap)
      .bindPopup(`<strong>${attraction.name}</strong><br>${attraction.detail}`);
  });

  L.polyline(attractionCoords, {
    color: "#245044",
    weight: 3,
    opacity: 0.72,
    dashArray: "5 8",
  }).addTo(destinationMap);

  destinationMap.fitBounds(bounds, {
    padding: [22, 22],
    maxZoom: 15,
  });

  return { map: destinationMap, bounds };
});

const refreshMapLayout = () => {
  map.invalidateSize();
  map.fitBounds(L.latLngBounds(routeCoords), {
    padding: [28, 28],
  });
  destinationMaps.forEach(({ map: destinationMap, bounds }) => {
    destinationMap.invalidateSize();
    destinationMap.fitBounds(bounds, {
      padding: [22, 22],
      maxZoom: 15,
    });
  });
};

requestAnimationFrame(refreshMapLayout);
window.addEventListener("load", refreshMapLayout);
window.addEventListener("resize", refreshMapLayout);
window.addEventListener("hashchange", () => {
  requestAnimationFrame(refreshMapLayout);
});
