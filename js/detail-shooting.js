let params = new URLSearchParams(location.search);
let id_item = params.get("id");
(async () => {
    const mainItem = document.getElementById("mainShooting");
    const title = document.getElementById("title-main");
    const response = await fetch(
      `https://linh-dieu-data-default-rtdb.firebaseio.com/shooting/${id_item}.json`
    );
    
    const product = await response.json();
    console.log(product);



    if (product) {
        mainItem.innerHTML += `
        <div class=" img-shooting col-12 col-md-4">
        <img src="${product.detail1}" alt="" width="100%" height="450px">
        </div>
        <div class=" img-shooting col-12 col-md-4">
        <img src="${product.detail2}" alt="" width="100%" height="450px">
        </div>
        <div class=" img-shooting col-12 col-md-4">
        <img src="${product.detail3}" alt="" width="100%" height="450px">
        </div>
        <div class="  img-shooting col-12 col-md-4">
        <img src="${product.detail4}" alt="" width="100%" height="450px">
        </div>
        <div class="  img-shooting col-12 col-md-4">
        <img src="${product.detail5}" alt="" width="100%" height="450px">
        </div>
        <div class="  img-shooting col-12 col-md-4">
        <img src="${product.detail6}" alt="" width="100%" height="450px">
        </div>
        <div class="  img-shooting col-12 col-md-4">
        <img src="${product.detail7}" alt="" width="100%" height="450px">
        </div>
        <div class="  img-shooting col-12 col-md-4">
        <img src="${product.detail8}" alt="" width="100%" height="450px">
        </div>
        <div class="  img-shooting col-12 col-md-4">
        <img src="${product.detail9}" alt="" width="100%" height="450px">
        </div>
        `
        title.innerHTML += `
        <div class="title-shooting">
            <h1>${product.title}</h1>
         </div>
        `
    }
  })();
  
