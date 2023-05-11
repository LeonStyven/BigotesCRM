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
      label: 'Conexiones por Mes',
      data: [12, 19, 20, 5, 25, 0],
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
      label: 'Conexiones por Año',
      data: [50, 60, 30, 81, 0],
      backgroundColor: ['#4a9f8f', '#4a9f8f', '#4a9f8f', '#4a9f8f'],
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
    labels: ['<5 min', '5-10 min', '10-15 min', '15-20 min', '>20 min'],
    datasets: [{
      label: 'Tiempo de Conexión',
      data: [20, 40, 71, 80, 30, 0],
      backgroundColor: ['#b3e099', '#b3e099', '#b3e099', '#b3e099', '#b3e099'],
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
    labels: ['Atrapaueños', 'Llavero'],
    datasets: [{
      label: 'Visitas por Categoria',
      data: [60,30, 0],
      backgroundColor: ['#ffeaad', '#ffeaad'],
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

