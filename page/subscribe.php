<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
	<title>الأشتراك</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/7221/7221950.png" />

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css">
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="https://www.fontstatic.com/f=reem-kufi,hala,strick,rabat,geeza-pro-bold,motairah" />
	<link rel="stylesheet" href="../css/page.css">
    <script src="https://www.google.com/recaptcha/api.js?hl=ar" async defer></script>
    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
</head>
<body>


<header class="navbar">
    <h3>
        <a href="../index.php">
            <img src="../photo/logoo.jpg" style="width: 8.4em;">
            <!-- Quran Mailer -->
        </a>
    </h3>
    <nav>
        <a href="../index.php"> الرئيسية</a>
        <a href="./connect.php">تواصل معنا</a>
        
        <a href="./subscribe.php" class="active">الاشتراك</a>
    </nav>
</header>


    
<section class="subscribe-section">
    <h1>
        أشترك الأن
    </h1>
    <p>
    أنضم إلى خدمتنا <span > المجانية</span> وأستمتع بتلقي رسالة يومية تحمل لك آية قرآنية معبرة عبر بريدك الإلكتروني (Gmail)
    </p>
    <form method="post" id="demo-form">
        <div class="input-container js-input-container" id="input-div">
            <div class="input">
                <input type="email" name="email" id="input" required="" class="js-email-input">
                <label for="input" class="label"><i class="fa-solid fa-envelope" style="margin-right: 8px;"></i> ادخل البريد الالكترونى</label>
                <div class="underline"></div>
            </div>    
        </div>
        <button id="myButton" class="subscribe-btn g-recaptcha" data-sitekey="Recaptcha" data-callback="onSubmit" type="submit" name="myButton" onclick="refreshPage()">
            أشتراك <i id="ok" class="fa-solid fa-heart-circle-check"></i>
        </button>
    </form>
</section>


<script src="../js/script.js"></script>
<script>

    function onSubmit(token) {
        document.getElementById("demo-form").submit();
    }

    grecaptcha.execute();
</script>
</body>
</html>
