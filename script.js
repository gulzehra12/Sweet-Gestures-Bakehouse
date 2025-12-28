// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ============================
   HERO BUTTON SCROLL
============================ */
function orderNow() {
  const orderSection = document.getElementById("order");
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth" });
  }
}

/* ============================
   PREVENT DOUBLE TAP ZOOM (iOS)
============================ */
let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  function (event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  },
  false
);

  // DELIVERY ADDRESS TOGGLE
const orderMethod = document.getElementById("orderMethod");
const deliveryAddress = document.getElementById("deliveryAddress");

if (orderMethod) {
  orderMethod.addEventListener("change", () => {
    deliveryAddress.style.display =
      orderMethod.value.includes("Delivery") ? "block" : "none";
  });
}

console.log("JS LOADED");

const form = document.getElementById("orderForm");
const popup = document.getElementById("thankYouPopup");
const closeBtn = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // STOP redirect

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      "Accept": "application/json"
    }
  }).then(() => {
    popup.style.display = "flex";
    form.reset();
  }).catch(() => {
    alert("Something went wrong. Please try again.");
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});



// ================= GALLERY LIGHTBOX =================
const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});








