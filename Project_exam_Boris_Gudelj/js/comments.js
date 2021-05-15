const author = document.querySelector("#name");
const comment = document.querySelector("#comment");
const email = document.querySelector("#email");
const authorError = document.querySelector(".authorError");
const commentError = document.querySelector(".commentError");
const emailError = document.querySelector(".emailError");
const formSuccess = document.querySelector(".formSuccess");
const button = document.querySelector("button");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

comment.addEventListener("change", function () {
  postComment();
});
email.addEventListener("change", function () {
  postComment();
});
author.addEventListener("change", function () {
  postComment();
});

function postComment() {
  form.action = `https://motofiedgp.bockey.one/wp-json/wp/v2/comments?post=${id}&content=${comment.value}&author_name=${author.value}&author_email=${email.value}`;
}

async function getForm() {
  const urlForm =
    corsEnabled +
    "https://motofiedgp.bockey.one/wp-json/wp/v2/comments?post=" +
    id;
  try {
    const responseForm = await fetch(urlForm);
    const responseFormJson = await responseForm.json();
    createCommentHtml(responseFormJson);
  } catch (error) {
    console.log(error);
  }
}
getForm();

/*creating comments html on site*/
function createCommentHtml(postedComment) {
  const commentContainer = document.querySelector(".posted-messages");
  commentContainer.innerHTML = `<h3>Comments (${postedComment.length})</h3>`;
  postedComment.forEach((element) => {
    commentContainer.innerHTML += `<h4>${element.author_name}</h4>
                                  ${element.content.rendered}`;
  });
}

/*validation*/

function validateInput(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function commentValidation(event) {
  if (!validateEmail(email.value)) {
    emailError.classList.remove("visibility");
    event.preventDefault();
  } else {
    emailError.classList.add("visibility");
  }
  if (!validateInput(author.value, 3)) {
    authorError.classList.remove("visibility");
    event.preventDefault();
  } else {
    authorError.classList.add("visibility");
  }
  if (!validateInput(comment.value, 5)) {
    commentError.classList.remove("visibility");
    event.preventDefault();
  } else {
    commentError.classList.add("visibility");
  }
  if (
    validateEmail(email.value) &
    validateInput(author.value, 3) &
    validateInput(comment.value, 5)
  ) {
    formSuccess.classList.remove("visibility");
  } else {
    formSuccess.classList.add("visibility");
  }
}
form.addEventListener("submit", commentValidation);

/*adds and removes label on inputs - contact us*/

author.addEventListener("focus", function () {
  const authorLabelCreate = document.createElement("label");
  authorLabelCreate.className = "userlabel";
  authorLabelCreate.innerHTML = "Name";
  form.insertBefore(authorLabelCreate, authorError);
});
author.addEventListener("focusout", function () {
  const userLabel = document.querySelector(".userlabel");
  userLabel.remove();
});

email.addEventListener("focus", function () {
  const emailLabelCreate = document.createElement("label");
  emailLabelCreate.className = "emaillabel";
  emailLabelCreate.innerHTML = "Email";
  form.insertBefore(emailLabelCreate, emailError);
});
email.addEventListener("focusout", function () {
  const emailLabel = document.querySelector(".emaillabel");
  emailLabel.remove();
});

comment.addEventListener("focus", function () {
  const commentLabelCreate = document.createElement("label");
  commentLabelCreate.className = "commentlabel";
  commentLabelCreate.innerHTML = "Your comment";
  form.insertBefore(commentLabelCreate, commentError);
});
comment.addEventListener("focusout", function () {
  const commentLabel = document.querySelector(".commentlabel");
  commentLabel.remove();
});
