document.body.onload = addElement;

function Books(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const book1 = new Books(11, "Dune", "Frank Herbert", "378", true);

let myLibrary = [book1];

let addedBooks = [];

function addElement() {
  var node = document.getElementById("cards-container");
  node.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const cardStyle = document.createElement("div");
    const deleteButton = document.createElement("span");
    const bookTitle = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const pages = document.createElement("div");
    const readToggle = document.createElement("button");

    cardStyle.classList.add("card-style");
    deleteButton.classList.add("material-icons", "delete");

    cardStyle.id = myLibrary[i].id;

    bookTitle.classList.add("book-title");
    pages.classList.add("pages");
    bookAuthor.classList.add("author");
    readToggle.classList.add("read-button");

    deleteButton.textContent = "delete";
    // cardStyle.id = myLibrary[i].id;
    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = "by " + myLibrary[i].author;
    pages.textContent = myLibrary[i].pages + " Pages";
    readToggle.textContent = myLibrary[i].read ? "Read" : "Not Read";
    myLibrary[i].read
      ? readToggle.classList.add("read-button")
      : readToggle.classList.add("not-read-button");

    const currentDiv = document.getElementById("cards-container");

    currentDiv.appendChild(cardStyle);

    cardStyle.appendChild(deleteButton);
    cardStyle.appendChild(bookTitle);
    cardStyle.appendChild(bookAuthor);
    cardStyle.appendChild(pages);
    cardStyle.appendChild(readToggle);

    // deleteButton.onclick = deleteCard(this.id);
    // deleteButton.addEventListener("click", deleteCard(this.id));

    deleteButton.addEventListener(
      "click",
      function (e) {
        deleteCard(e.target.parentElement.id);
      },
      false
    );



    
    readToggle.addEventListener(
      "click",
      function (e) {
        changeToggle(e.target.parentElement.id);
      },
      false
    );
  }


  
}


function changeToggle(clickedID) {

  const found = myLibrary.findIndex((element) => element.id == clickedID);

  myLibrary[found].read = !myLibrary[found].read;

addElement();

}

function deleteCard(clickedID) {
  const found = myLibrary.findIndex((element) => element.id == clickedID);

  myLibrary.splice(found, 1);

  console.log(clickedID);
  console.log("funciona el botoncito " + myLibrary);
  //   var el = document.getElementById(clickedID);
  // el.remove();
  addElement();
}

// function addBookToLibrary(){

// }

//
//const book1 = new Books(11,"Dune", "Frank Herbert", "378", true);

const addBook = (ev) => {
  // ev.preventDefault();  //to stop the form submitting

  let book = {
    id: Date.now(), //
    title: document.getElementById("modal-title").value,
    author: document.getElementById("modal-author").value,
    pages: document.getElementById("modal-pages").value,
    read: document.getElementById("modal-read").checked,
  };

  document.forms[0].reset(); // to clear the form for the next entries
  document.querySelector("form").reset();
  myLibrary.push(book);
  addElement();
  modal.style.display = "none";

  return false;

  // //saving to localStorage
  // localStorage.setItem('MyMovieList', JSON.stringify(movies) );
};

// MODAL

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];
var closeSubmit = document.getElementsByClassName("submit")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

closeSubmit.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
