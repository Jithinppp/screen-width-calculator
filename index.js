const value = document.getElementById("value");

value.textContent = `Your screen width is ${window.innerWidth}px`;
window.addEventListener("resize", (e) => {
  console.log(window.innerWidth);
  value.textContent = `Your screen width is ${window.innerWidth}px`;
});
