<?php
// required headers
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
// include_once './core.php';
include_once './database.php';
include_once './product.php';

function search($query) {

    // instantiate database and product object
    $database = new Database();
    // $db = $database->getConnection();
    
    // initialize object
    $product = new Product($database->getConnection());
    
    // get keywords
    // $keywords=isset($_GET["s"]) ? $_GET["s"] : "";
    
    // query products
    $stmt = $product->search($query);
    
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
                "id" => $id,
                "name" => $name,
                "description" => html_entity_decode($description),
                "price" => $price,
                "category_id" => $category_id,
                "category_name" => $category_name
            );
    
            array_push($products_arr["records"], $product_item);
        }
    
        // set response code - 200 OK       
        $product_arr["status"] = 200;
        http_response_code(200);
        // show products data in json format
        return json_encode($products_arr);
    }
    
    else{
        
        // set response code - 404 Not found
        http_response_code(404);
    
        // tell the user no products found
        return json_encode(array("message" => "No products found.",
                                 "status" => 404));
    }
}


?>