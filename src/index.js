const userName = prompt("Comment tu t'appelles ?");

const title = document.querySelector(".title");

title.innerHTML = `Hello ${userName} !`;
