(async () => {
  const main = document.getElementById("mainDance");

  const response = await fetch(
    `https://linh-dieu-data-default-rtdb.firebaseio.com/dance.json`
  );
  const product = await response.json();

  if (product) {
    for (const [key, value] of Object.entries(product)) {
      main.innerHTML += `

        <div class="itemDance col-12 col-md-4">
        <a href="${value.link}" target="_blank">
        <img src="${value.img}" alt="" width="100%">
        </a>
    </div>
          
      `;
    }
  }
})();


(async () => {
  const main = document.getElementById("TxtDance");

  const response = await fetch(
    `https://linh-dieu-data-default-rtdb.firebaseio.com/info-dance.json`
  );
  const product = await response.json();

  if (product) {
    for (const [key, value] of Object.entries(product)) {
      main.innerHTML += `
      <div class="title-dance container">
      <h1>${value.title}</h1>
  </div>
  <div class="para container">
      <p>${value.paragrap1}
      </p>
      <p>${value.paragrap2}</p>
      <br/>
      <p class="bold">${value.paragrap3}</p> 
      <br/>
  </div>
        
    `;
    }
  }
})();
