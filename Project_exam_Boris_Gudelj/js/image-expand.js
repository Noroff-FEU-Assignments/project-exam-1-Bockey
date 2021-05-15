/*expanding image function*/

function expand(media) {
  const artImage = document.querySelector("article img");
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal-img");
  const modalClose = document.querySelector(".modal-close");

  modalImage.innerHTML += `<img src="${media.source_url}" alt="${media.alt_text}">`;
  artImage.addEventListener("click", function () {
    modalImage.style.display = "flex";
    modal.style.display = "flex";
    modalClose.style.display = "block";
  });
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    modalImage.style.display = "none";
    modalClose.style.display = "none";
  });
  modal.addEventListener("click", function () {
    modal.style.display = "none";
    modalImage.style.display = "none";
    modalClose.style.display = "none";
  });
}
