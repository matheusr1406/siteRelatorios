document.addEventListener("DOMContentLoaded", function () {
  const reportForm = document.getElementById("report-form");
  const successMessage = document.getElementById("success-message");

  reportForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(reportForm);

    setTimeout(function () {
      successMessage.style.display = "block";
      reportForm.reset();
      setTimeout(function () {
        successMessage.style.display = "none";
      }, 5000);
    }, 1000);
  });
});