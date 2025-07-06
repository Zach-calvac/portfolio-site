const input = document.getElementById("new-headline");
const button = document.querySelector("#cta-form button");
const ctaHeadline = document.getElementById("cta-headline");

button.addEventListener("click", function (e) {
  e.preventDefault(); 
  ctaHeadline.textContent = input.value;
  input.value = ""; 
});