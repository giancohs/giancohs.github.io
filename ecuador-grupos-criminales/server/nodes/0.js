

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Du7fR5Il.js","_app/immutable/chunks/disclose-version.nYL9HnXb.js","_app/immutable/chunks/runtime.DAWdQ4D7.js"];
export const stylesheets = ["_app/immutable/assets/0.CXxoGrJ3.css"];
export const fonts = [];
