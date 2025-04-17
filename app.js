const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Luka 4 PF Space Navigator",
    price: 629,
    colors: [
      {
        code: "green",
        img: "./img/Product/image-removebg-preview.png",
      },
      {
        code: "darkgreen",
        img: "./img/Product/image-removebg-preview.png",
      },
    ],
  },
  {
    id: 2,
    title: "LeBron XXII Currency EP",
    price: 939,
    colors: [
      {
        code: "white",
        img: "./img/Product/brons.png",
      },
      {
        code: "pink",
        img: "./img/Product/brons.png",
      },
    ],
  },
  {
    id: 3,
    title: "Giannis Freak 6 EP",
    price: 459,
    colors: [
      {
        code: "black",
        img: "./img/Product/giannis.png",
      },
      {
        code: "white",
        img: "./img/Product/giannis2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Ja 2 Induction EP",
    price: 659,
    colors: [
      {
        code: "lightblue",
        img: "./img/Product/ja.png",
      },
      {
        code: "transparent",
        img: "./img/Product/ja.png",
      },
    ],
  },
  {
    id: 5,
    title: "KD 18 Black Label EP",
    price: 899,
    colors: [
      {
        code: "black",
        img: "./img/Product/kd.png",
      },
      {
        code: "transparent",
        img: "./img/Product/kd.png",
      },
    ],
  },
  {
    id: 6,
    title: "Tatum 3 EP",
    price: 579,
    colors: [
      {
        code: "white",
        img: "./img/Product/tatum.png",
      },
      {
        code: "gray",
        img: "./img/Product/tatum2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".sizes");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});