const value = document.getElementById("value");

window.addEventListener("resize", (e) => {
  console.log(window.innerWidth);
  value.textContent = `Your screen width is ${window.innerWidth}px`;
});
