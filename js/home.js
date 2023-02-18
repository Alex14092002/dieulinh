(async () => {
  const main = document.getElementById("main");

  const response = await fetch(
    `https://linh-dieu-data-default-rtdb.firebaseio.com/home.json`
  );
  const product = await response.json();

  if (product) {
    for (const [key, value] of Object.entries(product)) {
      main.innerHTML += `
                <div class="banner">
        <img
          src="${value.banner}"
          alt=""
          width="100%"
        />
        <div class="title-banner">
          <h1>${value.titleBanner}</h1>
          <h3>${value.titleBanner2}"</h3>
        </div>
      </div>
      <div class="video">
        <iframe
          width="100%"
          height="400"
          src="${value.video}"
          
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
     
      </div>
      <div class="list-product row">
        <div class="box-item-product col-6 col-md-3">
          <a href="../page/fashion.html">
            <img src="${value.product1Img}" alt="" width="100%" height="360px">
            <h1 class="title-product">${value.product1Txt}</h1>
          </a>
        </div>
        <div class="box-item-product col-6 col-md-3">
          <a href="../page/shooting.html">
            <img src="${value.product2Img}" alt="" width="100%" height="360px">
            <h1 class="title-product shooting">${value.product2Txt}</h1>
          </a>
        </div>
        <div class="box-item-product col-6 col-md-3">
          <a href="../page/dance.html">
            <img src="${value.product3Img}" alt="" width="100%" height="360px">
            <h1 class="title-product ">${value.product3Txt}</h1>
          </a>
        </div>
        <div class="box-item-product col-6 col-md-3">
          <a href="../page/project.html">
            <img src="${value.product4Img}" alt="" width="100%" height="360px">
            <h1 class="title-product">${value.product4Txt}</h1>
          </a>
        </div>
      </div>

                `;
    }
  }
})();
