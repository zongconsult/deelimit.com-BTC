Thanks, <?php
@extract($_POST);
$sub="Form feedback";
$name = stripslashes($name);
$email = stripslashes($email);
mail('admin@your-domain.com',$sub,"$name $email","From: $name <deelimitgh@gmail.com>");
echo stripslashes($name);
?> , we will be with you shortly.