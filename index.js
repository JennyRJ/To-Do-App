const ourForm = document.getElementById("ourForm");
const ourField = document.getElementById("ourField");
const ourList = document.getElementById("ourList");

ourForm.addEventListener("click", (e) => {
    e.preventDefault();
    createItem(ourField.value);
});

// createBtnEl.addEventListener("click", (e) => console.log(e));

function createItem(x) {
    let ourHtml = `<li>${x}<button onclick = "deleteItem(this)">Delete</button></li>`;
    ourList.insertAdjacentHTML("beforeend", ourHtml);
    ourField.value = "";
    ourField.focus();
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove();
}