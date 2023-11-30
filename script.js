function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
  function downloadCV() {
    // Get the element you want to convert to PDF
    var element = document.getElementById('cv-container');

    // Generate the PDF
    html2pdf(element);

    // You can also provide options, for example:
    // html2pdf(element, { margin: 10, filename: 'cv.pdf', image: { type: 'jpeg', quality: 0.98 } });
  }
  

