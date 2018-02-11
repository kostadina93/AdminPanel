google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// $(document).ready(function(){
    // $.getJSON('https://www.service-lab.gr/ts_production/api/logs/Latest', function(jsonData){
    //     var temp = jsonData.logs[0].id;
    //     var total_errors;
    //     if (temp > jsonData.logs[1].id){
    //         total_errors = temp;
    //     } else {
    //         total_errors = jsonData.log[1].id;
    //     }

    //     var errors_left = jsonData.logs.length;
    //     var solved = total - errors_left;

function drawChart() {
    $(document).ready(function(){
        $.getJSON('https://api.myjson.com/bins/112ptx', function(jsonData){
            
            var total_errors = jsonData.logs[0].total;
            var errors_left = jsonData.logs.length;
            var solved = total_errors - errors_left;

            var data = google.visualization.arrayToDataTable([
                ['Task', 'Errors'],
                ['Solved Errors', solved],
                ['Errors Remaining', errors_left]
            ]);

            var options = {'title':'Total Errors: ' + total_errors, 'width':1000, 'height':600};

            var chart = new google.visualization.PieChart(document.getElementById('chart'));
            chart.draw(data, options);

            $('.loader').hide();
        });
    });
}

        
    // });
// });