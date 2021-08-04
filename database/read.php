<?php
// required headers
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
include_once './database.php';
include_once './product.php';


function readproduct():string {

    // instantiate database and product object
    $database = new Database();
    $db = $database->getConnection();
    // initialize object
    $product = new Product($db);

    // query products
    $stmt = $product->read();
    
    // check if more than 0 record found
    if($stmt->rowCount() > 0){

        // products array
        $products_arr=array();
        $products_arr["records"]=array();
    
        // retrieve our table contents
        // fetch() is faster than fetchAll()
        // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            // extract row
            // this will make $row['name'] to
            // just $name only
            extract($row);
    
            $product_item=array(
                "ID" => $ID,
                "name" => $name,
                "message" => html_entity_decode($message),
                "email" => $email,
                "age" => $age,
                "gender" => $gender
            );
    
            array_push($products_arr["records"], $product_item);
        }

        // set response code - 200 OK       
        $products_arr["status"] = 200;
        http_response_code(200);
        // show products data in json format
        return json_encode($products_arr);

    } else {
        http_response_code(404);
        // tell the user no products found
        return json_encode(array("message" => "No products found.",
                                 "status" => 404));
    }
}