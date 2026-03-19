// js/app.js

import { createHeader } from "./header.js";
import { createMain } from "./main.js";

const container = document.querySelector(".container");

// fragment = insertion en une seule fois
const fragment = document.createDocumentFragment();

fragment.appendChild(createHeader());
fragment.appendChild(createMain());

container.appendChild(fragment);
