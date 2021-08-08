let icon = document.querySelector(".js-menu-icon")
let menu = document.querySelector(".js-menu")

console.log(icon, menu)

icon.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
        menu.classList.remove("show")
        menu.classList.add("hide")
    } else {
        menu.classList.add("show")
        menu.classList.remove("hide")
    }
})