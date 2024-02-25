<?php
// Connect to your MySQL database
$mysqli = new mysqli("localhost", "root", "root", "hotel_management");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Query database to fetch analytics data
$query = "SELECT FROM request_status";
$result = $mysqli->query($query);

$data = array();
if ($result->num_rows > 0) {
    // Fetch data and store it in an associative array
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            
            "ip_address" => $row["ip_address"],
            "status" => $row["status"]
        );
    }
}

// Close database connection
$mysqli->close();

// Output data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
