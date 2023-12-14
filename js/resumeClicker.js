const resumeModal = document.getElementById("resumeModal");
const resumeViewer = document.getElementById("resumeViewer");
const viewResumeButton = document.getElementById("viewResumeButton");
const downloadResumeButton = document.getElementById("downloadResumeButton");

viewResumeButton.addEventListener("click", () => {
  const pdfViewerUrl = "/ResumeConverted.pdf";
  resumeViewer.src = pdfViewerUrl;
  resumeModal.style.display = "block";
});

downloadResumeButton.addEventListener("click", () => {
  const resumePdfUrl = "/ResumeConverted.pdf";

  // Create a temporary anchor element
  const downloadLink = document.createElement("a");
  downloadLink.href = resumePdfUrl;
  downloadLink.download = "/ResumeConverted.pdf"; 

  // Trigger a click on the anchor element
  downloadLink.click();

  // Remove the temporary anchor element
  document.body.removeChild(downloadLink);
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
