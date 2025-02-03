import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_DAqzDwQc.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/programacion%20JavaScript/repositorios/portafolio/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Le_jyI2D.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/programacion JavaScript/repositorios/portafolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DJIkoQuc.mjs","C:/programacion JavaScript/repositorios/portafolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B0ERaEjk.mjs","C:/programacion JavaScript/repositorios/portafolio/src/components/sections/hero/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.CjOhKzWz.js","C:/programacion JavaScript/repositorios/portafolio/src/components/layouts/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DaTsLl9L.js","C:/programacion JavaScript/repositorios/portafolio/src/components/sections/projects/Game2048.astro?astro&type=script&index=0&lang.ts":"_astro/Game2048.astro_astro_type_script_index_0_lang.CYIlOKQJ.js","C:/programacion JavaScript/repositorios/portafolio/src/components/sections/projects/AnalogicClock.astro?astro&type=script&index=0&lang.ts":"_astro/AnalogicClock.astro_astro_type_script_index_0_lang.BWrMpUBr.js","C:/programacion JavaScript/repositorios/portafolio/src/utils/2048/Game.ts":"_astro/Game.BT4OHnF0.js","C:/programacion JavaScript/repositorios/portafolio/src/utils/AnalogicClock/Clock.ts":"_astro/Clock.BvA0nGfB.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/programacion JavaScript/repositorios/portafolio/src/components/sections/hero/Hero.astro?astro&type=script&index=0&lang.ts","const o=()=>{const t=document.getElementById(\"fadeElement\");if(!t)return;const e=window.scrollY,n=Math.max(1-e/300,0);t.style.opacity=n.toString()};typeof window<\"u\"&&window.addEventListener(\"scroll\",o);"],["C:/programacion JavaScript/repositorios/portafolio/src/components/layouts/Header.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"menu-mobile\"),l=document.getElementById(\"menu-close\"),e=document.getElementById(\"nav-mobile\");t?.addEventListener(\"click\",()=>{e?.classList.toggle(\"translate-y-full\"),e?.classList.toggle(\"opacity-0\")});l?.addEventListener(\"click\",()=>{e?.classList.toggle(\"opacity-0\"),e?.classList.toggle(\"translate-y-full\")});"]],"assets":["/_astro/baloo-paaji-2-vietnamese-wght-normal.DUvvXk1I.woff2","/_astro/baloo-paaji-2-gurmukhi-wght-normal.CSN8nSWN.woff2","/_astro/baloo-paaji-2-latin-wght-normal.CoVofIY-.woff2","/_astro/baloo-paaji-2-latin-ext-wght-normal.B7oGV23a.woff2","/_astro/index.Le_jyI2D.css","/images/foto-hero.png","/images/logo.png","/images/work-1.png","/_astro/AnalogicClock.astro_astro_type_script_index_0_lang.BWrMpUBr.js","/_astro/Clock.BvA0nGfB.js","/_astro/Game.BT4OHnF0.js","/_astro/Game2048.astro_astro_type_script_index_0_lang.CYIlOKQJ.js","/_astro/preload-helper.CLcXU_4U.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"puvbUT60hnGhBxXCue2stZkfZc5uDEE3DAjh7ioO5GQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
