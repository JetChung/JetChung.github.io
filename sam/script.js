const max = 500;

window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;
    opacity = Math.max(1 - scroll / max, .2);
  document.getElementById("background-image").style.opacity = opacity;
  document.getElementById("nav-items").style.display = "flex";
  document.getElementById("nav-items").style.opacity = 1.25*(1-opacity);

});
