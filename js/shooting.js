(async () => {
    const main = document.getElementById("TxtShooting");
  
    const response = await fetch(
      `https://linh-dieu-data-default-rtdb.firebaseio.com/info-shooting.json`
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
          <p>${value.paragrap4}</p>
          <p>${value.paragrap3}</p>
        </div>
          
      `;
      }
    }
  })();
  
  
  
  (async () => {
      const main = document.getElementById("productShooting");
    
      const response = await fetch(`https://linh-dieu-data-default-rtdb.firebaseio.com/shooting.json`
      );
      const product = await response.json();
      console.log(product);
      if (product) {
        for (const [key, value] of Object.entries(product)) {
          main.innerHTML += `
          <div class="item-product col-12 col-md-3">
          <a href="./detail-shooting.html?id=${key}">
            <img
              src="${value.avt}"
              alt=""
              width="100%"
              height="500px"
          /></a>
          <div class="title-item">
          <h1 >${value.title}</h1>
          </div>
        
        </div>
        
            
        `;
        }
      }
    })();