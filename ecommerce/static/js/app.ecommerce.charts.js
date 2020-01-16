var app = angular.module("charts", ["chart.js"]).
    controller("myctrl", function ($scope) {

        // Pie Chart Goes here///
        $scope.labels = ["Appliance", "Computer", "Automatic" ,"Electronics"];
        $scope.rowData = [123, 789, 456 ,556];

        // Line ////////////////////////
        $scope.labelsLine = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.seriesLine = ['Series A'];
        $scope.dataLine =[65, 59, 80, 81, 56, 55, 40];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
          };
          $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
          $scope.options = {
            scales: {
              yAxes: [
                {
                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  position: 'left'
                },
                {
                  id: 'y-axis-2',
                  type: 'linear',
                  display: true,
                  position: 'right'
                }
              ]
            }
          };


        $scope.data = {
            status: [{ name: "Backorderd", pk: 1 },
            { name: "Reordered", pk: 2 },
            { name: "progress", pk: 3 },
            { name: "recieving", pk: 4 },
            ],
            tableData: [{ name: "john", date: "April/07/20", status: "Delivered" },
            { name: "john", date: "May/20/20", status: "Delivered" },
            { name: "john", date: "June/20/20", status: "Delivered" },
            { name: "john", date: "July/20/20", status: "Delivered" },
            { name: "john", date: "Aug/20/20", status: "Delivered" },
            { name: "john", date: "Sept/20/20", status: "Delivered" },
            { name: "john", date: "Oct/20/20", status: "Delivered" },
            { name: "john", date: "Nov/20/20", status: "Delivered" },
            ],
            tableData2: [{ ship: 106, shipments: 20, PQ: 198, LateShip: 12 }],
            inventory: [{ category: "Electronics", product: "Sony Experia", ship: 2345678, inStock: 34 },
            { category: "Electronics", product: "LG42 PQWER", ship: 2345678, inStock: 1234 },
            { category: "Electronics", product: "Samsung EER",ship : 2345465678, inStock: 1 },
            { category: "Electronics", product: "Sharp ", ship: 2343545678, inStock: 34 },
            { category: "Electronics", product: "Apple Ipad Classic 320GB", ship: 23435435678, inStock: "N/A" },
            ],
            kpi:[{market:"inventory" , monthcurrent:"523456.1312" , monthPast:"$1234" , change: "10%", },
            {market:"inventory" , monthcurrent:"523456.1312" , monthPast:"$1234" , change: "10%" ,  },
            {market:"inventory" , monthcurrent:"523456.1312" , monthPast:"$1234" , change: "10%", },
            {market:"inventory" , monthcurrent:"523456.1312" , monthPast:"$1234" , change: "10%" , },
            {market:"inventory" , monthcurrent:"523456.1312" , monthPast:"$1234" , change: "10%" , }]
        }
    })
//   Outside COntroller
var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["NA", "EU", "Asia", "SA"],
    datasets: [{
        label: "Cash to Cash LC",
        backgroundColor: "blue",
        data: [20, 5, 17, 16]
    },
    {
        label: "AVG Rem Days",
        backgroundColor: "green",
        data: [18, 18, 20, 18]
    }, {
        label: "Unseen Date",
        backgroundColor: "orange",
        data: [20, 22, 18, 19]
    }, {
        label: "Last",
        backgroundColor: "red",
        data: [42, 38, 25, 20]
    }]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            yAxes: [{
              gridLines: {
                drawBorder: false,
              },
            }]
          },
        omitXLabels: true,
        legend: {
            display: false
        },
        barValueSpacing: 20,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}
);