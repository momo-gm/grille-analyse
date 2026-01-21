document.querySelectorAll(".box.main").forEach(box => {
  box.addEventListener("click", () => {
    const li = box.closest("li");
    const ul = li.querySelector(":scope > ul");

    if (!ul) return;

    const isOpen = ul.style.display === "flex";
    ul.style.display = isOpen ? "none" : "flex";
  });
});
