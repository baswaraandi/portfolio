/**
 * ANDYKA BASWARA - System Portfolio Script
 * Versi 4.0 - Google Security Theme
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Selector Elemen
  const header = document.querySelector("header");
  const title = document.querySelector("#titlePort");
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  // 2. Efek Mengetik (Typewriter)
  const text = "ANDYKA_BASWARA.SYS";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      title.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Jalankan Typewriter
  title.innerHTML = ""; // Pastikan kosong sebelum mulai
  typeWriter();

  // 3. Navbar Scroll Handler
  window.onscroll = function () {
    if (window.scrollY > 0) {
      header.classList.add("navbar-fixed");
      if (title) title.classList.add("title-color");
    } else {
      header.classList.remove("navbar-fixed");
      if (title) title.classList.remove("title-color");
    }
  };

  // 4. Hamburger & Navigation Logic
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    });

    // Klik di luar menu untuk menutup
    window.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      }
    });

    // Tutup menu saat link diklik
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      });
    });
  }
});

console.log(
  "%c SECURITY_PROTOCOL: INITIALIZED ",
  "background: #1a73e8; color: white; font-weight: bold; padding: 4px;"
);

// Tambahkan di dalam document.addEventListener("DOMContentLoaded", ... )
const card = document.querySelector("#id-card");
const container = card.parentElement;

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset saat mouse keluar
container.addEventListener("mouseleave", () => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

container.addEventListener("mouseenter", () => {
  card.style.transition = "none";
});
