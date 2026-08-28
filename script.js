// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Tutup menu setelah memilih halaman
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Form contact
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    alert(`Terima kasih, ${name}! Pesan berhasil dikirim.`);

    this.reset();
});
