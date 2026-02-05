document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", (e) => {
    e.stopPropagation(); // empêche les ouvertures en cascade

    const li = box.closest("li");
    if (!li) return;

    const ul = li.querySelector(":scope > ul");
    if (!ul) return;

    const isOpen = ul.style.display === "flex";
    ul.style.display = isOpen ? "none" : "flex";
  });
});
