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

// Fonction clic pour dérouler / refermer
document.querySelectorAll(".box.main").forEach(box => {
  box.addEventListener("click", () => {
    const ul = box.parentElement.querySelector("ul");
    if (ul) {
      // Récupère le style effectif pour bascule
      const isHidden = window.getComputedStyle(ul).display === "none";
      ul.style.display = isHidden ? "block" : "none";
    }
  });
});
