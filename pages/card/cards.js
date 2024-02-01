document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  const itemContainers = document.querySelectorAll(".itemContainer");
  const colorSpans = document.querySelectorAll(".title span");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeBackgroundColor(index) {
    const randomColor = getRandomColor();

    itemContainers[index].style.backgroundColor = randomColor;

    colorSpans[index].textContent = randomColor;
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => changeBackgroundColor(index));
  });
});
