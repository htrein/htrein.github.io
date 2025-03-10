function copyToClipboard(event, text) {
  navigator.clipboard.writeText(text).then(
    function () {
      showNotification(event.target);
    },
    function (err) {
      console.error("Erro ao copiar texto: ", err);
    }
  );
}

function showNotification(element) {
  const notification = document.getElementById("copy-notification");
  const rect = element.getBoundingClientRect();
  notification.style.top = `${rect.top + window.scrollY - 30}px`;
  notification.style.left = `${rect.left + window.scrollX}px`;
  notification.classList.add("visible");
  setTimeout(() => {
    notification.classList.remove("visible");
  }, 2000);
}
