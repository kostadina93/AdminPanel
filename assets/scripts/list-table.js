$(document).ready(function(){
    var snd = new Audio("assets/sounds/blip.wav");
    var curr_ID;
    var last_ID;
    function createTable() {
        $.getJSON('https://api.myjson.com/bins/112ptx', function(jsonData){
            last_ID = jsonData.logs[0].id;

            var myTable = "<table><thead><tr><th>ID</th>";
            myTable+= "<th>USER ID</th>";
            myTable+= "<th>LOG</th>";
            myTable+= "<th>METHOD</th>";
            myTable+= "<th>ERROR CATEGORY</th>";
            myTable+= "<th>USER IP</th>";
            myTable+= "<th>BROWSER NAME</th>";
            myTable+= "<th>DATE</th></tr></thead>";
            /*Get table rows*/
            var tbl_rows = jsonData.logs.length;
            for (var i = 0; i < tbl_rows; i++) {
                var result = jsonData.logs[i];
                myTable+= "<tbody><tr><td id='id' class='id'>" + result.id + "</td>";
                myTable+= "<td id='user_id' class='user_id'>" + result.user_id + "</td>";
                myTable+= "<td id='log' class='log'>" + result.log + "</td>";
                myTable+= "<td id='method' class='method'>" + result.Method + "</td>";
                myTable+= "<td id='http_error' class='http_error'>" + result.http_error + "</td>";
                myTable+= "<td id='user_ip' class='user_ip'>" + result.user_ip + "</td>";
                myTable+= "<td id='browser_name' class='browser_name'>" + result.browser_name + "</td>";
                myTable+= "<td id='pdate' class='pdate'>" + result.pdate + "</td></tr></tbody>";
            }
            myTable+= "</table>";
            document.getElementById('tblPrint').innerHTML = myTable;
            $('.loader').hide();
            $('#btnSubmit').show();

            // $('table tr').eq(0).css('background-color', '#EB9532');

            $('#tblPrint').paginate({ limit: 5});
        });
    }
    createTable();
    console.log(last_ID);

    window.setInterval(function() {
        $.getJSON('https://api.myjson.com/bins/112ptx', function(jsonData){
            curr_ID = jsonData.logs[0].id;
            if (curr_ID > last_ID) {
                snd.play();
                $('.page-navigation').css('display', 'none');
                createTable();
            }
        });
    }, 600000);
    $('table tr').hover(function() {
       $(this).css('background-color', 'red');
    });
});