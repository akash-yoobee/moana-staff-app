// From https://www.chartjs.org/docs/latest/

window.onload = function() {
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Customers last week',
            data: [
                      { y: 22 },
                      { y: 32 },
                      { y: 62 },
                      { y: 87 },
                      { y: 33 },
                      { y: 30 },
                      { y: 60 }
                    ],
            lineTension: ['0'],
            backgroundColor: ['rgba(144,202,249, 0.5)'],
            borderColor: ['rgba(25,118,210, 1)'],
            pointBorderWidth: 4,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
// So the chart is loaded after the preloader goes away
  setTimeout(function() {
    chart.render();
  }, 1000);
};
