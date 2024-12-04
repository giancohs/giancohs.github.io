import { X as fallback, Y as bind_props, Z as stringify, _ as ensure_array_like, S as pop, Q as push } from "../../chunks/index.js";
import * as d3 from "d3";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function FilterButton($$payload, $$props) {
  let name = $$props["name"];
  let isActive = fallback($$props["isActive"], false);
  let color = $$props["color"];
  $$payload.out += `<button${attr("class", `filter-btn ${stringify(isActive ? "active" : "")} svelte-8zm0zs`)}${attr("style", `--button-color: ${stringify(color)}`)}><div class="color-dot svelte-8zm0zs"${attr("style", `background-color: ${stringify(color)}`)}></div> <span class="btn-text svelte-8zm0zs">${escape_html(name)}</span></button>`;
  bind_props($$props, { name, isActive, color });
}
function FilterButtonGroup($$payload, $$props) {
  push();
  let bandas = fallback($$props["bandas"], () => [], true);
  let selectedBanda = fallback($$props["selectedBanda"], null);
  let colorScale = $$props["colorScale"];
  const each_array = ensure_array_like(bandas);
  $$payload.out += `<div class="filter-buttons svelte-1vn2qme"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let banda = each_array[$$index];
    FilterButton($$payload, {
      name: banda,
      isActive: selectedBanda === banda,
      color: colorScale(banda)
    });
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { bandas, selectedBanda, colorScale });
  pop();
}
function Map$1($$payload, $$props) {
  push();
  let projection = d3.geoMercator().center([-78.5, -1.5]);
  d3.geoPath().projection(projection);
  const colorScale = d3.scaleOrdinal(d3.schemeSet3);
  let selectedBanda = null;
  let bandas = [];
  $$payload.out += `<div class="app-container svelte-cp9rc8"><div class="content-container svelte-cp9rc8"><h1 class="svelte-cp9rc8">Grupos Armados Organizados en Ecuador</h1> `;
  FilterButtonGroup($$payload, { bandas, selectedBanda, colorScale });
  $$payload.out += `<!----> <div class="map-container svelte-cp9rc8"></div> <p class="credit svelte-cp9rc8">Desarrollo: Gianfranco Huamán, Fuente: Policía de Ecuador</p></div></div> <div class="tooltip svelte-cp9rc8"></div>`;
  pop();
}
function _page($$payload) {
  Map$1($$payload);
}
export {
  _page as default
};
