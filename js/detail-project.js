let params = new URLSearchParams(location.search);
let id_item = params.get("id");
(async () => {
  const mainItem = document.getElementById("mainProject");
  const title = document.getElementById("nameProject");
  const response = await fetch(
    `https://linh-dieu-data-default-rtdb.firebaseio.com/project/${id_item}.json`
  );
  const product = await response.json();
    console.log(product);

  if (product) {
    mainItem.innerHTML += `
        <div class="project-item col-12 col-md-6">
        <img src="${product.detail1}" alt="" width="100%" height="500px">
    </div>
    <div class="project-item col-12 col-md-6">
        <img src="${product.detail2}" alt="" width="100%" height="500px">
    </div>
    <div class="project-item col-12 col-md-6">
        <img src="${product.detail3}" alt="" width="100%" height="500px">
    </div>
    <div class="project-item col-12 col-md-6">
        <img src="${product.detail4}" alt="" width="100%" height="500px">
    </div>
    <div class="project-item col-12 col-md-6">
        <img src="${product.detail5}" alt="" width="100%" height="500px">
    </div>
    <div class="project-item col-12 col-md-6">
        <img src="${product.detail6}" alt="" width="100%" height="500px">
    </div>
        `;
    title.innerHTML += `
    <h1>${product.title}</h1>
    <p>${product.paragrap1}</p>
    <p>${product.paragrap2}</p>
    <p>${product.paragrap3}</p>
    <p>${product.paragrap4}</p>
    <p>${product.paragrap5}</p>
        `;
  }
})();
