function toggleDropdown() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Optional: close dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.download-button')) {
    const menu = document.getElementById("dropdown-menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    }
  }
}
