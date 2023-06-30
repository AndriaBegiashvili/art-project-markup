API_URL = `https://api.artic.edu/api/v1/artworks?page=`
Img_link = "https://www.artic.edu/iiif/2/"
Img_ending = "/full/843,/0/default.jpg"
let currentPage = 1;
const main = document.querySelector("#main");

getData(API_URL, currentPage);
  async function getData(url, page) {
    const res = await fetch(`${url}${page}`);
    const data = await res.json();
    showPics(data.data);
  }

  async function getPics(url){
    const res = await fetch(url);
    console.log(res)
    const data = await res.json();
    console.log(data)
    
  }

  function showPics(pics) {  
    
    pics.forEach((pic) => {
      const { title, date_display, place_of_origin, artist_display, image_id } =
        pic;       
      const element = document.createElement("div");
      element.classList.add("col-4");
      element.innerHTML = `                   
                    <div class="card top">
                    <img class='img'  src="${Img_link + image_id+Img_ending}" >
                        <div class="card-content">
                        <h3>${title}</h3>
                        <p>${date_display}</p>
                      <p>${place_of_origin}</p>
                      <p>${artist_display}</p>
                        </div>                   
              `;
      main.appendChild(element); 
      element.addEventListener("click", () => {
        localStorage.setItem("pic", JSON.stringify(pic));
        window.location = "artwork.html";
      });
    });
  }  

const nextButton = document.querySelector(".show_more");
nextButton.addEventListener("click", () => {
  currentPage++;
  console.log(currentPage);
  getData(API_URL, currentPage);
});