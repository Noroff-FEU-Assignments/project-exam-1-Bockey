const corsEnabled = "https://noroffcors.herokuapp.com/";

const content = document.querySelector(".imported-content");

const mainContainer = document.querySelector(".content-container");
async function getContent() {
  const urlPosts =
    corsEnabled +
    "https://motofiedgp.bockey.one/wp-json/wp/v2/posts?per_page=20";
  const urlImage =
    corsEnabled +
    "https://motofiedgp.bockey.one/wp-json/wp/v2/media?per_page=20";
  try {
    const responsePosts = await fetch(urlPosts);
    const responsePostsJson = await responsePosts.json();
    const responseImage = await fetch(urlImage);
    const responseImageJson = await responseImage.json();
    console.log(responsePostsJson);
    console.log(responseImageJson);
    content.innerHTML = "";
    createPreviewMain(responsePostsJson, responseImageJson);
    createHTMl(responsePostsJson, responseImageJson);
  } catch (error) {
    console.log(`Error is ${error}`);
    mainContainer.innerHTML = `<div class="errorApi">
                                  <h1> We are sorry</h1><br>
                                  <h2> An error occurred</h2><br>
                                  <h3>Reload page or try again later</h3>
                                </div>  `;
  }
}
getContent();

/*creates first big blog preview*/

function createPreviewMain(posts, image) {
  content.innerHTML = ` <div class="blog-preview-main">
        <img src="${image[0].source_url}" alt="${image[0].alt_text}">
        <div class="blog-preview-text">
            <h3>${posts[0].title.rendered}</h3>
            ${posts[0].excerpt.rendered}
            <a class="rectangular-button" href="/blog.html?id=${posts[0].id}"">Read more</a>
        </div>
      </div>`;
}

/*creates rest of blog previews*/

function createHTMl(posts, image) {
  let limit = 9;
  const moreButton = document.querySelector(".white-button");

  /*function for MORE-button*/

  moreButton.addEventListener("click", function () {
    content.innerHTML = "";
    limit = limit + 2;
    createPreviewMain(posts, image);
    loopRepeat();
  });
  function loopRepeat() {
    for (let i = 1; i < limit; i++) {
      if (i >= posts.length - 2) {
        moreButton.disabled = "true";
      }
      content.innerHTML += `<div class="blog-preview">
                                  <h3>${posts[i].title.rendered}</h3>
                                  <img src="${image[i].source_url}" alt="${image[i].alt_text}">
                                  ${posts[i].excerpt.rendered}
                                  <a class="rectangular-button" href="/blog.html?id=${posts[i].id}">Read more</a>
                              </div>`;
    }
  }
  loopRepeat();
}
