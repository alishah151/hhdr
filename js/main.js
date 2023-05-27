document.addEventListener("DOMContentLoaded", function (event) {
  console.log(event);
  document.querySelectorAll(".kebab-menu").forEach(function (itm) {
    itm.addEventListener("click", function () {
      itm.classList.toggle("active");
      itm.parentElement.querySelector(".kebab-list").classList.toggle("active");
    });
    console.log(this);
  });
});
