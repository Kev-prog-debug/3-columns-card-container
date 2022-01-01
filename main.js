const data = [
  {
    title: "Sedans",
    img: "./images/icon-sedans.svg",
    description:
      "  Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    title: "SUVs",
    img: "./images/icon-suvs.svg",
    description:
      "  Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    title: "Luxury",
    img: "./images/icon-luxury.svg",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
  },
];

//get card-container
const cardContainer = document.querySelector(".card-container");
data.forEach((e) => {
  //create card  element
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  //create textNode and append to the card element
  //create title
  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.innerHTML = e.title;
  const description = document.createElement("p");
  description.setAttribute("class", "description");
  description.innerHTML = e.description;
  const img = document.createElement("img");
  img.setAttribute("src", e.img);
  const btn = document.createElement("button");
  btn.innerHTML = "Learn More";
  btn.setAttribute("class", "btn");
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(btn);
  cardContainer.appendChild(card);
});
