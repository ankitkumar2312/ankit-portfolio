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
const counters = document.querySelectorAll(".counter");

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let current = 0;
        const increment = Math.max(1, Math.ceil(target / 100));

        const update = () => {
            current += increment;

            if (current >= target) {
                current = target;

                if (target === 99) {
                    counter.textContent = target + "%";
                } else if (target === 15) {
                    counter.textContent = target + "+";
                } else {
                    counter.textContent = target + "+";
                }

                return;
            }

            counter.textContent = current;
            requestAnimationFrame(update);
        };

        update();
    });
};

window.addEventListener("load", animateCounters);
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "🌙";
    }else{
        themeBtn.innerHTML = "☀️";
    }

});
const particles = document.getElementById("particles");

for(let i=0;i<35;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=(8+Math.random()*8)+"s";

p.style.animationDelay=Math.random()*5+"s";

particles.appendChild(p);

}
