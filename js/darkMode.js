// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save the user's preference in localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);

  // Change the icon based on the dark mode state
  const icon = darkModeToggle.querySelector("ion-icon");
  icon.name = isDarkMode ? "moon-outline" : "sunny-outline";
});

// Check user's preference from localStorage on page load
const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode === "true") {
  body.classList.add("dark-mode");
}
