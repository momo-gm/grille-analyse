document.querySelectorAll(".box.main").forEach(box => {
  box.addEventListener("click", () => {
    const li = box.parentElement;
    const ul = li.querySelector(":scope > ul");

    if (!ul) return;

    const isHidden = window.getComputedStyle(ul).display === "none";
    ul.style.display = isHidden ? "flex" : "none";
  });
});
