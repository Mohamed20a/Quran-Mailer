<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>تواصل معنا</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/7221/7221950.png" />

    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://www.fontstatic.com/f=reem-kufi,hala,strick,geeza-pro-bold,reem-kufi,sara" />
    <link rel="stylesheet" href="../css/page.css">
    <!-- <link rel="stylesheet" href="./css/22.css"> -->
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
            
            <a href="./connect.php" class="active">تواصل معنا</a>
            
            <a href="./subscribe.php">الاشتراك</a>
        </nav>
    </header>

<section class="subscribe-section">
        <h1>
            تواصل معنا
        </h1>
        <p>
        نتطلع إلى التواصل معكم عبر النموذج التالي؛ فلا تترددوا في مشاركة أي أفكار أو ملاحظات تتعلق بهذا الموقع الإلكتروني.
        </p>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <div class="input-container">
                <div class="input">
                    <input type="name" name="name" required="" autocomplete="off">
                    <label for="name"><i class="fa-solid fa-user" style="margin-right: 8px;"></i> الأسم كامل</label><br>
                    <div class="underline"></div>
                </div>
        
                <div class="input">
                    <input type="email" name="email" required="" autocomplete="off">
                    <label for="email"><i class="fa-solid fa-envelope" style="margin-right: 8px;"></i> البريد الألكتروني</label><br>
                    <div class="underline"></div>
                </div>
        
                <div class="input">
                    <textarea name="message" required="" id="message" maxlength="350"></textarea>
                    <label for="message"><i class="fa-solid fa-message" style="margin-right: 8px;"></i> رسالتك </label>
                    <p class="warn" style="display: none;">* تحتوي الرسالة على 500 حرفًا فقط </p><br>
                    <div class="underline2"></div>
                </div>
            </div>
            <button class="subscribe-btn" type="submit" name="submit">
                إرسال <i id="send" class="fa-solid fa-paper-plane icon"></i>
            </button>
        </form> 
    </section>

<script>

</script>

<script src="../js/script.js"></script>
</body>
</html>
