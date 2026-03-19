// js/main.js

export function createMain() {
  const main = document.createElement("main");
  main.className = "layout";

  main.innerHTML = `
    <section class="card">
      <h2>Contenu principal</h2>
      <p>En version mobile, cette section occupe toute la largeur.</p>
      <a href="#" class="button">Action principale</a>
    </section>

    <aside class="card">
      <h2>Barre latérale</h2>
      <p>Sur mobile, cette zone apparaît sous le contenu principal.</p>
    </aside>
  `;

  return main;
}
