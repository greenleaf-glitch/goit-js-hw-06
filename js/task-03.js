const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const refs = {
  gallery: document.querySelector(".gallery"),
};

const imgMarkup = images
  .map(
    ({ url, alt }) =>
      `<li ><img src=${url} alt=${alt} class="gallery-style"></img></li>`
  )
  .join("");

const markup = `<ul class="gallery-container">${imgMarkup}</ul>`;

refs.gallery.insertAdjacentHTML("afterbegin", markup);
