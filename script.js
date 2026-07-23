const text = "Clinical Data Management Associate";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;
