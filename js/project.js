
(async () => {
    const main = document.getElementById("productProject");
  
    const response = await fetch(
      `https://linh-dieu-data-default-rtdb.firebaseio.com/project.json`
    );
    const product = await response.json();
    
    if (product) {
      for (const [key, value] of Object.entries(product)) {
        main.innerHTML += `

        <div class="item-project col-12 col-md-6">
        <a href="./detail-project.html?id=${key}">
            <img src="${value.link}" alt="" width="100%" height="400px">
            <div class="title-product-project">
                <h1>${value.title}</h1>
            </div>
        </a>
       
    </div>
          
      `;
      }
    }
  })();