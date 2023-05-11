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
      label: 'Usuarios Registrados por Mes',
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
      label: 'Usuarios Registrados por Año',
      backgroundColor: ['#acd0e8', '#acd0e8', '#acd0e8', '#acd0e8'],
      data: [50, 60, 30, 81, 0],
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
    labels: ['<18', '18-25', '26-30', '31<'],
    datasets: [{
      label: 'Numero Usuarios por Edad',
      data: [40, 71, 80, 30, 0],
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

new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ['Sí', 'No', 'Primer Pedido'],
    datasets: [{
      label: 'Porcentaje Usuarios que han Comprado',
      data: [60,10,30, 0],
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

new Chart(ctx5, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
      label: 'Numero de PQRSs por Mes',
      data: [12, 19, 3, 5, 2, 0],
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

new Chart(ctx6, {
  type: 'bar',
  data: {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Numero de PQRSs por Año',
      data: [30, 18, 10, 41, 0],
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