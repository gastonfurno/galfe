const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
    toggle.textContent = "✖";
    } else {
    toggle.textContent = "☰";
    }

});