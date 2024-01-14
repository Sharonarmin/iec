<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Path to your autoloader0

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject=$_POST['subject'];
    $message = $_POST['message'];

    // Create a PHPMailer instance
    $mail = new PHPMailer(true);

    try {

        $mail->isSMTP();
        $mail->Host = 'mail.iecuae.ae';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@iecuae.ae'; // Your Gmail address
        $mail->Password = 'Shameer##12'; // Your Gmail password or app password
        $mail->SMTPSecure = 'TLS'; // Use 'tls' or 'ssl'
        $mail->Port = 465; // Use 465 for SSL, 587 for TLS


        // Sender and recipient settings
        $mail->setFrom($email, $name);
        $mail->addAddress('projectnonu@gmail.com', 'Project Nonu');

        $mail->isHTML(true); 
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "Name: $name<br>Email: $email<br>Subject: $subject  <br>Message: $message";

        // Send email
        $mail->send();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request";
}
?>