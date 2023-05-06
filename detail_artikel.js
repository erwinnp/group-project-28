const apiUrl = 'https://645348fbc18adbbdfe9933f9.mockapi.io/artikel';
const params = new URLSearchParams(window.location.search);
const idArtikel = params.get('id');
const detailArticle = document.getElementById('detail-article');
const articleSource = document.getElementById('source-article');

console.log(idArtikel);

const getDetail = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((result) => {
      displayDetail(result);
    });
};

getDetail(idArtikel);

const displayDetail = (data) => {
  articleSource.innerHTML += `
    <p class="text-xl sm:text-2xl font-semibold">${data.sumber}</p>
    <p class="text-xs sm:text-[20px] text-slate-400">${data.tanggal}</p>
  `;
  detailArticle.innerHTML += `
        <div class="flex flex-col-reverse sm:relative gap-4">
          <div class="w-full h-60 sm:h-96 bg-slate-800 rounded-xl">
            <img
              src=${data.img}
              alt="main-img"
              class="w-full h-full object-cover rounded-xl opacity-40"
            />
          </div>
          <h1
            class="sm:w-2/3 sm:text-center sm:text-white text-3xl sm:text-[40px] sm:leading-relaxed font-semibold sm:absolute sm:top-28 sm:right-0 sm:bottom-0 sm:left-0 sm:m-auto"
          >
            ${data.judul}
          </h1>
        </div>
        <div class="w-full py-6 sm:py-12">
          <p class="text-base sm:text-[18px] leading-snug sm:leading-relaxed text-justify">${data.par_1}</p>
        </div>
        <div class="w-3/4 mx-auto sm:h-96">
          <img
            src=${data.img2}
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div class="w-full py-6 sm:py-12">
          <p class="text-base sm:text-[18px] leading-snug sm:leading-relaxed text-justify">${data.par_2}</p>
        </div>`;
};

const getComment = async (id) => {
  const res = await fetch(`${apiUrl}/${id}/komen`);

  const comment = await res.json();
  console.log(comment);
};

getComment(idArtikel);
