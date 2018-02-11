<html>
<head>
    <title>Admin Panel</title>
    <link rel="stylesheet" type="text/css" href="./assets/styles/main.css"></link>
    <link rel="stylesheet" type="text/css" href="./assets/styles/style.css"></link>
    <script src="./node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/jquery-paginate/jquery-paginate.min.js"></script>
    <script src="node_modules/tether/dist/js/tether.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- <script language="JavaScript" type="text/javascript" src="./assets/scripts/list-table.js"></script> -->
    <script language="JavaScript" type="text/javascript" src="./assets/scripts/select.js"></script>
</head>
<body>

    <div class="header">
        <div class="logo">
            <a href="index.php">
                <img src="assets/images/apricot.png">
                <b>Admin<span>Panel</span></b>
            </a>
        </div>
    </div>

    <div class="container">
        <div class="sidebar">
            <ul class="nav">
                <li><a href="index.php">Error List</a></li>
                <li><a class="selected" href="#">Select Solved</a></li>
                <li><a href="chart.php">Chart</a></li>
            </ul>
        </div>

        <div class="content">
            <div class="loader" id="loader"></div>

            <h1><b>Select Solved Errors</b></h1>
            <br><br>

            <div class="table table-responsive">
                <table id="tblPrint" class="sortable">
                    
                </table>

                <button type="button" id="btnSubmit" class="btn btn-default">Submit</button>
            </div>                
        </div>
    </div>

</body>
</html>