/*form validation - error messages*/

const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const comment = document.querySelector("#comment");
const submit = document.querySelector("#submit");

const usernameError = document.querySelector(".username-error");
const emailError = document.querySelector(".email-error");
const subjectError = document.querySelector(".subject-error");
const commentError = document.querySelector(".comment-error");
const formSuccess = document.querySelector(".form-success");
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

function submitForm(event) {
  if (!validateEmail(email.value)) {
    emailError.classList.remove("visibility");
    event.preventDefault();
  } else {
    emailError.classList.add("visibility");
  }
  if (!validateInput(username.value, 5)) {
    usernameError.classList.remove("visibility");
    event.preventDefault();
  } else {
    usernameError.classList.add("visibility");
  }
  if (!validateInput(subject.value, 15)) {
    subjectError.classList.remove("visibility");
    event.preventDefault();
  } else {
    subjectError.classList.add("visibility");
  }
  if (!validateInput(comment.value, 25)) {
    commentError.classList.remove("visibility");
    event.preventDefault();
  } else {
    commentError.classList.add("visibility");
  }
  if (
    validateEmail(email.value) &
    validateInput(username.value, 5) &
    validateInput(subject.value, 15) &
    validateInput(comment.value, 25)
  ) {
    formSuccess.classList.remove("visibility");
  } else {
    formSuccess.classList.add("visibility");
  }
  // clear all input values
  // form.reset();
}

form.addEventListener("submit", submitForm);

/*adds and removes label on inputs - contact us*/

username.addEventListener("focus", function () {
  const usernameLabelCreate = document.createElement("label");
  usernameLabelCreate.className = "userlabel";
  usernameLabelCreate.innerHTML = "Name";
  form.insertBefore(usernameLabelCreate, usernameError);
});
username.addEventListener("focusout", function () {
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

subject.addEventListener("focus", function () {
  const subjectLabelCreate = document.createElement("label");
  subjectLabelCreate.className = "subjectlabel";
  subjectLabelCreate.innerHTML = "Subject";
  form.insertBefore(subjectLabelCreate, subjectError);
});
subject.addEventListener("focusout", function () {
  const subjectLabel = document.querySelector(".subjectlabel");
  subjectLabel.remove();
});

comment.addEventListener("focus", function () {
  const commentLabelCreate = document.createElement("label");
  commentLabelCreate.className = "commentlabel";
  commentLabelCreate.innerHTML = "Your message";
  form.insertBefore(commentLabelCreate, commentError);
});
comment.addEventListener("focusout", function () {
  const commentLabel = document.querySelector(".commentlabel");
  commentLabel.remove();
});
