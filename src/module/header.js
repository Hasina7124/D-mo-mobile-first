// js/header.js

export function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  const h1 = document.createElement("h1");
  h1.textContent = "Page Mobile First";

  const p = document.createElement("p");
  p.textContent =
    "Cette page commence en version mobile à une seule colonne, puis passe en desktop.";

  header.append(h1, p);

  return header;
}
