const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const comments = document.getElementById("comments");
const feedbackDisplay = document.getElementById("feedback-display");

function createTooltip(text) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = text;
  tooltip.style.position = "absolute";
  tooltip.style.background = "#333";
  tooltip.style.color = "#fff";
  tooltip.style.padding = "5px";
  tooltip.style.borderRadius = "4px";
  tooltip.style.fontSize = "0.8rem";
  tooltip.style.pointerEvents = "none";
  tooltip.style.zIndex = "10";
  document.body.appendChild(tooltip);
  return tooltip;
}

function attachTooltipEvents(input, message) {
  let tooltip;

  input.addEventListener("mouseover", (e) => {
    tooltip = createTooltip(message);
    const rect = input.getBoundingClientRect();
    tooltip.style.top = rect.top + window.scrollY - 30 + "px";
    tooltip.style.left = rect.left + window.scrollX + "px";
  });

  input.addEventListener("mouseout", () => {
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  });
}

attachTooltipEvents(username, "Enter your full name");
attachTooltipEvents(email, "Enter a valid email address");
attachTooltipEvents(comments, "Share your feedback (max 500 characters)");

comments.addEventListener("input", () => {
  let charCount = document.getElementById("char-count");
  if (!charCount) {
    charCount = document.createElement("p");
    charCount.id = "char-count";
    comments.insertAdjacentElement("afterend", charCount);
  }
  charCount.textContent = `Characters: ${comments.value.length}`;
});

document.body.addEventListener("click", (e) => {
  if (form.contains(e.target)) {
    return;
  }

  e.stopPropagation();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelectorAll(".error").forEach(el => el.remove());

  let isValid = true;

  [username, email, comments].forEach((field) => {
    if (field.value.trim() === "") {
      const error = document.createElement("p");
      error.className = "error";
      error.style.color = "red";
      error.textContent = `${field.name} is required.`;
      field.insertAdjacentElement("afterend", error);
      isValid = false;
    }
  });

  if (!isValid) return;

  const entry = document.createElement("div");
  entry.className = "feedback-entry";
  entry.innerHTML = `
    <p><strong>Name:</strong> ${username.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Comment:</strong> ${comments.value}</p>
    <hr/>
  `;
  feedbackDisplay.appendChild(entry);

  form.reset();
  const charCount = document.getElementById("char-count");
  if (charCount) charCount.textContent = "";
});