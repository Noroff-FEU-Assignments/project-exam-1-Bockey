/*get id*/

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

/*get data*/

const corsEnabled = "https://noroffcors.herokuapp.com/";

const content = document.querySelector(".imported-content");
const mainContainer = document.querySelector(".content-container");
async function getContent() {
  const urlPosts =
    corsEnabled + "https://motofiedgp.bockey.one/wp-json/wp/v2/posts/" + id;

  try {
    const responsePosts = await fetch(urlPosts);
    const responsePostsJson = await responsePosts.json();

    /*for image modal*/
    const urlImage =
      corsEnabled +
      "https://motofiedgp.bockey.one/wp-json/wp/v2/media/" +
      responsePostsJson.featured_media;
    const responseImage = await fetch(urlImage);
    const responseImageJson = await responseImage.json();

    content.innerHTML = "";
    createHTMl(responsePostsJson);
    expand(responseImageJson);
  } catch (error) {
    mainContainer.innerHTML = `<div class="errorApi">
                                  <h1> We are sorry</h1>
                                  <h2> An error occurred</h2>
                                  <p>Reload page or try again later</p>
                                </div>  `;
  }
}
getContent();

function createHTMl(posts) {
  document.title = `Motofied | ${posts.title.rendered}`;
  let contentBrRemoved = posts.content.rendered.replaceAll(
    "<br />",
    ""
  ); /*removes space between paragraphs by removing <br> from content string*/
  content.innerHTML += `<article>
                            <h1>${posts.title.rendered}</h1>
                            <h2 class="author">Motofied GP - ${posts.date.substring(
                              0,
                              10
                            )}</h2>
                            <p>
                            ${contentBrRemoved}
                            </p>
                        </article>`;
}
