let filter = document.querySelector(".filter");

document.body.addEventListener("click", (e) => {
    let type = e.target.attributes[1].textContent;
    sessionStorage.setItem("yogatype", type);
    window.location.href = "waiting.html";
});