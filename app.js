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
      ideas: ["Shinjuku or Shibuya evening", "Asakusa and Ueno", "TeamLab or museum day", "Kamakura, Nikko, or Yokohama day trip"],
    },
    {
      name: "Hakone / Fuji area",
      days: "1-2 nights",
      bestFor: ["Onsen", "Views", "Slower pace"],
      summary: "A compact break between the biggest city stops. Weather matters for Fuji views, so keep expectations flexible.",
      ideas: ["Ryokan night", "Lake Ashi loop", "Open-air museum", "Private onsen room option"],
    },
    {
      name: "Kyoto",
      days: "3-5 nights",
      bestFor: ["Culture", "Walking", "Temples"],
      summary: "Kyoto rewards early starts and grouped neighbourhood days. Avoid crossing the city too many times in one day.",
      ideas: ["Higashiyama walk", "Arashiyama morning", "Nishiki Market", "Nara or Uji day trip"],
    },
    {
      name: "Osaka",
      days: "2-3 nights",
      bestFor: ["Food", "Nightlife", "Kansai base"],
      summary: "A relaxed final city with excellent food and airport access. It can also work as a base for Hiroshima or Himeji.",
      ideas: ["Dotonbori", "Kuromon Market", "Shinsekai", "Universal Studios Japan if wanted"],
    },
    {
      name: "Nara",
      days: "Day trip",
      bestFor: ["History", "Parks", "Easy rail"],
      summary: "A straightforward day from Kyoto or Osaka with major temples and a walkable park area.",
      ideas: ["Todai-ji", "Nara Park", "Kasuga Taisha", "Return for dinner in Osaka or Kyoto"],
    },
    {
      name: "Hiroshima / Miyajima",
      days: "1-2 nights or long day",
      bestFor: ["History", "Scenery", "Extension"],
      summary: "A strong optional extension if the trip has enough days. Best added after Kyoto or Osaka.",
      ideas: ["Peace Memorial Park", "Okonomiyaki", "Miyajima ferry", "Overnight if schedule allows"],
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
destinationGrid.innerHTML = trip.destinations.map((destination) => `
  <article class="destination-card">
    <h3>${destination.name}</h3>
    <div class="meta">
      <span class="pill">${destination.days}</span>
      ${destination.bestFor.map((item) => `<span class="pill">${item}</span>`).join("")}
    </div>
    <p>${destination.summary}</p>
    <ul>
      ${destination.ideas.map((idea) => `<li>${idea}</li>`).join("")}
    </ul>
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

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

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

const refreshMapLayout = () => {
  map.invalidateSize();
  map.fitBounds(L.latLngBounds(routeCoords), {
    padding: [28, 28],
  });
};

requestAnimationFrame(refreshMapLayout);
window.addEventListener("load", refreshMapLayout);
window.addEventListener("resize", refreshMapLayout);
window.addEventListener("hashchange", () => {
  requestAnimationFrame(refreshMapLayout);
});
