<?php

	
	header("Access-Control-Allow-Headers: Content-Type");
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Origin: *");
	header('Content-Type: application/json');
	

	require ("./libs/PHPMailer/Exception.php");
	//require ("./libs/PHPMailer/OAuth.php");
	//require ("./libs/PHPMailer/OAuthTokenProvider.php");
	require ("./libs/PHPMailer/PHPMailer.php");
	require ("./libs/PHPMailer/POP3.php");
	require ("./libs/PHPMailer/SMTP.php");

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	
	

	$mail = new PHPMailer(true);

	try {
		//Server settings
		//$mail->SMTPDebug = 0;  // Defina como 0 para desativar a saída de depuração
		$mail->CharSet = "utf-8"; 
		$mail->isSMTP();                                            //Send using SMTP
		$mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
		$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
		$mail->Username   = 'hello@amanidev.com';                     //SMTP username
		$mail->Password   = '#030580Hello';                              //SMTP password
		$mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
		$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
	
		//Recipients
		$mail->setFrom('hello@amanidev.com', 'amanidev');
		$mail->addAddress('hello@amanidev.com', 'Client');
		//$mail->addReplyTo('info@example.com', 'Information');
		//$mail->addAddress('ellen@example.com');               
		
		//$mail->addCC('cc@example.com');
		//$mail->addBCC('bcc@example.com');
	
		//Attachments
		//$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
		//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
	
		//Content
		$mail->isHTML(true);                                  //Set email format to HTML
		$mail->Subject = 'Formulário amanidev';
		$mail->Body    = 'Enviado por: ' . $_POST['name'] . ' | ' . $_POST['email'] . '<br><br>' . $_POST['message'];
		$mail->AltBody = 'Enviado por: ' . $_POST['name'] . ' | ' . $_POST['email'] . "\n\n" . $_POST['message'];
	
		$mail->send();
		//Success
	} catch (Exception $e) {
		//Error
	}
?>