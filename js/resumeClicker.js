// // Add this to your existing JavaScript code
// const viewResumeButton = document.getElementById("viewResumeButton");
// const downloadResumeButton = document.getElementById("downloadResumeButton");

// viewResumeButton.addEventListener("click", () => {
//   const pdfViewerUrl = "https://mozilla.github.io/pdf.js/web/viewer.html?file=path/to/your/resume.pdf";
//   window.open(pdfViewerUrl, "_blank");
// });

// downloadResumeButton.addEventListener("click", () => {
//   const resumePdfUrl = "path/to/your/resume.pdf";
//   window.location.href = resumePdfUrl;
// });

// Add this to your existing JavaScript code
const resumeModal = document.getElementById("resumeModal");
const resumeViewer = document.getElementById("resumeViewer");
const viewResumeButton = document.getElementById("viewResumeButton");
const downloadResumeButton = document.getElementById("downloadResumeButton");

viewResumeButton.addEventListener("click", () => {
  const pdfViewerUrl = "https://mozilla.github.io/pdf.js/web/viewer.html?file=path/to/your/resume.pdf";
  resumeViewer.src = pdfViewerUrl;
  resumeModal.style.display = "block";
});

downloadResumeButton.addEventListener("click", () => {
  const resumePdfUrl = "path/to/your/resume.pdf";
  window.location.href = resumePdfUrl;
});

// Close the modal when the close button is clicked
const closeModal = () => {
  resumeModal.style.display = "none";
};

const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener("click", closeModal);

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === resumeModal) {
    closeModal();
  }
});
