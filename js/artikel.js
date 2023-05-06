const apiUrl = 'https://645348fbc18adbbdfe9933f9.mockapi.io/artikel';
const articleSection = document.querySelector('#article');

const getAllArticles = async (url) => {
  await fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((result) => {
      displayArticles(result);
    });
};

getAllArticles(apiUrl);

const displayArticles = (data) => {
  data.map((article) => {
    articleSection.innerHTML += `
    <article class="w-full flex sm:flex-col-reverse gap-8 sm:gap-2">
          <div class="w-3/4 sm:w-full sm:h-full space-y-4">
            <p class="text-[14px] sm:text-[24px] font-medium">
                ${article.judul}
            </p>
            <div
              class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
            >
              <p class="text-[14px] sm:text-base">${article.tanggal}</p>
              <a
                href="detail_artikel.html?id=${article.id}"
                class="rounded-full text-center sm:text-base bg-[#E0F6E5] px-[16px] py-[6px] text-[12px] text-[#52C41A] hover:bg-[#30C04F] hover:text-white"
                >Baca Selengkapnya</a
              >
            </div>
          </div>
          <div class="w-80 h-36 sm:w-full sm:h-56">
            <img
              src=${article.img}
              class="w-full h-full object-cover rounded-xl"
              alt=""
            />
          </div>
        </article>`;
  });
};
