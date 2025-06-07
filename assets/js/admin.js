// ----- SIDEBAR TOGGLE ON MOBILE -----
const sidebar = document.getElementById("sidebar");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");

hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// ----- TAB SWITCHING (Desktop & Mobile) -----
navItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    // (1) Highlight selected nav item
    navItems.forEach((el) => el.classList.remove("active"));
    btn.classList.add("active");

    // (2) Hide all sections
    sections.forEach((sec) => sec.classList.remove("active-section"));

    // (3) Show the clicked section
    const targetId = btn.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active-section");

    // (4) If on mobile, close the sidebar after selection
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("open");
    }
  });
});

// (Optional) Close sidebar if user clicks outside of it on mobile
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 768 &&
    !sidebar.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    sidebar.classList.remove("open");
  }
});

// ----- NEW BOOKING MODAL LOGIC -----
const bookingModal = document.getElementById("bookingModal");
const openBookingModalBtns = [
  document.getElementById("openBookingModalBtn"),
  document.getElementById("openBookingModalBtn2"),
];
const cancelBookingBtn = document.getElementById("cancelBookingBtn");

openBookingModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    bookingModal.style.display = "flex";
  });
});

cancelBookingBtn.addEventListener("click", () => {
  bookingModal.style.display = "none";
});

// Prevent actual form submission for demo
document
  .getElementById("bookingForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    // Here you would normally collect form data and send to server…
    alert("Booking saved (demo only).");
    bookingModal.style.display = "none";
  });
