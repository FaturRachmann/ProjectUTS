const text = "Selamat datang di situs jelajah kami!"; // Teks yang akan diketik
const typingText = document.getElementById("typing-text");
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Kecepatan mengetik (dalam ms)
    }
}

type(); // Memulai animasi mengetik
