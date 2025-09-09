// Select the toggle button
const toggleBtn = document.getElementById("darkModeToggle");

// Check localStorage for saved preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle dark mode on click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
