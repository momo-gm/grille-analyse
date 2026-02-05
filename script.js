document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", (e) => {
    e.stopPropagation();

    const li = box.closest("li");
    if (!li) return;

    const ul = li.querySelector(":scope > ul");
    if (!ul) return;

    const parentUl = li.parentElement;

    // Fermer les autres sections du même niveau
    parentUl.querySelectorAll(":scope > li > ul").forEach(siblingUl => {
      if (siblingUl !== ul) {
        siblingUl.style.display = "none";
      }
    });

    // Ouvrir / fermer la section cliquée
    ul.style.display = (ul.style.display === "flex") ? "none" : "flex";
  });
});
