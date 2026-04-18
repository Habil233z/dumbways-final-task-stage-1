function showDetail(id) {
    const modal = document.getElementById(`myModal${id}`)
    modal.classList.toggle("show");
}

function closeDetail(id) {
    const modal = document.getElementById(`myModal${id}`)
    modal.classList.toggle("show");
}

function closeDetailOutside(id) {
    const modal = document.getElementById(`myModal${id}`)
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.classList.toggle("show");
  }
}}

let darkMode = localStorage.getItem("darkMode")
const themeSwithc = document.getElementById("darkMode")

function enableDarkMode() {
    document.body.classList.add("darkMode")
    localStorage.setItem("darkMode", "active")
}

function disableDarkMode() {
    document.body.classList.remove("darkMode")
    document.body.classList.add("lightMode")
    localStorage.setItem("darkMode", null)
}

if (darkMode === "active") {enableDarkMode()}

document.getElementById("darkMode").addEventListener("click", function () {
    darkMode = localStorage.getItem("darkMode")
    darkMode !== "active" ? enableDarkMode() : disableDarkMode()
})
