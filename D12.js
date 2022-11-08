const loadImage = document.getElementById("button1");
const loadSecImage = document.getElementById("button2");

const API_KEY = "563492ad6f91700001000001ed73c338930b4b4aa3e692e975e584b7";
const getImages = () => {
  fetch("https://api.pexels.com/v1/search?query=nature", {
    method: "GET",
    headers: { Authorization: `Bearer ${API_KEY}` },
  })
    .then((response) => response.json())
    .then((stuff) => {
      console.log(stuff);
      console.log("clicked");
    });
};

loadImage.addEventListener("click", getImages);

const getDifImages = () => {
  fetch("https://api.pexels.com/v1/search?query=dogs", {
    method: "GET",
    headers: { Authorization: `Bearer ${API_KEY}` },
  })
    .then((response) => response.json())
    .then((stuff) => {
      console.log(stuff);
      console.log("pushed");
    });
};

loadSecImage.addEventListener("click", getDifImages);
