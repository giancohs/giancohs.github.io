import { S as pop, Q as push } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div class="app svelte-1yyz0dx">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _layout as default
};
