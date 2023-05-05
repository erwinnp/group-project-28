const apiUrl = 'https://645348fbc18adbbdfe9933f9.mockapi.io/artikel';

const getAllArtikel = async (url) => {
  const res = await fetch(url);

  const data = await res.json();
  console.log(data);
  displayArtikel(data);
};

getAllArtikel(apiUrl);

const displayArtikel = (data) => {
  data.map((artikel) => {
    document.getElementById('article-section').innerHTML += `
    <article>
        <div class="article-wrapper">
            <figure>
                <img src=${artikel.img} alt="" />
            </figure>
            <div class="article-body">
                <p>${artikel.judul}</p>
                <!-- <p>
                    Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </p> -->
                <a href="detail_artikel.html?id=${artikel.id}" class="read-more">Read more <span class="sr-only">about this is some title</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    </article>`;
  });
};
