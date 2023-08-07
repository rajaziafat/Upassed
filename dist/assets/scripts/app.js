const menuToggler = document.querySelector("#menu-toggler");
const overlay = document.querySelector("#overlay");
const menu = document.querySelector("#menu");

const isMenuOpened = () => {
  return menu.classList.contains("right-0");
};

const closeMenu = () => {
  menu.classList.add("-right-[320px]");
  menu.classList.remove("right-0");
  overlay.classList.add("opacity-0", "pointer-events-none");
  overlay.classList.remove("opacity-50", "pointer-events-all");
};

const openMenu = () => {
  menu.classList.add("right-0");
  menu.classList.remove("-right-[320px]");
  overlay.classList.add("opacity-50", "pointer-events-all");
  overlay.classList.remove("opacity-0", "pointer-events-none");
};

menuToggler.addEventListener("click", (e) => {
  console.log(isMenuOpened());
  if (isMenuOpened()) closeMenu();
  else openMenu();
});

overlay.addEventListener("click", (e) => {
  closeMenu();
});
