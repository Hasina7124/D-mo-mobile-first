// js/header.js

export function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <h1>Page Mobile First</h1>
    <p>Cette page commence en version mobile à une seule colonne, puis passe en desktop.</p>
  `;

  return header;
}
