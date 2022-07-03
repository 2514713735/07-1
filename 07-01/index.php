<?php
header('Access-Control-Allow-Origin:*');
    $str=[
    "error"=> 0,
    "member_count"=> 20570,
    "member_view_count"=> 36959,
    "order_pay_member_count"=> 5760,
    "un_view_scale"=> "99.66%"
];
echo json_encode($str);
  ?>