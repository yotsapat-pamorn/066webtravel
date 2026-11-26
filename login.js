
// กำหนดตัวแปร
const loginForm = document.getElementById("loginForm");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("loginMessage");

// แสดงและซ่อนรหัสผ่าน
togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "ซ่อน";

    } else {

        password.type = "password";
        togglePassword.textContent = "แสดง";

    }

});

// ตรวจสอบการเข้าสู่ระบบ
loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const role = document.getElementById("role").value;
    const pass = password.value;

    // ตรวจสอบบัญชีทดลองผู้ดูแลระบบ
    if (username === "admin" &&
        pass === "admin123" &&
        role === "admin") {

        message.style.color = "#197218";
        message.textContent = "เข้าสู่ระบบสำเร็จ (Admin)";

        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);

    }

    // ตรวจสอบบัญชีทดลองสมาชิก
    else if (username === "user" &&
             pass === "user123" &&
             role === "user") {

        message.style.color = "#197218";
        message.textContent = "เข้าสู่ระบบสำเร็จ (User)";

        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);

    }

    // กรณีข้อมูลไม่ถูกต้อง
    else {

        message.style.color = "#D32F2F";
        message.textContent = "ชื่อผู้ใช้ รหัสผ่าน หรือประเภทผู้ใช้งานไม่ถูกต้อง";

    }

});
