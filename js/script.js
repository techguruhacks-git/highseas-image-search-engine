const searchForm = document.getElementById("search");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const Showbtn = document.getElementById("show-more-btn");

const AccessToken = "AAkPTg39lE65STC90a-UYRKXT5T8THI1ZsU3f_meG1g";

let keyword = "";
let page = 1;


async function SearchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/collections?page=1&query=${keyword}&client_id=${AccessToken}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    console.log(results);

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.cover_photo.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.cover_photo.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);


    })
}
searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    SearchImages();
    searchResult.style.display = "grid";

});



