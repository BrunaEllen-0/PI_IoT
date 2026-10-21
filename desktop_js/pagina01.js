document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializa o mapa no Cariri
  const map = L.map('map').setView([-7.2300, -39.3000], 10);

  // 2. Provedor de Mapa alternativo seguro (CartoDB via HTTPS direto)
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 19,
    subdomains: 'abcd',
    attribution: '&copy; OpenStreetMap &copy; CARTO'
  }).addTo(map);

  // 3. Marcadores
  const activeIcon = L.divIcon({ className: 'custom-marker marker-active', iconSize: [14, 14] });
  const resolvedIcon = L.divIcon({ className: 'custom-marker marker-resolved', iconSize: [14, 14] });

  const pontos = [
    { cidade: "Juazeiro do Norte", lat: -7.2131, lng: -39.3152, status: "ativa" },
    { cidade: "Barbalha", lat: -7.3117, lng: -39.3039, status: "ativa" },
    { cidade: "Crato", lat: -7.2341, lng: -39.4086, status: "resolvida" }
  ];

  pontos.forEach(p => {
    const icon = p.status === 'ativa' ? activeIcon : resolvedIcon;
    L.marker([p.lat, p.lng], { icon }).addTo(map);
  });
}); 