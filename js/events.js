const headerElement = document.querySelector("#container-header");
const buttonSide = document.querySelector("#button-side");

window.addEventListener("scroll", (e) => {
  headerElement.classList.toggle(
    "container-scrolling",
    window.scrollY > 0 && window.innerWidth > 700
  );
});

window.addEventListener("resize", (e) => {
  if (buttonSide.checked && window.innerWidth > 700) {
    buttonSide.checked = false;
  }
});
