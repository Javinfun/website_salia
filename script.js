"use strict";

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const bg = document.querySelector(".bg-layer");
    if (bg) {
        bg.style.transform = `translateY(${scrolled * 0.001}px)`;
    }
});

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