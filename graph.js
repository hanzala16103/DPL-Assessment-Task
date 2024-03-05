document.addEventListener("DOMContentLoaded", function () {
  const cha = document.getElementById("myChart").getContext("2d");

  const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const data = {
    labels,
    datasets: [
      {
        label: "Debit",
        data: [5, 49, 44, 24, 15, 34, 40],
        backgroundColor: "rgb(26,22,243)",
        borderColor: "rgb(26,22,243)",
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: "Credit",
        data: [30, 25, 20, 10, 5, 20, 30],
        backgroundColor: "rgb(252,170,11)",
        borderColor: "rgb(252,170,11)",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      scales: {
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
    },
  };

  new Chart(cha, config);
});

document.addEventListener("DOMContentLoaded", function () {
  const xValues = [2016, 2017, 2018, 2019, 2020, 2021];

  new Chart("myChart2", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          data: [1900, 17000, 25000, 5000, 40000],
          borderColor: "rgb(22,219,204)",
          fill: false,
          pointRadius: 0,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            borderDash: [8, 4],
          },
          ticks: {
            stepSize: 10000,
            callback: function (value, index, values) {
              return "$" + value.toLocaleString();
            },
          },
        },
      },
    },
  });
});
