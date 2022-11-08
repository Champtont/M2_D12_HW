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
      let photos = stuff.photos;
      console.log(photos);
      for (let i = 0; i < photos.length; i++) {
        const container = document.querySelector("#addToRow");
        let pic = photos[i];
        const card = document.createElement("div");
        card.classList.add("col-md-4");
        card.innerHTML = `
        <div class="card mb-4 shadow-sm">
          <img
            class="bd-placeholder-img card-img-top img-fluid"
            src="${pic.url}"
            style = 'width:100%;
            height:100%; object-fit:cover;"
          />
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">"${pic.id}"</small>
            </div>
          </div>
        </div>
      `;
        container.appendChild(card);
      }
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
      //console.log(stuff.photos);
      let photos = stuff.photos;
      console.log(photos);
      console.log("pushed");
    });
};

loadSecImage.addEventListener("click", getDifImages);
