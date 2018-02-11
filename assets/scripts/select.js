$(document).ready(function(){
    $.getJSON('https://api.myjson.com/bins/112ptx', function(jsonData){
        var myTable = "<table><thead><tr><th>SELECT</th>";
        myTable+= "<th>ID</th>";
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
            var counter = jsonData.logs[i];
            myTable+= "<tbody><tr class='row-select'><td id='select' class='select'><input type='checkbox'/></td>";
            myTable+= "<td id='id' class='id'>" + counter.id + "</td>";
            myTable+= "<td id='user_id' class='user_id'>" + counter.user_id + "</td>";
            myTable+= "<td id='log' class='log'>" + counter.log + "</td>";
            myTable+= "<td id='method' class='method'>" + counter.Method + "</td>";
            myTable+= "<td id='http_error' class='http_error'>" + counter.http_error + "</td>";
            myTable+= "<td id='user_ip' class='user_ip'>" + counter.user_ip + "</td>";
            myTable+= "<td id='browser_name' class='browser_name'>" + counter.browser_name + "</td>";
            myTable+= "<td id='pdate' class='pdate'>" + counter.pdate + "</td></tr></tbody>";
        }
        myTable+= "</table>";
        document.getElementById('tblPrint').innerHTML = myTable;
        $('.loader').hide();
        $('#btnSubmit').show();

        $('#tblPrint').paginate({ limit: 5});
    });

    window.setInterval(function() {
        $.getJSON('https://api.myjson.com/bins/112ptx', function(jsonData){
            curr_ID = jsonData.logs[0].id;
            if (curr_ID > last_ID) {
                snd.play();
                $('.page-navigation').css('display', 'none');
                createTable();
            }
        });
    }, 150000);
    

    var id = [];
    var i=0;
    /*Select Multiple Rows*/
    $('#btnSubmit').click(function(){
        $('.row-select input:checked').each(function(){
            id[i] = $(this).closest('tr').find('.id').html();
            i++;
        });

        if (id.length > 0){
            var myJson = JSON.stringify(id);

            var result = confirm("You checked the following IDs: \n" + myJson);
            if (result == true){
                var result = confirm("Are you sure you want to continue?");

                if (result == true){
                    var xhr = new XMLHttpRequest();
                    var url = "https://www.example.gr/api/logs/fixbugs";
                    xhr.open("POST", url, true);
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === 4 && xhr.status === 200){
                            var json = JSON.parse(xhr.responseText);
                            console.log(json);
                        }
                    };
                    xhr.send(myJson);
                    location.reload(true);
                }
            } else {
                location.reload(true);
            }
        }else{
            alert("You have to choose at least one error in order to submit it!");
        }
    });
});