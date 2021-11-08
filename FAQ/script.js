const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    items.forEach(function (item) {
      item.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
