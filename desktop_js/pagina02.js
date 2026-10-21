document.addEventListener('DOMContentLoaded', () => {
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#94A3B8', font: { size: 11 } }
      },
      y: {
        display: false,
        beginAtZero: true
      }
    }
  };

  const labels = ['Juazeiro do Norte', 'Barbalha', 'Crato', 'Missão Velha'];

  // Gráfico DEC
  const canvasDec = document.getElementById('decChart');
  if (canvasDec) {
    new Chart(canvasDec.getContext('2d'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Meta ENEL',
            data: [7, 7, 7, 7],
            backgroundColor: 'rgba(46, 180, 175, 0.2)',
            borderColor: '#2EB4AF',
            borderWidth: 2,
            borderRadius: 4,
            barPercentage: 0.5,
            categoryPercentage: 0.6
          },
          {
            label: 'Atual',
            data: [5, 8, 12, 11],
            backgroundColor: '#F59E0B',
            borderRadius: 4,
            barPercentage: 0.5,
            categoryPercentage: 0.6
          }
        ]
      },
      options: commonOptions
    });
  }

  // Gráfico FEC
  const canvasFec = document.getElementById('fecChart');
  if (canvasFec) {
    new Chart(canvasFec.getContext('2d'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Meta ENEL',
            data: [6, 6, 6, 6],
            backgroundColor: 'rgba(46, 180, 175, 0.2)',
            borderColor: '#2EB4AF',
            borderWidth: 2,
            borderRadius: 4,
            barPercentage: 0.5,
            categoryPercentage: 0.6
          },
          {
            label: 'Atual',
            data: [4, 7, 11, 10],
            backgroundColor: '#F59E0B',
            borderRadius: 4,
            barPercentage: 0.5,
            categoryPercentage: 0.6
          }
        ]
      },
      options: commonOptions
    });
  }
});