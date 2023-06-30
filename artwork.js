const pic = localStorage.getItem("pic");
console.log(JSON.parse(pic));
const picsData = JSON.parse(pic);

Img_link = "https://www.artic.edu/iiif/2/"
Img_ending = "/full/843,/0/default.jpg"


let words = picsData.publication_history.trim().split(' ');

  // Slice the array to get the first 600 words
let first600Words = words.slice(0, 400);

  // Join the words back into a string
let result = first600Words.join(' ');


const main = document.querySelector(".main")

const element = document.createElement("div");
element.classList.add("col-4");
element.innerHTML = `                   
              <div class="info">
              <div class="img_cont">
              <img class='img'  src="${Img_link + picsData.image_id+Img_ending}" >
              </div>
                  <div class="card-content">
                  <h2>${picsData.title}</h2>
                  <hr/>
                  <br/>
                  <p>${picsData.date_display}</p>
                  <br/>
                <p>${picsData.place_of_origin}</p><br/>
                <p>${picsData.artist_display}</p><br/>
                <p class="text">${result}</p>
                  </div>                   
        `;
main.appendChild(element); 