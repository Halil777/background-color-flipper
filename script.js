document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const button = document.querySelector("button");
  const backColorSpan = document.getElementById("back-color");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeBackgroundColor() {
    const randomColor = getRandomColor();

    container.style.backgroundColor = randomColor;

    backColorSpan.textContent = randomColor;
  }

  button.addEventListener("click", changeBackgroundColor);
});
