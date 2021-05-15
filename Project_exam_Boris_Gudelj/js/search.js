const searchButton = document.querySelector(".search-button");
const searchButtonActive = document.querySelector(".search-button-active");
const searchInput = document.querySelector(".search-input");
const searchBox = document.querySelector(".search-box");
const navigation = document.querySelector("nav");
const menuButton = document.querySelector(".menu-button");
const menuName = document.querySelector(".menu p");
const header = document.querySelector("header");
const searchContainer = document.querySelector(".search-results-container");

searchButton.addEventListener("click", function () {
  openSearch();
  searchInput.focus();
});
searchButtonActive.addEventListener("click", function () {
  closeSearch();
});

function openSearch() {
  searchInput.classList.remove("visibility");
  searchButton.classList.add("visibility");
  searchButtonActive.classList.remove("visibility");
  menuButton.classList.add("visibility");
  menuName.classList.add("visibility");
  searchContainer.style.display = "flex";
}

function closeSearch() {
  searchInput.classList.add("visibility");
  searchButton.classList.remove("visibility");
  searchButtonActive.classList.add("visibility");
  menuButton.classList.remove("visibility");
  menuName.classList.remove("visibility");
  searchContainer.style.display = "none";
}

let responseSearch = [];

searchInput.addEventListener("keyup", function (e) {
  // console.log(e.target.value);
  const filteredPosts = responseSearch.filter((post) => {
    return (
      post.content.rendered
        .toLowerCase()
        .includes(e.target.value.toLowerCase()) ||
      post.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
    );
  });
  // console.log(filteredPosts);
  createSearchResults(filteredPosts);
});

async function getSearchContent() {
  const urlPosts =
    "https://noroffcors.herokuapp.com/" +
    "https://motofiedgp.bockey.one/wp-json/wp/v2/posts?per_page=20";
  try {
    const responsePosts = await fetch(urlPosts);
    responseSearch = await responsePosts.json();
  } catch (error) {
    console.log(`Error is ${error}`);
  }
}

function createSearchResults(posts) {
  const searchResult = posts
    .map((posts) => {
      return `<a href="blog.html?id=${posts.id}" class="search-results">
                <p>${posts.title.rendered}</p>
              </a>  `;
    })
    .join("");
  searchContainer.innerHTML = searchResult;
  if (searchContainer.innerHTML === "") {
    searchContainer.innerHTML = `<p class="search-results">Nothing here matches your search</p>`;
  }
}

getSearchContent();
