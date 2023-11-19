// search bar
const searchForm = document.querySelector(".searchBot");
const searchBox = document.querySelector("#seacrh-box");
const searchCart = document.querySelector(".shoppingCart");

document.querySelector("#seacrh-buttom").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// klik di luar
const sb = document.querySelector("#seacrh-buttom");
const tb = document.querySelector("#trash-buttom");

document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!tb.contains(e.target) && !searchCart.contains(e.target)) {
    searchCart.classList.remove("active");
  }
});
// cart
document.querySelector("#trash-buttom").onclick = (e) => {
  searchCart.classList.toggle("active");
};

// modal box
const itemsModal = document.querySelector(".modalBot");
const btnEyes = document.querySelectorAll(".icon-eye");
const closed = document.querySelector(".close");

btnEyes.forEach((btn) => {
  btn.onclick = (e) => {
    itemsModal.style.display = "flex";
    e.preventDefault();
  };
});

// close
document.querySelector(".modalBot .close").onclick = (e) => {
  itemsModal.style.display = "none";
  e.preventDefault();
};

// everywere close none

const modal = document.querySelector("#item-modal");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
