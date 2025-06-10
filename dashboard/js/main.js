// === Gráfico de barras ===
const ctx = document.getElementById('barChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [{
      label: 'Ventas',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: '#4285F4'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// === Mapa con Leaflet ===
