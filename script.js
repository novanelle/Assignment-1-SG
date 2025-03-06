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
      scales: {
        y: {
          beginAtZero: true,
          stacked: true
        },
        x: {
          stacked: true
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
        data: [68, 1, 2, 5, 4, 7, 1, 17, 156,],
        backgroundColor: [
          'rgb(223, 64, 64)',
          'pink',
          'olive',
          'orange',
          'dark green',
          'white',
          'black',
          'purple',
          'blue',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio: true,
      cutoutPercentage: 65,
    }
  });
});