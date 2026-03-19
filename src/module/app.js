// js/app.js

import { createHeader } from "./header.js";
import { createMain } from "./main.js";

// sélectionner le container
const container = document.querySelector(".container");

// ajouter les composants
container.appendChild(createHeader());
container.appendChild(createMain());
