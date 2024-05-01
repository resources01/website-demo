<?php
var_dump($_POST); die;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    // $message = $_POST['message'];
    
    // Thiết lập địa chỉ email của bạn và thông tin khác
    $from = "your_email@example.com";
    $headers = "From:" . $from;
    
    // Gửi email
    if (mail($to, $name, $phone, $headers)) {
        echo "Email đã được gửi thành công.";
    } else {
        echo "Có lỗi xảy ra khi gửi email.";
    }
}
?>