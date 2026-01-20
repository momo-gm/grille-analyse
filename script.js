document.querySelectorAll(".box.main").forEach(box => {
  box.addEventListener("click", () => {
    const sousListe = box.parentElement.querySelector("ul");
    if (sousListe) {
      sousListe.style.display =
        sousListe.style.display === "none" ? "block" : "none";
    }
  });
});
