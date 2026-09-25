const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const themeBtn = document.getElementById("themeBtn");
const toast = document.getElementById("toast");

const gcashModal = document.getElementById("gcashModal");

const gcashNumber = "09955217181";

function copyML() {
    navigator.clipboard.writeText("400852767")
        .then(() => {
            showToast("Mobile Legends ID copied!");
        })
        .catch(() => {
            showToast("Unable to copy ML ID");
        });
}

document.getElementById("gcashNumber").textContent = gcashNumber;

music.volume = 0.25;

function startMusic() {
    music.play()
        .then(() => {
            musicBtn.textContent = "🔊";
            musicBtn.title = "Mute Music";
        })
        .catch(() => {
            musicBtn.textContent = "🔊";
            musicBtn.title = "Play Music";
        });
}

function toggleMusic() {
    if (music.paused) {
        music.play()
            .then(() => {
                musicBtn.textContent = "🔊";
                musicBtn.title = "Mute Music";
            })
            .catch(() => {
                showToast("Tap again to play music");
            });
    } else {
        music.pause();
        musicBtn.textContent = "🔇";
        musicBtn.title = "Unmute Music";
    }
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}

function toggleTheme() {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    themeBtn.textContent = isLight ? "🌙" : "☀️";
    themeBtn.title = isLight ? "Dark Mode" : "Light Mode";
}

function openGcash() {
    gcashModal.classList.add("show");
    document.body.classList.add("modal-open");
}

function closeGcash() {
    gcashModal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

function copyGcash() {
    navigator.clipboard.writeText(gcashNumber)
        .then(() => {
            showToast("GCash number copied!");
        })
        .catch(() => {
            showToast("Unable to copy number");
        });
}

gcashModal.addEventListener("click", function(event) {
    if (event.target === gcashModal) {
        closeGcash();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeGcash();
    }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "🌙";
    themeBtn.title = "Dark Mode";
}

document.addEventListener("click", function startMusicOnce() {
    startMusic();
    document.removeEventListener("click", startMusicOnce);
}, { once: true });

function copyValorant() {
    navigator.clipboard.writeText("Sigmaboy123#yes");
    showToast("VALORANT ID copied!");
}