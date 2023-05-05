fetch('https://645348fbc18adbbdfe9933f9.mockapi.io/detail')
    .then(response => response.json())
    .then(data => {
        // update HTML elements with the data
        document.getElementById('judul').innerHTML = data[0].judul;
        document.getElementById('par_1').innerHTML = data[0].par_1;
        document.getElementById('img2').src = data[0].img2;
        document.getElementById('par_2').innerHTML = data[0].par_2;
        document.getElementById('tanggal').innerHTML = data[0].tanggal;
        document.getElementById('sumber').innerHTML = data[0].sumber;
    })

// // Select all article links
// const articleLinks = document.querySelectorAll('.article-link');

// // Add click event listener to each link
// articleLinks.forEach(link => {
//     link.addEventListener('click', event => {
//         event.preventDefault();

//         // Get article id from data-id attribute
//         const articleId = link.dataset.id;

//         // Send API request to get article data
//         fetch(`https://645348fbc18adbbdfe9933f9.mockapi.io/detail/${id}`)
//             .then(response => response.json())
//             .then(data => {
//                 // Use article data to populate detail view
//                 // Get DOM elements for article data
//                 const title = document.getElementById('judul');
//                 const par1 = document.getElementById('par_1');
//                 const par2 = document.getElementById('par_2');
//                 const img = document.getElementById('img');
//                 const img2 = document.getElementById('img2');
//                 const tanggal = document.getElementById('tanggal');
//                 const sumber = document.getElementById('sumber');

//                 // Set article data to DOM elements
//                 title.textContent = data.judul;
//                 par1.textContent = data.par_1;
//                 par2.textContent = data.par_2;
//                 img.src = data.img;
//                 img.alt = data.judul;
//                 img2.src = data.img2;
//                 img2.alt = data.judul;
//                 tanggal.textContent = data.tanggal;
//                 sumber.textContent = data.sumber;
//             })
//             .catch(error => console.log(error));
//     });
// });