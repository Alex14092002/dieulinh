(async () => {
  const main = document.getElementById("TxtFashion");

  const response = await fetch(
    `https://linh-dieu-data-default-rtdb.firebaseio.com/info-fashion.json`
  );
  const product = await response.json();

  if (product) {
    for (const [key, value] of Object.entries(product)) {
      main.innerHTML += `
        <div class="title-fashion">
        <h1>${value.title}</h1>
      </div>
      <div class="paragrap">
        <p> ${value.paragrap1}
        </p>
        <p>${value.paragrap2}
        </p>
        <p>${value.paragrap3}</p> 
        <br/>
        <p class="bold">${value.paragrap4}</p> 
      </div>
        
    `;
    }
  }
})();



(async () => {
    const main = document.getElementById("productFashion");
  
    const response = await fetch(
      `https://linh-dieu-data-default-rtdb.firebaseio.com/fashion.json`
    );
    const product = await response.json();
  
    if (product) {
      for (const [key, value] of Object.entries(product)) {
        main.innerHTML += `

        <div class="item-product col-12 col-md-4">
        <a href="./detail-fashion.html?id=${key}"> <img src="${value.avt}" alt="" width="100%" height="500px"></a>
        </div>
          
      `;
      }
    }
  })();