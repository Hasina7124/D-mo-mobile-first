// tableau contenant les textes
const texts = [
  "Cette page commence en version mobile à une seule colonne, puis passe en disposition desktop avec media queries.",

  "En version mobile, cette section occupe toute la largeur. C'est le comportement par défaut. À partir de 768px, la mise en page passe en deux colonnes grâce à une media query.",

  "Sur mobile, cette zone apparaît sous le contenu principal. Sur desktop, elle se place à droite.",
];

// récupérer tous les <p>
const paragraphs = document.querySelectorAll("p");

// injecter les textes
paragraphs.forEach((p, index) => {
  if (texts[index]) {
    p.textContent = texts[index];
  }
});
