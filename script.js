// Small accessible nav toggle
const btn = document.getElementById("nav-toggle");
const nav = document.getElementById("site-nav");
if (btn && nav) {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    nav.style.display = expanded ? "none" : "block";
  });

  // Close menu on resize to large screens
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) {
      nav.style.display = "";
      btn.setAttribute("aria-expanded", "false");
    } else {
      nav.style.display = "none";
    }
  });
}
