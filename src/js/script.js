const changePasswordTrigger = document.getElementById(
  "change-password-trigger",
);
const passwordModal = document.getElementById("password-modal");
const closeModalBtn = document.getElementById("close-modal-btn");

if (changePasswordTrigger && passwordModal) {
  changePasswordTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    passwordModal.classList.remove("hidden");
    passwordModal.classList.add("flex");
  });

  closeModalBtn.addEventListener("click", () => {
    passwordModal.classList.add("hidden");
    passwordModal.classList.remove("flex");
  });

  // Close on click outside
  passwordModal.addEventListener("click", (e) => {
    if (e.target === passwordModal) {
      passwordModal.classList.add("hidden");
      passwordModal.classList.remove("flex");
    }
  });
}
