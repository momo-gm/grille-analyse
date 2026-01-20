document.querySelectorAll(".box.main").forEach(box => {
  box.addEventListener("click", () => {
    const sousListe = box.parentElement.querySelector("ul");
    if (sousListe) {
      sousListe.style.display =
        sousListe.style.display === "none" ? "block" : "none";
    }
  });
});

document.querySelectorAll(".box.main").forEach(box => {
  box.addEventListener("click", () => {
    const ul = box.parentElement.querySelector("ul");
    if (ul) {
      ul.style.display = ul.style.display === "none" ? "block" : "none";
    }
  });
});
