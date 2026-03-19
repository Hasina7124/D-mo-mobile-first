// js/main.js

function createCard(title, text, hasButton = false) {
  const card = document.createElement("section");
  card.className = "card";

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = text;

  card.append(h2, p);

  if (hasButton) {
    const btn = document.createElement("a");
    btn.href = "#";
    btn.className = "button";
    btn.textContent = "Action principale";
    card.appendChild(btn);
  }

  return card;
}

export function createMain() {
  const main = document.createElement("main");
  main.className = "layout";

  const section = createCard(
    "Contenu principal",
    "En version mobile, cette section occupe toute la largeur.",
    true,
  );

  const aside = createCard(
    "Barre latérale",
    "Sur mobile, cette zone apparaît sous le contenu principal.",
  );

  main.append(section, aside);

  return main;
}
