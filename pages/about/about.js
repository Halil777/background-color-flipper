document.addEventListener("DOMContentLoaded", function () {
  const tabLeftImg = document.querySelector(".tabLeft img");
  const descriptionTitle = document.querySelector(".description h4");
  const descriptionText = document.querySelector(".description p");
  const buttons = document.querySelectorAll(".header button");

  const contentData = {
    history: {
      imgSrc: "../../images/pic1.jpg",
      title: "History",
      text: "The region of present-day Turkmenistan has a long history dating back to ancient times. It was part of the ancient Persian Empire and later became a significant part of the Silk Road trade route. The area was home to various nomadic tribes, contributing to the cultural diversity of the region.With the spread of Islam in the 7th century, Turkmenistan came under the influence of Islamic civilization. The Turkmen people gradually embraced Islam, and the region became an integral part of the Islamic world .",
    },
    vision: {
      imgSrc: "../../images/pic2.jpg",
      title: "Vision",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione soluta voluptatibus, magnam quae provident maxime eius odio expedita vero. Sequi, aperiam veritatis facere laudantium autem minus voluptatem quam molestias doloremque?",
    },
    goals: {
      imgSrc: "../../images/pic3.jpg",
      title: "Goals",
      text: "Turkmenistan gained independence from the Soviet Union on October 27, 1991, following its dissolution. Saparmurat Niyazov became the first president and ruled with an authoritarian style until his death in 2006.Today, Turkmenistan is an independent country with a unique cultural heritage. The nation has focused on developing its economy, particularly through its substantial natural gas reserves. The political system has seen continuity in leadership, and the country continues to balance traditional values with modern development.",
    },
  };

  function updateContent(event) {
    const clickedButton = event.target;

    const buttonKey = clickedButton.textContent.toLowerCase();
    const content = contentData[buttonKey];

    tabLeftImg.src = content.imgSrc;
    descriptionTitle.textContent = content.title;
    descriptionText.textContent = content.text;

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    clickedButton.classList.add("active");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", updateContent);
  });
});
