import { _ as __vitePreload } from './preload-helper-CqoC6PUU.js';

const cssAssetMap = {};
    const injectedCssHrefs = new Set();

    async function injectCssAssets(exposeKey) {
      if (typeof document === "undefined") {
        return;
      }

      // Replaced at build time with expose -> css asset paths.
      const cssAssets = cssAssetMap[exposeKey] || [];

      await Promise.all(
        cssAssets.map((cssAsset) => {
          const href = new URL(cssAsset, import.meta.url).href;

          // Same expose can be resolved multiple times in one page.
          if (injectedCssHrefs.has(href)) {
            return Promise.resolve();
          }
          injectedCssHrefs.add(href);

          const existingLink = document.querySelector(
            `link[rel="stylesheet"][data-mf-href="${href}"]`
          );
          if (existingLink) {
            return Promise.resolve();
          }

          return new Promise((resolve, reject) => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href;
            link.setAttribute("data-mf-href", href);
            link.onload = () => resolve();
            link.onerror = () => reject(new Error(`[Module Federation] Failed to load CSS asset: ${href}`));
            document.head.appendChild(link);
          });
        })
      );
    }

    const virtual_mfExposes_qodly_3f66514b71162727adca__components_js = {
    
        "./components": async () => {
          await injectCssAssets("./components");
          const importModule = await __vitePreload(() => import('./index-lYzh96lb.js'),true              ?[]:void 0);
          const exportModule = {};
          Object.assign(exportModule, importModule);
          Object.defineProperty(exportModule, "__esModule", {
            value: true,
            enumerable: false
          });
          return exportModule
        }
      
  };

export { virtual_mfExposes_qodly_3f66514b71162727adca__components_js as default };
