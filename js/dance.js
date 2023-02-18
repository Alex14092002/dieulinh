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
