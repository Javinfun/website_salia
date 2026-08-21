"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("message");
  if (target) target.textContent = "Welcome to the site";
});

function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied to clipboard: " + text);
        })
        .catch(err => {
            console.error("Copy failed:", err);
        });
}