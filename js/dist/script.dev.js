"use strict";

var portfolio = {
  Name: ' Mohamed Ahmed Elgeady ',
  Email: ' m16ahmed17@gmail.com ',
  Phone: ' 01065781321 ',
  GitHub: ' https://github.com/Mohamed20a ',
  LinkedIn: ' https://www.linkedin.com/in/mohamed-ahmed-bb358b239/ ',
  portfolio: ' https://portfolioo-1.netlify.app/ ',
  Experience: ' Html, css, Javascript, jQuery, React Js, Bootstrap, PHP, MYSQL '
}; // انتظر حتى يتم تحميل الصفحة بالكامل

document.addEventListener("DOMContentLoaded", function () {
  var successMessage = document.querySelector(".success-message"); // var errorMessage = document.querySelector(".error-message");
  // إضافة الأنماط اللازمة للظهور والاختفاء لرسالة النجاح

  successMessage.classList.add("hide-message"); // قم بإزالة فئة hide-message بعد فترة زمنية محددة لجعل رسالة النجاح تظهر

  setTimeout(function () {
    successMessage.classList.remove("hide-message");
  }, 100); // قم بإضافة الفئة hide-message بعد فترة زمنية محددة لجعل رسالة الخطأ تختفي

  setTimeout(function () {
    errorMessage.classList.add("hide-message");
    setTimeout(function () {
      errorMessage.style.display = "none";
    }, 1000); // تأخير قبل إخفاء رسالة الخطأ بشكل نهائي
  }, 3000);
});
document.addEventListener("DOMContentLoaded", function () {
  var errorMessage = document.querySelector(".error-message"); // إضافة الأنماط اللازمة للظهور والاختفاء لكل من رسالة النجاح ورسالة الخطأ

  errorMessage.classList.add("hide-message"); // قم بإزالة فئة hide-message بعد فترة زمنية محددة لجعل رسالة الخطأ تظهر

  setTimeout(function () {
    errorMessage.classList.remove("hide-message");
  }, 100); // قم بإضافة الفئة hide-message بعد فترة زمنية محددة لجعل رسالة الخطأ تختفي

  setTimeout(function () {
    errorMessage.classList.add("hide-message");
    setTimeout(function () {
      errorMessage.style.display = "none";
    }, 1000); // تأخير قبل إخفاء رسالة الخطأ بشكل نهائي
  }, 3000);
}); //     // Error Message
//     document.addEventListener("DOMContentLoaded", function () {
//     var errorMessage = document.querySelector(".error-message");
//     // var errorMessage = document.querySelector(".error-message");
//     // إضافة الأنماط اللازمة للظهور والاختفاء لكل من رسالة النجاح ورسالة الخطأ
//     errorMessage.classList.add("hide-message");
//     // قم بإزالة فئة hide-message بعد فترة زمنية محددة لجعل رسالة النجاح تظهر
//     setTimeout(function() {
//         errorMessage.classList.remove("hide-message");
//     }, 100);
//     // قم بإضافة الفئة hide-message بعد فترة زمنية محددة لجعل رسالة النجاح تختفي
//     setTimeout(function() {
//         errorMessage.classList.add("hide-message");
//     }, 3000);
// });

document.getElementById("myButton").addEventListener("click", function () {
  var Check = document.getElementById("check");
  var dCheck = document.getElementById("d-check");
  Check.style.display = "none";
  dCheck.style.display = "block";
}); // function refreshPage() {
//     // رابط الصفحة التي ترغب في تحديثها
//     var pageURL = 'http://localhost/phpmailer/welcome.php';
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 document.open();
//                 document.write(xhr.responseText);
//                 document.close();
//             } else {
//                 console.error('حدث خطأ أثناء تحميل الصفحة');
//             }
//         }
//     };
//     xhr.open('POST', pageURL, true);
//     xhr.send();
// }
// window.location.href = "http://localhost/phpmailer/welcome.php";
// window.location.replace("http://localhost/phpmailer/welcome.php");
// document.getElementById("myButton").addEventListener("click", function() {
//     fetch("http://localhost/phpmailer/welcome.php")
//     .then(response => response.text())
//     .then(data => {
//         // document.open();
//         // document.write(data);
//         // document.close();
//         document.getElementById("input").innerHTML = data;
//     });
// });
// setTimeout(function() {
//     window.location.href = 'http://localhost/phpmailer/mail.php';
//   }, 2 * 60 * 1000);
// var onloadCallback = function() {
//     alert("grecaptcha is ready!");
// };

function refreshPage() {
  fetch('http://localhost/phpmailer/welcome.php', {
    method: 'POST'
  }).then(function (response) {
    return response.text();
  }).then(function (data) {
    console.log(data); // يمكنك استخدام هذا للتحقق من الاستجابة من الخادم
    // location.reload(); // إعادة تحميل الصفحة بعد تحديث قيمة is_sent
  })["catch"](function (error) {
    console.error('حدث خطأ:', error);
  });
} // setTimeout(refreshPage, 6000);
// let isRefreshActivated = false;
// function refreshPage() {
//     if (!isRefreshActivated) {
//         isRefreshActivated = true;
//         setTimeout(function() {
//             location.reload();
//         }, 6000); // 6000 ميلي ثانية هي 6 ثوانٍ
//         // يمكنك وضع الكود هنا الذي يرسل طلب POST إلى الخادم ويحدث القيمة الخاصة بـ "is_sent"
//         // وبعد ذلك، ستبدأ الفترة الزمنية الجديدة للريفريش بعد الضغطة التالية
//     } else {
//         clearTimeout();
//         isRefreshActivated = false;
//         refreshPage();
//     }
// }
// document.getElementById('myButton').addEventListener('click', function() {
//     fetch('https://quran-mail.000webhostapp.com/vendor/welcome.php')
//         .then(function(response) {
//             if (response.ok) {
//                 location.reload(); // إعادة تحميل الصفحة عند نجاح الطلب
//             } else {
//                 console.error('حدث خطأ أثناء إعادة التحميل');
//             }
//         })
//         .catch(function(error) {
//             console.error('حدث خطأ أثناء إعادة التحميل', error);
//         });
// });
// const refreshButton = document.getElementById('myButton');
// // إضافة استماع حدث النقر على الزر
// refreshButton.addEventListener('click', function() {
//     // يقوم الكود بعمل ريفريش لصفحة welcome.php عند النقر على الزر
//     window.location.href = 'https://quran-mail.000webhostapp.com/vendor/welcome.php';
// });


var emailField = document.querySelector(".js-email-input");
var subscribeBtn = document.querySelector(".subscribe-btn");

var submitSubscriptionForm = function submitSubscriptionForm() {
  var isValid = isEmailFieldValid();

  if (!isValid) {
    return;
  }

  subscribeBtn.classList.add("is-loading");
  fetch("https://quran-mailer-api.onrender.com/subscribe/", {
    method: "POST",
    body: JSON.stringify({
      email: emailField.value,
      active: true
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    window.location.href = "../../success/";
  })["finally"](function () {
    subscribeBtn.classList.remove("is-loading");
  });
};

subscribeBtn.addEventListener("click", submitSubscriptionForm);
//# sourceMappingURL=script.dev.js.map
