const corsEnabled = "https://noroffcors.herokuapp.com/";

const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");

const mainContainer = document.querySelector(".carousel-content");

async function getContent() {
  const urlPosts =
    corsEnabled + "https://motofiedgp.bockey.one/wp-json/wp/v2/posts";
  const urlImage =
    corsEnabled + "https://motofiedgp.bockey.one/wp-json/wp/v2/media";
  try {
    const responsePosts = await fetch(urlPosts);
    const responsePostsJson = await responsePosts.json();
    const responseImage = await fetch(urlImage);
    const responseImageJson = await responseImage.json();
    slide1.innerHTML = "";
    slide2.innerHTML = "";
    slide3.innerHTML = "";
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

/*javaScript media query*/
function createHTMl(posts, image) {
  var x = window.matchMedia("(max-width: 768px)");
  if (x.matches) {
    // If media query matches

    /*slide 1 content*/

    slide1.innerHTML = `<div class="blog-preview">
                                <h3>${posts[0].title.rendered}</h3>
                                <img src="${image[0].source_url}" alt="${image[0].alt_text}">
                                ${posts[0].excerpt.rendered}
                                <a class="rectangular-button" href="/blog.html?id=${posts[0].id}">Read more</a>
                            </div>`;
    /*slide 2 content*/

    slide2.innerHTML = `<div class="blog-preview">
                                <h3>${posts[1].title.rendered}</h3>
                                <img src="${image[1].source_url}" alt="${image[1].alt_text}">
                                ${posts[1].excerpt.rendered}
                                <a class="rectangular-button" href="/blog.html?id=${posts[1].id}">Read more</a>
                            </div>`;
    /*slide 3 content*/

    slide3.innerHTML = `<div class="blog-preview">
                                <h3>${posts[2].title.rendered}</h3>
                                <img src="${image[2].source_url}" alt="${image[2].alt_text}">
                                ${posts[2].excerpt.rendered}
                                <a class="rectangular-button" href="/blog.html?id=${posts[2].id}">Read more</a>
                            </div>`;
  } else {
    /*slide 1 content*/

    slide1.innerHTML += `<div class="blog-preview">
                                <h3>${posts[0].title.rendered}</h3>
                                <img src="${image[0].source_url}" alt="${image[0].alt_text}">
                                
                                ${posts[0].excerpt.rendered}
                                
                                <a class="rectangular-button" href="/blog.html?id=${posts[0].id}">Read more</a>
                            </div>
                            <div class="blog-preview">
                                <h3>${posts[1].title.rendered}</h3>
                                <img src="${image[1].source_url}" alt="${image[1].alt_text}">
                                
                                ${posts[1].excerpt.rendered}
                                
                                <a class="rectangular-button" href="/blog.html?id=${posts[1].id}">Read more</a>
                            </div>`;

    /*slide 2 content*/

    slide2.innerHTML += `<div class="blog-preview">
                                <h3>${posts[2].title.rendered}</h3>
                                <img src="${image[2].source_url}" alt="${image[2].alt_text}">
                                ${posts[2].excerpt.rendered}
                                <a class="rectangular-button" href="/blog.html?id=${posts[2].id}">Read more</a>
                            </div>
                            <div class="blog-preview">
                                <h3>${posts[3].title.rendered}</h3>
                                <img src="${image[3].source_url}" alt="${image[3].alt_text}">
                                ${posts[3].excerpt.rendered}
                                <a class="rectangular-button" href="/blog.html?id=${posts[3].id}">Read more</a>
                            </div>`;

    /*slide 3 content*/

    slide3.innerHTML += `<div class="blog-preview">
                                <h3>${posts[4].title.rendered}</h3>
                                <img src="${image[4].source_url}" alt="${image[4].alt_text}">
                                ${posts[4].excerpt.rendered}
                                <a class="rectangular-button" href="/blog.html?id=${posts[4].id}">Read more</a>
                            </div>
                            <div class="blog-preview">
                                <h3>${posts[5].title.rendered}</h3>
                                <img src="${image[5].source_url}" alt="${image[5].alt_text}">
                                ${posts[5].excerpt.rendered}
                                <a class="rectangular-button" href="/blog.html?id=${posts[5].id}">Read more</a>
                            </div>`;
  }
}
// window.addEventListener("resize", getContent);
/*this will give latest post even when screen size is changed in the browser (which would usually be just fine), but I commented it out because it is bugging after too much resizing which I guess will be the case now*/
