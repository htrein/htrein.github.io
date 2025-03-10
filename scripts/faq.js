document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-section dt");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isPlus = item.classList.contains("plus");
      const dd = item.nextElementSibling;

      if (isPlus) {
        item.classList.remove("plus");
        item.classList.add("minus");
        dd.style.display = "block";
      } else {
        item.classList.remove("minus");
        item.classList.add("plus");
        dd.style.display = "none";
      }
    });
  });
});
