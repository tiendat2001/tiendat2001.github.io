
let i = 0;
let text1 = "Helluu thế là t vs m cũng quen nhau đc gần 4 năm r nhỉ.";
let text2 = "Cùng xem lại kỷ niệm nhaa."
let text3 = "Amireux"
let speed = 1; // dang chinh

function typeWriter(text, para) {
    if (ok == 3) {
        clearInterval(typeInterval); // Dừng nếu đã hoàn thành tất cả
    }
    if (i < text.length) {
        document.getElementById(para).innerHTML += text.charAt(i);
        i++;
        speed = Math.random() * 500 + 100; // Tạo độ trễ ngẫu nhiên
    } else {
        i = 0; // Reset chỉ số ký tự
        ok += 1; // Chuyển trạng thái
    }
}

let typeInterval = setInterval(function () {
    if (ok == 0) {
        typeWriter(text1, "txt1"); // Viết text1
    } else if (ok == 1) {
        typeWriter(text2, "txt2"); // Viết text2
    } else if (ok == 2) {
        typeWriter(text3, "txt3"); // Viết text3
    }
}, 100); // Chỉnh tốc độ gõ
//};
