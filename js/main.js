const headerElement = document.querySelector("#container-header");

window.addEventListener("scroll", (e) => {
  headerElement.classList.toggle("container-scrolling", window.scrollY > 0);
});
