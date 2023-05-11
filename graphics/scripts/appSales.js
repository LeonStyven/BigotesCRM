const ctx1 = document.getElementById('myChart-1');
const ctx2 = document.getElementById('myChart-2');
const ctx3 = document.getElementById('myChart-3');
const ctx4 = document.getElementById('myChart-4');
const ctx5 = document.getElementById('myChart-5');
const ctx6 = document.getElementById('myChart-6');

new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
      label: 'Ventas Totales al Mes',
      data: [12, 19, 20, 10, 25, 0],
      backgroundColor: ['#acd0e8', '#acd0e8', '#acd0e8', '#acd0e8', '#acd0e8'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Ventas Totales al Año',
      data: [100, 160, 170, 50, 0],
      backgroundColor: ['#acd0e8', '#acd0e8', '#acd0e8', '#acd0e8'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['Atrapasueños Mediano', 'Llavero Mandala', 'Llavero Atrapasueños Verde'],
    datasets: [{
      label: 'Productos más Vendidos',
      data: [80,71,70, 0],
      backgroundColor: ['#acd0e8', '#acd0e8', '#acd0e8'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: ['Llavero de Mascotras', 'Llavero Mandala', 'Atrapasueños Mediano', 'Llavero Rústico', 'Llavero Multicolor', 'Llavero Atrapasueños Verde', 'Llavero Atrapasueños Negro'],
      datasets: [{
        label: 'Ventas por Producto',
        data: [40, 71, 80, 30, 50, 70, 10, 0],
        backgroundColor: ['#acd0e8', '#acd0e8', '#acd0e8', '#acd0e8', '#acd0e8', '#acd0e8', '#acd0e8'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
