document.querySelectorAll(".box.main").forEach(box => {
  box.addEventListener("click", () => {
    const ul = box.parentElement.querySelector("ul");
    if (ul) {
     
      const isHidden = window.getComputedStyle(ul).display === "none";
      ul.style.display = isHidden ? "block" : "none";
    }
  });
});

