document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Successful Launches',
          data: [22, 19, 22, 19, 26, 17, 13, 21, 23, 19, 30, 30],
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          borderWidth: 1
        },
        {
          label: 'Failed Launches',
          data: [0, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0, 2],
          backgroundColor: 'red',
          borderColor: 'lightblue',
          borderWidth: 1
        },
        {
          label: 'Partially Failed Launches',
          data: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
          backgroundColor: 'orange',
          borderColor: 'lightblue',
          borderWidth: 1
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'black' // Change legend text color
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          stacked: true,
          ticks: {
            color: 'black' // Change y-axis label color
          }
        },
        x: {
          stacked: true,
          ticks: {
            color: 'black' // Change x-axis label color
          }
        }
      }
    }
  });

  var ctx2 = document.getElementById('myChart2').getContext('2d');
  var myChart2 = new Chart(ctx2, {
    type: "pie",
    data: {
      labels: ["China", "France", "Italy", "India", "Iran", "Japan", "North Korea", "Russia", "United States"],
      datasets: [{
        data: [68, 1, 2, 5, 4, 7, 1, 17, 156],
        backgroundColor: [
          'rgb(223, 64, 64)',
          'pink',
          'green',
          'orange',
          'dark green',
          'white',
          'black',
          'purple',
          'blue'
        ],
        borderColor: [
          'rgb(255, 230, 230)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'black' // Change legend text color
          }
        }
      },
      maintainAspectRatio: true,
      cutoutPercentage: 65
    }
  });
});