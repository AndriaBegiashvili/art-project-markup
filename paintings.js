API_URL = "https://api.artic.edu/api/v1/artworks"

Img_link = "https://www.artic.edu/iiif/2/"
//img id
Img_ending = "/full/843,/0/default.jpg"
const main = document.querySelector("#main");

getData(API_URL);
async function getData(url) {
    console.log(url);
  
    const res = await fetch(url);
    console.log(res);
  
    const data = await res.json();
    console.log(data.data);
  
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
                  
                  
                    <div class="card">
                    <img class='img'  src="${Img_link + image_id+Img_ending}" >
                        <div class="card-content">
                        <h3>${title}</h3>
                        <p>${date_display}</p>
                      <p>${place_of_origin}</p>
                      <p>${artist_display}</p>
                        </div>
                   
              `;
      main.appendChild(element); 
    });
  }  
  