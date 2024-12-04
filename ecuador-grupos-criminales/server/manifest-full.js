export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "ecuador-grupos-criminales/_app",
	assets: new Set(["bandas_criminales_coordenadas.geojson","favicon.png","limite_provincias_simplified.geojson"]),
	mimeTypes: {".geojson":"application/geo+json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CGPm6OrY.js","app":"_app/immutable/entry/app.BrY29s3W.js","imports":["_app/immutable/entry/start.CGPm6OrY.js","_app/immutable/chunks/entry.Cek8-m0C.js","_app/immutable/chunks/runtime.DAWdQ4D7.js","_app/immutable/entry/app.BrY29s3W.js","_app/immutable/chunks/runtime.DAWdQ4D7.js","_app/immutable/chunks/store.CS569Asc.js","_app/immutable/chunks/disclose-version.nYL9HnXb.js","_app/immutable/chunks/index-client.DGiIWfe9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
