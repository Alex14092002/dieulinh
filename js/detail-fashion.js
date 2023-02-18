let params = new URLSearchParams(location.search);
let id_item = params.get("id");
(async () => {
    const mainItem = document.getElementById("mainItem");
  
    const response = await fetch(
      `https://linh-dieu-data-default-rtdb.firebaseio.com/fashion/${id_item}.json`
    );
    const product = await response.json();
  
    if (product) {
        mainItem.innerHTML += `
         <div class="img-main">
            <img src="${product.detail1}" alt="" width="100%">
        </div>
        <div class="img-main">
            <img src="${product.detail2}" alt=""  width="100%">
        </div>
        <div class="img-main">
            <img src="${product.detail3}" alt=""  width="100%">
        </div>
        `
    }
  })();
  