document.addEventListener("DOMContentLoaded", function () {

  let form = document.querySelector("form");
  let inputVals = document.getElementsByClassName("ins");
  let article = document.querySelector("article");

  function clearInputs() {
    for (let i = 0; i < inputVals.length; i++) {
      inputVals[i].value = "";
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let urlInput = inputVals[0].value;
    let topInput = inputVals[1].value;
    let bottomInput = inputVals[2].value;

    let newDiv = document.createElement("div");
    newDiv.className = "meme-div";

    let memeImage = document.createElement("img");
    memeImage.classList.add("image");
    memeImage.src = urlInput;

    let topText = document.createElement("div");
    topText.classList.add("topText");
    topText.innerText = topInput;
    newDiv.append(topText);

    newDiv.appendChild(memeImage);

    let bottomText = document.createElement("div");
    bottomText.classList.add("bottomText");
    bottomText.innerText = bottomInput;
    newDiv.append(bottomText);

    let delDiv = document.createElement("div");
    let delText = document.createElement("p");
    delText.classList.add("del-p");
    delText.innerText = "X";

    delDiv.classList.add("delDiv");
    delDiv.append(delText);
    newDiv.append(delDiv);

    article.appendChild(newDiv);

    clearInputs();
  });

  
  article.addEventListener("click", (e) => {
    let clickedEl = e.target.className;
if (clickedEl === "meme-div" || clickedEl === "delDiv") {
      article.removeChild(e.target);
    }
  });
});
