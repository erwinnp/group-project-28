const apiUrl = 'https://645348fbc18adbbdfe9933f9.mockapi.io/detail';
const params = new URLSearchParams(window.location.search);
const idArtikel = params.get('id');

console.log(idArtikel);

const getDetail = async (id) => {
  const res = await fetch(`${apiUrl}/${id}`);

  const data = await res.json();
  console.log(data);
  displayDetail(data);
};

getDetail(idArtikel);

const displayDetail = (data) => {
  document.querySelector('.body_artikel').innerHTML += `
      <div class="hero">
        <img id="img" src=${data.img} />
        <p id="judul ">${data.judul}</p>
      </div>
        <div id="par_1 ">
        <p id="par_1 ">${data.par_1}</p>
      </div>
      <img id="img2 " src=${data.img2} />
     <div class="par_2 ">
       <p id="par_2 ">${data.par_2}</p>
     </div>
     <div class="ket ">
       <p id="tanggal ">${data.tanggal}</p>
       <p id="sumber ">${data.sumber}</p>
     </div>`;
};
