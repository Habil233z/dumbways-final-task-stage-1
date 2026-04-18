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