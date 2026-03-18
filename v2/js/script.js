function showtime(){
    var now= new Date();
    var time = now.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;

}
setInterval(showtime,1000);        
window.onload = function(){
   alert("مرحبا بك في الموقع ")
}
window.onload=function(){
    document.getElementById('welcomePopup').style.display="flex";
};

function makeBigger(x){
    x.style.height="120px";
    x.style.wedth="120px";
}
function normalImage(x){
    x.style.height="100px";
    x.style.wedth="100px";
}
function checkLogin(){
    var email = document.getElementById("loginEmail").value;
    var pass = document.getElementById("loginpass").value;

    if (email===""|| pass===""){
        alert("يرجى ملئ الحقول");
        return;
    }
    if (pass.length <8){
        alert("كلمة المرور ضعيقة! يجب أن تكون 8 خانات على الأقل")
    }
    else if(email=="admin@golf.com"){
        alert("مرحبا بك مجددا في المنتجع")
    }
    else{
        alert("خطأ في البريد الإلكتروني")
    }
}
//صندوق البحث بالصفحة الرئيسية
function doSearch(){
    var word = document.getElementById("myInput").value;
    if(word == ""){
        alert("يرجى كتابة كلمة للبحث عنها");
    }
    else{
        alert("جار البحث عن :"+ word);
    }
}
var currentZoom =100;

function zoomIn(){
    currentZoom = currentZoom + 10;
    document.body.style.zoom = currentZoom+ "%";
}
function zoomOut(){
    currentZoom = currentZoom - 10;
    document.body.style.zoom = currentZoom+ "%";
}
function changeTheme(){
    var selectedColor = document.getElementById("bgPicker").value;
    document.body.style.backgroundColor = selectedColor;
    document.body.style.color = "#ffffff"
}
function checkForm(){
    var email = document.getElementById("userEmail").value;
    var message = document.getElementById("userMsg").value;
    var phone = document.getElementById("usertel").value;

    if (email =="" || email!="@" || message== "" || phone<10){
        alert("يرجى ملئ جميع الخانات أولا");
    }
    else{
        alert("شكراً لك! تم إرسال رسالتك بنجاح.");
        
        document.getElementById("contactForm").reset();
    }
}
  