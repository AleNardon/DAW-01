// Get the modal
let modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function displayModal(Title,Block,classTitle) {
    modal.style.display = "block";
    let modalContent = modal.querySelector("#content");
    modalContent.innerHTML += "<h2></h2><div></div>";
    modalContent.querySelector("h2").textContent = Title;
    modalContent.querySelector("h2").classList.add(classTitle);
    modalContent.querySelector("div").innerHTML = Block;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  let modalContent = modal.querySelector("#content");
modalContent.innerHTML = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    let modalContent = modal.querySelector("#content");
    modalContent.innerHTML = "";
  }
}