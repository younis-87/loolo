document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // التحقق من معلومات الدخول
    if (username === 'admin' && password === '1234') {
        alert('تم تسجيل الدخول بنجاح!');
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
    }
});