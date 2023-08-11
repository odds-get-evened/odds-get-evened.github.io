// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lmKb7":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"adjPd":[function(require,module,exports) {
const opengpg = require("a24098762d86638d");
const opengpgApp = document.getElementById("opengpg");
const genKeyBtn = document.getElementById("genKeyBtn");
genKeyBtn.disabled = true;
genKeyBtn.addEventListener("click", (evt)=>{});

},{"a24098762d86638d":"8GG2J"}],"8GG2J":[function(require,module,exports) {
/*! OpenPGP.js v5.9.0 - 2023-05-15 - this is LGPL licensed code, see LICENSE/our website https://openpgpjs.org/ for more information. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AEADEncryptedDataPacket", ()=>mu);
parcelHelpers.export(exports, "CleartextMessage", ()=>kh);
parcelHelpers.export(exports, "CompressedDataPacket", ()=>su);
parcelHelpers.export(exports, "LiteralDataPacket", ()=>Xc);
parcelHelpers.export(exports, "MarkerPacket", ()=>Su);
parcelHelpers.export(exports, "Message", ()=>bh);
parcelHelpers.export(exports, "OnePassSignaturePacket", ()=>ru);
parcelHelpers.export(exports, "PacketList", ()=>nu);
parcelHelpers.export(exports, "PrivateKey", ()=>ah);
parcelHelpers.export(exports, "PublicKey", ()=>nh);
parcelHelpers.export(exports, "PublicKeyEncryptedSessionKeyPacket", ()=>gu);
parcelHelpers.export(exports, "PublicKeyPacket", ()=>_u);
parcelHelpers.export(exports, "PublicSubkeyPacket", ()=>Eu);
parcelHelpers.export(exports, "SecretKeyPacket", ()=>xu);
parcelHelpers.export(exports, "SecretSubkeyPacket", ()=>Du);
parcelHelpers.export(exports, "Signature", ()=>Iu);
parcelHelpers.export(exports, "SignaturePacket", ()=>eu);
parcelHelpers.export(exports, "Subkey", ()=>Ju);
parcelHelpers.export(exports, "SymEncryptedIntegrityProtectedDataPacket", ()=>yu);
parcelHelpers.export(exports, "SymEncryptedSessionKeyPacket", ()=>vu);
parcelHelpers.export(exports, "SymmetricallyEncryptedDataPacket", ()=>Au);
parcelHelpers.export(exports, "TrustPacket", ()=>Ru);
parcelHelpers.export(exports, "UnparseablePacket", ()=>mn);
parcelHelpers.export(exports, "UserAttributePacket", ()=>Pu);
parcelHelpers.export(exports, "UserIDPacket", ()=>Ku);
parcelHelpers.export(exports, "armor", ()=>le);
parcelHelpers.export(exports, "config", ()=>ne);
parcelHelpers.export(exports, "createCleartextMessage", ()=>Sh);
parcelHelpers.export(exports, "createMessage", ()=>vh);
parcelHelpers.export(exports, "decrypt", ()=>Dh);
parcelHelpers.export(exports, "decryptKey", ()=>Mh);
parcelHelpers.export(exports, "decryptSessionKeys", ()=>Th);
parcelHelpers.export(exports, "encrypt", ()=>Kh);
parcelHelpers.export(exports, "encryptKey", ()=>Ch);
parcelHelpers.export(exports, "encryptSessionKey", ()=>Bh);
parcelHelpers.export(exports, "enums", ()=>ie);
parcelHelpers.export(exports, "generateKey", ()=>Eh);
parcelHelpers.export(exports, "generateSessionKey", ()=>Ih);
parcelHelpers.export(exports, "readCleartextMessage", ()=>Ah);
parcelHelpers.export(exports, "readKey", ()=>uh);
parcelHelpers.export(exports, "readKeys", ()=>dh);
parcelHelpers.export(exports, "readMessage", ()=>wh);
parcelHelpers.export(exports, "readPrivateKey", ()=>hh);
parcelHelpers.export(exports, "readPrivateKeys", ()=>fh);
parcelHelpers.export(exports, "readSignature", ()=>Bu);
parcelHelpers.export(exports, "reformatKey", ()=>Ph);
parcelHelpers.export(exports, "revokeKey", ()=>xh);
parcelHelpers.export(exports, "sign", ()=>Rh);
parcelHelpers.export(exports, "unarmor", ()=>fe);
parcelHelpers.export(exports, "verify", ()=>Uh);
var global = arguments[3];
const e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, t = Symbol("doneWritingPromise"), r = Symbol("doneWritingResolve"), i = Symbol("doneWritingReject"), n = Symbol("readingIndex");
class a extends Array {
    constructor(){
        super(), this[t] = new Promise((e, t)=>{
            this[r] = e, this[i] = t;
        }), this[t].catch(()=>{});
    }
}
function s(e) {
    return e && e.getReader && Array.isArray(e);
}
function o(e) {
    if (!s(e)) {
        const t = e.getWriter(), r = t.releaseLock;
        return t.releaseLock = ()=>{
            t.closed.catch(function() {}), r.call(t);
        }, t;
    }
    this.stream = e;
}
a.prototype.getReader = function() {
    return void 0 === this[n] && (this[n] = 0), {
        read: async ()=>(await this[t], this[n] === this.length ? {
                value: void 0,
                done: !0
            } : {
                value: this[this[n]++],
                done: !1
            })
    };
}, a.prototype.readToEnd = async function(e) {
    await this[t];
    const r = e(this.slice(this[n]));
    return this.length = 0, r;
}, a.prototype.clone = function() {
    const e = new a;
    return e[t] = this[t].then(()=>{
        e.push(...this);
    }), e;
}, o.prototype.write = async function(e) {
    this.stream.push(e);
}, o.prototype.close = async function() {
    this.stream[r]();
}, o.prototype.abort = async function(e) {
    return this.stream[i](e), e;
}, o.prototype.releaseLock = function() {};
const c = "object" == typeof e.process && "object" == typeof e.process.versions, u = c && void 0;
function h(t) {
    return s(t) ? "array" : e.ReadableStream && e.ReadableStream.prototype.isPrototypeOf(t) ? "web" : k && k.prototype.isPrototypeOf(t) ? "ponyfill" : u && u.prototype.isPrototypeOf(t) ? "node" : !(!t || !t.getReader) && "web-like";
}
function d(e) {
    return Uint8Array.prototype.isPrototypeOf(e);
}
function f(e) {
    if (1 === e.length) return e[0];
    let t = 0;
    for(let r = 0; r < e.length; r++){
        if (!d(e[r])) throw Error("concatUint8Array: Data must be in the form of a Uint8Array");
        t += e[r].length;
    }
    const r = new Uint8Array(t);
    let i = 0;
    return e.forEach(function(e) {
        r.set(e, i), i += e.length;
    }), r;
}
const l = c && void 0, p = c && void 0;
let y, b;
if (p) {
    y = function(e) {
        let t = !1;
        return new k({
            start (r) {
                e.pause(), e.on("data", (i)=>{
                    t || (l.isBuffer(i) && (i = new Uint8Array(i.buffer, i.byteOffset, i.byteLength)), r.enqueue(i), e.pause());
                }), e.on("end", ()=>{
                    t || r.close();
                }), e.on("error", (e)=>r.error(e));
            },
            pull () {
                e.resume();
            },
            cancel (r) {
                t = !0, e.destroy(r);
            }
        });
    };
    class e extends p {
        constructor(e, t){
            super(t), this._reader = K(e);
        }
        async _read(e) {
            try {
                for(;;){
                    const { done: e, value: t } = await this._reader.read();
                    if (e) {
                        this.push(null);
                        break;
                    }
                    if (!this.push(t) || this._cancelling) {
                        this._reading = !1;
                        break;
                    }
                }
            } catch (e) {
                this.emit("error", e);
            }
        }
        _destroy(e) {
            this._reader.cancel(e);
        }
    }
    b = function(t, r) {
        return new e(t, r);
    };
}
const m = new WeakSet, g = Symbol("externalBuffer");
function w(e) {
    if (this.stream = e, e[g] && (this[g] = e[g].slice()), s(e)) {
        const t = e.getReader();
        return this._read = t.read.bind(t), this._releaseLock = ()=>{}, void (this._cancel = ()=>{});
    }
    let t = h(e);
    if ("node" === t && (e = y(e)), t) {
        const t = e.getReader();
        return this._read = t.read.bind(t), this._releaseLock = ()=>{
            t.closed.catch(function() {}), t.releaseLock();
        }, void (this._cancel = t.cancel.bind(t));
    }
    let r = !1;
    this._read = async ()=>r || m.has(e) ? {
            value: void 0,
            done: !0
        } : (r = !0, {
            value: e,
            done: !1
        }), this._releaseLock = ()=>{
        if (r) try {
            m.add(e);
        } catch (e) {}
    };
}
w.prototype.read = async function() {
    if (this[g] && this[g].length) return {
        done: !1,
        value: this[g].shift()
    };
    return this._read();
}, w.prototype.releaseLock = function() {
    this[g] && (this.stream[g] = this[g]), this._releaseLock();
}, w.prototype.cancel = function(e) {
    return this._cancel(e);
}, w.prototype.readLine = async function() {
    let e, t = [];
    for(; !e;){
        let { done: r, value: i } = await this.read();
        if (i += "", r) return t.length ? C(t) : void 0;
        const n = i.indexOf("\n") + 1;
        n && (e = C(t.concat(i.substr(0, n))), t = []), n !== i.length && t.push(i.substr(n));
    }
    return this.unshift(...t), e;
}, w.prototype.readByte = async function() {
    const { done: e, value: t } = await this.read();
    if (e) return;
    const r = t[0];
    return this.unshift(N(t, 1)), r;
}, w.prototype.readBytes = async function(e) {
    const t = [];
    let r = 0;
    for(;;){
        const { done: i, value: n } = await this.read();
        if (i) return t.length ? C(t) : void 0;
        if (t.push(n), r += n.length, r >= e) {
            const r = C(t);
            return this.unshift(N(r, e)), N(r, 0, e);
        }
    }
}, w.prototype.peekBytes = async function(e) {
    const t = await this.readBytes(e);
    return this.unshift(t), t;
}, w.prototype.unshift = function(...e) {
    this[g] || (this[g] = []), 1 === e.length && d(e[0]) && this[g].length && e[0].length && this[g][0].byteOffset >= e[0].length ? this[g][0] = new Uint8Array(this[g][0].buffer, this[g][0].byteOffset - e[0].length, this[g][0].byteLength + e[0].length) : this[g].unshift(...e.filter((e)=>e && e.length));
}, w.prototype.readToEnd = async function(e = C) {
    const t = [];
    for(;;){
        const { done: e, value: r } = await this.read();
        if (e) break;
        t.push(r);
    }
    return e(t);
};
let v, _, { ReadableStream: k, WritableStream: A, TransformStream: S } = e;
async function E() {
    if (S) return;
    const [t, r] = await Promise.all([
        Promise.resolve().then(function() {
            return xp;
        }),
        Promise.resolve().then(function() {
            return $p;
        })
    ]);
    ({ ReadableStream: k, WritableStream: A, TransformStream: S } = t);
    const { createReadableStreamWrapper: i } = r;
    e.ReadableStream && k !== e.ReadableStream && (v = i(k), _ = i(e.ReadableStream));
}
const P = c && void 0;
function x(e) {
    let t = h(e);
    return "node" === t ? y(e) : "web" === t && v ? v(e) : t ? e : new k({
        start (t) {
            t.enqueue(e), t.close();
        }
    });
}
function M(e) {
    if (h(e)) return e;
    const t = new a;
    return (async ()=>{
        const r = D(t);
        await r.write(e), await r.close();
    })(), t;
}
function C(e) {
    return e.some((e)=>h(e) && !s(e)) ? function(e) {
        e = e.map(x);
        const t = I(async function(e) {
            await Promise.all(i.map((t)=>L(t, e)));
        });
        let r = Promise.resolve();
        const i = e.map((i, n)=>T(i, (i, a)=>(r = r.then(()=>R(i, t.writable, {
                        preventClose: n !== e.length - 1
                    })), r)));
        return t.readable;
    }(e) : e.some((e)=>s(e)) ? function(e) {
        const t = new a;
        let r = Promise.resolve();
        return e.forEach((i, n)=>(r = r.then(()=>R(i, t, {
                    preventClose: n !== e.length - 1
                })), r)), t;
    }(e) : "string" == typeof e[0] ? e.join("") : P && P.isBuffer(e[0]) ? P.concat(e) : f(e);
}
function K(e) {
    return new w(e);
}
function D(e) {
    return new o(e);
}
async function R(e, t, { preventClose: r = !1, preventAbort: i = !1, preventCancel: n = !1 } = {}) {
    if (h(e) && !s(e)) {
        e = x(e);
        try {
            if (e[g]) {
                const r = D(t);
                for(let t = 0; t < e[g].length; t++)await r.ready, await r.write(e[g][t]);
                r.releaseLock();
            }
            await e.pipeTo(t, {
                preventClose: r,
                preventAbort: i,
                preventCancel: n
            });
        } catch (e) {}
        return;
    }
    const a = K(e = M(e)), o = D(t);
    try {
        for(;;){
            await o.ready;
            const { done: e, value: t } = await a.read();
            if (e) {
                r || await o.close();
                break;
            }
            await o.write(t);
        }
    } catch (e) {
        i || await o.abort(e);
    } finally{
        a.releaseLock(), o.releaseLock();
    }
}
function U(e, t) {
    const r = new S(t);
    return R(e, r.writable), r.readable;
}
function I(e) {
    let t, r, i = !1;
    return {
        readable: new k({
            start (e) {
                r = e;
            },
            pull () {
                t ? t() : i = !0;
            },
            cancel: e
        }, {
            highWaterMark: 0
        }),
        writable: new A({
            write: async function(e) {
                r.enqueue(e), i ? i = !1 : (await new Promise((e)=>{
                    t = e;
                }), t = null);
            },
            close: r.close.bind(r),
            abort: r.error.bind(r)
        })
    };
}
function B(e, t = ()=>{}, r = ()=>{}) {
    if (s(e)) {
        const i = new a;
        return (async ()=>{
            const n = D(i);
            try {
                const i = await j(e), a = t(i), s = r();
                let o;
                o = void 0 !== a && void 0 !== s ? C([
                    a,
                    s
                ]) : void 0 !== a ? a : s, await n.write(o), await n.close();
            } catch (e) {
                await n.abort(e);
            }
        })(), i;
    }
    if (h(e)) return U(e, {
        async transform (e, r) {
            try {
                const i = await t(e);
                void 0 !== i && r.enqueue(i);
            } catch (e) {
                r.error(e);
            }
        },
        async flush (e) {
            try {
                const t = await r();
                void 0 !== t && e.enqueue(t);
            } catch (t) {
                e.error(t);
            }
        }
    });
    const i = t(e), n = r();
    return void 0 !== i && void 0 !== n ? C([
        i,
        n
    ]) : void 0 !== i ? i : n;
}
function T(e, t) {
    if (h(e) && !s(e)) {
        let r;
        const i = new S({
            start (e) {
                r = e;
            }
        }), n = R(e, i.writable), a = I(async function(e) {
            r.error(e), await n, await new Promise(setTimeout);
        });
        return t(i.readable, a.writable), a.readable;
    }
    e = M(e);
    const r = new a;
    return t(e, r), r;
}
function z(e, t) {
    let r;
    const i = T(e, (e, n)=>{
        const a = K(e);
        a.remainder = ()=>(a.releaseLock(), R(e, n), i), r = t(a);
    });
    return r;
}
function q(e) {
    if (s(e)) return e.clone();
    if (h(e)) {
        const t = function(e) {
            if (s(e)) throw Error("ArrayStream cannot be tee()d, use clone() instead");
            if (h(e)) {
                const t = x(e).tee();
                return t[0][g] = t[1][g] = e[g], t;
            }
            return [
                N(e),
                N(e)
            ];
        }(e);
        return O(e, t[0]), t[1];
    }
    return N(e);
}
function F(e) {
    return s(e) ? q(e) : h(e) ? new k({
        start (t) {
            const r = T(e, async (e, r)=>{
                const i = K(e), n = D(r);
                try {
                    for(;;){
                        await n.ready;
                        const { done: e, value: r } = await i.read();
                        if (e) {
                            try {
                                t.close();
                            } catch (e) {}
                            return void await n.close();
                        }
                        try {
                            t.enqueue(r);
                        } catch (e) {}
                        await n.write(r);
                    }
                } catch (e) {
                    t.error(e), await n.abort(e);
                }
            });
            O(e, r);
        }
    }) : N(e);
}
function O(e, t) {
    Object.entries(Object.getOwnPropertyDescriptors(e.constructor.prototype)).forEach(([r, i])=>{
        "constructor" !== r && (i.value ? i.value = i.value.bind(t) : i.get = i.get.bind(t), Object.defineProperty(e, r, i));
    });
}
function N(e, t = 0, r = 1 / 0) {
    if (s(e)) throw Error("Not implemented");
    if (h(e)) {
        if (t >= 0 && r >= 0) {
            let i = 0;
            return U(e, {
                transform (e, n) {
                    i < r ? (i + e.length >= t && n.enqueue(N(e, Math.max(t - i, 0), r - i)), i += e.length) : n.terminate();
                }
            });
        }
        if (t < 0 && (r < 0 || r === 1 / 0)) {
            let i = [];
            return B(e, (e)=>{
                e.length >= -t ? i = [
                    e
                ] : i.push(e);
            }, ()=>N(C(i), t, r));
        }
        if (0 === t && r < 0) {
            let i;
            return B(e, (e)=>{
                const n = i ? C([
                    i,
                    e
                ]) : e;
                if (n.length >= -r) return i = N(n, r), N(n, t, r);
                i = n;
            });
        }
        return console.warn(`stream.slice(input, ${t}, ${r}) not implemented efficiently.`), W(async ()=>N(await j(e), t, r));
    }
    return e[g] && (e = C(e[g].concat([
        e
    ]))), !d(e) || P && P.isBuffer(e) ? e.slice(t, r) : (r === 1 / 0 && (r = e.length), e.subarray(t, r));
}
async function j(e, t = C) {
    return s(e) ? e.readToEnd(t) : h(e) ? K(e).readToEnd(t) : e;
}
async function L(e, t) {
    if (h(e)) {
        if (e.cancel) return e.cancel(t);
        if (e.destroy) return e.destroy(t), await new Promise(setTimeout), t;
    }
}
function W(e) {
    const t = new a;
    return (async ()=>{
        const r = D(t);
        try {
            await r.write(await e()), await r.close();
        } catch (e) {
            await r.abort(e);
        }
    })(), t;
}
class H {
    constructor(e){
        if (void 0 === e) throw Error("Invalid BigInteger input");
        if (e instanceof Uint8Array) {
            const t = e, r = Array(t.length);
            for(let e = 0; e < t.length; e++){
                const i = t[e].toString(16);
                r[e] = t[e] <= 15 ? "0" + i : i;
            }
            this.value = BigInt("0x0" + r.join(""));
        } else this.value = BigInt(e);
    }
    clone() {
        return new H(this.value);
    }
    iinc() {
        return this.value++, this;
    }
    inc() {
        return this.clone().iinc();
    }
    idec() {
        return this.value--, this;
    }
    dec() {
        return this.clone().idec();
    }
    iadd(e) {
        return this.value += e.value, this;
    }
    add(e) {
        return this.clone().iadd(e);
    }
    isub(e) {
        return this.value -= e.value, this;
    }
    sub(e) {
        return this.clone().isub(e);
    }
    imul(e) {
        return this.value *= e.value, this;
    }
    mul(e) {
        return this.clone().imul(e);
    }
    imod(e) {
        return this.value %= e.value, this.isNegative() && this.iadd(e), this;
    }
    mod(e) {
        return this.clone().imod(e);
    }
    modExp(e, t) {
        if (t.isZero()) throw Error("Modulo cannot be zero");
        if (t.isOne()) return new H(0);
        if (e.isNegative()) throw Error("Unsopported negative exponent");
        let r = e.value, i = this.value;
        i %= t.value;
        let n = BigInt(1);
        for(; r > BigInt(0);){
            const e = r & BigInt(1);
            r >>= BigInt(1);
            const a = n * i % t.value;
            n = e ? a : n, i = i * i % t.value;
        }
        return new H(n);
    }
    modInv(e) {
        const { gcd: t, x: r } = this._egcd(e);
        if (!t.isOne()) throw Error("Inverse does not exist");
        return r.add(e).mod(e);
    }
    _egcd(e) {
        let t = BigInt(0), r = BigInt(1), i = BigInt(1), n = BigInt(0), a = this.value;
        for(e = e.value; e !== BigInt(0);){
            const s = a / e;
            let o = t;
            t = i - s * t, i = o, o = r, r = n - s * r, n = o, o = e, e = a % e, a = o;
        }
        return {
            x: new H(i),
            y: new H(n),
            gcd: new H(a)
        };
    }
    gcd(e) {
        let t = this.value;
        for(e = e.value; e !== BigInt(0);){
            const r = e;
            e = t % e, t = r;
        }
        return new H(t);
    }
    ileftShift(e) {
        return this.value <<= e.value, this;
    }
    leftShift(e) {
        return this.clone().ileftShift(e);
    }
    irightShift(e) {
        return this.value >>= e.value, this;
    }
    rightShift(e) {
        return this.clone().irightShift(e);
    }
    equal(e) {
        return this.value === e.value;
    }
    lt(e) {
        return this.value < e.value;
    }
    lte(e) {
        return this.value <= e.value;
    }
    gt(e) {
        return this.value > e.value;
    }
    gte(e) {
        return this.value >= e.value;
    }
    isZero() {
        return this.value === BigInt(0);
    }
    isOne() {
        return this.value === BigInt(1);
    }
    isNegative() {
        return this.value < BigInt(0);
    }
    isEven() {
        return !(this.value & BigInt(1));
    }
    abs() {
        const e = this.clone();
        return this.isNegative() && (e.value = -e.value), e;
    }
    toString() {
        return this.value.toString();
    }
    toNumber() {
        const e = Number(this.value);
        if (e > Number.MAX_SAFE_INTEGER) throw Error("Number can only safely store up to 53 bits");
        return e;
    }
    getBit(e) {
        return (this.value >> BigInt(e) & BigInt(1)) === BigInt(0) ? 0 : 1;
    }
    bitLength() {
        const e = new H(0), t = new H(1), r = new H(-1), i = this.isNegative() ? r : e;
        let n = 1;
        const a = this.clone();
        for(; !a.irightShift(t).equal(i);)n++;
        return n;
    }
    byteLength() {
        const e = new H(0), t = new H(-1), r = this.isNegative() ? t : e, i = new H(8);
        let n = 1;
        const a = this.clone();
        for(; !a.irightShift(i).equal(r);)n++;
        return n;
    }
    toUint8Array(e = "be", t) {
        let r = this.value.toString(16);
        r.length % 2 == 1 && (r = "0" + r);
        const i = r.length / 2, n = new Uint8Array(t || i), a = t ? t - i : 0;
        let s = 0;
        for(; s < i;)n[s + a] = parseInt(r.slice(2 * s, 2 * s + 2), 16), s++;
        return "be" !== e && n.reverse(), n;
    }
}
const G = ()=>"undefined" != typeof BigInt;
const V = (()=>{
    try {
        return true;
    } catch (e) {}
    return !1;
})(), $ = {
    isString: function(e) {
        return "string" == typeof e || e instanceof String;
    },
    isArray: function(e) {
        return e instanceof Array;
    },
    isUint8Array: d,
    isStream: h,
    readNumber: function(e) {
        let t = 0;
        for(let r = 0; r < e.length; r++)t += 256 ** r * e[e.length - 1 - r];
        return t;
    },
    writeNumber: function(e, t) {
        const r = new Uint8Array(t);
        for(let i = 0; i < t; i++)r[i] = e >> 8 * (t - i - 1) & 255;
        return r;
    },
    readDate: function(e) {
        const t = $.readNumber(e);
        return new Date(1e3 * t);
    },
    writeDate: function(e) {
        const t = Math.floor(e.getTime() / 1e3);
        return $.writeNumber(t, 4);
    },
    normalizeDate: function(e = Date.now()) {
        return null === e || e === 1 / 0 ? e : new Date(1e3 * Math.floor(+e / 1e3));
    },
    readMPI: function(e) {
        const t = (e[0] << 8 | e[1]) + 7 >>> 3;
        return e.subarray(2, 2 + t);
    },
    leftPad (e, t) {
        const r = new Uint8Array(t), i = t - e.length;
        return r.set(e, i), r;
    },
    uint8ArrayToMPI: function(e) {
        const t = $.uint8ArrayBitLength(e);
        if (0 === t) throw Error("Zero MPI");
        const r = e.subarray(e.length - Math.ceil(t / 8)), i = new Uint8Array([
            (65280 & t) >> 8,
            255 & t
        ]);
        return $.concatUint8Array([
            i,
            r
        ]);
    },
    uint8ArrayBitLength: function(e) {
        let t;
        for(t = 0; t < e.length && 0 === e[t]; t++);
        if (t === e.length) return 0;
        const r = e.subarray(t);
        return 8 * (r.length - 1) + $.nbits(r[0]);
    },
    hexToUint8Array: function(e) {
        const t = new Uint8Array(e.length >> 1);
        for(let r = 0; r < e.length >> 1; r++)t[r] = parseInt(e.substr(r << 1, 2), 16);
        return t;
    },
    uint8ArrayToHex: function(e) {
        const t = [], r = e.length;
        let i, n = 0;
        for(; n < r;){
            for(i = e[n++].toString(16); i.length < 2;)i = "0" + i;
            t.push("" + i);
        }
        return t.join("");
    },
    stringToUint8Array: function(e) {
        return B(e, (e)=>{
            if (!$.isString(e)) throw Error("stringToUint8Array: Data must be in the form of a string");
            const t = new Uint8Array(e.length);
            for(let r = 0; r < e.length; r++)t[r] = e.charCodeAt(r);
            return t;
        });
    },
    uint8ArrayToString: function(e) {
        const t = [], r = 16384, i = (e = new Uint8Array(e)).length;
        for(let n = 0; n < i; n += r)t.push(String.fromCharCode.apply(String, e.subarray(n, n + r < i ? n + r : i)));
        return t.join("");
    },
    encodeUTF8: function(e) {
        const t = new TextEncoder("utf-8");
        function r(e, r = !1) {
            return t.encode(e, {
                stream: !r
            });
        }
        return B(e, r, ()=>r("", !0));
    },
    decodeUTF8: function(e) {
        const t = new TextDecoder("utf-8");
        function r(e, r = !1) {
            return t.decode(e, {
                stream: !r
            });
        }
        return B(e, r, ()=>r(new Uint8Array, !0));
    },
    concat: C,
    concatUint8Array: f,
    equalsUint8Array: function(e, t) {
        if (!$.isUint8Array(e) || !$.isUint8Array(t)) throw Error("Data must be in the form of a Uint8Array");
        if (e.length !== t.length) return !1;
        for(let r = 0; r < e.length; r++)if (e[r] !== t[r]) return !1;
        return !0;
    },
    writeChecksum: function(e) {
        let t = 0;
        for(let r = 0; r < e.length; r++)t = t + e[r] & 65535;
        return $.writeNumber(t, 2);
    },
    printDebug: function(e) {
        V && console.log("[OpenPGP.js debug]", e);
    },
    printDebugError: function(e) {
        V && console.error("[OpenPGP.js debug]", e);
    },
    nbits: function(e) {
        let t = 1, r = e >>> 16;
        return 0 !== r && (e = r, t += 16), r = e >> 8, 0 !== r && (e = r, t += 8), r = e >> 4, 0 !== r && (e = r, t += 4), r = e >> 2, 0 !== r && (e = r, t += 2), r = e >> 1, 0 !== r && (e = r, t += 1), t;
    },
    double: function(e) {
        const t = new Uint8Array(e.length), r = e.length - 1;
        for(let i = 0; i < r; i++)t[i] = e[i] << 1 ^ e[i + 1] >> 7;
        return t[r] = e[r] << 1 ^ 135 * (e[0] >> 7), t;
    },
    shiftRight: function(e, t) {
        if (t) for(let r = e.length - 1; r >= 0; r--)e[r] >>= t, r > 0 && (e[r] |= e[r - 1] << 8 - t);
        return e;
    },
    getWebCrypto: function() {
        return void 0 !== e && e.crypto && e.crypto.subtle;
    },
    getBigInteger: async function() {
        if (G()) return H;
        {
            const { default: e } = await Promise.resolve().then(function() {
                return Jp;
            });
            return e;
        }
    },
    getNodeCrypto: function() {},
    getNodeZlib: function() {},
    getNodeBuffer: function() {
        return ({}).Buffer;
    },
    getHardwareConcurrency: function() {
        if ("undefined" != typeof navigator) return navigator.hardwareConcurrency || 1;
        return (void 0).cpus().length;
    },
    isEmailAddress: function(e) {
        if (!$.isString(e)) return !1;
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+([a-zA-Z]{2,}[0-9]*|xn--[a-zA-Z\-0-9]+)))$/.test(e);
    },
    canonicalizeEOL: function(e) {
        let t = !1;
        return B(e, (e)=>{
            let r;
            t && (e = $.concatUint8Array([
                new Uint8Array([
                    13
                ]),
                e
            ])), 13 === e[e.length - 1] ? (t = !0, e = e.subarray(0, -1)) : t = !1;
            const i = [];
            for(let t = 0; r = e.indexOf(10, t) + 1, r; t = r)13 !== e[r - 2] && i.push(r);
            if (!i.length) return e;
            const n = new Uint8Array(e.length + i.length);
            let a = 0;
            for(let t = 0; t < i.length; t++){
                const r = e.subarray(i[t - 1] || 0, i[t]);
                n.set(r, a), a += r.length, n[a - 1] = 13, n[a] = 10, a++;
            }
            return n.set(e.subarray(i[i.length - 1] || 0), a), n;
        }, ()=>t ? new Uint8Array([
                13
            ]) : void 0);
    },
    nativeEOL: function(e) {
        let t = !1;
        return B(e, (e)=>{
            let r;
            13 === (e = t && 10 !== e[0] ? $.concatUint8Array([
                new Uint8Array([
                    13
                ]),
                e
            ]) : new Uint8Array(e))[e.length - 1] ? (t = !0, e = e.subarray(0, -1)) : t = !1;
            let i = 0;
            for(let t = 0; t !== e.length; t = r){
                r = e.indexOf(13, t) + 1, r || (r = e.length);
                const n = r - (10 === e[r] ? 1 : 0);
                t && e.copyWithin(i, t, n), i += n - t;
            }
            return e.subarray(0, i);
        }, ()=>t ? new Uint8Array([
                13
            ]) : void 0);
    },
    removeTrailingSpaces: function(e) {
        return e.split("\n").map((e)=>{
            let t = e.length - 1;
            for(; t >= 0 && (" " === e[t] || "	" === e[t] || "\r" === e[t]); t--);
            return e.substr(0, t + 1);
        }).join("\n");
    },
    wrapError: function(e, t) {
        if (!t) return Error(e);
        try {
            t.message = e + ": " + t.message;
        } catch (e) {}
        return t;
    },
    constructAllowedPackets: function(e) {
        const t = {};
        return e.forEach((e)=>{
            if (!e.tag) throw Error("Invalid input: expected a packet class");
            t[e.tag] = e;
        }), t;
    },
    anyPromise: function(e) {
        return new Promise(async (t, r)=>{
            let i;
            await Promise.all(e.map(async (e)=>{
                try {
                    t(await e);
                } catch (e) {
                    i = e;
                }
            })), r(i);
        });
    },
    selectUint8Array: function(e, t, r) {
        const i = Math.max(t.length, r.length), n = new Uint8Array(i);
        let a = 0;
        for(let i = 0; i < n.length; i++)n[i] = t[i] & 256 - e | r[i] & 255 + e, a += e & i < t.length | 1 - e & i < r.length;
        return n.subarray(0, a);
    },
    selectUint8: function(e, t, r) {
        return t & 256 - e | r & 255 + e;
    }
}, Z = $.getNodeBuffer();
let Y, X;
function Q(e) {
    let t = new Uint8Array;
    return B(e, (e)=>{
        t = $.concatUint8Array([
            t,
            e
        ]);
        const r = [], i = Math.floor(t.length / 45), n = 45 * i, a = Y(t.subarray(0, n));
        for(let e = 0; e < i; e++)r.push(a.substr(60 * e, 60)), r.push("\n");
        return t = t.subarray(n), r.join("");
    }, ()=>t.length ? Y(t) + "\n" : "");
}
function J(e) {
    let t = "";
    return B(e, (e)=>{
        t += e;
        let r = 0;
        const i = [
            " ",
            "	",
            "\r",
            "\n"
        ];
        for(let e = 0; e < i.length; e++){
            const n = i[e];
            for(let e = t.indexOf(n); -1 !== e; e = t.indexOf(n, e + 1))r++;
        }
        let n = t.length;
        for(; n > 0 && (n - r) % 4 != 0; n--)i.includes(t[n]) && r--;
        const a = X(t.substr(0, n));
        return t = t.substr(n), a;
    }, ()=>X(t));
}
function ee(e) {
    return J(e.replace(/-/g, "+").replace(/_/g, "/"));
}
function te(e, t) {
    let r = Q(e).replace(/[\r\n]/g, "");
    return t && (r = r.replace(/[+]/g, "-").replace(/[/]/g, "_").replace(/[=]/g, "")), r;
}
Z ? (Y = (e)=>Z.from(e).toString("base64"), X = (e)=>{
    const t = Z.from(e, "base64");
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}) : (Y = (e)=>btoa($.uint8ArrayToString(e)), X = (e)=>$.stringToUint8Array(atob(e)));
const re = Symbol("byValue");
var ie = {
    curve: {
        p256: "p256",
        "P-256": "p256",
        secp256r1: "p256",
        prime256v1: "p256",
        "1.2.840.10045.3.1.7": "p256",
        "2a8648ce3d030107": "p256",
        "2A8648CE3D030107": "p256",
        p384: "p384",
        "P-384": "p384",
        secp384r1: "p384",
        "1.3.132.0.34": "p384",
        "2b81040022": "p384",
        "2B81040022": "p384",
        p521: "p521",
        "P-521": "p521",
        secp521r1: "p521",
        "1.3.132.0.35": "p521",
        "2b81040023": "p521",
        "2B81040023": "p521",
        secp256k1: "secp256k1",
        "1.3.132.0.10": "secp256k1",
        "2b8104000a": "secp256k1",
        "2B8104000A": "secp256k1",
        ED25519: "ed25519",
        ed25519: "ed25519",
        Ed25519: "ed25519",
        "1.3.6.1.4.1.11591.15.1": "ed25519",
        "2b06010401da470f01": "ed25519",
        "2B06010401DA470F01": "ed25519",
        X25519: "curve25519",
        cv25519: "curve25519",
        curve25519: "curve25519",
        Curve25519: "curve25519",
        "1.3.6.1.4.1.3029.1.5.1": "curve25519",
        "2b060104019755010501": "curve25519",
        "2B060104019755010501": "curve25519",
        brainpoolP256r1: "brainpoolP256r1",
        "1.3.36.3.3.2.8.1.1.7": "brainpoolP256r1",
        "2b2403030208010107": "brainpoolP256r1",
        "2B2403030208010107": "brainpoolP256r1",
        brainpoolP384r1: "brainpoolP384r1",
        "1.3.36.3.3.2.8.1.1.11": "brainpoolP384r1",
        "2b240303020801010b": "brainpoolP384r1",
        "2B240303020801010B": "brainpoolP384r1",
        brainpoolP512r1: "brainpoolP512r1",
        "1.3.36.3.3.2.8.1.1.13": "brainpoolP512r1",
        "2b240303020801010d": "brainpoolP512r1",
        "2B240303020801010D": "brainpoolP512r1"
    },
    s2k: {
        simple: 0,
        salted: 1,
        iterated: 3,
        gnu: 101
    },
    publicKey: {
        rsaEncryptSign: 1,
        rsaEncrypt: 2,
        rsaSign: 3,
        elgamal: 16,
        dsa: 17,
        ecdh: 18,
        ecdsa: 19,
        eddsa: 22,
        aedh: 23,
        aedsa: 24
    },
    symmetric: {
        plaintext: 0,
        idea: 1,
        tripledes: 2,
        cast5: 3,
        blowfish: 4,
        aes128: 7,
        aes192: 8,
        aes256: 9,
        twofish: 10
    },
    compression: {
        uncompressed: 0,
        zip: 1,
        zlib: 2,
        bzip2: 3
    },
    hash: {
        md5: 1,
        sha1: 2,
        ripemd: 3,
        sha256: 8,
        sha384: 9,
        sha512: 10,
        sha224: 11
    },
    webHash: {
        "SHA-1": 2,
        "SHA-256": 8,
        "SHA-384": 9,
        "SHA-512": 10
    },
    aead: {
        eax: 1,
        ocb: 2,
        experimentalGCM: 100
    },
    packet: {
        publicKeyEncryptedSessionKey: 1,
        signature: 2,
        symEncryptedSessionKey: 3,
        onePassSignature: 4,
        secretKey: 5,
        publicKey: 6,
        secretSubkey: 7,
        compressedData: 8,
        symmetricallyEncryptedData: 9,
        marker: 10,
        literalData: 11,
        trust: 12,
        userID: 13,
        publicSubkey: 14,
        userAttribute: 17,
        symEncryptedIntegrityProtectedData: 18,
        modificationDetectionCode: 19,
        aeadEncryptedData: 20
    },
    literal: {
        binary: 98,
        text: 116,
        utf8: 117,
        mime: 109
    },
    signature: {
        binary: 0,
        text: 1,
        standalone: 2,
        certGeneric: 16,
        certPersona: 17,
        certCasual: 18,
        certPositive: 19,
        certRevocation: 48,
        subkeyBinding: 24,
        keyBinding: 25,
        key: 31,
        keyRevocation: 32,
        subkeyRevocation: 40,
        timestamp: 64,
        thirdParty: 80
    },
    signatureSubpacket: {
        signatureCreationTime: 2,
        signatureExpirationTime: 3,
        exportableCertification: 4,
        trustSignature: 5,
        regularExpression: 6,
        revocable: 7,
        keyExpirationTime: 9,
        placeholderBackwardsCompatibility: 10,
        preferredSymmetricAlgorithms: 11,
        revocationKey: 12,
        issuer: 16,
        notationData: 20,
        preferredHashAlgorithms: 21,
        preferredCompressionAlgorithms: 22,
        keyServerPreferences: 23,
        preferredKeyServer: 24,
        primaryUserID: 25,
        policyURI: 26,
        keyFlags: 27,
        signersUserID: 28,
        reasonForRevocation: 29,
        features: 30,
        signatureTarget: 31,
        embeddedSignature: 32,
        issuerFingerprint: 33,
        preferredAEADAlgorithms: 34
    },
    keyFlags: {
        certifyKeys: 1,
        signData: 2,
        encryptCommunication: 4,
        encryptStorage: 8,
        splitPrivateKey: 16,
        authentication: 32,
        sharedPrivateKey: 128
    },
    armor: {
        multipartSection: 0,
        multipartLast: 1,
        signed: 2,
        message: 3,
        publicKey: 4,
        privateKey: 5,
        signature: 6
    },
    reasonForRevocation: {
        noReason: 0,
        keySuperseded: 1,
        keyCompromised: 2,
        keyRetired: 3,
        userIDInvalid: 32
    },
    features: {
        modificationDetection: 1,
        aead: 2,
        v5Keys: 4
    },
    write: function(e, t) {
        if ("number" == typeof t && (t = this.read(e, t)), void 0 !== e[t]) return e[t];
        throw Error("Invalid enum value.");
    },
    read: function(e, t) {
        if (e[re] || (e[re] = [], Object.entries(e).forEach(([t, r])=>{
            e[re][r] = t;
        })), void 0 !== e[re][t]) return e[re][t];
        throw Error("Invalid enum value.");
    }
}, ne = {
    preferredHashAlgorithm: ie.hash.sha256,
    preferredSymmetricAlgorithm: ie.symmetric.aes256,
    preferredCompressionAlgorithm: ie.compression.uncompressed,
    deflateLevel: 6,
    aeadProtect: !1,
    preferredAEADAlgorithm: ie.aead.eax,
    aeadChunkSizeByte: 12,
    v5Keys: !1,
    s2kIterationCountByte: 224,
    allowUnauthenticatedMessages: !1,
    allowUnauthenticatedStream: !1,
    checksumRequired: !1,
    minRSABits: 2047,
    passwordCollisionCheck: !1,
    revocationsExpire: !1,
    allowInsecureDecryptionWithSigningKeys: !1,
    allowInsecureVerificationWithReformattedKeys: !1,
    constantTimePKCS1Decryption: !1,
    constantTimePKCS1DecryptionSupportedSymmetricAlgorithms: new Set([
        ie.symmetric.aes128,
        ie.symmetric.aes192,
        ie.symmetric.aes256
    ]),
    minBytesForWebCrypto: 1e3,
    ignoreUnsupportedPackets: !0,
    ignoreMalformedPackets: !1,
    additionalAllowedPackets: [],
    showVersion: !1,
    showComment: !1,
    versionString: "OpenPGP.js 5.9.0",
    commentString: "https://openpgpjs.org",
    maxUserIDLength: 5120,
    knownNotations: [],
    useIndutnyElliptic: !0,
    rejectHashAlgorithms: new Set([
        ie.hash.md5,
        ie.hash.ripemd
    ]),
    rejectMessageHashAlgorithms: new Set([
        ie.hash.md5,
        ie.hash.ripemd,
        ie.hash.sha1
    ]),
    rejectPublicKeyAlgorithms: new Set([
        ie.publicKey.elgamal,
        ie.publicKey.dsa
    ]),
    rejectCurves: new Set([
        ie.curve.secp256k1
    ])
};
function ae(e) {
    const t = e.match(/^-----BEGIN PGP (MESSAGE, PART \d+\/\d+|MESSAGE, PART \d+|SIGNED MESSAGE|MESSAGE|PUBLIC KEY BLOCK|PRIVATE KEY BLOCK|SIGNATURE)-----$/m);
    if (!t) throw Error("Unknown ASCII armor type");
    return /MESSAGE, PART \d+\/\d+/.test(t[1]) ? ie.armor.multipartSection : /MESSAGE, PART \d+/.test(t[1]) ? ie.armor.multipartLast : /SIGNED MESSAGE/.test(t[1]) ? ie.armor.signed : /MESSAGE/.test(t[1]) ? ie.armor.message : /PUBLIC KEY BLOCK/.test(t[1]) ? ie.armor.publicKey : /PRIVATE KEY BLOCK/.test(t[1]) ? ie.armor.privateKey : /SIGNATURE/.test(t[1]) ? ie.armor.signature : void 0;
}
function se(e, t) {
    let r = "";
    return t.showVersion && (r += "Version: " + t.versionString + "\n"), t.showComment && (r += "Comment: " + t.commentString + "\n"), e && (r += "Comment: " + e + "\n"), r += "\n", r;
}
function oe(e) {
    return Q(function(e) {
        let t = 13501623;
        return B(e, (e)=>{
            const r = ue ? Math.floor(e.length / 4) : 0, i = new Uint32Array(e.buffer, e.byteOffset, r);
            for(let e = 0; e < r; e++)t ^= i[e], t = ce[0][t >> 24 & 255] ^ ce[1][t >> 16 & 255] ^ ce[2][t >> 8 & 255] ^ ce[3][t >> 0 & 255];
            for(let i = 4 * r; i < e.length; i++)t = t >> 8 ^ ce[0][255 & t ^ e[i]];
        }, ()=>new Uint8Array([
                t,
                t >> 8,
                t >> 16
            ]));
    }(e));
}
const ce = [
    Array(255),
    Array(255),
    Array(255),
    Array(255)
];
for(let e = 0; e <= 255; e++){
    let t = e << 16;
    for(let e = 0; e < 8; e++)t = t << 1 ^ (0 != (8388608 & t) ? 8801531 : 0);
    ce[0][e] = (16711680 & t) >> 16 | 65280 & t | (255 & t) << 16;
}
for(let e = 0; e <= 255; e++)ce[1][e] = ce[0][e] >> 8 ^ ce[0][255 & ce[0][e]];
for(let e = 0; e <= 255; e++)ce[2][e] = ce[1][e] >> 8 ^ ce[0][255 & ce[1][e]];
for(let e = 0; e <= 255; e++)ce[3][e] = ce[2][e] >> 8 ^ ce[0][255 & ce[2][e]];
const ue = function() {
    const e = new ArrayBuffer(2);
    return new DataView(e).setInt16(0, 255, !0), 255 === new Int16Array(e)[0];
}();
function he(e) {
    for(let t = 0; t < e.length; t++)/^([^\s:]|[^\s:][^:]*[^\s:]): .+$/.test(e[t]) || $.printDebugError(Error("Improperly formatted armor header: " + e[t])), /^(Version|Comment|MessageID|Hash|Charset): .+$/.test(e[t]) || $.printDebugError(Error("Unknown header: " + e[t]));
}
function de(e) {
    let t = e, r = "";
    const i = e.lastIndexOf("=");
    return i >= 0 && i !== e.length - 1 && (t = e.slice(0, i), r = e.slice(i + 1).substr(0, 4)), {
        body: t,
        checksum: r
    };
}
function fe(e, t = ne) {
    return new Promise(async (r, i)=>{
        try {
            const n = /^-----[^-]+-----$/m, a = /^[ \f\r\t\u00a0\u2000-\u200a\u202f\u205f\u3000]*$/;
            let s;
            const o = [];
            let c, u, h, d = o, f = [], l = J(T(e, async (e, t)=>{
                const p = K(e);
                try {
                    for(;;){
                        let e = await p.readLine();
                        if (void 0 === e) throw Error("Misformed armored text");
                        if (e = $.removeTrailingSpaces(e.replace(/[\r\n]/g, "")), s) {
                            if (c) u || 2 !== s || (n.test(e) ? (f = f.join("\r\n"), u = !0, he(d), d = [], c = !1) : f.push(e.replace(/^- /, "")));
                            else if (n.test(e) && i(Error("Mandatory blank line missing between armor headers and armor data")), a.test(e)) {
                                if (he(d), c = !0, u || 2 !== s) {
                                    r({
                                        text: f,
                                        data: l,
                                        headers: o,
                                        type: s
                                    });
                                    break;
                                }
                            } else d.push(e);
                        } else n.test(e) && (s = ae(e));
                    }
                } catch (e) {
                    return void i(e);
                }
                const y = D(t);
                try {
                    for(;;){
                        await y.ready;
                        const { done: e, value: t } = await p.read();
                        if (e) throw Error("Misformed armored text");
                        const r = t + "";
                        if (-1 !== r.indexOf("=") || -1 !== r.indexOf("-")) {
                            let e = await p.readToEnd();
                            e.length || (e = ""), e = r + e, e = $.removeTrailingSpaces(e.replace(/\r/g, ""));
                            const t = e.split(n);
                            if (1 === t.length) throw Error("Misformed armored text");
                            const i = de(t[0].slice(0, -1));
                            h = i.checksum, await y.write(i.body);
                            break;
                        }
                        await y.write(r);
                    }
                    await y.ready, await y.close();
                } catch (e) {
                    await y.abort(e);
                }
            }));
            l = T(l, async (e, r)=>{
                const i = j(oe(F(e)));
                i.catch(()=>{}), await R(e, r, {
                    preventClose: !0
                });
                const n = D(r);
                try {
                    const e = (await i).replace("\n", "");
                    if (h !== e && (h || t.checksumRequired)) throw Error("Ascii armor integrity check failed");
                    await n.ready, await n.close();
                } catch (e) {
                    await n.abort(e);
                }
            });
        } catch (e) {
            i(e);
        }
    }).then(async (e)=>(s(e.data) && (e.data = await j(e.data)), e));
}
function le(e, t, r, i, n, a = ne) {
    let s, o;
    e === ie.armor.signed && (s = t.text, o = t.hash, t = t.data);
    const c = F(t), u = [];
    switch(e){
        case ie.armor.multipartSection:
            u.push("-----BEGIN PGP MESSAGE, PART " + r + "/" + i + "-----\n"), u.push(se(n, a)), u.push(Q(t)), u.push("=", oe(c)), u.push("-----END PGP MESSAGE, PART " + r + "/" + i + "-----\n");
            break;
        case ie.armor.multipartLast:
            u.push("-----BEGIN PGP MESSAGE, PART " + r + "-----\n"), u.push(se(n, a)), u.push(Q(t)), u.push("=", oe(c)), u.push("-----END PGP MESSAGE, PART " + r + "-----\n");
            break;
        case ie.armor.signed:
            u.push("-----BEGIN PGP SIGNED MESSAGE-----\n"), u.push("Hash: " + o + "\n\n"), u.push(s.replace(/^-/gm, "- -")), u.push("\n-----BEGIN PGP SIGNATURE-----\n"), u.push(se(n, a)), u.push(Q(t)), u.push("=", oe(c)), u.push("-----END PGP SIGNATURE-----\n");
            break;
        case ie.armor.message:
            u.push("-----BEGIN PGP MESSAGE-----\n"), u.push(se(n, a)), u.push(Q(t)), u.push("=", oe(c)), u.push("-----END PGP MESSAGE-----\n");
            break;
        case ie.armor.publicKey:
            u.push("-----BEGIN PGP PUBLIC KEY BLOCK-----\n"), u.push(se(n, a)), u.push(Q(t)), u.push("=", oe(c)), u.push("-----END PGP PUBLIC KEY BLOCK-----\n");
            break;
        case ie.armor.privateKey:
            u.push("-----BEGIN PGP PRIVATE KEY BLOCK-----\n"), u.push(se(n, a)), u.push(Q(t)), u.push("=", oe(c)), u.push("-----END PGP PRIVATE KEY BLOCK-----\n");
            break;
        case ie.armor.signature:
            u.push("-----BEGIN PGP SIGNATURE-----\n"), u.push(se(n, a)), u.push(Q(t)), u.push("=", oe(c)), u.push("-----END PGP SIGNATURE-----\n");
    }
    return $.concat(u);
}
class pe {
    constructor(){
        this.bytes = "";
    }
    read(e) {
        this.bytes = $.uint8ArrayToString(e.subarray(0, 8));
    }
    write() {
        return $.stringToUint8Array(this.bytes);
    }
    toHex() {
        return $.uint8ArrayToHex($.stringToUint8Array(this.bytes));
    }
    equals(e, t = !1) {
        return t && (e.isWildcard() || this.isWildcard()) || this.bytes === e.bytes;
    }
    isNull() {
        return "" === this.bytes;
    }
    isWildcard() {
        return /^0+$/.test(this.toHex());
    }
    static mapToHex(e) {
        return e.toHex();
    }
    static fromID(e) {
        const t = new pe;
        return t.read($.hexToUint8Array(e)), t;
    }
    static wildcard() {
        const e = new pe;
        return e.read(new Uint8Array(8)), e;
    }
}
var ye = function() {
    var e, t, r = !1;
    function i(r, i) {
        var n = e[(t[r] + t[i]) % 255];
        return 0 !== r && 0 !== i || (n = 0), n;
    }
    var n, a, s, o, c = !1;
    function u() {
        function u(r) {
            var i, n, a;
            for(n = a = function(r) {
                var i = e[255 - t[r]];
                return 0 === r && (i = 0), i;
            }(r), i = 0; i < 4; i++)a ^= n = 255 & (n << 1 | n >>> 7);
            return a ^= 99;
        }
        r || function() {
            e = [], t = [];
            var i, n, a = 1;
            for(i = 0; i < 255; i++)e[i] = a, n = 128 & a, a <<= 1, a &= 255, 128 === n && (a ^= 27), a ^= e[i], t[e[i]] = i;
            e[255] = e[0], t[0] = 0, r = !0;
        }(), n = [], a = [], s = [
            [],
            [],
            [],
            []
        ], o = [
            [],
            [],
            [],
            []
        ];
        for(var h = 0; h < 256; h++){
            var d = u(h);
            n[h] = d, a[d] = h, s[0][h] = i(2, d) << 24 | d << 16 | d << 8 | i(3, d), o[0][d] = i(14, h) << 24 | i(9, h) << 16 | i(13, h) << 8 | i(11, h);
            for(var f = 1; f < 4; f++)s[f][h] = s[f - 1][h] >>> 8 | s[f - 1][h] << 24, o[f][d] = o[f - 1][d] >>> 8 | o[f - 1][d] << 24;
        }
        c = !0;
    }
    var h = function(e, t) {
        c || u();
        var r = new Uint32Array(t);
        r.set(n, 512), r.set(a, 768);
        for(var i = 0; i < 4; i++)r.set(s[i], 4096 + 1024 * i >> 2), r.set(o[i], 8192 + 1024 * i >> 2);
        var h = function(e, t, r) {
            "use asm";
            var i = 0, n = 0, a = 0, s = 0, o = 0, c = 0, u = 0, h = 0, d = 0, f = 0, l = 0, p = 0, y = 0, b = 0, m = 0, g = 0, w = 0, v = 0, _ = 0, k = 0, A = 0;
            var S = new e.Uint32Array(r), E = new e.Uint8Array(r);
            function P(e, t, r, o, c, u, h, d) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                o = o | 0;
                c = c | 0;
                u = u | 0;
                h = h | 0;
                d = d | 0;
                var f = 0, l = 0, p = 0, y = 0, b = 0, m = 0, g = 0, w = 0;
                f = r | 0x400, l = r | 0x800, p = r | 0xc00;
                c = c ^ S[(e | 0) >> 2], u = u ^ S[(e | 4) >> 2], h = h ^ S[(e | 8) >> 2], d = d ^ S[(e | 12) >> 2];
                for(w = 16; (w | 0) <= o << 4; w = w + 16 | 0){
                    y = S[(r | c >> 22 & 1020) >> 2] ^ S[(f | u >> 14 & 1020) >> 2] ^ S[(l | h >> 6 & 1020) >> 2] ^ S[(p | d << 2 & 1020) >> 2] ^ S[(e | w | 0) >> 2], b = S[(r | u >> 22 & 1020) >> 2] ^ S[(f | h >> 14 & 1020) >> 2] ^ S[(l | d >> 6 & 1020) >> 2] ^ S[(p | c << 2 & 1020) >> 2] ^ S[(e | w | 4) >> 2], m = S[(r | h >> 22 & 1020) >> 2] ^ S[(f | d >> 14 & 1020) >> 2] ^ S[(l | c >> 6 & 1020) >> 2] ^ S[(p | u << 2 & 1020) >> 2] ^ S[(e | w | 8) >> 2], g = S[(r | d >> 22 & 1020) >> 2] ^ S[(f | c >> 14 & 1020) >> 2] ^ S[(l | u >> 6 & 1020) >> 2] ^ S[(p | h << 2 & 1020) >> 2] ^ S[(e | w | 12) >> 2];
                    c = y, u = b, h = m, d = g;
                }
                i = S[(t | c >> 22 & 1020) >> 2] << 24 ^ S[(t | u >> 14 & 1020) >> 2] << 16 ^ S[(t | h >> 6 & 1020) >> 2] << 8 ^ S[(t | d << 2 & 1020) >> 2] ^ S[(e | w | 0) >> 2], n = S[(t | u >> 22 & 1020) >> 2] << 24 ^ S[(t | h >> 14 & 1020) >> 2] << 16 ^ S[(t | d >> 6 & 1020) >> 2] << 8 ^ S[(t | c << 2 & 1020) >> 2] ^ S[(e | w | 4) >> 2], a = S[(t | h >> 22 & 1020) >> 2] << 24 ^ S[(t | d >> 14 & 1020) >> 2] << 16 ^ S[(t | c >> 6 & 1020) >> 2] << 8 ^ S[(t | u << 2 & 1020) >> 2] ^ S[(e | w | 8) >> 2], s = S[(t | d >> 22 & 1020) >> 2] << 24 ^ S[(t | c >> 14 & 1020) >> 2] << 16 ^ S[(t | u >> 6 & 1020) >> 2] << 8 ^ S[(t | h << 2 & 1020) >> 2] ^ S[(e | w | 12) >> 2];
            }
            function x(e, t, r, i) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                i = i | 0;
                P(0x0000, 0x0800, 0x1000, A, e, t, r, i);
            }
            function M(e, t, r, i) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                i = i | 0;
                var a = 0;
                P(0x0400, 0x0c00, 0x2000, A, e, i, r, t);
                a = n, n = s, s = a;
            }
            function C(e, t, r, d) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                d = d | 0;
                P(0x0000, 0x0800, 0x1000, A, o ^ e, c ^ t, u ^ r, h ^ d);
                o = i, c = n, u = a, h = s;
            }
            function K(e, t, r, d) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                d = d | 0;
                var f = 0;
                P(0x0400, 0x0c00, 0x2000, A, e, d, r, t);
                f = n, n = s, s = f;
                i = i ^ o, n = n ^ c, a = a ^ u, s = s ^ h;
                o = e, c = t, u = r, h = d;
            }
            function D(e, t, r, d) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                d = d | 0;
                P(0x0000, 0x0800, 0x1000, A, o, c, u, h);
                o = i = i ^ e, c = n = n ^ t, u = a = a ^ r, h = s = s ^ d;
            }
            function R(e, t, r, d) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                d = d | 0;
                P(0x0000, 0x0800, 0x1000, A, o, c, u, h);
                i = i ^ e, n = n ^ t, a = a ^ r, s = s ^ d;
                o = e, c = t, u = r, h = d;
            }
            function U(e, t, r, d) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                d = d | 0;
                P(0x0000, 0x0800, 0x1000, A, o, c, u, h);
                o = i, c = n, u = a, h = s;
                i = i ^ e, n = n ^ t, a = a ^ r, s = s ^ d;
            }
            function I(e, t, r, o) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                o = o | 0;
                P(0x0000, 0x0800, 0x1000, A, d, f, l, p);
                p = ~g & p | g & p + 1;
                l = ~m & l | m & l + ((p | 0) == 0);
                f = ~b & f | b & f + ((l | 0) == 0);
                d = ~y & d | y & d + ((f | 0) == 0);
                i = i ^ e;
                n = n ^ t;
                a = a ^ r;
                s = s ^ o;
            }
            function B(e, t, r, i) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                i = i | 0;
                var n = 0, a = 0, s = 0, d = 0, f = 0, l = 0, p = 0, y = 0, b = 0, m = 0;
                e = e ^ o, t = t ^ c, r = r ^ u, i = i ^ h;
                n = w | 0, a = v | 0, s = _ | 0, d = k | 0;
                for(; (b | 0) < 128; b = b + 1 | 0){
                    if (n >>> 31) f = f ^ e, l = l ^ t, p = p ^ r, y = y ^ i;
                    n = n << 1 | a >>> 31, a = a << 1 | s >>> 31, s = s << 1 | d >>> 31, d = d << 1;
                    m = i & 1;
                    i = i >>> 1 | r << 31, r = r >>> 1 | t << 31, t = t >>> 1 | e << 31, e = e >>> 1;
                    if (m) e = e ^ 0xe1000000;
                }
                o = f, c = l, u = p, h = y;
            }
            function T(e) {
                e = e | 0;
                A = e;
            }
            function z(e, t, r, o) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                o = o | 0;
                i = e, n = t, a = r, s = o;
            }
            function q(e, t, r, i) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                i = i | 0;
                o = e, c = t, u = r, h = i;
            }
            function F(e, t, r, i) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                i = i | 0;
                d = e, f = t, l = r, p = i;
            }
            function O(e, t, r, i) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                i = i | 0;
                y = e, b = t, m = r, g = i;
            }
            function N(e, t, r, i) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                i = i | 0;
                p = ~g & p | g & i, l = ~m & l | m & r, f = ~b & f | b & t, d = ~y & d | y & e;
            }
            function j(e) {
                e = e | 0;
                if (e & 15) return -1;
                E[e | 0] = i >>> 24, E[e | 1] = i >>> 16 & 255, E[e | 2] = i >>> 8 & 255, E[e | 3] = i & 255, E[e | 4] = n >>> 24, E[e | 5] = n >>> 16 & 255, E[e | 6] = n >>> 8 & 255, E[e | 7] = n & 255, E[e | 8] = a >>> 24, E[e | 9] = a >>> 16 & 255, E[e | 10] = a >>> 8 & 255, E[e | 11] = a & 255, E[e | 12] = s >>> 24, E[e | 13] = s >>> 16 & 255, E[e | 14] = s >>> 8 & 255, E[e | 15] = s & 255;
                return 16;
            }
            function L(e) {
                e = e | 0;
                if (e & 15) return -1;
                E[e | 0] = o >>> 24, E[e | 1] = o >>> 16 & 255, E[e | 2] = o >>> 8 & 255, E[e | 3] = o & 255, E[e | 4] = c >>> 24, E[e | 5] = c >>> 16 & 255, E[e | 6] = c >>> 8 & 255, E[e | 7] = c & 255, E[e | 8] = u >>> 24, E[e | 9] = u >>> 16 & 255, E[e | 10] = u >>> 8 & 255, E[e | 11] = u & 255, E[e | 12] = h >>> 24, E[e | 13] = h >>> 16 & 255, E[e | 14] = h >>> 8 & 255, E[e | 15] = h & 255;
                return 16;
            }
            function W() {
                x(0, 0, 0, 0);
                w = i, v = n, _ = a, k = s;
            }
            function H(e, t, r) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                var o = 0;
                if (t & 15) return -1;
                while((r | 0) >= 16){
                    V[e & 7](E[t | 0] << 24 | E[t | 1] << 16 | E[t | 2] << 8 | E[t | 3], E[t | 4] << 24 | E[t | 5] << 16 | E[t | 6] << 8 | E[t | 7], E[t | 8] << 24 | E[t | 9] << 16 | E[t | 10] << 8 | E[t | 11], E[t | 12] << 24 | E[t | 13] << 16 | E[t | 14] << 8 | E[t | 15]);
                    E[t | 0] = i >>> 24, E[t | 1] = i >>> 16 & 255, E[t | 2] = i >>> 8 & 255, E[t | 3] = i & 255, E[t | 4] = n >>> 24, E[t | 5] = n >>> 16 & 255, E[t | 6] = n >>> 8 & 255, E[t | 7] = n & 255, E[t | 8] = a >>> 24, E[t | 9] = a >>> 16 & 255, E[t | 10] = a >>> 8 & 255, E[t | 11] = a & 255, E[t | 12] = s >>> 24, E[t | 13] = s >>> 16 & 255, E[t | 14] = s >>> 8 & 255, E[t | 15] = s & 255;
                    o = o + 16 | 0, t = t + 16 | 0, r = r - 16 | 0;
                }
                return o | 0;
            }
            function G(e, t, r) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                var i = 0;
                if (t & 15) return -1;
                while((r | 0) >= 16){
                    $[e & 1](E[t | 0] << 24 | E[t | 1] << 16 | E[t | 2] << 8 | E[t | 3], E[t | 4] << 24 | E[t | 5] << 16 | E[t | 6] << 8 | E[t | 7], E[t | 8] << 24 | E[t | 9] << 16 | E[t | 10] << 8 | E[t | 11], E[t | 12] << 24 | E[t | 13] << 16 | E[t | 14] << 8 | E[t | 15]);
                    i = i + 16 | 0, t = t + 16 | 0, r = r - 16 | 0;
                }
                return i | 0;
            }
            var V = [
                x,
                M,
                C,
                K,
                D,
                R,
                U,
                I
            ];
            var $ = [
                C,
                B
            ];
            return {
                set_rounds: T,
                set_state: z,
                set_iv: q,
                set_nonce: F,
                set_mask: O,
                set_counter: N,
                get_state: j,
                get_iv: L,
                gcm_init: W,
                cipher: H,
                mac: G
            };
        }({
            Uint8Array,
            Uint32Array
        }, e, t);
        return h.set_key = function(e, t, i, a, s, c, u, d, f) {
            var l = r.subarray(0, 60), p = r.subarray(256, 316);
            l.set([
                t,
                i,
                a,
                s,
                c,
                u,
                d,
                f
            ]);
            for(var y = e, b = 1; y < 4 * e + 28; y++){
                var m = l[y - 1];
                (y % e == 0 || 8 === e && y % e == 4) && (m = n[m >>> 24] << 24 ^ n[m >>> 16 & 255] << 16 ^ n[m >>> 8 & 255] << 8 ^ n[255 & m]), y % e == 0 && (m = m << 8 ^ m >>> 24 ^ b << 24, b = b << 1 ^ (128 & b ? 27 : 0)), l[y] = l[y - e] ^ m;
            }
            for(var g = 0; g < y; g += 4)for(var w = 0; w < 4; w++){
                m = l[y - (4 + g) + (4 - w) % 4];
                p[g + w] = g < 4 || g >= y - 4 ? m : o[0][n[m >>> 24]] ^ o[1][n[m >>> 16 & 255]] ^ o[2][n[m >>> 8 & 255]] ^ o[3][n[255 & m]];
            }
            h.set_rounds(e + 5);
        }, h;
    };
    return h.ENC = {
        ECB: 0,
        CBC: 2,
        CFB: 4,
        OFB: 6,
        CTR: 7
    }, h.DEC = {
        ECB: 1,
        CBC: 3,
        CFB: 5,
        OFB: 6,
        CTR: 7
    }, h.MAC = {
        CBC: 0,
        GCM: 1
    }, h.HEAP_DATA = 16384, h;
}();
function be(e) {
    return e instanceof Uint8Array;
}
function me(e, t) {
    const r = e ? e.byteLength : t || 65536;
    if (4095 & r || r <= 0) throw Error("heap size must be a positive integer and a multiple of 4096");
    return e = e || new Uint8Array(new ArrayBuffer(r));
}
function ge(e, t, r, i, n) {
    const a = e.length - t, s = a < n ? a : n;
    return e.set(r.subarray(i, i + s), t), s;
}
function we(...e) {
    const t = e.reduce((e, t)=>e + t.length, 0), r = new Uint8Array(t);
    let i = 0;
    for(let t = 0; t < e.length; t++)r.set(e[t], i), i += e[t].length;
    return r;
}
class ve extends Error {
    constructor(...e){
        super(...e);
    }
}
class _e extends Error {
    constructor(...e){
        super(...e);
    }
}
class ke extends Error {
    constructor(...e){
        super(...e);
    }
}
const Ae = [], Se = [];
class Ee {
    constructor(e, t, r = !0, i, n, a){
        this.pos = 0, this.len = 0, this.mode = i, this.pos = 0, this.len = 0, this.key = e, this.iv = t, this.padding = r, this.acquire_asm(n, a);
    }
    acquire_asm(e, t) {
        return void 0 !== this.heap && void 0 !== this.asm || (this.heap = e || Ae.pop() || me().subarray(ye.HEAP_DATA), this.asm = t || Se.pop() || new ye(null, this.heap.buffer), this.reset(this.key, this.iv)), {
            heap: this.heap,
            asm: this.asm
        };
    }
    release_asm() {
        void 0 !== this.heap && void 0 !== this.asm && (Ae.push(this.heap), Se.push(this.asm)), this.heap = void 0, this.asm = void 0;
    }
    reset(e, t) {
        const { asm: r } = this.acquire_asm(), i = e.length;
        if (16 !== i && 24 !== i && 32 !== i) throw new _e("illegal key size");
        const n = new DataView(e.buffer, e.byteOffset, e.byteLength);
        if (r.set_key(i >> 2, n.getUint32(0), n.getUint32(4), n.getUint32(8), n.getUint32(12), i > 16 ? n.getUint32(16) : 0, i > 16 ? n.getUint32(20) : 0, i > 24 ? n.getUint32(24) : 0, i > 24 ? n.getUint32(28) : 0), void 0 !== t) {
            if (16 !== t.length) throw new _e("illegal iv size");
            let e = new DataView(t.buffer, t.byteOffset, t.byteLength);
            r.set_iv(e.getUint32(0), e.getUint32(4), e.getUint32(8), e.getUint32(12));
        } else r.set_iv(0, 0, 0, 0);
    }
    AES_Encrypt_process(e) {
        if (!be(e)) throw new TypeError("data isn't of expected type");
        let { heap: t, asm: r } = this.acquire_asm(), i = ye.ENC[this.mode], n = ye.HEAP_DATA, a = this.pos, s = this.len, o = 0, c = e.length || 0, u = 0, h = 0, d = new Uint8Array(s + c & -16);
        for(; c > 0;)h = ge(t, a + s, e, o, c), s += h, o += h, c -= h, h = r.cipher(i, n + a, s), h && d.set(t.subarray(a, a + h), u), u += h, h < s ? (a += h, s -= h) : (a = 0, s = 0);
        return this.pos = a, this.len = s, d;
    }
    AES_Encrypt_finish() {
        let { heap: e, asm: t } = this.acquire_asm(), r = ye.ENC[this.mode], i = ye.HEAP_DATA, n = this.pos, a = this.len, s = 16 - a % 16, o = a;
        if (this.hasOwnProperty("padding")) {
            if (this.padding) {
                for(let t = 0; t < s; ++t)e[n + a + t] = s;
                a += s, o = a;
            } else if (a % 16) throw new _e("data length must be a multiple of the block size");
        } else a += s;
        const c = new Uint8Array(o);
        return a && t.cipher(r, i + n, a), o && c.set(e.subarray(n, n + o)), this.pos = 0, this.len = 0, this.release_asm(), c;
    }
    AES_Decrypt_process(e) {
        if (!be(e)) throw new TypeError("data isn't of expected type");
        let { heap: t, asm: r } = this.acquire_asm(), i = ye.DEC[this.mode], n = ye.HEAP_DATA, a = this.pos, s = this.len, o = 0, c = e.length || 0, u = 0, h = s + c & -16, d = 0, f = 0;
        this.padding && (d = s + c - h || 16, h -= d);
        const l = new Uint8Array(h);
        for(; c > 0;)f = ge(t, a + s, e, o, c), s += f, o += f, c -= f, f = r.cipher(i, n + a, s - (c ? 0 : d)), f && l.set(t.subarray(a, a + f), u), u += f, f < s ? (a += f, s -= f) : (a = 0, s = 0);
        return this.pos = a, this.len = s, l;
    }
    AES_Decrypt_finish() {
        let { heap: e, asm: t } = this.acquire_asm(), r = ye.DEC[this.mode], i = ye.HEAP_DATA, n = this.pos, a = this.len, s = a;
        if (a > 0) {
            if (a % 16) {
                if (this.hasOwnProperty("padding")) throw new _e("data length must be a multiple of the block size");
                a += 16 - a % 16;
            }
            if (t.cipher(r, i + n, a), this.hasOwnProperty("padding") && this.padding) {
                let t = e[n + s - 1];
                if (t < 1 || t > 16 || t > s) throw new ke("bad padding");
                let r = 0;
                for(let i = t; i > 1; i--)r |= t ^ e[n + s - i];
                if (r) throw new ke("bad padding");
                s -= t;
            }
        }
        const o = new Uint8Array(s);
        return s > 0 && o.set(e.subarray(n, n + s)), this.pos = 0, this.len = 0, this.release_asm(), o;
    }
}
class Pe {
    static encrypt(e, t, r = !1) {
        return new Pe(t, r).encrypt(e);
    }
    static decrypt(e, t, r = !1) {
        return new Pe(t, r).decrypt(e);
    }
    constructor(e, t = !1, r){
        this.aes = r || new Ee(e, void 0, t, "ECB");
    }
    encrypt(e) {
        return we(this.aes.AES_Encrypt_process(e), this.aes.AES_Encrypt_finish());
    }
    decrypt(e) {
        return we(this.aes.AES_Decrypt_process(e), this.aes.AES_Decrypt_finish());
    }
}
function xe(e) {
    const t = function(e) {
        const t = new Pe(e);
        this.encrypt = function(e) {
            return t.encrypt(e);
        }, this.decrypt = function(e) {
            return t.decrypt(e);
        };
    };
    return t.blockSize = t.prototype.blockSize = 16, t.keySize = t.prototype.keySize = e / 8, t;
}
function Me(e, t, r, i, n, a) {
    const s = [
        16843776,
        0,
        65536,
        16843780,
        16842756,
        66564,
        4,
        65536,
        1024,
        16843776,
        16843780,
        1024,
        16778244,
        16842756,
        16777216,
        4,
        1028,
        16778240,
        16778240,
        66560,
        66560,
        16842752,
        16842752,
        16778244,
        65540,
        16777220,
        16777220,
        65540,
        0,
        1028,
        66564,
        16777216,
        65536,
        16843780,
        4,
        16842752,
        16843776,
        16777216,
        16777216,
        1024,
        16842756,
        65536,
        66560,
        16777220,
        1024,
        4,
        16778244,
        66564,
        16843780,
        65540,
        16842752,
        16778244,
        16777220,
        1028,
        66564,
        16843776,
        1028,
        16778240,
        16778240,
        0,
        65540,
        66560,
        0,
        16842756
    ], o = [
        -2146402272,
        -2147450880,
        32768,
        1081376,
        1048576,
        32,
        -2146435040,
        -2147450848,
        -2147483616,
        -2146402272,
        -2146402304,
        -2147483648,
        -2147450880,
        1048576,
        32,
        -2146435040,
        1081344,
        1048608,
        -2147450848,
        0,
        -2147483648,
        32768,
        1081376,
        -2146435072,
        1048608,
        -2147483616,
        0,
        1081344,
        32800,
        -2146402304,
        -2146435072,
        32800,
        0,
        1081376,
        -2146435040,
        1048576,
        -2147450848,
        -2146435072,
        -2146402304,
        32768,
        -2146435072,
        -2147450880,
        32,
        -2146402272,
        1081376,
        32,
        32768,
        -2147483648,
        32800,
        -2146402304,
        1048576,
        -2147483616,
        1048608,
        -2147450848,
        -2147483616,
        1048608,
        1081344,
        0,
        -2147450880,
        32800,
        -2147483648,
        -2146435040,
        -2146402272,
        1081344
    ], c = [
        520,
        134349312,
        0,
        134348808,
        134218240,
        0,
        131592,
        134218240,
        131080,
        134217736,
        134217736,
        131072,
        134349320,
        131080,
        134348800,
        520,
        134217728,
        8,
        134349312,
        512,
        131584,
        134348800,
        134348808,
        131592,
        134218248,
        131584,
        131072,
        134218248,
        8,
        134349320,
        512,
        134217728,
        134349312,
        134217728,
        131080,
        520,
        131072,
        134349312,
        134218240,
        0,
        512,
        131080,
        134349320,
        134218240,
        134217736,
        512,
        0,
        134348808,
        134218248,
        131072,
        134217728,
        134349320,
        8,
        131592,
        131584,
        134217736,
        134348800,
        134218248,
        520,
        134348800,
        131592,
        8,
        134348808,
        131584
    ], u = [
        8396801,
        8321,
        8321,
        128,
        8396928,
        8388737,
        8388609,
        8193,
        0,
        8396800,
        8396800,
        8396929,
        129,
        0,
        8388736,
        8388609,
        1,
        8192,
        8388608,
        8396801,
        128,
        8388608,
        8193,
        8320,
        8388737,
        1,
        8320,
        8388736,
        8192,
        8396928,
        8396929,
        129,
        8388736,
        8388609,
        8396800,
        8396929,
        129,
        0,
        0,
        8396800,
        8320,
        8388736,
        8388737,
        1,
        8396801,
        8321,
        8321,
        128,
        8396929,
        129,
        1,
        8192,
        8388609,
        8193,
        8396928,
        8388737,
        8193,
        8320,
        8388608,
        8396801,
        128,
        8388608,
        8192,
        8396928
    ], h = [
        256,
        34078976,
        34078720,
        1107296512,
        524288,
        256,
        1073741824,
        34078720,
        1074266368,
        524288,
        33554688,
        1074266368,
        1107296512,
        1107820544,
        524544,
        1073741824,
        33554432,
        1074266112,
        1074266112,
        0,
        1073742080,
        1107820800,
        1107820800,
        33554688,
        1107820544,
        1073742080,
        0,
        1107296256,
        34078976,
        33554432,
        1107296256,
        524544,
        524288,
        1107296512,
        256,
        33554432,
        1073741824,
        34078720,
        1107296512,
        1074266368,
        33554688,
        1073741824,
        1107820544,
        34078976,
        1074266368,
        256,
        33554432,
        1107820544,
        1107820800,
        524544,
        1107296256,
        1107820800,
        34078720,
        0,
        1074266112,
        1107296256,
        524544,
        33554688,
        1073742080,
        524288,
        0,
        1074266112,
        34078976,
        1073742080
    ], d = [
        536870928,
        541065216,
        16384,
        541081616,
        541065216,
        16,
        541081616,
        4194304,
        536887296,
        4210704,
        4194304,
        536870928,
        4194320,
        536887296,
        536870912,
        16400,
        0,
        4194320,
        536887312,
        16384,
        4210688,
        536887312,
        16,
        541065232,
        541065232,
        0,
        4210704,
        541081600,
        16400,
        4210688,
        541081600,
        536870912,
        536887296,
        16,
        541065232,
        4210688,
        541081616,
        4194304,
        16400,
        536870928,
        4194304,
        536887296,
        536870912,
        16400,
        536870928,
        541081616,
        4210688,
        541065216,
        4210704,
        541081600,
        0,
        541065232,
        16,
        16384,
        541065216,
        4210704,
        16384,
        4194320,
        536887312,
        0,
        541081600,
        536870912,
        4194320,
        536887312
    ], f = [
        2097152,
        69206018,
        67110914,
        0,
        2048,
        67110914,
        2099202,
        69208064,
        69208066,
        2097152,
        0,
        67108866,
        2,
        67108864,
        69206018,
        2050,
        67110912,
        2099202,
        2097154,
        67110912,
        67108866,
        69206016,
        69208064,
        2097154,
        69206016,
        2048,
        2050,
        69208066,
        2099200,
        2,
        67108864,
        2099200,
        67108864,
        2099200,
        2097152,
        67110914,
        67110914,
        69206018,
        69206018,
        2,
        2097154,
        67108864,
        67110912,
        2097152,
        69208064,
        2050,
        2099202,
        69208064,
        2050,
        67108866,
        69208066,
        69206016,
        2099200,
        0,
        2,
        69208066,
        0,
        2099202,
        69206016,
        2048,
        67108866,
        67110912,
        2048,
        2097154
    ], l = [
        268439616,
        4096,
        262144,
        268701760,
        268435456,
        268439616,
        64,
        268435456,
        262208,
        268697600,
        268701760,
        266240,
        268701696,
        266304,
        4096,
        64,
        268697600,
        268435520,
        268439552,
        4160,
        266240,
        262208,
        268697664,
        268701696,
        4160,
        0,
        0,
        268697664,
        268435520,
        268439552,
        266304,
        262144,
        266304,
        262144,
        268701696,
        4096,
        64,
        268697664,
        4096,
        266304,
        268439552,
        64,
        268435520,
        268697600,
        268697664,
        268435456,
        262144,
        268439616,
        0,
        268701760,
        262208,
        268435520,
        268697600,
        268439552,
        268439616,
        0,
        268701760,
        266240,
        266240,
        4160,
        4160,
        262208,
        268435456,
        268701696
    ];
    let p, y, b, m, g, w, v, _, k, A, S, E, P, x, M = 0, C = t.length;
    const K = 32 === e.length ? 3 : 9;
    _ = 3 === K ? r ? [
        0,
        32,
        2
    ] : [
        30,
        -2,
        -2
    ] : r ? [
        0,
        32,
        2,
        62,
        30,
        -2,
        64,
        96,
        2
    ] : [
        94,
        62,
        -2,
        32,
        64,
        2,
        30,
        -2,
        -2
    ], r && (t = function(e, t) {
        const r = 8 - e.length % 8;
        let i;
        if (2 === t && r < 8) i = 32;
        else if (1 === t) i = r;
        else {
            if (t || !(r < 8)) {
                if (8 === r) return e;
                throw Error("des: invalid padding");
            }
            i = 0;
        }
        const n = new Uint8Array(e.length + r);
        for(let t = 0; t < e.length; t++)n[t] = e[t];
        for(let t = 0; t < r; t++)n[e.length + t] = i;
        return n;
    }(t, a), C = t.length);
    let D = new Uint8Array(C), R = 0;
    for(1 === i && (k = n[M++] << 24 | n[M++] << 16 | n[M++] << 8 | n[M++], S = n[M++] << 24 | n[M++] << 16 | n[M++] << 8 | n[M++], M = 0); M < C;){
        for(w = t[M++] << 24 | t[M++] << 16 | t[M++] << 8 | t[M++], v = t[M++] << 24 | t[M++] << 16 | t[M++] << 8 | t[M++], 1 === i && (r ? (w ^= k, v ^= S) : (A = k, E = S, k = w, S = v)), b = 252645135 & (w >>> 4 ^ v), v ^= b, w ^= b << 4, b = 65535 & (w >>> 16 ^ v), v ^= b, w ^= b << 16, b = 858993459 & (v >>> 2 ^ w), w ^= b, v ^= b << 2, b = 16711935 & (v >>> 8 ^ w), w ^= b, v ^= b << 8, b = 1431655765 & (w >>> 1 ^ v), v ^= b, w ^= b << 1, w = w << 1 | w >>> 31, v = v << 1 | v >>> 31, y = 0; y < K; y += 3){
            for(P = _[y + 1], x = _[y + 2], p = _[y]; p !== P; p += x)m = v ^ e[p], g = (v >>> 4 | v << 28) ^ e[p + 1], b = w, w = v, v = b ^ (o[m >>> 24 & 63] | u[m >>> 16 & 63] | d[m >>> 8 & 63] | l[63 & m] | s[g >>> 24 & 63] | c[g >>> 16 & 63] | h[g >>> 8 & 63] | f[63 & g]);
            b = w, w = v, v = b;
        }
        w = w >>> 1 | w << 31, v = v >>> 1 | v << 31, b = 1431655765 & (w >>> 1 ^ v), v ^= b, w ^= b << 1, b = 16711935 & (v >>> 8 ^ w), w ^= b, v ^= b << 8, b = 858993459 & (v >>> 2 ^ w), w ^= b, v ^= b << 2, b = 65535 & (w >>> 16 ^ v), v ^= b, w ^= b << 16, b = 252645135 & (w >>> 4 ^ v), v ^= b, w ^= b << 4, 1 === i && (r ? (k = w, S = v) : (w ^= A, v ^= E)), D[R++] = w >>> 24, D[R++] = w >>> 16 & 255, D[R++] = w >>> 8 & 255, D[R++] = 255 & w, D[R++] = v >>> 24, D[R++] = v >>> 16 & 255, D[R++] = v >>> 8 & 255, D[R++] = 255 & v;
    }
    return r || (D = function(e, t) {
        let r, i = null;
        if (2 === t) r = 32;
        else if (1 === t) i = e[e.length - 1];
        else {
            if (t) throw Error("des: invalid padding");
            r = 0;
        }
        if (!i) {
            for(i = 1; e[e.length - i] === r;)i++;
            i--;
        }
        return e.subarray(0, e.length - i);
    }(D, a)), D;
}
function Ce(e) {
    const t = [
        0,
        4,
        536870912,
        536870916,
        65536,
        65540,
        536936448,
        536936452,
        512,
        516,
        536871424,
        536871428,
        66048,
        66052,
        536936960,
        536936964
    ], r = [
        0,
        1,
        1048576,
        1048577,
        67108864,
        67108865,
        68157440,
        68157441,
        256,
        257,
        1048832,
        1048833,
        67109120,
        67109121,
        68157696,
        68157697
    ], i = [
        0,
        8,
        2048,
        2056,
        16777216,
        16777224,
        16779264,
        16779272,
        0,
        8,
        2048,
        2056,
        16777216,
        16777224,
        16779264,
        16779272
    ], n = [
        0,
        2097152,
        134217728,
        136314880,
        8192,
        2105344,
        134225920,
        136323072,
        131072,
        2228224,
        134348800,
        136445952,
        139264,
        2236416,
        134356992,
        136454144
    ], a = [
        0,
        262144,
        16,
        262160,
        0,
        262144,
        16,
        262160,
        4096,
        266240,
        4112,
        266256,
        4096,
        266240,
        4112,
        266256
    ], s = [
        0,
        1024,
        32,
        1056,
        0,
        1024,
        32,
        1056,
        33554432,
        33555456,
        33554464,
        33555488,
        33554432,
        33555456,
        33554464,
        33555488
    ], o = [
        0,
        268435456,
        524288,
        268959744,
        2,
        268435458,
        524290,
        268959746,
        0,
        268435456,
        524288,
        268959744,
        2,
        268435458,
        524290,
        268959746
    ], c = [
        0,
        65536,
        2048,
        67584,
        536870912,
        536936448,
        536872960,
        536938496,
        131072,
        196608,
        133120,
        198656,
        537001984,
        537067520,
        537004032,
        537069568
    ], u = [
        0,
        262144,
        0,
        262144,
        2,
        262146,
        2,
        262146,
        33554432,
        33816576,
        33554432,
        33816576,
        33554434,
        33816578,
        33554434,
        33816578
    ], h = [
        0,
        268435456,
        8,
        268435464,
        0,
        268435456,
        8,
        268435464,
        1024,
        268436480,
        1032,
        268436488,
        1024,
        268436480,
        1032,
        268436488
    ], d = [
        0,
        32,
        0,
        32,
        1048576,
        1048608,
        1048576,
        1048608,
        8192,
        8224,
        8192,
        8224,
        1056768,
        1056800,
        1056768,
        1056800
    ], f = [
        0,
        16777216,
        512,
        16777728,
        2097152,
        18874368,
        2097664,
        18874880,
        67108864,
        83886080,
        67109376,
        83886592,
        69206016,
        85983232,
        69206528,
        85983744
    ], l = [
        0,
        4096,
        134217728,
        134221824,
        524288,
        528384,
        134742016,
        134746112,
        16,
        4112,
        134217744,
        134221840,
        524304,
        528400,
        134742032,
        134746128
    ], p = [
        0,
        4,
        256,
        260,
        0,
        4,
        256,
        260,
        1,
        5,
        257,
        261,
        1,
        5,
        257,
        261
    ], y = e.length > 8 ? 3 : 1, b = Array(32 * y), m = [
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0
    ];
    let g, w, v, _ = 0, k = 0;
    for(let A = 0; A < y; A++){
        let y = e[_++] << 24 | e[_++] << 16 | e[_++] << 8 | e[_++], A = e[_++] << 24 | e[_++] << 16 | e[_++] << 8 | e[_++];
        v = 252645135 & (y >>> 4 ^ A), A ^= v, y ^= v << 4, v = 65535 & (A >>> -16 ^ y), y ^= v, A ^= v << -16, v = 858993459 & (y >>> 2 ^ A), A ^= v, y ^= v << 2, v = 65535 & (A >>> -16 ^ y), y ^= v, A ^= v << -16, v = 1431655765 & (y >>> 1 ^ A), A ^= v, y ^= v << 1, v = 16711935 & (A >>> 8 ^ y), y ^= v, A ^= v << 8, v = 1431655765 & (y >>> 1 ^ A), A ^= v, y ^= v << 1, v = y << 8 | A >>> 20 & 240, y = A << 24 | A << 8 & 16711680 | A >>> 8 & 65280 | A >>> 24 & 240, A = v;
        for(let e = 0; e < 16; e++)m[e] ? (y = y << 2 | y >>> 26, A = A << 2 | A >>> 26) : (y = y << 1 | y >>> 27, A = A << 1 | A >>> 27), y &= -15, A &= -15, g = t[y >>> 28] | r[y >>> 24 & 15] | i[y >>> 20 & 15] | n[y >>> 16 & 15] | a[y >>> 12 & 15] | s[y >>> 8 & 15] | o[y >>> 4 & 15], w = c[A >>> 28] | u[A >>> 24 & 15] | h[A >>> 20 & 15] | d[A >>> 16 & 15] | f[A >>> 12 & 15] | l[A >>> 8 & 15] | p[A >>> 4 & 15], v = 65535 & (w >>> 16 ^ g), b[k++] = g ^ v, b[k++] = w ^ v << 16;
    }
    return b;
}
function Ke(e) {
    this.key = [];
    for(let t = 0; t < 3; t++)this.key.push(new Uint8Array(e.subarray(8 * t, 8 * t + 8)));
    this.encrypt = function(e) {
        return Me(Ce(this.key[2]), Me(Ce(this.key[1]), Me(Ce(this.key[0]), e, !0, 0, null, null), !1, 0, null, null), !0, 0, null, null);
    };
}
function De() {
    this.BlockSize = 8, this.KeySize = 16, this.setKey = function(e) {
        if (this.masking = Array(16), this.rotate = Array(16), this.reset(), e.length !== this.KeySize) throw Error("CAST-128: keys must be 16 bytes");
        return this.keySchedule(e), !0;
    }, this.reset = function() {
        for(let e = 0; e < 16; e++)this.masking[e] = 0, this.rotate[e] = 0;
    }, this.getBlockSize = function() {
        return this.BlockSize;
    }, this.encrypt = function(e) {
        const t = Array(e.length);
        for(let a = 0; a < e.length; a += 8){
            let s, o = e[a] << 24 | e[a + 1] << 16 | e[a + 2] << 8 | e[a + 3], c = e[a + 4] << 24 | e[a + 5] << 16 | e[a + 6] << 8 | e[a + 7];
            s = c, c = o ^ r(c, this.masking[0], this.rotate[0]), o = s, s = c, c = o ^ i(c, this.masking[1], this.rotate[1]), o = s, s = c, c = o ^ n(c, this.masking[2], this.rotate[2]), o = s, s = c, c = o ^ r(c, this.masking[3], this.rotate[3]), o = s, s = c, c = o ^ i(c, this.masking[4], this.rotate[4]), o = s, s = c, c = o ^ n(c, this.masking[5], this.rotate[5]), o = s, s = c, c = o ^ r(c, this.masking[6], this.rotate[6]), o = s, s = c, c = o ^ i(c, this.masking[7], this.rotate[7]), o = s, s = c, c = o ^ n(c, this.masking[8], this.rotate[8]), o = s, s = c, c = o ^ r(c, this.masking[9], this.rotate[9]), o = s, s = c, c = o ^ i(c, this.masking[10], this.rotate[10]), o = s, s = c, c = o ^ n(c, this.masking[11], this.rotate[11]), o = s, s = c, c = o ^ r(c, this.masking[12], this.rotate[12]), o = s, s = c, c = o ^ i(c, this.masking[13], this.rotate[13]), o = s, s = c, c = o ^ n(c, this.masking[14], this.rotate[14]), o = s, s = c, c = o ^ r(c, this.masking[15], this.rotate[15]), o = s, t[a] = c >>> 24 & 255, t[a + 1] = c >>> 16 & 255, t[a + 2] = c >>> 8 & 255, t[a + 3] = 255 & c, t[a + 4] = o >>> 24 & 255, t[a + 5] = o >>> 16 & 255, t[a + 6] = o >>> 8 & 255, t[a + 7] = 255 & o;
        }
        return t;
    }, this.decrypt = function(e) {
        const t = Array(e.length);
        for(let a = 0; a < e.length; a += 8){
            let s, o = e[a] << 24 | e[a + 1] << 16 | e[a + 2] << 8 | e[a + 3], c = e[a + 4] << 24 | e[a + 5] << 16 | e[a + 6] << 8 | e[a + 7];
            s = c, c = o ^ r(c, this.masking[15], this.rotate[15]), o = s, s = c, c = o ^ n(c, this.masking[14], this.rotate[14]), o = s, s = c, c = o ^ i(c, this.masking[13], this.rotate[13]), o = s, s = c, c = o ^ r(c, this.masking[12], this.rotate[12]), o = s, s = c, c = o ^ n(c, this.masking[11], this.rotate[11]), o = s, s = c, c = o ^ i(c, this.masking[10], this.rotate[10]), o = s, s = c, c = o ^ r(c, this.masking[9], this.rotate[9]), o = s, s = c, c = o ^ n(c, this.masking[8], this.rotate[8]), o = s, s = c, c = o ^ i(c, this.masking[7], this.rotate[7]), o = s, s = c, c = o ^ r(c, this.masking[6], this.rotate[6]), o = s, s = c, c = o ^ n(c, this.masking[5], this.rotate[5]), o = s, s = c, c = o ^ i(c, this.masking[4], this.rotate[4]), o = s, s = c, c = o ^ r(c, this.masking[3], this.rotate[3]), o = s, s = c, c = o ^ n(c, this.masking[2], this.rotate[2]), o = s, s = c, c = o ^ i(c, this.masking[1], this.rotate[1]), o = s, s = c, c = o ^ r(c, this.masking[0], this.rotate[0]), o = s, t[a] = c >>> 24 & 255, t[a + 1] = c >>> 16 & 255, t[a + 2] = c >>> 8 & 255, t[a + 3] = 255 & c, t[a + 4] = o >>> 24 & 255, t[a + 5] = o >> 16 & 255, t[a + 6] = o >> 8 & 255, t[a + 7] = 255 & o;
        }
        return t;
    };
    const e = [
        ,
        ,
        ,
        , 
    ];
    e[0] = [
        ,
        ,
        ,
        , 
    ], e[0][0] = [
        4,
        0,
        13,
        15,
        12,
        14,
        8
    ], e[0][1] = [
        5,
        2,
        16,
        18,
        17,
        19,
        10
    ], e[0][2] = [
        6,
        3,
        23,
        22,
        21,
        20,
        9
    ], e[0][3] = [
        7,
        1,
        26,
        25,
        27,
        24,
        11
    ], e[1] = [
        ,
        ,
        ,
        , 
    ], e[1][0] = [
        0,
        6,
        21,
        23,
        20,
        22,
        16
    ], e[1][1] = [
        1,
        4,
        0,
        2,
        1,
        3,
        18
    ], e[1][2] = [
        2,
        5,
        7,
        6,
        5,
        4,
        17
    ], e[1][3] = [
        3,
        7,
        10,
        9,
        11,
        8,
        19
    ], e[2] = [
        ,
        ,
        ,
        , 
    ], e[2][0] = [
        4,
        0,
        13,
        15,
        12,
        14,
        8
    ], e[2][1] = [
        5,
        2,
        16,
        18,
        17,
        19,
        10
    ], e[2][2] = [
        6,
        3,
        23,
        22,
        21,
        20,
        9
    ], e[2][3] = [
        7,
        1,
        26,
        25,
        27,
        24,
        11
    ], e[3] = [
        ,
        ,
        ,
        , 
    ], e[3][0] = [
        0,
        6,
        21,
        23,
        20,
        22,
        16
    ], e[3][1] = [
        1,
        4,
        0,
        2,
        1,
        3,
        18
    ], e[3][2] = [
        2,
        5,
        7,
        6,
        5,
        4,
        17
    ], e[3][3] = [
        3,
        7,
        10,
        9,
        11,
        8,
        19
    ];
    const t = [
        ,
        ,
        ,
        , 
    ];
    function r(e, t, r) {
        const i = t + e, n = i << r | i >>> 32 - r;
        return (a[0][n >>> 24] ^ a[1][n >>> 16 & 255]) - a[2][n >>> 8 & 255] + a[3][255 & n];
    }
    function i(e, t, r) {
        const i = t ^ e, n = i << r | i >>> 32 - r;
        return a[0][n >>> 24] - a[1][n >>> 16 & 255] + a[2][n >>> 8 & 255] ^ a[3][255 & n];
    }
    function n(e, t, r) {
        const i = t - e, n = i << r | i >>> 32 - r;
        return (a[0][n >>> 24] + a[1][n >>> 16 & 255] ^ a[2][n >>> 8 & 255]) - a[3][255 & n];
    }
    t[0] = [
        ,
        ,
        ,
        , 
    ], t[0][0] = [
        24,
        25,
        23,
        22,
        18
    ], t[0][1] = [
        26,
        27,
        21,
        20,
        22
    ], t[0][2] = [
        28,
        29,
        19,
        18,
        25
    ], t[0][3] = [
        30,
        31,
        17,
        16,
        28
    ], t[1] = [
        ,
        ,
        ,
        , 
    ], t[1][0] = [
        3,
        2,
        12,
        13,
        8
    ], t[1][1] = [
        1,
        0,
        14,
        15,
        13
    ], t[1][2] = [
        7,
        6,
        8,
        9,
        3
    ], t[1][3] = [
        5,
        4,
        10,
        11,
        7
    ], t[2] = [
        ,
        ,
        ,
        , 
    ], t[2][0] = [
        19,
        18,
        28,
        29,
        25
    ], t[2][1] = [
        17,
        16,
        30,
        31,
        28
    ], t[2][2] = [
        23,
        22,
        24,
        25,
        18
    ], t[2][3] = [
        21,
        20,
        26,
        27,
        22
    ], t[3] = [
        ,
        ,
        ,
        , 
    ], t[3][0] = [
        8,
        9,
        7,
        6,
        3
    ], t[3][1] = [
        10,
        11,
        5,
        4,
        7
    ], t[3][2] = [
        12,
        13,
        3,
        2,
        8
    ], t[3][3] = [
        14,
        15,
        1,
        0,
        13
    ], this.keySchedule = function(r) {
        const i = [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            , 
        ], n = Array(32);
        let s;
        for(let e = 0; e < 4; e++)s = 4 * e, i[e] = r[s] << 24 | r[s + 1] << 16 | r[s + 2] << 8 | r[s + 3];
        const o = [
            6,
            7,
            4,
            5
        ];
        let c, u = 0;
        for(let r = 0; r < 2; r++)for(let r = 0; r < 4; r++){
            for(s = 0; s < 4; s++){
                const t = e[r][s];
                c = i[t[1]], c ^= a[4][i[t[2] >>> 2] >>> 24 - 8 * (3 & t[2]) & 255], c ^= a[5][i[t[3] >>> 2] >>> 24 - 8 * (3 & t[3]) & 255], c ^= a[6][i[t[4] >>> 2] >>> 24 - 8 * (3 & t[4]) & 255], c ^= a[7][i[t[5] >>> 2] >>> 24 - 8 * (3 & t[5]) & 255], c ^= a[o[s]][i[t[6] >>> 2] >>> 24 - 8 * (3 & t[6]) & 255], i[t[0]] = c;
            }
            for(s = 0; s < 4; s++){
                const e = t[r][s];
                c = a[4][i[e[0] >>> 2] >>> 24 - 8 * (3 & e[0]) & 255], c ^= a[5][i[e[1] >>> 2] >>> 24 - 8 * (3 & e[1]) & 255], c ^= a[6][i[e[2] >>> 2] >>> 24 - 8 * (3 & e[2]) & 255], c ^= a[7][i[e[3] >>> 2] >>> 24 - 8 * (3 & e[3]) & 255], c ^= a[4 + s][i[e[4] >>> 2] >>> 24 - 8 * (3 & e[4]) & 255], n[u] = c, u++;
            }
        }
        for(let e = 0; e < 16; e++)this.masking[e] = n[e], this.rotate[e] = 31 & n[16 + e];
    };
    const a = [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        , 
    ];
    a[0] = [
        821772500,
        2678128395,
        1810681135,
        1059425402,
        505495343,
        2617265619,
        1610868032,
        3483355465,
        3218386727,
        2294005173,
        3791863952,
        2563806837,
        1852023008,
        365126098,
        3269944861,
        584384398,
        677919599,
        3229601881,
        4280515016,
        2002735330,
        1136869587,
        3744433750,
        2289869850,
        2731719981,
        2714362070,
        879511577,
        1639411079,
        575934255,
        717107937,
        2857637483,
        576097850,
        2731753936,
        1725645e3,
        2810460463,
        5111599,
        767152862,
        2543075244,
        1251459544,
        1383482551,
        3052681127,
        3089939183,
        3612463449,
        1878520045,
        1510570527,
        2189125840,
        2431448366,
        582008916,
        3163445557,
        1265446783,
        1354458274,
        3529918736,
        3202711853,
        3073581712,
        3912963487,
        3029263377,
        1275016285,
        4249207360,
        2905708351,
        3304509486,
        1442611557,
        3585198765,
        2712415662,
        2731849581,
        3248163920,
        2283946226,
        208555832,
        2766454743,
        1331405426,
        1447828783,
        3315356441,
        3108627284,
        2957404670,
        2981538698,
        3339933917,
        1669711173,
        286233437,
        1465092821,
        1782121619,
        3862771680,
        710211251,
        980974943,
        1651941557,
        430374111,
        2051154026,
        704238805,
        4128970897,
        3144820574,
        2857402727,
        948965521,
        3333752299,
        2227686284,
        718756367,
        2269778983,
        2731643755,
        718440111,
        2857816721,
        3616097120,
        1113355533,
        2478022182,
        410092745,
        1811985197,
        1944238868,
        2696854588,
        1415722873,
        1682284203,
        1060277122,
        1998114690,
        1503841958,
        82706478,
        2315155686,
        1068173648,
        845149890,
        2167947013,
        1768146376,
        1993038550,
        3566826697,
        3390574031,
        940016341,
        3355073782,
        2328040721,
        904371731,
        1205506512,
        4094660742,
        2816623006,
        825647681,
        85914773,
        2857843460,
        1249926541,
        1417871568,
        3287612,
        3211054559,
        3126306446,
        1975924523,
        1353700161,
        2814456437,
        2438597621,
        1800716203,
        722146342,
        2873936343,
        1151126914,
        4160483941,
        2877670899,
        458611604,
        2866078500,
        3483680063,
        770352098,
        2652916994,
        3367839148,
        3940505011,
        3585973912,
        3809620402,
        718646636,
        2504206814,
        2914927912,
        3631288169,
        2857486607,
        2860018678,
        575749918,
        2857478043,
        718488780,
        2069512688,
        3548183469,
        453416197,
        1106044049,
        3032691430,
        52586708,
        3378514636,
        3459808877,
        3211506028,
        1785789304,
        218356169,
        3571399134,
        3759170522,
        1194783844,
        1523787992,
        3007827094,
        1975193539,
        2555452411,
        1341901877,
        3045838698,
        3776907964,
        3217423946,
        2802510864,
        2889438986,
        1057244207,
        1636348243,
        3761863214,
        1462225785,
        2632663439,
        481089165,
        718503062,
        24497053,
        3332243209,
        3344655856,
        3655024856,
        3960371065,
        1195698900,
        2971415156,
        3710176158,
        2115785917,
        4027663609,
        3525578417,
        2524296189,
        2745972565,
        3564906415,
        1372086093,
        1452307862,
        2780501478,
        1476592880,
        3389271281,
        18495466,
        2378148571,
        901398090,
        891748256,
        3279637769,
        3157290713,
        2560960102,
        1447622437,
        4284372637,
        216884176,
        2086908623,
        1879786977,
        3588903153,
        2242455666,
        2938092967,
        3559082096,
        2810645491,
        758861177,
        1121993112,
        215018983,
        642190776,
        4169236812,
        1196255959,
        2081185372,
        3508738393,
        941322904,
        4124243163,
        2877523539,
        1848581667,
        2205260958,
        3180453958,
        2589345134,
        3694731276,
        550028657,
        2519456284,
        3789985535,
        2973870856,
        2093648313,
        443148163,
        46942275,
        2734146937,
        1117713533,
        1115362972,
        1523183689,
        3717140224,
        1551984063
    ], a[1] = [
        522195092,
        4010518363,
        1776537470,
        960447360,
        4267822970,
        4005896314,
        1435016340,
        1929119313,
        2913464185,
        1310552629,
        3579470798,
        3724818106,
        2579771631,
        1594623892,
        417127293,
        2715217907,
        2696228731,
        1508390405,
        3994398868,
        3925858569,
        3695444102,
        4019471449,
        3129199795,
        3770928635,
        3520741761,
        990456497,
        4187484609,
        2783367035,
        21106139,
        3840405339,
        631373633,
        3783325702,
        532942976,
        396095098,
        3548038825,
        4267192484,
        2564721535,
        2011709262,
        2039648873,
        620404603,
        3776170075,
        2898526339,
        3612357925,
        4159332703,
        1645490516,
        223693667,
        1567101217,
        3362177881,
        1029951347,
        3470931136,
        3570957959,
        1550265121,
        119497089,
        972513919,
        907948164,
        3840628539,
        1613718692,
        3594177948,
        465323573,
        2659255085,
        654439692,
        2575596212,
        2699288441,
        3127702412,
        277098644,
        624404830,
        4100943870,
        2717858591,
        546110314,
        2403699828,
        3655377447,
        1321679412,
        4236791657,
        1045293279,
        4010672264,
        895050893,
        2319792268,
        494945126,
        1914543101,
        2777056443,
        3894764339,
        2219737618,
        311263384,
        4275257268,
        3458730721,
        669096869,
        3584475730,
        3835122877,
        3319158237,
        3949359204,
        2005142349,
        2713102337,
        2228954793,
        3769984788,
        569394103,
        3855636576,
        1425027204,
        108000370,
        2736431443,
        3671869269,
        3043122623,
        1750473702,
        2211081108,
        762237499,
        3972989403,
        2798899386,
        3061857628,
        2943854345,
        867476300,
        964413654,
        1591880597,
        1594774276,
        2179821409,
        552026980,
        3026064248,
        3726140315,
        2283577634,
        3110545105,
        2152310760,
        582474363,
        1582640421,
        1383256631,
        2043843868,
        3322775884,
        1217180674,
        463797851,
        2763038571,
        480777679,
        2718707717,
        2289164131,
        3118346187,
        214354409,
        200212307,
        3810608407,
        3025414197,
        2674075964,
        3997296425,
        1847405948,
        1342460550,
        510035443,
        4080271814,
        815934613,
        833030224,
        1620250387,
        1945732119,
        2703661145,
        3966000196,
        1388869545,
        3456054182,
        2687178561,
        2092620194,
        562037615,
        1356438536,
        3409922145,
        3261847397,
        1688467115,
        2150901366,
        631725691,
        3840332284,
        549916902,
        3455104640,
        394546491,
        837744717,
        2114462948,
        751520235,
        2221554606,
        2415360136,
        3999097078,
        2063029875,
        803036379,
        2702586305,
        821456707,
        3019566164,
        360699898,
        4018502092,
        3511869016,
        3677355358,
        2402471449,
        812317050,
        49299192,
        2570164949,
        3259169295,
        2816732080,
        3331213574,
        3101303564,
        2156015656,
        3705598920,
        3546263921,
        143268808,
        3200304480,
        1638124008,
        3165189453,
        3341807610,
        578956953,
        2193977524,
        3638120073,
        2333881532,
        807278310,
        658237817,
        2969561766,
        1641658566,
        11683945,
        3086995007,
        148645947,
        1138423386,
        4158756760,
        1981396783,
        2401016740,
        3699783584,
        380097457,
        2680394679,
        2803068651,
        3334260286,
        441530178,
        4016580796,
        1375954390,
        761952171,
        891809099,
        2183123478,
        157052462,
        3683840763,
        1592404427,
        341349109,
        2438483839,
        1417898363,
        644327628,
        2233032776,
        2353769706,
        2201510100,
        220455161,
        1815641738,
        182899273,
        2995019788,
        3627381533,
        3702638151,
        2890684138,
        1052606899,
        588164016,
        1681439879,
        4038439418,
        2405343923,
        4229449282,
        167996282,
        1336969661,
        1688053129,
        2739224926,
        1543734051,
        1046297529,
        1138201970,
        2121126012,
        115334942,
        1819067631,
        1902159161,
        1941945968,
        2206692869,
        1159982321
    ], a[2] = [
        2381300288,
        637164959,
        3952098751,
        3893414151,
        1197506559,
        916448331,
        2350892612,
        2932787856,
        3199334847,
        4009478890,
        3905886544,
        1373570990,
        2450425862,
        4037870920,
        3778841987,
        2456817877,
        286293407,
        124026297,
        3001279700,
        1028597854,
        3115296800,
        4208886496,
        2691114635,
        2188540206,
        1430237888,
        1218109995,
        3572471700,
        308166588,
        570424558,
        2187009021,
        2455094765,
        307733056,
        1310360322,
        3135275007,
        1384269543,
        2388071438,
        863238079,
        2359263624,
        2801553128,
        3380786597,
        2831162807,
        1470087780,
        1728663345,
        4072488799,
        1090516929,
        532123132,
        2389430977,
        1132193179,
        2578464191,
        3051079243,
        1670234342,
        1434557849,
        2711078940,
        1241591150,
        3314043432,
        3435360113,
        3091448339,
        1812415473,
        2198440252,
        267246943,
        796911696,
        3619716990,
        38830015,
        1526438404,
        2806502096,
        374413614,
        2943401790,
        1489179520,
        1603809326,
        1920779204,
        168801282,
        260042626,
        2358705581,
        1563175598,
        2397674057,
        1356499128,
        2217211040,
        514611088,
        2037363785,
        2186468373,
        4022173083,
        2792511869,
        2913485016,
        1173701892,
        4200428547,
        3896427269,
        1334932762,
        2455136706,
        602925377,
        2835607854,
        1613172210,
        41346230,
        2499634548,
        2457437618,
        2188827595,
        41386358,
        4172255629,
        1313404830,
        2405527007,
        3801973774,
        2217704835,
        873260488,
        2528884354,
        2478092616,
        4012915883,
        2555359016,
        2006953883,
        2463913485,
        575479328,
        2218240648,
        2099895446,
        660001756,
        2341502190,
        3038761536,
        3888151779,
        3848713377,
        3286851934,
        1022894237,
        1620365795,
        3449594689,
        1551255054,
        15374395,
        3570825345,
        4249311020,
        4151111129,
        3181912732,
        310226346,
        1133119310,
        530038928,
        136043402,
        2476768958,
        3107506709,
        2544909567,
        1036173560,
        2367337196,
        1681395281,
        1758231547,
        3641649032,
        306774401,
        1575354324,
        3716085866,
        1990386196,
        3114533736,
        2455606671,
        1262092282,
        3124342505,
        2768229131,
        4210529083,
        1833535011,
        423410938,
        660763973,
        2187129978,
        1639812e3,
        3508421329,
        3467445492,
        310289298,
        272797111,
        2188552562,
        2456863912,
        310240523,
        677093832,
        1013118031,
        901835429,
        3892695601,
        1116285435,
        3036471170,
        1337354835,
        243122523,
        520626091,
        277223598,
        4244441197,
        4194248841,
        1766575121,
        594173102,
        316590669,
        742362309,
        3536858622,
        4176435350,
        3838792410,
        2501204839,
        1229605004,
        3115755532,
        1552908988,
        2312334149,
        979407927,
        3959474601,
        1148277331,
        176638793,
        3614686272,
        2083809052,
        40992502,
        1340822838,
        2731552767,
        3535757508,
        3560899520,
        1354035053,
        122129617,
        7215240,
        2732932949,
        3118912700,
        2718203926,
        2539075635,
        3609230695,
        3725561661,
        1928887091,
        2882293555,
        1988674909,
        2063640240,
        2491088897,
        1459647954,
        4189817080,
        2302804382,
        1113892351,
        2237858528,
        1927010603,
        4002880361,
        1856122846,
        1594404395,
        2944033133,
        3855189863,
        3474975698,
        1643104450,
        4054590833,
        3431086530,
        1730235576,
        2984608721,
        3084664418,
        2131803598,
        4178205752,
        267404349,
        1617849798,
        1616132681,
        1462223176,
        736725533,
        2327058232,
        551665188,
        2945899023,
        1749386277,
        2575514597,
        1611482493,
        674206544,
        2201269090,
        3642560800,
        728599968,
        1680547377,
        2620414464,
        1388111496,
        453204106,
        4156223445,
        1094905244,
        2754698257,
        2201108165,
        3757000246,
        2704524545,
        3922940700,
        3996465027
    ], a[3] = [
        2645754912,
        532081118,
        2814278639,
        3530793624,
        1246723035,
        1689095255,
        2236679235,
        4194438865,
        2116582143,
        3859789411,
        157234593,
        2045505824,
        4245003587,
        1687664561,
        4083425123,
        605965023,
        672431967,
        1336064205,
        3376611392,
        214114848,
        4258466608,
        3232053071,
        489488601,
        605322005,
        3998028058,
        264917351,
        1912574028,
        756637694,
        436560991,
        202637054,
        135989450,
        85393697,
        2152923392,
        3896401662,
        2895836408,
        2145855233,
        3535335007,
        115294817,
        3147733898,
        1922296357,
        3464822751,
        4117858305,
        1037454084,
        2725193275,
        2127856640,
        1417604070,
        1148013728,
        1827919605,
        642362335,
        2929772533,
        909348033,
        1346338451,
        3547799649,
        297154785,
        1917849091,
        4161712827,
        2883604526,
        3968694238,
        1469521537,
        3780077382,
        3375584256,
        1763717519,
        136166297,
        4290970789,
        1295325189,
        2134727907,
        2798151366,
        1566297257,
        3672928234,
        2677174161,
        2672173615,
        965822077,
        2780786062,
        289653839,
        1133871874,
        3491843819,
        35685304,
        1068898316,
        418943774,
        672553190,
        642281022,
        2346158704,
        1954014401,
        3037126780,
        4079815205,
        2030668546,
        3840588673,
        672283427,
        1776201016,
        359975446,
        3750173538,
        555499703,
        2769985273,
        1324923,
        69110472,
        152125443,
        3176785106,
        3822147285,
        1340634837,
        798073664,
        1434183902,
        15393959,
        216384236,
        1303690150,
        3881221631,
        3711134124,
        3960975413,
        106373927,
        2578434224,
        1455997841,
        1801814300,
        1578393881,
        1854262133,
        3188178946,
        3258078583,
        2302670060,
        1539295533,
        3505142565,
        3078625975,
        2372746020,
        549938159,
        3278284284,
        2620926080,
        181285381,
        2865321098,
        3970029511,
        68876850,
        488006234,
        1728155692,
        2608167508,
        836007927,
        2435231793,
        919367643,
        3339422534,
        3655756360,
        1457871481,
        40520939,
        1380155135,
        797931188,
        234455205,
        2255801827,
        3990488299,
        397000196,
        739833055,
        3077865373,
        2871719860,
        4022553888,
        772369276,
        390177364,
        3853951029,
        557662966,
        740064294,
        1640166671,
        1699928825,
        3535942136,
        622006121,
        3625353122,
        68743880,
        1742502,
        219489963,
        1664179233,
        1577743084,
        1236991741,
        410585305,
        2366487942,
        823226535,
        1050371084,
        3426619607,
        3586839478,
        212779912,
        4147118561,
        1819446015,
        1911218849,
        530248558,
        3486241071,
        3252585495,
        2886188651,
        3410272728,
        2342195030,
        20547779,
        2982490058,
        3032363469,
        3631753222,
        312714466,
        1870521650,
        1493008054,
        3491686656,
        615382978,
        4103671749,
        2534517445,
        1932181,
        2196105170,
        278426614,
        6369430,
        3274544417,
        2913018367,
        697336853,
        2143000447,
        2946413531,
        701099306,
        1558357093,
        2805003052,
        3500818408,
        2321334417,
        3567135975,
        216290473,
        3591032198,
        23009561,
        1996984579,
        3735042806,
        2024298078,
        3739440863,
        569400510,
        2339758983,
        3016033873,
        3097871343,
        3639523026,
        3844324983,
        3256173865,
        795471839,
        2951117563,
        4101031090,
        4091603803,
        3603732598,
        971261452,
        534414648,
        428311343,
        3389027175,
        2844869880,
        694888862,
        1227866773,
        2456207019,
        3043454569,
        2614353370,
        3749578031,
        3676663836,
        459166190,
        4132644070,
        1794958188,
        51825668,
        2252611902,
        3084671440,
        2036672799,
        3436641603,
        1099053433,
        2469121526,
        3059204941,
        1323291266,
        2061838604,
        1018778475,
        2233344254,
        2553501054,
        334295216,
        3556750194,
        1065731521,
        183467730
    ], a[4] = [
        2127105028,
        745436345,
        2601412319,
        2788391185,
        3093987327,
        500390133,
        1155374404,
        389092991,
        150729210,
        3891597772,
        3523549952,
        1935325696,
        716645080,
        946045387,
        2901812282,
        1774124410,
        3869435775,
        4039581901,
        3293136918,
        3438657920,
        948246080,
        363898952,
        3867875531,
        1286266623,
        1598556673,
        68334250,
        630723836,
        1104211938,
        1312863373,
        613332731,
        2377784574,
        1101634306,
        441780740,
        3129959883,
        1917973735,
        2510624549,
        3238456535,
        2544211978,
        3308894634,
        1299840618,
        4076074851,
        1756332096,
        3977027158,
        297047435,
        3790297736,
        2265573040,
        3621810518,
        1311375015,
        1667687725,
        47300608,
        3299642885,
        2474112369,
        201668394,
        1468347890,
        576830978,
        3594690761,
        3742605952,
        1958042578,
        1747032512,
        3558991340,
        1408974056,
        3366841779,
        682131401,
        1033214337,
        1545599232,
        4265137049,
        206503691,
        103024618,
        2855227313,
        1337551222,
        2428998917,
        2963842932,
        4015366655,
        3852247746,
        2796956967,
        3865723491,
        3747938335,
        247794022,
        3755824572,
        702416469,
        2434691994,
        397379957,
        851939612,
        2314769512,
        218229120,
        1380406772,
        62274761,
        214451378,
        3170103466,
        2276210409,
        3845813286,
        28563499,
        446592073,
        1693330814,
        3453727194,
        29968656,
        3093872512,
        220656637,
        2470637031,
        77972100,
        1667708854,
        1358280214,
        4064765667,
        2395616961,
        325977563,
        4277240721,
        4220025399,
        3605526484,
        3355147721,
        811859167,
        3069544926,
        3962126810,
        652502677,
        3075892249,
        4132761541,
        3498924215,
        1217549313,
        3250244479,
        3858715919,
        3053989961,
        1538642152,
        2279026266,
        2875879137,
        574252750,
        3324769229,
        2651358713,
        1758150215,
        141295887,
        2719868960,
        3515574750,
        4093007735,
        4194485238,
        1082055363,
        3417560400,
        395511885,
        2966884026,
        179534037,
        3646028556,
        3738688086,
        1092926436,
        2496269142,
        257381841,
        3772900718,
        1636087230,
        1477059743,
        2499234752,
        3811018894,
        2675660129,
        3285975680,
        90732309,
        1684827095,
        1150307763,
        1723134115,
        3237045386,
        1769919919,
        1240018934,
        815675215,
        750138730,
        2239792499,
        1234303040,
        1995484674,
        138143821,
        675421338,
        1145607174,
        1936608440,
        3238603024,
        2345230278,
        2105974004,
        323969391,
        779555213,
        3004902369,
        2861610098,
        1017501463,
        2098600890,
        2628620304,
        2940611490,
        2682542546,
        1171473753,
        3656571411,
        3687208071,
        4091869518,
        393037935,
        159126506,
        1662887367,
        1147106178,
        391545844,
        3452332695,
        1891500680,
        3016609650,
        1851642611,
        546529401,
        1167818917,
        3194020571,
        2848076033,
        3953471836,
        575554290,
        475796850,
        4134673196,
        450035699,
        2351251534,
        844027695,
        1080539133,
        86184846,
        1554234488,
        3692025454,
        1972511363,
        2018339607,
        1491841390,
        1141460869,
        1061690759,
        4244549243,
        2008416118,
        2351104703,
        2868147542,
        1598468138,
        722020353,
        1027143159,
        212344630,
        1387219594,
        1725294528,
        3745187956,
        2500153616,
        458938280,
        4129215917,
        1828119673,
        544571780,
        3503225445,
        2297937496,
        1241802790,
        267843827,
        2694610800,
        1397140384,
        1558801448,
        3782667683,
        1806446719,
        929573330,
        2234912681,
        400817706,
        616011623,
        4121520928,
        3603768725,
        1761550015,
        1968522284,
        4053731006,
        4192232858,
        4005120285,
        872482584,
        3140537016,
        3894607381,
        2287405443,
        1963876937,
        3663887957,
        1584857e3,
        2975024454,
        1833426440,
        4025083860
    ], a[5] = [
        4143615901,
        749497569,
        1285769319,
        3795025788,
        2514159847,
        23610292,
        3974978748,
        844452780,
        3214870880,
        3751928557,
        2213566365,
        1676510905,
        448177848,
        3730751033,
        4086298418,
        2307502392,
        871450977,
        3222878141,
        4110862042,
        3831651966,
        2735270553,
        1310974780,
        2043402188,
        1218528103,
        2736035353,
        4274605013,
        2702448458,
        3936360550,
        2693061421,
        162023535,
        2827510090,
        687910808,
        23484817,
        3784910947,
        3371371616,
        779677500,
        3503626546,
        3473927188,
        4157212626,
        3500679282,
        4248902014,
        2466621104,
        3899384794,
        1958663117,
        925738300,
        1283408968,
        3669349440,
        1840910019,
        137959847,
        2679828185,
        1239142320,
        1315376211,
        1547541505,
        1690155329,
        739140458,
        3128809933,
        3933172616,
        3876308834,
        905091803,
        1548541325,
        4040461708,
        3095483362,
        144808038,
        451078856,
        676114313,
        2861728291,
        2469707347,
        993665471,
        373509091,
        2599041286,
        4025009006,
        4170239449,
        2149739950,
        3275793571,
        3749616649,
        2794760199,
        1534877388,
        572371878,
        2590613551,
        1753320020,
        3467782511,
        1405125690,
        4270405205,
        633333386,
        3026356924,
        3475123903,
        632057672,
        2846462855,
        1404951397,
        3882875879,
        3915906424,
        195638627,
        2385783745,
        3902872553,
        1233155085,
        3355999740,
        2380578713,
        2702246304,
        2144565621,
        3663341248,
        3894384975,
        2502479241,
        4248018925,
        3094885567,
        1594115437,
        572884632,
        3385116731,
        767645374,
        1331858858,
        1475698373,
        3793881790,
        3532746431,
        1321687957,
        619889600,
        1121017241,
        3440213920,
        2070816767,
        2833025776,
        1933951238,
        4095615791,
        890643334,
        3874130214,
        859025556,
        360630002,
        925594799,
        1764062180,
        3920222280,
        4078305929,
        979562269,
        2810700344,
        4087740022,
        1949714515,
        546639971,
        1165388173,
        3069891591,
        1495988560,
        922170659,
        1291546247,
        2107952832,
        1813327274,
        3406010024,
        3306028637,
        4241950635,
        153207855,
        2313154747,
        1608695416,
        1150242611,
        1967526857,
        721801357,
        1220138373,
        3691287617,
        3356069787,
        2112743302,
        3281662835,
        1111556101,
        1778980689,
        250857638,
        2298507990,
        673216130,
        2846488510,
        3207751581,
        3562756981,
        3008625920,
        3417367384,
        2198807050,
        529510932,
        3547516680,
        3426503187,
        2364944742,
        102533054,
        2294910856,
        1617093527,
        1204784762,
        3066581635,
        1019391227,
        1069574518,
        1317995090,
        1691889997,
        3661132003,
        510022745,
        3238594800,
        1362108837,
        1817929911,
        2184153760,
        805817662,
        1953603311,
        3699844737,
        120799444,
        2118332377,
        207536705,
        2282301548,
        4120041617,
        145305846,
        2508124933,
        3086745533,
        3261524335,
        1877257368,
        2977164480,
        3160454186,
        2503252186,
        4221677074,
        759945014,
        254147243,
        2767453419,
        3801518371,
        629083197,
        2471014217,
        907280572,
        3900796746,
        940896768,
        2751021123,
        2625262786,
        3161476951,
        3661752313,
        3260732218,
        1425318020,
        2977912069,
        1496677566,
        3988592072,
        2140652971,
        3126511541,
        3069632175,
        977771578,
        1392695845,
        1698528874,
        1411812681,
        1369733098,
        1343739227,
        3620887944,
        1142123638,
        67414216,
        3102056737,
        3088749194,
        1626167401,
        2546293654,
        3941374235,
        697522451,
        33404913,
        143560186,
        2595682037,
        994885535,
        1247667115,
        3859094837,
        2699155541,
        3547024625,
        4114935275,
        2968073508,
        3199963069,
        2732024527,
        1237921620,
        951448369,
        1898488916,
        1211705605,
        2790989240,
        2233243581,
        3598044975
    ], a[6] = [
        2246066201,
        858518887,
        1714274303,
        3485882003,
        713916271,
        2879113490,
        3730835617,
        539548191,
        36158695,
        1298409750,
        419087104,
        1358007170,
        749914897,
        2989680476,
        1261868530,
        2995193822,
        2690628854,
        3443622377,
        3780124940,
        3796824509,
        2976433025,
        4259637129,
        1551479e3,
        512490819,
        1296650241,
        951993153,
        2436689437,
        2460458047,
        144139966,
        3136204276,
        310820559,
        3068840729,
        643875328,
        1969602020,
        1680088954,
        2185813161,
        3283332454,
        672358534,
        198762408,
        896343282,
        276269502,
        3014846926,
        84060815,
        197145886,
        376173866,
        3943890818,
        3813173521,
        3545068822,
        1316698879,
        1598252827,
        2633424951,
        1233235075,
        859989710,
        2358460855,
        3503838400,
        3409603720,
        1203513385,
        1193654839,
        2792018475,
        2060853022,
        207403770,
        1144516871,
        3068631394,
        1121114134,
        177607304,
        3785736302,
        326409831,
        1929119770,
        2983279095,
        4183308101,
        3474579288,
        3200513878,
        3228482096,
        119610148,
        1170376745,
        3378393471,
        3163473169,
        951863017,
        3337026068,
        3135789130,
        2907618374,
        1183797387,
        2015970143,
        4045674555,
        2182986399,
        2952138740,
        3928772205,
        384012900,
        2454997643,
        10178499,
        2879818989,
        2596892536,
        111523738,
        2995089006,
        451689641,
        3196290696,
        235406569,
        1441906262,
        3890558523,
        3013735005,
        4158569349,
        1644036924,
        376726067,
        1006849064,
        3664579700,
        2041234796,
        1021632941,
        1374734338,
        2566452058,
        371631263,
        4007144233,
        490221539,
        206551450,
        3140638584,
        1053219195,
        1853335209,
        3412429660,
        3562156231,
        735133835,
        1623211703,
        3104214392,
        2738312436,
        4096837757,
        3366392578,
        3110964274,
        3956598718,
        3196820781,
        2038037254,
        3877786376,
        2339753847,
        300912036,
        3766732888,
        2372630639,
        1516443558,
        4200396704,
        1574567987,
        4069441456,
        4122592016,
        2699739776,
        146372218,
        2748961456,
        2043888151,
        35287437,
        2596680554,
        655490400,
        1132482787,
        110692520,
        1031794116,
        2188192751,
        1324057718,
        1217253157,
        919197030,
        686247489,
        3261139658,
        1028237775,
        3135486431,
        3059715558,
        2460921700,
        986174950,
        2661811465,
        4062904701,
        2752986992,
        3709736643,
        367056889,
        1353824391,
        731860949,
        1650113154,
        1778481506,
        784341916,
        357075625,
        3608602432,
        1074092588,
        2480052770,
        3811426202,
        92751289,
        877911070,
        3600361838,
        1231880047,
        480201094,
        3756190983,
        3094495953,
        434011822,
        87971354,
        363687820,
        1717726236,
        1901380172,
        3926403882,
        2481662265,
        400339184,
        1490350766,
        2661455099,
        1389319756,
        2558787174,
        784598401,
        1983468483,
        30828846,
        3550527752,
        2716276238,
        3841122214,
        1765724805,
        1955612312,
        1277890269,
        1333098070,
        1564029816,
        2704417615,
        1026694237,
        3287671188,
        1260819201,
        3349086767,
        1016692350,
        1582273796,
        1073413053,
        1995943182,
        694588404,
        1025494639,
        3323872702,
        3551898420,
        4146854327,
        453260480,
        1316140391,
        1435673405,
        3038941953,
        3486689407,
        1622062951,
        403978347,
        817677117,
        950059133,
        4246079218,
        3278066075,
        1486738320,
        1417279718,
        481875527,
        2549965225,
        3933690356,
        760697757,
        1452955855,
        3897451437,
        1177426808,
        1702951038,
        4085348628,
        2447005172,
        1084371187,
        3516436277,
        3068336338,
        1073369276,
        1027665953,
        3284188590,
        1230553676,
        1368340146,
        2226246512,
        267243139,
        2274220762,
        4070734279,
        2497715176,
        2423353163,
        2504755875
    ], a[7] = [
        3793104909,
        3151888380,
        2817252029,
        895778965,
        2005530807,
        3871412763,
        237245952,
        86829237,
        296341424,
        3851759377,
        3974600970,
        2475086196,
        709006108,
        1994621201,
        2972577594,
        937287164,
        3734691505,
        168608556,
        3189338153,
        2225080640,
        3139713551,
        3033610191,
        3025041904,
        77524477,
        185966941,
        1208824168,
        2344345178,
        1721625922,
        3354191921,
        1066374631,
        1927223579,
        1971335949,
        2483503697,
        1551748602,
        2881383779,
        2856329572,
        3003241482,
        48746954,
        1398218158,
        2050065058,
        313056748,
        4255789917,
        393167848,
        1912293076,
        940740642,
        3465845460,
        3091687853,
        2522601570,
        2197016661,
        1727764327,
        364383054,
        492521376,
        1291706479,
        3264136376,
        1474851438,
        1685747964,
        2575719748,
        1619776915,
        1814040067,
        970743798,
        1561002147,
        2925768690,
        2123093554,
        1880132620,
        3151188041,
        697884420,
        2550985770,
        2607674513,
        2659114323,
        110200136,
        1489731079,
        997519150,
        1378877361,
        3527870668,
        478029773,
        2766872923,
        1022481122,
        431258168,
        1112503832,
        897933369,
        2635587303,
        669726182,
        3383752315,
        918222264,
        163866573,
        3246985393,
        3776823163,
        114105080,
        1903216136,
        761148244,
        3571337562,
        1690750982,
        3166750252,
        1037045171,
        1888456500,
        2010454850,
        642736655,
        616092351,
        365016990,
        1185228132,
        4174898510,
        1043824992,
        2023083429,
        2241598885,
        3863320456,
        3279669087,
        3674716684,
        108438443,
        2132974366,
        830746235,
        606445527,
        4173263986,
        2204105912,
        1844756978,
        2532684181,
        4245352700,
        2969441100,
        3796921661,
        1335562986,
        4061524517,
        2720232303,
        2679424040,
        634407289,
        885462008,
        3294724487,
        3933892248,
        2094100220,
        339117932,
        4048830727,
        3202280980,
        1458155303,
        2689246273,
        1022871705,
        2464987878,
        3714515309,
        353796843,
        2822958815,
        4256850100,
        4052777845,
        551748367,
        618185374,
        3778635579,
        4020649912,
        1904685140,
        3069366075,
        2670879810,
        3407193292,
        2954511620,
        4058283405,
        2219449317,
        3135758300,
        1120655984,
        3447565834,
        1474845562,
        3577699062,
        550456716,
        3466908712,
        2043752612,
        881257467,
        869518812,
        2005220179,
        938474677,
        3305539448,
        3850417126,
        1315485940,
        3318264702,
        226533026,
        965733244,
        321539988,
        1136104718,
        804158748,
        573969341,
        3708209826,
        937399083,
        3290727049,
        2901666755,
        1461057207,
        4013193437,
        4066861423,
        3242773476,
        2421326174,
        1581322155,
        3028952165,
        786071460,
        3900391652,
        3918438532,
        1485433313,
        4023619836,
        3708277595,
        3678951060,
        953673138,
        1467089153,
        1930354364,
        1533292819,
        2492563023,
        1346121658,
        1685000834,
        1965281866,
        3765933717,
        4190206607,
        2052792609,
        3515332758,
        690371149,
        3125873887,
        2180283551,
        2903598061,
        3933952357,
        436236910,
        289419410,
        14314871,
        1242357089,
        2904507907,
        1616633776,
        2666382180,
        585885352,
        3471299210,
        2699507360,
        1432659641,
        277164553,
        3354103607,
        770115018,
        2303809295,
        3741942315,
        3177781868,
        2853364978,
        2269453327,
        3774259834,
        987383833,
        1290892879,
        225909803,
        1741533526,
        890078084,
        1496906255,
        1111072499,
        916028167,
        243534141,
        1252605537,
        2204162171,
        531204876,
        290011180,
        3916834213,
        102027703,
        237315147,
        209093447,
        1486785922,
        220223953,
        2758195998,
        4175039106,
        82940208,
        3127791296,
        2569425252,
        518464269,
        1353887104,
        3941492737,
        2377294467,
        3935040926
    ];
}
function Re(e) {
    this.cast5 = new De, this.cast5.setKey(e), this.encrypt = function(e) {
        return this.cast5.encrypt(e);
    };
}
Ke.keySize = Ke.prototype.keySize = 24, Ke.blockSize = Ke.prototype.blockSize = 8, Re.blockSize = Re.prototype.blockSize = 8, Re.keySize = Re.prototype.keySize = 16;
const Ue = 4294967295;
function Ie(e, t) {
    return (e << t | e >>> 32 - t) & Ue;
}
function Be(e, t) {
    return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24;
}
function Te(e, t, r) {
    e.splice(t, 4, 255 & r, r >>> 8 & 255, r >>> 16 & 255, r >>> 24 & 255);
}
function ze(e, t) {
    return e >>> 8 * t & 255;
}
function qe(e) {
    this.tf = function() {
        let e = null, t = null, r = -1, i = [], n = [
            [],
            [],
            [],
            []
        ];
        function a(e) {
            return n[0][ze(e, 0)] ^ n[1][ze(e, 1)] ^ n[2][ze(e, 2)] ^ n[3][ze(e, 3)];
        }
        function s(e) {
            return n[0][ze(e, 3)] ^ n[1][ze(e, 0)] ^ n[2][ze(e, 1)] ^ n[3][ze(e, 2)];
        }
        function o(e, t) {
            let r = a(t[0]), n = s(t[1]);
            t[2] = Ie(t[2] ^ r + n + i[4 * e + 8] & Ue, 31), t[3] = Ie(t[3], 1) ^ r + 2 * n + i[4 * e + 9] & Ue, r = a(t[2]), n = s(t[3]), t[0] = Ie(t[0] ^ r + n + i[4 * e + 10] & Ue, 31), t[1] = Ie(t[1], 1) ^ r + 2 * n + i[4 * e + 11] & Ue;
        }
        function c(e, t) {
            let r = a(t[0]), n = s(t[1]);
            t[2] = Ie(t[2], 1) ^ r + n + i[4 * e + 10] & Ue, t[3] = Ie(t[3] ^ r + 2 * n + i[4 * e + 11] & Ue, 31), r = a(t[2]), n = s(t[3]), t[0] = Ie(t[0], 1) ^ r + n + i[4 * e + 8] & Ue, t[1] = Ie(t[1] ^ r + 2 * n + i[4 * e + 9] & Ue, 31);
        }
        return {
            name: "twofish",
            blocksize: 16,
            open: function(t) {
                let r, a, s, o, c;
                e = t;
                const u = [], h = [], d = [];
                let f;
                const l = [];
                let p, y, b;
                const m = [
                    [
                        8,
                        1,
                        7,
                        13,
                        6,
                        15,
                        3,
                        2,
                        0,
                        11,
                        5,
                        9,
                        14,
                        12,
                        10,
                        4
                    ],
                    [
                        2,
                        8,
                        11,
                        13,
                        15,
                        7,
                        6,
                        14,
                        3,
                        1,
                        9,
                        4,
                        0,
                        10,
                        12,
                        5
                    ]
                ], g = [
                    [
                        14,
                        12,
                        11,
                        8,
                        1,
                        2,
                        3,
                        5,
                        15,
                        4,
                        10,
                        6,
                        7,
                        0,
                        9,
                        13
                    ],
                    [
                        1,
                        14,
                        2,
                        11,
                        4,
                        12,
                        3,
                        7,
                        6,
                        13,
                        10,
                        5,
                        15,
                        9,
                        0,
                        8
                    ]
                ], w = [
                    [
                        11,
                        10,
                        5,
                        14,
                        6,
                        13,
                        9,
                        0,
                        12,
                        8,
                        15,
                        3,
                        2,
                        4,
                        7,
                        1
                    ],
                    [
                        4,
                        12,
                        7,
                        5,
                        1,
                        6,
                        9,
                        10,
                        0,
                        14,
                        13,
                        8,
                        2,
                        11,
                        3,
                        15
                    ]
                ], v = [
                    [
                        13,
                        7,
                        15,
                        4,
                        1,
                        2,
                        6,
                        14,
                        9,
                        11,
                        3,
                        0,
                        8,
                        5,
                        12,
                        10
                    ],
                    [
                        11,
                        9,
                        5,
                        1,
                        12,
                        3,
                        13,
                        14,
                        6,
                        4,
                        7,
                        15,
                        2,
                        0,
                        8,
                        10
                    ]
                ], _ = [
                    0,
                    8,
                    1,
                    9,
                    2,
                    10,
                    3,
                    11,
                    4,
                    12,
                    5,
                    13,
                    6,
                    14,
                    7,
                    15
                ], k = [
                    0,
                    9,
                    2,
                    11,
                    4,
                    13,
                    6,
                    15,
                    8,
                    1,
                    10,
                    3,
                    12,
                    5,
                    14,
                    7
                ], A = [
                    [],
                    []
                ], S = [
                    [],
                    [],
                    [],
                    []
                ];
                function E(e) {
                    return e ^ e >> 2 ^ [
                        0,
                        90,
                        180,
                        238
                    ][3 & e];
                }
                function P(e) {
                    return e ^ e >> 1 ^ e >> 2 ^ [
                        0,
                        238,
                        180,
                        90
                    ][3 & e];
                }
                function x(e, t) {
                    let r, i, n;
                    for(r = 0; r < 8; r++)i = t >>> 24, t = t << 8 & Ue | e >>> 24, e = e << 8 & Ue, n = i << 1, 128 & i && (n ^= 333), t ^= i ^ n << 16, n ^= i >>> 1, 1 & i && (n ^= 166), t ^= n << 24 | n << 8;
                    return t;
                }
                function M(e, t) {
                    const r = t >> 4, i = 15 & t, n = m[e][r ^ i], a = g[e][_[i] ^ k[r]];
                    return v[e][_[a] ^ k[n]] << 4 | w[e][n ^ a];
                }
                function C(e, t) {
                    let r = ze(e, 0), i = ze(e, 1), n = ze(e, 2), a = ze(e, 3);
                    switch(f){
                        case 4:
                            r = A[1][r] ^ ze(t[3], 0), i = A[0][i] ^ ze(t[3], 1), n = A[0][n] ^ ze(t[3], 2), a = A[1][a] ^ ze(t[3], 3);
                        case 3:
                            r = A[1][r] ^ ze(t[2], 0), i = A[1][i] ^ ze(t[2], 1), n = A[0][n] ^ ze(t[2], 2), a = A[0][a] ^ ze(t[2], 3);
                        case 2:
                            r = A[0][A[0][r] ^ ze(t[1], 0)] ^ ze(t[0], 0), i = A[0][A[1][i] ^ ze(t[1], 1)] ^ ze(t[0], 1), n = A[1][A[0][n] ^ ze(t[1], 2)] ^ ze(t[0], 2), a = A[1][A[1][a] ^ ze(t[1], 3)] ^ ze(t[0], 3);
                    }
                    return S[0][r] ^ S[1][i] ^ S[2][n] ^ S[3][a];
                }
                for(e = e.slice(0, 32), r = e.length; 16 !== r && 24 !== r && 32 !== r;)e[r++] = 0;
                for(r = 0; r < e.length; r += 4)d[r >> 2] = Be(e, r);
                for(r = 0; r < 256; r++)A[0][r] = M(0, r), A[1][r] = M(1, r);
                for(r = 0; r < 256; r++)p = A[1][r], y = E(p), b = P(p), S[0][r] = p + (y << 8) + (b << 16) + (b << 24), S[2][r] = y + (b << 8) + (p << 16) + (b << 24), p = A[0][r], y = E(p), b = P(p), S[1][r] = b + (b << 8) + (y << 16) + (p << 24), S[3][r] = y + (p << 8) + (b << 16) + (y << 24);
                for(f = d.length / 2, r = 0; r < f; r++)a = d[r + r], u[r] = a, s = d[r + r + 1], h[r] = s, l[f - r - 1] = x(a, s);
                for(r = 0; r < 40; r += 2)a = 16843009 * r, s = a + 16843009, a = C(a, u), s = Ie(C(s, h), 8), i[r] = a + s & Ue, i[r + 1] = Ie(a + 2 * s, 9);
                for(r = 0; r < 256; r++)switch(a = s = o = c = r, f){
                    case 4:
                        a = A[1][a] ^ ze(l[3], 0), s = A[0][s] ^ ze(l[3], 1), o = A[0][o] ^ ze(l[3], 2), c = A[1][c] ^ ze(l[3], 3);
                    case 3:
                        a = A[1][a] ^ ze(l[2], 0), s = A[1][s] ^ ze(l[2], 1), o = A[0][o] ^ ze(l[2], 2), c = A[0][c] ^ ze(l[2], 3);
                    case 2:
                        n[0][r] = S[0][A[0][A[0][a] ^ ze(l[1], 0)] ^ ze(l[0], 0)], n[1][r] = S[1][A[0][A[1][s] ^ ze(l[1], 1)] ^ ze(l[0], 1)], n[2][r] = S[2][A[1][A[0][o] ^ ze(l[1], 2)] ^ ze(l[0], 2)], n[3][r] = S[3][A[1][A[1][c] ^ ze(l[1], 3)] ^ ze(l[0], 3)];
                }
            },
            close: function() {
                i = [], n = [
                    [],
                    [],
                    [],
                    []
                ];
            },
            encrypt: function(e, n) {
                t = e, r = n;
                const a = [
                    Be(t, r) ^ i[0],
                    Be(t, r + 4) ^ i[1],
                    Be(t, r + 8) ^ i[2],
                    Be(t, r + 12) ^ i[3]
                ];
                for(let e = 0; e < 8; e++)o(e, a);
                return Te(t, r, a[2] ^ i[4]), Te(t, r + 4, a[3] ^ i[5]), Te(t, r + 8, a[0] ^ i[6]), Te(t, r + 12, a[1] ^ i[7]), r += 16, t;
            },
            decrypt: function(e, n) {
                t = e, r = n;
                const a = [
                    Be(t, r) ^ i[4],
                    Be(t, r + 4) ^ i[5],
                    Be(t, r + 8) ^ i[6],
                    Be(t, r + 12) ^ i[7]
                ];
                for(let e = 7; e >= 0; e--)c(e, a);
                Te(t, r, a[2] ^ i[0]), Te(t, r + 4, a[3] ^ i[1]), Te(t, r + 8, a[0] ^ i[2]), Te(t, r + 12, a[1] ^ i[3]), r += 16;
            },
            finalize: function() {
                return t;
            }
        };
    }(), this.tf.open(Array.from(e), 0), this.encrypt = function(e) {
        return this.tf.encrypt(Array.from(e), 0);
    };
}
function Fe() {}
function Oe(e) {
    this.bf = new Fe, this.bf.init(e), this.encrypt = function(e) {
        return this.bf.encryptBlock(e);
    };
}
qe.keySize = qe.prototype.keySize = 32, qe.blockSize = qe.prototype.blockSize = 16, Fe.prototype.BLOCKSIZE = 8, Fe.prototype.SBOXES = [
    [
        3509652390,
        2564797868,
        805139163,
        3491422135,
        3101798381,
        1780907670,
        3128725573,
        4046225305,
        614570311,
        3012652279,
        134345442,
        2240740374,
        1667834072,
        1901547113,
        2757295779,
        4103290238,
        227898511,
        1921955416,
        1904987480,
        2182433518,
        2069144605,
        3260701109,
        2620446009,
        720527379,
        3318853667,
        677414384,
        3393288472,
        3101374703,
        2390351024,
        1614419982,
        1822297739,
        2954791486,
        3608508353,
        3174124327,
        2024746970,
        1432378464,
        3864339955,
        2857741204,
        1464375394,
        1676153920,
        1439316330,
        715854006,
        3033291828,
        289532110,
        2706671279,
        2087905683,
        3018724369,
        1668267050,
        732546397,
        1947742710,
        3462151702,
        2609353502,
        2950085171,
        1814351708,
        2050118529,
        680887927,
        999245976,
        1800124847,
        3300911131,
        1713906067,
        1641548236,
        4213287313,
        1216130144,
        1575780402,
        4018429277,
        3917837745,
        3693486850,
        3949271944,
        596196993,
        3549867205,
        258830323,
        2213823033,
        772490370,
        2760122372,
        1774776394,
        2652871518,
        566650946,
        4142492826,
        1728879713,
        2882767088,
        1783734482,
        3629395816,
        2517608232,
        2874225571,
        1861159788,
        326777828,
        3124490320,
        2130389656,
        2716951837,
        967770486,
        1724537150,
        2185432712,
        2364442137,
        1164943284,
        2105845187,
        998989502,
        3765401048,
        2244026483,
        1075463327,
        1455516326,
        1322494562,
        910128902,
        469688178,
        1117454909,
        936433444,
        3490320968,
        3675253459,
        1240580251,
        122909385,
        2157517691,
        634681816,
        4142456567,
        3825094682,
        3061402683,
        2540495037,
        79693498,
        3249098678,
        1084186820,
        1583128258,
        426386531,
        1761308591,
        1047286709,
        322548459,
        995290223,
        1845252383,
        2603652396,
        3431023940,
        2942221577,
        3202600964,
        3727903485,
        1712269319,
        422464435,
        3234572375,
        1170764815,
        3523960633,
        3117677531,
        1434042557,
        442511882,
        3600875718,
        1076654713,
        1738483198,
        4213154764,
        2393238008,
        3677496056,
        1014306527,
        4251020053,
        793779912,
        2902807211,
        842905082,
        4246964064,
        1395751752,
        1040244610,
        2656851899,
        3396308128,
        445077038,
        3742853595,
        3577915638,
        679411651,
        2892444358,
        2354009459,
        1767581616,
        3150600392,
        3791627101,
        3102740896,
        284835224,
        4246832056,
        1258075500,
        768725851,
        2589189241,
        3069724005,
        3532540348,
        1274779536,
        3789419226,
        2764799539,
        1660621633,
        3471099624,
        4011903706,
        913787905,
        3497959166,
        737222580,
        2514213453,
        2928710040,
        3937242737,
        1804850592,
        3499020752,
        2949064160,
        2386320175,
        2390070455,
        2415321851,
        4061277028,
        2290661394,
        2416832540,
        1336762016,
        1754252060,
        3520065937,
        3014181293,
        791618072,
        3188594551,
        3933548030,
        2332172193,
        3852520463,
        3043980520,
        413987798,
        3465142937,
        3030929376,
        4245938359,
        2093235073,
        3534596313,
        375366246,
        2157278981,
        2479649556,
        555357303,
        3870105701,
        2008414854,
        3344188149,
        4221384143,
        3956125452,
        2067696032,
        3594591187,
        2921233993,
        2428461,
        544322398,
        577241275,
        1471733935,
        610547355,
        4027169054,
        1432588573,
        1507829418,
        2025931657,
        3646575487,
        545086370,
        48609733,
        2200306550,
        1653985193,
        298326376,
        1316178497,
        3007786442,
        2064951626,
        458293330,
        2589141269,
        3591329599,
        3164325604,
        727753846,
        2179363840,
        146436021,
        1461446943,
        4069977195,
        705550613,
        3059967265,
        3887724982,
        4281599278,
        3313849956,
        1404054877,
        2845806497,
        146425753,
        1854211946
    ],
    [
        1266315497,
        3048417604,
        3681880366,
        3289982499,
        290971e4,
        1235738493,
        2632868024,
        2414719590,
        3970600049,
        1771706367,
        1449415276,
        3266420449,
        422970021,
        1963543593,
        2690192192,
        3826793022,
        1062508698,
        1531092325,
        1804592342,
        2583117782,
        2714934279,
        4024971509,
        1294809318,
        4028980673,
        1289560198,
        2221992742,
        1669523910,
        35572830,
        157838143,
        1052438473,
        1016535060,
        1802137761,
        1753167236,
        1386275462,
        3080475397,
        2857371447,
        1040679964,
        2145300060,
        2390574316,
        1461121720,
        2956646967,
        4031777805,
        4028374788,
        33600511,
        2920084762,
        1018524850,
        629373528,
        3691585981,
        3515945977,
        2091462646,
        2486323059,
        586499841,
        988145025,
        935516892,
        3367335476,
        2599673255,
        2839830854,
        265290510,
        3972581182,
        2759138881,
        3795373465,
        1005194799,
        847297441,
        406762289,
        1314163512,
        1332590856,
        1866599683,
        4127851711,
        750260880,
        613907577,
        1450815602,
        3165620655,
        3734664991,
        3650291728,
        3012275730,
        3704569646,
        1427272223,
        778793252,
        1343938022,
        2676280711,
        2052605720,
        1946737175,
        3164576444,
        3914038668,
        3967478842,
        3682934266,
        1661551462,
        3294938066,
        4011595847,
        840292616,
        3712170807,
        616741398,
        312560963,
        711312465,
        1351876610,
        322626781,
        1910503582,
        271666773,
        2175563734,
        1594956187,
        70604529,
        3617834859,
        1007753275,
        1495573769,
        4069517037,
        2549218298,
        2663038764,
        504708206,
        2263041392,
        3941167025,
        2249088522,
        1514023603,
        1998579484,
        1312622330,
        694541497,
        2582060303,
        2151582166,
        1382467621,
        776784248,
        2618340202,
        3323268794,
        2497899128,
        2784771155,
        503983604,
        4076293799,
        907881277,
        423175695,
        432175456,
        1378068232,
        4145222326,
        3954048622,
        3938656102,
        3820766613,
        2793130115,
        2977904593,
        26017576,
        3274890735,
        3194772133,
        1700274565,
        1756076034,
        4006520079,
        3677328699,
        720338349,
        1533947780,
        354530856,
        688349552,
        3973924725,
        1637815568,
        332179504,
        3949051286,
        53804574,
        2852348879,
        3044236432,
        1282449977,
        3583942155,
        3416972820,
        4006381244,
        1617046695,
        2628476075,
        3002303598,
        1686838959,
        431878346,
        2686675385,
        1700445008,
        1080580658,
        1009431731,
        832498133,
        3223435511,
        2605976345,
        2271191193,
        2516031870,
        1648197032,
        4164389018,
        2548247927,
        300782431,
        375919233,
        238389289,
        3353747414,
        2531188641,
        2019080857,
        1475708069,
        455242339,
        2609103871,
        448939670,
        3451063019,
        1395535956,
        2413381860,
        1841049896,
        1491858159,
        885456874,
        4264095073,
        4001119347,
        1565136089,
        3898914787,
        1108368660,
        540939232,
        1173283510,
        2745871338,
        3681308437,
        4207628240,
        3343053890,
        4016749493,
        1699691293,
        1103962373,
        3625875870,
        2256883143,
        3830138730,
        1031889488,
        3479347698,
        1535977030,
        4236805024,
        3251091107,
        2132092099,
        1774941330,
        1199868427,
        1452454533,
        157007616,
        2904115357,
        342012276,
        595725824,
        1480756522,
        206960106,
        497939518,
        591360097,
        863170706,
        2375253569,
        3596610801,
        1814182875,
        2094937945,
        3421402208,
        1082520231,
        3463918190,
        2785509508,
        435703966,
        3908032597,
        1641649973,
        2842273706,
        3305899714,
        1510255612,
        2148256476,
        2655287854,
        3276092548,
        4258621189,
        236887753,
        3681803219,
        274041037,
        1734335097,
        3815195456,
        3317970021,
        1899903192,
        1026095262,
        4050517792,
        356393447,
        2410691914,
        3873677099,
        3682840055
    ],
    [
        3913112168,
        2491498743,
        4132185628,
        2489919796,
        1091903735,
        1979897079,
        3170134830,
        3567386728,
        3557303409,
        857797738,
        1136121015,
        1342202287,
        507115054,
        2535736646,
        337727348,
        3213592640,
        1301675037,
        2528481711,
        1895095763,
        1721773893,
        3216771564,
        62756741,
        2142006736,
        835421444,
        2531993523,
        1442658625,
        3659876326,
        2882144922,
        676362277,
        1392781812,
        170690266,
        3921047035,
        1759253602,
        3611846912,
        1745797284,
        664899054,
        1329594018,
        3901205900,
        3045908486,
        2062866102,
        2865634940,
        3543621612,
        3464012697,
        1080764994,
        553557557,
        3656615353,
        3996768171,
        991055499,
        499776247,
        1265440854,
        648242737,
        3940784050,
        980351604,
        3713745714,
        1749149687,
        3396870395,
        4211799374,
        3640570775,
        1161844396,
        3125318951,
        1431517754,
        545492359,
        4268468663,
        3499529547,
        1437099964,
        2702547544,
        3433638243,
        2581715763,
        2787789398,
        1060185593,
        1593081372,
        2418618748,
        4260947970,
        69676912,
        2159744348,
        86519011,
        2512459080,
        3838209314,
        1220612927,
        3339683548,
        133810670,
        1090789135,
        1078426020,
        1569222167,
        845107691,
        3583754449,
        4072456591,
        1091646820,
        628848692,
        1613405280,
        3757631651,
        526609435,
        236106946,
        48312990,
        2942717905,
        3402727701,
        1797494240,
        859738849,
        992217954,
        4005476642,
        2243076622,
        3870952857,
        3732016268,
        765654824,
        3490871365,
        2511836413,
        1685915746,
        3888969200,
        1414112111,
        2273134842,
        3281911079,
        4080962846,
        172450625,
        2569994100,
        980381355,
        4109958455,
        2819808352,
        2716589560,
        2568741196,
        3681446669,
        3329971472,
        1835478071,
        660984891,
        3704678404,
        4045999559,
        3422617507,
        3040415634,
        1762651403,
        1719377915,
        3470491036,
        2693910283,
        3642056355,
        3138596744,
        1364962596,
        2073328063,
        1983633131,
        926494387,
        3423689081,
        2150032023,
        4096667949,
        1749200295,
        3328846651,
        309677260,
        2016342300,
        1779581495,
        3079819751,
        111262694,
        1274766160,
        443224088,
        298511866,
        1025883608,
        3806446537,
        1145181785,
        168956806,
        3641502830,
        3584813610,
        1689216846,
        3666258015,
        3200248200,
        1692713982,
        2646376535,
        4042768518,
        1618508792,
        1610833997,
        3523052358,
        4130873264,
        2001055236,
        3610705100,
        2202168115,
        4028541809,
        2961195399,
        1006657119,
        2006996926,
        3186142756,
        1430667929,
        3210227297,
        1314452623,
        4074634658,
        4101304120,
        2273951170,
        1399257539,
        3367210612,
        3027628629,
        1190975929,
        2062231137,
        2333990788,
        2221543033,
        2438960610,
        1181637006,
        548689776,
        2362791313,
        3372408396,
        3104550113,
        3145860560,
        296247880,
        1970579870,
        3078560182,
        3769228297,
        1714227617,
        3291629107,
        3898220290,
        166772364,
        1251581989,
        493813264,
        448347421,
        195405023,
        2709975567,
        677966185,
        3703036547,
        1463355134,
        2715995803,
        1338867538,
        1343315457,
        2802222074,
        2684532164,
        233230375,
        2599980071,
        2000651841,
        3277868038,
        1638401717,
        4028070440,
        3237316320,
        6314154,
        819756386,
        300326615,
        590932579,
        1405279636,
        3267499572,
        3150704214,
        2428286686,
        3959192993,
        3461946742,
        1862657033,
        1266418056,
        963775037,
        2089974820,
        2263052895,
        1917689273,
        448879540,
        3550394620,
        3981727096,
        150775221,
        3627908307,
        1303187396,
        508620638,
        2975983352,
        2726630617,
        1817252668,
        1876281319,
        1457606340,
        908771278,
        3720792119,
        3617206836,
        2455994898,
        1729034894,
        1080033504
    ],
    [
        976866871,
        3556439503,
        2881648439,
        1522871579,
        1555064734,
        1336096578,
        3548522304,
        2579274686,
        3574697629,
        3205460757,
        3593280638,
        3338716283,
        3079412587,
        564236357,
        2993598910,
        1781952180,
        1464380207,
        3163844217,
        3332601554,
        1699332808,
        1393555694,
        1183702653,
        3581086237,
        1288719814,
        691649499,
        2847557200,
        2895455976,
        3193889540,
        2717570544,
        1781354906,
        1676643554,
        2592534050,
        3230253752,
        1126444790,
        2770207658,
        2633158820,
        2210423226,
        2615765581,
        2414155088,
        3127139286,
        673620729,
        2805611233,
        1269405062,
        4015350505,
        3341807571,
        4149409754,
        1057255273,
        2012875353,
        2162469141,
        2276492801,
        2601117357,
        993977747,
        3918593370,
        2654263191,
        753973209,
        36408145,
        2530585658,
        25011837,
        3520020182,
        2088578344,
        530523599,
        2918365339,
        1524020338,
        1518925132,
        3760827505,
        3759777254,
        1202760957,
        3985898139,
        3906192525,
        674977740,
        4174734889,
        2031300136,
        2019492241,
        3983892565,
        4153806404,
        3822280332,
        352677332,
        2297720250,
        60907813,
        90501309,
        3286998549,
        1016092578,
        2535922412,
        2839152426,
        457141659,
        509813237,
        4120667899,
        652014361,
        1966332200,
        2975202805,
        55981186,
        2327461051,
        676427537,
        3255491064,
        2882294119,
        3433927263,
        1307055953,
        942726286,
        933058658,
        2468411793,
        3933900994,
        4215176142,
        1361170020,
        2001714738,
        2830558078,
        3274259782,
        1222529897,
        1679025792,
        2729314320,
        3714953764,
        1770335741,
        151462246,
        3013232138,
        1682292957,
        1483529935,
        471910574,
        1539241949,
        458788160,
        3436315007,
        1807016891,
        3718408830,
        978976581,
        1043663428,
        3165965781,
        1927990952,
        4200891579,
        2372276910,
        3208408903,
        3533431907,
        1412390302,
        2931980059,
        4132332400,
        1947078029,
        3881505623,
        4168226417,
        2941484381,
        1077988104,
        1320477388,
        886195818,
        18198404,
        3786409e3,
        2509781533,
        112762804,
        3463356488,
        1866414978,
        891333506,
        18488651,
        661792760,
        1628790961,
        3885187036,
        3141171499,
        876946877,
        2693282273,
        1372485963,
        791857591,
        2686433993,
        3759982718,
        3167212022,
        3472953795,
        2716379847,
        445679433,
        3561995674,
        3504004811,
        3574258232,
        54117162,
        3331405415,
        2381918588,
        3769707343,
        4154350007,
        1140177722,
        4074052095,
        668550556,
        3214352940,
        367459370,
        261225585,
        2610173221,
        4209349473,
        3468074219,
        3265815641,
        314222801,
        3066103646,
        3808782860,
        282218597,
        3406013506,
        3773591054,
        379116347,
        1285071038,
        846784868,
        2669647154,
        3771962079,
        3550491691,
        2305946142,
        453669953,
        1268987020,
        3317592352,
        3279303384,
        3744833421,
        2610507566,
        3859509063,
        266596637,
        3847019092,
        517658769,
        3462560207,
        3443424879,
        370717030,
        4247526661,
        2224018117,
        4143653529,
        4112773975,
        2788324899,
        2477274417,
        1456262402,
        2901442914,
        1517677493,
        1846949527,
        2295493580,
        3734397586,
        2176403920,
        1280348187,
        1908823572,
        3871786941,
        846861322,
        1172426758,
        3287448474,
        3383383037,
        1655181056,
        3139813346,
        901632758,
        1897031941,
        2986607138,
        3066810236,
        3447102507,
        1393639104,
        373351379,
        950779232,
        625454576,
        3124240540,
        4148612726,
        2007998917,
        544563296,
        2244738638,
        2330496472,
        2058025392,
        1291430526,
        424198748,
        50039436,
        29584100,
        3605783033,
        2429876329,
        2791104160,
        1057563949,
        3255363231,
        3075367218,
        3463963227,
        1469046755,
        985887462
    ]
], Fe.prototype.PARRAY = [
    608135816,
    2242054355,
    320440878,
    57701188,
    2752067618,
    698298832,
    137296536,
    3964562569,
    1160258022,
    953160567,
    3193202383,
    887688300,
    3232508343,
    3380367581,
    1065670069,
    3041331479,
    2450970073,
    2306472731
], Fe.prototype.NN = 16, Fe.prototype._clean = function(e) {
    if (e < 0) e = (2147483647 & e) + 2147483648;
    return e;
}, Fe.prototype._F = function(e) {
    let t;
    const r = 255 & e, i = 255 & (e >>>= 8), n = 255 & (e >>>= 8), a = 255 & (e >>>= 8);
    return t = this.sboxes[0][a] + this.sboxes[1][n], t ^= this.sboxes[2][i], t += this.sboxes[3][r], t;
}, Fe.prototype._encryptBlock = function(e) {
    let t, r = e[0], i = e[1];
    for(t = 0; t < this.NN; ++t){
        r ^= this.parray[t], i = this._F(r) ^ i;
        const e = r;
        r = i, i = e;
    }
    r ^= this.parray[this.NN + 0], i ^= this.parray[this.NN + 1], e[0] = this._clean(i), e[1] = this._clean(r);
}, Fe.prototype.encryptBlock = function(e) {
    let t;
    const r = [
        0,
        0
    ], i = this.BLOCKSIZE / 2;
    for(t = 0; t < this.BLOCKSIZE / 2; ++t)r[0] = r[0] << 8 | 255 & e[t + 0], r[1] = r[1] << 8 | 255 & e[t + i];
    this._encryptBlock(r);
    const n = [];
    for(t = 0; t < this.BLOCKSIZE / 2; ++t)n[t + 0] = r[0] >>> 24 - 8 * t & 255, n[t + i] = r[1] >>> 24 - 8 * t & 255;
    return n;
}, Fe.prototype._decryptBlock = function(e) {
    let t, r = e[0], i = e[1];
    for(t = this.NN + 1; t > 1; --t){
        r ^= this.parray[t], i = this._F(r) ^ i;
        const e = r;
        r = i, i = e;
    }
    r ^= this.parray[1], i ^= this.parray[0], e[0] = this._clean(i), e[1] = this._clean(r);
}, Fe.prototype.init = function(e) {
    let t, r = 0;
    for(this.parray = [], t = 0; t < this.NN + 2; ++t){
        let i = 0;
        for(let t = 0; t < 4; ++t)i = i << 8 | 255 & e[r], ++r >= e.length && (r = 0);
        this.parray[t] = this.PARRAY[t] ^ i;
    }
    for(this.sboxes = [], t = 0; t < 4; ++t)for(this.sboxes[t] = [], r = 0; r < 256; ++r)this.sboxes[t][r] = this.SBOXES[t][r];
    const i = [
        0,
        0
    ];
    for(t = 0; t < this.NN + 2; t += 2)this._encryptBlock(i), this.parray[t + 0] = i[0], this.parray[t + 1] = i[1];
    for(t = 0; t < 4; ++t)for(r = 0; r < 256; r += 2)this._encryptBlock(i), this.sboxes[t][r + 0] = i[0], this.sboxes[t][r + 1] = i[1];
}, Oe.keySize = Oe.prototype.keySize = 16, Oe.blockSize = Oe.prototype.blockSize = 8;
const Ne = xe(128), je = xe(192), Le = xe(256), We = function(e) {
    this.key = e, this.encrypt = function(e, t) {
        return Me(Ce(this.key), e, !0, 0, null, t);
    }, this.decrypt = function(e, t) {
        return Me(Ce(this.key), e, !1, 0, null, t);
    };
};
var He = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    aes128: Ne,
    aes192: je,
    aes256: Le,
    des: We,
    tripledes: Ke,
    cast5: Re,
    twofish: qe,
    blowfish: Oe,
    idea: function() {
        throw Error("IDEA symmetric-key algorithm not implemented");
    }
}), Ge = function(e, t, r) {
    "use asm";
    var i = 0, n = 0, a = 0, s = 0, o = 0, c = 0, u = 0;
    var h = 0, d = 0, f = 0, l = 0, p = 0, y = 0, b = 0, m = 0, g = 0, w = 0;
    var v = new e.Uint8Array(r);
    function _(e, t, r, c, u, h, d, f, l, p, y, b, m, g, w, v) {
        e = e | 0;
        t = t | 0;
        r = r | 0;
        c = c | 0;
        u = u | 0;
        h = h | 0;
        d = d | 0;
        f = f | 0;
        l = l | 0;
        p = p | 0;
        y = y | 0;
        b = b | 0;
        m = m | 0;
        g = g | 0;
        w = w | 0;
        v = v | 0;
        var _ = 0, k = 0, A = 0, S = 0, E = 0, P = 0, x = 0, M = 0, C = 0, K = 0, D = 0, R = 0, U = 0, I = 0, B = 0, T = 0, z = 0, q = 0, F = 0, O = 0, N = 0, j = 0, L = 0, W = 0, H = 0, G = 0, V = 0, $ = 0, Z = 0, Y = 0, X = 0, Q = 0, J = 0, ee = 0, te = 0, re = 0, ie = 0, ne = 0, ae = 0, se = 0, oe = 0, ce = 0, ue = 0, he = 0, de = 0, fe = 0, le = 0, pe = 0, ye = 0, be = 0, me = 0, ge = 0, we = 0, ve = 0, _e = 0, ke = 0, Ae = 0, Se = 0, Ee = 0, Pe = 0, xe = 0, Me = 0, Ce = 0, Ke = 0, De = 0, Re = 0, Ue = 0, Ie = 0, Be = 0, Te = 0, ze = 0;
        _ = i;
        k = n;
        A = a;
        S = s;
        E = o;
        x = e + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = t + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = r + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = c + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = u + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = h + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = d + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = f + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = l + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = p + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = y + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = b + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = m + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = g + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = w + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        x = v + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = g ^ l ^ r ^ e;
        M = P << 1 | P >>> 31;
        x = M + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = w ^ p ^ c ^ t;
        C = P << 1 | P >>> 31;
        x = C + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = v ^ y ^ u ^ r;
        K = P << 1 | P >>> 31;
        x = K + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = M ^ b ^ h ^ c;
        D = P << 1 | P >>> 31;
        x = D + (_ << 5 | _ >>> 27) + E + (k & A | ~k & S) + 0x5a827999 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = C ^ m ^ d ^ u;
        R = P << 1 | P >>> 31;
        x = R + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = K ^ g ^ f ^ h;
        U = P << 1 | P >>> 31;
        x = U + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = D ^ w ^ l ^ d;
        I = P << 1 | P >>> 31;
        x = I + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = R ^ v ^ p ^ f;
        B = P << 1 | P >>> 31;
        x = B + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = U ^ M ^ y ^ l;
        T = P << 1 | P >>> 31;
        x = T + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = I ^ C ^ b ^ p;
        z = P << 1 | P >>> 31;
        x = z + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = B ^ K ^ m ^ y;
        q = P << 1 | P >>> 31;
        x = q + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = T ^ D ^ g ^ b;
        F = P << 1 | P >>> 31;
        x = F + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = z ^ R ^ w ^ m;
        O = P << 1 | P >>> 31;
        x = O + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = q ^ U ^ v ^ g;
        N = P << 1 | P >>> 31;
        x = N + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = F ^ I ^ M ^ w;
        j = P << 1 | P >>> 31;
        x = j + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = O ^ B ^ C ^ v;
        L = P << 1 | P >>> 31;
        x = L + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = N ^ T ^ K ^ M;
        W = P << 1 | P >>> 31;
        x = W + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = j ^ z ^ D ^ C;
        H = P << 1 | P >>> 31;
        x = H + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = L ^ q ^ R ^ K;
        G = P << 1 | P >>> 31;
        x = G + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = W ^ F ^ U ^ D;
        V = P << 1 | P >>> 31;
        x = V + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = H ^ O ^ I ^ R;
        $ = P << 1 | P >>> 31;
        x = $ + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = G ^ N ^ B ^ U;
        Z = P << 1 | P >>> 31;
        x = Z + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = V ^ j ^ T ^ I;
        Y = P << 1 | P >>> 31;
        x = Y + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = $ ^ L ^ z ^ B;
        X = P << 1 | P >>> 31;
        x = X + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) + 0x6ed9eba1 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Z ^ W ^ q ^ T;
        Q = P << 1 | P >>> 31;
        x = Q + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Y ^ H ^ F ^ z;
        J = P << 1 | P >>> 31;
        x = J + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = X ^ G ^ O ^ q;
        ee = P << 1 | P >>> 31;
        x = ee + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Q ^ V ^ N ^ F;
        te = P << 1 | P >>> 31;
        x = te + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = J ^ $ ^ j ^ O;
        re = P << 1 | P >>> 31;
        x = re + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = ee ^ Z ^ L ^ N;
        ie = P << 1 | P >>> 31;
        x = ie + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = te ^ Y ^ W ^ j;
        ne = P << 1 | P >>> 31;
        x = ne + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = re ^ X ^ H ^ L;
        ae = P << 1 | P >>> 31;
        x = ae + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = ie ^ Q ^ G ^ W;
        se = P << 1 | P >>> 31;
        x = se + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = ne ^ J ^ V ^ H;
        oe = P << 1 | P >>> 31;
        x = oe + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = ae ^ ee ^ $ ^ G;
        ce = P << 1 | P >>> 31;
        x = ce + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = se ^ te ^ Z ^ V;
        ue = P << 1 | P >>> 31;
        x = ue + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = oe ^ re ^ Y ^ $;
        he = P << 1 | P >>> 31;
        x = he + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = ce ^ ie ^ X ^ Z;
        de = P << 1 | P >>> 31;
        x = de + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = ue ^ ne ^ Q ^ Y;
        fe = P << 1 | P >>> 31;
        x = fe + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = he ^ ae ^ J ^ X;
        le = P << 1 | P >>> 31;
        x = le + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = de ^ se ^ ee ^ Q;
        pe = P << 1 | P >>> 31;
        x = pe + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = fe ^ oe ^ te ^ J;
        ye = P << 1 | P >>> 31;
        x = ye + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = le ^ ce ^ re ^ ee;
        be = P << 1 | P >>> 31;
        x = be + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = pe ^ ue ^ ie ^ te;
        me = P << 1 | P >>> 31;
        x = me + (_ << 5 | _ >>> 27) + E + (k & A | k & S | A & S) - 0x70e44324 | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = ye ^ he ^ ne ^ re;
        ge = P << 1 | P >>> 31;
        x = ge + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = be ^ de ^ ae ^ ie;
        we = P << 1 | P >>> 31;
        x = we + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = me ^ fe ^ se ^ ne;
        ve = P << 1 | P >>> 31;
        x = ve + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = ge ^ le ^ oe ^ ae;
        _e = P << 1 | P >>> 31;
        x = _e + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = we ^ pe ^ ce ^ se;
        ke = P << 1 | P >>> 31;
        x = ke + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = ve ^ ye ^ ue ^ oe;
        Ae = P << 1 | P >>> 31;
        x = Ae + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = _e ^ be ^ he ^ ce;
        Se = P << 1 | P >>> 31;
        x = Se + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = ke ^ me ^ de ^ ue;
        Ee = P << 1 | P >>> 31;
        x = Ee + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Ae ^ ge ^ fe ^ he;
        Pe = P << 1 | P >>> 31;
        x = Pe + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Se ^ we ^ le ^ de;
        xe = P << 1 | P >>> 31;
        x = xe + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Ee ^ ve ^ pe ^ fe;
        Me = P << 1 | P >>> 31;
        x = Me + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Pe ^ _e ^ ye ^ le;
        Ce = P << 1 | P >>> 31;
        x = Ce + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = xe ^ ke ^ be ^ pe;
        Ke = P << 1 | P >>> 31;
        x = Ke + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Me ^ Ae ^ me ^ ye;
        De = P << 1 | P >>> 31;
        x = De + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Ce ^ Se ^ ge ^ be;
        Re = P << 1 | P >>> 31;
        x = Re + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Ke ^ Ee ^ we ^ me;
        Ue = P << 1 | P >>> 31;
        x = Ue + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = De ^ Pe ^ ve ^ ge;
        Ie = P << 1 | P >>> 31;
        x = Ie + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Re ^ xe ^ _e ^ we;
        Be = P << 1 | P >>> 31;
        x = Be + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Ue ^ Me ^ ke ^ ve;
        Te = P << 1 | P >>> 31;
        x = Te + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        P = Ie ^ Ce ^ Ae ^ _e;
        ze = P << 1 | P >>> 31;
        x = ze + (_ << 5 | _ >>> 27) + E + (k ^ A ^ S) - 0x359d3e2a | 0;
        E = S;
        S = A;
        A = k << 30 | k >>> 2;
        k = _;
        _ = x;
        i = i + _ | 0;
        n = n + k | 0;
        a = a + A | 0;
        s = s + S | 0;
        o = o + E | 0;
    }
    function k(e) {
        e = e | 0;
        _(v[e | 0] << 24 | v[e | 1] << 16 | v[e | 2] << 8 | v[e | 3], v[e | 4] << 24 | v[e | 5] << 16 | v[e | 6] << 8 | v[e | 7], v[e | 8] << 24 | v[e | 9] << 16 | v[e | 10] << 8 | v[e | 11], v[e | 12] << 24 | v[e | 13] << 16 | v[e | 14] << 8 | v[e | 15], v[e | 16] << 24 | v[e | 17] << 16 | v[e | 18] << 8 | v[e | 19], v[e | 20] << 24 | v[e | 21] << 16 | v[e | 22] << 8 | v[e | 23], v[e | 24] << 24 | v[e | 25] << 16 | v[e | 26] << 8 | v[e | 27], v[e | 28] << 24 | v[e | 29] << 16 | v[e | 30] << 8 | v[e | 31], v[e | 32] << 24 | v[e | 33] << 16 | v[e | 34] << 8 | v[e | 35], v[e | 36] << 24 | v[e | 37] << 16 | v[e | 38] << 8 | v[e | 39], v[e | 40] << 24 | v[e | 41] << 16 | v[e | 42] << 8 | v[e | 43], v[e | 44] << 24 | v[e | 45] << 16 | v[e | 46] << 8 | v[e | 47], v[e | 48] << 24 | v[e | 49] << 16 | v[e | 50] << 8 | v[e | 51], v[e | 52] << 24 | v[e | 53] << 16 | v[e | 54] << 8 | v[e | 55], v[e | 56] << 24 | v[e | 57] << 16 | v[e | 58] << 8 | v[e | 59], v[e | 60] << 24 | v[e | 61] << 16 | v[e | 62] << 8 | v[e | 63]);
    }
    function A(e) {
        e = e | 0;
        v[e | 0] = i >>> 24;
        v[e | 1] = i >>> 16 & 255;
        v[e | 2] = i >>> 8 & 255;
        v[e | 3] = i & 255;
        v[e | 4] = n >>> 24;
        v[e | 5] = n >>> 16 & 255;
        v[e | 6] = n >>> 8 & 255;
        v[e | 7] = n & 255;
        v[e | 8] = a >>> 24;
        v[e | 9] = a >>> 16 & 255;
        v[e | 10] = a >>> 8 & 255;
        v[e | 11] = a & 255;
        v[e | 12] = s >>> 24;
        v[e | 13] = s >>> 16 & 255;
        v[e | 14] = s >>> 8 & 255;
        v[e | 15] = s & 255;
        v[e | 16] = o >>> 24;
        v[e | 17] = o >>> 16 & 255;
        v[e | 18] = o >>> 8 & 255;
        v[e | 19] = o & 255;
    }
    function S() {
        i = 0x67452301;
        n = 0xefcdab89;
        a = 0x98badcfe;
        s = 0x10325476;
        o = 0xc3d2e1f0;
        c = u = 0;
    }
    function E(e, t, r, h, d, f, l) {
        e = e | 0;
        t = t | 0;
        r = r | 0;
        h = h | 0;
        d = d | 0;
        f = f | 0;
        l = l | 0;
        i = e;
        n = t;
        a = r;
        s = h;
        o = d;
        c = f;
        u = l;
    }
    function P(e, t) {
        e = e | 0;
        t = t | 0;
        var r = 0;
        if (e & 63) return -1;
        while((t | 0) >= 64){
            k(e);
            e = e + 64 | 0;
            t = t - 64 | 0;
            r = r + 64 | 0;
        }
        c = c + r | 0;
        if (c >>> 0 < r >>> 0) u = u + 1 | 0;
        return r | 0;
    }
    function x(e, t, r) {
        e = e | 0;
        t = t | 0;
        r = r | 0;
        var i = 0, n = 0;
        if (e & 63) return -1;
        if (~r) {
            if (r & 31) return -1;
        }
        if ((t | 0) >= 64) {
            i = P(e, t) | 0;
            if ((i | 0) == -1) return -1;
            e = e + i | 0;
            t = t - i | 0;
        }
        i = i + t | 0;
        c = c + t | 0;
        if (c >>> 0 < t >>> 0) u = u + 1 | 0;
        v[e | t] = 0x80;
        if ((t | 0) >= 56) {
            for(n = t + 1 | 0; (n | 0) < 64; n = n + 1 | 0)v[e | n] = 0x00;
            k(e);
            t = 0;
            v[e | 0] = 0;
        }
        for(n = t + 1 | 0; (n | 0) < 59; n = n + 1 | 0)v[e | n] = 0;
        v[e | 56] = u >>> 21 & 255;
        v[e | 57] = u >>> 13 & 255;
        v[e | 58] = u >>> 5 & 255;
        v[e | 59] = u << 3 & 255 | c >>> 29;
        v[e | 60] = c >>> 21 & 255;
        v[e | 61] = c >>> 13 & 255;
        v[e | 62] = c >>> 5 & 255;
        v[e | 63] = c << 3 & 255;
        k(e);
        if (~r) A(r);
        return i | 0;
    }
    function M() {
        i = h;
        n = d;
        a = f;
        s = l;
        o = p;
        c = 64;
        u = 0;
    }
    function C() {
        i = y;
        n = b;
        a = m;
        s = g;
        o = w;
        c = 64;
        u = 0;
    }
    function K(e, t, r, v, k, A, E, P, x, M, C, K, D, R, U, I) {
        e = e | 0;
        t = t | 0;
        r = r | 0;
        v = v | 0;
        k = k | 0;
        A = A | 0;
        E = E | 0;
        P = P | 0;
        x = x | 0;
        M = M | 0;
        C = C | 0;
        K = K | 0;
        D = D | 0;
        R = R | 0;
        U = U | 0;
        I = I | 0;
        S();
        _(e ^ 0x5c5c5c5c, t ^ 0x5c5c5c5c, r ^ 0x5c5c5c5c, v ^ 0x5c5c5c5c, k ^ 0x5c5c5c5c, A ^ 0x5c5c5c5c, E ^ 0x5c5c5c5c, P ^ 0x5c5c5c5c, x ^ 0x5c5c5c5c, M ^ 0x5c5c5c5c, C ^ 0x5c5c5c5c, K ^ 0x5c5c5c5c, D ^ 0x5c5c5c5c, R ^ 0x5c5c5c5c, U ^ 0x5c5c5c5c, I ^ 0x5c5c5c5c);
        y = i;
        b = n;
        m = a;
        g = s;
        w = o;
        S();
        _(e ^ 0x36363636, t ^ 0x36363636, r ^ 0x36363636, v ^ 0x36363636, k ^ 0x36363636, A ^ 0x36363636, E ^ 0x36363636, P ^ 0x36363636, x ^ 0x36363636, M ^ 0x36363636, C ^ 0x36363636, K ^ 0x36363636, D ^ 0x36363636, R ^ 0x36363636, U ^ 0x36363636, I ^ 0x36363636);
        h = i;
        d = n;
        f = a;
        l = s;
        p = o;
        c = 64;
        u = 0;
    }
    function D(e, t, r) {
        e = e | 0;
        t = t | 0;
        r = r | 0;
        var c = 0, u = 0, h = 0, d = 0, f = 0, l = 0;
        if (e & 63) return -1;
        if (~r) {
            if (r & 31) return -1;
        }
        l = x(e, t, -1) | 0;
        c = i, u = n, h = a, d = s, f = o;
        C();
        _(c, u, h, d, f, 0x80000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 672);
        if (~r) A(r);
        return l | 0;
    }
    function R(e, t, r, c, u) {
        e = e | 0;
        t = t | 0;
        r = r | 0;
        c = c | 0;
        u = u | 0;
        var h = 0, d = 0, f = 0, l = 0, p = 0, y = 0, b = 0, m = 0, g = 0, w = 0;
        if (e & 63) return -1;
        if (~u) {
            if (u & 31) return -1;
        }
        v[e + t | 0] = r >>> 24;
        v[e + t + 1 | 0] = r >>> 16 & 255;
        v[e + t + 2 | 0] = r >>> 8 & 255;
        v[e + t + 3 | 0] = r & 255;
        D(e, t + 4 | 0, -1);
        h = y = i, d = b = n, f = m = a, l = g = s, p = w = o;
        c = c - 1 | 0;
        while((c | 0) > 0){
            M();
            _(y, b, m, g, w, 0x80000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 672);
            y = i, b = n, m = a, g = s, w = o;
            C();
            _(y, b, m, g, w, 0x80000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 672);
            y = i, b = n, m = a, g = s, w = o;
            h = h ^ i;
            d = d ^ n;
            f = f ^ a;
            l = l ^ s;
            p = p ^ o;
            c = c - 1 | 0;
        }
        i = h;
        n = d;
        a = f;
        s = l;
        o = p;
        if (~u) A(u);
        return 0;
    }
    return {
        reset: S,
        init: E,
        process: P,
        finish: x,
        hmac_reset: M,
        hmac_init: K,
        hmac_finish: D,
        pbkdf2_generate_block: R
    };
};
class Ve {
    constructor(){
        this.pos = 0, this.len = 0;
    }
    reset() {
        const { asm: e } = this.acquire_asm();
        return this.result = null, this.pos = 0, this.len = 0, e.reset(), this;
    }
    process(e) {
        if (null !== this.result) throw new ve("state must be reset before processing new data");
        const { asm: t, heap: r } = this.acquire_asm();
        let i = this.pos, n = this.len, a = 0, s = e.length, o = 0;
        for(; s > 0;)o = ge(r, i + n, e, a, s), n += o, a += o, s -= o, o = t.process(i, n), i += o, n -= o, n || (i = 0);
        return this.pos = i, this.len = n, this;
    }
    finish() {
        if (null !== this.result) throw new ve("state must be reset before processing new data");
        const { asm: e, heap: t } = this.acquire_asm();
        return e.finish(this.pos, this.len, 0), this.result = new Uint8Array(this.HASH_SIZE), this.result.set(t.subarray(0, this.HASH_SIZE)), this.pos = 0, this.len = 0, this.release_asm(), this;
    }
}
const $e = [], Ze = [];
class Ye extends Ve {
    constructor(){
        super(), this.NAME = "sha1", this.BLOCK_SIZE = 64, this.HASH_SIZE = 20, this.acquire_asm();
    }
    acquire_asm() {
        return void 0 !== this.heap && void 0 !== this.asm || (this.heap = $e.pop() || me(), this.asm = Ze.pop() || Ge({
            Uint8Array
        }, null, this.heap.buffer), this.reset()), {
            heap: this.heap,
            asm: this.asm
        };
    }
    release_asm() {
        void 0 !== this.heap && void 0 !== this.asm && ($e.push(this.heap), Ze.push(this.asm)), this.heap = void 0, this.asm = void 0;
    }
    static bytes(e) {
        return (new Ye).process(e).finish().result;
    }
}
Ye.NAME = "sha1", Ye.heap_pool = [], Ye.asm_pool = [], Ye.asm_function = Ge;
const Xe = [], Qe = [];
class Je extends Ve {
    constructor(){
        super(), this.NAME = "sha256", this.BLOCK_SIZE = 64, this.HASH_SIZE = 32, this.acquire_asm();
    }
    acquire_asm() {
        return void 0 !== this.heap && void 0 !== this.asm || (this.heap = Xe.pop() || me(), this.asm = Qe.pop() || function(e, t, r) {
            "use asm";
            var i = 0, n = 0, a = 0, s = 0, o = 0, c = 0, u = 0, h = 0, d = 0, f = 0, l = 0, p = 0, y = 0, b = 0, m = 0, g = 0, w = 0, v = 0, _ = 0, k = 0, A = 0, S = 0, E = 0, P = 0, x = 0, M = 0, C = new e.Uint8Array(r);
            function K(e, t, r, d, f, l, p, y, b, m, g, w, v, _, k, A) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                d = d | 0;
                f = f | 0;
                l = l | 0;
                p = p | 0;
                y = y | 0;
                b = b | 0;
                m = m | 0;
                g = g | 0;
                w = w | 0;
                v = v | 0;
                _ = _ | 0;
                k = k | 0;
                A = A | 0;
                var S = 0, E = 0, P = 0, x = 0, M = 0, C = 0, K = 0, D = 0;
                S = i;
                E = n;
                P = a;
                x = s;
                M = o;
                C = c;
                K = u;
                D = h;
                D = e + D + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (K ^ M & (C ^ K)) + 0x428a2f98 | 0;
                x = x + D | 0;
                D = D + (S & E ^ P & (S ^ E)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                K = t + K + (x >>> 6 ^ x >>> 11 ^ x >>> 25 ^ x << 26 ^ x << 21 ^ x << 7) + (C ^ x & (M ^ C)) + 0x71374491 | 0;
                P = P + K | 0;
                K = K + (D & S ^ E & (D ^ S)) + (D >>> 2 ^ D >>> 13 ^ D >>> 22 ^ D << 30 ^ D << 19 ^ D << 10) | 0;
                C = r + C + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (M ^ P & (x ^ M)) + 0xb5c0fbcf | 0;
                E = E + C | 0;
                C = C + (K & D ^ S & (K ^ D)) + (K >>> 2 ^ K >>> 13 ^ K >>> 22 ^ K << 30 ^ K << 19 ^ K << 10) | 0;
                M = d + M + (E >>> 6 ^ E >>> 11 ^ E >>> 25 ^ E << 26 ^ E << 21 ^ E << 7) + (x ^ E & (P ^ x)) + 0xe9b5dba5 | 0;
                S = S + M | 0;
                M = M + (C & K ^ D & (C ^ K)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                x = f + x + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (P ^ S & (E ^ P)) + 0x3956c25b | 0;
                D = D + x | 0;
                x = x + (M & C ^ K & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                P = l + P + (D >>> 6 ^ D >>> 11 ^ D >>> 25 ^ D << 26 ^ D << 21 ^ D << 7) + (E ^ D & (S ^ E)) + 0x59f111f1 | 0;
                K = K + P | 0;
                P = P + (x & M ^ C & (x ^ M)) + (x >>> 2 ^ x >>> 13 ^ x >>> 22 ^ x << 30 ^ x << 19 ^ x << 10) | 0;
                E = p + E + (K >>> 6 ^ K >>> 11 ^ K >>> 25 ^ K << 26 ^ K << 21 ^ K << 7) + (S ^ K & (D ^ S)) + 0x923f82a4 | 0;
                C = C + E | 0;
                E = E + (P & x ^ M & (P ^ x)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                S = y + S + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (D ^ C & (K ^ D)) + 0xab1c5ed5 | 0;
                M = M + S | 0;
                S = S + (E & P ^ x & (E ^ P)) + (E >>> 2 ^ E >>> 13 ^ E >>> 22 ^ E << 30 ^ E << 19 ^ E << 10) | 0;
                D = b + D + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (K ^ M & (C ^ K)) + 0xd807aa98 | 0;
                x = x + D | 0;
                D = D + (S & E ^ P & (S ^ E)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                K = m + K + (x >>> 6 ^ x >>> 11 ^ x >>> 25 ^ x << 26 ^ x << 21 ^ x << 7) + (C ^ x & (M ^ C)) + 0x12835b01 | 0;
                P = P + K | 0;
                K = K + (D & S ^ E & (D ^ S)) + (D >>> 2 ^ D >>> 13 ^ D >>> 22 ^ D << 30 ^ D << 19 ^ D << 10) | 0;
                C = g + C + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (M ^ P & (x ^ M)) + 0x243185be | 0;
                E = E + C | 0;
                C = C + (K & D ^ S & (K ^ D)) + (K >>> 2 ^ K >>> 13 ^ K >>> 22 ^ K << 30 ^ K << 19 ^ K << 10) | 0;
                M = w + M + (E >>> 6 ^ E >>> 11 ^ E >>> 25 ^ E << 26 ^ E << 21 ^ E << 7) + (x ^ E & (P ^ x)) + 0x550c7dc3 | 0;
                S = S + M | 0;
                M = M + (C & K ^ D & (C ^ K)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                x = v + x + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (P ^ S & (E ^ P)) + 0x72be5d74 | 0;
                D = D + x | 0;
                x = x + (M & C ^ K & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                P = _ + P + (D >>> 6 ^ D >>> 11 ^ D >>> 25 ^ D << 26 ^ D << 21 ^ D << 7) + (E ^ D & (S ^ E)) + 0x80deb1fe | 0;
                K = K + P | 0;
                P = P + (x & M ^ C & (x ^ M)) + (x >>> 2 ^ x >>> 13 ^ x >>> 22 ^ x << 30 ^ x << 19 ^ x << 10) | 0;
                E = k + E + (K >>> 6 ^ K >>> 11 ^ K >>> 25 ^ K << 26 ^ K << 21 ^ K << 7) + (S ^ K & (D ^ S)) + 0x9bdc06a7 | 0;
                C = C + E | 0;
                E = E + (P & x ^ M & (P ^ x)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                S = A + S + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (D ^ C & (K ^ D)) + 0xc19bf174 | 0;
                M = M + S | 0;
                S = S + (E & P ^ x & (E ^ P)) + (E >>> 2 ^ E >>> 13 ^ E >>> 22 ^ E << 30 ^ E << 19 ^ E << 10) | 0;
                e = (t >>> 7 ^ t >>> 18 ^ t >>> 3 ^ t << 25 ^ t << 14) + (k >>> 17 ^ k >>> 19 ^ k >>> 10 ^ k << 15 ^ k << 13) + e + m | 0;
                D = e + D + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (K ^ M & (C ^ K)) + 0xe49b69c1 | 0;
                x = x + D | 0;
                D = D + (S & E ^ P & (S ^ E)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                t = (r >>> 7 ^ r >>> 18 ^ r >>> 3 ^ r << 25 ^ r << 14) + (A >>> 17 ^ A >>> 19 ^ A >>> 10 ^ A << 15 ^ A << 13) + t + g | 0;
                K = t + K + (x >>> 6 ^ x >>> 11 ^ x >>> 25 ^ x << 26 ^ x << 21 ^ x << 7) + (C ^ x & (M ^ C)) + 0xefbe4786 | 0;
                P = P + K | 0;
                K = K + (D & S ^ E & (D ^ S)) + (D >>> 2 ^ D >>> 13 ^ D >>> 22 ^ D << 30 ^ D << 19 ^ D << 10) | 0;
                r = (d >>> 7 ^ d >>> 18 ^ d >>> 3 ^ d << 25 ^ d << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + r + w | 0;
                C = r + C + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (M ^ P & (x ^ M)) + 0x0fc19dc6 | 0;
                E = E + C | 0;
                C = C + (K & D ^ S & (K ^ D)) + (K >>> 2 ^ K >>> 13 ^ K >>> 22 ^ K << 30 ^ K << 19 ^ K << 10) | 0;
                d = (f >>> 7 ^ f >>> 18 ^ f >>> 3 ^ f << 25 ^ f << 14) + (t >>> 17 ^ t >>> 19 ^ t >>> 10 ^ t << 15 ^ t << 13) + d + v | 0;
                M = d + M + (E >>> 6 ^ E >>> 11 ^ E >>> 25 ^ E << 26 ^ E << 21 ^ E << 7) + (x ^ E & (P ^ x)) + 0x240ca1cc | 0;
                S = S + M | 0;
                M = M + (C & K ^ D & (C ^ K)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                f = (l >>> 7 ^ l >>> 18 ^ l >>> 3 ^ l << 25 ^ l << 14) + (r >>> 17 ^ r >>> 19 ^ r >>> 10 ^ r << 15 ^ r << 13) + f + _ | 0;
                x = f + x + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (P ^ S & (E ^ P)) + 0x2de92c6f | 0;
                D = D + x | 0;
                x = x + (M & C ^ K & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                l = (p >>> 7 ^ p >>> 18 ^ p >>> 3 ^ p << 25 ^ p << 14) + (d >>> 17 ^ d >>> 19 ^ d >>> 10 ^ d << 15 ^ d << 13) + l + k | 0;
                P = l + P + (D >>> 6 ^ D >>> 11 ^ D >>> 25 ^ D << 26 ^ D << 21 ^ D << 7) + (E ^ D & (S ^ E)) + 0x4a7484aa | 0;
                K = K + P | 0;
                P = P + (x & M ^ C & (x ^ M)) + (x >>> 2 ^ x >>> 13 ^ x >>> 22 ^ x << 30 ^ x << 19 ^ x << 10) | 0;
                p = (y >>> 7 ^ y >>> 18 ^ y >>> 3 ^ y << 25 ^ y << 14) + (f >>> 17 ^ f >>> 19 ^ f >>> 10 ^ f << 15 ^ f << 13) + p + A | 0;
                E = p + E + (K >>> 6 ^ K >>> 11 ^ K >>> 25 ^ K << 26 ^ K << 21 ^ K << 7) + (S ^ K & (D ^ S)) + 0x5cb0a9dc | 0;
                C = C + E | 0;
                E = E + (P & x ^ M & (P ^ x)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                y = (b >>> 7 ^ b >>> 18 ^ b >>> 3 ^ b << 25 ^ b << 14) + (l >>> 17 ^ l >>> 19 ^ l >>> 10 ^ l << 15 ^ l << 13) + y + e | 0;
                S = y + S + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (D ^ C & (K ^ D)) + 0x76f988da | 0;
                M = M + S | 0;
                S = S + (E & P ^ x & (E ^ P)) + (E >>> 2 ^ E >>> 13 ^ E >>> 22 ^ E << 30 ^ E << 19 ^ E << 10) | 0;
                b = (m >>> 7 ^ m >>> 18 ^ m >>> 3 ^ m << 25 ^ m << 14) + (p >>> 17 ^ p >>> 19 ^ p >>> 10 ^ p << 15 ^ p << 13) + b + t | 0;
                D = b + D + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (K ^ M & (C ^ K)) + 0x983e5152 | 0;
                x = x + D | 0;
                D = D + (S & E ^ P & (S ^ E)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                m = (g >>> 7 ^ g >>> 18 ^ g >>> 3 ^ g << 25 ^ g << 14) + (y >>> 17 ^ y >>> 19 ^ y >>> 10 ^ y << 15 ^ y << 13) + m + r | 0;
                K = m + K + (x >>> 6 ^ x >>> 11 ^ x >>> 25 ^ x << 26 ^ x << 21 ^ x << 7) + (C ^ x & (M ^ C)) + 0xa831c66d | 0;
                P = P + K | 0;
                K = K + (D & S ^ E & (D ^ S)) + (D >>> 2 ^ D >>> 13 ^ D >>> 22 ^ D << 30 ^ D << 19 ^ D << 10) | 0;
                g = (w >>> 7 ^ w >>> 18 ^ w >>> 3 ^ w << 25 ^ w << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + g + d | 0;
                C = g + C + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (M ^ P & (x ^ M)) + 0xb00327c8 | 0;
                E = E + C | 0;
                C = C + (K & D ^ S & (K ^ D)) + (K >>> 2 ^ K >>> 13 ^ K >>> 22 ^ K << 30 ^ K << 19 ^ K << 10) | 0;
                w = (v >>> 7 ^ v >>> 18 ^ v >>> 3 ^ v << 25 ^ v << 14) + (m >>> 17 ^ m >>> 19 ^ m >>> 10 ^ m << 15 ^ m << 13) + w + f | 0;
                M = w + M + (E >>> 6 ^ E >>> 11 ^ E >>> 25 ^ E << 26 ^ E << 21 ^ E << 7) + (x ^ E & (P ^ x)) + 0xbf597fc7 | 0;
                S = S + M | 0;
                M = M + (C & K ^ D & (C ^ K)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                v = (_ >>> 7 ^ _ >>> 18 ^ _ >>> 3 ^ _ << 25 ^ _ << 14) + (g >>> 17 ^ g >>> 19 ^ g >>> 10 ^ g << 15 ^ g << 13) + v + l | 0;
                x = v + x + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (P ^ S & (E ^ P)) + 0xc6e00bf3 | 0;
                D = D + x | 0;
                x = x + (M & C ^ K & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                _ = (k >>> 7 ^ k >>> 18 ^ k >>> 3 ^ k << 25 ^ k << 14) + (w >>> 17 ^ w >>> 19 ^ w >>> 10 ^ w << 15 ^ w << 13) + _ + p | 0;
                P = _ + P + (D >>> 6 ^ D >>> 11 ^ D >>> 25 ^ D << 26 ^ D << 21 ^ D << 7) + (E ^ D & (S ^ E)) + 0xd5a79147 | 0;
                K = K + P | 0;
                P = P + (x & M ^ C & (x ^ M)) + (x >>> 2 ^ x >>> 13 ^ x >>> 22 ^ x << 30 ^ x << 19 ^ x << 10) | 0;
                k = (A >>> 7 ^ A >>> 18 ^ A >>> 3 ^ A << 25 ^ A << 14) + (v >>> 17 ^ v >>> 19 ^ v >>> 10 ^ v << 15 ^ v << 13) + k + y | 0;
                E = k + E + (K >>> 6 ^ K >>> 11 ^ K >>> 25 ^ K << 26 ^ K << 21 ^ K << 7) + (S ^ K & (D ^ S)) + 0x06ca6351 | 0;
                C = C + E | 0;
                E = E + (P & x ^ M & (P ^ x)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                A = (e >>> 7 ^ e >>> 18 ^ e >>> 3 ^ e << 25 ^ e << 14) + (_ >>> 17 ^ _ >>> 19 ^ _ >>> 10 ^ _ << 15 ^ _ << 13) + A + b | 0;
                S = A + S + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (D ^ C & (K ^ D)) + 0x14292967 | 0;
                M = M + S | 0;
                S = S + (E & P ^ x & (E ^ P)) + (E >>> 2 ^ E >>> 13 ^ E >>> 22 ^ E << 30 ^ E << 19 ^ E << 10) | 0;
                e = (t >>> 7 ^ t >>> 18 ^ t >>> 3 ^ t << 25 ^ t << 14) + (k >>> 17 ^ k >>> 19 ^ k >>> 10 ^ k << 15 ^ k << 13) + e + m | 0;
                D = e + D + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (K ^ M & (C ^ K)) + 0x27b70a85 | 0;
                x = x + D | 0;
                D = D + (S & E ^ P & (S ^ E)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                t = (r >>> 7 ^ r >>> 18 ^ r >>> 3 ^ r << 25 ^ r << 14) + (A >>> 17 ^ A >>> 19 ^ A >>> 10 ^ A << 15 ^ A << 13) + t + g | 0;
                K = t + K + (x >>> 6 ^ x >>> 11 ^ x >>> 25 ^ x << 26 ^ x << 21 ^ x << 7) + (C ^ x & (M ^ C)) + 0x2e1b2138 | 0;
                P = P + K | 0;
                K = K + (D & S ^ E & (D ^ S)) + (D >>> 2 ^ D >>> 13 ^ D >>> 22 ^ D << 30 ^ D << 19 ^ D << 10) | 0;
                r = (d >>> 7 ^ d >>> 18 ^ d >>> 3 ^ d << 25 ^ d << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + r + w | 0;
                C = r + C + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (M ^ P & (x ^ M)) + 0x4d2c6dfc | 0;
                E = E + C | 0;
                C = C + (K & D ^ S & (K ^ D)) + (K >>> 2 ^ K >>> 13 ^ K >>> 22 ^ K << 30 ^ K << 19 ^ K << 10) | 0;
                d = (f >>> 7 ^ f >>> 18 ^ f >>> 3 ^ f << 25 ^ f << 14) + (t >>> 17 ^ t >>> 19 ^ t >>> 10 ^ t << 15 ^ t << 13) + d + v | 0;
                M = d + M + (E >>> 6 ^ E >>> 11 ^ E >>> 25 ^ E << 26 ^ E << 21 ^ E << 7) + (x ^ E & (P ^ x)) + 0x53380d13 | 0;
                S = S + M | 0;
                M = M + (C & K ^ D & (C ^ K)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                f = (l >>> 7 ^ l >>> 18 ^ l >>> 3 ^ l << 25 ^ l << 14) + (r >>> 17 ^ r >>> 19 ^ r >>> 10 ^ r << 15 ^ r << 13) + f + _ | 0;
                x = f + x + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (P ^ S & (E ^ P)) + 0x650a7354 | 0;
                D = D + x | 0;
                x = x + (M & C ^ K & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                l = (p >>> 7 ^ p >>> 18 ^ p >>> 3 ^ p << 25 ^ p << 14) + (d >>> 17 ^ d >>> 19 ^ d >>> 10 ^ d << 15 ^ d << 13) + l + k | 0;
                P = l + P + (D >>> 6 ^ D >>> 11 ^ D >>> 25 ^ D << 26 ^ D << 21 ^ D << 7) + (E ^ D & (S ^ E)) + 0x766a0abb | 0;
                K = K + P | 0;
                P = P + (x & M ^ C & (x ^ M)) + (x >>> 2 ^ x >>> 13 ^ x >>> 22 ^ x << 30 ^ x << 19 ^ x << 10) | 0;
                p = (y >>> 7 ^ y >>> 18 ^ y >>> 3 ^ y << 25 ^ y << 14) + (f >>> 17 ^ f >>> 19 ^ f >>> 10 ^ f << 15 ^ f << 13) + p + A | 0;
                E = p + E + (K >>> 6 ^ K >>> 11 ^ K >>> 25 ^ K << 26 ^ K << 21 ^ K << 7) + (S ^ K & (D ^ S)) + 0x81c2c92e | 0;
                C = C + E | 0;
                E = E + (P & x ^ M & (P ^ x)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                y = (b >>> 7 ^ b >>> 18 ^ b >>> 3 ^ b << 25 ^ b << 14) + (l >>> 17 ^ l >>> 19 ^ l >>> 10 ^ l << 15 ^ l << 13) + y + e | 0;
                S = y + S + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (D ^ C & (K ^ D)) + 0x92722c85 | 0;
                M = M + S | 0;
                S = S + (E & P ^ x & (E ^ P)) + (E >>> 2 ^ E >>> 13 ^ E >>> 22 ^ E << 30 ^ E << 19 ^ E << 10) | 0;
                b = (m >>> 7 ^ m >>> 18 ^ m >>> 3 ^ m << 25 ^ m << 14) + (p >>> 17 ^ p >>> 19 ^ p >>> 10 ^ p << 15 ^ p << 13) + b + t | 0;
                D = b + D + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (K ^ M & (C ^ K)) + 0xa2bfe8a1 | 0;
                x = x + D | 0;
                D = D + (S & E ^ P & (S ^ E)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                m = (g >>> 7 ^ g >>> 18 ^ g >>> 3 ^ g << 25 ^ g << 14) + (y >>> 17 ^ y >>> 19 ^ y >>> 10 ^ y << 15 ^ y << 13) + m + r | 0;
                K = m + K + (x >>> 6 ^ x >>> 11 ^ x >>> 25 ^ x << 26 ^ x << 21 ^ x << 7) + (C ^ x & (M ^ C)) + 0xa81a664b | 0;
                P = P + K | 0;
                K = K + (D & S ^ E & (D ^ S)) + (D >>> 2 ^ D >>> 13 ^ D >>> 22 ^ D << 30 ^ D << 19 ^ D << 10) | 0;
                g = (w >>> 7 ^ w >>> 18 ^ w >>> 3 ^ w << 25 ^ w << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + g + d | 0;
                C = g + C + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (M ^ P & (x ^ M)) + 0xc24b8b70 | 0;
                E = E + C | 0;
                C = C + (K & D ^ S & (K ^ D)) + (K >>> 2 ^ K >>> 13 ^ K >>> 22 ^ K << 30 ^ K << 19 ^ K << 10) | 0;
                w = (v >>> 7 ^ v >>> 18 ^ v >>> 3 ^ v << 25 ^ v << 14) + (m >>> 17 ^ m >>> 19 ^ m >>> 10 ^ m << 15 ^ m << 13) + w + f | 0;
                M = w + M + (E >>> 6 ^ E >>> 11 ^ E >>> 25 ^ E << 26 ^ E << 21 ^ E << 7) + (x ^ E & (P ^ x)) + 0xc76c51a3 | 0;
                S = S + M | 0;
                M = M + (C & K ^ D & (C ^ K)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                v = (_ >>> 7 ^ _ >>> 18 ^ _ >>> 3 ^ _ << 25 ^ _ << 14) + (g >>> 17 ^ g >>> 19 ^ g >>> 10 ^ g << 15 ^ g << 13) + v + l | 0;
                x = v + x + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (P ^ S & (E ^ P)) + 0xd192e819 | 0;
                D = D + x | 0;
                x = x + (M & C ^ K & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                _ = (k >>> 7 ^ k >>> 18 ^ k >>> 3 ^ k << 25 ^ k << 14) + (w >>> 17 ^ w >>> 19 ^ w >>> 10 ^ w << 15 ^ w << 13) + _ + p | 0;
                P = _ + P + (D >>> 6 ^ D >>> 11 ^ D >>> 25 ^ D << 26 ^ D << 21 ^ D << 7) + (E ^ D & (S ^ E)) + 0xd6990624 | 0;
                K = K + P | 0;
                P = P + (x & M ^ C & (x ^ M)) + (x >>> 2 ^ x >>> 13 ^ x >>> 22 ^ x << 30 ^ x << 19 ^ x << 10) | 0;
                k = (A >>> 7 ^ A >>> 18 ^ A >>> 3 ^ A << 25 ^ A << 14) + (v >>> 17 ^ v >>> 19 ^ v >>> 10 ^ v << 15 ^ v << 13) + k + y | 0;
                E = k + E + (K >>> 6 ^ K >>> 11 ^ K >>> 25 ^ K << 26 ^ K << 21 ^ K << 7) + (S ^ K & (D ^ S)) + 0xf40e3585 | 0;
                C = C + E | 0;
                E = E + (P & x ^ M & (P ^ x)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                A = (e >>> 7 ^ e >>> 18 ^ e >>> 3 ^ e << 25 ^ e << 14) + (_ >>> 17 ^ _ >>> 19 ^ _ >>> 10 ^ _ << 15 ^ _ << 13) + A + b | 0;
                S = A + S + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (D ^ C & (K ^ D)) + 0x106aa070 | 0;
                M = M + S | 0;
                S = S + (E & P ^ x & (E ^ P)) + (E >>> 2 ^ E >>> 13 ^ E >>> 22 ^ E << 30 ^ E << 19 ^ E << 10) | 0;
                e = (t >>> 7 ^ t >>> 18 ^ t >>> 3 ^ t << 25 ^ t << 14) + (k >>> 17 ^ k >>> 19 ^ k >>> 10 ^ k << 15 ^ k << 13) + e + m | 0;
                D = e + D + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (K ^ M & (C ^ K)) + 0x19a4c116 | 0;
                x = x + D | 0;
                D = D + (S & E ^ P & (S ^ E)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                t = (r >>> 7 ^ r >>> 18 ^ r >>> 3 ^ r << 25 ^ r << 14) + (A >>> 17 ^ A >>> 19 ^ A >>> 10 ^ A << 15 ^ A << 13) + t + g | 0;
                K = t + K + (x >>> 6 ^ x >>> 11 ^ x >>> 25 ^ x << 26 ^ x << 21 ^ x << 7) + (C ^ x & (M ^ C)) + 0x1e376c08 | 0;
                P = P + K | 0;
                K = K + (D & S ^ E & (D ^ S)) + (D >>> 2 ^ D >>> 13 ^ D >>> 22 ^ D << 30 ^ D << 19 ^ D << 10) | 0;
                r = (d >>> 7 ^ d >>> 18 ^ d >>> 3 ^ d << 25 ^ d << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + r + w | 0;
                C = r + C + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (M ^ P & (x ^ M)) + 0x2748774c | 0;
                E = E + C | 0;
                C = C + (K & D ^ S & (K ^ D)) + (K >>> 2 ^ K >>> 13 ^ K >>> 22 ^ K << 30 ^ K << 19 ^ K << 10) | 0;
                d = (f >>> 7 ^ f >>> 18 ^ f >>> 3 ^ f << 25 ^ f << 14) + (t >>> 17 ^ t >>> 19 ^ t >>> 10 ^ t << 15 ^ t << 13) + d + v | 0;
                M = d + M + (E >>> 6 ^ E >>> 11 ^ E >>> 25 ^ E << 26 ^ E << 21 ^ E << 7) + (x ^ E & (P ^ x)) + 0x34b0bcb5 | 0;
                S = S + M | 0;
                M = M + (C & K ^ D & (C ^ K)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                f = (l >>> 7 ^ l >>> 18 ^ l >>> 3 ^ l << 25 ^ l << 14) + (r >>> 17 ^ r >>> 19 ^ r >>> 10 ^ r << 15 ^ r << 13) + f + _ | 0;
                x = f + x + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (P ^ S & (E ^ P)) + 0x391c0cb3 | 0;
                D = D + x | 0;
                x = x + (M & C ^ K & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                l = (p >>> 7 ^ p >>> 18 ^ p >>> 3 ^ p << 25 ^ p << 14) + (d >>> 17 ^ d >>> 19 ^ d >>> 10 ^ d << 15 ^ d << 13) + l + k | 0;
                P = l + P + (D >>> 6 ^ D >>> 11 ^ D >>> 25 ^ D << 26 ^ D << 21 ^ D << 7) + (E ^ D & (S ^ E)) + 0x4ed8aa4a | 0;
                K = K + P | 0;
                P = P + (x & M ^ C & (x ^ M)) + (x >>> 2 ^ x >>> 13 ^ x >>> 22 ^ x << 30 ^ x << 19 ^ x << 10) | 0;
                p = (y >>> 7 ^ y >>> 18 ^ y >>> 3 ^ y << 25 ^ y << 14) + (f >>> 17 ^ f >>> 19 ^ f >>> 10 ^ f << 15 ^ f << 13) + p + A | 0;
                E = p + E + (K >>> 6 ^ K >>> 11 ^ K >>> 25 ^ K << 26 ^ K << 21 ^ K << 7) + (S ^ K & (D ^ S)) + 0x5b9cca4f | 0;
                C = C + E | 0;
                E = E + (P & x ^ M & (P ^ x)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                y = (b >>> 7 ^ b >>> 18 ^ b >>> 3 ^ b << 25 ^ b << 14) + (l >>> 17 ^ l >>> 19 ^ l >>> 10 ^ l << 15 ^ l << 13) + y + e | 0;
                S = y + S + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (D ^ C & (K ^ D)) + 0x682e6ff3 | 0;
                M = M + S | 0;
                S = S + (E & P ^ x & (E ^ P)) + (E >>> 2 ^ E >>> 13 ^ E >>> 22 ^ E << 30 ^ E << 19 ^ E << 10) | 0;
                b = (m >>> 7 ^ m >>> 18 ^ m >>> 3 ^ m << 25 ^ m << 14) + (p >>> 17 ^ p >>> 19 ^ p >>> 10 ^ p << 15 ^ p << 13) + b + t | 0;
                D = b + D + (M >>> 6 ^ M >>> 11 ^ M >>> 25 ^ M << 26 ^ M << 21 ^ M << 7) + (K ^ M & (C ^ K)) + 0x748f82ee | 0;
                x = x + D | 0;
                D = D + (S & E ^ P & (S ^ E)) + (S >>> 2 ^ S >>> 13 ^ S >>> 22 ^ S << 30 ^ S << 19 ^ S << 10) | 0;
                m = (g >>> 7 ^ g >>> 18 ^ g >>> 3 ^ g << 25 ^ g << 14) + (y >>> 17 ^ y >>> 19 ^ y >>> 10 ^ y << 15 ^ y << 13) + m + r | 0;
                K = m + K + (x >>> 6 ^ x >>> 11 ^ x >>> 25 ^ x << 26 ^ x << 21 ^ x << 7) + (C ^ x & (M ^ C)) + 0x78a5636f | 0;
                P = P + K | 0;
                K = K + (D & S ^ E & (D ^ S)) + (D >>> 2 ^ D >>> 13 ^ D >>> 22 ^ D << 30 ^ D << 19 ^ D << 10) | 0;
                g = (w >>> 7 ^ w >>> 18 ^ w >>> 3 ^ w << 25 ^ w << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + g + d | 0;
                C = g + C + (P >>> 6 ^ P >>> 11 ^ P >>> 25 ^ P << 26 ^ P << 21 ^ P << 7) + (M ^ P & (x ^ M)) + 0x84c87814 | 0;
                E = E + C | 0;
                C = C + (K & D ^ S & (K ^ D)) + (K >>> 2 ^ K >>> 13 ^ K >>> 22 ^ K << 30 ^ K << 19 ^ K << 10) | 0;
                w = (v >>> 7 ^ v >>> 18 ^ v >>> 3 ^ v << 25 ^ v << 14) + (m >>> 17 ^ m >>> 19 ^ m >>> 10 ^ m << 15 ^ m << 13) + w + f | 0;
                M = w + M + (E >>> 6 ^ E >>> 11 ^ E >>> 25 ^ E << 26 ^ E << 21 ^ E << 7) + (x ^ E & (P ^ x)) + 0x8cc70208 | 0;
                S = S + M | 0;
                M = M + (C & K ^ D & (C ^ K)) + (C >>> 2 ^ C >>> 13 ^ C >>> 22 ^ C << 30 ^ C << 19 ^ C << 10) | 0;
                v = (_ >>> 7 ^ _ >>> 18 ^ _ >>> 3 ^ _ << 25 ^ _ << 14) + (g >>> 17 ^ g >>> 19 ^ g >>> 10 ^ g << 15 ^ g << 13) + v + l | 0;
                x = v + x + (S >>> 6 ^ S >>> 11 ^ S >>> 25 ^ S << 26 ^ S << 21 ^ S << 7) + (P ^ S & (E ^ P)) + 0x90befffa | 0;
                D = D + x | 0;
                x = x + (M & C ^ K & (M ^ C)) + (M >>> 2 ^ M >>> 13 ^ M >>> 22 ^ M << 30 ^ M << 19 ^ M << 10) | 0;
                _ = (k >>> 7 ^ k >>> 18 ^ k >>> 3 ^ k << 25 ^ k << 14) + (w >>> 17 ^ w >>> 19 ^ w >>> 10 ^ w << 15 ^ w << 13) + _ + p | 0;
                P = _ + P + (D >>> 6 ^ D >>> 11 ^ D >>> 25 ^ D << 26 ^ D << 21 ^ D << 7) + (E ^ D & (S ^ E)) + 0xa4506ceb | 0;
                K = K + P | 0;
                P = P + (x & M ^ C & (x ^ M)) + (x >>> 2 ^ x >>> 13 ^ x >>> 22 ^ x << 30 ^ x << 19 ^ x << 10) | 0;
                k = (A >>> 7 ^ A >>> 18 ^ A >>> 3 ^ A << 25 ^ A << 14) + (v >>> 17 ^ v >>> 19 ^ v >>> 10 ^ v << 15 ^ v << 13) + k + y | 0;
                E = k + E + (K >>> 6 ^ K >>> 11 ^ K >>> 25 ^ K << 26 ^ K << 21 ^ K << 7) + (S ^ K & (D ^ S)) + 0xbef9a3f7 | 0;
                C = C + E | 0;
                E = E + (P & x ^ M & (P ^ x)) + (P >>> 2 ^ P >>> 13 ^ P >>> 22 ^ P << 30 ^ P << 19 ^ P << 10) | 0;
                A = (e >>> 7 ^ e >>> 18 ^ e >>> 3 ^ e << 25 ^ e << 14) + (_ >>> 17 ^ _ >>> 19 ^ _ >>> 10 ^ _ << 15 ^ _ << 13) + A + b | 0;
                S = A + S + (C >>> 6 ^ C >>> 11 ^ C >>> 25 ^ C << 26 ^ C << 21 ^ C << 7) + (D ^ C & (K ^ D)) + 0xc67178f2 | 0;
                M = M + S | 0;
                S = S + (E & P ^ x & (E ^ P)) + (E >>> 2 ^ E >>> 13 ^ E >>> 22 ^ E << 30 ^ E << 19 ^ E << 10) | 0;
                i = i + S | 0;
                n = n + E | 0;
                a = a + P | 0;
                s = s + x | 0;
                o = o + M | 0;
                c = c + C | 0;
                u = u + K | 0;
                h = h + D | 0;
            }
            function D(e) {
                e = e | 0;
                K(C[e | 0] << 24 | C[e | 1] << 16 | C[e | 2] << 8 | C[e | 3], C[e | 4] << 24 | C[e | 5] << 16 | C[e | 6] << 8 | C[e | 7], C[e | 8] << 24 | C[e | 9] << 16 | C[e | 10] << 8 | C[e | 11], C[e | 12] << 24 | C[e | 13] << 16 | C[e | 14] << 8 | C[e | 15], C[e | 16] << 24 | C[e | 17] << 16 | C[e | 18] << 8 | C[e | 19], C[e | 20] << 24 | C[e | 21] << 16 | C[e | 22] << 8 | C[e | 23], C[e | 24] << 24 | C[e | 25] << 16 | C[e | 26] << 8 | C[e | 27], C[e | 28] << 24 | C[e | 29] << 16 | C[e | 30] << 8 | C[e | 31], C[e | 32] << 24 | C[e | 33] << 16 | C[e | 34] << 8 | C[e | 35], C[e | 36] << 24 | C[e | 37] << 16 | C[e | 38] << 8 | C[e | 39], C[e | 40] << 24 | C[e | 41] << 16 | C[e | 42] << 8 | C[e | 43], C[e | 44] << 24 | C[e | 45] << 16 | C[e | 46] << 8 | C[e | 47], C[e | 48] << 24 | C[e | 49] << 16 | C[e | 50] << 8 | C[e | 51], C[e | 52] << 24 | C[e | 53] << 16 | C[e | 54] << 8 | C[e | 55], C[e | 56] << 24 | C[e | 57] << 16 | C[e | 58] << 8 | C[e | 59], C[e | 60] << 24 | C[e | 61] << 16 | C[e | 62] << 8 | C[e | 63]);
            }
            function R(e) {
                e = e | 0;
                C[e | 0] = i >>> 24;
                C[e | 1] = i >>> 16 & 255;
                C[e | 2] = i >>> 8 & 255;
                C[e | 3] = i & 255;
                C[e | 4] = n >>> 24;
                C[e | 5] = n >>> 16 & 255;
                C[e | 6] = n >>> 8 & 255;
                C[e | 7] = n & 255;
                C[e | 8] = a >>> 24;
                C[e | 9] = a >>> 16 & 255;
                C[e | 10] = a >>> 8 & 255;
                C[e | 11] = a & 255;
                C[e | 12] = s >>> 24;
                C[e | 13] = s >>> 16 & 255;
                C[e | 14] = s >>> 8 & 255;
                C[e | 15] = s & 255;
                C[e | 16] = o >>> 24;
                C[e | 17] = o >>> 16 & 255;
                C[e | 18] = o >>> 8 & 255;
                C[e | 19] = o & 255;
                C[e | 20] = c >>> 24;
                C[e | 21] = c >>> 16 & 255;
                C[e | 22] = c >>> 8 & 255;
                C[e | 23] = c & 255;
                C[e | 24] = u >>> 24;
                C[e | 25] = u >>> 16 & 255;
                C[e | 26] = u >>> 8 & 255;
                C[e | 27] = u & 255;
                C[e | 28] = h >>> 24;
                C[e | 29] = h >>> 16 & 255;
                C[e | 30] = h >>> 8 & 255;
                C[e | 31] = h & 255;
            }
            function U() {
                i = 0x6a09e667;
                n = 0xbb67ae85;
                a = 0x3c6ef372;
                s = 0xa54ff53a;
                o = 0x510e527f;
                c = 0x9b05688c;
                u = 0x1f83d9ab;
                h = 0x5be0cd19;
                d = f = 0;
            }
            function I(e, t, r, l, p, y, b, m, g, w) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                l = l | 0;
                p = p | 0;
                y = y | 0;
                b = b | 0;
                m = m | 0;
                g = g | 0;
                w = w | 0;
                i = e;
                n = t;
                a = r;
                s = l;
                o = p;
                c = y;
                u = b;
                h = m;
                d = g;
                f = w;
            }
            function B(e, t) {
                e = e | 0;
                t = t | 0;
                var r = 0;
                if (e & 63) return -1;
                while((t | 0) >= 64){
                    D(e);
                    e = e + 64 | 0;
                    t = t - 64 | 0;
                    r = r + 64 | 0;
                }
                d = d + r | 0;
                if (d >>> 0 < r >>> 0) f = f + 1 | 0;
                return r | 0;
            }
            function T(e, t, r) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                var i = 0, n = 0;
                if (e & 63) return -1;
                if (~r) {
                    if (r & 31) return -1;
                }
                if ((t | 0) >= 64) {
                    i = B(e, t) | 0;
                    if ((i | 0) == -1) return -1;
                    e = e + i | 0;
                    t = t - i | 0;
                }
                i = i + t | 0;
                d = d + t | 0;
                if (d >>> 0 < t >>> 0) f = f + 1 | 0;
                C[e | t] = 0x80;
                if ((t | 0) >= 56) {
                    for(n = t + 1 | 0; (n | 0) < 64; n = n + 1 | 0)C[e | n] = 0x00;
                    D(e);
                    t = 0;
                    C[e | 0] = 0;
                }
                for(n = t + 1 | 0; (n | 0) < 59; n = n + 1 | 0)C[e | n] = 0;
                C[e | 56] = f >>> 21 & 255;
                C[e | 57] = f >>> 13 & 255;
                C[e | 58] = f >>> 5 & 255;
                C[e | 59] = f << 3 & 255 | d >>> 29;
                C[e | 60] = d >>> 21 & 255;
                C[e | 61] = d >>> 13 & 255;
                C[e | 62] = d >>> 5 & 255;
                C[e | 63] = d << 3 & 255;
                D(e);
                if (~r) R(r);
                return i | 0;
            }
            function z() {
                i = l;
                n = p;
                a = y;
                s = b;
                o = m;
                c = g;
                u = w;
                h = v;
                d = 64;
                f = 0;
            }
            function q() {
                i = _;
                n = k;
                a = A;
                s = S;
                o = E;
                c = P;
                u = x;
                h = M;
                d = 64;
                f = 0;
            }
            function F(e, t, r, C, D, R, I, B, T, z, q, F, O, N, j, L) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                C = C | 0;
                D = D | 0;
                R = R | 0;
                I = I | 0;
                B = B | 0;
                T = T | 0;
                z = z | 0;
                q = q | 0;
                F = F | 0;
                O = O | 0;
                N = N | 0;
                j = j | 0;
                L = L | 0;
                U();
                K(e ^ 0x5c5c5c5c, t ^ 0x5c5c5c5c, r ^ 0x5c5c5c5c, C ^ 0x5c5c5c5c, D ^ 0x5c5c5c5c, R ^ 0x5c5c5c5c, I ^ 0x5c5c5c5c, B ^ 0x5c5c5c5c, T ^ 0x5c5c5c5c, z ^ 0x5c5c5c5c, q ^ 0x5c5c5c5c, F ^ 0x5c5c5c5c, O ^ 0x5c5c5c5c, N ^ 0x5c5c5c5c, j ^ 0x5c5c5c5c, L ^ 0x5c5c5c5c);
                _ = i;
                k = n;
                A = a;
                S = s;
                E = o;
                P = c;
                x = u;
                M = h;
                U();
                K(e ^ 0x36363636, t ^ 0x36363636, r ^ 0x36363636, C ^ 0x36363636, D ^ 0x36363636, R ^ 0x36363636, I ^ 0x36363636, B ^ 0x36363636, T ^ 0x36363636, z ^ 0x36363636, q ^ 0x36363636, F ^ 0x36363636, O ^ 0x36363636, N ^ 0x36363636, j ^ 0x36363636, L ^ 0x36363636);
                l = i;
                p = n;
                y = a;
                b = s;
                m = o;
                g = c;
                w = u;
                v = h;
                d = 64;
                f = 0;
            }
            function O(e, t, r) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                var d = 0, f = 0, l = 0, p = 0, y = 0, b = 0, m = 0, g = 0, w = 0;
                if (e & 63) return -1;
                if (~r) {
                    if (r & 31) return -1;
                }
                w = T(e, t, -1) | 0;
                d = i, f = n, l = a, p = s, y = o, b = c, m = u, g = h;
                q();
                K(d, f, l, p, y, b, m, g, 0x80000000, 0, 0, 0, 0, 0, 0, 768);
                if (~r) R(r);
                return w | 0;
            }
            function N(e, t, r, d, f) {
                e = e | 0;
                t = t | 0;
                r = r | 0;
                d = d | 0;
                f = f | 0;
                var l = 0, p = 0, y = 0, b = 0, m = 0, g = 0, w = 0, v = 0, _ = 0, k = 0, A = 0, S = 0, E = 0, P = 0, x = 0, M = 0;
                if (e & 63) return -1;
                if (~f) {
                    if (f & 31) return -1;
                }
                C[e + t | 0] = r >>> 24;
                C[e + t + 1 | 0] = r >>> 16 & 255;
                C[e + t + 2 | 0] = r >>> 8 & 255;
                C[e + t + 3 | 0] = r & 255;
                O(e, t + 4 | 0, -1);
                l = _ = i, p = k = n, y = A = a, b = S = s, m = E = o, g = P = c, w = x = u, v = M = h;
                d = d - 1 | 0;
                while((d | 0) > 0){
                    z();
                    K(_, k, A, S, E, P, x, M, 0x80000000, 0, 0, 0, 0, 0, 0, 768);
                    _ = i, k = n, A = a, S = s, E = o, P = c, x = u, M = h;
                    q();
                    K(_, k, A, S, E, P, x, M, 0x80000000, 0, 0, 0, 0, 0, 0, 768);
                    _ = i, k = n, A = a, S = s, E = o, P = c, x = u, M = h;
                    l = l ^ i;
                    p = p ^ n;
                    y = y ^ a;
                    b = b ^ s;
                    m = m ^ o;
                    g = g ^ c;
                    w = w ^ u;
                    v = v ^ h;
                    d = d - 1 | 0;
                }
                i = l;
                n = p;
                a = y;
                s = b;
                o = m;
                c = g;
                u = w;
                h = v;
                if (~f) R(f);
                return 0;
            }
            return {
                reset: U,
                init: I,
                process: B,
                finish: T,
                hmac_reset: z,
                hmac_init: F,
                hmac_finish: O,
                pbkdf2_generate_block: N
            };
        }({
            Uint8Array
        }, null, this.heap.buffer), this.reset()), {
            heap: this.heap,
            asm: this.asm
        };
    }
    release_asm() {
        void 0 !== this.heap && void 0 !== this.asm && (Xe.push(this.heap), Qe.push(this.asm)), this.heap = void 0, this.asm = void 0;
    }
    static bytes(e) {
        return (new Je).process(e).finish().result;
    }
}
Je.NAME = "sha256";
var et = tt;
function tt(e, t) {
    if (!e) throw Error(t || "Assertion failed");
}
tt.equal = function(e, t, r) {
    if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t);
};
var rt = void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function it(e, t) {
    return e(t = {
        exports: {}
    }, t.exports), t.exports;
}
function nt() {
    throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var at = it(function(e) {
    e.exports = "function" == typeof Object.create ? function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
    } : function(e, t) {
        e.super_ = t;
        var r = function() {};
        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e;
    };
});
var st = function(e, t) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var r = [];
    if ("string" == typeof e) {
        if (t) {
            if ("hex" === t) for((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2)r.push(parseInt(e[i] + e[i + 1], 16));
        } else for(var i = 0; i < e.length; i++){
            var n = e.charCodeAt(i), a = n >> 8, s = 255 & n;
            a ? r.push(a, s) : r.push(s);
        }
    } else for(i = 0; i < e.length; i++)r[i] = 0 | e[i];
    return r;
};
var ot = function(e) {
    for(var t = "", r = 0; r < e.length; r++)t += ht(e[r].toString(16));
    return t;
};
function ct(e) {
    return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0;
}
var ut = function(e, t) {
    for(var r = "", i = 0; i < e.length; i++){
        var n = e[i];
        "little" === t && (n = ct(n)), r += dt(n.toString(16));
    }
    return r;
};
function ht(e) {
    return 1 === e.length ? "0" + e : e;
}
function dt(e) {
    return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e;
}
var ft = function(e, t, r, i) {
    var n = r - t;
    et(n % 4 == 0);
    for(var a = Array(n / 4), s = 0, o = t; s < a.length; s++, o += 4){
        var c;
        c = "big" === i ? e[o] << 24 | e[o + 1] << 16 | e[o + 2] << 8 | e[o + 3] : e[o + 3] << 24 | e[o + 2] << 16 | e[o + 1] << 8 | e[o], a[s] = c >>> 0;
    }
    return a;
};
var lt = function(e, t) {
    for(var r = Array(4 * e.length), i = 0, n = 0; i < e.length; i++, n += 4){
        var a = e[i];
        "big" === t ? (r[n] = a >>> 24, r[n + 1] = a >>> 16 & 255, r[n + 2] = a >>> 8 & 255, r[n + 3] = 255 & a) : (r[n + 3] = a >>> 24, r[n + 2] = a >>> 16 & 255, r[n + 1] = a >>> 8 & 255, r[n] = 255 & a);
    }
    return r;
};
var pt = {
    inherits: at,
    toArray: st,
    toHex: ot,
    htonl: ct,
    toHex32: ut,
    zero2: ht,
    zero8: dt,
    join32: ft,
    split32: lt,
    rotr32: function(e, t) {
        return e >>> t | e << 32 - t;
    },
    rotl32: function(e, t) {
        return e << t | e >>> 32 - t;
    },
    sum32: function(e, t) {
        return e + t >>> 0;
    },
    sum32_3: function(e, t, r) {
        return e + t + r >>> 0;
    },
    sum32_4: function(e, t, r, i) {
        return e + t + r + i >>> 0;
    },
    sum32_5: function(e, t, r, i, n) {
        return e + t + r + i + n >>> 0;
    },
    sum64: function(e, t, r, i) {
        var n = e[t], a = i + e[t + 1] >>> 0, s = (a < i ? 1 : 0) + r + n;
        e[t] = s >>> 0, e[t + 1] = a;
    },
    sum64_hi: function(e, t, r, i) {
        return (t + i >>> 0 < t ? 1 : 0) + e + r >>> 0;
    },
    sum64_lo: function(e, t, r, i) {
        return t + i >>> 0;
    },
    sum64_4_hi: function(e, t, r, i, n, a, s, o) {
        var c = 0, u = t;
        return c += (u = u + i >>> 0) < t ? 1 : 0, c += (u = u + a >>> 0) < a ? 1 : 0, e + r + n + s + (c += (u = u + o >>> 0) < o ? 1 : 0) >>> 0;
    },
    sum64_4_lo: function(e, t, r, i, n, a, s, o) {
        return t + i + a + o >>> 0;
    },
    sum64_5_hi: function(e, t, r, i, n, a, s, o, c, u) {
        var h = 0, d = t;
        return h += (d = d + i >>> 0) < t ? 1 : 0, h += (d = d + a >>> 0) < a ? 1 : 0, h += (d = d + o >>> 0) < o ? 1 : 0, e + r + n + s + c + (h += (d = d + u >>> 0) < u ? 1 : 0) >>> 0;
    },
    sum64_5_lo: function(e, t, r, i, n, a, s, o, c, u) {
        return t + i + a + o + u >>> 0;
    },
    rotr64_hi: function(e, t, r) {
        return (t << 32 - r | e >>> r) >>> 0;
    },
    rotr64_lo: function(e, t, r) {
        return (e << 32 - r | t >>> r) >>> 0;
    },
    shr64_hi: function(e, t, r) {
        return e >>> r;
    },
    shr64_lo: function(e, t, r) {
        return (e << 32 - r | t >>> r) >>> 0;
    }
};
function yt() {
    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
var bt = yt;
yt.prototype.update = function(e, t) {
    if (e = pt.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
        var r = (e = this.pending).length % this._delta8;
        this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = pt.join32(e, 0, e.length - r, this.endian);
        for(var i = 0; i < e.length; i += this._delta32)this._update(e, i, i + this._delta32);
    }
    return this;
}, yt.prototype.digest = function(e) {
    return this.update(this._pad()), et(null === this.pending), this._digest(e);
}, yt.prototype._pad = function() {
    var e = this.pendingTotal, t = this._delta8, r = t - (e + this.padLength) % t, i = Array(r + this.padLength);
    i[0] = 128;
    for(var n = 1; n < r; n++)i[n] = 0;
    if (e <<= 3, "big" === this.endian) {
        for(var a = 8; a < this.padLength; a++)i[n++] = 0;
        i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = e >>> 24 & 255, i[n++] = e >>> 16 & 255, i[n++] = e >>> 8 & 255, i[n++] = 255 & e;
    } else for(i[n++] = 255 & e, i[n++] = e >>> 8 & 255, i[n++] = e >>> 16 & 255, i[n++] = e >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, a = 8; a < this.padLength; a++)i[n++] = 0;
    return i;
};
var mt = {
    BlockHash: bt
}, gt = pt.rotr32;
var wt = function(e, t, r, i) {
    return 0 === e ? vt(t, r, i) : 1 === e || 3 === e ? kt(t, r, i) : 2 === e ? _t(t, r, i) : void 0;
};
function vt(e, t, r) {
    return e & t ^ ~e & r;
}
function _t(e, t, r) {
    return e & t ^ e & r ^ t & r;
}
function kt(e, t, r) {
    return e ^ t ^ r;
}
var At = {
    ft_1: wt,
    ch32: vt,
    maj32: _t,
    p32: kt,
    s0_256: function(e) {
        return gt(e, 2) ^ gt(e, 13) ^ gt(e, 22);
    },
    s1_256: function(e) {
        return gt(e, 6) ^ gt(e, 11) ^ gt(e, 25);
    },
    g0_256: function(e) {
        return gt(e, 7) ^ gt(e, 18) ^ e >>> 3;
    },
    g1_256: function(e) {
        return gt(e, 17) ^ gt(e, 19) ^ e >>> 10;
    }
}, St = pt.sum32, Et = pt.sum32_4, Pt = pt.sum32_5, xt = At.ch32, Mt = At.maj32, Ct = At.s0_256, Kt = At.s1_256, Dt = At.g0_256, Rt = At.g1_256, Ut = mt.BlockHash, It = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
];
function Bt() {
    if (!(this instanceof Bt)) return new Bt;
    Ut.call(this), this.h = [
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
    ], this.k = It, this.W = Array(64);
}
pt.inherits(Bt, Ut);
var Tt = Bt;
function zt() {
    if (!(this instanceof zt)) return new zt;
    Tt.call(this), this.h = [
        3238371032,
        914150663,
        812702999,
        4144912697,
        4290775857,
        1750603025,
        1694076839,
        3204075428
    ];
}
Bt.blockSize = 512, Bt.outSize = 256, Bt.hmacStrength = 192, Bt.padLength = 64, Bt.prototype._update = function(e, t) {
    for(var r = this.W, i = 0; i < 16; i++)r[i] = e[t + i];
    for(; i < r.length; i++)r[i] = Et(Rt(r[i - 2]), r[i - 7], Dt(r[i - 15]), r[i - 16]);
    var n = this.h[0], a = this.h[1], s = this.h[2], o = this.h[3], c = this.h[4], u = this.h[5], h = this.h[6], d = this.h[7];
    for(et(this.k.length === r.length), i = 0; i < r.length; i++){
        var f = Pt(d, Kt(c), xt(c, u, h), this.k[i], r[i]), l = St(Ct(n), Mt(n, a, s));
        d = h, h = u, u = c, c = St(o, f), o = s, s = a, a = n, n = St(f, l);
    }
    this.h[0] = St(this.h[0], n), this.h[1] = St(this.h[1], a), this.h[2] = St(this.h[2], s), this.h[3] = St(this.h[3], o), this.h[4] = St(this.h[4], c), this.h[5] = St(this.h[5], u), this.h[6] = St(this.h[6], h), this.h[7] = St(this.h[7], d);
}, Bt.prototype._digest = function(e) {
    return "hex" === e ? pt.toHex32(this.h, "big") : pt.split32(this.h, "big");
}, pt.inherits(zt, Tt);
var qt = zt;
zt.blockSize = 512, zt.outSize = 224, zt.hmacStrength = 192, zt.padLength = 64, zt.prototype._digest = function(e) {
    return "hex" === e ? pt.toHex32(this.h.slice(0, 7), "big") : pt.split32(this.h.slice(0, 7), "big");
};
var Ft = pt.rotr64_hi, Ot = pt.rotr64_lo, Nt = pt.shr64_hi, jt = pt.shr64_lo, Lt = pt.sum64, Wt = pt.sum64_hi, Ht = pt.sum64_lo, Gt = pt.sum64_4_hi, Vt = pt.sum64_4_lo, $t = pt.sum64_5_hi, Zt = pt.sum64_5_lo, Yt = mt.BlockHash, Xt = [
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
];
function Qt() {
    if (!(this instanceof Qt)) return new Qt;
    Yt.call(this), this.h = [
        1779033703,
        4089235720,
        3144134277,
        2227873595,
        1013904242,
        4271175723,
        2773480762,
        1595750129,
        1359893119,
        2917565137,
        2600822924,
        725511199,
        528734635,
        4215389547,
        1541459225,
        327033209
    ], this.k = Xt, this.W = Array(160);
}
pt.inherits(Qt, Yt);
var Jt = Qt;
function er(e, t, r, i, n) {
    var a = e & r ^ ~e & n;
    return a < 0 && (a += 4294967296), a;
}
function tr(e, t, r, i, n, a) {
    var s = t & i ^ ~t & a;
    return s < 0 && (s += 4294967296), s;
}
function rr(e, t, r, i, n) {
    var a = e & r ^ e & n ^ r & n;
    return a < 0 && (a += 4294967296), a;
}
function ir(e, t, r, i, n, a) {
    var s = t & i ^ t & a ^ i & a;
    return s < 0 && (s += 4294967296), s;
}
function nr(e, t) {
    var r = Ft(e, t, 28) ^ Ft(t, e, 2) ^ Ft(t, e, 7);
    return r < 0 && (r += 4294967296), r;
}
function ar(e, t) {
    var r = Ot(e, t, 28) ^ Ot(t, e, 2) ^ Ot(t, e, 7);
    return r < 0 && (r += 4294967296), r;
}
function sr(e, t) {
    var r = Ft(e, t, 14) ^ Ft(e, t, 18) ^ Ft(t, e, 9);
    return r < 0 && (r += 4294967296), r;
}
function or(e, t) {
    var r = Ot(e, t, 14) ^ Ot(e, t, 18) ^ Ot(t, e, 9);
    return r < 0 && (r += 4294967296), r;
}
function cr(e, t) {
    var r = Ft(e, t, 1) ^ Ft(e, t, 8) ^ Nt(e, t, 7);
    return r < 0 && (r += 4294967296), r;
}
function ur(e, t) {
    var r = Ot(e, t, 1) ^ Ot(e, t, 8) ^ jt(e, t, 7);
    return r < 0 && (r += 4294967296), r;
}
function hr(e, t) {
    var r = Ft(e, t, 19) ^ Ft(t, e, 29) ^ Nt(e, t, 6);
    return r < 0 && (r += 4294967296), r;
}
function dr(e, t) {
    var r = Ot(e, t, 19) ^ Ot(t, e, 29) ^ jt(e, t, 6);
    return r < 0 && (r += 4294967296), r;
}
function fr() {
    if (!(this instanceof fr)) return new fr;
    Jt.call(this), this.h = [
        3418070365,
        3238371032,
        1654270250,
        914150663,
        2438529370,
        812702999,
        355462360,
        4144912697,
        1731405415,
        4290775857,
        2394180231,
        1750603025,
        3675008525,
        1694076839,
        1203062813,
        3204075428
    ];
}
Qt.blockSize = 1024, Qt.outSize = 512, Qt.hmacStrength = 192, Qt.padLength = 128, Qt.prototype._prepareBlock = function(e, t) {
    for(var r = this.W, i = 0; i < 32; i++)r[i] = e[t + i];
    for(; i < r.length; i += 2){
        var n = hr(r[i - 4], r[i - 3]), a = dr(r[i - 4], r[i - 3]), s = r[i - 14], o = r[i - 13], c = cr(r[i - 30], r[i - 29]), u = ur(r[i - 30], r[i - 29]), h = r[i - 32], d = r[i - 31];
        r[i] = Gt(n, a, s, o, c, u, h, d), r[i + 1] = Vt(n, a, s, o, c, u, h, d);
    }
}, Qt.prototype._update = function(e, t) {
    this._prepareBlock(e, t);
    var r = this.W, i = this.h[0], n = this.h[1], a = this.h[2], s = this.h[3], o = this.h[4], c = this.h[5], u = this.h[6], h = this.h[7], d = this.h[8], f = this.h[9], l = this.h[10], p = this.h[11], y = this.h[12], b = this.h[13], m = this.h[14], g = this.h[15];
    et(this.k.length === r.length);
    for(var w = 0; w < r.length; w += 2){
        var v = m, _ = g, k = sr(d, f), A = or(d, f), S = er(d, f, l, p, y), E = tr(d, f, l, p, y, b), P = this.k[w], x = this.k[w + 1], M = r[w], C = r[w + 1], K = $t(v, _, k, A, S, E, P, x, M, C), D = Zt(v, _, k, A, S, E, P, x, M, C);
        v = nr(i, n), _ = ar(i, n), k = rr(i, n, a, s, o), A = ir(i, n, a, s, o, c);
        var R = Wt(v, _, k, A), U = Ht(v, _, k, A);
        m = y, g = b, y = l, b = p, l = d, p = f, d = Wt(u, h, K, D), f = Ht(h, h, K, D), u = o, h = c, o = a, c = s, a = i, s = n, i = Wt(K, D, R, U), n = Ht(K, D, R, U);
    }
    Lt(this.h, 0, i, n), Lt(this.h, 2, a, s), Lt(this.h, 4, o, c), Lt(this.h, 6, u, h), Lt(this.h, 8, d, f), Lt(this.h, 10, l, p), Lt(this.h, 12, y, b), Lt(this.h, 14, m, g);
}, Qt.prototype._digest = function(e) {
    return "hex" === e ? pt.toHex32(this.h, "big") : pt.split32(this.h, "big");
}, pt.inherits(fr, Jt);
var lr = fr;
fr.blockSize = 1024, fr.outSize = 384, fr.hmacStrength = 192, fr.padLength = 128, fr.prototype._digest = function(e) {
    return "hex" === e ? pt.toHex32(this.h.slice(0, 12), "big") : pt.split32(this.h.slice(0, 12), "big");
};
var pr = pt.rotl32, yr = pt.sum32, br = pt.sum32_3, mr = pt.sum32_4, gr = mt.BlockHash;
function wr() {
    if (!(this instanceof wr)) return new wr;
    gr.call(this), this.h = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
    ], this.endian = "little";
}
pt.inherits(wr, gr);
var vr = wr;
function _r(e, t, r, i) {
    return e <= 15 ? t ^ r ^ i : e <= 31 ? t & r | ~t & i : e <= 47 ? (t | ~r) ^ i : e <= 63 ? t & i | r & ~i : t ^ (r | ~i);
}
function kr(e) {
    return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
}
function Ar(e) {
    return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
}
wr.blockSize = 512, wr.outSize = 160, wr.hmacStrength = 192, wr.padLength = 64, wr.prototype._update = function(e, t) {
    for(var r = this.h[0], i = this.h[1], n = this.h[2], a = this.h[3], s = this.h[4], o = r, c = i, u = n, h = a, d = s, f = 0; f < 80; f++){
        var l = yr(pr(mr(r, _r(f, i, n, a), e[Sr[f] + t], kr(f)), Pr[f]), s);
        r = s, s = a, a = pr(n, 10), n = i, i = l, l = yr(pr(mr(o, _r(79 - f, c, u, h), e[Er[f] + t], Ar(f)), xr[f]), d), o = d, d = h, h = pr(u, 10), u = c, c = l;
    }
    l = br(this.h[1], n, h), this.h[1] = br(this.h[2], a, d), this.h[2] = br(this.h[3], s, o), this.h[3] = br(this.h[4], r, c), this.h[4] = br(this.h[0], i, u), this.h[0] = l;
}, wr.prototype._digest = function(e) {
    return "hex" === e ? pt.toHex32(this.h, "little") : pt.split32(this.h, "little");
};
var Sr = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8,
    3,
    10,
    14,
    4,
    9,
    15,
    8,
    1,
    2,
    7,
    0,
    6,
    13,
    11,
    5,
    12,
    1,
    9,
    11,
    10,
    0,
    8,
    12,
    4,
    13,
    3,
    7,
    15,
    14,
    5,
    6,
    2,
    4,
    0,
    5,
    9,
    7,
    12,
    2,
    10,
    14,
    1,
    3,
    8,
    11,
    6,
    15,
    13
], Er = [
    5,
    14,
    7,
    0,
    9,
    2,
    11,
    4,
    13,
    6,
    15,
    8,
    1,
    10,
    3,
    12,
    6,
    11,
    3,
    7,
    0,
    13,
    5,
    10,
    14,
    15,
    8,
    12,
    4,
    9,
    1,
    2,
    15,
    5,
    1,
    3,
    7,
    14,
    6,
    9,
    11,
    8,
    12,
    2,
    10,
    0,
    4,
    13,
    8,
    6,
    4,
    1,
    3,
    11,
    15,
    0,
    5,
    12,
    2,
    13,
    9,
    7,
    10,
    14,
    12,
    15,
    10,
    4,
    1,
    5,
    8,
    7,
    6,
    2,
    13,
    14,
    0,
    3,
    9,
    11
], Pr = [
    11,
    14,
    15,
    12,
    5,
    8,
    7,
    9,
    11,
    13,
    14,
    15,
    6,
    7,
    9,
    8,
    7,
    6,
    8,
    13,
    11,
    9,
    7,
    15,
    7,
    12,
    15,
    9,
    11,
    7,
    13,
    12,
    11,
    13,
    6,
    7,
    14,
    9,
    13,
    15,
    14,
    8,
    13,
    6,
    5,
    12,
    7,
    5,
    11,
    12,
    14,
    15,
    14,
    15,
    9,
    8,
    9,
    14,
    5,
    6,
    8,
    6,
    5,
    12,
    9,
    15,
    5,
    11,
    6,
    8,
    13,
    12,
    5,
    12,
    13,
    14,
    11,
    8,
    5,
    6
], xr = [
    8,
    9,
    9,
    11,
    13,
    15,
    15,
    5,
    7,
    7,
    8,
    11,
    14,
    14,
    12,
    6,
    9,
    13,
    15,
    7,
    12,
    8,
    9,
    11,
    7,
    7,
    12,
    7,
    6,
    15,
    13,
    11,
    9,
    7,
    15,
    11,
    8,
    6,
    6,
    14,
    12,
    13,
    5,
    14,
    13,
    13,
    7,
    5,
    15,
    5,
    8,
    11,
    14,
    14,
    6,
    14,
    6,
    9,
    12,
    9,
    12,
    5,
    15,
    8,
    8,
    5,
    12,
    9,
    12,
    5,
    14,
    6,
    8,
    13,
    6,
    5,
    15,
    13,
    11,
    11
], Mr = {
    ripemd160: vr
};
function Cr(e, t) {
    let r = e[0], i = e[1], n = e[2], a = e[3];
    r = Dr(r, i, n, a, t[0], 7, -680876936), a = Dr(a, r, i, n, t[1], 12, -389564586), n = Dr(n, a, r, i, t[2], 17, 606105819), i = Dr(i, n, a, r, t[3], 22, -1044525330), r = Dr(r, i, n, a, t[4], 7, -176418897), a = Dr(a, r, i, n, t[5], 12, 1200080426), n = Dr(n, a, r, i, t[6], 17, -1473231341), i = Dr(i, n, a, r, t[7], 22, -45705983), r = Dr(r, i, n, a, t[8], 7, 1770035416), a = Dr(a, r, i, n, t[9], 12, -1958414417), n = Dr(n, a, r, i, t[10], 17, -42063), i = Dr(i, n, a, r, t[11], 22, -1990404162), r = Dr(r, i, n, a, t[12], 7, 1804603682), a = Dr(a, r, i, n, t[13], 12, -40341101), n = Dr(n, a, r, i, t[14], 17, -1502002290), i = Dr(i, n, a, r, t[15], 22, 1236535329), r = Rr(r, i, n, a, t[1], 5, -165796510), a = Rr(a, r, i, n, t[6], 9, -1069501632), n = Rr(n, a, r, i, t[11], 14, 643717713), i = Rr(i, n, a, r, t[0], 20, -373897302), r = Rr(r, i, n, a, t[5], 5, -701558691), a = Rr(a, r, i, n, t[10], 9, 38016083), n = Rr(n, a, r, i, t[15], 14, -660478335), i = Rr(i, n, a, r, t[4], 20, -405537848), r = Rr(r, i, n, a, t[9], 5, 568446438), a = Rr(a, r, i, n, t[14], 9, -1019803690), n = Rr(n, a, r, i, t[3], 14, -187363961), i = Rr(i, n, a, r, t[8], 20, 1163531501), r = Rr(r, i, n, a, t[13], 5, -1444681467), a = Rr(a, r, i, n, t[2], 9, -51403784), n = Rr(n, a, r, i, t[7], 14, 1735328473), i = Rr(i, n, a, r, t[12], 20, -1926607734), r = Ur(r, i, n, a, t[5], 4, -378558), a = Ur(a, r, i, n, t[8], 11, -2022574463), n = Ur(n, a, r, i, t[11], 16, 1839030562), i = Ur(i, n, a, r, t[14], 23, -35309556), r = Ur(r, i, n, a, t[1], 4, -1530992060), a = Ur(a, r, i, n, t[4], 11, 1272893353), n = Ur(n, a, r, i, t[7], 16, -155497632), i = Ur(i, n, a, r, t[10], 23, -1094730640), r = Ur(r, i, n, a, t[13], 4, 681279174), a = Ur(a, r, i, n, t[0], 11, -358537222), n = Ur(n, a, r, i, t[3], 16, -722521979), i = Ur(i, n, a, r, t[6], 23, 76029189), r = Ur(r, i, n, a, t[9], 4, -640364487), a = Ur(a, r, i, n, t[12], 11, -421815835), n = Ur(n, a, r, i, t[15], 16, 530742520), i = Ur(i, n, a, r, t[2], 23, -995338651), r = Ir(r, i, n, a, t[0], 6, -198630844), a = Ir(a, r, i, n, t[7], 10, 1126891415), n = Ir(n, a, r, i, t[14], 15, -1416354905), i = Ir(i, n, a, r, t[5], 21, -57434055), r = Ir(r, i, n, a, t[12], 6, 1700485571), a = Ir(a, r, i, n, t[3], 10, -1894986606), n = Ir(n, a, r, i, t[10], 15, -1051523), i = Ir(i, n, a, r, t[1], 21, -2054922799), r = Ir(r, i, n, a, t[8], 6, 1873313359), a = Ir(a, r, i, n, t[15], 10, -30611744), n = Ir(n, a, r, i, t[6], 15, -1560198380), i = Ir(i, n, a, r, t[13], 21, 1309151649), r = Ir(r, i, n, a, t[4], 6, -145523070), a = Ir(a, r, i, n, t[11], 10, -1120210379), n = Ir(n, a, r, i, t[2], 15, 718787259), i = Ir(i, n, a, r, t[9], 21, -343485551), e[0] = qr(r, e[0]), e[1] = qr(i, e[1]), e[2] = qr(n, e[2]), e[3] = qr(a, e[3]);
}
function Kr(e, t, r, i, n, a) {
    return t = qr(qr(t, e), qr(i, a)), qr(t << n | t >>> 32 - n, r);
}
function Dr(e, t, r, i, n, a, s) {
    return Kr(t & r | ~t & i, e, t, n, a, s);
}
function Rr(e, t, r, i, n, a, s) {
    return Kr(t & i | r & ~i, e, t, n, a, s);
}
function Ur(e, t, r, i, n, a, s) {
    return Kr(t ^ r ^ i, e, t, n, a, s);
}
function Ir(e, t, r, i, n, a, s) {
    return Kr(r ^ (t | ~i), e, t, n, a, s);
}
function Br(e) {
    const t = [];
    let r;
    for(r = 0; r < 64; r += 4)t[r >> 2] = e.charCodeAt(r) + (e.charCodeAt(r + 1) << 8) + (e.charCodeAt(r + 2) << 16) + (e.charCodeAt(r + 3) << 24);
    return t;
}
const Tr = "0123456789abcdef".split("");
function zr(e) {
    let t = "", r = 0;
    for(; r < 4; r++)t += Tr[e >> 8 * r + 4 & 15] + Tr[e >> 8 * r & 15];
    return t;
}
function qr(e, t) {
    return e + t & 4294967295;
}
const Fr = $.getWebCrypto(), Or = $.getNodeCrypto(), Nr = Or && Or.getHashes();
function jr(e) {
    if (Or && Nr.includes(e)) return async function(t) {
        const r = Or.createHash(e);
        return B(t, (e)=>{
            r.update(e);
        }, ()=>new Uint8Array(r.digest()));
    };
}
function Lr(e, t) {
    return async function(r, i = ne) {
        if (s(r) && (r = await j(r)), !$.isStream(r) && Fr && t && r.length >= i.minBytesForWebCrypto) return new Uint8Array(await Fr.digest(t, r));
        const n = e();
        return B(r, (e)=>{
            n.update(e);
        }, ()=>new Uint8Array(n.digest()));
    };
}
function Wr(e, t) {
    return async function(r, i = ne) {
        if (s(r) && (r = await j(r)), $.isStream(r)) {
            const t = new e;
            return B(r, (e)=>{
                t.process(e);
            }, ()=>t.finish().result);
        }
        return Fr && t && r.length >= i.minBytesForWebCrypto ? new Uint8Array(await Fr.digest(t, r)) : e.bytes(r);
    };
}
const Hr = {
    md5: jr("md5") || async function(e) {
        const t = function(e) {
            const t = e.length, r = [
                1732584193,
                -271733879,
                -1732584194,
                271733878
            ];
            let i;
            for(i = 64; i <= e.length; i += 64)Cr(r, Br(e.substring(i - 64, i)));
            e = e.substring(i - 64);
            const n = [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
            for(i = 0; i < e.length; i++)n[i >> 2] |= e.charCodeAt(i) << (i % 4 << 3);
            if (n[i >> 2] |= 128 << (i % 4 << 3), i > 55) for(Cr(r, n), i = 0; i < 16; i++)n[i] = 0;
            return n[14] = 8 * t, Cr(r, n), r;
        }($.uint8ArrayToString(e));
        return $.hexToUint8Array(function(e) {
            for(let t = 0; t < e.length; t++)e[t] = zr(e[t]);
            return e.join("");
        }(t));
    },
    sha1: jr("sha1") || Wr(Ye, "SHA-1"),
    sha224: jr("sha224") || Lr(qt),
    sha256: jr("sha256") || Wr(Je, "SHA-256"),
    sha384: jr("sha384") || Lr(lr, "SHA-384"),
    sha512: jr("sha512") || Lr(Jt, "SHA-512"),
    ripemd: jr("ripemd160") || Lr(vr)
};
var Gr = {
    md5: Hr.md5,
    sha1: Hr.sha1,
    sha224: Hr.sha224,
    sha256: Hr.sha256,
    sha384: Hr.sha384,
    sha512: Hr.sha512,
    ripemd: Hr.ripemd,
    digest: function(e, t) {
        switch(e){
            case ie.hash.md5:
                return this.md5(t);
            case ie.hash.sha1:
                return this.sha1(t);
            case ie.hash.ripemd:
                return this.ripemd(t);
            case ie.hash.sha256:
                return this.sha256(t);
            case ie.hash.sha384:
                return this.sha384(t);
            case ie.hash.sha512:
                return this.sha512(t);
            case ie.hash.sha224:
                return this.sha224(t);
            default:
                throw Error("Invalid hash function.");
        }
    },
    getHashByteLength: function(e) {
        switch(e){
            case ie.hash.md5:
                return 16;
            case ie.hash.sha1:
            case ie.hash.ripemd:
                return 20;
            case ie.hash.sha256:
                return 32;
            case ie.hash.sha384:
                return 48;
            case ie.hash.sha512:
                return 64;
            case ie.hash.sha224:
                return 28;
            default:
                throw Error("Invalid hash algorithm.");
        }
    }
};
class Vr {
    static encrypt(e, t, r) {
        return new Vr(t, r).encrypt(e);
    }
    static decrypt(e, t, r) {
        return new Vr(t, r).decrypt(e);
    }
    constructor(e, t, r){
        this.aes = r || new Ee(e, t, !0, "CFB"), delete this.aes.padding;
    }
    encrypt(e) {
        return we(this.aes.AES_Encrypt_process(e), this.aes.AES_Encrypt_finish());
    }
    decrypt(e) {
        return we(this.aes.AES_Decrypt_process(e), this.aes.AES_Decrypt_finish());
    }
}
function $r(e) {
    const t = ie.read(ie.symmetric, e);
    return He[t];
}
const Zr = $.getWebCrypto(), Yr = $.getNodeCrypto(), Xr = Yr ? Yr.getCiphers() : [], Qr = {
    idea: Xr.includes("idea-cfb") ? "idea-cfb" : void 0,
    tripledes: Xr.includes("des-ede3-cfb") ? "des-ede3-cfb" : void 0,
    cast5: Xr.includes("cast5-cfb") ? "cast5-cfb" : void 0,
    blowfish: Xr.includes("bf-cfb") ? "bf-cfb" : void 0,
    aes128: Xr.includes("aes-128-cfb") ? "aes-128-cfb" : void 0,
    aes192: Xr.includes("aes-192-cfb") ? "aes-192-cfb" : void 0,
    aes256: Xr.includes("aes-256-cfb") ? "aes-256-cfb" : void 0
};
var Jr = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    encrypt: async function(e, t, r, i, n) {
        const a = ie.read(ie.symmetric, e);
        if ($.getNodeCrypto() && Qr[a]) return function(e, t, r, i) {
            const n = ie.read(ie.symmetric, e), a = new Yr.createCipheriv(Qr[n], t, i);
            return B(r, (e)=>new Uint8Array(a.update(e)));
        }(e, t, r, i);
        if ("aes" === a.substr(0, 3)) return function(e, t, r, i, n) {
            if ($.getWebCrypto() && 24 !== t.length && !$.isStream(r) && r.length >= 3e3 * n.minBytesForWebCrypto) return async function(e, t, r, i) {
                const n = "AES-CBC", a = await Zr.importKey("raw", t, {
                    name: n
                }, !1, [
                    "encrypt"
                ]), { blockSize: s } = $r(e), o = $.concatUint8Array([
                    new Uint8Array(s),
                    r
                ]), c = new Uint8Array(await Zr.encrypt({
                    name: n,
                    iv: i
                }, a, o)).subarray(0, r.length);
                return function(e, t) {
                    for(let r = 0; r < e.length; r++)e[r] = e[r] ^ t[r];
                }(c, r), c;
            }(e, t, r, i);
            const a = new Vr(t, i);
            return B(r, (e)=>a.aes.AES_Encrypt_process(e), ()=>a.aes.AES_Encrypt_finish());
        }(e, t, r, i, n);
        const s = new ($r(e))(t), o = s.blockSize, c = i.slice();
        let u = new Uint8Array;
        const h = (e)=>{
            e && (u = $.concatUint8Array([
                u,
                e
            ]));
            const t = new Uint8Array(u.length);
            let r, i = 0;
            for(; e ? u.length >= o : u.length;){
                const e = s.encrypt(c);
                for(r = 0; r < o; r++)c[r] = u[r] ^ e[r], t[i++] = c[r];
                u = u.subarray(o);
            }
            return t.subarray(0, i);
        };
        return B(r, h, h);
    },
    decrypt: async function(e, t, r, i) {
        const n = ie.read(ie.symmetric, e);
        if ($.getNodeCrypto() && Qr[n]) return function(e, t, r, i) {
            const n = ie.read(ie.symmetric, e), a = new Yr.createDecipheriv(Qr[n], t, i);
            return B(r, (e)=>new Uint8Array(a.update(e)));
        }(e, t, r, i);
        if ("aes" === n.substr(0, 3)) return function(e, t, r, i) {
            if ($.isStream(r)) {
                const e = new Vr(t, i);
                return B(r, (t)=>e.aes.AES_Decrypt_process(t), ()=>e.aes.AES_Decrypt_finish());
            }
            return Vr.decrypt(r, t, i);
        }(0, t, r, i);
        const a = new ($r(e))(t), s = a.blockSize;
        let o = i, c = new Uint8Array;
        const u = (e)=>{
            e && (c = $.concatUint8Array([
                c,
                e
            ]));
            const t = new Uint8Array(c.length);
            let r, i = 0;
            for(; e ? c.length >= s : c.length;){
                const e = a.encrypt(o);
                for(o = c, r = 0; r < s; r++)t[i++] = o[r] ^ e[r];
                c = c.subarray(s);
            }
            return t.subarray(0, i);
        };
        return B(r, u, u);
    }
});
class ei {
    static encrypt(e, t, r) {
        return new ei(t, r).encrypt(e);
    }
    static decrypt(e, t, r) {
        return new ei(t, r).encrypt(e);
    }
    constructor(e, t, r){
        this.aes = r || new Ee(e, void 0, !1, "CTR"), delete this.aes.padding, this.AES_CTR_set_options(t);
    }
    encrypt(e) {
        return we(this.aes.AES_Encrypt_process(e), this.aes.AES_Encrypt_finish());
    }
    decrypt(e) {
        return we(this.aes.AES_Encrypt_process(e), this.aes.AES_Encrypt_finish());
    }
    AES_CTR_set_options(e, t, r) {
        let { asm: i } = this.aes.acquire_asm();
        if (void 0 !== r) {
            if (r < 8 || r > 48) throw new _e("illegal counter size");
            let e = Math.pow(2, r) - 1;
            i.set_mask(0, 0, e / 4294967296 | 0, 0 | e);
        } else r = 48, i.set_mask(0, 0, 65535, 4294967295);
        if (void 0 === e) throw Error("nonce is required");
        {
            let t = e.length;
            if (!t || t > 16) throw new _e("illegal nonce size");
            let r = new DataView(new ArrayBuffer(16));
            new Uint8Array(r.buffer).set(e), i.set_nonce(r.getUint32(0), r.getUint32(4), r.getUint32(8), r.getUint32(12));
        }
        if (void 0 !== t) {
            if (t < 0 || t >= Math.pow(2, r)) throw new _e("illegal counter value");
            i.set_counter(0, 0, t / 4294967296 | 0, 0 | t);
        }
    }
}
class ti {
    static encrypt(e, t, r = !0, i) {
        return new ti(t, i, r).encrypt(e);
    }
    static decrypt(e, t, r = !0, i) {
        return new ti(t, i, r).decrypt(e);
    }
    constructor(e, t, r = !0, i){
        this.aes = i || new Ee(e, t, r, "CBC");
    }
    encrypt(e) {
        return we(this.aes.AES_Encrypt_process(e), this.aes.AES_Encrypt_finish());
    }
    decrypt(e) {
        return we(this.aes.AES_Decrypt_process(e), this.aes.AES_Decrypt_finish());
    }
}
const ri = $.getWebCrypto(), ii = $.getNodeCrypto(), ni = 16;
function ai(e, t) {
    const r = e.length - ni;
    for(let i = 0; i < ni; i++)e[i + r] ^= t[i];
    return e;
}
const si = new Uint8Array(ni);
async function oi(e) {
    const t = await async function(e) {
        if ($.getWebCrypto() && 24 !== e.length) return e = await ri.importKey("raw", e, {
            name: "AES-CBC",
            length: 8 * e.length
        }, !1, [
            "encrypt"
        ]), async function(t) {
            const r = await ri.encrypt({
                name: "AES-CBC",
                iv: si,
                length: 8 * ni
            }, e, t);
            return new Uint8Array(r).subarray(0, r.byteLength - ni);
        };
        if ($.getNodeCrypto()) return async function(t) {
            const r = new ii.createCipheriv("aes-" + 8 * e.length + "-cbc", e, si).update(t);
            return new Uint8Array(r);
        };
        return async function(t) {
            return ti.encrypt(t, e, !1, si);
        };
    }(e), r = $.double(await t(si)), i = $.double(r);
    return async function(e) {
        return (await t(function(e, t, r) {
            if (e.length && e.length % ni == 0) return ai(e, t);
            const i = new Uint8Array(e.length + (ni - e.length % ni));
            return i.set(e), i[e.length] = 128, ai(i, r);
        }(e, r, i))).subarray(-ni);
    };
}
const ci = $.getWebCrypto(), ui = $.getNodeCrypto(), hi = $.getNodeBuffer(), di = 16, fi = di, li = di, pi = new Uint8Array(di), yi = new Uint8Array(di);
yi[di - 1] = 1;
const bi = new Uint8Array(di);
async function mi(e) {
    const t = await oi(e);
    return function(e, r) {
        return t($.concatUint8Array([
            e,
            r
        ]));
    };
}
async function gi(e) {
    return $.getWebCrypto() && 24 !== e.length ? (e = await ci.importKey("raw", e, {
        name: "AES-CTR",
        length: 8 * e.length
    }, !1, [
        "encrypt"
    ]), async function(t, r) {
        const i = await ci.encrypt({
            name: "AES-CTR",
            counter: r,
            length: 8 * di
        }, e, t);
        return new Uint8Array(i);
    }) : $.getNodeCrypto() ? async function(t, r) {
        const i = new ui.createCipheriv("aes-" + 8 * e.length + "-ctr", e, r), n = hi.concat([
            i.update(t),
            i.final()
        ]);
        return new Uint8Array(n);
    } : async function(t, r) {
        return ei.encrypt(t, e, r);
    };
}
async function wi(e, t) {
    if (e !== ie.symmetric.aes128 && e !== ie.symmetric.aes192 && e !== ie.symmetric.aes256) throw Error("EAX mode supports only AES cipher");
    const [r, i] = await Promise.all([
        mi(t),
        gi(t)
    ]);
    return {
        encrypt: async function(e, t, n) {
            const [a, s] = await Promise.all([
                r(pi, t),
                r(yi, n)
            ]), o = await i(e, a), c = await r(bi, o);
            for(let e = 0; e < li; e++)c[e] ^= s[e] ^ a[e];
            return $.concatUint8Array([
                o,
                c
            ]);
        },
        decrypt: async function(e, t, n) {
            if (e.length < li) throw Error("Invalid EAX ciphertext");
            const a = e.subarray(0, -li), s = e.subarray(-li), [o, c, u] = await Promise.all([
                r(pi, t),
                r(yi, n),
                r(bi, a)
            ]), h = u;
            for(let e = 0; e < li; e++)h[e] ^= c[e] ^ o[e];
            if (!$.equalsUint8Array(s, h)) throw Error("Authentication tag mismatch");
            return await i(a, o);
        }
    };
}
bi[di - 1] = 2, wi.getNonce = function(e, t) {
    const r = e.slice();
    for(let e = 0; e < t.length; e++)r[8 + e] ^= t[e];
    return r;
}, wi.blockLength = di, wi.ivLength = fi, wi.tagLength = li;
const vi = 16, _i = 15, ki = 16;
function Ai(e) {
    let t = 0;
    for(let r = 1; 0 == (e & r); r <<= 1)t++;
    return t;
}
function Si(e, t) {
    for(let r = 0; r < e.length; r++)e[r] ^= t[r];
    return e;
}
function Ei(e, t) {
    return Si(e.slice(), t);
}
const Pi = new Uint8Array(vi), xi = new Uint8Array([
    1
]);
async function Mi(e, t) {
    let r, i, n, a = 0;
    function s(e, t, i, s) {
        const o = t.length / vi | 0;
        !function(e, t) {
            const r = $.nbits(Math.max(e.length, t.length) / vi | 0) - 1;
            for(let e = a + 1; e <= r; e++)n[e] = $.double(n[e - 1]);
            a = r;
        }(t, s);
        const c = $.concatUint8Array([
            Pi.subarray(0, _i - i.length),
            xi,
            i
        ]), u = 63 & c[vi - 1];
        c[vi - 1] &= 192;
        const h = r(c), d = $.concatUint8Array([
            h,
            Ei(h.subarray(0, 8), h.subarray(1, 9))
        ]), f = $.shiftRight(d.subarray(0 + (u >> 3), 17 + (u >> 3)), 8 - (7 & u)).subarray(1), l = new Uint8Array(vi), p = new Uint8Array(t.length + ki);
        let y, b = 0;
        for(y = 0; y < o; y++)Si(f, n[Ai(y + 1)]), p.set(Si(e(Ei(f, t)), f), b), Si(l, e === r ? t : p.subarray(b)), t = t.subarray(vi), b += vi;
        if (t.length) {
            Si(f, n.x);
            const i = r(f);
            p.set(Ei(t, i), b);
            const a = new Uint8Array(vi);
            a.set(e === r ? t : p.subarray(b, -ki), 0), a[t.length] = 128, Si(l, a), b += t.length;
        }
        const m = Si(r(Si(Si(l, f), n.$)), function(e) {
            if (!e.length) return Pi;
            const t = e.length / vi | 0, i = new Uint8Array(vi), a = new Uint8Array(vi);
            for(let s = 0; s < t; s++)Si(i, n[Ai(s + 1)]), Si(a, r(Ei(i, e))), e = e.subarray(vi);
            if (e.length) {
                Si(i, n.x);
                const t = new Uint8Array(vi);
                t.set(e, 0), t[e.length] = 128, Si(t, i), Si(a, r(t));
            }
            return a;
        }(s));
        return p.set(m, b), p;
    }
    return function(e, t) {
        const a = ie.read(ie.symmetric, e), s = new He[a](t);
        r = s.encrypt.bind(s), i = s.decrypt.bind(s);
        const o = r(Pi), c = $.double(o);
        n = [], n[0] = $.double(c), n.x = o, n.$ = c;
    }(e, t), {
        encrypt: async function(e, t, i) {
            return s(r, e, t, i);
        },
        decrypt: async function(e, t, r) {
            if (e.length < ki) throw Error("Invalid OCB ciphertext");
            const n = e.subarray(-ki);
            e = e.subarray(0, -ki);
            const a = s(i, e, t, r);
            if ($.equalsUint8Array(n, a.subarray(-ki))) return a.subarray(0, -ki);
            throw Error("Authentication tag mismatch");
        }
    };
}
Mi.getNonce = function(e, t) {
    const r = e.slice();
    for(let e = 0; e < t.length; e++)r[7 + e] ^= t[e];
    return r;
}, Mi.blockLength = vi, Mi.ivLength = _i, Mi.tagLength = ki;
const Ci = 68719476704;
class Ki {
    constructor(e, t, r, i = 16, n){
        this.tagSize = i, this.gamma0 = 0, this.counter = 1, this.aes = n || new Ee(e, void 0, !1, "CTR");
        let { asm: a, heap: s } = this.aes.acquire_asm();
        if (a.gcm_init(), this.tagSize < 4 || this.tagSize > 16) throw new _e("illegal tagSize value");
        const o = t.length || 0, c = new Uint8Array(16);
        12 !== o ? (this._gcm_mac_process(t), s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 0, s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 0, s[11] = o >>> 29, s[12] = o >>> 21 & 255, s[13] = o >>> 13 & 255, s[14] = o >>> 5 & 255, s[15] = o << 3 & 255, a.mac(ye.MAC.GCM, ye.HEAP_DATA, 16), a.get_iv(ye.HEAP_DATA), a.set_iv(0, 0, 0, 0), c.set(s.subarray(0, 16))) : (c.set(t), c[15] = 1);
        const u = new DataView(c.buffer);
        if (this.gamma0 = u.getUint32(12), a.set_nonce(u.getUint32(0), u.getUint32(4), u.getUint32(8), 0), a.set_mask(0, 0, 0, 4294967295), void 0 !== r) {
            if (r.length > Ci) throw new _e("illegal adata length");
            r.length ? (this.adata = r, this._gcm_mac_process(r)) : this.adata = void 0;
        } else this.adata = void 0;
        if (this.counter < 1 || this.counter > 4294967295) throw new RangeError("counter must be a positive 32-bit integer");
        a.set_counter(0, 0, 0, this.gamma0 + this.counter | 0);
    }
    static encrypt(e, t, r, i, n) {
        return new Ki(t, r, i, n).encrypt(e);
    }
    static decrypt(e, t, r, i, n) {
        return new Ki(t, r, i, n).decrypt(e);
    }
    encrypt(e) {
        return this.AES_GCM_encrypt(e);
    }
    decrypt(e) {
        return this.AES_GCM_decrypt(e);
    }
    AES_GCM_Encrypt_process(e) {
        let t = 0, r = e.length || 0, { asm: i, heap: n } = this.aes.acquire_asm(), a = this.counter, s = this.aes.pos, o = this.aes.len, c = 0, u = o + r & -16, h = 0;
        if ((a - 1 << 4) + o + r > Ci) throw new RangeError("counter overflow");
        const d = new Uint8Array(u);
        for(; r > 0;)h = ge(n, s + o, e, t, r), o += h, t += h, r -= h, h = i.cipher(ye.ENC.CTR, ye.HEAP_DATA + s, o), h = i.mac(ye.MAC.GCM, ye.HEAP_DATA + s, h), h && d.set(n.subarray(s, s + h), c), a += h >>> 4, c += h, h < o ? (s += h, o -= h) : (s = 0, o = 0);
        return this.counter = a, this.aes.pos = s, this.aes.len = o, d;
    }
    AES_GCM_Encrypt_finish() {
        let { asm: e, heap: t } = this.aes.acquire_asm(), r = this.counter, i = this.tagSize, n = this.adata, a = this.aes.pos, s = this.aes.len;
        const o = new Uint8Array(s + i);
        e.cipher(ye.ENC.CTR, ye.HEAP_DATA + a, s + 15 & -16), s && o.set(t.subarray(a, a + s));
        let c = s;
        for(; 15 & c; c++)t[a + c] = 0;
        e.mac(ye.MAC.GCM, ye.HEAP_DATA + a, c);
        const u = void 0 !== n ? n.length : 0, h = (r - 1 << 4) + s;
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = u >>> 29, t[4] = u >>> 21, t[5] = u >>> 13 & 255, t[6] = u >>> 5 & 255, t[7] = u << 3 & 255, t[8] = t[9] = t[10] = 0, t[11] = h >>> 29, t[12] = h >>> 21 & 255, t[13] = h >>> 13 & 255, t[14] = h >>> 5 & 255, t[15] = h << 3 & 255, e.mac(ye.MAC.GCM, ye.HEAP_DATA, 16), e.get_iv(ye.HEAP_DATA), e.set_counter(0, 0, 0, this.gamma0), e.cipher(ye.ENC.CTR, ye.HEAP_DATA, 16), o.set(t.subarray(0, i), s), this.counter = 1, this.aes.pos = 0, this.aes.len = 0, o;
    }
    AES_GCM_Decrypt_process(e) {
        let t = 0, r = e.length || 0, { asm: i, heap: n } = this.aes.acquire_asm(), a = this.counter, s = this.tagSize, o = this.aes.pos, c = this.aes.len, u = 0, h = c + r > s ? c + r - s & -16 : 0, d = c + r - h, f = 0;
        if ((a - 1 << 4) + c + r > Ci) throw new RangeError("counter overflow");
        const l = new Uint8Array(h);
        for(; r > d;)f = ge(n, o + c, e, t, r - d), c += f, t += f, r -= f, f = i.mac(ye.MAC.GCM, ye.HEAP_DATA + o, f), f = i.cipher(ye.DEC.CTR, ye.HEAP_DATA + o, f), f && l.set(n.subarray(o, o + f), u), a += f >>> 4, u += f, o = 0, c = 0;
        return r > 0 && (c += ge(n, 0, e, t, r)), this.counter = a, this.aes.pos = o, this.aes.len = c, l;
    }
    AES_GCM_Decrypt_finish() {
        let { asm: e, heap: t } = this.aes.acquire_asm(), r = this.tagSize, i = this.adata, n = this.counter, a = this.aes.pos, s = this.aes.len, o = s - r;
        if (s < r) throw new ve("authentication tag not found");
        const c = new Uint8Array(o), u = new Uint8Array(t.subarray(a + o, a + s));
        let h = o;
        for(; 15 & h; h++)t[a + h] = 0;
        e.mac(ye.MAC.GCM, ye.HEAP_DATA + a, h), e.cipher(ye.DEC.CTR, ye.HEAP_DATA + a, h), o && c.set(t.subarray(a, a + o));
        const d = void 0 !== i ? i.length : 0, f = (n - 1 << 4) + s - r;
        t[0] = 0, t[1] = 0, t[2] = 0, t[3] = d >>> 29, t[4] = d >>> 21, t[5] = d >>> 13 & 255, t[6] = d >>> 5 & 255, t[7] = d << 3 & 255, t[8] = t[9] = t[10] = 0, t[11] = f >>> 29, t[12] = f >>> 21 & 255, t[13] = f >>> 13 & 255, t[14] = f >>> 5 & 255, t[15] = f << 3 & 255, e.mac(ye.MAC.GCM, ye.HEAP_DATA, 16), e.get_iv(ye.HEAP_DATA), e.set_counter(0, 0, 0, this.gamma0), e.cipher(ye.ENC.CTR, ye.HEAP_DATA, 16);
        let l = 0;
        for(let e = 0; e < r; ++e)l |= u[e] ^ t[e];
        if (l) throw new ke("data integrity check failed");
        return this.counter = 1, this.aes.pos = 0, this.aes.len = 0, c;
    }
    AES_GCM_decrypt(e) {
        const t = this.AES_GCM_Decrypt_process(e), r = this.AES_GCM_Decrypt_finish(), i = new Uint8Array(t.length + r.length);
        return t.length && i.set(t), r.length && i.set(r, t.length), i;
    }
    AES_GCM_encrypt(e) {
        const t = this.AES_GCM_Encrypt_process(e), r = this.AES_GCM_Encrypt_finish(), i = new Uint8Array(t.length + r.length);
        return t.length && i.set(t), r.length && i.set(r, t.length), i;
    }
    _gcm_mac_process(e) {
        let { asm: t, heap: r } = this.aes.acquire_asm(), i = 0, n = e.length || 0, a = 0;
        for(; n > 0;){
            for(a = ge(r, 0, e, i, n), i += a, n -= a; 15 & a;)r[a++] = 0;
            t.mac(ye.MAC.GCM, ye.HEAP_DATA, a);
        }
    }
}
const Di = $.getWebCrypto(), Ri = $.getNodeCrypto(), Ui = $.getNodeBuffer(), Ii = 16, Bi = "AES-GCM";
async function Ti(e, t) {
    if (e !== ie.symmetric.aes128 && e !== ie.symmetric.aes192 && e !== ie.symmetric.aes256) throw Error("GCM mode supports only AES cipher");
    if ($.getWebCrypto() && 24 !== t.length) {
        const e = await Di.importKey("raw", t, {
            name: Bi
        }, !1, [
            "encrypt",
            "decrypt"
        ]);
        return {
            encrypt: async function(r, i, n = new Uint8Array) {
                if (!r.length) return Ki.encrypt(r, t, i, n);
                const a = await Di.encrypt({
                    name: Bi,
                    iv: i,
                    additionalData: n,
                    tagLength: 8 * Ii
                }, e, r);
                return new Uint8Array(a);
            },
            decrypt: async function(r, i, n = new Uint8Array) {
                if (r.length === Ii) return Ki.decrypt(r, t, i, n);
                const a = await Di.decrypt({
                    name: Bi,
                    iv: i,
                    additionalData: n,
                    tagLength: 8 * Ii
                }, e, r);
                return new Uint8Array(a);
            }
        };
    }
    return $.getNodeCrypto() ? {
        encrypt: async function(e, r, i = new Uint8Array) {
            const n = new Ri.createCipheriv("aes-" + 8 * t.length + "-gcm", t, r);
            n.setAAD(i);
            const a = Ui.concat([
                n.update(e),
                n.final(),
                n.getAuthTag()
            ]);
            return new Uint8Array(a);
        },
        decrypt: async function(e, r, i = new Uint8Array) {
            const n = new Ri.createDecipheriv("aes-" + 8 * t.length + "-gcm", t, r);
            n.setAAD(i), n.setAuthTag(e.slice(e.length - Ii, e.length));
            const a = Ui.concat([
                n.update(e.slice(0, e.length - Ii)),
                n.final()
            ]);
            return new Uint8Array(a);
        }
    } : {
        encrypt: async function(e, r, i) {
            return Ki.encrypt(e, t, r, i);
        },
        decrypt: async function(e, r, i) {
            return Ki.decrypt(e, t, r, i);
        }
    };
}
Ti.getNonce = function(e, t) {
    const r = e.slice();
    for(let e = 0; e < t.length; e++)r[4 + e] ^= t[e];
    return r;
}, Ti.blockLength = 16, Ti.ivLength = 12, Ti.tagLength = Ii;
var zi = {
    cfb: Jr,
    gcm: Ti,
    experimentalGCM: Ti,
    eax: wi,
    ocb: Mi
}, qi = it(function(e) {
    !function(e) {
        var t = function(e) {
            var t, r = new Float64Array(16);
            if (e) for(t = 0; t < e.length; t++)r[t] = e[t];
            return r;
        }, r = function() {
            throw Error("no PRNG");
        }, i = new Uint8Array(32);
        i[0] = 9;
        var n = t(), a = t([
            1
        ]), s = t([
            56129,
            1
        ]), o = t([
            30883,
            4953,
            19914,
            30187,
            55467,
            16705,
            2637,
            112,
            59544,
            30585,
            16505,
            36039,
            65139,
            11119,
            27886,
            20995
        ]), c = t([
            61785,
            9906,
            39828,
            60374,
            45398,
            33411,
            5274,
            224,
            53552,
            61171,
            33010,
            6542,
            64743,
            22239,
            55772,
            9222
        ]), u = t([
            54554,
            36645,
            11616,
            51542,
            42930,
            38181,
            51040,
            26924,
            56412,
            64982,
            57905,
            49316,
            21502,
            52590,
            14035,
            8553
        ]), h = t([
            26200,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214
        ]), d = t([
            41136,
            18958,
            6951,
            50414,
            58488,
            44335,
            6150,
            12099,
            55207,
            15867,
            153,
            11085,
            57099,
            20417,
            9344,
            11139
        ]);
        function f(e, t, r, i) {
            return function(e, t, r, i, n) {
                var a, s = 0;
                for(a = 0; a < n; a++)s |= e[t + a] ^ r[i + a];
                return (1 & s - 1 >>> 8) - 1;
            }(e, t, r, i, 32);
        }
        function l(e, t) {
            var r;
            for(r = 0; r < 16; r++)e[r] = 0 | t[r];
        }
        function p(e) {
            var t, r, i = 1;
            for(t = 0; t < 16; t++)r = e[t] + i + 65535, i = Math.floor(r / 65536), e[t] = r - 65536 * i;
            e[0] += i - 1 + 37 * (i - 1);
        }
        function y(e, t, r) {
            for(var i, n = ~(r - 1), a = 0; a < 16; a++)i = n & (e[a] ^ t[a]), e[a] ^= i, t[a] ^= i;
        }
        function b(e, r) {
            var i, n, a, s = t(), o = t();
            for(i = 0; i < 16; i++)o[i] = r[i];
            for(p(o), p(o), p(o), n = 0; n < 2; n++){
                for(s[0] = o[0] - 65517, i = 1; i < 15; i++)s[i] = o[i] - 65535 - (s[i - 1] >> 16 & 1), s[i - 1] &= 65535;
                s[15] = o[15] - 32767 - (s[14] >> 16 & 1), a = s[15] >> 16 & 1, s[14] &= 65535, y(o, s, 1 - a);
            }
            for(i = 0; i < 16; i++)e[2 * i] = 255 & o[i], e[2 * i + 1] = o[i] >> 8;
        }
        function m(e, t) {
            var r = new Uint8Array(32), i = new Uint8Array(32);
            return b(r, e), b(i, t), f(r, 0, i, 0);
        }
        function g(e) {
            var t = new Uint8Array(32);
            return b(t, e), 1 & t[0];
        }
        function w(e, t) {
            var r;
            for(r = 0; r < 16; r++)e[r] = t[2 * r] + (t[2 * r + 1] << 8);
            e[15] &= 32767;
        }
        function v(e, t, r) {
            for(var i = 0; i < 16; i++)e[i] = t[i] + r[i];
        }
        function _(e, t, r) {
            for(var i = 0; i < 16; i++)e[i] = t[i] - r[i];
        }
        function k(e, t, r) {
            var i, n, a = 0, s = 0, o = 0, c = 0, u = 0, h = 0, d = 0, f = 0, l = 0, p = 0, y = 0, b = 0, m = 0, g = 0, w = 0, v = 0, _ = 0, k = 0, A = 0, S = 0, E = 0, P = 0, x = 0, M = 0, C = 0, K = 0, D = 0, R = 0, U = 0, I = 0, B = 0, T = r[0], z = r[1], q = r[2], F = r[3], O = r[4], N = r[5], j = r[6], L = r[7], W = r[8], H = r[9], G = r[10], V = r[11], $ = r[12], Z = r[13], Y = r[14], X = r[15];
            a += (i = t[0]) * T, s += i * z, o += i * q, c += i * F, u += i * O, h += i * N, d += i * j, f += i * L, l += i * W, p += i * H, y += i * G, b += i * V, m += i * $, g += i * Z, w += i * Y, v += i * X, s += (i = t[1]) * T, o += i * z, c += i * q, u += i * F, h += i * O, d += i * N, f += i * j, l += i * L, p += i * W, y += i * H, b += i * G, m += i * V, g += i * $, w += i * Z, v += i * Y, _ += i * X, o += (i = t[2]) * T, c += i * z, u += i * q, h += i * F, d += i * O, f += i * N, l += i * j, p += i * L, y += i * W, b += i * H, m += i * G, g += i * V, w += i * $, v += i * Z, _ += i * Y, k += i * X, c += (i = t[3]) * T, u += i * z, h += i * q, d += i * F, f += i * O, l += i * N, p += i * j, y += i * L, b += i * W, m += i * H, g += i * G, w += i * V, v += i * $, _ += i * Z, k += i * Y, A += i * X, u += (i = t[4]) * T, h += i * z, d += i * q, f += i * F, l += i * O, p += i * N, y += i * j, b += i * L, m += i * W, g += i * H, w += i * G, v += i * V, _ += i * $, k += i * Z, A += i * Y, S += i * X, h += (i = t[5]) * T, d += i * z, f += i * q, l += i * F, p += i * O, y += i * N, b += i * j, m += i * L, g += i * W, w += i * H, v += i * G, _ += i * V, k += i * $, A += i * Z, S += i * Y, E += i * X, d += (i = t[6]) * T, f += i * z, l += i * q, p += i * F, y += i * O, b += i * N, m += i * j, g += i * L, w += i * W, v += i * H, _ += i * G, k += i * V, A += i * $, S += i * Z, E += i * Y, P += i * X, f += (i = t[7]) * T, l += i * z, p += i * q, y += i * F, b += i * O, m += i * N, g += i * j, w += i * L, v += i * W, _ += i * H, k += i * G, A += i * V, S += i * $, E += i * Z, P += i * Y, x += i * X, l += (i = t[8]) * T, p += i * z, y += i * q, b += i * F, m += i * O, g += i * N, w += i * j, v += i * L, _ += i * W, k += i * H, A += i * G, S += i * V, E += i * $, P += i * Z, x += i * Y, M += i * X, p += (i = t[9]) * T, y += i * z, b += i * q, m += i * F, g += i * O, w += i * N, v += i * j, _ += i * L, k += i * W, A += i * H, S += i * G, E += i * V, P += i * $, x += i * Z, M += i * Y, C += i * X, y += (i = t[10]) * T, b += i * z, m += i * q, g += i * F, w += i * O, v += i * N, _ += i * j, k += i * L, A += i * W, S += i * H, E += i * G, P += i * V, x += i * $, M += i * Z, C += i * Y, K += i * X, b += (i = t[11]) * T, m += i * z, g += i * q, w += i * F, v += i * O, _ += i * N, k += i * j, A += i * L, S += i * W, E += i * H, P += i * G, x += i * V, M += i * $, C += i * Z, K += i * Y, D += i * X, m += (i = t[12]) * T, g += i * z, w += i * q, v += i * F, _ += i * O, k += i * N, A += i * j, S += i * L, E += i * W, P += i * H, x += i * G, M += i * V, C += i * $, K += i * Z, D += i * Y, R += i * X, g += (i = t[13]) * T, w += i * z, v += i * q, _ += i * F, k += i * O, A += i * N, S += i * j, E += i * L, P += i * W, x += i * H, M += i * G, C += i * V, K += i * $, D += i * Z, R += i * Y, U += i * X, w += (i = t[14]) * T, v += i * z, _ += i * q, k += i * F, A += i * O, S += i * N, E += i * j, P += i * L, x += i * W, M += i * H, C += i * G, K += i * V, D += i * $, R += i * Z, U += i * Y, I += i * X, v += (i = t[15]) * T, s += 38 * (k += i * q), o += 38 * (A += i * F), c += 38 * (S += i * O), u += 38 * (E += i * N), h += 38 * (P += i * j), d += 38 * (x += i * L), f += 38 * (M += i * W), l += 38 * (C += i * H), p += 38 * (K += i * G), y += 38 * (D += i * V), b += 38 * (R += i * $), m += 38 * (U += i * Z), g += 38 * (I += i * Y), w += 38 * (B += i * X), a = (i = (a += 38 * (_ += i * z)) + (n = 1) + 65535) - 65536 * (n = Math.floor(i / 65536)), s = (i = s + n + 65535) - 65536 * (n = Math.floor(i / 65536)), o = (i = o + n + 65535) - 65536 * (n = Math.floor(i / 65536)), c = (i = c + n + 65535) - 65536 * (n = Math.floor(i / 65536)), u = (i = u + n + 65535) - 65536 * (n = Math.floor(i / 65536)), h = (i = h + n + 65535) - 65536 * (n = Math.floor(i / 65536)), d = (i = d + n + 65535) - 65536 * (n = Math.floor(i / 65536)), f = (i = f + n + 65535) - 65536 * (n = Math.floor(i / 65536)), l = (i = l + n + 65535) - 65536 * (n = Math.floor(i / 65536)), p = (i = p + n + 65535) - 65536 * (n = Math.floor(i / 65536)), y = (i = y + n + 65535) - 65536 * (n = Math.floor(i / 65536)), b = (i = b + n + 65535) - 65536 * (n = Math.floor(i / 65536)), m = (i = m + n + 65535) - 65536 * (n = Math.floor(i / 65536)), g = (i = g + n + 65535) - 65536 * (n = Math.floor(i / 65536)), w = (i = w + n + 65535) - 65536 * (n = Math.floor(i / 65536)), v = (i = v + n + 65535) - 65536 * (n = Math.floor(i / 65536)), a = (i = (a += n - 1 + 37 * (n - 1)) + (n = 1) + 65535) - 65536 * (n = Math.floor(i / 65536)), s = (i = s + n + 65535) - 65536 * (n = Math.floor(i / 65536)), o = (i = o + n + 65535) - 65536 * (n = Math.floor(i / 65536)), c = (i = c + n + 65535) - 65536 * (n = Math.floor(i / 65536)), u = (i = u + n + 65535) - 65536 * (n = Math.floor(i / 65536)), h = (i = h + n + 65535) - 65536 * (n = Math.floor(i / 65536)), d = (i = d + n + 65535) - 65536 * (n = Math.floor(i / 65536)), f = (i = f + n + 65535) - 65536 * (n = Math.floor(i / 65536)), l = (i = l + n + 65535) - 65536 * (n = Math.floor(i / 65536)), p = (i = p + n + 65535) - 65536 * (n = Math.floor(i / 65536)), y = (i = y + n + 65535) - 65536 * (n = Math.floor(i / 65536)), b = (i = b + n + 65535) - 65536 * (n = Math.floor(i / 65536)), m = (i = m + n + 65535) - 65536 * (n = Math.floor(i / 65536)), g = (i = g + n + 65535) - 65536 * (n = Math.floor(i / 65536)), w = (i = w + n + 65535) - 65536 * (n = Math.floor(i / 65536)), v = (i = v + n + 65535) - 65536 * (n = Math.floor(i / 65536)), a += n - 1 + 37 * (n - 1), e[0] = a, e[1] = s, e[2] = o, e[3] = c, e[4] = u, e[5] = h, e[6] = d, e[7] = f, e[8] = l, e[9] = p, e[10] = y, e[11] = b, e[12] = m, e[13] = g, e[14] = w, e[15] = v;
        }
        function A(e, t) {
            k(e, t, t);
        }
        function S(e, r) {
            var i, n = t();
            for(i = 0; i < 16; i++)n[i] = r[i];
            for(i = 253; i >= 0; i--)A(n, n), 2 !== i && 4 !== i && k(n, n, r);
            for(i = 0; i < 16; i++)e[i] = n[i];
        }
        function E(e, r, i) {
            var n, a, o = new Uint8Array(32), c = new Float64Array(80), u = t(), h = t(), d = t(), f = t(), l = t(), p = t();
            for(a = 0; a < 31; a++)o[a] = r[a];
            for(o[31] = 127 & r[31] | 64, o[0] &= 248, w(c, i), a = 0; a < 16; a++)h[a] = c[a], f[a] = u[a] = d[a] = 0;
            for(u[0] = f[0] = 1, a = 254; a >= 0; --a)y(u, h, n = o[a >>> 3] >>> (7 & a) & 1), y(d, f, n), v(l, u, d), _(u, u, d), v(d, h, f), _(h, h, f), A(f, l), A(p, u), k(u, d, u), k(d, h, l), v(l, u, d), _(u, u, d), A(h, u), _(d, f, p), k(u, d, s), v(u, u, f), k(d, d, u), k(u, f, p), k(f, h, c), A(h, l), y(u, h, n), y(d, f, n);
            for(a = 0; a < 16; a++)c[a + 16] = u[a], c[a + 32] = d[a], c[a + 48] = h[a], c[a + 64] = f[a];
            var m = c.subarray(32), g = c.subarray(16);
            return S(m, m), k(g, g, m), b(e, g), 0;
        }
        function P(e, t) {
            return E(e, t, i);
        }
        function x(e, r) {
            var i = t(), n = t(), a = t(), s = t(), o = t(), u = t(), h = t(), d = t(), f = t();
            _(i, e[1], e[0]), _(f, r[1], r[0]), k(i, i, f), v(n, e[0], e[1]), v(f, r[0], r[1]), k(n, n, f), k(a, e[3], r[3]), k(a, a, c), k(s, e[2], r[2]), v(s, s, s), _(o, n, i), _(u, s, a), v(h, s, a), v(d, n, i), k(e[0], o, u), k(e[1], d, h), k(e[2], h, u), k(e[3], o, d);
        }
        function M(e, t, r) {
            var i;
            for(i = 0; i < 4; i++)y(e[i], t[i], r);
        }
        function C(e, r) {
            var i = t(), n = t(), a = t();
            S(a, r[2]), k(i, r[0], a), k(n, r[1], a), b(e, n), e[31] ^= g(i) << 7;
        }
        function K(e, t, r) {
            var i, s;
            for(l(e[0], n), l(e[1], a), l(e[2], a), l(e[3], n), s = 255; s >= 0; --s)M(e, t, i = r[s / 8 | 0] >> (7 & s) & 1), x(t, e), x(e, e), M(e, t, i);
        }
        function D(e, r) {
            var i = [
                t(),
                t(),
                t(),
                t()
            ];
            l(i[0], u), l(i[1], h), l(i[2], a), k(i[3], u, h), K(e, i, r);
        }
        function R(i, n, a) {
            var s, o, c = [
                t(),
                t(),
                t(),
                t()
            ];
            for(a || r(n, 32), (s = e.hash(n.subarray(0, 32)))[0] &= 248, s[31] &= 127, s[31] |= 64, D(c, s), C(i, c), o = 0; o < 32; o++)n[o + 32] = i[o];
            return 0;
        }
        var U = new Float64Array([
            237,
            211,
            245,
            92,
            26,
            99,
            18,
            88,
            214,
            156,
            247,
            162,
            222,
            249,
            222,
            20,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            16
        ]);
        function I(e, t) {
            var r, i, n, a;
            for(i = 63; i >= 32; --i){
                for(r = 0, n = i - 32, a = i - 12; n < a; ++n)t[n] += r - 16 * t[i] * U[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), t[n] -= 256 * r;
                t[n] += r, t[i] = 0;
            }
            for(r = 0, n = 0; n < 32; n++)t[n] += r - (t[31] >> 4) * U[n], r = t[n] >> 8, t[n] &= 255;
            for(n = 0; n < 32; n++)t[n] -= r * U[n];
            for(i = 0; i < 32; i++)t[i + 1] += t[i] >> 8, e[i] = 255 & t[i];
        }
        function B(e) {
            var t, r = new Float64Array(64);
            for(t = 0; t < 64; t++)r[t] = e[t];
            for(t = 0; t < 64; t++)e[t] = 0;
            I(e, r);
        }
        function T(e, r) {
            var i = t(), s = t(), c = t(), u = t(), h = t(), f = t(), p = t();
            return l(e[2], a), w(e[1], r), A(c, e[1]), k(u, c, o), _(c, c, e[2]), v(u, e[2], u), A(h, u), A(f, h), k(p, f, h), k(i, p, c), k(i, i, u), function(e, r) {
                var i, n = t();
                for(i = 0; i < 16; i++)n[i] = r[i];
                for(i = 250; i >= 0; i--)A(n, n), 1 !== i && k(n, n, r);
                for(i = 0; i < 16; i++)e[i] = n[i];
            }(i, i), k(i, i, c), k(i, i, u), k(i, i, u), k(e[0], i, u), A(s, e[0]), k(s, s, u), m(s, c) && k(e[0], e[0], d), A(s, e[0]), k(s, s, u), m(s, c) ? -1 : (g(e[0]) === r[31] >> 7 && _(e[0], n, e[0]), k(e[3], e[0], e[1]), 0);
        }
        var z = 64;
        function q() {
            for(var e = 0; e < arguments.length; e++)if (!(arguments[e] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array");
        }
        function F(e) {
            for(var t = 0; t < e.length; t++)e[t] = 0;
        }
        e.scalarMult = function(e, t) {
            if (q(e, t), 32 !== e.length) throw Error("bad n size");
            if (32 !== t.length) throw Error("bad p size");
            var r = new Uint8Array(32);
            return E(r, e, t), r;
        }, e.box = {}, e.box.keyPair = function() {
            var e, t, i = new Uint8Array(32), n = new Uint8Array(32);
            return e = i, r(t = n, 32), P(e, t), {
                publicKey: i,
                secretKey: n
            };
        }, e.box.keyPair.fromSecretKey = function(e) {
            if (q(e), 32 !== e.length) throw Error("bad secret key size");
            var t = new Uint8Array(32);
            return P(t, e), {
                publicKey: t,
                secretKey: new Uint8Array(e)
            };
        }, e.sign = function(r, i) {
            if (q(r, i), 64 !== i.length) throw Error("bad secret key size");
            var n = new Uint8Array(z + r.length);
            return function(r, i, n, a) {
                var s, o, c, u, h, d = new Float64Array(64), f = [
                    t(),
                    t(),
                    t(),
                    t()
                ];
                (s = e.hash(a.subarray(0, 32)))[0] &= 248, s[31] &= 127, s[31] |= 64;
                var l = n + 64;
                for(u = 0; u < n; u++)r[64 + u] = i[u];
                for(u = 0; u < 32; u++)r[32 + u] = s[32 + u];
                for(B(c = e.hash(r.subarray(32, l))), D(f, c), C(r, f), u = 32; u < 64; u++)r[u] = a[u];
                for(B(o = e.hash(r.subarray(0, l))), u = 0; u < 64; u++)d[u] = 0;
                for(u = 0; u < 32; u++)d[u] = c[u];
                for(u = 0; u < 32; u++)for(h = 0; h < 32; h++)d[u + h] += o[u] * s[h];
                I(r.subarray(32), d);
            }(n, r, r.length, i), n;
        }, e.sign.detached = function(t, r) {
            for(var i = e.sign(t, r), n = new Uint8Array(z), a = 0; a < n.length; a++)n[a] = i[a];
            return n;
        }, e.sign.detached.verify = function(r, i, n) {
            if (q(r, i, n), i.length !== z) throw Error("bad signature size");
            if (32 !== n.length) throw Error("bad public key size");
            var a, s = new Uint8Array(z + r.length), o = new Uint8Array(z + r.length);
            for(a = 0; a < z; a++)s[a] = i[a];
            for(a = 0; a < r.length; a++)s[a + z] = r[a];
            return function(r, i, n, a) {
                var s, o, c = new Uint8Array(32), u = [
                    t(),
                    t(),
                    t(),
                    t()
                ], h = [
                    t(),
                    t(),
                    t(),
                    t()
                ];
                if (n < 64) return -1;
                if (T(h, a)) return -1;
                for(s = 0; s < n; s++)r[s] = i[s];
                for(s = 0; s < 32; s++)r[s + 32] = a[s];
                if (B(o = e.hash(r.subarray(0, n))), K(u, h, o), D(h, i.subarray(32)), x(u, h), C(c, u), n -= 64, f(i, 0, c, 0)) {
                    for(s = 0; s < n; s++)r[s] = 0;
                    return -1;
                }
                for(s = 0; s < n; s++)r[s] = i[s + 64];
                return n;
            }(o, s, s.length, n) >= 0;
        }, e.sign.keyPair = function() {
            var e = new Uint8Array(32), t = new Uint8Array(64);
            return R(e, t), {
                publicKey: e,
                secretKey: t
            };
        }, e.sign.keyPair.fromSecretKey = function(e) {
            if (q(e), 64 !== e.length) throw Error("bad secret key size");
            for(var t = new Uint8Array(32), r = 0; r < t.length; r++)t[r] = e[32 + r];
            return {
                publicKey: t,
                secretKey: new Uint8Array(e)
            };
        }, e.sign.keyPair.fromSeed = function(e) {
            if (q(e), 32 !== e.length) throw Error("bad seed size");
            for(var t = new Uint8Array(32), r = new Uint8Array(64), i = 0; i < 32; i++)r[i] = e[i];
            return R(t, r, !0), {
                publicKey: t,
                secretKey: r
            };
        }, e.setPRNG = function(e) {
            r = e;
        }, function() {
            var t = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
            if (t && t.getRandomValues) e.setPRNG(function(e, r) {
                var i, n = new Uint8Array(r);
                for(i = 0; i < r; i += 65536)t.getRandomValues(n.subarray(i, i + Math.min(r - i, 65536)));
                for(i = 0; i < r; i++)e[i] = n[i];
                F(n);
            });
            else void 0 !== nt && (t = void 0);
        }();
    }(e.exports ? e.exports : self.nacl = self.nacl || {});
});
const Fi = $.getNodeCrypto();
function Oi(e) {
    const t = new Uint8Array(e);
    if ("undefined" != typeof crypto && crypto.getRandomValues) crypto.getRandomValues(t);
    else {
        if (!Fi) throw Error("No secure random number generator available.");
        {
            const e = Fi.randomBytes(t.length);
            t.set(e);
        }
    }
    return t;
}
async function Ni(e, t) {
    const r = await $.getBigInteger();
    if (t.lt(e)) throw Error("Illegal parameter value: max <= min");
    const i = t.sub(e), n = i.byteLength();
    return new r(await Oi(n + 8)).mod(i).add(e);
}
var ji = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    getRandomBytes: Oi,
    getRandomBigInteger: Ni
});
async function Li(e, t, r) {
    const i = await $.getBigInteger(), n = new i(1), a = n.leftShift(new i(e - 1)), s = new i(30), o = [
        1,
        6,
        5,
        4,
        3,
        2,
        1,
        4,
        3,
        2,
        1,
        2,
        1,
        4,
        3,
        2,
        1,
        2,
        1,
        4,
        3,
        2,
        1,
        6,
        5,
        4,
        3,
        2,
        1,
        2
    ], c = await Ni(a, a.leftShift(n));
    let u = c.mod(s).toNumber();
    do c.iadd(new i(o[u])), u = (u + o[u]) % o.length, c.bitLength() > e && (c.imod(a.leftShift(n)).iadd(a), u = c.mod(s).toNumber());
    while (!await Wi(c, t, r));
    return c;
}
async function Wi(e, t, r) {
    return !(t && !e.dec().gcd(t).isOne()) && !!await async function(e) {
        const t = await $.getBigInteger();
        return Hi.every((r)=>0 !== e.mod(new t(r)));
    }(e) && !!await async function(e, t) {
        const r = await $.getBigInteger();
        return t = t || new r(2), t.modExp(e.dec(), e).isOne();
    }(e) && !!await async function(e, t, r) {
        const i = await $.getBigInteger(), n = e.bitLength();
        t || (t = Math.max(1, n / 48 | 0));
        const a = e.dec();
        let s = 0;
        for(; !a.getBit(s);)s++;
        const o = e.rightShift(new i(s));
        for(; t > 0; t--){
            let t, n = (r ? r() : await Ni(new i(2), a)).modExp(o, e);
            if (!n.isOne() && !n.equal(a)) {
                for(t = 1; t < s; t++){
                    if (n = n.mul(n).mod(e), n.isOne()) return !1;
                    if (n.equal(a)) break;
                }
                if (t === s) return !1;
            }
        }
        return !0;
    }(e, r);
}
const Hi = [
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199,
    211,
    223,
    227,
    229,
    233,
    239,
    241,
    251,
    257,
    263,
    269,
    271,
    277,
    281,
    283,
    293,
    307,
    311,
    313,
    317,
    331,
    337,
    347,
    349,
    353,
    359,
    367,
    373,
    379,
    383,
    389,
    397,
    401,
    409,
    419,
    421,
    431,
    433,
    439,
    443,
    449,
    457,
    461,
    463,
    467,
    479,
    487,
    491,
    499,
    503,
    509,
    521,
    523,
    541,
    547,
    557,
    563,
    569,
    571,
    577,
    587,
    593,
    599,
    601,
    607,
    613,
    617,
    619,
    631,
    641,
    643,
    647,
    653,
    659,
    661,
    673,
    677,
    683,
    691,
    701,
    709,
    719,
    727,
    733,
    739,
    743,
    751,
    757,
    761,
    769,
    773,
    787,
    797,
    809,
    811,
    821,
    823,
    827,
    829,
    839,
    853,
    857,
    859,
    863,
    877,
    881,
    883,
    887,
    907,
    911,
    919,
    929,
    937,
    941,
    947,
    953,
    967,
    971,
    977,
    983,
    991,
    997,
    1009,
    1013,
    1019,
    1021,
    1031,
    1033,
    1039,
    1049,
    1051,
    1061,
    1063,
    1069,
    1087,
    1091,
    1093,
    1097,
    1103,
    1109,
    1117,
    1123,
    1129,
    1151,
    1153,
    1163,
    1171,
    1181,
    1187,
    1193,
    1201,
    1213,
    1217,
    1223,
    1229,
    1231,
    1237,
    1249,
    1259,
    1277,
    1279,
    1283,
    1289,
    1291,
    1297,
    1301,
    1303,
    1307,
    1319,
    1321,
    1327,
    1361,
    1367,
    1373,
    1381,
    1399,
    1409,
    1423,
    1427,
    1429,
    1433,
    1439,
    1447,
    1451,
    1453,
    1459,
    1471,
    1481,
    1483,
    1487,
    1489,
    1493,
    1499,
    1511,
    1523,
    1531,
    1543,
    1549,
    1553,
    1559,
    1567,
    1571,
    1579,
    1583,
    1597,
    1601,
    1607,
    1609,
    1613,
    1619,
    1621,
    1627,
    1637,
    1657,
    1663,
    1667,
    1669,
    1693,
    1697,
    1699,
    1709,
    1721,
    1723,
    1733,
    1741,
    1747,
    1753,
    1759,
    1777,
    1783,
    1787,
    1789,
    1801,
    1811,
    1823,
    1831,
    1847,
    1861,
    1867,
    1871,
    1873,
    1877,
    1879,
    1889,
    1901,
    1907,
    1913,
    1931,
    1933,
    1949,
    1951,
    1973,
    1979,
    1987,
    1993,
    1997,
    1999,
    2003,
    2011,
    2017,
    2027,
    2029,
    2039,
    2053,
    2063,
    2069,
    2081,
    2083,
    2087,
    2089,
    2099,
    2111,
    2113,
    2129,
    2131,
    2137,
    2141,
    2143,
    2153,
    2161,
    2179,
    2203,
    2207,
    2213,
    2221,
    2237,
    2239,
    2243,
    2251,
    2267,
    2269,
    2273,
    2281,
    2287,
    2293,
    2297,
    2309,
    2311,
    2333,
    2339,
    2341,
    2347,
    2351,
    2357,
    2371,
    2377,
    2381,
    2383,
    2389,
    2393,
    2399,
    2411,
    2417,
    2423,
    2437,
    2441,
    2447,
    2459,
    2467,
    2473,
    2477,
    2503,
    2521,
    2531,
    2539,
    2543,
    2549,
    2551,
    2557,
    2579,
    2591,
    2593,
    2609,
    2617,
    2621,
    2633,
    2647,
    2657,
    2659,
    2663,
    2671,
    2677,
    2683,
    2687,
    2689,
    2693,
    2699,
    2707,
    2711,
    2713,
    2719,
    2729,
    2731,
    2741,
    2749,
    2753,
    2767,
    2777,
    2789,
    2791,
    2797,
    2801,
    2803,
    2819,
    2833,
    2837,
    2843,
    2851,
    2857,
    2861,
    2879,
    2887,
    2897,
    2903,
    2909,
    2917,
    2927,
    2939,
    2953,
    2957,
    2963,
    2969,
    2971,
    2999,
    3001,
    3011,
    3019,
    3023,
    3037,
    3041,
    3049,
    3061,
    3067,
    3079,
    3083,
    3089,
    3109,
    3119,
    3121,
    3137,
    3163,
    3167,
    3169,
    3181,
    3187,
    3191,
    3203,
    3209,
    3217,
    3221,
    3229,
    3251,
    3253,
    3257,
    3259,
    3271,
    3299,
    3301,
    3307,
    3313,
    3319,
    3323,
    3329,
    3331,
    3343,
    3347,
    3359,
    3361,
    3371,
    3373,
    3389,
    3391,
    3407,
    3413,
    3433,
    3449,
    3457,
    3461,
    3463,
    3467,
    3469,
    3491,
    3499,
    3511,
    3517,
    3527,
    3529,
    3533,
    3539,
    3541,
    3547,
    3557,
    3559,
    3571,
    3581,
    3583,
    3593,
    3607,
    3613,
    3617,
    3623,
    3631,
    3637,
    3643,
    3659,
    3671,
    3673,
    3677,
    3691,
    3697,
    3701,
    3709,
    3719,
    3727,
    3733,
    3739,
    3761,
    3767,
    3769,
    3779,
    3793,
    3797,
    3803,
    3821,
    3823,
    3833,
    3847,
    3851,
    3853,
    3863,
    3877,
    3881,
    3889,
    3907,
    3911,
    3917,
    3919,
    3923,
    3929,
    3931,
    3943,
    3947,
    3967,
    3989,
    4001,
    4003,
    4007,
    4013,
    4019,
    4021,
    4027,
    4049,
    4051,
    4057,
    4073,
    4079,
    4091,
    4093,
    4099,
    4111,
    4127,
    4129,
    4133,
    4139,
    4153,
    4157,
    4159,
    4177,
    4201,
    4211,
    4217,
    4219,
    4229,
    4231,
    4241,
    4243,
    4253,
    4259,
    4261,
    4271,
    4273,
    4283,
    4289,
    4297,
    4327,
    4337,
    4339,
    4349,
    4357,
    4363,
    4373,
    4391,
    4397,
    4409,
    4421,
    4423,
    4441,
    4447,
    4451,
    4457,
    4463,
    4481,
    4483,
    4493,
    4507,
    4513,
    4517,
    4519,
    4523,
    4547,
    4549,
    4561,
    4567,
    4583,
    4591,
    4597,
    4603,
    4621,
    4637,
    4639,
    4643,
    4649,
    4651,
    4657,
    4663,
    4673,
    4679,
    4691,
    4703,
    4721,
    4723,
    4729,
    4733,
    4751,
    4759,
    4783,
    4787,
    4789,
    4793,
    4799,
    4801,
    4813,
    4817,
    4831,
    4861,
    4871,
    4877,
    4889,
    4903,
    4909,
    4919,
    4931,
    4933,
    4937,
    4943,
    4951,
    4957,
    4967,
    4969,
    4973,
    4987,
    4993,
    4999
];
const Gi = [];
function Vi(e, t) {
    const r = e.length;
    if (r > t - 11) throw Error("Message too long");
    const i = function(e) {
        const t = new Uint8Array(e);
        let r = 0;
        for(; r < e;){
            const i = Oi(e - r);
            for(let e = 0; e < i.length; e++)0 !== i[e] && (t[r++] = i[e]);
        }
        return t;
    }(t - r - 3), n = new Uint8Array(t);
    return n[1] = 2, n.set(i, 2), n.set(e, t - r), n;
}
function $i(e, t) {
    let r = 2, i = 1;
    for(let t = r; t < e.length; t++)i &= 0 !== e[t], r += i;
    const n = r - 2, a = e.subarray(r + 1), s = 0 === e[0] & 2 === e[1] & n >= 8 & !i;
    if (t) return $.selectUint8Array(s, a, t);
    if (s) return a;
    throw Error("Decryption error");
}
async function Zi(e, t, r) {
    let i;
    if (t.length !== Gr.getHashByteLength(e)) throw Error("Invalid hash length");
    const n = new Uint8Array(Gi[e].length);
    for(i = 0; i < Gi[e].length; i++)n[i] = Gi[e][i];
    const a = n.length + t.length;
    if (r < a + 11) throw Error("Intended encoded message length too short");
    const s = new Uint8Array(r - a - 3).fill(255), o = new Uint8Array(r);
    return o[1] = 1, o.set(s, 2), o.set(n, r - a), o.set(t, r - t.length), o;
}
Gi[1] = [
    48,
    32,
    48,
    12,
    6,
    8,
    42,
    134,
    72,
    134,
    247,
    13,
    2,
    5,
    5,
    0,
    4,
    16
], Gi[2] = [
    48,
    33,
    48,
    9,
    6,
    5,
    43,
    14,
    3,
    2,
    26,
    5,
    0,
    4,
    20
], Gi[3] = [
    48,
    33,
    48,
    9,
    6,
    5,
    43,
    36,
    3,
    2,
    1,
    5,
    0,
    4,
    20
], Gi[8] = [
    48,
    49,
    48,
    13,
    6,
    9,
    96,
    134,
    72,
    1,
    101,
    3,
    4,
    2,
    1,
    5,
    0,
    4,
    32
], Gi[9] = [
    48,
    65,
    48,
    13,
    6,
    9,
    96,
    134,
    72,
    1,
    101,
    3,
    4,
    2,
    2,
    5,
    0,
    4,
    48
], Gi[10] = [
    48,
    81,
    48,
    13,
    6,
    9,
    96,
    134,
    72,
    1,
    101,
    3,
    4,
    2,
    3,
    5,
    0,
    4,
    64
], Gi[11] = [
    48,
    45,
    48,
    13,
    6,
    9,
    96,
    134,
    72,
    1,
    101,
    3,
    4,
    2,
    4,
    5,
    0,
    4,
    28
];
var Yi = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    emeEncode: Vi,
    emeDecode: $i,
    emsaEncode: Zi
});
const Xi = $.getWebCrypto(), Qi = $.getNodeCrypto(), Ji = void 0, en = Qi ? Ji.define("RSAPrivateKey", function() {
    this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int());
}) : void 0, tn = Qi ? Ji.define("RSAPubliceKey", function() {
    this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int());
}) : void 0;
var rn = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    sign: async function(e, t, r, i, n, a, s, o, c) {
        if (t && !$.isStream(t)) {
            if ($.getWebCrypto()) try {
                return await async function(e, t, r, i, n, a, s, o) {
                    const c = await async function(e, t, r, i, n, a) {
                        const s = await $.getBigInteger(), o = new s(i), c = new s(n), u = new s(r);
                        let h = u.mod(c.dec()), d = u.mod(o.dec());
                        return d = d.toUint8Array(), h = h.toUint8Array(), {
                            kty: "RSA",
                            n: te(e, !0),
                            e: te(t, !0),
                            d: te(r, !0),
                            p: te(n, !0),
                            q: te(i, !0),
                            dp: te(h, !0),
                            dq: te(d, !0),
                            qi: te(a, !0),
                            ext: !0
                        };
                    }(r, i, n, a, s, o), u = {
                        name: "RSASSA-PKCS1-v1_5",
                        hash: {
                            name: e
                        }
                    }, h = await Xi.importKey("jwk", c, u, !1, [
                        "sign"
                    ]);
                    return new Uint8Array(await Xi.sign("RSASSA-PKCS1-v1_5", h, t));
                }(ie.read(ie.webHash, e), t, r, i, n, a, s, o);
            } catch (e) {
                $.printDebugError(e);
            }
            else if ($.getNodeCrypto()) return async function(e, t, r, i, n, a, s, o) {
                const { default: c } = await Promise.resolve().then(function() {
                    return Yp;
                }), u = new c(a), h = new c(s), d = new c(n), f = d.mod(h.subn(1)), l = d.mod(u.subn(1)), p = Qi.createSign(ie.read(ie.hash, e));
                p.write(t), p.end();
                const y = {
                    version: 0,
                    modulus: new c(r),
                    publicExponent: new c(i),
                    privateExponent: new c(n),
                    prime1: new c(s),
                    prime2: new c(a),
                    exponent1: f,
                    exponent2: l,
                    coefficient: new c(o)
                };
                if (void 0 !== Qi.createPrivateKey) {
                    const e = en.encode(y, "der");
                    return new Uint8Array(p.sign({
                        key: e,
                        format: "der",
                        type: "pkcs1"
                    }));
                }
                const b = en.encode(y, "pem", {
                    label: "RSA PRIVATE KEY"
                });
                return new Uint8Array(p.sign(b));
            }(e, t, r, i, n, a, s, o);
        }
        return async function(e, t, r, i) {
            const n = await $.getBigInteger();
            t = new n(t);
            const a = new n(await Zi(e, i, t.byteLength()));
            if (r = new n(r), a.gte(t)) throw Error("Message size cannot exceed modulus size");
            return a.modExp(r, t).toUint8Array("be", t.byteLength());
        }(e, r, n, c);
    },
    verify: async function(e, t, r, i, n, a) {
        if (t && !$.isStream(t)) {
            if ($.getWebCrypto()) try {
                return await async function(e, t, r, i, n) {
                    const a = function(e, t) {
                        return {
                            kty: "RSA",
                            n: te(e, !0),
                            e: te(t, !0),
                            ext: !0
                        };
                    }(i, n), s = await Xi.importKey("jwk", a, {
                        name: "RSASSA-PKCS1-v1_5",
                        hash: {
                            name: e
                        }
                    }, !1, [
                        "verify"
                    ]);
                    return Xi.verify("RSASSA-PKCS1-v1_5", s, r, t);
                }(ie.read(ie.webHash, e), t, r, i, n);
            } catch (e) {
                $.printDebugError(e);
            }
            else if ($.getNodeCrypto()) return async function(e, t, r, i, n) {
                const { default: a } = await Promise.resolve().then(function() {
                    return Yp;
                }), s = Qi.createVerify(ie.read(ie.hash, e));
                s.write(t), s.end();
                const o = {
                    modulus: new a(i),
                    publicExponent: new a(n)
                };
                let c;
                if (void 0 !== Qi.createPrivateKey) c = {
                    key: tn.encode(o, "der"),
                    format: "der",
                    type: "pkcs1"
                };
                else c = tn.encode(o, "pem", {
                    label: "RSA PUBLIC KEY"
                });
                try {
                    return await s.verify(c, r);
                } catch (e) {
                    return !1;
                }
            }(e, t, r, i, n);
        }
        return async function(e, t, r, i, n) {
            const a = await $.getBigInteger();
            if (r = new a(r), t = new a(t), i = new a(i), t.gte(r)) throw Error("Signature size cannot exceed modulus size");
            const s = t.modExp(i, r).toUint8Array("be", r.byteLength()), o = await Zi(e, n, r.byteLength());
            return $.equalsUint8Array(s, o);
        }(e, r, i, n, a);
    },
    encrypt: async function(e, t, r) {
        return $.getNodeCrypto() ? async function(e, t, r) {
            const { default: i } = await Promise.resolve().then(function() {
                return Yp;
            }), n = {
                modulus: new i(t),
                publicExponent: new i(r)
            };
            let a;
            if (void 0 !== Qi.createPrivateKey) a = {
                key: tn.encode(n, "der"),
                format: "der",
                type: "pkcs1",
                padding: Qi.constants.RSA_PKCS1_PADDING
            };
            else a = {
                key: tn.encode(n, "pem", {
                    label: "RSA PUBLIC KEY"
                }),
                padding: Qi.constants.RSA_PKCS1_PADDING
            };
            return new Uint8Array(Qi.publicEncrypt(a, e));
        }(e, t, r) : async function(e, t, r) {
            const i = await $.getBigInteger();
            if (t = new i(t), e = new i(Vi(e, t.byteLength())), r = new i(r), e.gte(t)) throw Error("Message size cannot exceed modulus size");
            return e.modExp(r, t).toUint8Array("be", t.byteLength());
        }(e, t, r);
    },
    decrypt: async function(e, t, r, i, n, a, s, o) {
        return $.getNodeCrypto() ? async function(e, t, r, i, n, a, s, o) {
            const { default: c } = await Promise.resolve().then(function() {
                return Yp;
            }), u = new c(n), h = new c(a), d = new c(i), f = d.mod(h.subn(1)), l = d.mod(u.subn(1)), p = {
                version: 0,
                modulus: new c(t),
                publicExponent: new c(r),
                privateExponent: new c(i),
                prime1: new c(a),
                prime2: new c(n),
                exponent1: f,
                exponent2: l,
                coefficient: new c(s)
            };
            let y;
            if (void 0 !== Qi.createPrivateKey) y = {
                key: en.encode(p, "der"),
                format: "der",
                type: "pkcs1",
                padding: Qi.constants.RSA_PKCS1_PADDING
            };
            else y = {
                key: en.encode(p, "pem", {
                    label: "RSA PRIVATE KEY"
                }),
                padding: Qi.constants.RSA_PKCS1_PADDING
            };
            try {
                return new Uint8Array(Qi.privateDecrypt(y, e));
            } catch (e) {
                if (o) return o;
                throw Error("Decryption error");
            }
        }(e, t, r, i, n, a, s, o) : async function(e, t, r, i, n, a, s, o) {
            const c = await $.getBigInteger();
            if (e = new c(e), t = new c(t), r = new c(r), i = new c(i), n = new c(n), a = new c(a), s = new c(s), e.gte(t)) throw Error("Data too large.");
            const u = i.mod(a.dec()), h = i.mod(n.dec()), d = (await Ni(new c(2), t)).mod(t), f = d.modInv(t).modExp(r, t);
            e = e.mul(f).mod(t);
            const l = e.modExp(h, n), p = e.modExp(u, a), y = s.mul(p.sub(l)).mod(a);
            let b = y.mul(n).add(l);
            return b = b.mul(d).mod(t), $i(b.toUint8Array("be", t.byteLength()), o);
        }(e, t, r, i, n, a, s, o);
    },
    generate: async function(e, t) {
        if (t = new (await $.getBigInteger())(t), $.getWebCrypto()) {
            const r = {
                name: "RSASSA-PKCS1-v1_5",
                modulusLength: e,
                publicExponent: t.toUint8Array(),
                hash: {
                    name: "SHA-1"
                }
            }, i = await Xi.generateKey(r, !0, [
                "sign",
                "verify"
            ]), n = await Xi.exportKey("jwk", i.privateKey);
            return {
                n: ee(n.n),
                e: t.toUint8Array(),
                d: ee(n.d),
                p: ee(n.q),
                q: ee(n.p),
                u: ee(n.qi)
            };
        }
        if ($.getNodeCrypto() && Qi.generateKeyPair && en) {
            const r = {
                modulusLength: e,
                publicExponent: t.toNumber(),
                publicKeyEncoding: {
                    type: "pkcs1",
                    format: "der"
                },
                privateKeyEncoding: {
                    type: "pkcs1",
                    format: "der"
                }
            }, i = await new Promise((e, t)=>{
                Qi.generateKeyPair("rsa", r, (r, i, n)=>{
                    r ? t(r) : e(en.decode(n, "der"));
                });
            });
            return {
                n: i.modulus.toArrayLike(Uint8Array),
                e: i.publicExponent.toArrayLike(Uint8Array),
                d: i.privateExponent.toArrayLike(Uint8Array),
                p: i.prime2.toArrayLike(Uint8Array),
                q: i.prime1.toArrayLike(Uint8Array),
                u: i.coefficient.toArrayLike(Uint8Array)
            };
        }
        let r, i, n;
        do i = await Li(e - (e >> 1), t, 40), r = await Li(e >> 1, t, 40), n = r.mul(i);
        while (n.bitLength() !== e);
        const a = r.dec().imul(i.dec());
        return i.lt(r) && ([r, i] = [
            i,
            r
        ]), {
            n: n.toUint8Array(),
            e: t.toUint8Array(),
            d: t.modInv(a).toUint8Array(),
            p: r.toUint8Array(),
            q: i.toUint8Array(),
            u: r.modInv(i).toUint8Array()
        };
    },
    validateParams: async function(e, t, r, i, n, a) {
        const s = await $.getBigInteger();
        if (e = new s(e), i = new s(i), n = new s(n), !i.mul(n).equal(e)) return !1;
        const o = new s(2);
        if (a = new s(a), !i.mul(a).mod(n).isOne()) return !1;
        t = new s(t), r = new s(r);
        const c = new s(Math.floor(e.bitLength() / 3)), u = await Ni(o, o.leftShift(c)), h = u.mul(r).mul(t);
        return !(!h.mod(i.dec()).equal(u) || !h.mod(n.dec()).equal(u));
    }
});
var nn = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    encrypt: async function(e, t, r, i) {
        const n = await $.getBigInteger();
        t = new n(t), r = new n(r), i = new n(i);
        const a = new n(Vi(e, t.byteLength())), s = await Ni(new n(1), t.dec());
        return {
            c1: r.modExp(s, t).toUint8Array(),
            c2: i.modExp(s, t).imul(a).imod(t).toUint8Array()
        };
    },
    decrypt: async function(e, t, r, i, n) {
        const a = await $.getBigInteger();
        return e = new a(e), t = new a(t), r = new a(r), i = new a(i), $i(e.modExp(i, r).modInv(r).imul(t).imod(r).toUint8Array("be", r.byteLength()), n);
    },
    validateParams: async function(e, t, r, i) {
        const n = await $.getBigInteger();
        e = new n(e), t = new n(t), r = new n(r);
        const a = new n(1);
        if (t.lte(a) || t.gte(e)) return !1;
        const s = new n(e.bitLength()), o = new n(1023);
        if (s.lt(o)) return !1;
        if (!t.modExp(e.dec(), e).isOne()) return !1;
        let c = t;
        const u = new n(1), h = new n(2).leftShift(new n(17));
        for(; u.lt(h);){
            if (c = c.mul(t).imod(e), c.isOne()) return !1;
            u.iinc();
        }
        i = new n(i);
        const d = new n(2), f = await Ni(d.leftShift(s.dec()), d.leftShift(s)), l = e.dec().imul(f).iadd(i);
        return !!r.equal(t.modExp(l, e));
    }
});
class an {
    constructor(e){
        if (e instanceof an) this.oid = e.oid;
        else if ($.isArray(e) || $.isUint8Array(e)) {
            if (6 === (e = new Uint8Array(e))[0]) {
                if (e[1] !== e.length - 2) throw Error("Length mismatch in DER encoded oid");
                e = e.subarray(2);
            }
            this.oid = e;
        } else this.oid = "";
    }
    read(e) {
        if (e.length >= 1) {
            const t = e[0];
            if (e.length >= 1 + t) return this.oid = e.subarray(1, 1 + t), 1 + this.oid.length;
        }
        throw Error("Invalid oid");
    }
    write() {
        return $.concatUint8Array([
            new Uint8Array([
                this.oid.length
            ]),
            this.oid
        ]);
    }
    toHex() {
        return $.uint8ArrayToHex(this.oid);
    }
    getName() {
        const e = this.toHex();
        if (ie.curve[e]) return ie.write(ie.curve, e);
        throw Error("Unknown curve object identifier.");
    }
}
function sn(e, t) {
    return e.keyPair({
        priv: t
    });
}
function on(e, t) {
    const r = e.keyPair({
        pub: t
    });
    if (!0 !== r.validate().result) throw Error("Invalid elliptic public key");
    return r;
}
async function cn(e) {
    if (!ne.useIndutnyElliptic) throw Error("This curve is only supported in the full build of OpenPGP.js");
    const { default: t } = await Promise.resolve().then(function() {
        return yb;
    });
    return new t.ec(e);
}
function un(e) {
    let t, r = 0;
    const i = e[0];
    return i < 192 ? ([r] = e, t = 1) : i < 255 ? (r = (e[0] - 192 << 8) + e[1] + 192, t = 2) : 255 === i && (r = $.readNumber(e.subarray(1, 5)), t = 5), {
        len: r,
        offset: t
    };
}
function hn(e) {
    return e < 192 ? new Uint8Array([
        e
    ]) : e > 191 && e < 8384 ? new Uint8Array([
        192 + (e - 192 >> 8),
        e - 192 & 255
    ]) : $.concatUint8Array([
        new Uint8Array([
            255
        ]),
        $.writeNumber(e, 4)
    ]);
}
function dn(e) {
    if (e < 0 || e > 30) throw Error("Partial Length power must be between 1 and 30");
    return new Uint8Array([
        224 + e
    ]);
}
function fn(e) {
    return new Uint8Array([
        192 | e
    ]);
}
function ln(e, t) {
    return $.concatUint8Array([
        fn(e),
        hn(t)
    ]);
}
function pn(e) {
    return [
        ie.packet.literalData,
        ie.packet.compressedData,
        ie.packet.symmetricallyEncryptedData,
        ie.packet.symEncryptedIntegrityProtectedData,
        ie.packet.aeadEncryptedData
    ].includes(e);
}
async function yn(e, t) {
    const r = K(e);
    let i, n;
    try {
        const s = await r.peekBytes(2);
        if (!s || s.length < 2 || 0 == (128 & s[0])) throw Error("Error during parsing. This message / key probably does not conform to a valid OpenPGP format.");
        const o = await r.readByte();
        let c, u, h = -1, d = -1;
        d = 0, 0 != (64 & o) && (d = 1), d ? h = 63 & o : (h = (63 & o) >> 2, u = 3 & o);
        const f = pn(h);
        let l, p = null;
        if (f) {
            if ("array" === $.isStream(e)) {
                const e = new a;
                i = D(e), p = e;
            } else {
                const e = new S;
                i = D(e.writable), p = e.readable;
            }
            n = t({
                tag: h,
                packet: p
            });
        } else p = [];
        do {
            if (d) {
                const e = await r.readByte();
                if (l = !1, e < 192) c = e;
                else if (e >= 192 && e < 224) c = (e - 192 << 8) + await r.readByte() + 192;
                else if (e > 223 && e < 255) {
                    if (c = 1 << (31 & e), l = !0, !f) throw new TypeError("This packet type does not support partial lengths.");
                } else c = await r.readByte() << 24 | await r.readByte() << 16 | await r.readByte() << 8 | await r.readByte();
            } else switch(u){
                case 0:
                    c = await r.readByte();
                    break;
                case 1:
                    c = await r.readByte() << 8 | await r.readByte();
                    break;
                case 2:
                    c = await r.readByte() << 24 | await r.readByte() << 16 | await r.readByte() << 8 | await r.readByte();
                    break;
                default:
                    c = 1 / 0;
            }
            if (c > 0) {
                let e = 0;
                for(;;){
                    i && await i.ready;
                    const { done: t, value: n } = await r.read();
                    if (t) {
                        if (c === 1 / 0) break;
                        throw Error("Unexpected end of packet");
                    }
                    const a = c === 1 / 0 ? n : n.subarray(0, c - e);
                    if (i ? await i.write(a) : p.push(a), e += n.length, e >= c) {
                        r.unshift(n.subarray(c - e + n.length));
                        break;
                    }
                }
            }
        }while (l);
        const y = await r.peekBytes(f ? 1 / 0 : 2);
        return i ? (await i.ready, await i.close()) : (p = $.concatUint8Array(p), await t({
            tag: h,
            packet: p
        })), !y || !y.length;
    } catch (e) {
        if (i) return await i.abort(e), !0;
        throw e;
    } finally{
        i && await n, r.releaseLock();
    }
}
class bn extends Error {
    constructor(...e){
        super(...e), Error.captureStackTrace && Error.captureStackTrace(this, bn), this.name = "UnsupportedError";
    }
}
class mn {
    constructor(e, t){
        this.tag = e, this.rawContent = t;
    }
    write() {
        return this.rawContent;
    }
}
const gn = $.getWebCrypto(), wn = $.getNodeCrypto(), vn = {
    p256: "P-256",
    p384: "P-384",
    p521: "P-521"
}, _n = wn ? wn.getCurves() : [], kn = wn ? {
    secp256k1: _n.includes("secp256k1") ? "secp256k1" : void 0,
    p256: _n.includes("prime256v1") ? "prime256v1" : void 0,
    p384: _n.includes("secp384r1") ? "secp384r1" : void 0,
    p521: _n.includes("secp521r1") ? "secp521r1" : void 0,
    ed25519: _n.includes("ED25519") ? "ED25519" : void 0,
    curve25519: _n.includes("X25519") ? "X25519" : void 0,
    brainpoolP256r1: _n.includes("brainpoolP256r1") ? "brainpoolP256r1" : void 0,
    brainpoolP384r1: _n.includes("brainpoolP384r1") ? "brainpoolP384r1" : void 0,
    brainpoolP512r1: _n.includes("brainpoolP512r1") ? "brainpoolP512r1" : void 0
} : {}, An = {
    p256: {
        oid: [
            6,
            8,
            42,
            134,
            72,
            206,
            61,
            3,
            1,
            7
        ],
        keyType: ie.publicKey.ecdsa,
        hash: ie.hash.sha256,
        cipher: ie.symmetric.aes128,
        node: kn.p256,
        web: vn.p256,
        payloadSize: 32,
        sharedSize: 256
    },
    p384: {
        oid: [
            6,
            5,
            43,
            129,
            4,
            0,
            34
        ],
        keyType: ie.publicKey.ecdsa,
        hash: ie.hash.sha384,
        cipher: ie.symmetric.aes192,
        node: kn.p384,
        web: vn.p384,
        payloadSize: 48,
        sharedSize: 384
    },
    p521: {
        oid: [
            6,
            5,
            43,
            129,
            4,
            0,
            35
        ],
        keyType: ie.publicKey.ecdsa,
        hash: ie.hash.sha512,
        cipher: ie.symmetric.aes256,
        node: kn.p521,
        web: vn.p521,
        payloadSize: 66,
        sharedSize: 528
    },
    secp256k1: {
        oid: [
            6,
            5,
            43,
            129,
            4,
            0,
            10
        ],
        keyType: ie.publicKey.ecdsa,
        hash: ie.hash.sha256,
        cipher: ie.symmetric.aes128,
        node: kn.secp256k1,
        payloadSize: 32
    },
    ed25519: {
        oid: [
            6,
            9,
            43,
            6,
            1,
            4,
            1,
            218,
            71,
            15,
            1
        ],
        keyType: ie.publicKey.eddsa,
        hash: ie.hash.sha512,
        node: !1,
        payloadSize: 32
    },
    curve25519: {
        oid: [
            6,
            10,
            43,
            6,
            1,
            4,
            1,
            151,
            85,
            1,
            5,
            1
        ],
        keyType: ie.publicKey.ecdh,
        hash: ie.hash.sha256,
        cipher: ie.symmetric.aes128,
        node: !1,
        payloadSize: 32
    },
    brainpoolP256r1: {
        oid: [
            6,
            9,
            43,
            36,
            3,
            3,
            2,
            8,
            1,
            1,
            7
        ],
        keyType: ie.publicKey.ecdsa,
        hash: ie.hash.sha256,
        cipher: ie.symmetric.aes128,
        node: kn.brainpoolP256r1,
        payloadSize: 32
    },
    brainpoolP384r1: {
        oid: [
            6,
            9,
            43,
            36,
            3,
            3,
            2,
            8,
            1,
            1,
            11
        ],
        keyType: ie.publicKey.ecdsa,
        hash: ie.hash.sha384,
        cipher: ie.symmetric.aes192,
        node: kn.brainpoolP384r1,
        payloadSize: 48
    },
    brainpoolP512r1: {
        oid: [
            6,
            9,
            43,
            36,
            3,
            3,
            2,
            8,
            1,
            1,
            13
        ],
        keyType: ie.publicKey.ecdsa,
        hash: ie.hash.sha512,
        cipher: ie.symmetric.aes256,
        node: kn.brainpoolP512r1,
        payloadSize: 64
    }
};
class Sn {
    constructor(e, t){
        try {
            ($.isArray(e) || $.isUint8Array(e)) && (e = new an(e)), e instanceof an && (e = e.getName()), this.name = ie.write(ie.curve, e);
        } catch (e) {
            throw new bn("Unknown curve");
        }
        t = t || An[this.name], this.keyType = t.keyType, this.oid = t.oid, this.hash = t.hash, this.cipher = t.cipher, this.node = t.node && An[this.name], this.web = t.web && An[this.name], this.payloadSize = t.payloadSize, this.web && $.getWebCrypto() ? this.type = "web" : this.node && $.getNodeCrypto() ? this.type = "node" : "curve25519" === this.name ? this.type = "curve25519" : "ed25519" === this.name && (this.type = "ed25519");
    }
    async genKeyPair() {
        let e;
        switch(this.type){
            case "web":
                try {
                    return await async function(e) {
                        const t = await gn.generateKey({
                            name: "ECDSA",
                            namedCurve: vn[e]
                        }, !0, [
                            "sign",
                            "verify"
                        ]), r = await gn.exportKey("jwk", t.privateKey), i = await gn.exportKey("jwk", t.publicKey);
                        return {
                            publicKey: Pn(i),
                            privateKey: ee(r.d)
                        };
                    }(this.name);
                } catch (e) {
                    $.printDebugError("Browser did not support generating ec key " + e.message);
                    break;
                }
            case "node":
                return async function(e) {
                    const t = wn.createECDH(kn[e]);
                    return await t.generateKeys(), {
                        publicKey: new Uint8Array(t.getPublicKey()),
                        privateKey: new Uint8Array(t.getPrivateKey())
                    };
                }(this.name);
            case "curve25519":
                {
                    const t = Oi(32);
                    t[0] = 127 & t[0] | 64, t[31] &= 248;
                    const r = t.slice().reverse();
                    e = qi.box.keyPair.fromSecretKey(r);
                    return {
                        publicKey: $.concatUint8Array([
                            new Uint8Array([
                                64
                            ]),
                            e.publicKey
                        ]),
                        privateKey: t
                    };
                }
            case "ed25519":
                {
                    const e = Oi(32), t = qi.sign.keyPair.fromSeed(e);
                    return {
                        publicKey: $.concatUint8Array([
                            new Uint8Array([
                                64
                            ]),
                            t.publicKey
                        ]),
                        privateKey: e
                    };
                }
        }
        const t = await cn(this.name);
        return e = await t.genKeyPair({
            entropy: $.uint8ArrayToString(Oi(32))
        }), {
            publicKey: new Uint8Array(e.getPublic("array", !1)),
            privateKey: e.getPrivate().toArrayLike(Uint8Array)
        };
    }
}
async function En(e, t, r, i) {
    const n = {
        p256: !0,
        p384: !0,
        p521: !0,
        secp256k1: !0,
        curve25519: e === ie.publicKey.ecdh,
        brainpoolP256r1: !0,
        brainpoolP384r1: !0,
        brainpoolP512r1: !0
    }, a = t.getName();
    if (!n[a]) return !1;
    if ("curve25519" === a) {
        i = i.slice().reverse();
        const { publicKey: e } = qi.box.keyPair.fromSecretKey(i);
        r = new Uint8Array(r);
        const t = new Uint8Array([
            64,
            ...e
        ]);
        return !!$.equalsUint8Array(t, r);
    }
    const s = await cn(a);
    try {
        r = on(s, r).getPublic();
    } catch (e) {
        return !1;
    }
    return !!sn(s, i).getPublic().eq(r);
}
function Pn(e) {
    const t = ee(e.x), r = ee(e.y), i = new Uint8Array(t.length + r.length + 1);
    return i[0] = 4, i.set(t, 1), i.set(r, t.length + 1), i;
}
function xn(e, t, r) {
    const i = e, n = r.slice(1, i + 1), a = r.slice(i + 1, 2 * i + 1);
    return {
        kty: "EC",
        crv: t,
        x: te(n, !0),
        y: te(a, !0),
        ext: !0
    };
}
function Mn(e, t, r, i) {
    const n = xn(e, t, r);
    return n.d = te(i, !0), n;
}
const Cn = $.getWebCrypto(), Kn = $.getNodeCrypto();
async function Dn(e, t, r, i, n, a) {
    const s = new Sn(e);
    if (r && !$.isStream(r)) {
        const e = {
            publicKey: i,
            privateKey: n
        };
        switch(s.type){
            case "web":
                try {
                    return await async function(e, t, r, i) {
                        const n = e.payloadSize, a = Mn(e.payloadSize, vn[e.name], i.publicKey, i.privateKey), s = await Cn.importKey("jwk", a, {
                            name: "ECDSA",
                            namedCurve: vn[e.name],
                            hash: {
                                name: ie.read(ie.webHash, e.hash)
                            }
                        }, !1, [
                            "sign"
                        ]), o = new Uint8Array(await Cn.sign({
                            name: "ECDSA",
                            namedCurve: vn[e.name],
                            hash: {
                                name: ie.read(ie.webHash, t)
                            }
                        }, s, r));
                        return {
                            r: o.slice(0, n),
                            s: o.slice(n, n << 1)
                        };
                    }(s, t, r, e);
                } catch (e) {
                    if ("p521" !== s.name && ("DataError" === e.name || "OperationError" === e.name)) throw e;
                    $.printDebugError("Browser did not support signing: " + e.message);
                }
                break;
            case "node":
                {
                    const i = await async function(e, t, r, i) {
                        const n = Kn.createSign(ie.read(ie.hash, t));
                        n.write(r), n.end();
                        const a = Bn.encode({
                            version: 1,
                            parameters: e.oid,
                            privateKey: Array.from(i.privateKey),
                            publicKey: {
                                unused: 0,
                                data: Array.from(i.publicKey)
                            }
                        }, "pem", {
                            label: "EC PRIVATE KEY"
                        });
                        return In.decode(n.sign(a), "der");
                    }(s, t, r, e);
                    return {
                        r: i.r.toArrayLike(Uint8Array),
                        s: i.s.toArrayLike(Uint8Array)
                    };
                }
        }
    }
    return async function(e, t, r) {
        const i = await cn(e.name), n = sn(i, r), a = n.sign(t);
        return {
            r: a.r.toArrayLike(Uint8Array),
            s: a.s.toArrayLike(Uint8Array)
        };
    }(s, a, n);
}
async function Rn(e, t, r, i, n, a) {
    const s = new Sn(e);
    if (i && !$.isStream(i)) switch(s.type){
        case "web":
            try {
                return await async function(e, t, { r, s: i }, n, a) {
                    const s = xn(e.payloadSize, vn[e.name], a), o = await Cn.importKey("jwk", s, {
                        name: "ECDSA",
                        namedCurve: vn[e.name],
                        hash: {
                            name: ie.read(ie.webHash, e.hash)
                        }
                    }, !1, [
                        "verify"
                    ]), c = $.concatUint8Array([
                        r,
                        i
                    ]).buffer;
                    return Cn.verify({
                        name: "ECDSA",
                        namedCurve: vn[e.name],
                        hash: {
                            name: ie.read(ie.webHash, t)
                        }
                    }, o, c, n);
                }(s, t, r, i, n);
            } catch (e) {
                if ("p521" !== s.name && ("DataError" === e.name || "OperationError" === e.name)) throw e;
                $.printDebugError("Browser did not support verifying: " + e.message);
            }
            break;
        case "node":
            return async function(e, t, { r, s: i }, n, a) {
                const { default: s } = await Promise.resolve().then(function() {
                    return Yp;
                }), o = Kn.createVerify(ie.read(ie.hash, t));
                o.write(n), o.end();
                const c = zn.encode({
                    algorithm: {
                        algorithm: [
                            1,
                            2,
                            840,
                            10045,
                            2,
                            1
                        ],
                        parameters: e.oid
                    },
                    subjectPublicKey: {
                        unused: 0,
                        data: Array.from(a)
                    }
                }, "pem", {
                    label: "PUBLIC KEY"
                }), u = In.encode({
                    r: new s(r),
                    s: new s(i)
                }, "der");
                try {
                    return o.verify(c, u);
                } catch (e) {
                    return !1;
                }
            }(s, t, r, i, n);
    }
    return async function(e, t, r, i) {
        const n = await cn(e.name), a = on(n, i);
        return a.verify(r, t);
    }(s, r, void 0 === t ? i : a, n);
}
const Un = void 0, In = Kn ? Un.define("ECDSASignature", function() {
    this.seq().obj(this.key("r").int(), this.key("s").int());
}) : void 0, Bn = Kn ? Un.define("ECPrivateKey", function() {
    this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").explicit(0).optional().any(), this.key("publicKey").explicit(1).optional().bitstr());
}) : void 0, Tn = Kn ? Un.define("AlgorithmIdentifier", function() {
    this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional().any());
}) : void 0, zn = Kn ? Un.define("SubjectPublicKeyInfo", function() {
    this.seq().obj(this.key("algorithm").use(Tn), this.key("subjectPublicKey").bitstr());
}) : void 0;
var qn = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    sign: Dn,
    verify: Rn,
    validateParams: async function(e, t, r) {
        const i = new Sn(e);
        if (i.keyType !== ie.publicKey.ecdsa) return !1;
        switch(i.type){
            case "web":
            case "node":
                {
                    const i = Oi(8), n = ie.hash.sha256, a = await Gr.digest(n, i);
                    try {
                        const s = await Dn(e, n, i, t, r, a);
                        return await Rn(e, n, s, i, t, a);
                    } catch (e) {
                        return !1;
                    }
                }
            default:
                return En(ie.publicKey.ecdsa, e, t, r);
        }
    }
});
qi.hash = (e)=>new Uint8Array(Jt().update(e).digest());
var Fn = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    sign: async function(e, t, r, i, n, a) {
        if (Gr.getHashByteLength(t) < Gr.getHashByteLength(ie.hash.sha256)) throw Error("Hash algorithm too weak: sha256 or stronger is required for EdDSA.");
        const s = $.concatUint8Array([
            n,
            i.subarray(1)
        ]), o = qi.sign.detached(a, s);
        return {
            r: o.subarray(0, 32),
            s: o.subarray(32)
        };
    },
    verify: async function(e, t, { r, s: i }, n, a, s) {
        const o = $.concatUint8Array([
            r,
            i
        ]);
        return qi.sign.detached.verify(s, o, a.subarray(1));
    },
    validateParams: async function(e, t, r) {
        if ("ed25519" !== e.getName()) return !1;
        const { publicKey: i } = qi.sign.keyPair.fromSeed(r), n = new Uint8Array([
            64,
            ...i
        ]);
        return $.equalsUint8Array(t, n);
    }
});
function On(e, t) {
    const r = new He["aes" + 8 * e.length](e), i = new Uint32Array([
        2795939494,
        2795939494
    ]), n = jn(t);
    let a = i;
    const s = n, o = n.length / 2, c = new Uint32Array([
        0,
        0
    ]);
    let u = new Uint32Array(4);
    for(let e = 0; e <= 5; ++e)for(let t = 0; t < o; ++t)c[1] = o * e + (1 + t), u[0] = a[0], u[1] = a[1], u[2] = s[2 * t], u[3] = s[2 * t + 1], u = jn(r.encrypt(Ln(u))), a = u.subarray(0, 2), a[0] ^= c[0], a[1] ^= c[1], s[2 * t] = u[2], s[2 * t + 1] = u[3];
    return Ln(a, s);
}
function Nn(e, t) {
    const r = new He["aes" + 8 * e.length](e), i = new Uint32Array([
        2795939494,
        2795939494
    ]), n = jn(t);
    let a = n.subarray(0, 2);
    const s = n.subarray(2), o = n.length / 2 - 1, c = new Uint32Array([
        0,
        0
    ]);
    let u = new Uint32Array(4);
    for(let e = 5; e >= 0; --e)for(let t = o - 1; t >= 0; --t)c[1] = o * e + (t + 1), u[0] = a[0] ^ c[0], u[1] = a[1] ^ c[1], u[2] = s[2 * t], u[3] = s[2 * t + 1], u = jn(r.decrypt(Ln(u))), a = u.subarray(0, 2), s[2 * t] = u[2], s[2 * t + 1] = u[3];
    if (a[0] === i[0] && a[1] === i[1]) return Ln(s);
    throw Error("Key Data Integrity failed");
}
function jn(e) {
    const { length: t } = e, r = function(e) {
        if ($.isString(e)) {
            const { length: t } = e, r = new ArrayBuffer(t), i = new Uint8Array(r);
            for(let r = 0; r < t; ++r)i[r] = e.charCodeAt(r);
            return r;
        }
        return new Uint8Array(e).buffer;
    }(e), i = new DataView(r), n = new Uint32Array(t / 4);
    for(let e = 0; e < t / 4; ++e)n[e] = i.getUint32(4 * e);
    return n;
}
function Ln() {
    let e = 0;
    for(let t = 0; t < arguments.length; ++t)e += 4 * arguments[t].length;
    const t = new ArrayBuffer(e), r = new DataView(t);
    let i = 0;
    for(let e = 0; e < arguments.length; ++e){
        for(let t = 0; t < arguments[e].length; ++t)r.setUint32(i + 4 * t, arguments[e][t]);
        i += 4 * arguments[e].length;
    }
    return new Uint8Array(t);
}
var Wn = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    wrap: On,
    unwrap: Nn
});
function Hn(e) {
    const t = 8 - e.length % 8, r = new Uint8Array(e.length + t).fill(t);
    return r.set(e), r;
}
function Gn(e) {
    const t = e.length;
    if (t > 0) {
        const r = e[t - 1];
        if (r >= 1) {
            const i = e.subarray(t - r), n = new Uint8Array(r).fill(r);
            if ($.equalsUint8Array(i, n)) return e.subarray(0, t - r);
        }
    }
    throw Error("Invalid padding");
}
var Vn = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    encode: Hn,
    decode: Gn
});
const $n = $.getWebCrypto(), Zn = $.getNodeCrypto();
function Yn(e, t, r, i) {
    return $.concatUint8Array([
        t.write(),
        new Uint8Array([
            e
        ]),
        r.write(),
        $.stringToUint8Array("Anonymous Sender    "),
        i.subarray(0, 20)
    ]);
}
async function Xn(e, t, r, i, n = !1, a = !1) {
    let s;
    if (n) {
        for(s = 0; s < t.length && 0 === t[s]; s++);
        t = t.subarray(s);
    }
    if (a) {
        for(s = t.length - 1; s >= 0 && 0 === t[s]; s--);
        t = t.subarray(0, s + 1);
    }
    return (await Gr.digest(e, $.concatUint8Array([
        new Uint8Array([
            0,
            0,
            0,
            1
        ]),
        t,
        i
    ]))).subarray(0, r);
}
async function Qn(e, t) {
    switch(e.type){
        case "curve25519":
            {
                const r = Oi(32), { secretKey: i, sharedKey: n } = await Jn(e, t, null, r);
                let { publicKey: a } = qi.box.keyPair.fromSecretKey(i);
                return a = $.concatUint8Array([
                    new Uint8Array([
                        64
                    ]),
                    a
                ]), {
                    publicKey: a,
                    sharedKey: n
                };
            }
        case "web":
            if (e.web && $.getWebCrypto()) try {
                return await async function(e, t) {
                    const r = xn(e.payloadSize, e.web.web, t);
                    let i = $n.generateKey({
                        name: "ECDH",
                        namedCurve: e.web.web
                    }, !0, [
                        "deriveKey",
                        "deriveBits"
                    ]), n = $n.importKey("jwk", r, {
                        name: "ECDH",
                        namedCurve: e.web.web
                    }, !1, []);
                    [i, n] = await Promise.all([
                        i,
                        n
                    ]);
                    let a = $n.deriveBits({
                        name: "ECDH",
                        namedCurve: e.web.web,
                        public: n
                    }, i.privateKey, e.web.sharedSize), s = $n.exportKey("jwk", i.publicKey);
                    [a, s] = await Promise.all([
                        a,
                        s
                    ]);
                    const o = new Uint8Array(a), c = new Uint8Array(Pn(s));
                    return {
                        publicKey: c,
                        sharedKey: o
                    };
                }(e, t);
            } catch (e) {
                $.printDebugError(e);
            }
            break;
        case "node":
            return async function(e, t) {
                const r = Zn.createECDH(e.node.node);
                r.generateKeys();
                const i = new Uint8Array(r.computeSecret(t)), n = new Uint8Array(r.getPublicKey());
                return {
                    publicKey: n,
                    sharedKey: i
                };
            }(e, t);
    }
    return async function(e, t) {
        const r = await cn(e.name), i = await e.genKeyPair();
        t = on(r, t);
        const n = sn(r, i.privateKey), a = i.publicKey, s = n.derive(t.getPublic()), o = r.curve.p.byteLength(), c = s.toArrayLike(Uint8Array, "be", o);
        return {
            publicKey: a,
            sharedKey: c
        };
    }(e, t);
}
async function Jn(e, t, r, i) {
    if (i.length !== e.payloadSize) {
        const t = new Uint8Array(e.payloadSize);
        t.set(i, e.payloadSize - i.length), i = t;
    }
    switch(e.type){
        case "curve25519":
            {
                const e = i.slice().reverse();
                return {
                    secretKey: e,
                    sharedKey: qi.scalarMult(e, t.subarray(1))
                };
            }
        case "web":
            if (e.web && $.getWebCrypto()) try {
                return await async function(e, t, r, i) {
                    const n = Mn(e.payloadSize, e.web.web, r, i);
                    let a = $n.importKey("jwk", n, {
                        name: "ECDH",
                        namedCurve: e.web.web
                    }, !0, [
                        "deriveKey",
                        "deriveBits"
                    ]);
                    const s = xn(e.payloadSize, e.web.web, t);
                    let o = $n.importKey("jwk", s, {
                        name: "ECDH",
                        namedCurve: e.web.web
                    }, !0, []);
                    [a, o] = await Promise.all([
                        a,
                        o
                    ]);
                    let c = $n.deriveBits({
                        name: "ECDH",
                        namedCurve: e.web.web,
                        public: o
                    }, a, e.web.sharedSize), u = $n.exportKey("jwk", a);
                    [c, u] = await Promise.all([
                        c,
                        u
                    ]);
                    const h = new Uint8Array(c);
                    return {
                        secretKey: ee(u.d),
                        sharedKey: h
                    };
                }(e, t, r, i);
            } catch (e) {
                $.printDebugError(e);
            }
            break;
        case "node":
            return async function(e, t, r) {
                const i = Zn.createECDH(e.node.node);
                i.setPrivateKey(r);
                const n = new Uint8Array(i.computeSecret(t));
                return {
                    secretKey: new Uint8Array(i.getPrivateKey()),
                    sharedKey: n
                };
            }(e, t, i);
    }
    return async function(e, t, r) {
        const i = await cn(e.name);
        t = on(i, t), r = sn(i, r);
        const n = new Uint8Array(r.getPrivate()), a = r.derive(t.getPublic()), s = i.curve.p.byteLength(), o = a.toArrayLike(Uint8Array, "be", s);
        return {
            secretKey: n,
            sharedKey: o
        };
    }(e, t, i);
}
var ea = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    validateParams: async function(e, t, r) {
        return En(ie.publicKey.ecdh, e, t, r);
    },
    encrypt: async function(e, t, r, i, n) {
        const a = Hn(r), s = new Sn(e), { publicKey: o, sharedKey: c } = await Qn(s, i), u = Yn(ie.publicKey.ecdh, e, t, n), { keySize: h } = $r(t.cipher);
        return {
            publicKey: o,
            wrappedKey: On(await Xn(t.hash, c, h, u), a)
        };
    },
    decrypt: async function(e, t, r, i, n, a, s) {
        const o = new Sn(e), { sharedKey: c } = await Jn(o, r, n, a), u = Yn(ie.publicKey.ecdh, e, t, s), { keySize: h } = $r(t.cipher);
        let d;
        for(let e = 0; e < 3; e++)try {
            return Gn(Nn(await Xn(t.hash, c, h, u, 1 === e, 2 === e), i));
        } catch (e) {
            d = e;
        }
        throw d;
    }
}), ta = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Curve: Sn,
    ecdh: ea,
    ecdsa: qn,
    eddsa: Fn,
    generate: async function(e) {
        const t = await $.getBigInteger();
        e = new Sn(e);
        const r = await e.genKeyPair(), i = new t(r.publicKey).toUint8Array(), n = new t(r.privateKey).toUint8Array("be", e.payloadSize);
        return {
            oid: e.oid,
            Q: i,
            secret: n,
            hash: e.hash,
            cipher: e.cipher
        };
    },
    getPreferredHashAlgo: function(e) {
        return An[ie.write(ie.curve, e.toHex())].hash;
    }
});
var ra = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    sign: async function(e, t, r, i, n, a) {
        const s = await $.getBigInteger(), o = new s(1);
        let c, u, h, d;
        i = new s(i), n = new s(n), r = new s(r), a = new s(a), r = r.mod(i), a = a.mod(n);
        const f = new s(t.subarray(0, n.byteLength())).mod(n);
        for(;;){
            if (c = await Ni(o, n), u = r.modExp(c, i).imod(n), u.isZero()) continue;
            const e = a.mul(u).imod(n);
            if (d = f.add(e).imod(n), h = c.modInv(n).imul(d).imod(n), !h.isZero()) break;
        }
        return {
            r: u.toUint8Array("be", n.byteLength()),
            s: h.toUint8Array("be", n.byteLength())
        };
    },
    verify: async function(e, t, r, i, n, a, s, o) {
        const c = await $.getBigInteger(), u = new c(0);
        if (t = new c(t), r = new c(r), a = new c(a), s = new c(s), n = new c(n), o = new c(o), t.lte(u) || t.gte(s) || r.lte(u) || r.gte(s)) return $.printDebug("invalid DSA Signature"), !1;
        const h = new c(i.subarray(0, s.byteLength())).imod(s), d = r.modInv(s);
        if (d.isZero()) return $.printDebug("invalid DSA Signature"), !1;
        n = n.mod(a), o = o.mod(a);
        const f = h.mul(d).imod(s), l = t.mul(d).imod(s), p = n.modExp(f, a), y = o.modExp(l, a);
        return p.mul(y).imod(a).imod(s).equal(t);
    },
    validateParams: async function(e, t, r, i, n) {
        const a = await $.getBigInteger();
        e = new a(e), t = new a(t), r = new a(r), i = new a(i);
        const s = new a(1);
        if (r.lte(s) || r.gte(e)) return !1;
        if (!e.dec().mod(t).isZero()) return !1;
        if (!r.modExp(t, e).isOne()) return !1;
        const o = new a(t.bitLength()), c = new a(150);
        if (o.lt(c) || !await Wi(t, null, 32)) return !1;
        n = new a(n);
        const u = new a(2), h = await Ni(u.leftShift(o.dec()), u.leftShift(o)), d = t.mul(h).add(n);
        return !!i.equal(r.modExp(d, e));
    }
}), ia = {
    rsa: rn,
    elgamal: nn,
    elliptic: ta,
    dsa: ra,
    nacl: qi
};
var na = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    parseSignatureParams: function(e, t) {
        let r = 0;
        switch(e){
            case ie.publicKey.rsaEncryptSign:
            case ie.publicKey.rsaEncrypt:
            case ie.publicKey.rsaSign:
                return {
                    s: $.readMPI(t.subarray(r))
                };
            case ie.publicKey.dsa:
            case ie.publicKey.ecdsa:
                {
                    const e = $.readMPI(t.subarray(r));
                    r += e.length + 2;
                    return {
                        r: e,
                        s: $.readMPI(t.subarray(r))
                    };
                }
            case ie.publicKey.eddsa:
                {
                    let e = $.readMPI(t.subarray(r));
                    r += e.length + 2, e = $.leftPad(e, 32);
                    let i = $.readMPI(t.subarray(r));
                    return i = $.leftPad(i, 32), {
                        r: e,
                        s: i
                    };
                }
            default:
                throw new bn("Unknown signature algorithm.");
        }
    },
    verify: async function(e, t, r, i, n, a) {
        switch(e){
            case ie.publicKey.rsaEncryptSign:
            case ie.publicKey.rsaEncrypt:
            case ie.publicKey.rsaSign:
                {
                    const { n: e, e: s } = i, o = $.leftPad(r.s, e.length);
                    return ia.rsa.verify(t, n, o, e, s, a);
                }
            case ie.publicKey.dsa:
                {
                    const { g: e, p: n, q: s, y: o } = i, { r: c, s: u } = r;
                    return ia.dsa.verify(t, c, u, a, e, n, s, o);
                }
            case ie.publicKey.ecdsa:
                {
                    const { oid: e, Q: s } = i, o = new ia.elliptic.Curve(e).payloadSize, c = $.leftPad(r.r, o), u = $.leftPad(r.s, o);
                    return ia.elliptic.ecdsa.verify(e, t, {
                        r: c,
                        s: u
                    }, n, s, a);
                }
            case ie.publicKey.eddsa:
                {
                    const { oid: e, Q: s } = i;
                    return ia.elliptic.eddsa.verify(e, t, r, n, s, a);
                }
            default:
                throw Error("Unknown signature algorithm.");
        }
    },
    sign: async function(e, t, r, i, n, a) {
        if (!r || !i) throw Error("Missing key parameters");
        switch(e){
            case ie.publicKey.rsaEncryptSign:
            case ie.publicKey.rsaEncrypt:
            case ie.publicKey.rsaSign:
                {
                    const { n: e, e: s } = r, { d: o, p: c, q: u, u: h } = i;
                    return {
                        s: await ia.rsa.sign(t, n, e, s, o, c, u, h, a)
                    };
                }
            case ie.publicKey.dsa:
                {
                    const { g: e, p: n, q: s } = r, { x: o } = i;
                    return ia.dsa.sign(t, a, e, n, s, o);
                }
            case ie.publicKey.elgamal:
                throw Error("Signing with Elgamal is not defined in the OpenPGP standard.");
            case ie.publicKey.ecdsa:
                {
                    const { oid: e, Q: s } = r, { d: o } = i;
                    return ia.elliptic.ecdsa.sign(e, t, n, s, o, a);
                }
            case ie.publicKey.eddsa:
                {
                    const { oid: e, Q: s } = r, { seed: o } = i;
                    return ia.elliptic.eddsa.sign(e, t, n, s, o, a);
                }
            default:
                throw Error("Unknown signature algorithm.");
        }
    }
});
class aa {
    constructor(e){
        e = void 0 === e ? new Uint8Array([]) : $.isString(e) ? $.stringToUint8Array(e) : new Uint8Array(e), this.data = e;
    }
    read(e) {
        if (e.length >= 1) {
            const t = e[0];
            if (e.length >= 1 + t) return this.data = e.subarray(1, 1 + t), 1 + this.data.length;
        }
        throw Error("Invalid symmetric key");
    }
    write() {
        return $.concatUint8Array([
            new Uint8Array([
                this.data.length
            ]),
            this.data
        ]);
    }
}
class sa {
    constructor(e){
        if (e) {
            const { hash: t, cipher: r } = e;
            this.hash = t, this.cipher = r;
        } else this.hash = null, this.cipher = null;
    }
    read(e) {
        if (e.length < 4 || 3 !== e[0] || 1 !== e[1]) throw Error("Cannot read KDFParams");
        return this.hash = e[2], this.cipher = e[3], 4;
    }
    write() {
        return new Uint8Array([
            3,
            1,
            this.hash,
            this.cipher
        ]);
    }
}
function oa(e) {
    try {
        e.getName();
    } catch (e) {
        throw new bn("Unknown curve OID");
    }
}
var ca = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    publicKeyEncrypt: async function(e, t, r, i) {
        switch(e){
            case ie.publicKey.rsaEncrypt:
            case ie.publicKey.rsaEncryptSign:
                {
                    const { n: e, e: i } = t;
                    return {
                        c: await ia.rsa.encrypt(r, e, i)
                    };
                }
            case ie.publicKey.elgamal:
                {
                    const { p: e, g: i, y: n } = t;
                    return ia.elgamal.encrypt(r, e, i, n);
                }
            case ie.publicKey.ecdh:
                {
                    const { oid: e, Q: n, kdfParams: a } = t, { publicKey: s, wrappedKey: o } = await ia.elliptic.ecdh.encrypt(e, a, r, n, i);
                    return {
                        V: s,
                        C: new aa(o)
                    };
                }
            default:
                return [];
        }
    },
    publicKeyDecrypt: async function(e, t, r, i, n, a) {
        switch(e){
            case ie.publicKey.rsaEncryptSign:
            case ie.publicKey.rsaEncrypt:
                {
                    const { c: e } = i, { n, e: s } = t, { d: o, p: c, q: u, u: h } = r;
                    return ia.rsa.decrypt(e, n, s, o, c, u, h, a);
                }
            case ie.publicKey.elgamal:
                {
                    const { c1: e, c2: n } = i, s = t.p, o = r.x;
                    return ia.elgamal.decrypt(e, n, s, o, a);
                }
            case ie.publicKey.ecdh:
                {
                    const { oid: e, Q: a, kdfParams: s } = t, { d: o } = r, { V: c, C: u } = i;
                    return ia.elliptic.ecdh.decrypt(e, s, c, u.data, a, o, n);
                }
            default:
                throw Error("Unknown public key encryption algorithm.");
        }
    },
    parsePublicKeyParams: function(e, t) {
        let r = 0;
        switch(e){
            case ie.publicKey.rsaEncrypt:
            case ie.publicKey.rsaEncryptSign:
            case ie.publicKey.rsaSign:
                {
                    const e = $.readMPI(t.subarray(r));
                    r += e.length + 2;
                    const i = $.readMPI(t.subarray(r));
                    return r += i.length + 2, {
                        read: r,
                        publicParams: {
                            n: e,
                            e: i
                        }
                    };
                }
            case ie.publicKey.dsa:
                {
                    const e = $.readMPI(t.subarray(r));
                    r += e.length + 2;
                    const i = $.readMPI(t.subarray(r));
                    r += i.length + 2;
                    const n = $.readMPI(t.subarray(r));
                    r += n.length + 2;
                    const a = $.readMPI(t.subarray(r));
                    return r += a.length + 2, {
                        read: r,
                        publicParams: {
                            p: e,
                            q: i,
                            g: n,
                            y: a
                        }
                    };
                }
            case ie.publicKey.elgamal:
                {
                    const e = $.readMPI(t.subarray(r));
                    r += e.length + 2;
                    const i = $.readMPI(t.subarray(r));
                    r += i.length + 2;
                    const n = $.readMPI(t.subarray(r));
                    return r += n.length + 2, {
                        read: r,
                        publicParams: {
                            p: e,
                            g: i,
                            y: n
                        }
                    };
                }
            case ie.publicKey.ecdsa:
                {
                    const e = new an;
                    r += e.read(t), oa(e);
                    const i = $.readMPI(t.subarray(r));
                    return r += i.length + 2, {
                        read: r,
                        publicParams: {
                            oid: e,
                            Q: i
                        }
                    };
                }
            case ie.publicKey.eddsa:
                {
                    const e = new an;
                    r += e.read(t), oa(e);
                    let i = $.readMPI(t.subarray(r));
                    return r += i.length + 2, i = $.leftPad(i, 33), {
                        read: r,
                        publicParams: {
                            oid: e,
                            Q: i
                        }
                    };
                }
            case ie.publicKey.ecdh:
                {
                    const e = new an;
                    r += e.read(t), oa(e);
                    const i = $.readMPI(t.subarray(r));
                    r += i.length + 2;
                    const n = new sa;
                    return r += n.read(t.subarray(r)), {
                        read: r,
                        publicParams: {
                            oid: e,
                            Q: i,
                            kdfParams: n
                        }
                    };
                }
            default:
                throw new bn("Unknown public key encryption algorithm.");
        }
    },
    parsePrivateKeyParams: function(e, t, r) {
        let i = 0;
        switch(e){
            case ie.publicKey.rsaEncrypt:
            case ie.publicKey.rsaEncryptSign:
            case ie.publicKey.rsaSign:
                {
                    const e = $.readMPI(t.subarray(i));
                    i += e.length + 2;
                    const r = $.readMPI(t.subarray(i));
                    i += r.length + 2;
                    const n = $.readMPI(t.subarray(i));
                    i += n.length + 2;
                    const a = $.readMPI(t.subarray(i));
                    return i += a.length + 2, {
                        read: i,
                        privateParams: {
                            d: e,
                            p: r,
                            q: n,
                            u: a
                        }
                    };
                }
            case ie.publicKey.dsa:
            case ie.publicKey.elgamal:
                {
                    const e = $.readMPI(t.subarray(i));
                    return i += e.length + 2, {
                        read: i,
                        privateParams: {
                            x: e
                        }
                    };
                }
            case ie.publicKey.ecdsa:
            case ie.publicKey.ecdh:
                {
                    const e = new Sn(r.oid);
                    let n = $.readMPI(t.subarray(i));
                    return i += n.length + 2, n = $.leftPad(n, e.payloadSize), {
                        read: i,
                        privateParams: {
                            d: n
                        }
                    };
                }
            case ie.publicKey.eddsa:
                {
                    const e = new Sn(r.oid);
                    let n = $.readMPI(t.subarray(i));
                    return i += n.length + 2, n = $.leftPad(n, e.payloadSize), {
                        read: i,
                        privateParams: {
                            seed: n
                        }
                    };
                }
            default:
                throw new bn("Unknown public key encryption algorithm.");
        }
    },
    parseEncSessionKeyParams: function(e, t) {
        let r = 0;
        switch(e){
            case ie.publicKey.rsaEncrypt:
            case ie.publicKey.rsaEncryptSign:
                return {
                    c: $.readMPI(t.subarray(r))
                };
            case ie.publicKey.elgamal:
                {
                    const e = $.readMPI(t.subarray(r));
                    r += e.length + 2;
                    return {
                        c1: e,
                        c2: $.readMPI(t.subarray(r))
                    };
                }
            case ie.publicKey.ecdh:
                {
                    const e = $.readMPI(t.subarray(r));
                    r += e.length + 2;
                    const i = new aa;
                    return i.read(t.subarray(r)), {
                        V: e,
                        C: i
                    };
                }
            default:
                throw new bn("Unknown public key encryption algorithm.");
        }
    },
    serializeParams: function(e, t) {
        const r = Object.keys(t).map((e)=>{
            const r = t[e];
            return $.isUint8Array(r) ? $.uint8ArrayToMPI(r) : r.write();
        });
        return $.concatUint8Array(r);
    },
    generateParams: function(e, t, r) {
        switch(e){
            case ie.publicKey.rsaEncrypt:
            case ie.publicKey.rsaEncryptSign:
            case ie.publicKey.rsaSign:
                return ia.rsa.generate(t, 65537).then(({ n: e, e: t, d: r, p: i, q: n, u: a })=>({
                        privateParams: {
                            d: r,
                            p: i,
                            q: n,
                            u: a
                        },
                        publicParams: {
                            n: e,
                            e: t
                        }
                    }));
            case ie.publicKey.ecdsa:
                return ia.elliptic.generate(r).then(({ oid: e, Q: t, secret: r })=>({
                        privateParams: {
                            d: r
                        },
                        publicParams: {
                            oid: new an(e),
                            Q: t
                        }
                    }));
            case ie.publicKey.eddsa:
                return ia.elliptic.generate(r).then(({ oid: e, Q: t, secret: r })=>({
                        privateParams: {
                            seed: r
                        },
                        publicParams: {
                            oid: new an(e),
                            Q: t
                        }
                    }));
            case ie.publicKey.ecdh:
                return ia.elliptic.generate(r).then(({ oid: e, Q: t, secret: r, hash: i, cipher: n })=>({
                        privateParams: {
                            d: r
                        },
                        publicParams: {
                            oid: new an(e),
                            Q: t,
                            kdfParams: new sa({
                                hash: i,
                                cipher: n
                            })
                        }
                    }));
            case ie.publicKey.dsa:
            case ie.publicKey.elgamal:
                throw Error("Unsupported algorithm for key generation.");
            default:
                throw Error("Unknown public key algorithm.");
        }
    },
    validateParams: async function(e, t, r) {
        if (!t || !r) throw Error("Missing key parameters");
        switch(e){
            case ie.publicKey.rsaEncrypt:
            case ie.publicKey.rsaEncryptSign:
            case ie.publicKey.rsaSign:
                {
                    const { n: e, e: i } = t, { d: n, p: a, q: s, u: o } = r;
                    return ia.rsa.validateParams(e, i, n, a, s, o);
                }
            case ie.publicKey.dsa:
                {
                    const { p: e, q: i, g: n, y: a } = t, { x: s } = r;
                    return ia.dsa.validateParams(e, i, n, a, s);
                }
            case ie.publicKey.elgamal:
                {
                    const { p: e, g: i, y: n } = t, { x: a } = r;
                    return ia.elgamal.validateParams(e, i, n, a);
                }
            case ie.publicKey.ecdsa:
            case ie.publicKey.ecdh:
                {
                    const i = ia.elliptic[ie.read(ie.publicKey, e)], { oid: n, Q: a } = t, { d: s } = r;
                    return i.validateParams(n, a, s);
                }
            case ie.publicKey.eddsa:
                {
                    const { oid: e, Q: i } = t, { seed: n } = r;
                    return ia.elliptic.eddsa.validateParams(e, i, n);
                }
            default:
                throw Error("Unknown public key algorithm.");
        }
    },
    getPrefixRandom: async function(e) {
        const { blockSize: t } = $r(e), r = await Oi(t), i = new Uint8Array([
            r[r.length - 2],
            r[r.length - 1]
        ]);
        return $.concat([
            r,
            i
        ]);
    },
    generateSessionKey: function(e) {
        const { keySize: t } = $r(e);
        return Oi(t);
    },
    getAEADMode: function(e) {
        const t = ie.read(ie.aead, e);
        return zi[t];
    },
    getCipher: $r
});
const ua = {
    cipher: He,
    hash: Gr,
    mode: zi,
    publicKey: ia,
    signature: na,
    random: ji,
    pkcs1: Yi,
    pkcs5: Vn,
    aesKW: Wn
};
Object.assign(ua, ca);
var ha = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
function da(e, t) {
    return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
}
const fa = {
    arraySet: function(e, t, r, i, n) {
        if (t.subarray && e.subarray) e.set(t.subarray(r, r + i), n);
        else for(let a = 0; a < i; a++)e[n + a] = t[r + a];
    },
    flattenChunks: function(e) {
        let t, r, i, n, a;
        for(i = 0, t = 0, r = e.length; t < r; t++)i += e[t].length;
        const s = new Uint8Array(i);
        for(n = 0, t = 0, r = e.length; t < r; t++)a = e[t], s.set(a, n), n += a.length;
        return s;
    }
}, la = {
    arraySet: function(e, t, r, i, n) {
        for(let a = 0; a < i; a++)e[n + a] = t[r + a];
    },
    flattenChunks: function(e) {
        return [].concat.apply([], e);
    }
};
let pa = ha ? Uint8Array : Array, ya = ha ? Uint16Array : Array, ba = ha ? Int32Array : Array, ma = ha ? fa.flattenChunks : la.flattenChunks, ga = ha ? fa.arraySet : la.arraySet;
const wa = 0, va = 1, _a = 2, ka = 3, Aa = 4, Sa = 5, Ea = 6, Pa = 0, xa = 1, Ma = 2, Ca = -2, Ka = -3, Da = -5, Ra = -1, Ua = 1, Ia = 2, Ba = 3, Ta = 4, za = 0, qa = 1, Fa = 2, Oa = 8;
function Na(e) {
    let t = e.length;
    for(; --t >= 0;)e[t] = 0;
}
const ja = 0, La = 1, Wa = 2, Ha = 29, Ga = 256, Va = Ga + 1 + Ha, $a = 30, Za = 19, Ya = 2 * Va + 1, Xa = 15, Qa = 16, Ja = 7, es = 256, ts = 16, rs = 17, is = 18, ns = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
], as = [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
], ss = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
], os = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
], cs = Array(2 * (Va + 2));
Na(cs);
const us = Array(2 * $a);
Na(us);
const hs = Array(512);
Na(hs);
const ds = Array(256);
Na(ds);
const fs = Array(Ha);
Na(fs);
const ls = Array($a);
function ps(e, t, r, i, n) {
    this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = i, this.max_length = n, this.has_stree = e && e.length;
}
let ys, bs, ms;
function gs(e, t) {
    this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
}
function ws(e) {
    return e < 256 ? hs[e] : hs[256 + (e >>> 7)];
}
function vs(e, t) {
    e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
}
function _s(e, t, r) {
    e.bi_valid > Qa - r ? (e.bi_buf |= t << e.bi_valid & 65535, vs(e, e.bi_buf), e.bi_buf = t >> Qa - e.bi_valid, e.bi_valid += r - Qa) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r);
}
function ks(e, t, r) {
    _s(e, r[2 * t], r[2 * t + 1]);
}
function As(e, t) {
    let r = 0;
    do r |= 1 & e, e >>>= 1, r <<= 1;
    while (--t > 0);
    return r >>> 1;
}
function Ss(e, t, r) {
    const i = Array(Xa + 1);
    let n, a, s = 0;
    for(n = 1; n <= Xa; n++)i[n] = s = s + r[n - 1] << 1;
    for(a = 0; a <= t; a++){
        const t = e[2 * a + 1];
        0 !== t && (e[2 * a] = As(i[t]++, t));
    }
}
function Es(e) {
    let t;
    for(t = 0; t < Va; t++)e.dyn_ltree[2 * t] = 0;
    for(t = 0; t < $a; t++)e.dyn_dtree[2 * t] = 0;
    for(t = 0; t < Za; t++)e.bl_tree[2 * t] = 0;
    e.dyn_ltree[2 * es] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
}
function Ps(e) {
    e.bi_valid > 8 ? vs(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}
function xs(e, t, r, i) {
    const n = 2 * t, a = 2 * r;
    return e[n] < e[a] || e[n] === e[a] && i[t] <= i[r];
}
function Ms(e, t, r) {
    const i = e.heap[r];
    let n = r << 1;
    for(; n <= e.heap_len && (n < e.heap_len && xs(t, e.heap[n + 1], e.heap[n], e.depth) && n++, !xs(t, i, e.heap[n], e.depth));)e.heap[r] = e.heap[n], r = n, n <<= 1;
    e.heap[r] = i;
}
function Cs(e, t, r) {
    let i, n, a, s, o = 0;
    if (0 !== e.last_lit) do i = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1], n = e.pending_buf[e.l_buf + o], o++, 0 === i ? ks(e, n, t) : (a = ds[n], ks(e, a + Ga + 1, t), s = ns[a], 0 !== s && (n -= fs[a], _s(e, n, s)), i--, a = ws(i), ks(e, a, r), s = as[a], 0 !== s && (i -= ls[a], _s(e, i, s)));
    while (o < e.last_lit);
    ks(e, es, t);
}
function Ks(e, t) {
    const r = t.dyn_tree, i = t.stat_desc.static_tree, n = t.stat_desc.has_stree, a = t.stat_desc.elems;
    let s, o, c, u = -1;
    for(e.heap_len = 0, e.heap_max = Ya, s = 0; s < a; s++)0 !== r[2 * s] ? (e.heap[++e.heap_len] = u = s, e.depth[s] = 0) : r[2 * s + 1] = 0;
    for(; e.heap_len < 2;)c = e.heap[++e.heap_len] = u < 2 ? ++u : 0, r[2 * c] = 1, e.depth[c] = 0, e.opt_len--, n && (e.static_len -= i[2 * c + 1]);
    for(t.max_code = u, s = e.heap_len >> 1; s >= 1; s--)Ms(e, r, s);
    c = a;
    do s = e.heap[1], e.heap[1] = e.heap[e.heap_len--], Ms(e, r, 1), o = e.heap[1], e.heap[--e.heap_max] = s, e.heap[--e.heap_max] = o, r[2 * c] = r[2 * s] + r[2 * o], e.depth[c] = (e.depth[s] >= e.depth[o] ? e.depth[s] : e.depth[o]) + 1, r[2 * s + 1] = r[2 * o + 1] = c, e.heap[1] = c++, Ms(e, r, 1);
    while (e.heap_len >= 2);
    e.heap[--e.heap_max] = e.heap[1], function(e, t) {
        const r = t.dyn_tree, i = t.max_code, n = t.stat_desc.static_tree, a = t.stat_desc.has_stree, s = t.stat_desc.extra_bits, o = t.stat_desc.extra_base, c = t.stat_desc.max_length;
        let u, h, d, f, l, p, y = 0;
        for(f = 0; f <= Xa; f++)e.bl_count[f] = 0;
        for(r[2 * e.heap[e.heap_max] + 1] = 0, u = e.heap_max + 1; u < Ya; u++)h = e.heap[u], f = r[2 * r[2 * h + 1] + 1] + 1, f > c && (f = c, y++), r[2 * h + 1] = f, h > i || (e.bl_count[f]++, l = 0, h >= o && (l = s[h - o]), p = r[2 * h], e.opt_len += p * (f + l), a && (e.static_len += p * (n[2 * h + 1] + l)));
        if (0 !== y) {
            do {
                for(f = c - 1; 0 === e.bl_count[f];)f--;
                e.bl_count[f]--, e.bl_count[f + 1] += 2, e.bl_count[c]--, y -= 2;
            }while (y > 0);
            for(f = c; 0 !== f; f--)for(h = e.bl_count[f]; 0 !== h;)d = e.heap[--u], d > i || (r[2 * d + 1] !== f && (e.opt_len += (f - r[2 * d + 1]) * r[2 * d], r[2 * d + 1] = f), h--);
        }
    }(e, t), Ss(r, u, e.bl_count);
}
function Ds(e, t, r) {
    let i, n, a = -1, s = t[1], o = 0, c = 7, u = 4;
    for(0 === s && (c = 138, u = 3), t[2 * (r + 1) + 1] = 65535, i = 0; i <= r; i++)n = s, s = t[2 * (i + 1) + 1], ++o < c && n === s || (o < u ? e.bl_tree[2 * n] += o : 0 !== n ? (n !== a && e.bl_tree[2 * n]++, e.bl_tree[2 * ts]++) : o <= 10 ? e.bl_tree[2 * rs]++ : e.bl_tree[2 * is]++, o = 0, a = n, 0 === s ? (c = 138, u = 3) : n === s ? (c = 6, u = 3) : (c = 7, u = 4));
}
function Rs(e, t, r) {
    let i, n, a = -1, s = t[1], o = 0, c = 7, u = 4;
    for(0 === s && (c = 138, u = 3), i = 0; i <= r; i++)if (n = s, s = t[2 * (i + 1) + 1], !(++o < c && n === s)) {
        if (o < u) do ks(e, n, e.bl_tree);
        while (0 != --o);
        else 0 !== n ? (n !== a && (ks(e, n, e.bl_tree), o--), ks(e, ts, e.bl_tree), _s(e, o - 3, 2)) : o <= 10 ? (ks(e, rs, e.bl_tree), _s(e, o - 3, 3)) : (ks(e, is, e.bl_tree), _s(e, o - 11, 7));
        o = 0, a = n, 0 === s ? (c = 138, u = 3) : n === s ? (c = 6, u = 3) : (c = 7, u = 4);
    }
}
Na(ls);
let Us = !1;
function Is(e) {
    Us || (!function() {
        let e, t, r, i, n;
        const a = Array(Xa + 1);
        for(r = 0, i = 0; i < Ha - 1; i++)for(fs[i] = r, e = 0; e < 1 << ns[i]; e++)ds[r++] = i;
        for(ds[r - 1] = i, n = 0, i = 0; i < 16; i++)for(ls[i] = n, e = 0; e < 1 << as[i]; e++)hs[n++] = i;
        for(n >>= 7; i < $a; i++)for(ls[i] = n << 7, e = 0; e < 1 << as[i] - 7; e++)hs[256 + n++] = i;
        for(t = 0; t <= Xa; t++)a[t] = 0;
        for(e = 0; e <= 143;)cs[2 * e + 1] = 8, e++, a[8]++;
        for(; e <= 255;)cs[2 * e + 1] = 9, e++, a[9]++;
        for(; e <= 279;)cs[2 * e + 1] = 7, e++, a[7]++;
        for(; e <= 287;)cs[2 * e + 1] = 8, e++, a[8]++;
        for(Ss(cs, Va + 1, a), e = 0; e < $a; e++)us[2 * e + 1] = 5, us[2 * e] = As(e, 5);
        ys = new ps(cs, ns, Ga + 1, Va, Xa), bs = new ps(us, as, 0, $a, Xa), ms = new ps([], ss, 0, Za, Ja);
    }(), Us = !0), e.l_desc = new gs(e.dyn_ltree, ys), e.d_desc = new gs(e.dyn_dtree, bs), e.bl_desc = new gs(e.bl_tree, ms), e.bi_buf = 0, e.bi_valid = 0, Es(e);
}
function Bs(e, t, r, i) {
    _s(e, (ja << 1) + (i ? 1 : 0), 3), function(e, t, r, i) {
        Ps(e), i && (vs(e, r), vs(e, ~r)), ga(e.pending_buf, e.window, t, r, e.pending), e.pending += r;
    }(e, t, r, !0);
}
function Ts(e) {
    _s(e, La << 1, 3), ks(e, es, cs), function(e) {
        16 === e.bi_valid ? (vs(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
    }(e);
}
function zs(e, t, r, i) {
    let n, a, s = 0;
    e.level > 0 ? (e.strm.data_type === Fa && (e.strm.data_type = function(e) {
        let t, r = 4093624447;
        for(t = 0; t <= 31; t++, r >>>= 1)if (1 & r && 0 !== e.dyn_ltree[2 * t]) return za;
        if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return qa;
        for(t = 32; t < Ga; t++)if (0 !== e.dyn_ltree[2 * t]) return qa;
        return za;
    }(e)), Ks(e, e.l_desc), Ks(e, e.d_desc), s = function(e) {
        let t;
        for(Ds(e, e.dyn_ltree, e.l_desc.max_code), Ds(e, e.dyn_dtree, e.d_desc.max_code), Ks(e, e.bl_desc), t = Za - 1; t >= 3 && 0 === e.bl_tree[2 * os[t] + 1]; t--);
        return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
    }(e), n = e.opt_len + 3 + 7 >>> 3, a = e.static_len + 3 + 7 >>> 3, a <= n && (n = a)) : n = a = r + 5, r + 4 <= n && -1 !== t ? Bs(e, t, r, i) : e.strategy === Ta || a === n ? (_s(e, (La << 1) + (i ? 1 : 0), 3), Cs(e, cs, us)) : (_s(e, (Wa << 1) + (i ? 1 : 0), 3), function(e, t, r, i) {
        let n;
        for(_s(e, t - 257, 5), _s(e, r - 1, 5), _s(e, i - 4, 4), n = 0; n < i; n++)_s(e, e.bl_tree[2 * os[n] + 1], 3);
        Rs(e, e.dyn_ltree, t - 1), Rs(e, e.dyn_dtree, r - 1);
    }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), Cs(e, e.dyn_ltree, e.dyn_dtree)), Es(e), i && Ps(e);
}
function qs(e, t, r) {
    return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[2 * (ds[r] + Ga + 1)]++, e.dyn_dtree[2 * ws(t)]++), e.last_lit === e.lit_bufsize - 1;
}
function Fs(e, t, r, i) {
    let n = 65535 & e | 0, a = e >>> 16 & 65535 | 0, s = 0;
    for(; 0 !== r;){
        s = r > 2e3 ? 2e3 : r, r -= s;
        do n = n + t[i++] | 0, a = a + n | 0;
        while (--s);
        n %= 65521, a %= 65521;
    }
    return n | a << 16 | 0;
}
const Os = function() {
    let e;
    const t = [];
    for(let r = 0; r < 256; r++){
        e = r;
        for(let t = 0; t < 8; t++)e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
        t[r] = e;
    }
    return t;
}();
function Ns(e, t, r, i) {
    const n = Os, a = i + r;
    e ^= -1;
    for(let r = i; r < a; r++)e = e >>> 8 ^ n[255 & (e ^ t[r])];
    return -1 ^ e;
}
var js = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
};
const Ls = 9, Ws = 3, Hs = 258, Gs = Hs + Ws + 1, Vs = 32, $s = 42, Zs = 69, Ys = 73, Xs = 91, Qs = 103, Js = 113, eo = 666, to = 1, ro = 2, io = 3, no = 4, ao = 3;
function so(e, t) {
    return e.msg = js[t], t;
}
function oo(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
}
function co(e) {
    let t = e.length;
    for(; --t >= 0;)e[t] = 0;
}
function uo(e) {
    const t = e.state;
    let r = t.pending;
    r > e.avail_out && (r = e.avail_out), 0 !== r && (ga(e.output, t.pending_buf, t.pending_out, r, e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0));
}
function ho(e, t) {
    zs(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, uo(e.strm);
}
function fo(e, t) {
    e.pending_buf[e.pending++] = t;
}
function lo(e, t) {
    e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
}
function po(e, t, r, i) {
    let n = e.avail_in;
    return n > i && (n = i), 0 === n ? 0 : (e.avail_in -= n, ga(t, e.input, e.next_in, n, r), 1 === e.state.wrap ? e.adler = Fs(e.adler, t, n, r) : 2 === e.state.wrap && (e.adler = Ns(e.adler, t, n, r)), e.next_in += n, e.total_in += n, n);
}
function yo(e, t) {
    let r, i, n = e.max_chain_length, a = e.strstart, s = e.prev_length, o = e.nice_match;
    const c = e.strstart > e.w_size - Gs ? e.strstart - (e.w_size - Gs) : 0, u = e.window, h = e.w_mask, d = e.prev, f = e.strstart + Hs;
    let l = u[a + s - 1], p = u[a + s];
    e.prev_length >= e.good_match && (n >>= 2), o > e.lookahead && (o = e.lookahead);
    do if (r = t, u[r + s] === p && u[r + s - 1] === l && u[r] === u[a] && u[++r] === u[a + 1]) {
        a += 2, r++;
        do ;
        while (u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && u[++a] === u[++r] && a < f);
        if (i = Hs - (f - a), a = f - Hs, i > s) {
            if (e.match_start = t, s = i, i >= o) break;
            l = u[a + s - 1], p = u[a + s];
        }
    }
    while ((t = d[t & h]) > c && 0 != --n);
    return s <= e.lookahead ? s : e.lookahead;
}
function bo(e) {
    const t = e.w_size;
    let r, i, n, a, s;
    do {
        if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= t + (t - Gs)) {
            ga(e.window, e.window, t, t, 0), e.match_start -= t, e.strstart -= t, e.block_start -= t, i = e.hash_size, r = i;
            do n = e.head[--r], e.head[r] = n >= t ? n - t : 0;
            while (--i);
            i = t, r = i;
            do n = e.prev[--r], e.prev[r] = n >= t ? n - t : 0;
            while (--i);
            a += t;
        }
        if (0 === e.strm.avail_in) break;
        if (i = po(e.strm, e.window, e.strstart + e.lookahead, a), e.lookahead += i, e.lookahead + e.insert >= Ws) for(s = e.strstart - e.insert, e.ins_h = e.window[s], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + Ws - 1]) & e.hash_mask, e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++, e.insert--, !(e.lookahead + e.insert < Ws)););
    }while (e.lookahead < Gs && 0 !== e.strm.avail_in);
}
function mo(e, t) {
    let r, i;
    for(;;){
        if (e.lookahead < Gs) {
            if (bo(e), e.lookahead < Gs && t === wa) return to;
            if (0 === e.lookahead) break;
        }
        if (r = 0, e.lookahead >= Ws && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Ws - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - Gs && (e.match_length = yo(e, r)), e.match_length >= Ws) {
            if (i = qs(e, e.strstart - e.match_start, e.match_length - Ws), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= Ws) {
                e.match_length--;
                do e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Ws - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
                while (0 != --e.match_length);
                e.strstart++;
            } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
        } else i = qs(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
        if (i && (ho(e, !1), 0 === e.strm.avail_out)) return to;
    }
    return e.insert = e.strstart < Ws - 1 ? e.strstart : Ws - 1, t === Aa ? (ho(e, !0), 0 === e.strm.avail_out ? io : no) : e.last_lit && (ho(e, !1), 0 === e.strm.avail_out) ? to : ro;
}
function go(e, t) {
    let r, i, n;
    for(;;){
        if (e.lookahead < Gs) {
            if (bo(e), e.lookahead < Gs && t === wa) return to;
            if (0 === e.lookahead) break;
        }
        if (r = 0, e.lookahead >= Ws && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Ws - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = Ws - 1, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - Gs && (e.match_length = yo(e, r), e.match_length <= 5 && (e.strategy === Ua || e.match_length === Ws && e.strstart - e.match_start > 4096) && (e.match_length = Ws - 1)), e.prev_length >= Ws && e.match_length <= e.prev_length) {
            n = e.strstart + e.lookahead - Ws, i = qs(e, e.strstart - 1 - e.prev_match, e.prev_length - Ws), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
            do ++e.strstart <= n && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + Ws - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
            while (0 != --e.prev_length);
            if (e.match_available = 0, e.match_length = Ws - 1, e.strstart++, i && (ho(e, !1), 0 === e.strm.avail_out)) return to;
        } else if (e.match_available) {
            if (i = qs(e, 0, e.window[e.strstart - 1]), i && ho(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return to;
        } else e.match_available = 1, e.strstart++, e.lookahead--;
    }
    return e.match_available && (i = qs(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < Ws - 1 ? e.strstart : Ws - 1, t === Aa ? (ho(e, !0), 0 === e.strm.avail_out ? io : no) : e.last_lit && (ho(e, !1), 0 === e.strm.avail_out) ? to : ro;
}
class wo {
    constructor(e, t, r, i, n){
        this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = i, this.func = n;
    }
}
const vo = [
    new wo(0, 0, 0, 0, function(e, t) {
        let r = 65535;
        for(r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;){
            if (e.lookahead <= 1) {
                if (bo(e), 0 === e.lookahead && t === wa) return to;
                if (0 === e.lookahead) break;
            }
            e.strstart += e.lookahead, e.lookahead = 0;
            const i = e.block_start + r;
            if ((0 === e.strstart || e.strstart >= i) && (e.lookahead = e.strstart - i, e.strstart = i, ho(e, !1), 0 === e.strm.avail_out)) return to;
            if (e.strstart - e.block_start >= e.w_size - Gs && (ho(e, !1), 0 === e.strm.avail_out)) return to;
        }
        return e.insert = 0, t === Aa ? (ho(e, !0), 0 === e.strm.avail_out ? io : no) : (e.strstart > e.block_start && (ho(e, !1), e.strm.avail_out), to);
    }),
    new wo(4, 4, 8, 4, mo),
    new wo(4, 5, 16, 8, mo),
    new wo(4, 6, 32, 32, mo),
    new wo(4, 4, 16, 16, go),
    new wo(8, 16, 32, 32, go),
    new wo(8, 16, 128, 128, go),
    new wo(8, 32, 128, 256, go),
    new wo(32, 128, 258, 1024, go),
    new wo(32, 258, 258, 4096, go)
];
class _o {
    constructor(){
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Oa, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new ya(1146), this.dyn_dtree = new ya(122), this.bl_tree = new ya(78), co(this.dyn_ltree), co(this.dyn_dtree), co(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new ya(16), this.heap = new ya(573), co(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new ya(573), co(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
    }
}
function ko(e) {
    const t = function(e) {
        let t;
        return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = Fa, t = e.state, t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? $s : Js, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = wa, Is(t), Pa) : so(e, Ca);
    }(e);
    return t === Pa && function(e) {
        e.window_size = 2 * e.w_size, co(e.head), e.max_lazy_match = vo[e.level].max_lazy, e.good_match = vo[e.level].good_length, e.nice_match = vo[e.level].nice_length, e.max_chain_length = vo[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = Ws - 1, e.match_available = 0, e.ins_h = 0;
    }(e.state), t;
}
function Ao(e, t) {
    let r, i, n, a;
    if (!e || !e.state || t > Sa || t < 0) return e ? so(e, Ca) : Ca;
    if (i = e.state, !e.output || !e.input && 0 !== e.avail_in || i.status === eo && t !== Aa) return so(e, 0 === e.avail_out ? Da : Ca);
    if (i.strm = e, r = i.last_flush, i.last_flush = t, i.status === $s) {
        if (2 === i.wrap) e.adler = 0, fo(i, 31), fo(i, 139), fo(i, 8), i.gzhead ? (fo(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), fo(i, 255 & i.gzhead.time), fo(i, i.gzhead.time >> 8 & 255), fo(i, i.gzhead.time >> 16 & 255), fo(i, i.gzhead.time >> 24 & 255), fo(i, 9 === i.level ? 2 : i.strategy >= Ia || i.level < 2 ? 4 : 0), fo(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (fo(i, 255 & i.gzhead.extra.length), fo(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (e.adler = Ns(e.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = Zs) : (fo(i, 0), fo(i, 0), fo(i, 0), fo(i, 0), fo(i, 0), fo(i, 9 === i.level ? 2 : i.strategy >= Ia || i.level < 2 ? 4 : 0), fo(i, ao), i.status = Js);
        else {
            let t = Oa + (i.w_bits - 8 << 4) << 8, r = -1;
            r = i.strategy >= Ia || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3, t |= r << 6, 0 !== i.strstart && (t |= Vs), t += 31 - t % 31, i.status = Js, lo(i, t), 0 !== i.strstart && (lo(i, e.adler >>> 16), lo(i, 65535 & e.adler)), e.adler = 1;
        }
    }
    if (i.status === Zs) {
        if (i.gzhead.extra) {
            for(n = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > n && (e.adler = Ns(e.adler, i.pending_buf, i.pending - n, n)), uo(e), n = i.pending, i.pending !== i.pending_buf_size));)fo(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
            i.gzhead.hcrc && i.pending > n && (e.adler = Ns(e.adler, i.pending_buf, i.pending - n, n)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = Ys);
        } else i.status = Ys;
    }
    if (i.status === Ys) {
        if (i.gzhead.name) {
            n = i.pending;
            do {
                if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (e.adler = Ns(e.adler, i.pending_buf, i.pending - n, n)), uo(e), n = i.pending, i.pending === i.pending_buf_size)) {
                    a = 1;
                    break;
                }
                a = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, fo(i, a);
            }while (0 !== a);
            i.gzhead.hcrc && i.pending > n && (e.adler = Ns(e.adler, i.pending_buf, i.pending - n, n)), 0 === a && (i.gzindex = 0, i.status = Xs);
        } else i.status = Xs;
    }
    if (i.status === Xs) {
        if (i.gzhead.comment) {
            n = i.pending;
            do {
                if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (e.adler = Ns(e.adler, i.pending_buf, i.pending - n, n)), uo(e), n = i.pending, i.pending === i.pending_buf_size)) {
                    a = 1;
                    break;
                }
                a = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, fo(i, a);
            }while (0 !== a);
            i.gzhead.hcrc && i.pending > n && (e.adler = Ns(e.adler, i.pending_buf, i.pending - n, n)), 0 === a && (i.status = Qs);
        } else i.status = Qs;
    }
    if (i.status === Qs && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && uo(e), i.pending + 2 <= i.pending_buf_size && (fo(i, 255 & e.adler), fo(i, e.adler >> 8 & 255), e.adler = 0, i.status = Js)) : i.status = Js), 0 !== i.pending) {
        if (uo(e), 0 === e.avail_out) return i.last_flush = -1, Pa;
    } else if (0 === e.avail_in && oo(t) <= oo(r) && t !== Aa) return so(e, Da);
    if (i.status === eo && 0 !== e.avail_in) return so(e, Da);
    if (0 !== e.avail_in || 0 !== i.lookahead || t !== wa && i.status !== eo) {
        var s = i.strategy === Ia ? function(e, t) {
            let r;
            for(;;){
                if (0 === e.lookahead && (bo(e), 0 === e.lookahead)) {
                    if (t === wa) return to;
                    break;
                }
                if (e.match_length = 0, r = qs(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (ho(e, !1), 0 === e.strm.avail_out)) return to;
            }
            return e.insert = 0, t === Aa ? (ho(e, !0), 0 === e.strm.avail_out ? io : no) : e.last_lit && (ho(e, !1), 0 === e.strm.avail_out) ? to : ro;
        }(i, t) : i.strategy === Ba ? function(e, t) {
            let r, i, n, a;
            const s = e.window;
            for(;;){
                if (e.lookahead <= Hs) {
                    if (bo(e), e.lookahead <= Hs && t === wa) return to;
                    if (0 === e.lookahead) break;
                }
                if (e.match_length = 0, e.lookahead >= Ws && e.strstart > 0 && (n = e.strstart - 1, i = s[n], i === s[++n] && i === s[++n] && i === s[++n])) {
                    a = e.strstart + Hs;
                    do ;
                    while (i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && n < a);
                    e.match_length = Hs - (a - n), e.match_length > e.lookahead && (e.match_length = e.lookahead);
                }
                if (e.match_length >= Ws ? (r = qs(e, 1, e.match_length - Ws), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = qs(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (ho(e, !1), 0 === e.strm.avail_out)) return to;
            }
            return e.insert = 0, t === Aa ? (ho(e, !0), 0 === e.strm.avail_out ? io : no) : e.last_lit && (ho(e, !1), 0 === e.strm.avail_out) ? to : ro;
        }(i, t) : vo[i.level].func(i, t);
        if (s !== io && s !== no || (i.status = eo), s === to || s === io) return 0 === e.avail_out && (i.last_flush = -1), Pa;
        if (s === ro && (t === va ? Ts(i) : t !== Sa && (Bs(i, 0, 0, !1), t === ka && (co(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), uo(e), 0 === e.avail_out)) return i.last_flush = -1, Pa;
    }
    return t !== Aa ? Pa : i.wrap <= 0 ? xa : (2 === i.wrap ? (fo(i, 255 & e.adler), fo(i, e.adler >> 8 & 255), fo(i, e.adler >> 16 & 255), fo(i, e.adler >> 24 & 255), fo(i, 255 & e.total_in), fo(i, e.total_in >> 8 & 255), fo(i, e.total_in >> 16 & 255), fo(i, e.total_in >> 24 & 255)) : (lo(i, e.adler >>> 16), lo(i, 65535 & e.adler)), uo(e), i.wrap > 0 && (i.wrap = -i.wrap), 0 !== i.pending ? Pa : xa);
}
try {
    String.fromCharCode.call(null, 0);
} catch (e) {}
try {
    String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e) {}
const So = new pa(256);
for(let e = 0; e < 256; e++)So[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
function Eo(e) {
    let t, r, i, n, a = 0;
    const s = e.length;
    for(i = 0; i < s; i++)t = e.charCodeAt(i), 55296 == (64512 & t) && i + 1 < s && (r = e.charCodeAt(i + 1), 56320 == (64512 & r) && (t = 65536 + (t - 55296 << 10) + (r - 56320), i++)), a += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
    const o = new pa(a);
    for(n = 0, i = 0; n < a; i++)t = e.charCodeAt(i), 55296 == (64512 & t) && i + 1 < s && (r = e.charCodeAt(i + 1), 56320 == (64512 & r) && (t = 65536 + (t - 55296 << 10) + (r - 56320), i++)), t < 128 ? o[n++] = t : t < 2048 ? (o[n++] = 192 | t >>> 6, o[n++] = 128 | 63 & t) : t < 65536 ? (o[n++] = 224 | t >>> 12, o[n++] = 128 | t >>> 6 & 63, o[n++] = 128 | 63 & t) : (o[n++] = 240 | t >>> 18, o[n++] = 128 | t >>> 12 & 63, o[n++] = 128 | t >>> 6 & 63, o[n++] = 128 | 63 & t);
    return o;
}
So[254] = So[254] = 1;
class Po {
    constructor(){
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    }
}
class xo {
    constructor(e){
        this.options = {
            level: Ra,
            method: Oa,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: 0,
            ...e || {}
        };
        const t = this.options;
        t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Po, this.strm.avail_out = 0;
        var r, i, n = function(e, t, r, i, n, a) {
            if (!e) return Ca;
            let s = 1;
            if (t === Ra && (t = 6), i < 0 ? (s = 0, i = -i) : i > 15 && (s = 2, i -= 16), n < 1 || n > Ls || r !== Oa || i < 8 || i > 15 || t < 0 || t > 9 || a < 0 || a > Ta) return so(e, Ca);
            8 === i && (i = 9);
            const o = new _o;
            return e.state = o, o.strm = e, o.wrap = s, o.gzhead = null, o.w_bits = i, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = n + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + Ws - 1) / Ws), o.window = new pa(2 * o.w_size), o.head = new ya(o.hash_size), o.prev = new ya(o.w_size), o.lit_bufsize = 1 << n + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new pa(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = t, o.strategy = a, o.method = r, ko(e);
        }(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
        if (n !== Pa) throw Error(js[n]);
        if (t.header && (r = this.strm, i = t.header, r && r.state && (2 !== r.state.wrap || (r.state.gzhead = i))), t.dictionary) {
            let e;
            if (e = "string" == typeof t.dictionary ? Eo(t.dictionary) : t.dictionary instanceof ArrayBuffer ? new Uint8Array(t.dictionary) : t.dictionary, n = function(e, t) {
                let r, i, n, a, s, o, c, u, h = t.length;
                if (!e || !e.state) return Ca;
                if (r = e.state, a = r.wrap, 2 === a || 1 === a && r.status !== $s || r.lookahead) return Ca;
                for(1 === a && (e.adler = Fs(e.adler, t, h, 0)), r.wrap = 0, h >= r.w_size && (0 === a && (co(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), u = new pa(r.w_size), ga(u, t, h - r.w_size, r.w_size, 0), t = u, h = r.w_size), s = e.avail_in, o = e.next_in, c = e.input, e.avail_in = h, e.next_in = 0, e.input = t, bo(r); r.lookahead >= Ws;){
                    i = r.strstart, n = r.lookahead - (Ws - 1);
                    do r.ins_h = (r.ins_h << r.hash_shift ^ r.window[i + Ws - 1]) & r.hash_mask, r.prev[i & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = i, i++;
                    while (--n);
                    r.strstart = i, r.lookahead = Ws - 1, bo(r);
                }
                return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = Ws - 1, r.match_available = 0, e.next_in = o, e.input = c, e.avail_in = s, r.wrap = a, Pa;
            }(this.strm, e), n !== Pa) throw Error(js[n]);
            this._dict_set = !0;
        }
    }
    push(e, t) {
        const { strm: r, options: { chunkSize: i } } = this;
        var n, a;
        if (this.ended) return !1;
        a = t === ~~t ? t : !0 === t ? Aa : wa, "string" == typeof e ? r.input = Eo(e) : e instanceof ArrayBuffer ? r.input = new Uint8Array(e) : r.input = e, r.next_in = 0, r.avail_in = r.input.length;
        do {
            if (0 === r.avail_out && (r.output = new pa(i), r.next_out = 0, r.avail_out = i), (n = Ao(r, a)) !== xa && n !== Pa) return this.onEnd(n), this.ended = !0, !1;
            0 !== r.avail_out && (0 !== r.avail_in || a !== Aa && a !== _a) || this.onData(da(r.output, r.next_out));
        }while ((r.avail_in > 0 || 0 === r.avail_out) && n !== xa);
        return a === Aa ? (n = function(e) {
            let t;
            return e && e.state ? (t = e.state.status, t !== $s && t !== Zs && t !== Ys && t !== Xs && t !== Qs && t !== Js && t !== eo ? so(e, Ca) : (e.state = null, t === Js ? so(e, Ka) : Pa)) : Ca;
        }(this.strm), this.onEnd(n), this.ended = !0, n === Pa) : a !== _a || (this.onEnd(Pa), r.avail_out = 0, !0);
    }
    onData(e) {
        this.chunks.push(e);
    }
    onEnd(e) {
        e === Pa && (this.result = ma(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
    }
}
const Mo = 30, Co = 12;
function Ko(e, t) {
    let r, i, n, a, s, o, c, u, h, d;
    const f = e.state;
    r = e.next_in;
    const l = e.input, p = r + (e.avail_in - 5);
    i = e.next_out;
    const y = e.output, b = i - (t - e.avail_out), m = i + (e.avail_out - 257), g = f.dmax, w = f.wsize, v = f.whave, _ = f.wnext, k = f.window;
    n = f.hold, a = f.bits;
    const A = f.lencode, S = f.distcode, E = (1 << f.lenbits) - 1, P = (1 << f.distbits) - 1;
    e: do {
        a < 15 && (n += l[r++] << a, a += 8, n += l[r++] << a, a += 8), s = A[n & E];
        t: for(;;){
            if (o = s >>> 24, n >>>= o, a -= o, o = s >>> 16 & 255, 0 === o) y[i++] = 65535 & s;
            else {
                if (!(16 & o)) {
                    if (0 == (64 & o)) {
                        s = A[(65535 & s) + (n & (1 << o) - 1)];
                        continue t;
                    }
                    if (32 & o) {
                        f.mode = Co;
                        break e;
                    }
                    e.msg = "invalid literal/length code", f.mode = Mo;
                    break e;
                }
                c = 65535 & s, o &= 15, o && (a < o && (n += l[r++] << a, a += 8), c += n & (1 << o) - 1, n >>>= o, a -= o), a < 15 && (n += l[r++] << a, a += 8, n += l[r++] << a, a += 8), s = S[n & P];
                r: for(;;){
                    if (o = s >>> 24, n >>>= o, a -= o, o = s >>> 16 & 255, !(16 & o)) {
                        if (0 == (64 & o)) {
                            s = S[(65535 & s) + (n & (1 << o) - 1)];
                            continue r;
                        }
                        e.msg = "invalid distance code", f.mode = Mo;
                        break e;
                    }
                    if (u = 65535 & s, o &= 15, a < o && (n += l[r++] << a, a += 8, a < o && (n += l[r++] << a, a += 8)), u += n & (1 << o) - 1, u > g) {
                        e.msg = "invalid distance too far back", f.mode = Mo;
                        break e;
                    }
                    if (n >>>= o, a -= o, o = i - b, u > o) {
                        if (o = u - o, o > v && f.sane) {
                            e.msg = "invalid distance too far back", f.mode = Mo;
                            break e;
                        }
                        if (h = 0, d = k, 0 === _) {
                            if (h += w - o, o < c) {
                                c -= o;
                                do y[i++] = k[h++];
                                while (--o);
                                h = i - u, d = y;
                            }
                        } else if (_ < o) {
                            if (h += w + _ - o, o -= _, o < c) {
                                c -= o;
                                do y[i++] = k[h++];
                                while (--o);
                                if (h = 0, _ < c) {
                                    o = _, c -= o;
                                    do y[i++] = k[h++];
                                    while (--o);
                                    h = i - u, d = y;
                                }
                            }
                        } else if (h += _ - o, o < c) {
                            c -= o;
                            do y[i++] = k[h++];
                            while (--o);
                            h = i - u, d = y;
                        }
                        for(; c > 2;)y[i++] = d[h++], y[i++] = d[h++], y[i++] = d[h++], c -= 3;
                        c && (y[i++] = d[h++], c > 1 && (y[i++] = d[h++]));
                    } else {
                        h = i - u;
                        do y[i++] = y[h++], y[i++] = y[h++], y[i++] = y[h++], c -= 3;
                        while (c > 2);
                        c && (y[i++] = y[h++], c > 1 && (y[i++] = y[h++]));
                    }
                    break;
                }
            }
            break;
        }
    }while (r < p && i < m);
    c = a >> 3, r -= c, a -= c << 3, n &= (1 << a) - 1, e.next_in = r, e.next_out = i, e.avail_in = r < p ? p - r + 5 : 5 - (r - p), e.avail_out = i < m ? m - i + 257 : 257 - (i - m), f.hold = n, f.bits = a;
}
const Do = 15, Ro = 852, Uo = 592, Io = 0, Bo = 1, To = 2, zo = [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
], qo = [
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
], Fo = [
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
], Oo = [
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
];
function No(e, t, r, i, n, a, s, o) {
    const c = o.bits;
    let u, h, d, f, l, p = 0, y = 0, b = 0, m = 0, g = 0, w = 0, v = 0, _ = 0, k = 0, A = 0, S = null, E = 0;
    const P = new ya(Do + 1), x = new ya(Do + 1);
    let M, C, K, D = null, R = 0;
    for(p = 0; p <= Do; p++)P[p] = 0;
    for(y = 0; y < i; y++)P[t[r + y]]++;
    for(g = c, m = Do; m >= 1 && 0 === P[m]; m--);
    if (g > m && (g = m), 0 === m) return n[a++] = 20971520, n[a++] = 20971520, o.bits = 1, 0;
    for(b = 1; b < m && 0 === P[b]; b++);
    for(g < b && (g = b), _ = 1, p = 1; p <= Do; p++)if (_ <<= 1, _ -= P[p], _ < 0) return -1;
    if (_ > 0 && (e === Io || 1 !== m)) return -1;
    for(x[1] = 0, p = 1; p < Do; p++)x[p + 1] = x[p] + P[p];
    for(y = 0; y < i; y++)0 !== t[r + y] && (s[x[t[r + y]]++] = y);
    e === Io ? (S = D = s, l = 19) : e === Bo ? (S = zo, E -= 257, D = qo, R -= 257, l = 256) : (S = Fo, D = Oo, l = -1), A = 0, y = 0, p = b, f = a, w = g, v = 0, d = -1, k = 1 << g;
    const U = k - 1;
    if (e === Bo && k > Ro || e === To && k > Uo) return 1;
    for(;;){
        M = p - v, s[y] < l ? (C = 0, K = s[y]) : s[y] > l ? (C = D[R + s[y]], K = S[E + s[y]]) : (C = 96, K = 0), u = 1 << p - v, h = 1 << w, b = h;
        do h -= u, n[f + (A >> v) + h] = M << 24 | C << 16 | K | 0;
        while (0 !== h);
        for(u = 1 << p - 1; A & u;)u >>= 1;
        if (0 !== u ? (A &= u - 1, A += u) : A = 0, y++, 0 == --P[p]) {
            if (p === m) break;
            p = t[r + s[y]];
        }
        if (p > g && (A & U) !== d) {
            for(0 === v && (v = g), f += b, w = p - v, _ = 1 << w; w + v < m && (_ -= P[w + v], !(_ <= 0));)w++, _ <<= 1;
            if (k += 1 << w, e === Bo && k > Ro || e === To && k > Uo) return 1;
            d = A & U, n[d] = g << 24 | w << 16 | f - a | 0;
        }
    }
    return 0 !== A && (n[f + A] = p - v << 24 | 4194304), o.bits = g, 0;
}
const jo = 0, Lo = 1, Wo = 2, Ho = 1, Go = 2, Vo = 3, $o = 4, Zo = 5, Yo = 6, Xo = 7, Qo = 8, Jo = 9, ec = 10, tc = 11, rc = 12, ic = 13, nc = 14, ac = 15, sc = 16, oc = 17, cc = 18, uc = 19, hc = 20, dc = 21, fc = 22, lc = 23, pc = 24, yc = 25, bc = 26, mc = 27, gc = 28, wc = 29, vc = 30, _c = 852, kc = 592;
function Ac(e) {
    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
}
class Sc {
    constructor(){
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new ya(320), this.work = new ya(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
    }
}
function Ec(e) {
    let t;
    return e && e.state ? (t = e.state, t.wsize = 0, t.whave = 0, t.wnext = 0, function(e) {
        let t;
        return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = Ho, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new ba(_c), t.distcode = t.distdyn = new ba(kc), t.sane = 1, t.back = -1, Pa) : Ca;
    }(e)) : Ca;
}
function Pc(e, t) {
    let r, i;
    return e ? (i = new Sc, e.state = i, i.window = null, r = function(e, t) {
        let r, i;
        return e && e.state ? (i = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? Ca : (null !== i.window && i.wbits !== t && (i.window = null), i.wrap = r, i.wbits = t, Ec(e))) : Ca;
    }(e, t), r !== Pa && (e.state = null), r) : Ca;
}
let xc, Mc, Cc = !0;
function Kc(e) {
    if (Cc) {
        let t;
        for(xc = new ba(512), Mc = new ba(32), t = 0; t < 144;)e.lens[t++] = 8;
        for(; t < 256;)e.lens[t++] = 9;
        for(; t < 280;)e.lens[t++] = 7;
        for(; t < 288;)e.lens[t++] = 8;
        for(No(Lo, e.lens, 0, 288, xc, 0, e.work, {
            bits: 9
        }), t = 0; t < 32;)e.lens[t++] = 5;
        No(Wo, e.lens, 0, 32, Mc, 0, e.work, {
            bits: 5
        }), Cc = !1;
    }
    e.lencode = xc, e.lenbits = 9, e.distcode = Mc, e.distbits = 5;
}
function Dc(e, t, r, i) {
    let n;
    const a = e.state;
    return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new pa(a.wsize)), i >= a.wsize ? (ga(a.window, t, r - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : (n = a.wsize - a.wnext, n > i && (n = i), ga(a.window, t, r - i, n, a.wnext), (i -= n) ? (ga(a.window, t, r - i, i, 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += n, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += n))), 0;
}
function Rc(e, t) {
    let r, i, n, a, s, o, c, u, h, d, f, l, p, y, b, m, g, w, v, _, k, A, S, E, P = 0, x = new pa(4);
    const M = [
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15
    ];
    if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return Ca;
    r = e.state, r.mode === rc && (r.mode = ic), s = e.next_out, n = e.output, c = e.avail_out, a = e.next_in, i = e.input, o = e.avail_in, u = r.hold, h = r.bits, d = o, f = c, A = Pa;
    e: for(;;)switch(r.mode){
        case Ho:
            if (0 === r.wrap) {
                r.mode = ic;
                break;
            }
            for(; h < 16;){
                if (0 === o) break e;
                o--, u += i[a++] << h, h += 8;
            }
            if (2 & r.wrap && 35615 === u) {
                r.check = 0, x[0] = 255 & u, x[1] = u >>> 8 & 255, r.check = Ns(r.check, x, 2, 0), u = 0, h = 0, r.mode = Go;
                break;
            }
            if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
                e.msg = "incorrect header check", r.mode = vc;
                break;
            }
            if ((15 & u) !== Oa) {
                e.msg = "unknown compression method", r.mode = vc;
                break;
            }
            if (u >>>= 4, h -= 4, k = 8 + (15 & u), 0 === r.wbits) r.wbits = k;
            else if (k > r.wbits) {
                e.msg = "invalid window size", r.mode = vc;
                break;
            }
            r.dmax = 1 << k, e.adler = r.check = 1, r.mode = 512 & u ? ec : rc, u = 0, h = 0;
            break;
        case Go:
            for(; h < 16;){
                if (0 === o) break e;
                o--, u += i[a++] << h, h += 8;
            }
            if (r.flags = u, (255 & r.flags) !== Oa) {
                e.msg = "unknown compression method", r.mode = vc;
                break;
            }
            if (57344 & r.flags) {
                e.msg = "unknown header flags set", r.mode = vc;
                break;
            }
            r.head && (r.head.text = u >> 8 & 1), 512 & r.flags && (x[0] = 255 & u, x[1] = u >>> 8 & 255, r.check = Ns(r.check, x, 2, 0)), u = 0, h = 0, r.mode = Vo;
        case Vo:
            for(; h < 32;){
                if (0 === o) break e;
                o--, u += i[a++] << h, h += 8;
            }
            r.head && (r.head.time = u), 512 & r.flags && (x[0] = 255 & u, x[1] = u >>> 8 & 255, x[2] = u >>> 16 & 255, x[3] = u >>> 24 & 255, r.check = Ns(r.check, x, 4, 0)), u = 0, h = 0, r.mode = $o;
        case $o:
            for(; h < 16;){
                if (0 === o) break e;
                o--, u += i[a++] << h, h += 8;
            }
            r.head && (r.head.xflags = 255 & u, r.head.os = u >> 8), 512 & r.flags && (x[0] = 255 & u, x[1] = u >>> 8 & 255, r.check = Ns(r.check, x, 2, 0)), u = 0, h = 0, r.mode = Zo;
        case Zo:
            if (1024 & r.flags) {
                for(; h < 16;){
                    if (0 === o) break e;
                    o--, u += i[a++] << h, h += 8;
                }
                r.length = u, r.head && (r.head.extra_len = u), 512 & r.flags && (x[0] = 255 & u, x[1] = u >>> 8 & 255, r.check = Ns(r.check, x, 2, 0)), u = 0, h = 0;
            } else r.head && (r.head.extra = null);
            r.mode = Yo;
        case Yo:
            if (1024 & r.flags && (l = r.length, l > o && (l = o), l && (r.head && (k = r.head.extra_len - r.length, r.head.extra || (r.head.extra = Array(r.head.extra_len)), ga(r.head.extra, i, a, l, k)), 512 & r.flags && (r.check = Ns(r.check, i, l, a)), o -= l, a += l, r.length -= l), r.length)) break e;
            r.length = 0, r.mode = Xo;
        case Xo:
            if (2048 & r.flags) {
                if (0 === o) break e;
                l = 0;
                do k = i[a + l++], r.head && k && r.length < 65536 && (r.head.name += String.fromCharCode(k));
                while (k && l < o);
                if (512 & r.flags && (r.check = Ns(r.check, i, l, a)), o -= l, a += l, k) break e;
            } else r.head && (r.head.name = null);
            r.length = 0, r.mode = Qo;
        case Qo:
            if (4096 & r.flags) {
                if (0 === o) break e;
                l = 0;
                do k = i[a + l++], r.head && k && r.length < 65536 && (r.head.comment += String.fromCharCode(k));
                while (k && l < o);
                if (512 & r.flags && (r.check = Ns(r.check, i, l, a)), o -= l, a += l, k) break e;
            } else r.head && (r.head.comment = null);
            r.mode = Jo;
        case Jo:
            if (512 & r.flags) {
                for(; h < 16;){
                    if (0 === o) break e;
                    o--, u += i[a++] << h, h += 8;
                }
                if (u !== (65535 & r.check)) {
                    e.msg = "header crc mismatch", r.mode = vc;
                    break;
                }
                u = 0, h = 0;
            }
            r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = rc;
            break;
        case ec:
            for(; h < 32;){
                if (0 === o) break e;
                o--, u += i[a++] << h, h += 8;
            }
            e.adler = r.check = Ac(u), u = 0, h = 0, r.mode = tc;
        case tc:
            if (0 === r.havedict) return e.next_out = s, e.avail_out = c, e.next_in = a, e.avail_in = o, r.hold = u, r.bits = h, Ma;
            e.adler = r.check = 1, r.mode = rc;
        case rc:
            if (t === Sa || t === Ea) break e;
        case ic:
            if (r.last) {
                u >>>= 7 & h, h -= 7 & h, r.mode = mc;
                break;
            }
            for(; h < 3;){
                if (0 === o) break e;
                o--, u += i[a++] << h, h += 8;
            }
            switch(r.last = 1 & u, u >>>= 1, h -= 1, 3 & u){
                case 0:
                    r.mode = nc;
                    break;
                case 1:
                    if (Kc(r), r.mode = hc, t === Ea) {
                        u >>>= 2, h -= 2;
                        break e;
                    }
                    break;
                case 2:
                    r.mode = oc;
                    break;
                case 3:
                    e.msg = "invalid block type", r.mode = vc;
            }
            u >>>= 2, h -= 2;
            break;
        case nc:
            for(u >>>= 7 & h, h -= 7 & h; h < 32;){
                if (0 === o) break e;
                o--, u += i[a++] << h, h += 8;
            }
            if ((65535 & u) != (u >>> 16 ^ 65535)) {
                e.msg = "invalid stored block lengths", r.mode = vc;
                break;
            }
            if (r.length = 65535 & u, u = 0, h = 0, r.mode = ac, t === Ea) break e;
        case ac:
            r.mode = sc;
        case sc:
            if (l = r.length, l) {
                if (l > o && (l = o), l > c && (l = c), 0 === l) break e;
                ga(n, i, a, l, s), o -= l, a += l, c -= l, s += l, r.length -= l;
                break;
            }
            r.mode = rc;
            break;
        case oc:
            for(; h < 14;){
                if (0 === o) break e;
                o--, u += i[a++] << h, h += 8;
            }
            if (r.nlen = 257 + (31 & u), u >>>= 5, h -= 5, r.ndist = 1 + (31 & u), u >>>= 5, h -= 5, r.ncode = 4 + (15 & u), u >>>= 4, h -= 4, r.nlen > 286 || r.ndist > 30) {
                e.msg = "too many length or distance symbols", r.mode = vc;
                break;
            }
            r.have = 0, r.mode = cc;
        case cc:
            for(; r.have < r.ncode;){
                for(; h < 3;){
                    if (0 === o) break e;
                    o--, u += i[a++] << h, h += 8;
                }
                r.lens[M[r.have++]] = 7 & u, u >>>= 3, h -= 3;
            }
            for(; r.have < 19;)r.lens[M[r.have++]] = 0;
            if (r.lencode = r.lendyn, r.lenbits = 7, S = {
                bits: r.lenbits
            }, A = No(jo, r.lens, 0, 19, r.lencode, 0, r.work, S), r.lenbits = S.bits, A) {
                e.msg = "invalid code lengths set", r.mode = vc;
                break;
            }
            r.have = 0, r.mode = uc;
        case uc:
            for(; r.have < r.nlen + r.ndist;){
                for(; P = r.lencode[u & (1 << r.lenbits) - 1], b = P >>> 24, m = P >>> 16 & 255, g = 65535 & P, !(b <= h);){
                    if (0 === o) break e;
                    o--, u += i[a++] << h, h += 8;
                }
                if (g < 16) u >>>= b, h -= b, r.lens[r.have++] = g;
                else {
                    if (16 === g) {
                        for(E = b + 2; h < E;){
                            if (0 === o) break e;
                            o--, u += i[a++] << h, h += 8;
                        }
                        if (u >>>= b, h -= b, 0 === r.have) {
                            e.msg = "invalid bit length repeat", r.mode = vc;
                            break;
                        }
                        k = r.lens[r.have - 1], l = 3 + (3 & u), u >>>= 2, h -= 2;
                    } else if (17 === g) {
                        for(E = b + 3; h < E;){
                            if (0 === o) break e;
                            o--, u += i[a++] << h, h += 8;
                        }
                        u >>>= b, h -= b, k = 0, l = 3 + (7 & u), u >>>= 3, h -= 3;
                    } else {
                        for(E = b + 7; h < E;){
                            if (0 === o) break e;
                            o--, u += i[a++] << h, h += 8;
                        }
                        u >>>= b, h -= b, k = 0, l = 11 + (127 & u), u >>>= 7, h -= 7;
                    }
                    if (r.have + l > r.nlen + r.ndist) {
                        e.msg = "invalid bit length repeat", r.mode = vc;
                        break;
                    }
                    for(; l--;)r.lens[r.have++] = k;
                }
            }
            if (r.mode === vc) break;
            if (0 === r.lens[256]) {
                e.msg = "invalid code -- missing end-of-block", r.mode = vc;
                break;
            }
            if (r.lenbits = 9, S = {
                bits: r.lenbits
            }, A = No(Lo, r.lens, 0, r.nlen, r.lencode, 0, r.work, S), r.lenbits = S.bits, A) {
                e.msg = "invalid literal/lengths set", r.mode = vc;
                break;
            }
            if (r.distbits = 6, r.distcode = r.distdyn, S = {
                bits: r.distbits
            }, A = No(Wo, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S), r.distbits = S.bits, A) {
                e.msg = "invalid distances set", r.mode = vc;
                break;
            }
            if (r.mode = hc, t === Ea) break e;
        case hc:
            r.mode = dc;
        case dc:
            if (o >= 6 && c >= 258) {
                e.next_out = s, e.avail_out = c, e.next_in = a, e.avail_in = o, r.hold = u, r.bits = h, Ko(e, f), s = e.next_out, n = e.output, c = e.avail_out, a = e.next_in, i = e.input, o = e.avail_in, u = r.hold, h = r.bits, r.mode === rc && (r.back = -1);
                break;
            }
            for(r.back = 0; P = r.lencode[u & (1 << r.lenbits) - 1], b = P >>> 24, m = P >>> 16 & 255, g = 65535 & P, !(b <= h);){
                if (0 === o) break e;
                o--, u += i[a++] << h, h += 8;
            }
            if (m && 0 == (240 & m)) {
                for(w = b, v = m, _ = g; P = r.lencode[_ + ((u & (1 << w + v) - 1) >> w)], b = P >>> 24, m = P >>> 16 & 255, g = 65535 & P, !(w + b <= h);){
                    if (0 === o) break e;
                    o--, u += i[a++] << h, h += 8;
                }
                u >>>= w, h -= w, r.back += w;
            }
            if (u >>>= b, h -= b, r.back += b, r.length = g, 0 === m) {
                r.mode = bc;
                break;
            }
            if (32 & m) {
                r.back = -1, r.mode = rc;
                break;
            }
            if (64 & m) {
                e.msg = "invalid literal/length code", r.mode = vc;
                break;
            }
            r.extra = 15 & m, r.mode = fc;
        case fc:
            if (r.extra) {
                for(E = r.extra; h < E;){
                    if (0 === o) break e;
                    o--, u += i[a++] << h, h += 8;
                }
                r.length += u & (1 << r.extra) - 1, u >>>= r.extra, h -= r.extra, r.back += r.extra;
            }
            r.was = r.length, r.mode = lc;
        case lc:
            for(; P = r.distcode[u & (1 << r.distbits) - 1], b = P >>> 24, m = P >>> 16 & 255, g = 65535 & P, !(b <= h);){
                if (0 === o) break e;
                o--, u += i[a++] << h, h += 8;
            }
            if (0 == (240 & m)) {
                for(w = b, v = m, _ = g; P = r.distcode[_ + ((u & (1 << w + v) - 1) >> w)], b = P >>> 24, m = P >>> 16 & 255, g = 65535 & P, !(w + b <= h);){
                    if (0 === o) break e;
                    o--, u += i[a++] << h, h += 8;
                }
                u >>>= w, h -= w, r.back += w;
            }
            if (u >>>= b, h -= b, r.back += b, 64 & m) {
                e.msg = "invalid distance code", r.mode = vc;
                break;
            }
            r.offset = g, r.extra = 15 & m, r.mode = pc;
        case pc:
            if (r.extra) {
                for(E = r.extra; h < E;){
                    if (0 === o) break e;
                    o--, u += i[a++] << h, h += 8;
                }
                r.offset += u & (1 << r.extra) - 1, u >>>= r.extra, h -= r.extra, r.back += r.extra;
            }
            if (r.offset > r.dmax) {
                e.msg = "invalid distance too far back", r.mode = vc;
                break;
            }
            r.mode = yc;
        case yc:
            if (0 === c) break e;
            if (l = f - c, r.offset > l) {
                if (l = r.offset - l, l > r.whave && r.sane) {
                    e.msg = "invalid distance too far back", r.mode = vc;
                    break;
                }
                l > r.wnext ? (l -= r.wnext, p = r.wsize - l) : p = r.wnext - l, l > r.length && (l = r.length), y = r.window;
            } else y = n, p = s - r.offset, l = r.length;
            l > c && (l = c), c -= l, r.length -= l;
            do n[s++] = y[p++];
            while (--l);
            0 === r.length && (r.mode = dc);
            break;
        case bc:
            if (0 === c) break e;
            n[s++] = r.length, c--, r.mode = dc;
            break;
        case mc:
            if (r.wrap) {
                for(; h < 32;){
                    if (0 === o) break e;
                    o--, u |= i[a++] << h, h += 8;
                }
                if (f -= c, e.total_out += f, r.total += f, f && (e.adler = r.check = r.flags ? Ns(r.check, n, f, s - f) : Fs(r.check, n, f, s - f)), f = c, (r.flags ? u : Ac(u)) !== r.check) {
                    e.msg = "incorrect data check", r.mode = vc;
                    break;
                }
                u = 0, h = 0;
            }
            r.mode = gc;
        case gc:
            if (r.wrap && r.flags) {
                for(; h < 32;){
                    if (0 === o) break e;
                    o--, u += i[a++] << h, h += 8;
                }
                if (u !== (4294967295 & r.total)) {
                    e.msg = "incorrect length check", r.mode = vc;
                    break;
                }
                u = 0, h = 0;
            }
            r.mode = wc;
        case wc:
            A = xa;
            break e;
        case vc:
            A = Ka;
            break e;
        default:
            return Ca;
    }
    return e.next_out = s, e.avail_out = c, e.next_in = a, e.avail_in = o, r.hold = u, r.bits = h, (r.wsize || f !== e.avail_out && r.mode < vc && (r.mode < mc || t !== Aa)) && Dc(e, e.output, e.next_out, f - e.avail_out), d -= e.avail_in, f -= e.avail_out, e.total_in += d, e.total_out += f, r.total += f, r.wrap && f && (e.adler = r.check = r.flags ? Ns(r.check, n, f, e.next_out - f) : Fs(r.check, n, f, e.next_out - f)), e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === rc ? 128 : 0) + (r.mode === hc || r.mode === ac ? 256 : 0), (0 === d && 0 === f || t === Aa) && A === Pa && (A = Da), A;
}
function Uc(e, t) {
    const r = t.length;
    let i, n;
    return e && e.state ? (i = e.state, 0 !== i.wrap && i.mode !== tc ? Ca : i.mode === tc && (n = 1, n = Fs(n, t, r, 0), n !== i.check) ? Ka : (Dc(e, t, r, r), i.havedict = 1, Pa)) : Ca;
}
class Ic {
    constructor(){
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
    }
}
class Bc {
    constructor(e){
        this.options = {
            chunkSize: 16384,
            windowBits: 0,
            ...e || {}
        };
        const t = this.options;
        t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Po, this.strm.avail_out = 0;
        let r = Pc(this.strm, t.windowBits);
        if (r !== Pa) throw Error(js[r]);
        if (this.header = new Ic, function(e, t) {
            let r;
            e && e.state && (r = e.state, 0 == (2 & r.wrap) || (r.head = t, t.done = !1));
        }(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = Eo(t.dictionary) : t.dictionary instanceof ArrayBuffer && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (r = Uc(this.strm, t.dictionary), r !== Pa))) throw Error(js[r]);
    }
    push(e, t) {
        const { strm: r, options: { chunkSize: i, dictionary: n } } = this;
        let a, s, o = !1;
        if (this.ended) return !1;
        s = t === ~~t ? t : !0 === t ? Aa : wa, "string" == typeof e ? r.input = function(e) {
            const t = new pa(e.length);
            for(let r = 0, i = t.length; r < i; r++)t[r] = e.charCodeAt(r);
            return t;
        }(e) : e instanceof ArrayBuffer ? r.input = new Uint8Array(e) : r.input = e, r.next_in = 0, r.avail_in = r.input.length;
        do {
            if (0 === r.avail_out && (r.output = new pa(i), r.next_out = 0, r.avail_out = i), a = Rc(r, wa), a === Ma && n && (a = Uc(this.strm, n)), a === Da && !0 === o && (a = Pa, o = !1), a !== xa && a !== Pa) return this.onEnd(a), this.ended = !0, !1;
            r.next_out && (0 !== r.avail_out && a !== xa && (0 !== r.avail_in || s !== Aa && s !== _a) || this.onData(da(r.output, r.next_out))), 0 === r.avail_in && 0 === r.avail_out && (o = !0);
        }while ((r.avail_in > 0 || 0 === r.avail_out) && a !== xa);
        return a === xa && (s = Aa), s === Aa ? (a = function(e) {
            if (!e || !e.state) return Ca;
            const t = e.state;
            return t.window && (t.window = null), e.state = null, Pa;
        }(this.strm), this.onEnd(a), this.ended = !0, a === Pa) : s !== _a || (this.onEnd(Pa), r.avail_out = 0, !0);
    }
    onData(e) {
        this.chunks.push(e);
    }
    onEnd(e) {
        e === Pa && (this.result = ma(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
    }
}
var Tc = [
    0,
    1,
    3,
    7,
    15,
    31,
    63,
    127,
    255
], zc = function(e) {
    this.stream = e, this.bitOffset = 0, this.curByte = 0, this.hasByte = !1;
};
zc.prototype._ensureByte = function() {
    this.hasByte || (this.curByte = this.stream.readByte(), this.hasByte = !0);
}, zc.prototype.read = function(e) {
    for(var t = 0; e > 0;){
        this._ensureByte();
        var r = 8 - this.bitOffset;
        if (e >= r) t <<= r, t |= Tc[r] & this.curByte, this.hasByte = !1, this.bitOffset = 0, e -= r;
        else {
            t <<= e;
            var i = r - e;
            t |= (this.curByte & Tc[e] << i) >> i, this.bitOffset += e, e = 0;
        }
    }
    return t;
}, zc.prototype.seek = function(e) {
    var t = e % 8, r = (e - t) / 8;
    this.bitOffset = t, this.stream.seek(r), this.hasByte = !1;
}, zc.prototype.pi = function() {
    var e, t = new Uint8Array(6);
    for(e = 0; e < t.length; e++)t[e] = this.read(8);
    return function(e) {
        return Array.prototype.map.call(e, (e)=>("00" + e.toString(16)).slice(-2)).join("");
    }(t);
};
var qc = zc, Fc = function() {};
Fc.prototype.readByte = function() {
    throw Error("abstract method readByte() not implemented");
}, Fc.prototype.read = function(e, t, r) {
    for(var i = 0; i < r;){
        var n = this.readByte();
        if (n < 0) return 0 === i ? -1 : i;
        e[t++] = n, i++;
    }
    return i;
}, Fc.prototype.seek = function(e) {
    throw Error("abstract method seek() not implemented");
}, Fc.prototype.writeByte = function(e) {
    throw Error("abstract method readByte() not implemented");
}, Fc.prototype.write = function(e, t, r) {
    var i;
    for(i = 0; i < r; i++)this.writeByte(e[t++]);
    return r;
}, Fc.prototype.flush = function() {};
var Oc, Nc = Fc, jc = (Oc = new Uint32Array([
    0,
    79764919,
    159529838,
    222504665,
    319059676,
    398814059,
    445009330,
    507990021,
    638119352,
    583659535,
    797628118,
    726387553,
    890018660,
    835552979,
    1015980042,
    944750013,
    1276238704,
    1221641927,
    1167319070,
    1095957929,
    1595256236,
    1540665371,
    1452775106,
    1381403509,
    1780037320,
    1859660671,
    1671105958,
    1733955601,
    2031960084,
    2111593891,
    1889500026,
    1952343757,
    2552477408,
    2632100695,
    2443283854,
    2506133561,
    2334638140,
    2414271883,
    2191915858,
    2254759653,
    3190512472,
    3135915759,
    3081330742,
    3009969537,
    2905550212,
    2850959411,
    2762807018,
    2691435357,
    3560074640,
    3505614887,
    3719321342,
    3648080713,
    3342211916,
    3287746299,
    3467911202,
    3396681109,
    4063920168,
    4143685023,
    4223187782,
    4286162673,
    3779000052,
    3858754371,
    3904687514,
    3967668269,
    881225847,
    809987520,
    1023691545,
    969234094,
    662832811,
    591600412,
    771767749,
    717299826,
    311336399,
    374308984,
    453813921,
    533576470,
    25881363,
    88864420,
    134795389,
    214552010,
    2023205639,
    2086057648,
    1897238633,
    1976864222,
    1804852699,
    1867694188,
    1645340341,
    1724971778,
    1587496639,
    1516133128,
    1461550545,
    1406951526,
    1302016099,
    1230646740,
    1142491917,
    1087903418,
    2896545431,
    2825181984,
    2770861561,
    2716262478,
    3215044683,
    3143675388,
    3055782693,
    3001194130,
    2326604591,
    2389456536,
    2200899649,
    2280525302,
    2578013683,
    2640855108,
    2418763421,
    2498394922,
    3769900519,
    3832873040,
    3912640137,
    3992402750,
    4088425275,
    4151408268,
    4197601365,
    4277358050,
    3334271071,
    3263032808,
    3476998961,
    3422541446,
    3585640067,
    3514407732,
    3694837229,
    3640369242,
    1762451694,
    1842216281,
    1619975040,
    1682949687,
    2047383090,
    2127137669,
    1938468188,
    2001449195,
    1325665622,
    1271206113,
    1183200824,
    1111960463,
    1543535498,
    1489069629,
    1434599652,
    1363369299,
    622672798,
    568075817,
    748617968,
    677256519,
    907627842,
    853037301,
    1067152940,
    995781531,
    51762726,
    131386257,
    177728840,
    240578815,
    269590778,
    349224269,
    429104020,
    491947555,
    4046411278,
    4126034873,
    4172115296,
    4234965207,
    3794477266,
    3874110821,
    3953728444,
    4016571915,
    3609705398,
    3555108353,
    3735388376,
    3664026991,
    3290680682,
    3236090077,
    3449943556,
    3378572211,
    3174993278,
    3120533705,
    3032266256,
    2961025959,
    2923101090,
    2868635157,
    2813903052,
    2742672763,
    2604032198,
    2683796849,
    2461293480,
    2524268063,
    2284983834,
    2364738477,
    2175806836,
    2238787779,
    1569362073,
    1498123566,
    1409854455,
    1355396672,
    1317987909,
    1246755826,
    1192025387,
    1137557660,
    2072149281,
    2135122070,
    1912620623,
    1992383480,
    1753615357,
    1816598090,
    1627664531,
    1707420964,
    295390185,
    358241886,
    404320391,
    483945776,
    43990325,
    106832002,
    186451547,
    266083308,
    932423249,
    861060070,
    1041341759,
    986742920,
    613929101,
    542559546,
    756411363,
    701822548,
    3316196985,
    3244833742,
    3425377559,
    3370778784,
    3601682597,
    3530312978,
    3744426955,
    3689838204,
    3819031489,
    3881883254,
    3928223919,
    4007849240,
    4037393693,
    4100235434,
    4180117107,
    4259748804,
    2310601993,
    2373574846,
    2151335527,
    2231098320,
    2596047829,
    2659030626,
    2470359227,
    2550115596,
    2947551409,
    2876312838,
    2788305887,
    2733848168,
    3165939309,
    3094707162,
    3040238851,
    2985771188
]), function() {
    var e = 4294967295;
    this.getCRC = function() {
        return ~e >>> 0;
    }, this.updateCRC = function(t) {
        e = e << 8 ^ Oc[255 & (e >>> 24 ^ t)];
    }, this.updateCRCRun = function(t, r) {
        for(; r-- > 0;)e = e << 8 ^ Oc[255 & (e >>> 24 ^ t)];
    };
}), Lc = function(e, t) {
    var r, i = e[t];
    for(r = t; r > 0; r--)e[r] = e[r - 1];
    return e[0] = i, i;
}, Wc = {
    OK: 0,
    LAST_BLOCK: -1,
    NOT_BZIP_DATA: -2,
    UNEXPECTED_INPUT_EOF: -3,
    UNEXPECTED_OUTPUT_EOF: -4,
    DATA_ERROR: -5,
    OUT_OF_MEMORY: -6,
    OBSOLETE_INPUT: -7,
    END_OF_BLOCK: -8
}, Hc = {};
Hc[Wc.LAST_BLOCK] = "Bad file checksum", Hc[Wc.NOT_BZIP_DATA] = "Not bzip data", Hc[Wc.UNEXPECTED_INPUT_EOF] = "Unexpected input EOF", Hc[Wc.UNEXPECTED_OUTPUT_EOF] = "Unexpected output EOF", Hc[Wc.DATA_ERROR] = "Data error", Hc[Wc.OUT_OF_MEMORY] = "Out of memory", Hc[Wc.OBSOLETE_INPUT] = "Obsolete (pre 0.9.5) bzip format not supported.";
var Gc = function(e, t) {
    var r = Hc[e] || "unknown error";
    t && (r += ": " + t);
    var i = new TypeError(r);
    throw i.errorCode = e, i;
}, Vc = function(e, t) {
    this.writePos = this.writeCurrent = this.writeCount = 0, this._start_bunzip(e, t);
};
Vc.prototype._init_block = function() {
    return this._get_next_block() ? (this.blockCRC = new jc, !0) : (this.writeCount = -1, !1);
}, Vc.prototype._start_bunzip = function(e, t) {
    var r = new Uint8Array(4);
    4 === e.read(r, 0, 4) && "BZh" === String.fromCharCode(r[0], r[1], r[2]) || Gc(Wc.NOT_BZIP_DATA, "bad magic");
    var i = r[3] - 48;
    (i < 1 || i > 9) && Gc(Wc.NOT_BZIP_DATA, "level out of range"), this.reader = new qc(e), this.dbufSize = 1e5 * i, this.nextoutput = 0, this.outputStream = t, this.streamCRC = 0;
}, Vc.prototype._get_next_block = function() {
    var e, t, r, i = this.reader, n = i.pi();
    if ("177245385090" === n) return !1;
    "314159265359" !== n && Gc(Wc.NOT_BZIP_DATA), this.targetBlockCRC = i.read(32) >>> 0, this.streamCRC = (this.targetBlockCRC ^ (this.streamCRC << 1 | this.streamCRC >>> 31)) >>> 0, i.read(1) && Gc(Wc.OBSOLETE_INPUT);
    var a = i.read(24);
    a > this.dbufSize && Gc(Wc.DATA_ERROR, "initial position out of bounds");
    var s = i.read(16), o = new Uint8Array(256), c = 0;
    for(e = 0; e < 16; e++)if (s & 1 << 15 - e) {
        var u = 16 * e;
        for(r = i.read(16), t = 0; t < 16; t++)r & 1 << 15 - t && (o[c++] = u + t);
    }
    var h = i.read(3);
    (h < 2 || h > 6) && Gc(Wc.DATA_ERROR);
    var d = i.read(15);
    0 === d && Gc(Wc.DATA_ERROR);
    var f = new Uint8Array(256);
    for(e = 0; e < h; e++)f[e] = e;
    var l = new Uint8Array(d);
    for(e = 0; e < d; e++){
        for(t = 0; i.read(1); t++)t >= h && Gc(Wc.DATA_ERROR);
        l[e] = Lc(f, t);
    }
    var p, y = c + 2, b = [];
    for(t = 0; t < h; t++){
        var m, g, w = new Uint8Array(y), v = new Uint16Array(21);
        for(s = i.read(5), e = 0; e < y; e++){
            for(; (s < 1 || s > 20) && Gc(Wc.DATA_ERROR), i.read(1);)i.read(1) ? s-- : s++;
            w[e] = s;
        }
        for(m = g = w[0], e = 1; e < y; e++)w[e] > g ? g = w[e] : w[e] < m && (m = w[e]);
        p = {}, b.push(p), p.permute = new Uint16Array(258), p.limit = new Uint32Array(22), p.base = new Uint32Array(21), p.minLen = m, p.maxLen = g;
        var _ = 0;
        for(e = m; e <= g; e++)for(v[e] = p.limit[e] = 0, s = 0; s < y; s++)w[s] === e && (p.permute[_++] = s);
        for(e = 0; e < y; e++)v[w[e]]++;
        for(_ = s = 0, e = m; e < g; e++)_ += v[e], p.limit[e] = _ - 1, _ <<= 1, s += v[e], p.base[e + 1] = _ - s;
        p.limit[g + 1] = Number.MAX_VALUE, p.limit[g] = _ + v[g] - 1, p.base[m] = 0;
    }
    var k = new Uint32Array(256);
    for(e = 0; e < 256; e++)f[e] = e;
    var A, S = 0, E = 0, P = 0, x = this.dbuf = new Uint32Array(this.dbufSize);
    for(y = 0;;){
        for(y-- || (y = 49, P >= d && Gc(Wc.DATA_ERROR), p = b[l[P++]]), e = p.minLen, t = i.read(e); e > p.maxLen && Gc(Wc.DATA_ERROR), !(t <= p.limit[e]); e++)t = t << 1 | i.read(1);
        ((t -= p.base[e]) < 0 || t >= 258) && Gc(Wc.DATA_ERROR);
        var M = p.permute[t];
        if (0 !== M && 1 !== M) {
            if (S) for(S = 0, E + s > this.dbufSize && Gc(Wc.DATA_ERROR), k[A = o[f[0]]] += s; s--;)x[E++] = A;
            if (M > c) break;
            E >= this.dbufSize && Gc(Wc.DATA_ERROR), k[A = o[A = Lc(f, e = M - 1)]]++, x[E++] = A;
        } else S || (S = 1, s = 0), s += 0 === M ? S : 2 * S, S <<= 1;
    }
    for((a < 0 || a >= E) && Gc(Wc.DATA_ERROR), t = 0, e = 0; e < 256; e++)r = t + k[e], k[e] = t, t = r;
    for(e = 0; e < E; e++)x[k[A = 255 & x[e]]] |= e << 8, k[A]++;
    var C = 0, K = 0, D = 0;
    return E && (K = 255 & (C = x[a]), C >>= 8, D = -1), this.writePos = C, this.writeCurrent = K, this.writeCount = E, this.writeRun = D, !0;
}, Vc.prototype._read_bunzip = function(e, t) {
    var r, i, n;
    if (this.writeCount < 0) return 0;
    var a = this.dbuf, s = this.writePos, o = this.writeCurrent, c = this.writeCount;
    this.outputsize;
    for(var u = this.writeRun; c;){
        for(c--, i = o, o = 255 & (s = a[s]), s >>= 8, 3 == u++ ? (r = o, n = i, o = -1) : (r = 1, n = o), this.blockCRC.updateCRCRun(n, r); r--;)this.outputStream.writeByte(n), this.nextoutput++;
        o != i && (u = 0);
    }
    return this.writeCount = c, this.blockCRC.getCRC() !== this.targetBlockCRC && Gc(Wc.DATA_ERROR, "Bad block CRC (got " + this.blockCRC.getCRC().toString(16) + " expected " + this.targetBlockCRC.toString(16) + ")"), this.nextoutput;
};
var $c = function(e) {
    if ("readByte" in e) return e;
    var t = new Nc;
    return t.pos = 0, t.readByte = function() {
        return e[this.pos++];
    }, t.seek = function(e) {
        this.pos = e;
    }, t.eof = function() {
        return this.pos >= e.length;
    }, t;
}, Zc = function(e) {
    var t = new Nc, r = !0;
    if (e) {
        if ("number" == typeof e) t.buffer = new Uint8Array(e), r = !1;
        else {
            if ("writeByte" in e) return e;
            t.buffer = e, r = !1;
        }
    } else t.buffer = new Uint8Array(16384);
    return t.pos = 0, t.writeByte = function(e) {
        if (r && this.pos >= this.buffer.length) {
            var t = new Uint8Array(2 * this.buffer.length);
            t.set(this.buffer), this.buffer = t;
        }
        this.buffer[this.pos++] = e;
    }, t.getBuffer = function() {
        if (this.pos !== this.buffer.length) {
            if (!r) throw new TypeError("outputsize does not match decoded input");
            var e = new Uint8Array(this.pos);
            e.set(this.buffer.subarray(0, this.pos)), this.buffer = e;
        }
        return this.buffer;
    }, t._coerced = !0, t;
};
var Yc = function(e, t, r) {
    for(var i = $c(e), n = Zc(t), a = new Vc(i, n); !("eof" in i) || !i.eof();)if (a._init_block()) a._read_bunzip();
    else {
        var s = a.reader.read(32) >>> 0;
        if (s !== a.streamCRC && Gc(Wc.DATA_ERROR, "Bad stream CRC (got " + a.streamCRC.toString(16) + " expected " + s.toString(16) + ")"), !r || !("eof" in i) || i.eof()) break;
        a._start_bunzip(i, n);
    }
    if ("getBuffer" in n) return n.getBuffer();
};
class Xc {
    static get tag() {
        return ie.packet.literalData;
    }
    constructor(e = new Date){
        this.format = ie.literal.utf8, this.date = $.normalizeDate(e), this.text = null, this.data = null, this.filename = "";
    }
    setText(e, t = ie.literal.utf8) {
        this.format = t, this.text = e, this.data = null;
    }
    getText(e = !1) {
        return (null === this.text || $.isStream(this.text)) && (this.text = $.decodeUTF8($.nativeEOL(this.getBytes(e)))), this.text;
    }
    setBytes(e, t) {
        this.format = t, this.data = e, this.text = null;
    }
    getBytes(e = !1) {
        return null === this.data && (this.data = $.canonicalizeEOL($.encodeUTF8(this.text))), e ? F(this.data) : this.data;
    }
    setFilename(e) {
        this.filename = e;
    }
    getFilename() {
        return this.filename;
    }
    async read(e) {
        await z(e, async (e)=>{
            const t = await e.readByte(), r = await e.readByte();
            this.filename = $.decodeUTF8(await e.readBytes(r)), this.date = $.readDate(await e.readBytes(4));
            let i = e.remainder();
            s(i) && (i = await j(i)), this.setBytes(i, t);
        });
    }
    writeHeader() {
        const e = $.encodeUTF8(this.filename), t = new Uint8Array([
            e.length
        ]), r = new Uint8Array([
            this.format
        ]), i = $.writeDate(this.date);
        return $.concatUint8Array([
            r,
            t,
            e,
            i
        ]);
    }
    write() {
        const e = this.writeHeader(), t = this.getBytes();
        return $.concat([
            e,
            t
        ]);
    }
}
const Qc = Symbol("verified"), Jc = new Set([
    ie.signatureSubpacket.issuer,
    ie.signatureSubpacket.issuerFingerprint,
    ie.signatureSubpacket.embeddedSignature
]);
class eu {
    static get tag() {
        return ie.packet.signature;
    }
    constructor(){
        this.version = null, this.signatureType = null, this.hashAlgorithm = null, this.publicKeyAlgorithm = null, this.signatureData = null, this.unhashedSubpackets = [], this.signedHashValue = null, this.created = null, this.signatureExpirationTime = null, this.signatureNeverExpires = !0, this.exportable = null, this.trustLevel = null, this.trustAmount = null, this.regularExpression = null, this.revocable = null, this.keyExpirationTime = null, this.keyNeverExpires = null, this.preferredSymmetricAlgorithms = null, this.revocationKeyClass = null, this.revocationKeyAlgorithm = null, this.revocationKeyFingerprint = null, this.issuerKeyID = new pe, this.rawNotations = [], this.notations = {}, this.preferredHashAlgorithms = null, this.preferredCompressionAlgorithms = null, this.keyServerPreferences = null, this.preferredKeyServer = null, this.isPrimaryUserID = null, this.policyURI = null, this.keyFlags = null, this.signersUserID = null, this.reasonForRevocationFlag = null, this.reasonForRevocationString = null, this.features = null, this.signatureTargetPublicKeyAlgorithm = null, this.signatureTargetHashAlgorithm = null, this.signatureTargetHash = null, this.embeddedSignature = null, this.issuerKeyVersion = null, this.issuerFingerprint = null, this.preferredAEADAlgorithms = null, this.revoked = null, this[Qc] = null;
    }
    read(e) {
        let t = 0;
        if (this.version = e[t++], 4 !== this.version && 5 !== this.version) throw new bn(`Version ${this.version} of the signature packet is unsupported.`);
        if (this.signatureType = e[t++], this.publicKeyAlgorithm = e[t++], this.hashAlgorithm = e[t++], t += this.readSubPackets(e.subarray(t, e.length), !0), !this.created) throw Error("Missing signature creation time subpacket.");
        this.signatureData = e.subarray(0, t), t += this.readSubPackets(e.subarray(t, e.length), !1), this.signedHashValue = e.subarray(t, t + 2), t += 2, this.params = ua.signature.parseSignatureParams(this.publicKeyAlgorithm, e.subarray(t, e.length));
    }
    writeParams() {
        return this.params instanceof Promise ? W(async ()=>ua.serializeParams(this.publicKeyAlgorithm, await this.params)) : ua.serializeParams(this.publicKeyAlgorithm, this.params);
    }
    write() {
        const e = [];
        return e.push(this.signatureData), e.push(this.writeUnhashedSubPackets()), e.push(this.signedHashValue), e.push(this.writeParams()), $.concat(e);
    }
    async sign(e, t, r = new Date, i = !1) {
        5 === e.version ? this.version = 5 : this.version = 4;
        const n = [
            new Uint8Array([
                this.version,
                this.signatureType,
                this.publicKeyAlgorithm,
                this.hashAlgorithm
            ])
        ];
        this.created = $.normalizeDate(r), this.issuerKeyVersion = e.version, this.issuerFingerprint = e.getFingerprintBytes(), this.issuerKeyID = e.getKeyID(), n.push(this.writeHashedSubPackets()), this.unhashedSubpackets = [], this.signatureData = $.concat(n);
        const a = this.toHash(this.signatureType, t, i), s = await this.hash(this.signatureType, t, a, i);
        this.signedHashValue = N(q(s), 0, 2);
        const o = async ()=>ua.signature.sign(this.publicKeyAlgorithm, this.hashAlgorithm, e.publicParams, e.privateParams, a, await j(s));
        $.isStream(s) ? this.params = o() : (this.params = await o(), this[Qc] = !0);
    }
    writeHashedSubPackets() {
        const e = ie.signatureSubpacket, t = [];
        let r;
        if (null === this.created) throw Error("Missing signature creation time");
        t.push(tu(e.signatureCreationTime, !0, $.writeDate(this.created))), null !== this.signatureExpirationTime && t.push(tu(e.signatureExpirationTime, !0, $.writeNumber(this.signatureExpirationTime, 4))), null !== this.exportable && t.push(tu(e.exportableCertification, !0, new Uint8Array([
            this.exportable ? 1 : 0
        ]))), null !== this.trustLevel && (r = new Uint8Array([
            this.trustLevel,
            this.trustAmount
        ]), t.push(tu(e.trustSignature, !0, r))), null !== this.regularExpression && t.push(tu(e.regularExpression, !0, this.regularExpression)), null !== this.revocable && t.push(tu(e.revocable, !0, new Uint8Array([
            this.revocable ? 1 : 0
        ]))), null !== this.keyExpirationTime && t.push(tu(e.keyExpirationTime, !0, $.writeNumber(this.keyExpirationTime, 4))), null !== this.preferredSymmetricAlgorithms && (r = $.stringToUint8Array($.uint8ArrayToString(this.preferredSymmetricAlgorithms)), t.push(tu(e.preferredSymmetricAlgorithms, !1, r))), null !== this.revocationKeyClass && (r = new Uint8Array([
            this.revocationKeyClass,
            this.revocationKeyAlgorithm
        ]), r = $.concat([
            r,
            this.revocationKeyFingerprint
        ]), t.push(tu(e.revocationKey, !1, r))), this.issuerKeyID.isNull() || 5 === this.issuerKeyVersion || t.push(tu(e.issuer, !0, this.issuerKeyID.write())), this.rawNotations.forEach(({ name: i, value: n, humanReadable: a, critical: s })=>{
            r = [
                new Uint8Array([
                    a ? 128 : 0,
                    0,
                    0,
                    0
                ])
            ];
            const o = $.encodeUTF8(i);
            r.push($.writeNumber(o.length, 2)), r.push($.writeNumber(n.length, 2)), r.push(o), r.push(n), r = $.concat(r), t.push(tu(e.notationData, s, r));
        }), null !== this.preferredHashAlgorithms && (r = $.stringToUint8Array($.uint8ArrayToString(this.preferredHashAlgorithms)), t.push(tu(e.preferredHashAlgorithms, !1, r))), null !== this.preferredCompressionAlgorithms && (r = $.stringToUint8Array($.uint8ArrayToString(this.preferredCompressionAlgorithms)), t.push(tu(e.preferredCompressionAlgorithms, !1, r))), null !== this.keyServerPreferences && (r = $.stringToUint8Array($.uint8ArrayToString(this.keyServerPreferences)), t.push(tu(e.keyServerPreferences, !1, r))), null !== this.preferredKeyServer && t.push(tu(e.preferredKeyServer, !1, $.encodeUTF8(this.preferredKeyServer))), null !== this.isPrimaryUserID && t.push(tu(e.primaryUserID, !1, new Uint8Array([
            this.isPrimaryUserID ? 1 : 0
        ]))), null !== this.policyURI && t.push(tu(e.policyURI, !1, $.encodeUTF8(this.policyURI))), null !== this.keyFlags && (r = $.stringToUint8Array($.uint8ArrayToString(this.keyFlags)), t.push(tu(e.keyFlags, !0, r))), null !== this.signersUserID && t.push(tu(e.signersUserID, !1, $.encodeUTF8(this.signersUserID))), null !== this.reasonForRevocationFlag && (r = $.stringToUint8Array(String.fromCharCode(this.reasonForRevocationFlag) + this.reasonForRevocationString), t.push(tu(e.reasonForRevocation, !0, r))), null !== this.features && (r = $.stringToUint8Array($.uint8ArrayToString(this.features)), t.push(tu(e.features, !1, r))), null !== this.signatureTargetPublicKeyAlgorithm && (r = [
            new Uint8Array([
                this.signatureTargetPublicKeyAlgorithm,
                this.signatureTargetHashAlgorithm
            ])
        ], r.push($.stringToUint8Array(this.signatureTargetHash)), r = $.concat(r), t.push(tu(e.signatureTarget, !0, r))), null !== this.embeddedSignature && t.push(tu(e.embeddedSignature, !0, this.embeddedSignature.write())), null !== this.issuerFingerprint && (r = [
            new Uint8Array([
                this.issuerKeyVersion
            ]),
            this.issuerFingerprint
        ], r = $.concat(r), t.push(tu(e.issuerFingerprint, 5 === this.version, r))), null !== this.preferredAEADAlgorithms && (r = $.stringToUint8Array($.uint8ArrayToString(this.preferredAEADAlgorithms)), t.push(tu(e.preferredAEADAlgorithms, !1, r)));
        const i = $.concat(t), n = $.writeNumber(i.length, 2);
        return $.concat([
            n,
            i
        ]);
    }
    writeUnhashedSubPackets() {
        const e = [];
        this.unhashedSubpackets.forEach((t)=>{
            e.push(hn(t.length)), e.push(t);
        });
        const t = $.concat(e), r = $.writeNumber(t.length, 2);
        return $.concat([
            r,
            t
        ]);
    }
    readSubPacket(e, t = !0) {
        let r = 0;
        const i = !!(128 & e[r]), n = 127 & e[r];
        if (t || (this.unhashedSubpackets.push(e.subarray(r, e.length)), Jc.has(n))) switch(r++, n){
            case ie.signatureSubpacket.signatureCreationTime:
                this.created = $.readDate(e.subarray(r, e.length));
                break;
            case ie.signatureSubpacket.signatureExpirationTime:
                {
                    const t = $.readNumber(e.subarray(r, e.length));
                    this.signatureNeverExpires = 0 === t, this.signatureExpirationTime = t;
                    break;
                }
            case ie.signatureSubpacket.exportableCertification:
                this.exportable = 1 === e[r++];
                break;
            case ie.signatureSubpacket.trustSignature:
                this.trustLevel = e[r++], this.trustAmount = e[r++];
                break;
            case ie.signatureSubpacket.regularExpression:
                this.regularExpression = e[r];
                break;
            case ie.signatureSubpacket.revocable:
                this.revocable = 1 === e[r++];
                break;
            case ie.signatureSubpacket.keyExpirationTime:
                {
                    const t = $.readNumber(e.subarray(r, e.length));
                    this.keyExpirationTime = t, this.keyNeverExpires = 0 === t;
                    break;
                }
            case ie.signatureSubpacket.preferredSymmetricAlgorithms:
                this.preferredSymmetricAlgorithms = [
                    ...e.subarray(r, e.length)
                ];
                break;
            case ie.signatureSubpacket.revocationKey:
                this.revocationKeyClass = e[r++], this.revocationKeyAlgorithm = e[r++], this.revocationKeyFingerprint = e.subarray(r, r + 20);
                break;
            case ie.signatureSubpacket.issuer:
                this.issuerKeyID.read(e.subarray(r, e.length));
                break;
            case ie.signatureSubpacket.notationData:
                {
                    const t = !!(128 & e[r]);
                    r += 4;
                    const n = $.readNumber(e.subarray(r, r + 2));
                    r += 2;
                    const a = $.readNumber(e.subarray(r, r + 2));
                    r += 2;
                    const s = $.decodeUTF8(e.subarray(r, r + n)), o = e.subarray(r + n, r + n + a);
                    this.rawNotations.push({
                        name: s,
                        humanReadable: t,
                        value: o,
                        critical: i
                    }), t && (this.notations[s] = $.decodeUTF8(o));
                    break;
                }
            case ie.signatureSubpacket.preferredHashAlgorithms:
                this.preferredHashAlgorithms = [
                    ...e.subarray(r, e.length)
                ];
                break;
            case ie.signatureSubpacket.preferredCompressionAlgorithms:
                this.preferredCompressionAlgorithms = [
                    ...e.subarray(r, e.length)
                ];
                break;
            case ie.signatureSubpacket.keyServerPreferences:
                this.keyServerPreferences = [
                    ...e.subarray(r, e.length)
                ];
                break;
            case ie.signatureSubpacket.preferredKeyServer:
                this.preferredKeyServer = $.decodeUTF8(e.subarray(r, e.length));
                break;
            case ie.signatureSubpacket.primaryUserID:
                this.isPrimaryUserID = 0 !== e[r++];
                break;
            case ie.signatureSubpacket.policyURI:
                this.policyURI = $.decodeUTF8(e.subarray(r, e.length));
                break;
            case ie.signatureSubpacket.keyFlags:
                this.keyFlags = [
                    ...e.subarray(r, e.length)
                ];
                break;
            case ie.signatureSubpacket.signersUserID:
                this.signersUserID = $.decodeUTF8(e.subarray(r, e.length));
                break;
            case ie.signatureSubpacket.reasonForRevocation:
                this.reasonForRevocationFlag = e[r++], this.reasonForRevocationString = $.decodeUTF8(e.subarray(r, e.length));
                break;
            case ie.signatureSubpacket.features:
                this.features = [
                    ...e.subarray(r, e.length)
                ];
                break;
            case ie.signatureSubpacket.signatureTarget:
                {
                    this.signatureTargetPublicKeyAlgorithm = e[r++], this.signatureTargetHashAlgorithm = e[r++];
                    const t = ua.getHashByteLength(this.signatureTargetHashAlgorithm);
                    this.signatureTargetHash = $.uint8ArrayToString(e.subarray(r, r + t));
                    break;
                }
            case ie.signatureSubpacket.embeddedSignature:
                this.embeddedSignature = new eu, this.embeddedSignature.read(e.subarray(r, e.length));
                break;
            case ie.signatureSubpacket.issuerFingerprint:
                this.issuerKeyVersion = e[r++], this.issuerFingerprint = e.subarray(r, e.length), 5 === this.issuerKeyVersion ? this.issuerKeyID.read(this.issuerFingerprint) : this.issuerKeyID.read(this.issuerFingerprint.subarray(-8));
                break;
            case ie.signatureSubpacket.preferredAEADAlgorithms:
                this.preferredAEADAlgorithms = [
                    ...e.subarray(r, e.length)
                ];
                break;
            default:
                {
                    const e = Error("Unknown signature subpacket type " + n);
                    if (i) throw e;
                    $.printDebug(e);
                }
        }
    }
    readSubPackets(e, t = !0, r) {
        const i = $.readNumber(e.subarray(0, 2));
        let n = 2;
        for(; n < 2 + i;){
            const i = un(e.subarray(n, e.length));
            n += i.offset, this.readSubPacket(e.subarray(n, n + i.len), t, r), n += i.len;
        }
        return n;
    }
    toSign(e, t) {
        const r = ie.signature;
        switch(e){
            case r.binary:
                return null !== t.text ? $.encodeUTF8(t.getText(!0)) : t.getBytes(!0);
            case r.text:
                {
                    const e = t.getBytes(!0);
                    return $.canonicalizeEOL(e);
                }
            case r.standalone:
                return new Uint8Array(0);
            case r.certGeneric:
            case r.certPersona:
            case r.certCasual:
            case r.certPositive:
            case r.certRevocation:
                {
                    let e, i;
                    if (t.userID) i = 180, e = t.userID;
                    else {
                        if (!t.userAttribute) throw Error("Either a userID or userAttribute packet needs to be supplied for certification.");
                        i = 209, e = t.userAttribute;
                    }
                    const n = e.write();
                    return $.concat([
                        this.toSign(r.key, t),
                        new Uint8Array([
                            i
                        ]),
                        $.writeNumber(n.length, 4),
                        n
                    ]);
                }
            case r.subkeyBinding:
            case r.subkeyRevocation:
            case r.keyBinding:
                return $.concat([
                    this.toSign(r.key, t),
                    this.toSign(r.key, {
                        key: t.bind
                    })
                ]);
            case r.key:
                if (void 0 === t.key) throw Error("Key packet is required for this signature.");
                return t.key.writeForHash(this.version);
            case r.keyRevocation:
                return this.toSign(r.key, t);
            case r.timestamp:
                return new Uint8Array(0);
            case r.thirdParty:
                throw Error("Not implemented");
            default:
                throw Error("Unknown signature type.");
        }
    }
    calculateTrailer(e, t) {
        let r = 0;
        return B(q(this.signatureData), (e)=>{
            r += e.length;
        }, ()=>{
            const i = [];
            return 5 !== this.version || this.signatureType !== ie.signature.binary && this.signatureType !== ie.signature.text || (t ? i.push(new Uint8Array(6)) : i.push(e.writeHeader())), i.push(new Uint8Array([
                this.version,
                255
            ])), 5 === this.version && i.push(new Uint8Array(4)), i.push($.writeNumber(r, 4)), $.concat(i);
        });
    }
    toHash(e, t, r = !1) {
        const i = this.toSign(e, t);
        return $.concat([
            i,
            this.signatureData,
            this.calculateTrailer(t, r)
        ]);
    }
    async hash(e, t, r, i = !1) {
        return r || (r = this.toHash(e, t, i)), ua.hash.digest(this.hashAlgorithm, r);
    }
    async verify(e, t, r, i = new Date, n = !1, a = ne) {
        if (!this.issuerKeyID.equals(e.getKeyID())) throw Error("Signature was not issued by the given public key");
        if (this.publicKeyAlgorithm !== e.algorithm) throw Error("Public key algorithm used to sign signature does not match issuer key algorithm.");
        const s = t === ie.signature.binary || t === ie.signature.text;
        if (!(this[Qc] && !s)) {
            let i, a;
            if (this.hashed ? a = await this.hashed : (i = this.toHash(t, r, n), a = await this.hash(t, r, i)), a = await j(a), this.signedHashValue[0] !== a[0] || this.signedHashValue[1] !== a[1]) throw Error("Signed digest did not match");
            if (this.params = await this.params, this[Qc] = await ua.signature.verify(this.publicKeyAlgorithm, this.hashAlgorithm, this.params, e.publicParams, i, a), !this[Qc]) throw Error("Signature verification failed");
        }
        const o = $.normalizeDate(i);
        if (o && this.created > o) throw Error("Signature creation time is in the future");
        if (o && o >= this.getExpirationTime()) throw Error("Signature is expired");
        if (a.rejectHashAlgorithms.has(this.hashAlgorithm)) throw Error("Insecure hash algorithm: " + ie.read(ie.hash, this.hashAlgorithm).toUpperCase());
        if (a.rejectMessageHashAlgorithms.has(this.hashAlgorithm) && [
            ie.signature.binary,
            ie.signature.text
        ].includes(this.signatureType)) throw Error("Insecure message hash algorithm: " + ie.read(ie.hash, this.hashAlgorithm).toUpperCase());
        if (this.rawNotations.forEach(({ name: e, critical: t })=>{
            if (t && a.knownNotations.indexOf(e) < 0) throw Error("Unknown critical notation: " + e);
        }), null !== this.revocationKeyClass) throw Error("This key is intended to be revoked with an authorized key, which OpenPGP.js does not support.");
    }
    isExpired(e = new Date) {
        const t = $.normalizeDate(e);
        return null !== t && !(this.created <= t && t < this.getExpirationTime());
    }
    getExpirationTime() {
        return this.signatureNeverExpires ? 1 / 0 : new Date(this.created.getTime() + 1e3 * this.signatureExpirationTime);
    }
}
function tu(e, t, r) {
    const i = [];
    return i.push(hn(r.length + 1)), i.push(new Uint8Array([
        (t ? 128 : 0) | e
    ])), i.push(r), $.concat(i);
}
class ru {
    static get tag() {
        return ie.packet.onePassSignature;
    }
    constructor(){
        this.version = null, this.signatureType = null, this.hashAlgorithm = null, this.publicKeyAlgorithm = null, this.issuerKeyID = null, this.flags = null;
    }
    read(e) {
        let t = 0;
        if (this.version = e[t++], 3 !== this.version) throw new bn(`Version ${this.version} of the one-pass signature packet is unsupported.`);
        return this.signatureType = e[t++], this.hashAlgorithm = e[t++], this.publicKeyAlgorithm = e[t++], this.issuerKeyID = new pe, this.issuerKeyID.read(e.subarray(t, t + 8)), t += 8, this.flags = e[t++], this;
    }
    write() {
        const e = new Uint8Array([
            3,
            this.signatureType,
            this.hashAlgorithm,
            this.publicKeyAlgorithm
        ]), t = new Uint8Array([
            this.flags
        ]);
        return $.concatUint8Array([
            e,
            this.issuerKeyID.write(),
            t
        ]);
    }
    calculateTrailer(...e) {
        return W(async ()=>eu.prototype.calculateTrailer.apply(await this.correspondingSig, e));
    }
    async verify() {
        const e = await this.correspondingSig;
        if (!e || e.constructor.tag !== ie.packet.signature) throw Error("Corresponding signature packet missing");
        if (e.signatureType !== this.signatureType || e.hashAlgorithm !== this.hashAlgorithm || e.publicKeyAlgorithm !== this.publicKeyAlgorithm || !e.issuerKeyID.equals(this.issuerKeyID)) throw Error("Corresponding signature packet does not match one-pass signature packet");
        return e.hashed = this.hashed, e.verify.apply(e, arguments);
    }
}
function iu(e, t) {
    if (!t[e]) {
        let t;
        try {
            t = ie.read(ie.packet, e);
        } catch (t) {
            throw new bn("Unknown packet type with tag: " + e);
        }
        throw Error("Packet not allowed in this context: " + t);
    }
    return new t[e];
}
ru.prototype.hash = eu.prototype.hash, ru.prototype.toHash = eu.prototype.toHash, ru.prototype.toSign = eu.prototype.toSign;
class nu extends Array {
    static async fromBinary(e, t, r = ne) {
        const i = new nu;
        return await i.read(e, t, r), i;
    }
    async read(e, t, r = ne) {
        r.additionalAllowedPackets.length && (t = {
            ...t,
            ...$.constructAllowedPackets(r.additionalAllowedPackets)
        }), this.stream = T(e, async (e, i)=>{
            const n = D(i);
            try {
                for(;;){
                    await n.ready;
                    if (await yn(e, async (e)=>{
                        try {
                            if (e.tag === ie.packet.marker || e.tag === ie.packet.trust) return;
                            const i = iu(e.tag, t);
                            i.packets = new nu, i.fromStream = $.isStream(e.packet), await i.read(e.packet, r), await n.write(i);
                        } catch (t) {
                            const i = !r.ignoreUnsupportedPackets && t instanceof bn, a = !(r.ignoreMalformedPackets || t instanceof bn);
                            if (i || a || pn(e.tag)) await n.abort(t);
                            else {
                                const t = new mn(e.tag, e.packet);
                                await n.write(t);
                            }
                            $.printDebugError(t);
                        }
                    })) return await n.ready, void await n.close();
                }
            } catch (e) {
                await n.abort(e);
            }
        });
        const i = K(this.stream);
        for(;;){
            const { done: e, value: t } = await i.read();
            if (e ? this.stream = null : this.push(t), e || pn(t.constructor.tag)) break;
        }
        i.releaseLock();
    }
    write() {
        const e = [];
        for(let t = 0; t < this.length; t++){
            const r = this[t] instanceof mn ? this[t].tag : this[t].constructor.tag, i = this[t].write();
            if ($.isStream(i) && pn(this[t].constructor.tag)) {
                let t = [], n = 0;
                const a = 512;
                e.push(fn(r)), e.push(B(i, (e)=>{
                    if (t.push(e), n += e.length, n >= a) {
                        const e = Math.min(Math.log(n) / Math.LN2 | 0, 30), r = 2 ** e, i = $.concat([
                            dn(e)
                        ].concat(t));
                        return t = [
                            i.subarray(1 + r)
                        ], n = t[0].length, i.subarray(0, 1 + r);
                    }
                }, ()=>$.concat([
                        hn(n)
                    ].concat(t))));
            } else {
                if ($.isStream(i)) {
                    let t = 0;
                    e.push(B(q(i), (e)=>{
                        t += e.length;
                    }, ()=>ln(r, t)));
                } else e.push(ln(r, i.length));
                e.push(i);
            }
        }
        return $.concat(e);
    }
    filterByTag(...e) {
        const t = new nu, r = (e)=>(t)=>e === t;
        for(let i = 0; i < this.length; i++)e.some(r(this[i].constructor.tag)) && t.push(this[i]);
        return t;
    }
    findPacket(e) {
        return this.find((t)=>t.constructor.tag === e);
    }
    indexOfTag(...e) {
        const t = [], r = this, i = (e)=>(t)=>e === t;
        for(let n = 0; n < this.length; n++)e.some(i(r[n].constructor.tag)) && t.push(n);
        return t;
    }
}
const au = /*#__PURE__*/ $.constructAllowedPackets([
    Xc,
    ru,
    eu
]);
class su {
    static get tag() {
        return ie.packet.compressedData;
    }
    constructor(e = ne){
        this.packets = null, this.algorithm = e.preferredCompressionAlgorithm, this.compressed = null, this.deflateLevel = e.deflateLevel;
    }
    async read(e, t = ne) {
        await z(e, async (e)=>{
            this.algorithm = await e.readByte(), this.compressed = e.remainder(), await this.decompress(t);
        });
    }
    write() {
        return null === this.compressed && this.compress(), $.concat([
            new Uint8Array([
                this.algorithm
            ]),
            this.compressed
        ]);
    }
    async decompress(e = ne) {
        const t = ie.read(ie.compression, this.algorithm), r = lu[t];
        if (!r) throw Error(t + " decompression not supported");
        this.packets = await nu.fromBinary(r(this.compressed), au, e);
    }
    compress() {
        const e = ie.read(ie.compression, this.algorithm), t = fu[e];
        if (!t) throw Error(e + " compression not supported");
        this.compressed = t(this.packets.write(), this.deflateLevel);
    }
}
const ou = $.getNodeZlib();
function cu(e) {
    return e;
}
function uu(e, t, r = {}) {
    return function(i) {
        return !$.isStream(i) || s(i) ? W(()=>j(i).then((t)=>new Promise((i, n)=>{
                    e(t, r, (e, t)=>{
                        if (e) return n(e);
                        i(t);
                    });
                }))) : y(b(i).pipe(t(r)));
    };
}
function hu(e, t = {}) {
    return function(r) {
        const i = new e(t);
        return B(r, (e)=>{
            if (e.length) return i.push(e, _a), i.result;
        }, ()=>{
            if (e === xo) return i.push([], Aa), i.result;
        });
    };
}
function du(e) {
    return function(t) {
        return W(async ()=>e(await j(t)));
    };
}
const fu = ou ? {
    zip: /*#__PURE__*/ (e, t)=>uu(ou.deflateRaw, ou.createDeflateRaw, {
            level: t
        })(e),
    zlib: /*#__PURE__*/ (e, t)=>uu(ou.deflate, ou.createDeflate, {
            level: t
        })(e)
} : {
    zip: /*#__PURE__*/ (e, t)=>hu(xo, {
            raw: !0,
            level: t
        })(e),
    zlib: /*#__PURE__*/ (e, t)=>hu(xo, {
            level: t
        })(e)
}, lu = ou ? {
    uncompressed: cu,
    zip: /*#__PURE__*/ uu(ou.inflateRaw, ou.createInflateRaw),
    zlib: /*#__PURE__*/ uu(ou.inflate, ou.createInflate),
    bzip2: /*#__PURE__*/ du(Yc)
} : {
    uncompressed: cu,
    zip: /*#__PURE__*/ hu(Bc, {
        raw: !0
    }),
    zlib: /*#__PURE__*/ hu(Bc),
    bzip2: /*#__PURE__*/ du(Yc)
}, pu = /*#__PURE__*/ $.constructAllowedPackets([
    Xc,
    su,
    ru,
    eu
]);
class yu {
    static get tag() {
        return ie.packet.symEncryptedIntegrityProtectedData;
    }
    constructor(){
        this.version = 1, this.encrypted = null, this.packets = null;
    }
    async read(e) {
        await z(e, async (e)=>{
            const t = await e.readByte();
            if (1 !== t) throw new bn(`Version ${t} of the SEIP packet is unsupported.`);
            this.encrypted = e.remainder();
        });
    }
    write() {
        return $.concat([
            new Uint8Array([
                1
            ]),
            this.encrypted
        ]);
    }
    async encrypt(e, t, r = ne) {
        const { blockSize: i } = ua.getCipher(e);
        let n = this.packets.write();
        s(n) && (n = await j(n));
        const a = await ua.getPrefixRandom(e), o = new Uint8Array([
            211,
            20
        ]), c = $.concat([
            a,
            n,
            o
        ]), u = await ua.hash.sha1(F(c)), h = $.concat([
            c,
            u
        ]);
        return this.encrypted = await ua.mode.cfb.encrypt(e, t, h, new Uint8Array(i), r), !0;
    }
    async decrypt(e, t, r = ne) {
        const { blockSize: i } = ua.getCipher(e);
        let n = q(this.encrypted);
        s(n) && (n = await j(n));
        const a = await ua.mode.cfb.decrypt(e, t, n, new Uint8Array(i)), o = N(F(a), -20), c = N(a, 0, -20), u = Promise.all([
            j(await ua.hash.sha1(F(c))),
            j(o)
        ]).then(([e, t])=>{
            if (!$.equalsUint8Array(e, t)) throw Error("Modification detected.");
            return new Uint8Array;
        }), h = N(c, i + 2);
        let d = N(h, 0, -2);
        return d = C([
            d,
            W(()=>u)
        ]), $.isStream(n) && r.allowUnauthenticatedStream || (d = await j(d)), this.packets = await nu.fromBinary(d, pu, r), !0;
    }
}
const bu = /*#__PURE__*/ $.constructAllowedPackets([
    Xc,
    su,
    ru,
    eu
]);
class mu {
    static get tag() {
        return ie.packet.aeadEncryptedData;
    }
    constructor(){
        this.version = 1, this.cipherAlgorithm = null, this.aeadAlgorithm = ie.aead.eax, this.chunkSizeByte = null, this.iv = null, this.encrypted = null, this.packets = null;
    }
    async read(e) {
        await z(e, async (e)=>{
            const t = await e.readByte();
            if (1 !== t) throw new bn(`Version ${t} of the AEAD-encrypted data packet is not supported.`);
            this.cipherAlgorithm = await e.readByte(), this.aeadAlgorithm = await e.readByte(), this.chunkSizeByte = await e.readByte();
            const r = ua.getAEADMode(this.aeadAlgorithm);
            this.iv = await e.readBytes(r.ivLength), this.encrypted = e.remainder();
        });
    }
    write() {
        return $.concat([
            new Uint8Array([
                this.version,
                this.cipherAlgorithm,
                this.aeadAlgorithm,
                this.chunkSizeByte
            ]),
            this.iv,
            this.encrypted
        ]);
    }
    async decrypt(e, t, r = ne) {
        this.packets = await nu.fromBinary(await this.crypt("decrypt", t, q(this.encrypted)), bu, r);
    }
    async encrypt(e, t, r = ne) {
        this.cipherAlgorithm = e;
        const { ivLength: i } = ua.getAEADMode(this.aeadAlgorithm);
        this.iv = ua.random.getRandomBytes(i), this.chunkSizeByte = r.aeadChunkSizeByte;
        const n = this.packets.write();
        this.encrypted = await this.crypt("encrypt", t, n);
    }
    async crypt(e, t, r) {
        const i = ua.getAEADMode(this.aeadAlgorithm), n = await i(this.cipherAlgorithm, t), a = "decrypt" === e ? i.tagLength : 0, s = "encrypt" === e ? i.tagLength : 0, o = 2 ** (this.chunkSizeByte + 6) + a, c = new ArrayBuffer(21), u = new Uint8Array(c, 0, 13), h = new Uint8Array(c), d = new DataView(c), f = new Uint8Array(c, 5, 8);
        u.set([
            192 | mu.tag,
            this.version,
            this.cipherAlgorithm,
            this.aeadAlgorithm,
            this.chunkSizeByte
        ], 0);
        let l = 0, p = Promise.resolve(), y = 0, b = 0;
        const m = this.iv;
        return T(r, async (t, r)=>{
            if ("array" !== $.isStream(t)) {
                const e = new S({}, {
                    highWaterMark: $.getHardwareConcurrency() * 2 ** (this.chunkSizeByte + 6),
                    size: (e)=>e.length
                });
                R(e.readable, r), r = e.writable;
            }
            const c = K(t), g = D(r);
            try {
                for(;;){
                    let t = await c.readBytes(o + a) || new Uint8Array;
                    const r = t.subarray(t.length - a);
                    let w, v;
                    if (t = t.subarray(0, t.length - a), !l || t.length ? (c.unshift(r), w = n[e](t, i.getNonce(m, f), u), b += t.length - a + s) : (d.setInt32(17, y), w = n[e](r, i.getNonce(m, f), h), b += s, v = !0), y += t.length - a, p = p.then(()=>w).then(async (e)=>{
                        await g.ready, await g.write(e), b -= e.length;
                    }).catch((e)=>g.abort(e)), (v || b > g.desiredSize) && await p, v) {
                        await g.close();
                        break;
                    }
                    d.setInt32(9, ++l);
                }
            } catch (e) {
                await g.abort(e);
            }
        });
    }
}
class gu {
    static get tag() {
        return ie.packet.publicKeyEncryptedSessionKey;
    }
    constructor(){
        this.version = 3, this.publicKeyID = new pe, this.publicKeyAlgorithm = null, this.sessionKey = null, this.sessionKeyAlgorithm = null, this.encrypted = {};
    }
    read(e) {
        if (this.version = e[0], 3 !== this.version) throw new bn(`Version ${this.version} of the PKESK packet is unsupported.`);
        this.publicKeyID.read(e.subarray(1, e.length)), this.publicKeyAlgorithm = e[9], this.encrypted = ua.parseEncSessionKeyParams(this.publicKeyAlgorithm, e.subarray(10));
    }
    write() {
        const e = [
            new Uint8Array([
                this.version
            ]),
            this.publicKeyID.write(),
            new Uint8Array([
                this.publicKeyAlgorithm
            ]),
            ua.serializeParams(this.publicKeyAlgorithm, this.encrypted)
        ];
        return $.concatUint8Array(e);
    }
    async encrypt(e) {
        const t = $.concatUint8Array([
            new Uint8Array([
                ie.write(ie.symmetric, this.sessionKeyAlgorithm)
            ]),
            this.sessionKey,
            $.writeChecksum(this.sessionKey)
        ]), r = ie.write(ie.publicKey, this.publicKeyAlgorithm);
        this.encrypted = await ua.publicKeyEncrypt(r, e.publicParams, t, e.getFingerprintBytes());
    }
    async decrypt(e, t) {
        if (this.publicKeyAlgorithm !== e.algorithm) throw Error("Decryption error");
        const r = t ? $.concatUint8Array([
            new Uint8Array([
                t.sessionKeyAlgorithm
            ]),
            t.sessionKey,
            $.writeChecksum(t.sessionKey)
        ]) : null, i = await ua.publicKeyDecrypt(this.publicKeyAlgorithm, e.publicParams, e.privateParams, this.encrypted, e.getFingerprintBytes(), r), n = i[0], a = i.subarray(1, i.length - 2), s = i.subarray(i.length - 2), o = $.writeChecksum(a), c = o[0] === s[0] & o[1] === s[1];
        if (t) {
            const e = c & n === t.sessionKeyAlgorithm & a.length === t.sessionKey.length;
            this.sessionKeyAlgorithm = $.selectUint8(e, n, t.sessionKeyAlgorithm), this.sessionKey = $.selectUint8Array(e, a, t.sessionKey);
        } else {
            if (!(c && ie.read(ie.symmetric, n))) throw Error("Decryption error");
            this.sessionKey = a, this.sessionKeyAlgorithm = n;
        }
    }
}
class wu {
    constructor(e = ne){
        this.algorithm = ie.hash.sha256, this.type = "iterated", this.c = e.s2kIterationCountByte, this.salt = null;
    }
    getCount() {
        return 16 + (15 & this.c) << 6 + (this.c >> 4);
    }
    read(e) {
        let t = 0;
        switch(this.type = ie.read(ie.s2k, e[t++]), this.algorithm = e[t++], this.type){
            case "simple":
                break;
            case "salted":
                this.salt = e.subarray(t, t + 8), t += 8;
                break;
            case "iterated":
                this.salt = e.subarray(t, t + 8), t += 8, this.c = e[t++];
                break;
            case "gnu":
                if ("GNU" !== $.uint8ArrayToString(e.subarray(t, t + 3))) throw Error("Unknown s2k type.");
                t += 3;
                if (1001 !== 1e3 + e[t++]) throw Error("Unknown s2k gnu protection mode.");
                this.type = "gnu-dummy";
                break;
            default:
                throw Error("Unknown s2k type.");
        }
        return t;
    }
    write() {
        if ("gnu-dummy" === this.type) return new Uint8Array([
            101,
            0,
            ...$.stringToUint8Array("GNU"),
            1
        ]);
        const e = [
            new Uint8Array([
                ie.write(ie.s2k, this.type),
                this.algorithm
            ])
        ];
        switch(this.type){
            case "simple":
                break;
            case "salted":
                e.push(this.salt);
                break;
            case "iterated":
                e.push(this.salt), e.push(new Uint8Array([
                    this.c
                ]));
                break;
            case "gnu":
                throw Error("GNU s2k type not supported.");
            default:
                throw Error("Unknown s2k type.");
        }
        return $.concatUint8Array(e);
    }
    async produceKey(e, t) {
        e = $.encodeUTF8(e);
        const r = [];
        let i = 0, n = 0;
        for(; i < t;){
            let t;
            switch(this.type){
                case "simple":
                    t = $.concatUint8Array([
                        new Uint8Array(n),
                        e
                    ]);
                    break;
                case "salted":
                    t = $.concatUint8Array([
                        new Uint8Array(n),
                        this.salt,
                        e
                    ]);
                    break;
                case "iterated":
                    {
                        const r = $.concatUint8Array([
                            this.salt,
                            e
                        ]);
                        let i = r.length;
                        const a = Math.max(this.getCount(), i);
                        t = new Uint8Array(n + a), t.set(r, n);
                        for(let e = n + i; e < a; e += i, i *= 2)t.copyWithin(e, n, e);
                        break;
                    }
                case "gnu":
                    throw Error("GNU s2k type not supported.");
                default:
                    throw Error("Unknown s2k type.");
            }
            const a = await ua.hash.digest(this.algorithm, t);
            r.push(a), i += a.length, n++;
        }
        return $.concatUint8Array(r).subarray(0, t);
    }
}
class vu {
    static get tag() {
        return ie.packet.symEncryptedSessionKey;
    }
    constructor(e = ne){
        this.version = e.aeadProtect ? 5 : 4, this.sessionKey = null, this.sessionKeyEncryptionAlgorithm = null, this.sessionKeyAlgorithm = ie.symmetric.aes256, this.aeadAlgorithm = ie.write(ie.aead, e.preferredAEADAlgorithm), this.encrypted = null, this.s2k = null, this.iv = null;
    }
    read(e) {
        let t = 0;
        if (this.version = e[t++], 4 !== this.version && 5 !== this.version) throw new bn(`Version ${this.version} of the SKESK packet is unsupported.`);
        const r = e[t++];
        if (5 === this.version && (this.aeadAlgorithm = e[t++]), this.s2k = new wu, t += this.s2k.read(e.subarray(t, e.length)), 5 === this.version) {
            const r = ua.getAEADMode(this.aeadAlgorithm);
            this.iv = e.subarray(t, t += r.ivLength);
        }
        5 === this.version || t < e.length ? (this.encrypted = e.subarray(t, e.length), this.sessionKeyEncryptionAlgorithm = r) : this.sessionKeyAlgorithm = r;
    }
    write() {
        const e = null === this.encrypted ? this.sessionKeyAlgorithm : this.sessionKeyEncryptionAlgorithm;
        let t;
        return 5 === this.version ? t = $.concatUint8Array([
            new Uint8Array([
                this.version,
                e,
                this.aeadAlgorithm
            ]),
            this.s2k.write(),
            this.iv,
            this.encrypted
        ]) : (t = $.concatUint8Array([
            new Uint8Array([
                this.version,
                e
            ]),
            this.s2k.write()
        ]), null !== this.encrypted && (t = $.concatUint8Array([
            t,
            this.encrypted
        ]))), t;
    }
    async decrypt(e) {
        const t = null !== this.sessionKeyEncryptionAlgorithm ? this.sessionKeyEncryptionAlgorithm : this.sessionKeyAlgorithm, { blockSize: r, keySize: i } = ua.getCipher(t), n = await this.s2k.produceKey(e, i);
        if (5 === this.version) {
            const e = ua.getAEADMode(this.aeadAlgorithm), r = new Uint8Array([
                192 | vu.tag,
                this.version,
                this.sessionKeyEncryptionAlgorithm,
                this.aeadAlgorithm
            ]), i = await e(t, n);
            this.sessionKey = await i.decrypt(this.encrypted, this.iv, r);
        } else if (null !== this.encrypted) {
            const e = await ua.mode.cfb.decrypt(t, n, this.encrypted, new Uint8Array(r));
            this.sessionKeyAlgorithm = ie.write(ie.symmetric, e[0]), this.sessionKey = e.subarray(1, e.length);
        } else this.sessionKey = n;
    }
    async encrypt(e, t = ne) {
        const r = null !== this.sessionKeyEncryptionAlgorithm ? this.sessionKeyEncryptionAlgorithm : this.sessionKeyAlgorithm;
        this.sessionKeyEncryptionAlgorithm = r, this.s2k = new wu(t), this.s2k.salt = ua.random.getRandomBytes(8);
        const { blockSize: i, keySize: n } = ua.getCipher(r), a = await this.s2k.produceKey(e, n);
        if (null === this.sessionKey && (this.sessionKey = ua.generateSessionKey(this.sessionKeyAlgorithm)), 5 === this.version) {
            const e = ua.getAEADMode(this.aeadAlgorithm);
            this.iv = ua.random.getRandomBytes(e.ivLength);
            const t = new Uint8Array([
                192 | vu.tag,
                this.version,
                this.sessionKeyEncryptionAlgorithm,
                this.aeadAlgorithm
            ]), i = await e(r, a);
            this.encrypted = await i.encrypt(this.sessionKey, this.iv, t);
        } else {
            const e = $.concatUint8Array([
                new Uint8Array([
                    this.sessionKeyAlgorithm
                ]),
                this.sessionKey
            ]);
            this.encrypted = await ua.mode.cfb.encrypt(r, a, e, new Uint8Array(i), t);
        }
    }
}
class _u {
    static get tag() {
        return ie.packet.publicKey;
    }
    constructor(e = new Date, t = ne){
        this.version = t.v5Keys ? 5 : 4, this.created = $.normalizeDate(e), this.algorithm = null, this.publicParams = null, this.expirationTimeV3 = 0, this.fingerprint = null, this.keyID = null;
    }
    static fromSecretKeyPacket(e) {
        const t = new _u, { version: r, created: i, algorithm: n, publicParams: a, keyID: s, fingerprint: o } = e;
        return t.version = r, t.created = i, t.algorithm = n, t.publicParams = a, t.keyID = s, t.fingerprint = o, t;
    }
    async read(e) {
        let t = 0;
        if (this.version = e[t++], 4 === this.version || 5 === this.version) {
            this.created = $.readDate(e.subarray(t, t + 4)), t += 4, this.algorithm = e[t++], 5 === this.version && (t += 4);
            const { read: r, publicParams: i } = ua.parsePublicKeyParams(this.algorithm, e.subarray(t));
            return this.publicParams = i, t += r, await this.computeFingerprintAndKeyID(), t;
        }
        throw new bn(`Version ${this.version} of the key packet is unsupported.`);
    }
    write() {
        const e = [];
        e.push(new Uint8Array([
            this.version
        ])), e.push($.writeDate(this.created)), e.push(new Uint8Array([
            this.algorithm
        ]));
        const t = ua.serializeParams(this.algorithm, this.publicParams);
        return 5 === this.version && e.push($.writeNumber(t.length, 4)), e.push(t), $.concatUint8Array(e);
    }
    writeForHash(e) {
        const t = this.writePublicKey();
        return 5 === e ? $.concatUint8Array([
            new Uint8Array([
                154
            ]),
            $.writeNumber(t.length, 4),
            t
        ]) : $.concatUint8Array([
            new Uint8Array([
                153
            ]),
            $.writeNumber(t.length, 2),
            t
        ]);
    }
    isDecrypted() {
        return null;
    }
    getCreationTime() {
        return this.created;
    }
    getKeyID() {
        return this.keyID;
    }
    async computeFingerprintAndKeyID() {
        if (await this.computeFingerprint(), this.keyID = new pe, 5 === this.version) this.keyID.read(this.fingerprint.subarray(0, 8));
        else {
            if (4 !== this.version) throw Error("Unsupported key version");
            this.keyID.read(this.fingerprint.subarray(12, 20));
        }
    }
    async computeFingerprint() {
        const e = this.writeForHash(this.version);
        if (5 === this.version) this.fingerprint = await ua.hash.sha256(e);
        else {
            if (4 !== this.version) throw Error("Unsupported key version");
            this.fingerprint = await ua.hash.sha1(e);
        }
    }
    getFingerprintBytes() {
        return this.fingerprint;
    }
    getFingerprint() {
        return $.uint8ArrayToHex(this.getFingerprintBytes());
    }
    hasSameFingerprintAs(e) {
        return this.version === e.version && $.equalsUint8Array(this.writePublicKey(), e.writePublicKey());
    }
    getAlgorithmInfo() {
        const e = {};
        e.algorithm = ie.read(ie.publicKey, this.algorithm);
        const t = this.publicParams.n || this.publicParams.p;
        return t ? e.bits = $.uint8ArrayBitLength(t) : e.curve = this.publicParams.oid.getName(), e;
    }
}
_u.prototype.readPublicKey = _u.prototype.read, _u.prototype.writePublicKey = _u.prototype.write;
const ku = /*#__PURE__*/ $.constructAllowedPackets([
    Xc,
    su,
    ru,
    eu
]);
class Au {
    static get tag() {
        return ie.packet.symmetricallyEncryptedData;
    }
    constructor(){
        this.encrypted = null, this.packets = null;
    }
    read(e) {
        this.encrypted = e;
    }
    write() {
        return this.encrypted;
    }
    async decrypt(e, t, r = ne) {
        if (!r.allowUnauthenticatedMessages) throw Error("Message is not authenticated.");
        const { blockSize: i } = ua.getCipher(e), n = await j(q(this.encrypted)), a = await ua.mode.cfb.decrypt(e, t, n.subarray(i + 2), n.subarray(2, i + 2));
        this.packets = await nu.fromBinary(a, ku, r);
    }
    async encrypt(e, t, r = ne) {
        const i = this.packets.write(), { blockSize: n } = ua.getCipher(e), a = await ua.getPrefixRandom(e), s = await ua.mode.cfb.encrypt(e, t, a, new Uint8Array(n), r), o = await ua.mode.cfb.encrypt(e, t, i, s.subarray(2), r);
        this.encrypted = $.concat([
            s,
            o
        ]);
    }
}
class Su {
    static get tag() {
        return ie.packet.marker;
    }
    read(e) {
        return 80 === e[0] && 71 === e[1] && 80 === e[2];
    }
    write() {
        return new Uint8Array([
            80,
            71,
            80
        ]);
    }
}
class Eu extends _u {
    static get tag() {
        return ie.packet.publicSubkey;
    }
    constructor(e, t){
        super(e, t);
    }
    static fromSecretSubkeyPacket(e) {
        const t = new Eu, { version: r, created: i, algorithm: n, publicParams: a, keyID: s, fingerprint: o } = e;
        return t.version = r, t.created = i, t.algorithm = n, t.publicParams = a, t.keyID = s, t.fingerprint = o, t;
    }
}
class Pu {
    static get tag() {
        return ie.packet.userAttribute;
    }
    constructor(){
        this.attributes = [];
    }
    read(e) {
        let t = 0;
        for(; t < e.length;){
            const r = un(e.subarray(t, e.length));
            t += r.offset, this.attributes.push($.uint8ArrayToString(e.subarray(t, t + r.len))), t += r.len;
        }
    }
    write() {
        const e = [];
        for(let t = 0; t < this.attributes.length; t++)e.push(hn(this.attributes[t].length)), e.push($.stringToUint8Array(this.attributes[t]));
        return $.concatUint8Array(e);
    }
    equals(e) {
        return !!(e && e instanceof Pu) && this.attributes.every(function(t, r) {
            return t === e.attributes[r];
        });
    }
}
class xu extends _u {
    static get tag() {
        return ie.packet.secretKey;
    }
    constructor(e = new Date, t = ne){
        super(e, t), this.keyMaterial = null, this.isEncrypted = null, this.s2kUsage = 0, this.s2k = null, this.symmetric = null, this.aead = null, this.privateParams = null;
    }
    async read(e) {
        let t = await this.readPublicKey(e);
        if (this.s2kUsage = e[t++], 5 === this.version && t++, 255 === this.s2kUsage || 254 === this.s2kUsage || 253 === this.s2kUsage) {
            if (this.symmetric = e[t++], 253 === this.s2kUsage && (this.aead = e[t++]), this.s2k = new wu, t += this.s2k.read(e.subarray(t, e.length)), "gnu-dummy" === this.s2k.type) return;
        } else this.s2kUsage && (this.symmetric = this.s2kUsage);
        if (this.s2kUsage && (this.iv = e.subarray(t, t + ua.getCipher(this.symmetric).blockSize), t += this.iv.length), 5 === this.version && (t += 4), this.keyMaterial = e.subarray(t), this.isEncrypted = !!this.s2kUsage, !this.isEncrypted) {
            const e = this.keyMaterial.subarray(0, -2);
            if (!$.equalsUint8Array($.writeChecksum(e), this.keyMaterial.subarray(-2))) throw Error("Key checksum mismatch");
            try {
                const { privateParams: t } = ua.parsePrivateKeyParams(this.algorithm, e, this.publicParams);
                this.privateParams = t;
            } catch (e) {
                if (e instanceof bn) throw e;
                throw Error("Error reading MPIs");
            }
        }
    }
    write() {
        const e = [
            this.writePublicKey()
        ];
        e.push(new Uint8Array([
            this.s2kUsage
        ]));
        const t = [];
        return 255 !== this.s2kUsage && 254 !== this.s2kUsage && 253 !== this.s2kUsage || (t.push(this.symmetric), 253 === this.s2kUsage && t.push(this.aead), t.push(...this.s2k.write())), this.s2kUsage && "gnu-dummy" !== this.s2k.type && t.push(...this.iv), 5 === this.version && e.push(new Uint8Array([
            t.length
        ])), e.push(new Uint8Array(t)), this.isDummy() || (this.s2kUsage || (this.keyMaterial = ua.serializeParams(this.algorithm, this.privateParams)), 5 === this.version && e.push($.writeNumber(this.keyMaterial.length, 4)), e.push(this.keyMaterial), this.s2kUsage || e.push($.writeChecksum(this.keyMaterial))), $.concatUint8Array(e);
    }
    isDecrypted() {
        return !1 === this.isEncrypted;
    }
    isDummy() {
        return !(!this.s2k || "gnu-dummy" !== this.s2k.type);
    }
    makeDummy(e = ne) {
        this.isDummy() || (this.isDecrypted() && this.clearPrivateParams(), this.isEncrypted = null, this.keyMaterial = null, this.s2k = new wu(e), this.s2k.algorithm = 0, this.s2k.c = 0, this.s2k.type = "gnu-dummy", this.s2kUsage = 254, this.symmetric = ie.symmetric.aes256);
    }
    async encrypt(e, t = ne) {
        if (this.isDummy()) return;
        if (!this.isDecrypted()) throw Error("Key packet is already encrypted");
        if (!e) throw Error("A non-empty passphrase is required for key encryption.");
        this.s2k = new wu(t), this.s2k.salt = ua.random.getRandomBytes(8);
        const r = ua.serializeParams(this.algorithm, this.privateParams);
        this.symmetric = ie.symmetric.aes256;
        const i = await Mu(this.s2k, e, this.symmetric), { blockSize: n } = ua.getCipher(this.symmetric);
        if (this.iv = ua.random.getRandomBytes(n), t.aeadProtect) {
            this.s2kUsage = 253, this.aead = ie.aead.eax;
            const e = ua.getAEADMode(this.aead), t = await e(this.symmetric, i);
            this.keyMaterial = await t.encrypt(r, this.iv.subarray(0, e.ivLength), new Uint8Array);
        } else this.s2kUsage = 254, this.keyMaterial = await ua.mode.cfb.encrypt(this.symmetric, i, $.concatUint8Array([
            r,
            await ua.hash.sha1(r, t)
        ]), this.iv, t);
    }
    async decrypt(e) {
        if (this.isDummy()) return !1;
        if (this.isDecrypted()) throw Error("Key packet is already decrypted.");
        let t, r;
        if (254 !== this.s2kUsage && 253 !== this.s2kUsage) throw 255 === this.s2kUsage ? Error("Encrypted private key is authenticated using an insecure two-byte hash") : Error("Private key is encrypted using an insecure S2K function: unsalted MD5");
        if (t = await Mu(this.s2k, e, this.symmetric), 253 === this.s2kUsage) {
            const e = ua.getAEADMode(this.aead), i = await e(this.symmetric, t);
            try {
                r = await i.decrypt(this.keyMaterial, this.iv.subarray(0, e.ivLength), new Uint8Array);
            } catch (e) {
                if ("Authentication tag mismatch" === e.message) throw Error("Incorrect key passphrase: " + e.message);
                throw e;
            }
        } else {
            const e = await ua.mode.cfb.decrypt(this.symmetric, t, this.keyMaterial, this.iv);
            r = e.subarray(0, -20);
            const i = await ua.hash.sha1(r);
            if (!$.equalsUint8Array(i, e.subarray(-20))) throw Error("Incorrect key passphrase");
        }
        try {
            const { privateParams: e } = ua.parsePrivateKeyParams(this.algorithm, r, this.publicParams);
            this.privateParams = e;
        } catch (e) {
            throw Error("Error reading MPIs");
        }
        this.isEncrypted = !1, this.keyMaterial = null, this.s2kUsage = 0;
    }
    async validate() {
        if (this.isDummy()) return;
        if (!this.isDecrypted()) throw Error("Key is not decrypted");
        let e;
        try {
            e = await ua.validateParams(this.algorithm, this.publicParams, this.privateParams);
        } catch (t) {
            e = !1;
        }
        if (!e) throw Error("Key is invalid");
    }
    async generate(e, t) {
        const { privateParams: r, publicParams: i } = await ua.generateParams(this.algorithm, e, t);
        this.privateParams = r, this.publicParams = i, this.isEncrypted = !1;
    }
    clearPrivateParams() {
        this.isDummy() || (Object.keys(this.privateParams).forEach((e)=>{
            this.privateParams[e].fill(0), delete this.privateParams[e];
        }), this.privateParams = null, this.isEncrypted = !0);
    }
}
async function Mu(e, t, r) {
    const { keySize: i } = ua.getCipher(r);
    return e.produceKey(t, i);
}
var Cu = it(function(e) {
    !function(t) {
        function r(e) {
            function t() {
                return Ae < Se;
            }
            function r() {
                return Ae;
            }
            function n(e) {
                Ae = e;
            }
            function a() {
                Ae = 0, Se = ke.length;
            }
            function s(e, t) {
                return {
                    name: e,
                    tokens: t || "",
                    semantic: t || "",
                    children: []
                };
            }
            function o(e, t) {
                var r;
                return null === t ? null : ((r = s(e)).tokens = t.tokens, r.semantic = t.semantic, r.children.push(t), r);
            }
            function c(e, t) {
                return null !== t && (e.tokens += t.tokens, e.semantic += t.semantic), e.children.push(t), e;
            }
            function u(e) {
                var r;
                return t() && e(r = ke[Ae]) ? (Ae += 1, s("token", r)) : null;
            }
            function h(e) {
                return function() {
                    return o("literal", u(function(t) {
                        return t === e;
                    }));
                };
            }
            function d() {
                var e = arguments;
                return function() {
                    var t, i, a, o;
                    for(o = r(), i = s("and"), t = 0; t < e.length; t += 1){
                        if (null === (a = e[t]())) return n(o), null;
                        c(i, a);
                    }
                    return i;
                };
            }
            function f() {
                var e = arguments;
                return function() {
                    var t, i, a;
                    for(a = r(), t = 0; t < e.length; t += 1){
                        if (null !== (i = e[t]())) return i;
                        n(a);
                    }
                    return null;
                };
            }
            function l(e) {
                return function() {
                    var t, i;
                    return i = r(), null !== (t = e()) ? t : (n(i), s("opt"));
                };
            }
            function p(e) {
                return function() {
                    var t = e();
                    return null !== t && (t.semantic = ""), t;
                };
            }
            function y(e) {
                return function() {
                    var t = e();
                    return null !== t && t.semantic.length > 0 && (t.semantic = " "), t;
                };
            }
            function b(e, t) {
                return function() {
                    var i, a, o, u, h;
                    for(u = r(), i = s("star"), o = 0, h = void 0 === t ? 0 : t; null !== (a = e());)o += 1, c(i, a);
                    return o >= h ? i : (n(u), null);
                };
            }
            function m(e) {
                return e.charCodeAt(0) >= 128;
            }
            function g() {
                return o("cr", h("\r")());
            }
            function w() {
                return o("crlf", d(g, k)());
            }
            function v() {
                return o("dquote", h('"')());
            }
            function _() {
                return o("htab", h("	")());
            }
            function k() {
                return o("lf", h("\n")());
            }
            function A() {
                return o("sp", h(" ")());
            }
            function S() {
                return o("vchar", u(function(t) {
                    var r = t.charCodeAt(0), i = 33 <= r && r <= 126;
                    return e.rfc6532 && (i = i || m(t)), i;
                }));
            }
            function E() {
                return o("wsp", f(A, _)());
            }
            function P() {
                var e = o("quoted-pair", f(d(h("\\"), f(S, E)), ie)());
                return null === e ? null : (e.semantic = e.semantic[1], e);
            }
            function x() {
                return o("fws", f(ae, d(l(d(b(E), p(w))), b(E, 1)))());
            }
            function M() {
                return o("ctext", f(function() {
                    return u(function(t) {
                        var r = t.charCodeAt(0), i = 33 <= r && r <= 39 || 42 <= r && r <= 91 || 93 <= r && r <= 126;
                        return e.rfc6532 && (i = i || m(t)), i;
                    });
                }, te)());
            }
            function C() {
                return o("ccontent", f(M, P, K)());
            }
            function K() {
                return o("comment", d(h("("), b(d(l(x), C)), l(x), h(")"))());
            }
            function D() {
                return o("cfws", f(d(b(d(l(x), K), 1), l(x)), x)());
            }
            function R() {
                return o("atext", u(function(t) {
                    var r = "a" <= t && t <= "z" || "A" <= t && t <= "Z" || "0" <= t && t <= "9" || [
                        "!",
                        "#",
                        "$",
                        "%",
                        "&",
                        "'",
                        "*",
                        "+",
                        "-",
                        "/",
                        "=",
                        "?",
                        "^",
                        "_",
                        "`",
                        "{",
                        "|",
                        "}",
                        "~"
                    ].indexOf(t) >= 0;
                    return e.rfc6532 && (r = r || m(t)), r;
                }));
            }
            function U() {
                return o("atom", d(y(l(D)), b(R, 1), y(l(D)))());
            }
            function I() {
                var e, t;
                return null === (e = o("dot-atom-text", b(R, 1)())) || null !== (t = b(d(h("."), b(R, 1)))()) && c(e, t), e;
            }
            function B() {
                return o("dot-atom", d(p(l(D)), I, p(l(D)))());
            }
            function T() {
                return o("qtext", f(function() {
                    return u(function(t) {
                        var r = t.charCodeAt(0), i = 33 === r || 35 <= r && r <= 91 || 93 <= r && r <= 126;
                        return e.rfc6532 && (i = i || m(t)), i;
                    });
                }, re)());
            }
            function z() {
                return o("qcontent", f(T, P)());
            }
            function q() {
                return o("quoted-string", d(p(l(D)), p(v), b(d(l(y(x)), z)), l(p(x)), p(v), p(l(D)))());
            }
            function F() {
                return o("word", f(U, q)());
            }
            function O() {
                return o("address", f(N, W)());
            }
            function N() {
                return o("mailbox", f(j, J)());
            }
            function j() {
                return o("name-addr", d(l(H), L)());
            }
            function L() {
                return o("angle-addr", f(d(p(l(D)), h("<"), J, h(">"), p(l(D))), se)());
            }
            function W() {
                return o("group", d(H, h(":"), l($), h(";"), p(l(D)))());
            }
            function H() {
                var e;
                return o("display-name", (null !== (e = o("phrase", f(ne, b(F, 1))())) && (e.semantic = function(e) {
                    return e.replace(/([ \t]|\r\n)+/g, " ").replace(/^\s*/, "").replace(/\s*$/, "");
                }(e.semantic)), e));
            }
            function G() {
                return o("mailbox-list", f(d(N, b(d(h(","), N))), ue)());
            }
            function V() {
                return o("address-list", f(d(O, b(d(h(","), O))), he)());
            }
            function $() {
                return o("group-list", f(G, p(D), de)());
            }
            function Z() {
                return o("local-part", f(fe, B, q)());
            }
            function Y() {
                return o("dtext", f(function() {
                    return u(function(t) {
                        var r = t.charCodeAt(0), i = 33 <= r && r <= 90 || 94 <= r && r <= 126;
                        return e.rfc6532 && (i = i || m(t)), i;
                    });
                }, pe)());
            }
            function X() {
                return o("domain-literal", d(p(l(D)), h("["), b(d(l(x), Y)), l(x), h("]"), p(l(D)))());
            }
            function Q() {
                var t;
                return o("domain", (t = f(le, B, X)(), e.rejectTLD && t && t.semantic && t.semantic.indexOf(".") < 0 ? null : (t && (t.semantic = t.semantic.replace(/\s+/g, "")), t)));
            }
            function J() {
                return o("addr-spec", d(Z, h("@"), Q)());
            }
            function ee() {
                return e.strict ? null : o("obs-NO-WS-CTL", u(function(e) {
                    var t = e.charCodeAt(0);
                    return 1 <= t && t <= 8 || 11 === t || 12 === t || 14 <= t && t <= 31 || 127 === t;
                }));
            }
            function te() {
                return e.strict ? null : o("obs-ctext", ee());
            }
            function re() {
                return e.strict ? null : o("obs-qtext", ee());
            }
            function ie() {
                return e.strict ? null : o("obs-qp", d(h("\\"), f(h("\x00"), ee, k, g))());
            }
            function ne() {
                return e.strict ? null : e.atInDisplayName ? o("obs-phrase", d(F, b(f(F, h("."), h("@"), y(D))))()) : o("obs-phrase", d(F, b(f(F, h("."), y(D))))());
            }
            function ae() {
                return e.strict ? null : o("obs-FWS", b(d(p(l(w)), E), 1)());
            }
            function se() {
                return e.strict ? null : o("obs-angle-addr", d(p(l(D)), h("<"), oe, J, h(">"), p(l(D)))());
            }
            function oe() {
                return e.strict ? null : o("obs-route", d(ce, h(":"))());
            }
            function ce() {
                return e.strict ? null : o("obs-domain-list", d(b(f(p(D), h(","))), h("@"), Q, b(d(h(","), p(l(D)), l(d(h("@"), Q)))))());
            }
            function ue() {
                return e.strict ? null : o("obs-mbox-list", d(b(d(p(l(D)), h(","))), N, b(d(h(","), l(d(N, p(D))))))());
            }
            function he() {
                return e.strict ? null : o("obs-addr-list", d(b(d(p(l(D)), h(","))), O, b(d(h(","), l(d(O, p(D))))))());
            }
            function de() {
                return e.strict ? null : o("obs-group-list", d(b(d(p(l(D)), h(",")), 1), p(l(D)))());
            }
            function fe() {
                return e.strict ? null : o("obs-local-part", d(F, b(d(h("."), F)))());
            }
            function le() {
                return e.strict ? null : o("obs-domain", d(U, b(d(h("."), U)))());
            }
            function pe() {
                return e.strict ? null : o("obs-dtext", f(ee, P)());
            }
            function ye(e, t) {
                var r, i, n;
                if (null == t) return null;
                for(i = [
                    t
                ]; i.length > 0;){
                    if ((n = i.pop()).name === e) return n;
                    for(r = n.children.length - 1; r >= 0; r -= 1)i.push(n.children[r]);
                }
                return null;
            }
            function be(e, t) {
                var r, i, n, a, s;
                if (null == t) return null;
                for(i = [
                    t
                ], a = [], s = {}, r = 0; r < e.length; r += 1)s[e[r]] = !0;
                for(; i.length > 0;)if ((n = i.pop()).name in s) a.push(n);
                else for(r = n.children.length - 1; r >= 0; r -= 1)i.push(n.children[r]);
                return a;
            }
            function me(t) {
                var r, i, n, a, s;
                if (null === t) return null;
                for(r = [], i = be([
                    "group",
                    "mailbox"
                ], t), n = 0; n < i.length; n += 1)"group" === (a = i[n]).name ? r.push(ge(a)) : "mailbox" === a.name && r.push(we(a));
                return s = {
                    ast: t,
                    addresses: r
                }, e.simple && (s = function(e) {
                    var t;
                    if (e && e.addresses) for(t = 0; t < e.addresses.length; t += 1)delete e.addresses[t].node;
                    return e;
                }(s)), e.oneResult ? function(t) {
                    if (!t) return null;
                    if (!e.partial && t.addresses.length > 1) return null;
                    return t.addresses && t.addresses[0];
                }(s) : e.simple ? s && s.addresses : s;
            }
            function ge(e) {
                var t, r = ye("display-name", e), i = [], n = be([
                    "mailbox"
                ], e);
                for(t = 0; t < n.length; t += 1)i.push(we(n[t]));
                return {
                    node: e,
                    parts: {
                        name: r
                    },
                    type: e.name,
                    name: ve(r),
                    addresses: i
                };
            }
            function we(e) {
                var t = ye("display-name", e), r = ye("addr-spec", e), i = function(e, t) {
                    var r, i, n, a;
                    if (null == t) return null;
                    for(i = [
                        t
                    ], a = []; i.length > 0;)for((n = i.pop()).name === e && a.push(n), r = n.children.length - 1; r >= 0; r -= 1)i.push(n.children[r]);
                    return a;
                }("cfws", e), n = be([
                    "comment"
                ], e), a = ye("local-part", r), s = ye("domain", r);
                return {
                    node: e,
                    parts: {
                        name: t,
                        address: r,
                        local: a,
                        domain: s,
                        comments: i
                    },
                    type: e.name,
                    name: ve(t),
                    address: ve(r),
                    local: ve(a),
                    domain: ve(s),
                    comments: _e(n),
                    groupName: ve(e.groupName)
                };
            }
            function ve(e) {
                return null != e ? e.semantic : null;
            }
            function _e(e) {
                var t = "";
                if (e) for(var r = 0; r < e.length; r += 1)t += ve(e[r]);
                return t;
            }
            var ke, Ae, Se, Ee, Pe;
            if (null === (e = i(e, {}))) return null;
            if (ke = e.input, Pe = ({
                address: O,
                "address-list": V,
                "angle-addr": L,
                from: function() {
                    return o("from", f(G, V)());
                },
                group: W,
                mailbox: N,
                "mailbox-list": G,
                "reply-to": function() {
                    return o("reply-to", V());
                },
                sender: function() {
                    return o("sender", f(N, O)());
                }
            })[e.startAt] || V, !e.strict) {
                if (a(), e.strict = !0, Ee = Pe(ke), e.partial || !t()) return me(Ee);
                e.strict = !1;
            }
            return a(), Ee = Pe(ke), !e.partial && t() ? null : me(Ee);
        }
        function i(e, t) {
            function r(e) {
                return "[object String]" === Object.prototype.toString.call(e);
            }
            function i(e) {
                return null == e;
            }
            var n, a;
            if (r(e)) e = {
                input: e
            };
            else if (!function(e) {
                return e === Object(e);
            }(e)) return null;
            if (!r(e.input)) return null;
            if (!t) return null;
            for(a in n = {
                oneResult: !1,
                partial: !1,
                rejectTLD: !1,
                rfc6532: !1,
                simple: !1,
                startAt: "address-list",
                strict: !1,
                atInDisplayName: !1
            })i(e[a]) && (e[a] = i(t[a]) ? n[a] : t[a]);
            return e;
        }
        r.parseOneAddress = function(e) {
            return r(i(e, {
                oneResult: !0,
                rfc6532: !0,
                simple: !0,
                startAt: "address-list"
            }));
        }, r.parseAddressList = function(e) {
            return r(i(e, {
                rfc6532: !0,
                simple: !0,
                startAt: "address-list"
            }));
        }, r.parseFrom = function(e) {
            return r(i(e, {
                rfc6532: !0,
                simple: !0,
                startAt: "from"
            }));
        }, r.parseSender = function(e) {
            return r(i(e, {
                oneResult: !0,
                rfc6532: !0,
                simple: !0,
                startAt: "sender"
            }));
        }, r.parseReplyTo = function(e) {
            return r(i(e, {
                rfc6532: !0,
                simple: !0,
                startAt: "reply-to"
            }));
        }, e.exports = r;
    }();
});
class Ku {
    static get tag() {
        return ie.packet.userID;
    }
    constructor(){
        this.userID = "", this.name = "", this.email = "", this.comment = "";
    }
    static fromObject(e) {
        if ($.isString(e) || e.name && !$.isString(e.name) || e.email && !$.isEmailAddress(e.email) || e.comment && !$.isString(e.comment)) throw Error("Invalid user ID format");
        const t = new Ku;
        Object.assign(t, e);
        const r = [];
        return t.name && r.push(t.name), t.comment && r.push(`(${t.comment})`), t.email && r.push(`<${t.email}>`), t.userID = r.join(" "), t;
    }
    read(e, t = ne) {
        const r = $.decodeUTF8(e);
        if (r.length > t.maxUserIDLength) throw Error("User ID string is too long");
        try {
            const { name: e, address: t, comments: i } = Cu.parseOneAddress({
                input: r,
                atInDisplayName: !0
            });
            this.comment = i.replace(/^\(|\)$/g, ""), this.name = e, this.email = t;
        } catch (e) {}
        this.userID = r;
    }
    write() {
        return $.encodeUTF8(this.userID);
    }
    equals(e) {
        return e && e.userID === this.userID;
    }
}
class Du extends xu {
    static get tag() {
        return ie.packet.secretSubkey;
    }
    constructor(e = new Date, t = ne){
        super(e, t);
    }
}
class Ru {
    static get tag() {
        return ie.packet.trust;
    }
    read() {
        throw new bn("Trust packets are not supported");
    }
    write() {
        throw new bn("Trust packets are not supported");
    }
}
const Uu = /*#__PURE__*/ $.constructAllowedPackets([
    eu
]);
class Iu {
    constructor(e){
        this.packets = e || new nu;
    }
    write() {
        return this.packets.write();
    }
    armor(e = ne) {
        return le(ie.armor.signature, this.write(), void 0, void 0, void 0, e);
    }
    getSigningKeyIDs() {
        return this.packets.map((e)=>e.issuerKeyID);
    }
}
async function Bu({ armoredSignature: e, binarySignature: t, config: r, ...i }) {
    r = {
        ...ne,
        ...r
    };
    let n = e || t;
    if (!n) throw Error("readSignature: must pass options object containing `armoredSignature` or `binarySignature`");
    if (e && !$.isString(e)) throw Error("readSignature: options.armoredSignature must be a string");
    if (t && !$.isUint8Array(t)) throw Error("readSignature: options.binarySignature must be a Uint8Array");
    const a = Object.keys(i);
    if (a.length > 0) throw Error("Unknown option: " + a.join(", "));
    if (e) {
        const { type: e, data: t } = await fe(n, r);
        if (e !== ie.armor.signature) throw Error("Armored text not of type signature");
        n = t;
    }
    const s = await nu.fromBinary(n, Uu, r);
    return new Iu(s);
}
async function Tu(e, t) {
    const r = new Du(e.date, t);
    return r.packets = null, r.algorithm = ie.write(ie.publicKey, e.algorithm), await r.generate(e.rsaBits, e.curve), await r.computeFingerprintAndKeyID(), r;
}
async function zu(e, t) {
    const r = new xu(e.date, t);
    return r.packets = null, r.algorithm = ie.write(ie.publicKey, e.algorithm), await r.generate(e.rsaBits, e.curve, e.config), await r.computeFingerprintAndKeyID(), r;
}
async function qu(e, t, r, i, n = new Date, a) {
    let s, o;
    for(let c = e.length - 1; c >= 0; c--)try {
        (!s || e[c].created >= s.created) && (await e[c].verify(t, r, i, n, void 0, a), s = e[c]);
    } catch (e) {
        o = e;
    }
    if (!s) throw $.wrapError(`Could not find valid ${ie.read(ie.signature, r)} signature in key ${t.getKeyID().toHex()}`.replace("certGeneric ", "self-").replace(/([a-z])([A-Z])/g, (e, t, r)=>t + " " + r.toLowerCase()), o);
    return s;
}
function Fu(e, t, r = new Date) {
    const i = $.normalizeDate(r);
    if (null !== i) {
        const r = Gu(e, t);
        return !(e.created <= i && i < r);
    }
    return !1;
}
async function Ou(e, t, r, i) {
    const n = {};
    n.key = t, n.bind = e;
    const a = new eu;
    return a.signatureType = ie.signature.subkeyBinding, a.publicKeyAlgorithm = t.algorithm, a.hashAlgorithm = await Nu(null, e, void 0, void 0, i), r.sign ? (a.keyFlags = [
        ie.keyFlags.signData
    ], a.embeddedSignature = await Lu(n, null, e, {
        signatureType: ie.signature.keyBinding
    }, r.date, void 0, void 0, void 0, i)) : a.keyFlags = [
        ie.keyFlags.encryptCommunication | ie.keyFlags.encryptStorage
    ], r.keyExpirationTime > 0 && (a.keyExpirationTime = r.keyExpirationTime, a.keyNeverExpires = !1), await a.sign(t, n, r.date), a;
}
async function Nu(e, t, r = new Date, i = {}, n) {
    let a = n.preferredHashAlgorithm, s = a;
    if (e) {
        const t = await e.getPrimaryUser(r, i, n);
        t.selfCertification.preferredHashAlgorithms && ([s] = t.selfCertification.preferredHashAlgorithms, a = ua.hash.getHashByteLength(a) <= ua.hash.getHashByteLength(s) ? s : a);
    }
    switch(Object.getPrototypeOf(t)){
        case xu.prototype:
        case _u.prototype:
        case Du.prototype:
        case Eu.prototype:
            switch(t.algorithm){
                case ie.publicKey.ecdh:
                case ie.publicKey.ecdsa:
                case ie.publicKey.eddsa:
                    s = ua.publicKey.elliptic.getPreferredHashAlgo(t.publicParams.oid);
            }
    }
    return ua.hash.getHashByteLength(a) <= ua.hash.getHashByteLength(s) ? s : a;
}
async function ju(e, t = [], r = new Date, i = [], n = ne) {
    const a = {
        symmetric: ie.symmetric.aes128,
        aead: ie.aead.eax,
        compression: ie.compression.uncompressed
    }[e], s = {
        symmetric: n.preferredSymmetricAlgorithm,
        aead: n.preferredAEADAlgorithm,
        compression: n.preferredCompressionAlgorithm
    }[e], o = {
        symmetric: "preferredSymmetricAlgorithms",
        aead: "preferredAEADAlgorithms",
        compression: "preferredCompressionAlgorithms"
    }[e], c = await Promise.all(t.map(async function(e, t) {
        const a = (await e.getPrimaryUser(r, i[t], n)).selfCertification[o];
        return !!a && a.indexOf(s) >= 0;
    }));
    return c.every(Boolean) ? s : a;
}
async function Lu(e, t, r, i, n, a, s = [], o = !1, c) {
    if (r.isDummy()) throw Error("Cannot sign with a gnu-dummy key.");
    if (!r.isDecrypted()) throw Error("Signing key is not decrypted.");
    const u = new eu;
    return Object.assign(u, i), u.publicKeyAlgorithm = r.algorithm, u.hashAlgorithm = await Nu(t, r, n, a, c), u.rawNotations = s, await u.sign(r, e, n, o), u;
}
async function Wu(e, t, r, i = new Date, n) {
    (e = e[r]) && (t[r].length ? await Promise.all(e.map(async function(e) {
        e.isExpired(i) || n && !await n(e) || t[r].some(function(t) {
            return $.equalsUint8Array(t.writeParams(), e.writeParams());
        }) || t[r].push(e);
    })) : t[r] = e);
}
async function Hu(e, t, r, i, n, a, s = new Date, o) {
    a = a || e;
    const c = [];
    return await Promise.all(i.map(async function(e) {
        try {
            n && !e.issuerKeyID.equals(n.issuerKeyID) || (await e.verify(a, t, r, o.revocationsExpire ? s : null, !1, o), c.push(e.issuerKeyID));
        } catch (e) {}
    })), n ? (n.revoked = !!c.some((e)=>e.equals(n.issuerKeyID)) || n.revoked || !1, n.revoked) : c.length > 0;
}
function Gu(e, t) {
    let r;
    return !1 === t.keyNeverExpires && (r = e.created.getTime() + 1e3 * t.keyExpirationTime), r ? new Date(r) : 1 / 0;
}
function Vu(e, t = {}) {
    switch(e.type = e.type || t.type, e.curve = e.curve || t.curve, e.rsaBits = e.rsaBits || t.rsaBits, e.keyExpirationTime = void 0 !== e.keyExpirationTime ? e.keyExpirationTime : t.keyExpirationTime, e.passphrase = $.isString(e.passphrase) ? e.passphrase : t.passphrase, e.date = e.date || t.date, e.sign = e.sign || !1, e.type){
        case "ecc":
            try {
                e.curve = ie.write(ie.curve, e.curve);
            } catch (e) {
                throw Error("Unknown curve");
            }
            e.curve !== ie.curve.ed25519 && e.curve !== ie.curve.curve25519 || (e.curve = e.sign ? ie.curve.ed25519 : ie.curve.curve25519), e.sign ? e.algorithm = e.curve === ie.curve.ed25519 ? ie.publicKey.eddsa : ie.publicKey.ecdsa : e.algorithm = ie.publicKey.ecdh;
            break;
        case "rsa":
            e.algorithm = ie.publicKey.rsaEncryptSign;
            break;
        default:
            throw Error("Unsupported key type " + e.type);
    }
    return e;
}
function $u(e, t) {
    const r = e.algorithm;
    return r !== ie.publicKey.rsaEncrypt && r !== ie.publicKey.elgamal && r !== ie.publicKey.ecdh && (!t.keyFlags || 0 != (t.keyFlags[0] & ie.keyFlags.signData));
}
function Zu(e, t) {
    const r = e.algorithm;
    return r !== ie.publicKey.dsa && r !== ie.publicKey.rsaSign && r !== ie.publicKey.ecdsa && r !== ie.publicKey.eddsa && (!t.keyFlags || 0 != (t.keyFlags[0] & ie.keyFlags.encryptCommunication) || 0 != (t.keyFlags[0] & ie.keyFlags.encryptStorage));
}
function Yu(e, t) {
    return !!t.allowInsecureDecryptionWithSigningKeys || !e.keyFlags || 0 != (e.keyFlags[0] & ie.keyFlags.encryptCommunication) || 0 != (e.keyFlags[0] & ie.keyFlags.encryptStorage);
}
function Xu(e, t) {
    const r = ie.write(ie.publicKey, e.algorithm), i = e.getAlgorithmInfo();
    if (t.rejectPublicKeyAlgorithms.has(r)) throw Error(i.algorithm + " keys are considered too weak.");
    switch(r){
        case ie.publicKey.rsaEncryptSign:
        case ie.publicKey.rsaSign:
        case ie.publicKey.rsaEncrypt:
            if (i.bits < t.minRSABits) throw Error(`RSA keys shorter than ${t.minRSABits} bits are considered too weak.`);
            break;
        case ie.publicKey.ecdsa:
        case ie.publicKey.eddsa:
        case ie.publicKey.ecdh:
            if (t.rejectCurves.has(i.curve)) throw Error(`Support for ${i.algorithm} keys using curve ${i.curve} is disabled.`);
    }
}
class Qu {
    constructor(e, t){
        this.userID = e.constructor.tag === ie.packet.userID ? e : null, this.userAttribute = e.constructor.tag === ie.packet.userAttribute ? e : null, this.selfCertifications = [], this.otherCertifications = [], this.revocationSignatures = [], this.mainKey = t;
    }
    toPacketList() {
        const e = new nu;
        return e.push(this.userID || this.userAttribute), e.push(...this.revocationSignatures), e.push(...this.selfCertifications), e.push(...this.otherCertifications), e;
    }
    clone() {
        const e = new Qu(this.userID || this.userAttribute, this.mainKey);
        return e.selfCertifications = [
            ...this.selfCertifications
        ], e.otherCertifications = [
            ...this.otherCertifications
        ], e.revocationSignatures = [
            ...this.revocationSignatures
        ], e;
    }
    async certify(e, t, r) {
        const i = this.mainKey.keyPacket, n = {
            userID: this.userID,
            userAttribute: this.userAttribute,
            key: i
        }, a = new Qu(n.userID || n.userAttribute, this.mainKey);
        return a.otherCertifications = await Promise.all(e.map(async function(e) {
            if (!e.isPrivate()) throw Error("Need private key for signing");
            if (e.hasSameFingerprintAs(i)) throw Error("The user's own key can only be used for self-certifications");
            const a = await e.getSigningKey(void 0, t, void 0, r);
            return Lu(n, e, a.keyPacket, {
                signatureType: ie.signature.certGeneric,
                keyFlags: [
                    ie.keyFlags.certifyKeys | ie.keyFlags.signData
                ]
            }, t, void 0, void 0, void 0, r);
        })), await a.update(this, t, r), a;
    }
    async isRevoked(e, t, r = new Date, i = ne) {
        const n = this.mainKey.keyPacket;
        return Hu(n, ie.signature.certRevocation, {
            key: n,
            userID: this.userID,
            userAttribute: this.userAttribute
        }, this.revocationSignatures, e, t, r, i);
    }
    async verifyCertificate(e, t, r = new Date, i) {
        const n = this, a = this.mainKey.keyPacket, s = {
            userID: this.userID,
            userAttribute: this.userAttribute,
            key: a
        }, { issuerKeyID: o } = e, c = t.filter((e)=>e.getKeys(o).length > 0);
        return 0 === c.length ? null : (await Promise.all(c.map(async (t)=>{
            const a = await t.getSigningKey(o, e.created, void 0, i);
            if (e.revoked || await n.isRevoked(e, a.keyPacket, r, i)) throw Error("User certificate is revoked");
            try {
                await e.verify(a.keyPacket, ie.signature.certGeneric, s, r, void 0, i);
            } catch (e) {
                throw $.wrapError("User certificate is invalid", e);
            }
        })), !0);
    }
    async verifyAllCertifications(e, t = new Date, r) {
        const i = this, n = this.selfCertifications.concat(this.otherCertifications);
        return Promise.all(n.map(async (n)=>({
                keyID: n.issuerKeyID,
                valid: await i.verifyCertificate(n, e, t, r).catch(()=>!1)
            })));
    }
    async verify(e = new Date, t) {
        if (!this.selfCertifications.length) throw Error("No self-certifications found");
        const r = this, i = this.mainKey.keyPacket, n = {
            userID: this.userID,
            userAttribute: this.userAttribute,
            key: i
        };
        let a;
        for(let s = this.selfCertifications.length - 1; s >= 0; s--)try {
            const a = this.selfCertifications[s];
            if (a.revoked || await r.isRevoked(a, void 0, e, t)) throw Error("Self-certification is revoked");
            try {
                await a.verify(i, ie.signature.certGeneric, n, e, void 0, t);
            } catch (e) {
                throw $.wrapError("Self-certification is invalid", e);
            }
            return !0;
        } catch (e) {
            a = e;
        }
        throw a;
    }
    async update(e, t, r) {
        const i = this.mainKey.keyPacket, n = {
            userID: this.userID,
            userAttribute: this.userAttribute,
            key: i
        };
        await Wu(e, this, "selfCertifications", t, async function(e) {
            try {
                return await e.verify(i, ie.signature.certGeneric, n, t, !1, r), !0;
            } catch (e) {
                return !1;
            }
        }), await Wu(e, this, "otherCertifications", t), await Wu(e, this, "revocationSignatures", t, function(e) {
            return Hu(i, ie.signature.certRevocation, n, [
                e
            ], void 0, void 0, t, r);
        });
    }
    async revoke(e, { flag: t = ie.reasonForRevocation.noReason, string: r = "" } = {}, i = new Date, n = ne) {
        const a = {
            userID: this.userID,
            userAttribute: this.userAttribute,
            key: e
        }, s = new Qu(a.userID || a.userAttribute, this.mainKey);
        return s.revocationSignatures.push(await Lu(a, null, e, {
            signatureType: ie.signature.certRevocation,
            reasonForRevocationFlag: ie.write(ie.reasonForRevocation, t),
            reasonForRevocationString: r
        }, i, void 0, void 0, !1, n)), await s.update(this), s;
    }
}
class Ju {
    constructor(e, t){
        this.keyPacket = e, this.bindingSignatures = [], this.revocationSignatures = [], this.mainKey = t;
    }
    toPacketList() {
        const e = new nu;
        return e.push(this.keyPacket), e.push(...this.revocationSignatures), e.push(...this.bindingSignatures), e;
    }
    clone() {
        const e = new Ju(this.keyPacket, this.mainKey);
        return e.bindingSignatures = [
            ...this.bindingSignatures
        ], e.revocationSignatures = [
            ...this.revocationSignatures
        ], e;
    }
    async isRevoked(e, t, r = new Date, i = ne) {
        const n = this.mainKey.keyPacket;
        return Hu(n, ie.signature.subkeyRevocation, {
            key: n,
            bind: this.keyPacket
        }, this.revocationSignatures, e, t, r, i);
    }
    async verify(e = new Date, t = ne) {
        const r = this.mainKey.keyPacket, i = {
            key: r,
            bind: this.keyPacket
        }, n = await qu(this.bindingSignatures, r, ie.signature.subkeyBinding, i, e, t);
        if (n.revoked || await this.isRevoked(n, null, e, t)) throw Error("Subkey is revoked");
        if (Fu(this.keyPacket, n, e)) throw Error("Subkey is expired");
        return n;
    }
    async getExpirationTime(e = new Date, t = ne) {
        const r = this.mainKey.keyPacket, i = {
            key: r,
            bind: this.keyPacket
        };
        let n;
        try {
            n = await qu(this.bindingSignatures, r, ie.signature.subkeyBinding, i, e, t);
        } catch (e) {
            return null;
        }
        const a = Gu(this.keyPacket, n), s = n.getExpirationTime();
        return a < s ? a : s;
    }
    async update(e, t = new Date, r = ne) {
        const i = this.mainKey.keyPacket;
        if (!this.hasSameFingerprintAs(e)) throw Error("Subkey update method: fingerprints of subkeys not equal");
        this.keyPacket.constructor.tag === ie.packet.publicSubkey && e.keyPacket.constructor.tag === ie.packet.secretSubkey && (this.keyPacket = e.keyPacket);
        const n = this, a = {
            key: i,
            bind: n.keyPacket
        };
        await Wu(e, this, "bindingSignatures", t, async function(e) {
            for(let t = 0; t < n.bindingSignatures.length; t++)if (n.bindingSignatures[t].issuerKeyID.equals(e.issuerKeyID)) return e.created > n.bindingSignatures[t].created && (n.bindingSignatures[t] = e), !1;
            try {
                return await e.verify(i, ie.signature.subkeyBinding, a, t, void 0, r), !0;
            } catch (e) {
                return !1;
            }
        }), await Wu(e, this, "revocationSignatures", t, function(e) {
            return Hu(i, ie.signature.subkeyRevocation, a, [
                e
            ], void 0, void 0, t, r);
        });
    }
    async revoke(e, { flag: t = ie.reasonForRevocation.noReason, string: r = "" } = {}, i = new Date, n = ne) {
        const a = {
            key: e,
            bind: this.keyPacket
        }, s = new Ju(this.keyPacket, this.mainKey);
        return s.revocationSignatures.push(await Lu(a, null, e, {
            signatureType: ie.signature.subkeyRevocation,
            reasonForRevocationFlag: ie.write(ie.reasonForRevocation, t),
            reasonForRevocationString: r
        }, i, void 0, void 0, !1, n)), await s.update(this), s;
    }
    hasSameFingerprintAs(e) {
        return this.keyPacket.hasSameFingerprintAs(e.keyPacket || e);
    }
}
[
    "getKeyID",
    "getFingerprint",
    "getAlgorithmInfo",
    "getCreationTime",
    "isDecrypted"
].forEach((e)=>{
    Ju.prototype[e] = function() {
        return this.keyPacket[e]();
    };
});
const eh = /*#__PURE__*/ $.constructAllowedPackets([
    eu
]), th = new Set([
    ie.packet.publicKey,
    ie.packet.privateKey
]), rh = new Set([
    ie.packet.publicKey,
    ie.packet.privateKey,
    ie.packet.publicSubkey,
    ie.packet.privateSubkey
]);
class ih {
    packetListToStructure(e, t = new Set) {
        let r, i, n, a;
        for (const s of e){
            if (s instanceof mn) {
                rh.has(s.tag) && !a && (a = th.has(s.tag) ? th : rh);
                continue;
            }
            const e = s.constructor.tag;
            if (a) {
                if (!a.has(e)) continue;
                a = null;
            }
            if (t.has(e)) throw Error("Unexpected packet type: " + e);
            switch(e){
                case ie.packet.publicKey:
                case ie.packet.secretKey:
                    if (this.keyPacket) throw Error("Key block contains multiple keys");
                    if (this.keyPacket = s, i = this.getKeyID(), !i) throw Error("Missing Key ID");
                    break;
                case ie.packet.userID:
                case ie.packet.userAttribute:
                    r = new Qu(s, this), this.users.push(r);
                    break;
                case ie.packet.publicSubkey:
                case ie.packet.secretSubkey:
                    r = null, n = new Ju(s, this), this.subkeys.push(n);
                    break;
                case ie.packet.signature:
                    switch(s.signatureType){
                        case ie.signature.certGeneric:
                        case ie.signature.certPersona:
                        case ie.signature.certCasual:
                        case ie.signature.certPositive:
                            if (!r) {
                                $.printDebug("Dropping certification signatures without preceding user packet");
                                continue;
                            }
                            s.issuerKeyID.equals(i) ? r.selfCertifications.push(s) : r.otherCertifications.push(s);
                            break;
                        case ie.signature.certRevocation:
                            r ? r.revocationSignatures.push(s) : this.directSignatures.push(s);
                            break;
                        case ie.signature.key:
                            this.directSignatures.push(s);
                            break;
                        case ie.signature.subkeyBinding:
                            if (!n) {
                                $.printDebug("Dropping subkey binding signature without preceding subkey packet");
                                continue;
                            }
                            n.bindingSignatures.push(s);
                            break;
                        case ie.signature.keyRevocation:
                            this.revocationSignatures.push(s);
                            break;
                        case ie.signature.subkeyRevocation:
                            if (!n) {
                                $.printDebug("Dropping subkey revocation signature without preceding subkey packet");
                                continue;
                            }
                            n.revocationSignatures.push(s);
                    }
            }
        }
    }
    toPacketList() {
        const e = new nu;
        return e.push(this.keyPacket), e.push(...this.revocationSignatures), e.push(...this.directSignatures), this.users.map((t)=>e.push(...t.toPacketList())), this.subkeys.map((t)=>e.push(...t.toPacketList())), e;
    }
    clone(e = !1) {
        const t = new this.constructor(this.toPacketList());
        return e && t.getKeys().forEach((e)=>{
            if (e.keyPacket = Object.create(Object.getPrototypeOf(e.keyPacket), Object.getOwnPropertyDescriptors(e.keyPacket)), !e.keyPacket.isDecrypted()) return;
            const t = {};
            Object.keys(e.keyPacket.privateParams).forEach((r)=>{
                t[r] = new Uint8Array(e.keyPacket.privateParams[r]);
            }), e.keyPacket.privateParams = t;
        }), t;
    }
    getSubkeys(e = null) {
        return this.subkeys.filter((t)=>!e || t.getKeyID().equals(e, !0));
    }
    getKeys(e = null) {
        const t = [];
        return e && !this.getKeyID().equals(e, !0) || t.push(this), t.concat(this.getSubkeys(e));
    }
    getKeyIDs() {
        return this.getKeys().map((e)=>e.getKeyID());
    }
    getUserIDs() {
        return this.users.map((e)=>e.userID ? e.userID.userID : null).filter((e)=>null !== e);
    }
    write() {
        return this.toPacketList().write();
    }
    async getSigningKey(e = null, t = new Date, r = {}, i = ne) {
        await this.verifyPrimaryKey(t, r, i);
        const n = this.keyPacket, a = this.subkeys.slice().sort((e, t)=>t.keyPacket.created - e.keyPacket.created);
        let s;
        for (const r of a)if (!e || r.getKeyID().equals(e)) try {
            await r.verify(t, i);
            const e = {
                key: n,
                bind: r.keyPacket
            }, a = await qu(r.bindingSignatures, n, ie.signature.subkeyBinding, e, t, i);
            if (!$u(r.keyPacket, a)) continue;
            if (!a.embeddedSignature) throw Error("Missing embedded signature");
            return await qu([
                a.embeddedSignature
            ], r.keyPacket, ie.signature.keyBinding, e, t, i), Xu(r.keyPacket, i), r;
        } catch (e) {
            s = e;
        }
        try {
            const a = await this.getPrimaryUser(t, r, i);
            if ((!e || n.getKeyID().equals(e)) && $u(n, a.selfCertification)) return Xu(n, i), this;
        } catch (e) {
            s = e;
        }
        throw $.wrapError("Could not find valid signing key packet in key " + this.getKeyID().toHex(), s);
    }
    async getEncryptionKey(e, t = new Date, r = {}, i = ne) {
        await this.verifyPrimaryKey(t, r, i);
        const n = this.keyPacket, a = this.subkeys.slice().sort((e, t)=>t.keyPacket.created - e.keyPacket.created);
        let s;
        for (const r of a)if (!e || r.getKeyID().equals(e)) try {
            await r.verify(t, i);
            const e = {
                key: n,
                bind: r.keyPacket
            }, a = await qu(r.bindingSignatures, n, ie.signature.subkeyBinding, e, t, i);
            if (Zu(r.keyPacket, a)) return Xu(r.keyPacket, i), r;
        } catch (e) {
            s = e;
        }
        try {
            const a = await this.getPrimaryUser(t, r, i);
            if ((!e || n.getKeyID().equals(e)) && Zu(n, a.selfCertification)) return Xu(n, i), this;
        } catch (e) {
            s = e;
        }
        throw $.wrapError("Could not find valid encryption key packet in key " + this.getKeyID().toHex(), s);
    }
    async isRevoked(e, t, r = new Date, i = ne) {
        return Hu(this.keyPacket, ie.signature.keyRevocation, {
            key: this.keyPacket
        }, this.revocationSignatures, e, t, r, i);
    }
    async verifyPrimaryKey(e = new Date, t = {}, r = ne) {
        const i = this.keyPacket;
        if (await this.isRevoked(null, null, e, r)) throw Error("Primary key is revoked");
        const { selfCertification: n } = await this.getPrimaryUser(e, t, r);
        if (Fu(i, n, e)) throw Error("Primary key is expired");
        const a = await qu(this.directSignatures, i, ie.signature.key, {
            key: i
        }, e, r).catch(()=>{});
        if (a && Fu(i, a, e)) throw Error("Primary key is expired");
    }
    async getExpirationTime(e, t = ne) {
        let r;
        try {
            const { selfCertification: i } = await this.getPrimaryUser(null, e, t), n = Gu(this.keyPacket, i), a = i.getExpirationTime(), s = await qu(this.directSignatures, this.keyPacket, ie.signature.key, {
                key: this.keyPacket
            }, null, t).catch(()=>{});
            if (s) {
                const e = Gu(this.keyPacket, s);
                r = Math.min(n, a, e);
            } else r = n < a ? n : a;
        } catch (e) {
            r = null;
        }
        return $.normalizeDate(r);
    }
    async getPrimaryUser(e = new Date, t = {}, r = ne) {
        const i = this.keyPacket, n = [];
        let a;
        for(let s = 0; s < this.users.length; s++)try {
            const a = this.users[s];
            if (!a.userID) continue;
            if (void 0 !== t.name && a.userID.name !== t.name || void 0 !== t.email && a.userID.email !== t.email || void 0 !== t.comment && a.userID.comment !== t.comment) throw Error("Could not find user that matches that user ID");
            const o = {
                userID: a.userID,
                key: i
            }, c = await qu(a.selfCertifications, i, ie.signature.certGeneric, o, e, r);
            n.push({
                index: s,
                user: a,
                selfCertification: c
            });
        } catch (e) {
            a = e;
        }
        if (!n.length) throw a || Error("Could not find primary user");
        await Promise.all(n.map(async function(t) {
            return t.selfCertification.revoked || t.user.isRevoked(t.selfCertification, null, e, r);
        }));
        const s = n.sort(function(e, t) {
            const r = e.selfCertification, i = t.selfCertification;
            return i.revoked - r.revoked || r.isPrimaryUserID - i.isPrimaryUserID || r.created - i.created;
        }).pop(), { user: o, selfCertification: c } = s;
        if (c.revoked || await o.isRevoked(c, null, e, r)) throw Error("Primary user is revoked");
        return s;
    }
    async update(e, t = new Date, r = ne) {
        if (!this.hasSameFingerprintAs(e)) throw Error("Primary key fingerprints must be equal to update the key");
        if (!this.isPrivate() && e.isPrivate()) {
            if (!(this.subkeys.length === e.subkeys.length && this.subkeys.every((t)=>e.subkeys.some((e)=>t.hasSameFingerprintAs(e))))) throw Error("Cannot update public key with private key if subkeys mismatch");
            return e.update(this, r);
        }
        const i = this.clone();
        return await Wu(e, i, "revocationSignatures", t, (n)=>Hu(i.keyPacket, ie.signature.keyRevocation, i, [
                n
            ], null, e.keyPacket, t, r)), await Wu(e, i, "directSignatures", t), await Promise.all(e.users.map(async (e)=>{
            const n = i.users.filter((t)=>e.userID && e.userID.equals(t.userID) || e.userAttribute && e.userAttribute.equals(t.userAttribute));
            if (n.length > 0) await Promise.all(n.map((i)=>i.update(e, t, r)));
            else {
                const t = e.clone();
                t.mainKey = i, i.users.push(t);
            }
        })), await Promise.all(e.subkeys.map(async (e)=>{
            const n = i.subkeys.filter((t)=>t.hasSameFingerprintAs(e));
            if (n.length > 0) await Promise.all(n.map((i)=>i.update(e, t, r)));
            else {
                const t = e.clone();
                t.mainKey = i, i.subkeys.push(t);
            }
        })), i;
    }
    async getRevocationCertificate(e = new Date, t = ne) {
        const r = {
            key: this.keyPacket
        }, i = await qu(this.revocationSignatures, this.keyPacket, ie.signature.keyRevocation, r, e, t), n = new nu;
        return n.push(i), le(ie.armor.publicKey, n.write(), null, null, "This is a revocation certificate");
    }
    async applyRevocationCertificate(e, t = new Date, r = ne) {
        const i = await fe(e, r), n = (await nu.fromBinary(i.data, eh, r)).findPacket(ie.packet.signature);
        if (!n || n.signatureType !== ie.signature.keyRevocation) throw Error("Could not find revocation signature packet");
        if (!n.issuerKeyID.equals(this.getKeyID())) throw Error("Revocation signature does not match key");
        try {
            await n.verify(this.keyPacket, ie.signature.keyRevocation, {
                key: this.keyPacket
            }, t, void 0, r);
        } catch (e) {
            throw $.wrapError("Could not verify revocation signature", e);
        }
        const a = this.clone();
        return a.revocationSignatures.push(n), a;
    }
    async signPrimaryUser(e, t, r, i = ne) {
        const { index: n, user: a } = await this.getPrimaryUser(t, r, i), s = await a.certify(e, t, i), o = this.clone();
        return o.users[n] = s, o;
    }
    async signAllUsers(e, t = new Date, r = ne) {
        const i = this.clone();
        return i.users = await Promise.all(this.users.map(function(i) {
            return i.certify(e, t, r);
        })), i;
    }
    async verifyPrimaryUser(e, t = new Date, r, i = ne) {
        const n = this.keyPacket, { user: a } = await this.getPrimaryUser(t, r, i);
        return e ? await a.verifyAllCertifications(e, t, i) : [
            {
                keyID: n.getKeyID(),
                valid: await a.verify(t, i).catch(()=>!1)
            }
        ];
    }
    async verifyAllUsers(e, t = new Date, r = ne) {
        const i = this.keyPacket, n = [];
        return await Promise.all(this.users.map(async (a)=>{
            const s = e ? await a.verifyAllCertifications(e, t, r) : [
                {
                    keyID: i.getKeyID(),
                    valid: await a.verify(t, r).catch(()=>!1)
                }
            ];
            n.push(...s.map((e)=>({
                    userID: a.userID ? a.userID.userID : null,
                    userAttribute: a.userAttribute,
                    keyID: e.keyID,
                    valid: e.valid
                })));
        })), n;
    }
}
[
    "getKeyID",
    "getFingerprint",
    "getAlgorithmInfo",
    "getCreationTime",
    "hasSameFingerprintAs"
].forEach((e)=>{
    ih.prototype[e] = Ju.prototype[e];
});
class nh extends ih {
    constructor(e){
        if (super(), this.keyPacket = null, this.revocationSignatures = [], this.directSignatures = [], this.users = [], this.subkeys = [], e && (this.packetListToStructure(e, new Set([
            ie.packet.secretKey,
            ie.packet.secretSubkey
        ])), !this.keyPacket)) throw Error("Invalid key: missing public-key packet");
    }
    isPrivate() {
        return !1;
    }
    toPublic() {
        return this;
    }
    armor(e = ne) {
        return le(ie.armor.publicKey, this.toPacketList().write(), void 0, void 0, void 0, e);
    }
}
class ah extends nh {
    constructor(e){
        if (super(), this.packetListToStructure(e, new Set([
            ie.packet.publicKey,
            ie.packet.publicSubkey
        ])), !this.keyPacket) throw Error("Invalid key: missing private-key packet");
    }
    isPrivate() {
        return !0;
    }
    toPublic() {
        const e = new nu, t = this.toPacketList();
        for (const r of t)switch(r.constructor.tag){
            case ie.packet.secretKey:
                {
                    const t = _u.fromSecretKeyPacket(r);
                    e.push(t);
                    break;
                }
            case ie.packet.secretSubkey:
                {
                    const t = Eu.fromSecretSubkeyPacket(r);
                    e.push(t);
                    break;
                }
            default:
                e.push(r);
        }
        return new nh(e);
    }
    armor(e = ne) {
        return le(ie.armor.privateKey, this.toPacketList().write(), void 0, void 0, void 0, e);
    }
    async getDecryptionKeys(e, t = new Date, r = {}, i = ne) {
        const n = this.keyPacket, a = [];
        for(let r = 0; r < this.subkeys.length; r++)if (!e || this.subkeys[r].getKeyID().equals(e, !0)) try {
            const e = {
                key: n,
                bind: this.subkeys[r].keyPacket
            };
            Yu(await qu(this.subkeys[r].bindingSignatures, n, ie.signature.subkeyBinding, e, t, i), i) && a.push(this.subkeys[r]);
        } catch (e) {}
        const s = await this.getPrimaryUser(t, r, i);
        return e && !n.getKeyID().equals(e, !0) || !Yu(s.selfCertification, i) || a.push(this), a;
    }
    isDecrypted() {
        return this.getKeys().some(({ keyPacket: e })=>e.isDecrypted());
    }
    async validate(e = ne) {
        if (!this.isPrivate()) throw Error("Cannot validate a public key");
        let t;
        if (this.keyPacket.isDummy()) {
            const r = await this.getSigningKey(null, null, void 0, {
                ...e,
                rejectPublicKeyAlgorithms: new Set,
                minRSABits: 0
            });
            r && !r.keyPacket.isDummy() && (t = r.keyPacket);
        } else t = this.keyPacket;
        if (t) return t.validate();
        {
            const e = this.getKeys(), t = e.map((e)=>e.keyPacket.isDummy()).every(Boolean);
            if (t) throw Error("Cannot validate an all-gnu-dummy key");
            return Promise.all(e.map(async (e)=>e.keyPacket.validate()));
        }
    }
    clearPrivateParams() {
        this.getKeys().forEach(({ keyPacket: e })=>{
            e.isDecrypted() && e.clearPrivateParams();
        });
    }
    async revoke({ flag: e = ie.reasonForRevocation.noReason, string: t = "" } = {}, r = new Date, i = ne) {
        if (!this.isPrivate()) throw Error("Need private key for revoking");
        const n = {
            key: this.keyPacket
        }, a = this.clone();
        return a.revocationSignatures.push(await Lu(n, null, this.keyPacket, {
            signatureType: ie.signature.keyRevocation,
            reasonForRevocationFlag: ie.write(ie.reasonForRevocation, e),
            reasonForRevocationString: t
        }, r, void 0, void 0, void 0, i)), a;
    }
    async addSubkey(e = {}) {
        const t = {
            ...ne,
            ...e.config
        };
        if (e.passphrase) throw Error("Subkey could not be encrypted here, please encrypt whole key");
        if (e.rsaBits < t.minRSABits) throw Error(`rsaBits should be at least ${t.minRSABits}, got: ${e.rsaBits}`);
        const r = this.keyPacket;
        if (r.isDummy()) throw Error("Cannot add subkey to gnu-dummy primary key");
        if (!r.isDecrypted()) throw Error("Key is not decrypted");
        const i = r.getAlgorithmInfo();
        i.type = i.curve ? "ecc" : "rsa", i.rsaBits = i.bits || 4096, i.curve = i.curve || "curve25519", e = Vu(e, i);
        const n = await Tu(e);
        Xu(n, t);
        const a = await Ou(n, r, e, t), s = this.toPacketList();
        return s.push(n, a), new ah(s);
    }
}
const sh = /*#__PURE__*/ $.constructAllowedPackets([
    _u,
    Eu,
    xu,
    Du,
    Ku,
    Pu,
    eu
]);
function oh(e) {
    for (const t of e)switch(t.constructor.tag){
        case ie.packet.secretKey:
            return new ah(e);
        case ie.packet.publicKey:
            return new nh(e);
    }
    throw Error("No key packet found");
}
async function ch(e, t, r, i) {
    r.passphrase && await e.encrypt(r.passphrase, i), await Promise.all(t.map(async function(e, t) {
        const n = r.subkeys[t].passphrase;
        n && await e.encrypt(n, i);
    }));
    const n = new nu;
    n.push(e), await Promise.all(r.userIDs.map(async function(t, n) {
        function a(e, t) {
            return [
                t,
                ...e.filter((e)=>e !== t)
            ];
        }
        const s = Ku.fromObject(t), o = {};
        o.userID = s, o.key = e;
        const c = new eu;
        return c.signatureType = ie.signature.certGeneric, c.publicKeyAlgorithm = e.algorithm, c.hashAlgorithm = await Nu(null, e, void 0, void 0, i), c.keyFlags = [
            ie.keyFlags.certifyKeys | ie.keyFlags.signData
        ], c.preferredSymmetricAlgorithms = a([
            ie.symmetric.aes256,
            ie.symmetric.aes128,
            ie.symmetric.aes192
        ], i.preferredSymmetricAlgorithm), i.aeadProtect && (c.preferredAEADAlgorithms = a([
            ie.aead.eax,
            ie.aead.ocb
        ], i.preferredAEADAlgorithm)), c.preferredHashAlgorithms = a([
            ie.hash.sha256,
            ie.hash.sha512
        ], i.preferredHashAlgorithm), c.preferredCompressionAlgorithms = a([
            ie.compression.zlib,
            ie.compression.zip,
            ie.compression.uncompressed
        ], i.preferredCompressionAlgorithm), 0 === n && (c.isPrimaryUserID = !0), c.features = [
            0
        ], c.features[0] |= ie.features.modificationDetection, i.aeadProtect && (c.features[0] |= ie.features.aead), i.v5Keys && (c.features[0] |= ie.features.v5Keys), r.keyExpirationTime > 0 && (c.keyExpirationTime = r.keyExpirationTime, c.keyNeverExpires = !1), await c.sign(e, o, r.date), {
            userIDPacket: s,
            signaturePacket: c
        };
    })).then((e)=>{
        e.forEach(({ userIDPacket: e, signaturePacket: t })=>{
            n.push(e), n.push(t);
        });
    }), await Promise.all(t.map(async function(t, n) {
        const a = r.subkeys[n];
        return {
            secretSubkeyPacket: t,
            subkeySignaturePacket: await Ou(t, e, a, i)
        };
    })).then((e)=>{
        e.forEach(({ secretSubkeyPacket: e, subkeySignaturePacket: t })=>{
            n.push(e), n.push(t);
        });
    });
    const a = {
        key: e
    };
    return n.push(await Lu(a, null, e, {
        signatureType: ie.signature.keyRevocation,
        reasonForRevocationFlag: ie.reasonForRevocation.noReason,
        reasonForRevocationString: ""
    }, r.date, void 0, void 0, void 0, i)), r.passphrase && e.clearPrivateParams(), await Promise.all(t.map(async function(e, t) {
        r.subkeys[t].passphrase && e.clearPrivateParams();
    })), new ah(n);
}
async function uh({ armoredKey: e, binaryKey: t, config: r, ...i }) {
    if (r = {
        ...ne,
        ...r
    }, !e && !t) throw Error("readKey: must pass options object containing `armoredKey` or `binaryKey`");
    if (e && !$.isString(e)) throw Error("readKey: options.armoredKey must be a string");
    if (t && !$.isUint8Array(t)) throw Error("readKey: options.binaryKey must be a Uint8Array");
    const n = Object.keys(i);
    if (n.length > 0) throw Error("Unknown option: " + n.join(", "));
    let a;
    if (e) {
        const { type: t, data: i } = await fe(e, r);
        if (t !== ie.armor.publicKey && t !== ie.armor.privateKey) throw Error("Armored text not of type key");
        a = i;
    } else a = t;
    return oh(await nu.fromBinary(a, sh, r));
}
async function hh({ armoredKey: e, binaryKey: t, config: r, ...i }) {
    if (r = {
        ...ne,
        ...r
    }, !e && !t) throw Error("readPrivateKey: must pass options object containing `armoredKey` or `binaryKey`");
    if (e && !$.isString(e)) throw Error("readPrivateKey: options.armoredKey must be a string");
    if (t && !$.isUint8Array(t)) throw Error("readPrivateKey: options.binaryKey must be a Uint8Array");
    const n = Object.keys(i);
    if (n.length > 0) throw Error("Unknown option: " + n.join(", "));
    let a;
    if (e) {
        const { type: t, data: i } = await fe(e, r);
        if (t !== ie.armor.privateKey) throw Error("Armored text not of type private key");
        a = i;
    } else a = t;
    const s = await nu.fromBinary(a, sh, r);
    return new ah(s);
}
async function dh({ armoredKeys: e, binaryKeys: t, config: r, ...i }) {
    r = {
        ...ne,
        ...r
    };
    let n = e || t;
    if (!n) throw Error("readKeys: must pass options object containing `armoredKeys` or `binaryKeys`");
    if (e && !$.isString(e)) throw Error("readKeys: options.armoredKeys must be a string");
    if (t && !$.isUint8Array(t)) throw Error("readKeys: options.binaryKeys must be a Uint8Array");
    const a = Object.keys(i);
    if (a.length > 0) throw Error("Unknown option: " + a.join(", "));
    if (e) {
        const { type: t, data: i } = await fe(e, r);
        if (t !== ie.armor.publicKey && t !== ie.armor.privateKey) throw Error("Armored text not of type key");
        n = i;
    }
    const s = [], o = await nu.fromBinary(n, sh, r), c = o.indexOfTag(ie.packet.publicKey, ie.packet.secretKey);
    if (0 === c.length) throw Error("No key packet found");
    for(let e = 0; e < c.length; e++){
        const t = oh(o.slice(c[e], c[e + 1]));
        s.push(t);
    }
    return s;
}
async function fh({ armoredKeys: e, binaryKeys: t, config: r }) {
    r = {
        ...ne,
        ...r
    };
    let i = e || t;
    if (!i) throw Error("readPrivateKeys: must pass options object containing `armoredKeys` or `binaryKeys`");
    if (e && !$.isString(e)) throw Error("readPrivateKeys: options.armoredKeys must be a string");
    if (t && !$.isUint8Array(t)) throw Error("readPrivateKeys: options.binaryKeys must be a Uint8Array");
    if (e) {
        const { type: t, data: n } = await fe(e, r);
        if (t !== ie.armor.privateKey) throw Error("Armored text not of type private key");
        i = n;
    }
    const n = [], a = await nu.fromBinary(i, sh, r), s = a.indexOfTag(ie.packet.secretKey);
    if (0 === s.length) throw Error("No secret key packet found");
    for(let e = 0; e < s.length; e++){
        const t = a.slice(s[e], s[e + 1]), r = new ah(t);
        n.push(r);
    }
    return n;
}
const lh = /*#__PURE__*/ $.constructAllowedPackets([
    Xc,
    su,
    mu,
    yu,
    Au,
    gu,
    vu,
    ru,
    eu
]), ph = /*#__PURE__*/ $.constructAllowedPackets([
    vu
]), yh = /*#__PURE__*/ $.constructAllowedPackets([
    eu
]);
class bh {
    constructor(e){
        this.packets = e || new nu;
    }
    getEncryptionKeyIDs() {
        const e = [];
        return this.packets.filterByTag(ie.packet.publicKeyEncryptedSessionKey).forEach(function(t) {
            e.push(t.publicKeyID);
        }), e;
    }
    getSigningKeyIDs() {
        const e = this.unwrapCompressed(), t = e.packets.filterByTag(ie.packet.onePassSignature);
        if (t.length > 0) return t.map((e)=>e.issuerKeyID);
        return e.packets.filterByTag(ie.packet.signature).map((e)=>e.issuerKeyID);
    }
    async decrypt(e, t, r, i = new Date, n = ne) {
        const a = r || await this.decryptSessionKeys(e, t, i, n), s = this.packets.filterByTag(ie.packet.symmetricallyEncryptedData, ie.packet.symEncryptedIntegrityProtectedData, ie.packet.aeadEncryptedData);
        if (0 === s.length) throw Error("No encrypted data found");
        const o = s[0];
        let c = null;
        const u = Promise.all(a.map(async ({ algorithm: e, data: t })=>{
            if (!$.isUint8Array(t) || !$.isString(e)) throw Error("Invalid session key for decryption.");
            try {
                const r = ie.write(ie.symmetric, e);
                await o.decrypt(r, t, n);
            } catch (e) {
                $.printDebugError(e), c = e;
            }
        }));
        if (L(o.encrypted), o.encrypted = null, await u, !o.packets || !o.packets.length) throw c || Error("Decryption failed.");
        const h = new bh(o.packets);
        return o.packets = new nu, h;
    }
    async decryptSessionKeys(e, t, r = new Date, i = ne) {
        let n, a = [];
        if (t) {
            const e = this.packets.filterByTag(ie.packet.symEncryptedSessionKey);
            if (0 === e.length) throw Error("No symmetrically encrypted session key packet found.");
            await Promise.all(t.map(async function(t, r) {
                let n;
                n = r ? await nu.fromBinary(e.write(), ph, i) : e, await Promise.all(n.map(async function(e) {
                    try {
                        await e.decrypt(t), a.push(e);
                    } catch (e) {
                        $.printDebugError(e);
                    }
                }));
            }));
        } else {
            if (!e) throw Error("No key or password specified.");
            {
                const t = this.packets.filterByTag(ie.packet.publicKeyEncryptedSessionKey);
                if (0 === t.length) throw Error("No public key encrypted session key packet found.");
                await Promise.all(t.map(async function(t) {
                    await Promise.all(e.map(async function(e) {
                        let s = [
                            ie.symmetric.aes256,
                            ie.symmetric.aes128,
                            ie.symmetric.tripledes,
                            ie.symmetric.cast5
                        ];
                        try {
                            const t = await e.getPrimaryUser(r, void 0, i);
                            t.selfCertification.preferredSymmetricAlgorithms && (s = s.concat(t.selfCertification.preferredSymmetricAlgorithms));
                        } catch (e) {}
                        const o = (await e.getDecryptionKeys(t.publicKeyID, null, void 0, i)).map((e)=>e.keyPacket);
                        await Promise.all(o.map(async function(e) {
                            if (!e || e.isDummy()) return;
                            if (!e.isDecrypted()) throw Error("Decryption key is not decrypted.");
                            if (i.constantTimePKCS1Decryption && (t.publicKeyAlgorithm === ie.publicKey.rsaEncrypt || t.publicKeyAlgorithm === ie.publicKey.rsaEncryptSign || t.publicKeyAlgorithm === ie.publicKey.rsaSign || t.publicKeyAlgorithm === ie.publicKey.elgamal)) {
                                const r = t.write();
                                await Promise.all(Array.from(i.constantTimePKCS1DecryptionSupportedSymmetricAlgorithms).map(async (t)=>{
                                    const i = new gu;
                                    i.read(r);
                                    const s = {
                                        sessionKeyAlgorithm: t,
                                        sessionKey: ua.generateSessionKey(t)
                                    };
                                    try {
                                        await i.decrypt(e, s), a.push(i);
                                    } catch (e) {
                                        $.printDebugError(e), n = e;
                                    }
                                }));
                            } else try {
                                if (await t.decrypt(e), !s.includes(ie.write(ie.symmetric, t.sessionKeyAlgorithm))) throw Error("A non-preferred symmetric algorithm was used.");
                                a.push(t);
                            } catch (e) {
                                $.printDebugError(e), n = e;
                            }
                        }));
                    })), L(t.encrypted), t.encrypted = null;
                }));
            }
        }
        if (a.length > 0) {
            if (a.length > 1) {
                const e = new Set;
                a = a.filter((t)=>{
                    const r = t.sessionKeyAlgorithm + $.uint8ArrayToString(t.sessionKey);
                    return !e.has(r) && (e.add(r), !0);
                });
            }
            return a.map((e)=>({
                    data: e.sessionKey,
                    algorithm: ie.read(ie.symmetric, e.sessionKeyAlgorithm)
                }));
        }
        throw n || Error("Session key decryption failed.");
    }
    getLiteralData() {
        const e = this.unwrapCompressed().packets.findPacket(ie.packet.literalData);
        return e && e.getBytes() || null;
    }
    getFilename() {
        const e = this.unwrapCompressed().packets.findPacket(ie.packet.literalData);
        return e && e.getFilename() || null;
    }
    getText() {
        const e = this.unwrapCompressed().packets.findPacket(ie.packet.literalData);
        return e ? e.getText() : null;
    }
    static async generateSessionKey(e = [], t = new Date, r = [], i = ne) {
        const n = await ju("symmetric", e, t, r, i), a = ie.read(ie.symmetric, n), s = i.aeadProtect && await async function(e, t = new Date, r = [], i = ne) {
            let n = !0;
            return await Promise.all(e.map(async function(e, a) {
                const s = await e.getPrimaryUser(t, r[a], i);
                s.selfCertification.features && s.selfCertification.features[0] & ie.features.aead || (n = !1);
            })), n;
        }(e, t, r, i) ? ie.read(ie.aead, await ju("aead", e, t, r, i)) : void 0;
        return {
            data: ua.generateSessionKey(n),
            algorithm: a,
            aeadAlgorithm: s
        };
    }
    async encrypt(e, t, r, i = !1, n = [], a = new Date, s = [], o = ne) {
        if (r) {
            if (!$.isUint8Array(r.data) || !$.isString(r.algorithm)) throw Error("Invalid session key for encryption.");
        } else if (e && e.length) r = await bh.generateSessionKey(e, a, s, o);
        else {
            if (!t || !t.length) throw Error("No keys, passwords, or session key provided.");
            r = await bh.generateSessionKey(void 0, void 0, void 0, o);
        }
        const { data: c, algorithm: u, aeadAlgorithm: h } = r, d = await bh.encryptSessionKey(c, u, h, e, t, i, n, a, s, o);
        let f;
        h ? (f = new mu, f.aeadAlgorithm = ie.write(ie.aead, h)) : f = new yu, f.packets = this.packets;
        const l = ie.write(ie.symmetric, u);
        return await f.encrypt(l, c, o), d.packets.push(f), f.packets = new nu, d;
    }
    static async encryptSessionKey(e, t, r, i, n, a = !1, s = [], o = new Date, c = [], u = ne) {
        const h = new nu, d = ie.write(ie.symmetric, t), f = r && ie.write(ie.aead, r);
        if (i) {
            const t = await Promise.all(i.map(async function(t, r) {
                const i = await t.getEncryptionKey(s[r], o, c, u), n = new gu;
                return n.publicKeyID = a ? pe.wildcard() : i.getKeyID(), n.publicKeyAlgorithm = i.keyPacket.algorithm, n.sessionKey = e, n.sessionKeyAlgorithm = d, await n.encrypt(i.keyPacket), delete n.sessionKey, n;
            }));
            h.push(...t);
        }
        if (n) {
            const t = async function(e, t) {
                try {
                    return await e.decrypt(t), 1;
                } catch (e) {
                    return 0;
                }
            }, r = (e, t)=>e + t, i = async function(e, a, s, o) {
                const c = new vu(u);
                if (c.sessionKey = e, c.sessionKeyAlgorithm = a, s && (c.aeadAlgorithm = s), await c.encrypt(o, u), u.passwordCollisionCheck) {
                    if (1 !== (await Promise.all(n.map((e)=>t(c, e)))).reduce(r)) return i(e, a, o);
                }
                return delete c.sessionKey, c;
            }, a = await Promise.all(n.map((t)=>i(e, d, f, t)));
            h.push(...a);
        }
        return new bh(h);
    }
    async sign(e = [], t = null, r = [], i = new Date, n = [], a = [], s = ne) {
        const o = new nu, c = this.packets.findPacket(ie.packet.literalData);
        if (!c) throw Error("No literal data packet to sign.");
        let u, h;
        const d = null === c.text ? ie.signature.binary : ie.signature.text;
        if (t) for(h = t.packets.filterByTag(ie.packet.signature), u = h.length - 1; u >= 0; u--){
            const t = h[u], r = new ru;
            r.signatureType = t.signatureType, r.hashAlgorithm = t.hashAlgorithm, r.publicKeyAlgorithm = t.publicKeyAlgorithm, r.issuerKeyID = t.issuerKeyID, e.length || 0 !== u || (r.flags = 1), o.push(r);
        }
        return await Promise.all(Array.from(e).reverse().map(async function(t, a) {
            if (!t.isPrivate()) throw Error("Need private key for signing");
            const o = r[e.length - 1 - a], c = await t.getSigningKey(o, i, n, s), u = new ru;
            return u.signatureType = d, u.hashAlgorithm = await Nu(t, c.keyPacket, i, n, s), u.publicKeyAlgorithm = c.keyPacket.algorithm, u.issuerKeyID = c.getKeyID(), a === e.length - 1 && (u.flags = 1), u;
        })).then((e)=>{
            e.forEach((e)=>o.push(e));
        }), o.push(c), o.push(...await mh(c, e, t, r, i, n, a, !1, s)), new bh(o);
    }
    compress(e, t = ne) {
        if (e === ie.compression.uncompressed) return this;
        const r = new su(t);
        r.algorithm = e, r.packets = this.packets;
        const i = new nu;
        return i.push(r), new bh(i);
    }
    async signDetached(e = [], t = null, r = [], i = new Date, n = [], a = [], s = ne) {
        const o = this.packets.findPacket(ie.packet.literalData);
        if (!o) throw Error("No literal data packet to sign.");
        return new Iu(await mh(o, e, t, r, i, n, a, !0, s));
    }
    async verify(e, t = new Date, r = ne) {
        const i = this.unwrapCompressed(), n = i.packets.filterByTag(ie.packet.literalData);
        if (1 !== n.length) throw Error("Can only verify message with one literal data packet.");
        s(i.packets.stream) && i.packets.push(...await j(i.packets.stream, (e)=>e || []));
        const a = i.packets.filterByTag(ie.packet.onePassSignature).reverse(), o = i.packets.filterByTag(ie.packet.signature);
        return a.length && !o.length && $.isStream(i.packets.stream) && !s(i.packets.stream) ? (await Promise.all(a.map(async (e)=>{
            e.correspondingSig = new Promise((t, r)=>{
                e.correspondingSigResolve = t, e.correspondingSigReject = r;
            }), e.signatureData = W(async ()=>(await e.correspondingSig).signatureData), e.hashed = j(await e.hash(e.signatureType, n[0], void 0, !1)), e.hashed.catch(()=>{});
        })), i.packets.stream = T(i.packets.stream, async (e, t)=>{
            const r = K(e), i = D(t);
            try {
                for(let e = 0; e < a.length; e++){
                    const { value: t } = await r.read();
                    a[e].correspondingSigResolve(t);
                }
                await r.readToEnd(), await i.ready, await i.close();
            } catch (e) {
                a.forEach((t)=>{
                    t.correspondingSigReject(e);
                }), await i.abort(e);
            }
        }), gh(a, n, e, t, !1, r)) : gh(o, n, e, t, !1, r);
    }
    verifyDetached(e, t, r = new Date, i = ne) {
        const n = this.unwrapCompressed().packets.filterByTag(ie.packet.literalData);
        if (1 !== n.length) throw Error("Can only verify message with one literal data packet.");
        return gh(e.packets, n, t, r, !0, i);
    }
    unwrapCompressed() {
        const e = this.packets.filterByTag(ie.packet.compressedData);
        return e.length ? new bh(e[0].packets) : this;
    }
    async appendSignature(e, t = ne) {
        await this.packets.read($.isUint8Array(e) ? e : (await fe(e)).data, yh, t);
    }
    write() {
        return this.packets.write();
    }
    armor(e = ne) {
        return le(ie.armor.message, this.write(), null, null, null, e);
    }
}
async function mh(e, t, r = null, i = [], n = new Date, a = [], s = [], o = !1, c = ne) {
    const u = new nu, h = null === e.text ? ie.signature.binary : ie.signature.text;
    if (await Promise.all(t.map(async (t, r)=>{
        const u = a[r];
        if (!t.isPrivate()) throw Error("Need private key for signing");
        const d = await t.getSigningKey(i[r], n, u, c);
        return Lu(e, t, d.keyPacket, {
            signatureType: h
        }, n, u, s, o, c);
    })).then((e)=>{
        u.push(...e);
    }), r) {
        const e = r.packets.filterByTag(ie.packet.signature);
        u.push(...e);
    }
    return u;
}
async function gh(e, t, r, i = new Date, n = !1, a = ne) {
    return Promise.all(e.filter(function(e) {
        return [
            "text",
            "binary"
        ].includes(ie.read(ie.signature, e.signatureType));
    }).map(async function(e) {
        return async function(e, t, r, i = new Date, n = !1, a = ne) {
            let s, o;
            for (const t of r){
                const r = t.getKeys(e.issuerKeyID);
                if (r.length > 0) {
                    s = t, o = r[0];
                    break;
                }
            }
            const c = e instanceof ru ? e.correspondingSig : e, u = {
                keyID: e.issuerKeyID,
                verified: (async ()=>{
                    if (!o) throw Error("Could not find signing key with key ID " + e.issuerKeyID.toHex());
                    await e.verify(o.keyPacket, e.signatureType, t[0], i, n, a);
                    const r = await c;
                    if (o.getCreationTime() > r.created) throw Error("Key is newer than the signature");
                    try {
                        await s.getSigningKey(o.getKeyID(), r.created, void 0, a);
                    } catch (e) {
                        if (!a.allowInsecureVerificationWithReformattedKeys || !e.message.match(/Signature creation time is in the future/)) throw e;
                        await s.getSigningKey(o.getKeyID(), i, void 0, a);
                    }
                    return !0;
                })(),
                signature: (async ()=>{
                    const e = await c, t = new nu;
                    return e && t.push(e), new Iu(t);
                })()
            };
            return u.signature.catch(()=>{}), u.verified.catch(()=>{}), u;
        }(e, t, r, i, n, a);
    }));
}
async function wh({ armoredMessage: e, binaryMessage: t, config: r, ...i }) {
    r = {
        ...ne,
        ...r
    };
    let n = e || t;
    if (!n) throw Error("readMessage: must pass options object containing `armoredMessage` or `binaryMessage`");
    if (e && !$.isString(e) && !$.isStream(e)) throw Error("readMessage: options.armoredMessage must be a string or stream");
    if (t && !$.isUint8Array(t) && !$.isStream(t)) throw Error("readMessage: options.binaryMessage must be a Uint8Array or stream");
    const a = Object.keys(i);
    if (a.length > 0) throw Error("Unknown option: " + a.join(", "));
    const s = $.isStream(n);
    if (s && (await E(), n = x(n)), e) {
        const { type: e, data: t } = await fe(n, r);
        if (e !== ie.armor.message) throw Error("Armored text not of type message");
        n = t;
    }
    const o = await nu.fromBinary(n, lh, r), c = new bh(o);
    return c.fromStream = s, c;
}
async function vh({ text: e, binary: t, filename: r, date: i = new Date, format: n = void 0 !== e ? "utf8" : "binary", ...a }) {
    let s = void 0 !== e ? e : t;
    if (void 0 === s) throw Error("createMessage: must pass options object containing `text` or `binary`");
    if (e && !$.isString(e) && !$.isStream(e)) throw Error("createMessage: options.text must be a string or stream");
    if (t && !$.isUint8Array(t) && !$.isStream(t)) throw Error("createMessage: options.binary must be a Uint8Array or stream");
    const o = Object.keys(a);
    if (o.length > 0) throw Error("Unknown option: " + o.join(", "));
    const c = $.isStream(s);
    c && (await E(), s = x(s));
    const u = new Xc(i);
    void 0 !== e ? u.setText(s, ie.write(ie.literal, n)) : u.setBytes(s, ie.write(ie.literal, n)), void 0 !== r && u.setFilename(r);
    const h = new nu;
    h.push(u);
    const d = new bh(h);
    return d.fromStream = c, d;
}
const _h = /*#__PURE__*/ $.constructAllowedPackets([
    eu
]);
class kh {
    constructor(e, t){
        if (this.text = $.removeTrailingSpaces(e).replace(/\r?\n/g, "\r\n"), t && !(t instanceof Iu)) throw Error("Invalid signature input");
        this.signature = t || new Iu(new nu);
    }
    getSigningKeyIDs() {
        const e = [];
        return this.signature.packets.forEach(function(t) {
            e.push(t.issuerKeyID);
        }), e;
    }
    async sign(e, t = null, r = [], i = new Date, n = [], a = [], s = ne) {
        const o = new Xc;
        o.setText(this.text);
        const c = new Iu(await mh(o, e, t, r, i, n, a, !0, s));
        return new kh(this.text, c);
    }
    verify(e, t = new Date, r = ne) {
        const i = this.signature.packets, n = new Xc;
        return n.setText(this.text), gh(i, [
            n
        ], e, t, !0, r);
    }
    getText() {
        return this.text.replace(/\r\n/g, "\n");
    }
    armor(e = ne) {
        let t = this.signature.packets.map(function(e) {
            return ie.read(ie.hash, e.hashAlgorithm).toUpperCase();
        });
        t = t.filter(function(e, t, r) {
            return r.indexOf(e) === t;
        });
        const r = {
            hash: t.join(),
            text: this.text,
            data: this.signature.packets.write()
        };
        return le(ie.armor.signed, r, void 0, void 0, void 0, e);
    }
}
async function Ah({ cleartextMessage: e, config: t, ...r }) {
    if (t = {
        ...ne,
        ...t
    }, !e) throw Error("readCleartextMessage: must pass options object containing `cleartextMessage`");
    if (!$.isString(e)) throw Error("readCleartextMessage: options.cleartextMessage must be a string");
    const i = Object.keys(r);
    if (i.length > 0) throw Error("Unknown option: " + i.join(", "));
    const n = await fe(e);
    if (n.type !== ie.armor.signed) throw Error("No cleartext signed message.");
    const a = await nu.fromBinary(n.data, _h, t);
    !function(e, t) {
        const r = function(e) {
            const r = (e)=>(t)=>e.hashAlgorithm === t;
            for(let i = 0; i < t.length; i++)if (t[i].constructor.tag === ie.packet.signature && !e.some(r(t[i]))) return !1;
            return !0;
        };
        let i = null, n = [];
        if (e.forEach(function(e) {
            if (i = e.match(/Hash: (.+)/), !i) throw Error('Only "Hash" header allowed in cleartext signed message');
            i = i[1].replace(/\s/g, ""), i = i.split(","), i = i.map(function(e) {
                e = e.toLowerCase();
                try {
                    return ie.write(ie.hash, e);
                } catch (t) {
                    throw Error("Unknown hash algorithm in armor header: " + e);
                }
            }), n = n.concat(i);
        }), !n.length && !r([
            ie.hash.md5
        ])) throw Error('If no "Hash" header in cleartext signed message, then only MD5 signatures allowed');
        if (n.length && !r(n)) throw Error("Hash algorithm mismatch in armor header and signature");
    }(n.headers, a);
    const s = new Iu(a);
    return new kh(n.text, s);
}
async function Sh({ text: e, ...t }) {
    if (!e) throw Error("createCleartextMessage: must pass options object containing `text`");
    if (!$.isString(e)) throw Error("createCleartextMessage: options.text must be a string");
    const r = Object.keys(t);
    if (r.length > 0) throw Error("Unknown option: " + r.join(", "));
    return new kh(e);
}
async function Eh({ userIDs: e = [], passphrase: t, type: r = "ecc", rsaBits: i = 4096, curve: n = "curve25519", keyExpirationTime: a = 0, date: s = new Date, subkeys: o = [
    {}
], format: c = "armored", config: u, ...h }) {
    Nh(u = {
        ...ne,
        ...u
    }), e = jh(e);
    const d = Object.keys(h);
    if (d.length > 0) throw Error("Unknown option: " + d.join(", "));
    if (0 === e.length) throw Error("UserIDs are required for key generation");
    if ("rsa" === r && i < u.minRSABits) throw Error(`rsaBits should be at least ${u.minRSABits}, got: ${i}`);
    const f = {
        userIDs: e,
        passphrase: t,
        type: r,
        rsaBits: i,
        curve: n,
        keyExpirationTime: a,
        date: s,
        subkeys: o
    };
    try {
        const { key: e, revocationCertificate: t } = await async function(e, t) {
            e.sign = !0, (e = Vu(e)).subkeys = e.subkeys.map((t, r)=>Vu(e.subkeys[r], e));
            let r = [
                zu(e, t)
            ];
            r = r.concat(e.subkeys.map((e)=>Tu(e, t)));
            const i = await Promise.all(r), n = await ch(i[0], i.slice(1), e, t), a = await n.getRevocationCertificate(e.date, t);
            return n.revocationSignatures = [], {
                key: n,
                revocationCertificate: a
            };
        }(f, u);
        return e.getKeys().forEach(({ keyPacket: e })=>Xu(e, u)), {
            privateKey: Hh(e, c, u),
            publicKey: Hh(e.toPublic(), c, u),
            revocationCertificate: t
        };
    } catch (e) {
        throw $.wrapError("Error generating keypair", e);
    }
}
async function Ph({ privateKey: e, userIDs: t = [], passphrase: r, keyExpirationTime: i = 0, date: n, format: a = "armored", config: s, ...o }) {
    Nh(s = {
        ...ne,
        ...s
    }), t = jh(t);
    const c = Object.keys(o);
    if (c.length > 0) throw Error("Unknown option: " + c.join(", "));
    if (0 === t.length) throw Error("UserIDs are required for key reformat");
    const u = {
        privateKey: e,
        userIDs: t,
        passphrase: r,
        keyExpirationTime: i,
        date: n
    };
    try {
        const { key: e, revocationCertificate: t } = await async function(e, t) {
            e = o(e);
            const { privateKey: r } = e;
            if (!r.isPrivate()) throw Error("Cannot reformat a public key");
            if (r.keyPacket.isDummy()) throw Error("Cannot reformat a gnu-dummy primary key");
            if (!r.getKeys().every(({ keyPacket: e })=>e.isDecrypted())) throw Error("Key is not decrypted");
            const i = r.keyPacket;
            e.subkeys || (e.subkeys = await Promise.all(r.subkeys.map(async (e)=>{
                const r = e.keyPacket, n = {
                    key: i,
                    bind: r
                }, a = await qu(e.bindingSignatures, i, ie.signature.subkeyBinding, n, null, t).catch(()=>({}));
                return {
                    sign: a.keyFlags && a.keyFlags[0] & ie.keyFlags.signData
                };
            })));
            const n = r.subkeys.map((e)=>e.keyPacket);
            if (e.subkeys.length !== n.length) throw Error("Number of subkey options does not match number of subkeys");
            e.subkeys = e.subkeys.map((t)=>o(t, e));
            const a = await ch(i, n, e, t), s = await a.getRevocationCertificate(e.date, t);
            return a.revocationSignatures = [], {
                key: a,
                revocationCertificate: s
            };
            function o(e, t = {}) {
                return e.keyExpirationTime = e.keyExpirationTime || t.keyExpirationTime, e.passphrase = $.isString(e.passphrase) ? e.passphrase : t.passphrase, e.date = e.date || t.date, e;
            }
        }(u, s);
        return {
            privateKey: Hh(e, a, s),
            publicKey: Hh(e.toPublic(), a, s),
            revocationCertificate: t
        };
    } catch (e) {
        throw $.wrapError("Error reformatting keypair", e);
    }
}
async function xh({ key: e, revocationCertificate: t, reasonForRevocation: r, date: i = new Date, format: n = "armored", config: a, ...s }) {
    Nh(a = {
        ...ne,
        ...a
    });
    const o = Object.keys(s);
    if (o.length > 0) throw Error("Unknown option: " + o.join(", "));
    try {
        const s = t ? await e.applyRevocationCertificate(t, i, a) : await e.revoke(r, i, a);
        return s.isPrivate() ? {
            privateKey: Hh(s, n, a),
            publicKey: Hh(s.toPublic(), n, a)
        } : {
            privateKey: null,
            publicKey: Hh(s, n, a)
        };
    } catch (e) {
        throw $.wrapError("Error revoking key", e);
    }
}
async function Mh({ privateKey: e, passphrase: t, config: r, ...i }) {
    Nh(r = {
        ...ne,
        ...r
    });
    const n = Object.keys(i);
    if (n.length > 0) throw Error("Unknown option: " + n.join(", "));
    if (!e.isPrivate()) throw Error("Cannot decrypt a public key");
    const a = e.clone(!0), s = $.isArray(t) ? t : [
        t
    ];
    try {
        return await Promise.all(a.getKeys().map((e)=>$.anyPromise(s.map((t)=>e.keyPacket.decrypt(t))))), await a.validate(r), a;
    } catch (e) {
        throw a.clearPrivateParams(), $.wrapError("Error decrypting private key", e);
    }
}
async function Ch({ privateKey: e, passphrase: t, config: r, ...i }) {
    Nh(r = {
        ...ne,
        ...r
    });
    const n = Object.keys(i);
    if (n.length > 0) throw Error("Unknown option: " + n.join(", "));
    if (!e.isPrivate()) throw Error("Cannot encrypt a public key");
    const a = e.clone(!0), s = a.getKeys(), o = $.isArray(t) ? t : Array(s.length).fill(t);
    if (o.length !== s.length) throw Error("Invalid number of passphrases given for key encryption");
    try {
        return await Promise.all(s.map(async (e, t)=>{
            const { keyPacket: i } = e;
            await i.encrypt(o[t], r), i.clearPrivateParams();
        })), a;
    } catch (e) {
        throw a.clearPrivateParams(), $.wrapError("Error encrypting private key", e);
    }
}
async function Kh({ message: e, encryptionKeys: t, signingKeys: r, passwords: i, sessionKey: n, format: a = "armored", signature: s = null, wildcard: o = !1, signingKeyIDs: c = [], encryptionKeyIDs: u = [], date: h = new Date, signingUserIDs: d = [], encryptionUserIDs: f = [], signatureNotations: l = [], config: p, ...y }) {
    if (Nh(p = {
        ...ne,
        ...p
    }), zh(e), Fh(a), t = jh(t), r = jh(r), i = jh(i), c = jh(c), u = jh(u), d = jh(d), f = jh(f), l = jh(l), y.detached) throw Error("The `detached` option has been removed from openpgp.encrypt, separately call openpgp.sign instead. Don't forget to remove the `privateKeys` option as well.");
    if (y.publicKeys) throw Error("The `publicKeys` option has been removed from openpgp.encrypt, pass `encryptionKeys` instead");
    if (y.privateKeys) throw Error("The `privateKeys` option has been removed from openpgp.encrypt, pass `signingKeys` instead");
    if (void 0 !== y.armor) throw Error("The `armor` option has been removed from openpgp.encrypt, pass `format` instead.");
    const b = Object.keys(y);
    if (b.length > 0) throw Error("Unknown option: " + b.join(", "));
    r || (r = []);
    const m = e.fromStream;
    try {
        if ((r.length || s) && (e = await e.sign(r, s, c, h, d, l, p)), e = e.compress(await ju("compression", t, h, f, p), p), e = await e.encrypt(t, i, n, o, u, h, f, p), "object" === a) return e;
        const y = "armored" === a;
        return Lh(y ? e.armor(p) : e.write(), m, y ? "utf8" : "binary");
    } catch (e) {
        throw $.wrapError("Error encrypting message", e);
    }
}
async function Dh({ message: e, decryptionKeys: t, passwords: r, sessionKeys: i, verificationKeys: n, expectSigned: a = !1, format: s = "utf8", signature: o = null, date: c = new Date, config: u, ...h }) {
    if (Nh(u = {
        ...ne,
        ...u
    }), zh(e), n = jh(n), t = jh(t), r = jh(r), i = jh(i), h.privateKeys) throw Error("The `privateKeys` option has been removed from openpgp.decrypt, pass `decryptionKeys` instead");
    if (h.publicKeys) throw Error("The `publicKeys` option has been removed from openpgp.decrypt, pass `verificationKeys` instead");
    const d = Object.keys(h);
    if (d.length > 0) throw Error("Unknown option: " + d.join(", "));
    try {
        const h = await e.decrypt(t, r, i, c, u);
        n || (n = []);
        const d = {};
        if (d.signatures = o ? await h.verifyDetached(o, n, c, u) : await h.verify(n, c, u), d.data = "binary" === s ? h.getLiteralData() : h.getText(), d.filename = h.getFilename(), Wh(d, e), a) {
            if (0 === n.length) throw Error("Verification keys are required to verify message signatures");
            if (0 === d.signatures.length) throw Error("Message is not signed");
            d.data = C([
                d.data,
                W(async ()=>{
                    await $.anyPromise(d.signatures.map((e)=>e.verified));
                })
            ]);
        }
        return d.data = await Lh(d.data, e.fromStream, s), d;
    } catch (e) {
        throw $.wrapError("Error decrypting message", e);
    }
}
async function Rh({ message: e, signingKeys: t, format: r = "armored", detached: i = !1, signingKeyIDs: n = [], date: a = new Date, signingUserIDs: s = [], signatureNotations: o = [], config: c, ...u }) {
    if (Nh(c = {
        ...ne,
        ...c
    }), qh(e), Fh(r), t = jh(t), n = jh(n), s = jh(s), o = jh(o), u.privateKeys) throw Error("The `privateKeys` option has been removed from openpgp.sign, pass `signingKeys` instead");
    if (void 0 !== u.armor) throw Error("The `armor` option has been removed from openpgp.sign, pass `format` instead.");
    const h = Object.keys(u);
    if (h.length > 0) throw Error("Unknown option: " + h.join(", "));
    if (e instanceof kh && "binary" === r) throw Error("Cannot return signed cleartext message in binary format");
    if (e instanceof kh && i) throw Error("Cannot detach-sign a cleartext message");
    if (!t || 0 === t.length) throw Error("No signing keys provided");
    try {
        let u;
        if (u = i ? await e.signDetached(t, void 0, n, a, s, o, c) : await e.sign(t, void 0, n, a, s, o, c), "object" === r) return u;
        const h = "armored" === r;
        return u = h ? u.armor(c) : u.write(), i && (u = T(e.packets.write(), async (e, t)=>{
            await Promise.all([
                R(u, t),
                j(e).catch(()=>{})
            ]);
        })), Lh(u, e.fromStream, h ? "utf8" : "binary");
    } catch (e) {
        throw $.wrapError("Error signing message", e);
    }
}
async function Uh({ message: e, verificationKeys: t, expectSigned: r = !1, format: i = "utf8", signature: n = null, date: a = new Date, config: s, ...o }) {
    if (Nh(s = {
        ...ne,
        ...s
    }), qh(e), t = jh(t), o.publicKeys) throw Error("The `publicKeys` option has been removed from openpgp.verify, pass `verificationKeys` instead");
    const c = Object.keys(o);
    if (c.length > 0) throw Error("Unknown option: " + c.join(", "));
    if (e instanceof kh && "binary" === i) throw Error("Can't return cleartext message data as binary");
    if (e instanceof kh && n) throw Error("Can't verify detached cleartext signature");
    try {
        const o = {};
        if (o.signatures = n ? await e.verifyDetached(n, t, a, s) : await e.verify(t, a, s), o.data = "binary" === i ? e.getLiteralData() : e.getText(), e.fromStream && Wh(o, e), r) {
            if (0 === o.signatures.length) throw Error("Message is not signed");
            o.data = C([
                o.data,
                W(async ()=>{
                    await $.anyPromise(o.signatures.map((e)=>e.verified));
                })
            ]);
        }
        return o.data = await Lh(o.data, e.fromStream, i), o;
    } catch (e) {
        throw $.wrapError("Error verifying signed message", e);
    }
}
async function Ih({ encryptionKeys: e, date: t = new Date, encryptionUserIDs: r = [], config: i, ...n }) {
    if (Nh(i = {
        ...ne,
        ...i
    }), e = jh(e), r = jh(r), n.publicKeys) throw Error("The `publicKeys` option has been removed from openpgp.generateSessionKey, pass `encryptionKeys` instead");
    const a = Object.keys(n);
    if (a.length > 0) throw Error("Unknown option: " + a.join(", "));
    try {
        return await bh.generateSessionKey(e, t, r, i);
    } catch (e) {
        throw $.wrapError("Error generating session key", e);
    }
}
async function Bh({ data: e, algorithm: t, aeadAlgorithm: r, encryptionKeys: i, passwords: n, format: a = "armored", wildcard: s = !1, encryptionKeyIDs: o = [], date: c = new Date, encryptionUserIDs: u = [], config: h, ...d }) {
    if (Nh(h = {
        ...ne,
        ...h
    }), function(e, t) {
        if (!$.isUint8Array(e)) throw Error("Parameter [" + (t || "data") + "] must be of type Uint8Array");
    }(e), function(e, t) {
        if (!$.isString(e)) throw Error("Parameter [" + (t || "data") + "] must be of type String");
    }(t, "algorithm"), Fh(a), i = jh(i), n = jh(n), o = jh(o), u = jh(u), d.publicKeys) throw Error("The `publicKeys` option has been removed from openpgp.encryptSessionKey, pass `encryptionKeys` instead");
    const f = Object.keys(d);
    if (f.length > 0) throw Error("Unknown option: " + f.join(", "));
    if (!(i && 0 !== i.length || n && 0 !== n.length)) throw Error("No encryption keys or passwords provided.");
    try {
        return Hh(await bh.encryptSessionKey(e, t, r, i, n, s, o, c, u, h), a, h);
    } catch (e) {
        throw $.wrapError("Error encrypting session key", e);
    }
}
async function Th({ message: e, decryptionKeys: t, passwords: r, date: i = new Date, config: n, ...a }) {
    if (Nh(n = {
        ...ne,
        ...n
    }), zh(e), t = jh(t), r = jh(r), a.privateKeys) throw Error("The `privateKeys` option has been removed from openpgp.decryptSessionKeys, pass `decryptionKeys` instead");
    const s = Object.keys(a);
    if (s.length > 0) throw Error("Unknown option: " + s.join(", "));
    try {
        return await e.decryptSessionKeys(t, r, i, n);
    } catch (e) {
        throw $.wrapError("Error decrypting session keys", e);
    }
}
function zh(e) {
    if (!(e instanceof bh)) throw Error("Parameter [message] needs to be of type Message");
}
function qh(e) {
    if (!(e instanceof kh || e instanceof bh)) throw Error("Parameter [message] needs to be of type Message or CleartextMessage");
}
function Fh(e) {
    if ("armored" !== e && "binary" !== e && "object" !== e) throw Error("Unsupported format " + e);
}
const Oh = Object.keys(ne).length;
function Nh(e) {
    const t = Object.keys(e);
    if (t.length !== Oh) {
        for (const e of t)if (void 0 === ne[e]) throw Error("Unknown config property: " + e);
    }
}
function jh(e) {
    return e && !$.isArray(e) && (e = [
        e
    ]), e;
}
async function Lh(e, t, r = "utf8") {
    const i = $.isStream(e);
    return "array" === i ? j(e) : "node" === t ? (e = b(e), "binary" !== r && e.setEncoding(r), e) : "web" === t && "ponyfill" === i ? _(e) : e;
}
function Wh(e, t) {
    e.data = T(t.packets.stream, async (t, r)=>{
        await R(e.data, r, {
            preventClose: !0
        });
        const i = D(r);
        try {
            await j(t, (e)=>e), await i.close();
        } catch (e) {
            await i.abort(e);
        }
    });
}
function Hh(e, t, r) {
    switch(t){
        case "object":
            return e;
        case "armored":
            return e.armor(r);
        case "binary":
            return e.write();
        default:
            throw Error("Unsupported format " + t);
    }
}
const Gh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol : (e)=>`Symbol(${e})`;
function Vh() {}
const $h = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0;
function Zh(e) {
    return "object" == typeof e && null !== e || "function" == typeof e;
}
const Yh = Vh, Xh = Promise, Qh = Promise.prototype.then, Jh = Promise.resolve.bind(Xh), ed = Promise.reject.bind(Xh);
function td(e) {
    return new Xh(e);
}
function rd(e) {
    return Jh(e);
}
function id(e) {
    return ed(e);
}
function nd(e, t, r) {
    return Qh.call(e, t, r);
}
function ad(e, t, r) {
    nd(nd(e, t, r), void 0, Yh);
}
function sd(e, t) {
    ad(e, t);
}
function od(e, t) {
    ad(e, void 0, t);
}
function cd(e, t, r) {
    return nd(e, t, r);
}
function ud(e) {
    nd(e, void 0, Yh);
}
const hd = (()=>{
    const e = $h && $h.queueMicrotask;
    if ("function" == typeof e) return e;
    const t = rd(void 0);
    return (e)=>nd(t, e);
})();
function dd(e, t, r) {
    if ("function" != typeof e) throw new TypeError("Argument is not a function");
    return Function.prototype.apply.call(e, t, r);
}
function fd(e, t, r) {
    try {
        return rd(dd(e, t, r));
    } catch (e) {
        return id(e);
    }
}
class ld {
    constructor(){
        this._cursor = 0, this._size = 0, this._front = {
            _elements: [],
            _next: void 0
        }, this._back = this._front, this._cursor = 0, this._size = 0;
    }
    get length() {
        return this._size;
    }
    push(e) {
        const t = this._back;
        let r = t;
        16383 === t._elements.length && (r = {
            _elements: [],
            _next: void 0
        }), t._elements.push(e), r !== t && (this._back = r, t._next = r), ++this._size;
    }
    shift() {
        const e = this._front;
        let t = e;
        const r = this._cursor;
        let i = r + 1;
        const n = e._elements, a = n[r];
        return 16384 === i && (t = e._next, i = 0), --this._size, this._cursor = i, e !== t && (this._front = t), n[r] = void 0, a;
    }
    forEach(e) {
        let t = this._cursor, r = this._front, i = r._elements;
        for(; !(t === i.length && void 0 === r._next || t === i.length && (r = r._next, i = r._elements, t = 0, 0 === i.length));)e(i[t]), ++t;
    }
    peek() {
        const e = this._front, t = this._cursor;
        return e._elements[t];
    }
}
function pd(e, t) {
    e._ownerReadableStream = t, t._reader = e, "readable" === t._state ? gd(e) : "closed" === t._state ? function(e) {
        gd(e), _d(e);
    }(e) : wd(e, t._storedError);
}
function yd(e, t) {
    return Jl(e._ownerReadableStream, t);
}
function bd(e) {
    "readable" === e._ownerReadableStream._state ? vd(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : function(e, t) {
        wd(e, t);
    }(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), e._ownerReadableStream._reader = void 0, e._ownerReadableStream = void 0;
}
function md(e) {
    return new TypeError("Cannot " + e + " a stream using a released reader");
}
function gd(e) {
    e._closedPromise = td((t, r)=>{
        e._closedPromise_resolve = t, e._closedPromise_reject = r;
    });
}
function wd(e, t) {
    gd(e), vd(e, t);
}
function vd(e, t) {
    void 0 !== e._closedPromise_reject && (ud(e._closedPromise), e._closedPromise_reject(t), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
}
function _d(e) {
    void 0 !== e._closedPromise_resolve && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
}
const kd = Gh("[[AbortSteps]]"), Ad = Gh("[[ErrorSteps]]"), Sd = Gh("[[CancelSteps]]"), Ed = Gh("[[PullSteps]]"), Pd = Number.isFinite || function(e) {
    return "number" == typeof e && isFinite(e);
}, xd = Math.trunc || function(e) {
    return e < 0 ? Math.ceil(e) : Math.floor(e);
};
function Md(e, t) {
    if (void 0 !== e && "object" != typeof (r = e) && "function" != typeof r) throw new TypeError(t + " is not an object.");
    var r;
}
function Cd(e, t) {
    if ("function" != typeof e) throw new TypeError(t + " is not a function.");
}
function Kd(e, t) {
    if (!function(e) {
        return "object" == typeof e && null !== e || "function" == typeof e;
    }(e)) throw new TypeError(t + " is not an object.");
}
function Dd(e, t, r) {
    if (void 0 === e) throw new TypeError(`Parameter ${t} is required in '${r}'.`);
}
function Rd(e, t, r) {
    if (void 0 === e) throw new TypeError(`${t} is required in '${r}'.`);
}
function Ud(e) {
    return Number(e);
}
function Id(e) {
    return 0 === e ? 0 : e;
}
function Bd(e, t) {
    const r = Number.MAX_SAFE_INTEGER;
    let i = Number(e);
    if (i = Id(i), !Pd(i)) throw new TypeError(t + " is not a finite number");
    if (i = function(e) {
        return Id(xd(e));
    }(i), i < 0 || i > r) throw new TypeError(`${t} is outside the accepted range of 0 to ${r}, inclusive`);
    return Pd(i) && 0 !== i ? i : 0;
}
function Td(e, t) {
    if (!Xl(e)) throw new TypeError(t + " is not a ReadableStream.");
}
function zd(e) {
    return new jd(e);
}
function qd(e, t) {
    e._reader._readRequests.push(t);
}
function Fd(e, t, r) {
    const i = e._reader._readRequests.shift();
    r ? i._closeSteps() : i._chunkSteps(t);
}
function Od(e) {
    return e._reader._readRequests.length;
}
function Nd(e) {
    const t = e._reader;
    return void 0 !== t && !!Ld(t);
}
class jd {
    constructor(e){
        if (Dd(e, 1, "ReadableStreamDefaultReader"), Td(e, "First parameter"), Ql(e)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
        pd(this, e), this._readRequests = new ld;
    }
    get closed() {
        return Ld(this) ? this._closedPromise : id(Hd("closed"));
    }
    cancel(e) {
        return Ld(this) ? void 0 === this._ownerReadableStream ? id(md("cancel")) : yd(this, e) : id(Hd("cancel"));
    }
    read() {
        if (!Ld(this)) return id(Hd("read"));
        if (void 0 === this._ownerReadableStream) return id(md("read from"));
        let e, t;
        const r = td((r, i)=>{
            e = r, t = i;
        });
        return Wd(this, {
            _chunkSteps: (t)=>e({
                    value: t,
                    done: !1
                }),
            _closeSteps: ()=>e({
                    value: void 0,
                    done: !0
                }),
            _errorSteps: (e)=>t(e)
        }), r;
    }
    releaseLock() {
        if (!Ld(this)) throw Hd("releaseLock");
        if (void 0 !== this._ownerReadableStream) {
            if (this._readRequests.length > 0) throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            bd(this);
        }
    }
}
function Ld(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_readRequests");
}
function Wd(e, t) {
    const r = e._ownerReadableStream;
    r._disturbed = !0, "closed" === r._state ? t._closeSteps() : "errored" === r._state ? t._errorSteps(r._storedError) : r._readableStreamController[Ed](t);
}
function Hd(e) {
    return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
}
let Gd;
Object.defineProperties(jd.prototype, {
    cancel: {
        enumerable: !0
    },
    read: {
        enumerable: !0
    },
    releaseLock: {
        enumerable: !0
    },
    closed: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(jd.prototype, Gh.toStringTag, {
    value: "ReadableStreamDefaultReader",
    configurable: !0
}), "symbol" == typeof Gh.asyncIterator && (Gd = {
    [Gh.asyncIterator] () {
        return this;
    }
}, Object.defineProperty(Gd, Gh.asyncIterator, {
    enumerable: !1
}));
class Vd {
    constructor(e, t){
        this._ongoingPromise = void 0, this._isFinished = !1, this._reader = e, this._preventCancel = t;
    }
    next() {
        const e = ()=>this._nextSteps();
        return this._ongoingPromise = this._ongoingPromise ? cd(this._ongoingPromise, e, e) : e(), this._ongoingPromise;
    }
    return(e) {
        const t = ()=>this._returnSteps(e);
        return this._ongoingPromise ? cd(this._ongoingPromise, t, t) : t();
    }
    _nextSteps() {
        if (this._isFinished) return Promise.resolve({
            value: void 0,
            done: !0
        });
        const e = this._reader;
        if (void 0 === e._ownerReadableStream) return id(md("iterate"));
        let t, r;
        const i = td((e, i)=>{
            t = e, r = i;
        });
        return Wd(e, {
            _chunkSteps: (e)=>{
                this._ongoingPromise = void 0, hd(()=>t({
                        value: e,
                        done: !1
                    }));
            },
            _closeSteps: ()=>{
                this._ongoingPromise = void 0, this._isFinished = !0, bd(e), t({
                    value: void 0,
                    done: !0
                });
            },
            _errorSteps: (t)=>{
                this._ongoingPromise = void 0, this._isFinished = !0, bd(e), r(t);
            }
        }), i;
    }
    _returnSteps(e) {
        if (this._isFinished) return Promise.resolve({
            value: e,
            done: !0
        });
        this._isFinished = !0;
        const t = this._reader;
        if (void 0 === t._ownerReadableStream) return id(md("finish iterating"));
        if (!this._preventCancel) {
            const r = yd(t, e);
            return bd(t), cd(r, ()=>({
                    value: e,
                    done: !0
                }));
        }
        return bd(t), rd({
            value: e,
            done: !0
        });
    }
}
const $d = {
    next () {
        return Zd(this) ? this._asyncIteratorImpl.next() : id(Yd("next"));
    },
    return (e) {
        return Zd(this) ? this._asyncIteratorImpl.return(e) : id(Yd("return"));
    }
};
function Zd(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl");
}
function Yd(e) {
    return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
}
void 0 !== Gd && Object.setPrototypeOf($d, Gd);
const Xd = Number.isNaN || function(e) {
    return e != e;
};
function Qd(e) {
    return !!function(e) {
        if ("number" != typeof e) return !1;
        if (Xd(e)) return !1;
        if (e < 0) return !1;
        return !0;
    }(e) && e !== 1 / 0;
}
function Jd(e) {
    const t = e._queue.shift();
    return e._queueTotalSize -= t.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t.value;
}
function ef(e, t, r) {
    if (!Qd(r = Number(r))) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
    e._queue.push({
        value: t,
        size: r
    }), e._queueTotalSize += r;
}
function tf(e) {
    e._queue = new ld, e._queueTotalSize = 0;
}
function rf(e) {
    return e.slice();
}
class nf {
    constructor(){
        throw new TypeError("Illegal constructor");
    }
    get view() {
        if (!of(this)) throw Af("view");
        return this._view;
    }
    respond(e) {
        if (!of(this)) throw Af("respond");
        if (Dd(e, 1, "respond"), e = Bd(e, "First parameter"), void 0 === this._associatedReadableByteStreamController) throw new TypeError("This BYOB request has been invalidated");
        this._view.buffer, function(e, t) {
            if (t = Number(t), !Qd(t)) throw new RangeError("bytesWritten must be a finite");
            mf(e, t);
        }(this._associatedReadableByteStreamController, e);
    }
    respondWithNewView(e) {
        if (!of(this)) throw Af("respondWithNewView");
        if (Dd(e, 1, "respondWithNewView"), !ArrayBuffer.isView(e)) throw new TypeError("You can only respond with array buffer views");
        if (0 === e.byteLength) throw new TypeError("chunk must have non-zero byteLength");
        if (0 === e.buffer.byteLength) throw new TypeError("chunk's buffer must have non-zero byteLength");
        if (void 0 === this._associatedReadableByteStreamController) throw new TypeError("This BYOB request has been invalidated");
        !function(e, t) {
            const r = e._pendingPullIntos.peek();
            if (r.byteOffset + r.bytesFilled !== t.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
            if (r.byteLength !== t.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
            r.buffer = t.buffer, mf(e, t.byteLength);
        }(this._associatedReadableByteStreamController, e);
    }
}
Object.defineProperties(nf.prototype, {
    respond: {
        enumerable: !0
    },
    respondWithNewView: {
        enumerable: !0
    },
    view: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(nf.prototype, Gh.toStringTag, {
    value: "ReadableStreamBYOBRequest",
    configurable: !0
});
class af {
    constructor(){
        throw new TypeError("Illegal constructor");
    }
    get byobRequest() {
        if (!sf(this)) throw Sf("byobRequest");
        if (null === this._byobRequest && this._pendingPullIntos.length > 0) {
            const e = this._pendingPullIntos.peek(), t = new Uint8Array(e.buffer, e.byteOffset + e.bytesFilled, e.byteLength - e.bytesFilled), r = Object.create(nf.prototype);
            !function(e, t, r) {
                e._associatedReadableByteStreamController = t, e._view = r;
            }(r, this, t), this._byobRequest = r;
        }
        return this._byobRequest;
    }
    get desiredSize() {
        if (!sf(this)) throw Sf("desiredSize");
        return _f(this);
    }
    close() {
        if (!sf(this)) throw Sf("close");
        if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
        const e = this._controlledReadableByteStream._state;
        if ("readable" !== e) throw new TypeError(`The stream (in ${e} state) is not in the readable state and cannot be closed`);
        !function(e) {
            const t = e._controlledReadableByteStream;
            if (e._closeRequested || "readable" !== t._state) return;
            if (e._queueTotalSize > 0) return void (e._closeRequested = !0);
            if (e._pendingPullIntos.length > 0) {
                if (e._pendingPullIntos.peek().bytesFilled > 0) {
                    const t = new TypeError("Insufficient bytes to fill elements in the given buffer");
                    throw vf(e, t), t;
                }
            }
            wf(e), ep(t);
        }(this);
    }
    enqueue(e) {
        if (!sf(this)) throw Sf("enqueue");
        if (Dd(e, 1, "enqueue"), !ArrayBuffer.isView(e)) throw new TypeError("chunk must be an array buffer view");
        if (0 === e.byteLength) throw new TypeError("chunk must have non-zero byteLength");
        if (0 === e.buffer.byteLength) throw new TypeError("chunk's buffer must have non-zero byteLength");
        if (this._closeRequested) throw new TypeError("stream is closed or draining");
        const t = this._controlledReadableByteStream._state;
        if ("readable" !== t) throw new TypeError(`The stream (in ${t} state) is not in the readable state and cannot be enqueued to`);
        !function(e, t) {
            const r = e._controlledReadableByteStream;
            if (e._closeRequested || "readable" !== r._state) return;
            const i = t.buffer, n = t.byteOffset, a = t.byteLength, s = i;
            if (Nd(r)) {
                if (0 === Od(r)) df(e, s, n, a);
                else Fd(r, new Uint8Array(s, n, a), !1);
            } else xf(r) ? (df(e, s, n, a), bf(e)) : df(e, s, n, a);
            cf(e);
        }(this, e);
    }
    error(e) {
        if (!sf(this)) throw Sf("error");
        vf(this, e);
    }
    [Sd](e) {
        if (this._pendingPullIntos.length > 0) this._pendingPullIntos.peek().bytesFilled = 0;
        tf(this);
        const t = this._cancelAlgorithm(e);
        return wf(this), t;
    }
    [Ed](e) {
        const t = this._controlledReadableByteStream;
        if (this._queueTotalSize > 0) {
            const t = this._queue.shift();
            this._queueTotalSize -= t.byteLength, pf(this);
            const r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
            return void e._chunkSteps(r);
        }
        const r = this._autoAllocateChunkSize;
        if (void 0 !== r) {
            let t;
            try {
                t = new ArrayBuffer(r);
            } catch (t) {
                return void e._errorSteps(t);
            }
            const i = {
                buffer: t,
                byteOffset: 0,
                byteLength: r,
                bytesFilled: 0,
                elementSize: 1,
                viewConstructor: Uint8Array,
                readerType: "default"
            };
            this._pendingPullIntos.push(i);
        }
        qd(t, e), cf(this);
    }
}
function sf(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream");
}
function of(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController");
}
function cf(e) {
    const t = function(e) {
        const t = e._controlledReadableByteStream;
        if ("readable" !== t._state) return !1;
        if (e._closeRequested) return !1;
        if (!e._started) return !1;
        if (Nd(t) && Od(t) > 0) return !0;
        if (xf(t) && Pf(t) > 0) return !0;
        const r = _f(e);
        if (r > 0) return !0;
        return !1;
    }(e);
    if (!t) return;
    if (e._pulling) return void (e._pullAgain = !0);
    e._pulling = !0;
    ad(e._pullAlgorithm(), ()=>{
        e._pulling = !1, e._pullAgain && (e._pullAgain = !1, cf(e));
    }, (t)=>{
        vf(e, t);
    });
}
function uf(e, t) {
    let r = !1;
    "closed" === e._state && (r = !0);
    const i = hf(t);
    "default" === t.readerType ? Fd(e, i, r) : function(e, t, r) {
        const i = e._reader, n = i._readIntoRequests.shift();
        r ? n._closeSteps(t) : n._chunkSteps(t);
    }(e, i, r);
}
function hf(e) {
    const t = e.bytesFilled, r = e.elementSize;
    return new e.viewConstructor(e.buffer, e.byteOffset, t / r);
}
function df(e, t, r, i) {
    e._queue.push({
        buffer: t,
        byteOffset: r,
        byteLength: i
    }), e._queueTotalSize += i;
}
function ff(e, t) {
    const r = t.elementSize, i = t.bytesFilled - t.bytesFilled % r, n = Math.min(e._queueTotalSize, t.byteLength - t.bytesFilled), a = t.bytesFilled + n, s = a - a % r;
    let o = n, c = !1;
    s > i && (o = s - t.bytesFilled, c = !0);
    const u = e._queue;
    for(; o > 0;){
        const r = u.peek(), i = Math.min(o, r.byteLength), n = t.byteOffset + t.bytesFilled;
        h = t.buffer, d = n, f = r.buffer, l = r.byteOffset, p = i, new Uint8Array(h).set(new Uint8Array(f, l, p), d), r.byteLength === i ? u.shift() : (r.byteOffset += i, r.byteLength -= i), e._queueTotalSize -= i, lf(e, i, t), o -= i;
    }
    var h, d, f, l, p;
    return c;
}
function lf(e, t, r) {
    yf(e), r.bytesFilled += t;
}
function pf(e) {
    0 === e._queueTotalSize && e._closeRequested ? (wf(e), ep(e._controlledReadableByteStream)) : cf(e);
}
function yf(e) {
    null !== e._byobRequest && (e._byobRequest._associatedReadableByteStreamController = void 0, e._byobRequest._view = null, e._byobRequest = null);
}
function bf(e) {
    for(; e._pendingPullIntos.length > 0;){
        if (0 === e._queueTotalSize) return;
        const t = e._pendingPullIntos.peek();
        ff(e, t) && (gf(e), uf(e._controlledReadableByteStream, t));
    }
}
function mf(e, t) {
    const r = e._pendingPullIntos.peek();
    if ("closed" === e._controlledReadableByteStream._state) {
        if (0 !== t) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
        !function(e, t) {
            t.buffer = t.buffer;
            const r = e._controlledReadableByteStream;
            if (xf(r)) for(; Pf(r) > 0;)uf(r, gf(e));
        }(e, r);
    } else !function(e, t, r) {
        if (r.bytesFilled + t > r.byteLength) throw new RangeError("bytesWritten out of range");
        if (lf(e, t, r), r.bytesFilled < r.elementSize) return;
        gf(e);
        const i = r.bytesFilled % r.elementSize;
        if (i > 0) {
            const t = r.byteOffset + r.bytesFilled, n = r.buffer.slice(t - i, t);
            df(e, n, 0, n.byteLength);
        }
        r.buffer = r.buffer, r.bytesFilled -= i, uf(e._controlledReadableByteStream, r), bf(e);
    }(e, t, r);
    cf(e);
}
function gf(e) {
    const t = e._pendingPullIntos.shift();
    return yf(e), t;
}
function wf(e) {
    e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0;
}
function vf(e, t) {
    const r = e._controlledReadableByteStream;
    "readable" === r._state && (!function(e) {
        yf(e), e._pendingPullIntos = new ld;
    }(e), tf(e), wf(e), tp(r, t));
}
function _f(e) {
    const t = e._controlledReadableByteStream._state;
    return "errored" === t ? null : "closed" === t ? 0 : e._strategyHWM - e._queueTotalSize;
}
function kf(e, t, r) {
    const i = Object.create(af.prototype);
    let n = ()=>{}, a = ()=>rd(void 0), s = ()=>rd(void 0);
    void 0 !== t.start && (n = ()=>t.start(i)), void 0 !== t.pull && (a = ()=>t.pull(i)), void 0 !== t.cancel && (s = (e)=>t.cancel(e));
    const o = t.autoAllocateChunkSize;
    if (0 === o) throw new TypeError("autoAllocateChunkSize must be greater than 0");
    !function(e, t, r, i, n, a, s) {
        t._controlledReadableByteStream = e, t._pullAgain = !1, t._pulling = !1, t._byobRequest = null, t._queue = t._queueTotalSize = void 0, tf(t), t._closeRequested = !1, t._started = !1, t._strategyHWM = a, t._pullAlgorithm = i, t._cancelAlgorithm = n, t._autoAllocateChunkSize = s, t._pendingPullIntos = new ld, e._readableStreamController = t, ad(rd(r()), ()=>{
            t._started = !0, cf(t);
        }, (e)=>{
            vf(t, e);
        });
    }(e, i, n, a, s, r, o);
}
function Af(e) {
    return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
}
function Sf(e) {
    return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
}
function Ef(e, t) {
    e._reader._readIntoRequests.push(t);
}
function Pf(e) {
    return e._reader._readIntoRequests.length;
}
function xf(e) {
    const t = e._reader;
    return void 0 !== t && !!Cf(t);
}
Object.defineProperties(af.prototype, {
    close: {
        enumerable: !0
    },
    enqueue: {
        enumerable: !0
    },
    error: {
        enumerable: !0
    },
    byobRequest: {
        enumerable: !0
    },
    desiredSize: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(af.prototype, Gh.toStringTag, {
    value: "ReadableByteStreamController",
    configurable: !0
});
class Mf {
    constructor(e){
        if (Dd(e, 1, "ReadableStreamBYOBReader"), Td(e, "First parameter"), Ql(e)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
        if (!sf(e._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
        pd(this, e), this._readIntoRequests = new ld;
    }
    get closed() {
        return Cf(this) ? this._closedPromise : id(Kf("closed"));
    }
    cancel(e) {
        return Cf(this) ? void 0 === this._ownerReadableStream ? id(md("cancel")) : yd(this, e) : id(Kf("cancel"));
    }
    read(e) {
        if (!Cf(this)) return id(Kf("read"));
        if (!ArrayBuffer.isView(e)) return id(new TypeError("view must be an array buffer view"));
        if (0 === e.byteLength) return id(new TypeError("view must have non-zero byteLength"));
        if (0 === e.buffer.byteLength) return id(new TypeError("view's buffer must have non-zero byteLength"));
        if (void 0 === this._ownerReadableStream) return id(md("read from"));
        let t, r;
        const i = td((e, i)=>{
            t = e, r = i;
        });
        return function(e, t, r) {
            const i = e._ownerReadableStream;
            i._disturbed = !0, "errored" === i._state ? r._errorSteps(i._storedError) : function(e, t, r) {
                const i = e._controlledReadableByteStream;
                let n = 1;
                t.constructor !== DataView && (n = t.constructor.BYTES_PER_ELEMENT);
                const a = t.constructor, s = {
                    buffer: t.buffer,
                    byteOffset: t.byteOffset,
                    byteLength: t.byteLength,
                    bytesFilled: 0,
                    elementSize: n,
                    viewConstructor: a,
                    readerType: "byob"
                };
                if (e._pendingPullIntos.length > 0) return e._pendingPullIntos.push(s), void Ef(i, r);
                if ("closed" !== i._state) {
                    if (e._queueTotalSize > 0) {
                        if (ff(e, s)) {
                            const t = hf(s);
                            return pf(e), void r._chunkSteps(t);
                        }
                        if (e._closeRequested) {
                            const t = new TypeError("Insufficient bytes to fill elements in the given buffer");
                            return vf(e, t), void r._errorSteps(t);
                        }
                    }
                    e._pendingPullIntos.push(s), Ef(i, r), cf(e);
                } else {
                    const e = new a(s.buffer, s.byteOffset, 0);
                    r._closeSteps(e);
                }
            }(i._readableStreamController, t, r);
        }(this, e, {
            _chunkSteps: (e)=>t({
                    value: e,
                    done: !1
                }),
            _closeSteps: (e)=>t({
                    value: e,
                    done: !0
                }),
            _errorSteps: (e)=>r(e)
        }), i;
    }
    releaseLock() {
        if (!Cf(this)) throw Kf("releaseLock");
        if (void 0 !== this._ownerReadableStream) {
            if (this._readIntoRequests.length > 0) throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            bd(this);
        }
    }
}
function Cf(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_readIntoRequests");
}
function Kf(e) {
    return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
}
function Df(e, t) {
    const { highWaterMark: r } = e;
    if (void 0 === r) return t;
    if (Xd(r) || r < 0) throw new RangeError("Invalid highWaterMark");
    return r;
}
function Rf(e) {
    const { size: t } = e;
    return t || (()=>1);
}
function Uf(e, t) {
    Md(e, t);
    const r = null == e ? void 0 : e.highWaterMark, i = null == e ? void 0 : e.size;
    return {
        highWaterMark: void 0 === r ? void 0 : Ud(r),
        size: void 0 === i ? void 0 : If(i, t + " has member 'size' that")
    };
}
function If(e, t) {
    return Cd(e, t), (t)=>Ud(e(t));
}
function Bf(e, t, r) {
    return Cd(e, r), (r)=>fd(e, t, [
            r
        ]);
}
function Tf(e, t, r) {
    return Cd(e, r), ()=>fd(e, t, []);
}
function zf(e, t, r) {
    return Cd(e, r), (r)=>dd(e, t, [
            r
        ]);
}
function qf(e, t, r) {
    return Cd(e, r), (r, i)=>fd(e, t, [
            r,
            i
        ]);
}
function Ff(e, t) {
    if (!Lf(e)) throw new TypeError(t + " is not a WritableStream.");
}
Object.defineProperties(Mf.prototype, {
    cancel: {
        enumerable: !0
    },
    read: {
        enumerable: !0
    },
    releaseLock: {
        enumerable: !0
    },
    closed: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(Mf.prototype, Gh.toStringTag, {
    value: "ReadableStreamBYOBReader",
    configurable: !0
});
class Of {
    constructor(e = {}, t = {}){
        void 0 === e ? e = null : Kd(e, "First parameter");
        const r = Uf(t, "Second parameter"), i = function(e, t) {
            Md(e, t);
            const r = null == e ? void 0 : e.abort, i = null == e ? void 0 : e.close, n = null == e ? void 0 : e.start, a = null == e ? void 0 : e.type, s = null == e ? void 0 : e.write;
            return {
                abort: void 0 === r ? void 0 : Bf(r, e, t + " has member 'abort' that"),
                close: void 0 === i ? void 0 : Tf(i, e, t + " has member 'close' that"),
                start: void 0 === n ? void 0 : zf(n, e, t + " has member 'start' that"),
                write: void 0 === s ? void 0 : qf(s, e, t + " has member 'write' that"),
                type: a
            };
        }(e, "First parameter");
        jf(this);
        if (void 0 !== i.type) throw new RangeError("Invalid type is specified");
        const n = Rf(r);
        !function(e, t, r, i) {
            const n = Object.create(ol.prototype);
            let a = ()=>{}, s = ()=>rd(void 0), o = ()=>rd(void 0), c = ()=>rd(void 0);
            void 0 !== t.start && (a = ()=>t.start(n));
            void 0 !== t.write && (s = (e)=>t.write(e, n));
            void 0 !== t.close && (o = ()=>t.close());
            void 0 !== t.abort && (c = (e)=>t.abort(e));
            cl(e, n, a, s, o, c, r, i);
        }(this, i, Df(r, 1), n);
    }
    get locked() {
        if (!Lf(this)) throw yl("locked");
        return Wf(this);
    }
    abort(e) {
        return Lf(this) ? Wf(this) ? id(new TypeError("Cannot abort a stream that already has a writer")) : Hf(this, e) : id(yl("abort"));
    }
    close() {
        return Lf(this) ? Wf(this) ? id(new TypeError("Cannot close a stream that already has a writer")) : Yf(this) ? id(new TypeError("Cannot close an already-closing stream")) : Gf(this) : id(yl("close"));
    }
    getWriter() {
        if (!Lf(this)) throw yl("getWriter");
        return Nf(this);
    }
}
function Nf(e) {
    return new Jf(e);
}
function jf(e) {
    e._state = "writable", e._storedError = void 0, e._writer = void 0, e._writableStreamController = void 0, e._writeRequests = new ld, e._inFlightWriteRequest = void 0, e._closeRequest = void 0, e._inFlightCloseRequest = void 0, e._pendingAbortRequest = void 0, e._backpressure = !1;
}
function Lf(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_writableStreamController");
}
function Wf(e) {
    return void 0 !== e._writer;
}
function Hf(e, t) {
    const r = e._state;
    if ("closed" === r || "errored" === r) return rd(void 0);
    if (void 0 !== e._pendingAbortRequest) return e._pendingAbortRequest._promise;
    let i = !1;
    "erroring" === r && (i = !0, t = void 0);
    const n = td((r, n)=>{
        e._pendingAbortRequest = {
            _promise: void 0,
            _resolve: r,
            _reject: n,
            _reason: t,
            _wasAlreadyErroring: i
        };
    });
    return e._pendingAbortRequest._promise = n, i || $f(e, t), n;
}
function Gf(e) {
    const t = e._state;
    if ("closed" === t || "errored" === t) return id(new TypeError(`The stream (in ${t} state) is not in the writable state and cannot be closed`));
    const r = td((t, r)=>{
        const i = {
            _resolve: t,
            _reject: r
        };
        e._closeRequest = i;
    }), i = e._writer;
    var n;
    return void 0 !== i && e._backpressure && "writable" === t && Pl(i), ef(n = e._writableStreamController, sl, 0), dl(n), r;
}
function Vf(e, t) {
    "writable" !== e._state ? Zf(e) : $f(e, t);
}
function $f(e, t) {
    const r = e._writableStreamController;
    e._state = "erroring", e._storedError = t;
    const i = e._writer;
    void 0 !== i && il(i, t), !function(e) {
        if (void 0 === e._inFlightWriteRequest && void 0 === e._inFlightCloseRequest) return !1;
        return !0;
    }(e) && r._started && Zf(e);
}
function Zf(e) {
    e._state = "errored", e._writableStreamController[Ad]();
    const t = e._storedError;
    if (e._writeRequests.forEach((e)=>{
        e._reject(t);
    }), e._writeRequests = new ld, void 0 === e._pendingAbortRequest) return void Xf(e);
    const r = e._pendingAbortRequest;
    if (e._pendingAbortRequest = void 0, r._wasAlreadyErroring) return r._reject(t), void Xf(e);
    ad(e._writableStreamController[kd](r._reason), ()=>{
        r._resolve(), Xf(e);
    }, (t)=>{
        r._reject(t), Xf(e);
    });
}
function Yf(e) {
    return void 0 !== e._closeRequest || void 0 !== e._inFlightCloseRequest;
}
function Xf(e) {
    void 0 !== e._closeRequest && (e._closeRequest._reject(e._storedError), e._closeRequest = void 0);
    const t = e._writer;
    void 0 !== t && vl(t, e._storedError);
}
function Qf(e, t) {
    const r = e._writer;
    void 0 !== r && t !== e._backpressure && (t ? function(e) {
        kl(e);
    }(r) : Pl(r)), e._backpressure = t;
}
Object.defineProperties(Of.prototype, {
    abort: {
        enumerable: !0
    },
    close: {
        enumerable: !0
    },
    getWriter: {
        enumerable: !0
    },
    locked: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(Of.prototype, Gh.toStringTag, {
    value: "WritableStream",
    configurable: !0
});
class Jf {
    constructor(e){
        if (Dd(e, 1, "WritableStreamDefaultWriter"), Ff(e, "First parameter"), Wf(e)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
        this._ownerWritableStream = e, e._writer = this;
        const t = e._state;
        if ("writable" === t) !Yf(e) && e._backpressure ? kl(this) : Sl(this), gl(this);
        else if ("erroring" === t) Al(this, e._storedError), gl(this);
        else if ("closed" === t) Sl(this), gl(r = this), _l(r);
        else {
            const t = e._storedError;
            Al(this, t), wl(this, t);
        }
        var r;
    }
    get closed() {
        return el(this) ? this._closedPromise : id(bl("closed"));
    }
    get desiredSize() {
        if (!el(this)) throw bl("desiredSize");
        if (void 0 === this._ownerWritableStream) throw ml("desiredSize");
        return function(e) {
            const t = e._ownerWritableStream, r = t._state;
            if ("errored" === r || "erroring" === r) return null;
            if ("closed" === r) return 0;
            return hl(t._writableStreamController);
        }(this);
    }
    get ready() {
        return el(this) ? this._readyPromise : id(bl("ready"));
    }
    abort(e) {
        return el(this) ? void 0 === this._ownerWritableStream ? id(ml("abort")) : function(e, t) {
            const r = e._ownerWritableStream;
            return Hf(r, t);
        }(this, e) : id(bl("abort"));
    }
    close() {
        if (!el(this)) return id(bl("close"));
        const e = this._ownerWritableStream;
        return void 0 === e ? id(ml("close")) : Yf(e) ? id(new TypeError("Cannot close an already-closing stream")) : tl(this);
    }
    releaseLock() {
        if (!el(this)) throw bl("releaseLock");
        void 0 !== this._ownerWritableStream && nl(this);
    }
    write(e) {
        return el(this) ? void 0 === this._ownerWritableStream ? id(ml("write to")) : al(this, e) : id(bl("write"));
    }
}
function el(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream");
}
function tl(e) {
    return Gf(e._ownerWritableStream);
}
function rl(e, t) {
    "pending" === e._closedPromiseState ? vl(e, t) : function(e, t) {
        wl(e, t);
    }(e, t);
}
function il(e, t) {
    "pending" === e._readyPromiseState ? El(e, t) : function(e, t) {
        Al(e, t);
    }(e, t);
}
function nl(e) {
    const t = e._ownerWritableStream, r = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
    il(e, r), rl(e, r), t._writer = void 0, e._ownerWritableStream = void 0;
}
function al(e, t) {
    const r = e._ownerWritableStream, i = r._writableStreamController, n = function(e, t) {
        try {
            return e._strategySizeAlgorithm(t);
        } catch (t) {
            return fl(e, t), 1;
        }
    }(i, t);
    if (r !== e._ownerWritableStream) return id(ml("write to"));
    const a = r._state;
    if ("errored" === a) return id(r._storedError);
    if (Yf(r) || "closed" === a) return id(new TypeError("The stream is closing or closed and cannot be written to"));
    if ("erroring" === a) return id(r._storedError);
    const s = function(e) {
        return td((t, r)=>{
            const i = {
                _resolve: t,
                _reject: r
            };
            e._writeRequests.push(i);
        });
    }(r);
    return function(e, t, r) {
        try {
            ef(e, t, r);
        } catch (t) {
            return void fl(e, t);
        }
        const i = e._controlledWritableStream;
        if (!Yf(i) && "writable" === i._state) Qf(i, ll(e));
        dl(e);
    }(i, t, n), s;
}
Object.defineProperties(Jf.prototype, {
    abort: {
        enumerable: !0
    },
    close: {
        enumerable: !0
    },
    releaseLock: {
        enumerable: !0
    },
    write: {
        enumerable: !0
    },
    closed: {
        enumerable: !0
    },
    desiredSize: {
        enumerable: !0
    },
    ready: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(Jf.prototype, Gh.toStringTag, {
    value: "WritableStreamDefaultWriter",
    configurable: !0
});
const sl = {};
class ol {
    constructor(){
        throw new TypeError("Illegal constructor");
    }
    error(e) {
        if (!function(e) {
            if (!Zh(e)) return !1;
            if (!Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream")) return !1;
            return !0;
        }(this)) throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController");
        "writable" === this._controlledWritableStream._state && pl(this, e);
    }
    [kd](e) {
        const t = this._abortAlgorithm(e);
        return ul(this), t;
    }
    [Ad]() {
        tf(this);
    }
}
function cl(e, t, r, i, n, a, s, o) {
    t._controlledWritableStream = e, e._writableStreamController = t, t._queue = void 0, t._queueTotalSize = void 0, tf(t), t._started = !1, t._strategySizeAlgorithm = o, t._strategyHWM = s, t._writeAlgorithm = i, t._closeAlgorithm = n, t._abortAlgorithm = a;
    const c = ll(t);
    Qf(e, c);
    ad(rd(r()), ()=>{
        t._started = !0, dl(t);
    }, (r)=>{
        t._started = !0, Vf(e, r);
    });
}
function ul(e) {
    e._writeAlgorithm = void 0, e._closeAlgorithm = void 0, e._abortAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
}
function hl(e) {
    return e._strategyHWM - e._queueTotalSize;
}
function dl(e) {
    const t = e._controlledWritableStream;
    if (!e._started) return;
    if (void 0 !== t._inFlightWriteRequest) return;
    if ("erroring" === t._state) return void Zf(t);
    if (0 === e._queue.length) return;
    const r = e._queue.peek().value;
    r === sl ? function(e) {
        const t = e._controlledWritableStream;
        (function(e) {
            e._inFlightCloseRequest = e._closeRequest, e._closeRequest = void 0;
        })(t), Jd(e);
        const r = e._closeAlgorithm();
        ul(e), ad(r, ()=>{
            !function(e) {
                e._inFlightCloseRequest._resolve(void 0), e._inFlightCloseRequest = void 0, "erroring" === e._state && (e._storedError = void 0, void 0 !== e._pendingAbortRequest && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = void 0)), e._state = "closed";
                const t = e._writer;
                void 0 !== t && _l(t);
            }(t);
        }, (e)=>{
            !function(e, t) {
                e._inFlightCloseRequest._reject(t), e._inFlightCloseRequest = void 0, void 0 !== e._pendingAbortRequest && (e._pendingAbortRequest._reject(t), e._pendingAbortRequest = void 0), Vf(e, t);
            }(t, e);
        });
    }(e) : function(e, t) {
        const r = e._controlledWritableStream;
        !function(e) {
            e._inFlightWriteRequest = e._writeRequests.shift();
        }(r);
        const i = e._writeAlgorithm(t);
        ad(i, ()=>{
            !function(e) {
                e._inFlightWriteRequest._resolve(void 0), e._inFlightWriteRequest = void 0;
            }(r);
            const t = r._state;
            if (Jd(e), !Yf(r) && "writable" === t) {
                const t = ll(e);
                Qf(r, t);
            }
            dl(e);
        }, (t)=>{
            "writable" === r._state && ul(e), function(e, t) {
                e._inFlightWriteRequest._reject(t), e._inFlightWriteRequest = void 0, Vf(e, t);
            }(r, t);
        });
    }(e, r);
}
function fl(e, t) {
    "writable" === e._controlledWritableStream._state && pl(e, t);
}
function ll(e) {
    return hl(e) <= 0;
}
function pl(e, t) {
    const r = e._controlledWritableStream;
    ul(e), $f(r, t);
}
function yl(e) {
    return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
}
function bl(e) {
    return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
}
function ml(e) {
    return new TypeError("Cannot " + e + " a stream using a released writer");
}
function gl(e) {
    e._closedPromise = td((t, r)=>{
        e._closedPromise_resolve = t, e._closedPromise_reject = r, e._closedPromiseState = "pending";
    });
}
function wl(e, t) {
    gl(e), vl(e, t);
}
function vl(e, t) {
    void 0 !== e._closedPromise_reject && (ud(e._closedPromise), e._closedPromise_reject(t), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected");
}
function _l(e) {
    void 0 !== e._closedPromise_resolve && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved");
}
function kl(e) {
    e._readyPromise = td((t, r)=>{
        e._readyPromise_resolve = t, e._readyPromise_reject = r;
    }), e._readyPromiseState = "pending";
}
function Al(e, t) {
    kl(e), El(e, t);
}
function Sl(e) {
    kl(e), Pl(e);
}
function El(e, t) {
    void 0 !== e._readyPromise_reject && (ud(e._readyPromise), e._readyPromise_reject(t), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected");
}
function Pl(e) {
    void 0 !== e._readyPromise_resolve && (e._readyPromise_resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled");
}
Object.defineProperties(ol.prototype, {
    error: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(ol.prototype, Gh.toStringTag, {
    value: "WritableStreamDefaultController",
    configurable: !0
});
const xl = "undefined" != typeof DOMException ? DOMException : void 0;
const Ml = function(e) {
    if ("function" != typeof e && "object" != typeof e) return !1;
    try {
        return new e, !0;
    } catch (e) {
        return !1;
    }
}(xl) ? xl : function() {
    const e = function(e, t) {
        this.message = e || "", this.name = t || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    };
    return Object.defineProperty(e.prototype = Object.create(Error.prototype), "constructor", {
        value: e,
        writable: !0,
        configurable: !0
    }), e;
}();
function Cl(e, t, r, i, n, a) {
    const s = zd(e), o = Nf(t);
    e._disturbed = !0;
    let c = !1, u = rd(void 0);
    return td((h, d)=>{
        let f;
        if (void 0 !== a) {
            if (f = ()=>{
                const r = new Ml("Aborted", "AbortError"), a = [];
                i || a.push(()=>"writable" === t._state ? Hf(t, r) : rd(void 0)), n || a.push(()=>"readable" === e._state ? Jl(e, r) : rd(void 0)), y(()=>Promise.all(a.map((e)=>e())), !0, r);
            }, a.aborted) return void f();
            a.addEventListener("abort", f);
        }
        if (p(e, s._closedPromise, (e)=>{
            i ? b(!0, e) : y(()=>Hf(t, e), !0, e);
        }), p(t, o._closedPromise, (t)=>{
            n ? b(!0, t) : y(()=>Jl(e, t), !0, t);
        }), function(e, t, r) {
            "closed" === e._state ? r() : sd(t, r);
        }(e, s._closedPromise, ()=>{
            r ? b() : y(()=>(function(e) {
                    const t = e._ownerWritableStream, r = t._state;
                    return Yf(t) || "closed" === r ? rd(void 0) : "errored" === r ? id(t._storedError) : tl(e);
                })(o));
        }), Yf(t) || "closed" === t._state) {
            const t = new TypeError("the destination writable stream closed before all data could be piped to it");
            n ? b(!0, t) : y(()=>Jl(e, t), !0, t);
        }
        function l() {
            const e = u;
            return nd(u, ()=>e !== u ? l() : void 0);
        }
        function p(e, t, r) {
            "errored" === e._state ? r(e._storedError) : od(t, r);
        }
        function y(e, r, i) {
            function n() {
                ad(e(), ()=>m(r, i), (e)=>m(!0, e));
            }
            c || (c = !0, "writable" !== t._state || Yf(t) ? n() : sd(l(), n));
        }
        function b(e, r) {
            c || (c = !0, "writable" !== t._state || Yf(t) ? m(e, r) : sd(l(), ()=>m(e, r)));
        }
        function m(e, t) {
            nl(o), bd(s), void 0 !== a && a.removeEventListener("abort", f), e ? d(t) : h(void 0);
        }
        ud(td((e, t)=>{
            !function r(i) {
                i ? e() : nd(c ? rd(!0) : nd(o._readyPromise, ()=>td((e, t)=>{
                        Wd(s, {
                            _chunkSteps: (t)=>{
                                u = nd(al(o, t), void 0, Vh), e(!1);
                            },
                            _closeSteps: ()=>e(!0),
                            _errorSteps: t
                        });
                    })), r, t);
            }(!1);
        }));
    });
}
class Kl {
    constructor(){
        throw new TypeError("Illegal constructor");
    }
    get desiredSize() {
        if (!Dl(this)) throw Nl("desiredSize");
        return ql(this);
    }
    close() {
        if (!Dl(this)) throw Nl("close");
        if (!Fl(this)) throw new TypeError("The stream is not in a state that permits close");
        Bl(this);
    }
    enqueue(e) {
        if (!Dl(this)) throw Nl("enqueue");
        if (!Fl(this)) throw new TypeError("The stream is not in a state that permits enqueue");
        return Tl(this, e);
    }
    error(e) {
        if (!Dl(this)) throw Nl("error");
        zl(this, e);
    }
    [Sd](e) {
        tf(this);
        const t = this._cancelAlgorithm(e);
        return Il(this), t;
    }
    [Ed](e) {
        const t = this._controlledReadableStream;
        if (this._queue.length > 0) {
            const r = Jd(this);
            this._closeRequested && 0 === this._queue.length ? (Il(this), ep(t)) : Rl(this), e._chunkSteps(r);
        } else qd(t, e), Rl(this);
    }
}
function Dl(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream");
}
function Rl(e) {
    if (!Ul(e)) return;
    if (e._pulling) return void (e._pullAgain = !0);
    e._pulling = !0;
    ad(e._pullAlgorithm(), ()=>{
        e._pulling = !1, e._pullAgain && (e._pullAgain = !1, Rl(e));
    }, (t)=>{
        zl(e, t);
    });
}
function Ul(e) {
    const t = e._controlledReadableStream;
    if (!Fl(e)) return !1;
    if (!e._started) return !1;
    if (Ql(t) && Od(t) > 0) return !0;
    return ql(e) > 0;
}
function Il(e) {
    e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
}
function Bl(e) {
    if (!Fl(e)) return;
    const t = e._controlledReadableStream;
    e._closeRequested = !0, 0 === e._queue.length && (Il(e), ep(t));
}
function Tl(e, t) {
    if (!Fl(e)) return;
    const r = e._controlledReadableStream;
    if (Ql(r) && Od(r) > 0) Fd(r, t, !1);
    else {
        let r;
        try {
            r = e._strategySizeAlgorithm(t);
        } catch (t) {
            throw zl(e, t), t;
        }
        try {
            ef(e, t, r);
        } catch (t) {
            throw zl(e, t), t;
        }
    }
    Rl(e);
}
function zl(e, t) {
    const r = e._controlledReadableStream;
    "readable" === r._state && (tf(e), Il(e), tp(r, t));
}
function ql(e) {
    const t = e._controlledReadableStream._state;
    return "errored" === t ? null : "closed" === t ? 0 : e._strategyHWM - e._queueTotalSize;
}
function Fl(e) {
    const t = e._controlledReadableStream._state;
    return !e._closeRequested && "readable" === t;
}
function Ol(e, t, r, i, n, a, s) {
    t._controlledReadableStream = e, t._queue = void 0, t._queueTotalSize = void 0, tf(t), t._started = !1, t._closeRequested = !1, t._pullAgain = !1, t._pulling = !1, t._strategySizeAlgorithm = s, t._strategyHWM = a, t._pullAlgorithm = i, t._cancelAlgorithm = n, e._readableStreamController = t;
    ad(rd(r()), ()=>{
        t._started = !0, Rl(t);
    }, (e)=>{
        zl(t, e);
    });
}
function Nl(e) {
    return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
}
function jl(e, t, r) {
    return Cd(e, r), (r)=>fd(e, t, [
            r
        ]);
}
function Ll(e, t, r) {
    return Cd(e, r), (r)=>fd(e, t, [
            r
        ]);
}
function Wl(e, t, r) {
    return Cd(e, r), (r)=>dd(e, t, [
            r
        ]);
}
function Hl(e, t) {
    if ("bytes" !== (e = "" + e)) throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamType`);
    return e;
}
function Gl(e, t) {
    if ("byob" !== (e = "" + e)) throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
    return e;
}
function Vl(e, t) {
    Md(e, t);
    const r = null == e ? void 0 : e.preventAbort, i = null == e ? void 0 : e.preventCancel, n = null == e ? void 0 : e.preventClose, a = null == e ? void 0 : e.signal;
    return void 0 !== a && function(e, t) {
        if (!function(e) {
            if ("object" != typeof e || null === e) return !1;
            try {
                return "boolean" == typeof e.aborted;
            } catch (e) {
                return !1;
            }
        }(e)) throw new TypeError(t + " is not an AbortSignal.");
    }(a, t + " has member 'signal' that"), {
        preventAbort: !!r,
        preventCancel: !!i,
        preventClose: !!n,
        signal: a
    };
}
Object.defineProperties(Kl.prototype, {
    close: {
        enumerable: !0
    },
    enqueue: {
        enumerable: !0
    },
    error: {
        enumerable: !0
    },
    desiredSize: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(Kl.prototype, Gh.toStringTag, {
    value: "ReadableStreamDefaultController",
    configurable: !0
});
class $l {
    constructor(e = {}, t = {}){
        void 0 === e ? e = null : Kd(e, "First parameter");
        const r = Uf(t, "Second parameter"), i = function(e, t) {
            Md(e, t);
            const r = e, i = null == r ? void 0 : r.autoAllocateChunkSize, n = null == r ? void 0 : r.cancel, a = null == r ? void 0 : r.pull, s = null == r ? void 0 : r.start, o = null == r ? void 0 : r.type;
            return {
                autoAllocateChunkSize: void 0 === i ? void 0 : Bd(i, t + " has member 'autoAllocateChunkSize' that"),
                cancel: void 0 === n ? void 0 : jl(n, r, t + " has member 'cancel' that"),
                pull: void 0 === a ? void 0 : Ll(a, r, t + " has member 'pull' that"),
                start: void 0 === s ? void 0 : Wl(s, r, t + " has member 'start' that"),
                type: void 0 === o ? void 0 : Hl(o, t + " has member 'type' that")
            };
        }(e, "First parameter");
        if (Yl(this), "bytes" === i.type) {
            if (void 0 !== r.size) throw new RangeError("The strategy for a byte stream cannot have a size function");
            kf(this, i, Df(r, 0));
        } else {
            const e = Rf(r);
            !function(e, t, r, i) {
                const n = Object.create(Kl.prototype);
                let a = ()=>{}, s = ()=>rd(void 0), o = ()=>rd(void 0);
                void 0 !== t.start && (a = ()=>t.start(n)), void 0 !== t.pull && (s = ()=>t.pull(n)), void 0 !== t.cancel && (o = (e)=>t.cancel(e)), Ol(e, n, a, s, o, r, i);
            }(this, i, Df(r, 1), e);
        }
    }
    get locked() {
        if (!Xl(this)) throw rp("locked");
        return Ql(this);
    }
    cancel(e) {
        return Xl(this) ? Ql(this) ? id(new TypeError("Cannot cancel a stream that already has a reader")) : Jl(this, e) : id(rp("cancel"));
    }
    getReader(e) {
        if (!Xl(this)) throw rp("getReader");
        const t = function(e, t) {
            Md(e, t);
            const r = null == e ? void 0 : e.mode;
            return {
                mode: void 0 === r ? void 0 : Gl(r, t + " has member 'mode' that")
            };
        }(e, "First parameter");
        return void 0 === t.mode ? zd(this) : function(e) {
            return new Mf(e);
        }(this);
    }
    pipeThrough(e, t = {}) {
        if (!Xl(this)) throw rp("pipeThrough");
        Dd(e, 1, "pipeThrough");
        const r = function(e, t) {
            Md(e, t);
            const r = null == e ? void 0 : e.readable;
            Rd(r, "readable", "ReadableWritablePair"), Td(r, t + " has member 'readable' that");
            const i = null == e ? void 0 : e.writable;
            return Rd(i, "writable", "ReadableWritablePair"), Ff(i, t + " has member 'writable' that"), {
                readable: r,
                writable: i
            };
        }(e, "First parameter"), i = Vl(t, "Second parameter");
        if (Ql(this)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
        if (Wf(r.writable)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
        return ud(Cl(this, r.writable, i.preventClose, i.preventAbort, i.preventCancel, i.signal)), r.readable;
    }
    pipeTo(e, t = {}) {
        if (!Xl(this)) return id(rp("pipeTo"));
        if (void 0 === e) return id("Parameter 1 is required in 'pipeTo'.");
        if (!Lf(e)) return id(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
        let r;
        try {
            r = Vl(t, "Second parameter");
        } catch (e) {
            return id(e);
        }
        return Ql(this) ? id(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Wf(e) ? id(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : Cl(this, e, r.preventClose, r.preventAbort, r.preventCancel, r.signal);
    }
    tee() {
        if (!Xl(this)) throw rp("tee");
        const e = function(e, t) {
            const r = zd(e);
            let i, n, a, s, o, c = !1, u = !1, h = !1;
            const d = td((e)=>{
                o = e;
            });
            function f() {
                return c || (c = !0, Wd(r, {
                    _chunkSteps: (e)=>{
                        hd(()=>{
                            c = !1;
                            const t = e, r = e;
                            u || Tl(a._readableStreamController, t), h || Tl(s._readableStreamController, r);
                        });
                    },
                    _closeSteps: ()=>{
                        c = !1, u || Bl(a._readableStreamController), h || Bl(s._readableStreamController), u && h || o(void 0);
                    },
                    _errorSteps: ()=>{
                        c = !1;
                    }
                })), rd(void 0);
            }
            function l() {}
            return a = Zl(l, f, function(t) {
                if (u = !0, i = t, h) {
                    const t = rf([
                        i,
                        n
                    ]), r = Jl(e, t);
                    o(r);
                }
                return d;
            }), s = Zl(l, f, function(t) {
                if (h = !0, n = t, u) {
                    const t = rf([
                        i,
                        n
                    ]), r = Jl(e, t);
                    o(r);
                }
                return d;
            }), od(r._closedPromise, (e)=>{
                zl(a._readableStreamController, e), zl(s._readableStreamController, e), u && h || o(void 0);
            }), [
                a,
                s
            ];
        }(this);
        return rf(e);
    }
    values(e) {
        if (!Xl(this)) throw rp("values");
        return function(e, t) {
            const r = zd(e), i = new Vd(r, t), n = Object.create($d);
            return n._asyncIteratorImpl = i, n;
        }(this, function(e, t) {
            return Md(e, t), {
                preventCancel: !!(null == e ? void 0 : e.preventCancel)
            };
        }(e, "First parameter").preventCancel);
    }
}
function Zl(e, t, r, i = 1, n = ()=>1) {
    const a = Object.create($l.prototype);
    Yl(a);
    return Ol(a, Object.create(Kl.prototype), e, t, r, i, n), a;
}
function Yl(e) {
    e._state = "readable", e._reader = void 0, e._storedError = void 0, e._disturbed = !1;
}
function Xl(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_readableStreamController");
}
function Ql(e) {
    return void 0 !== e._reader;
}
function Jl(e, t) {
    if (e._disturbed = !0, "closed" === e._state) return rd(void 0);
    if ("errored" === e._state) return id(e._storedError);
    ep(e);
    return cd(e._readableStreamController[Sd](t), Vh);
}
function ep(e) {
    e._state = "closed";
    const t = e._reader;
    void 0 !== t && (_d(t), Ld(t) && (t._readRequests.forEach((e)=>{
        e._closeSteps();
    }), t._readRequests = new ld));
}
function tp(e, t) {
    e._state = "errored", e._storedError = t;
    const r = e._reader;
    void 0 !== r && (vd(r, t), Ld(r) ? (r._readRequests.forEach((e)=>{
        e._errorSteps(t);
    }), r._readRequests = new ld) : (r._readIntoRequests.forEach((e)=>{
        e._errorSteps(t);
    }), r._readIntoRequests = new ld));
}
function rp(e) {
    return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
}
function ip(e, t) {
    Md(e, t);
    const r = null == e ? void 0 : e.highWaterMark;
    return Rd(r, "highWaterMark", "QueuingStrategyInit"), {
        highWaterMark: Ud(r)
    };
}
Object.defineProperties($l.prototype, {
    cancel: {
        enumerable: !0
    },
    getReader: {
        enumerable: !0
    },
    pipeThrough: {
        enumerable: !0
    },
    pipeTo: {
        enumerable: !0
    },
    tee: {
        enumerable: !0
    },
    values: {
        enumerable: !0
    },
    locked: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty($l.prototype, Gh.toStringTag, {
    value: "ReadableStream",
    configurable: !0
}), "symbol" == typeof Gh.asyncIterator && Object.defineProperty($l.prototype, Gh.asyncIterator, {
    value: $l.prototype.values,
    writable: !0,
    configurable: !0
});
const np = function(e) {
    return e.byteLength;
};
class ap {
    constructor(e){
        Dd(e, 1, "ByteLengthQueuingStrategy"), e = ip(e, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = e.highWaterMark;
    }
    get highWaterMark() {
        if (!op(this)) throw sp("highWaterMark");
        return this._byteLengthQueuingStrategyHighWaterMark;
    }
    get size() {
        if (!op(this)) throw sp("size");
        return np;
    }
}
function sp(e) {
    return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
}
function op(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark");
}
Object.defineProperties(ap.prototype, {
    highWaterMark: {
        enumerable: !0
    },
    size: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(ap.prototype, Gh.toStringTag, {
    value: "ByteLengthQueuingStrategy",
    configurable: !0
});
const cp = function() {
    return 1;
};
class up {
    constructor(e){
        Dd(e, 1, "CountQueuingStrategy"), e = ip(e, "First parameter"), this._countQueuingStrategyHighWaterMark = e.highWaterMark;
    }
    get highWaterMark() {
        if (!dp(this)) throw hp("highWaterMark");
        return this._countQueuingStrategyHighWaterMark;
    }
    get size() {
        if (!dp(this)) throw hp("size");
        return cp;
    }
}
function hp(e) {
    return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
}
function dp(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark");
}
function fp(e, t, r) {
    return Cd(e, r), (r)=>fd(e, t, [
            r
        ]);
}
function lp(e, t, r) {
    return Cd(e, r), (r)=>dd(e, t, [
            r
        ]);
}
function pp(e, t, r) {
    return Cd(e, r), (r, i)=>fd(e, t, [
            r,
            i
        ]);
}
Object.defineProperties(up.prototype, {
    highWaterMark: {
        enumerable: !0
    },
    size: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(up.prototype, Gh.toStringTag, {
    value: "CountQueuingStrategy",
    configurable: !0
});
class yp {
    constructor(e = {}, t = {}, r = {}){
        void 0 === e && (e = null);
        const i = Uf(t, "Second parameter"), n = Uf(r, "Third parameter"), a = function(e, t) {
            Md(e, t);
            const r = null == e ? void 0 : e.flush, i = null == e ? void 0 : e.readableType, n = null == e ? void 0 : e.start, a = null == e ? void 0 : e.transform, s = null == e ? void 0 : e.writableType;
            return {
                flush: void 0 === r ? void 0 : fp(r, e, t + " has member 'flush' that"),
                readableType: i,
                start: void 0 === n ? void 0 : lp(n, e, t + " has member 'start' that"),
                transform: void 0 === a ? void 0 : pp(a, e, t + " has member 'transform' that"),
                writableType: s
            };
        }(e, "First parameter");
        if (void 0 !== a.readableType) throw new RangeError("Invalid readableType specified");
        if (void 0 !== a.writableType) throw new RangeError("Invalid writableType specified");
        const s = Df(n, 0), o = Rf(n), c = Df(i, 1), u = Rf(i);
        let h;
        !function(e, t, r, i, n, a) {
            function s() {
                return t;
            }
            function o(t) {
                return function(e, t) {
                    const r = e._transformStreamController;
                    if (e._backpressure) return cd(e._backpressureChangePromise, ()=>{
                        const i = e._writable;
                        if ("erroring" === i._state) throw i._storedError;
                        return Sp(r, t);
                    });
                    return Sp(r, t);
                }(e, t);
            }
            function c(t) {
                return function(e, t) {
                    return mp(e, t), rd(void 0);
                }(e, t);
            }
            function u() {
                return function(e) {
                    const t = e._readable, r = e._transformStreamController, i = r._flushAlgorithm();
                    return kp(r), cd(i, ()=>{
                        if ("errored" === t._state) throw t._storedError;
                        Bl(t._readableStreamController);
                    }, (r)=>{
                        throw mp(e, r), t._storedError;
                    });
                }(e);
            }
            function h() {
                return function(e) {
                    return wp(e, !1), e._backpressureChangePromise;
                }(e);
            }
            function d(t) {
                return gp(e, t), rd(void 0);
            }
            e._writable = function(e, t, r, i, n = 1, a = ()=>1) {
                const s = Object.create(Of.prototype);
                return jf(s), cl(s, Object.create(ol.prototype), e, t, r, i, n, a), s;
            }(s, o, u, c, r, i), e._readable = Zl(s, h, d, n, a), e._backpressure = void 0, e._backpressureChangePromise = void 0, e._backpressureChangePromise_resolve = void 0, wp(e, !0), e._transformStreamController = void 0;
        }(this, td((e)=>{
            h = e;
        }), c, u, s, o), function(e, t) {
            const r = Object.create(vp.prototype);
            let i = (e)=>{
                try {
                    return Ap(r, e), rd(void 0);
                } catch (e) {
                    return id(e);
                }
            }, n = ()=>rd(void 0);
            void 0 !== t.transform && (i = (e)=>t.transform(e, r));
            void 0 !== t.flush && (n = ()=>t.flush(r));
            !function(e, t, r, i) {
                t._controlledTransformStream = e, e._transformStreamController = t, t._transformAlgorithm = r, t._flushAlgorithm = i;
            }(e, r, i, n);
        }(this, a), void 0 !== a.start ? h(a.start(this._transformStreamController)) : h(void 0);
    }
    get readable() {
        if (!bp(this)) throw Pp("readable");
        return this._readable;
    }
    get writable() {
        if (!bp(this)) throw Pp("writable");
        return this._writable;
    }
}
function bp(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_transformStreamController");
}
function mp(e, t) {
    zl(e._readable._readableStreamController, t), gp(e, t);
}
function gp(e, t) {
    kp(e._transformStreamController), fl(e._writable._writableStreamController, t), e._backpressure && wp(e, !1);
}
function wp(e, t) {
    void 0 !== e._backpressureChangePromise && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = td((t)=>{
        e._backpressureChangePromise_resolve = t;
    }), e._backpressure = t;
}
Object.defineProperties(yp.prototype, {
    readable: {
        enumerable: !0
    },
    writable: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(yp.prototype, Gh.toStringTag, {
    value: "TransformStream",
    configurable: !0
});
class vp {
    constructor(){
        throw new TypeError("Illegal constructor");
    }
    get desiredSize() {
        if (!_p(this)) throw Ep("desiredSize");
        return ql(this._controlledTransformStream._readable._readableStreamController);
    }
    enqueue(e) {
        if (!_p(this)) throw Ep("enqueue");
        Ap(this, e);
    }
    error(e) {
        if (!_p(this)) throw Ep("error");
        var t;
        t = e, mp(this._controlledTransformStream, t);
    }
    terminate() {
        if (!_p(this)) throw Ep("terminate");
        !function(e) {
            const t = e._controlledTransformStream, r = t._readable._readableStreamController;
            Bl(r);
            gp(t, new TypeError("TransformStream terminated"));
        }(this);
    }
}
function _p(e) {
    return !!Zh(e) && !!Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream");
}
function kp(e) {
    e._transformAlgorithm = void 0, e._flushAlgorithm = void 0;
}
function Ap(e, t) {
    const r = e._controlledTransformStream, i = r._readable._readableStreamController;
    if (!Fl(i)) throw new TypeError("Readable side is not in a state that permits enqueue");
    try {
        Tl(i, t);
    } catch (e) {
        throw gp(r, e), r._readable._storedError;
    }
    const n = function(e) {
        return !Ul(e);
    }(i);
    n !== r._backpressure && wp(r, !0);
}
function Sp(e, t) {
    return cd(e._transformAlgorithm(t), void 0, (t)=>{
        throw mp(e._controlledTransformStream, t), t;
    });
}
function Ep(e) {
    return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
}
function Pp(e) {
    return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
}
Object.defineProperties(vp.prototype, {
    enqueue: {
        enumerable: !0
    },
    error: {
        enumerable: !0
    },
    terminate: {
        enumerable: !0
    },
    desiredSize: {
        enumerable: !0
    }
}), "symbol" == typeof Gh.toStringTag && Object.defineProperty(vp.prototype, Gh.toStringTag, {
    value: "TransformStreamDefaultController",
    configurable: !0
});
var xp = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ByteLengthQueuingStrategy: ap,
    CountQueuingStrategy: up,
    ReadableByteStreamController: af,
    ReadableStream: $l,
    ReadableStreamBYOBReader: Mf,
    ReadableStreamBYOBRequest: nf,
    ReadableStreamDefaultController: Kl,
    ReadableStreamDefaultReader: jd,
    TransformStream: yp,
    TransformStreamDefaultController: vp,
    WritableStream: Of,
    WritableStreamDefaultController: ol,
    WritableStreamDefaultWriter: Jf
}), Mp = function(e, t) {
    return Mp = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }, Mp(e, t);
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function Cp(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + t + " is not a constructor or null");
    function r() {
        this.constructor = e;
    }
    Mp(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
}
function Kp(e) {
    if (!e) throw new TypeError("Assertion failed");
}
function Dp() {}
function Rp(e) {
    return "object" == typeof e && null !== e || "function" == typeof e;
}
function Up(e) {
    if ("function" != typeof e) return !1;
    var t = !1;
    try {
        new e({
            start: function() {
                t = !0;
            }
        });
    } catch (e) {}
    return t;
}
function Ip(e) {
    return !!Rp(e) && "function" == typeof e.getReader;
}
function Bp(e) {
    return !!Rp(e) && "function" == typeof e.getWriter;
}
function Tp(e) {
    return !!Rp(e) && !!Ip(e.readable) && !!Bp(e.writable);
}
function zp(e) {
    try {
        return e.getReader({
            mode: "byob"
        }).releaseLock(), !0;
    } catch (e) {
        return !1;
    }
}
function qp(e, t) {
    var r = (void 0 === t ? {} : t).type;
    return Kp(Ip(e)), Kp(!1 === e.locked), "bytes" === (r = Fp(r)) ? new Lp(e) : new Np(e);
}
function Fp(e) {
    var t = e + "";
    if ("bytes" === t) return t;
    if (void 0 === e) return e;
    throw new RangeError("Invalid type is specified");
}
var Op = function() {
    function e(e) {
        this._underlyingReader = void 0, this._readerMode = void 0, this._readableStreamController = void 0, this._pendingRead = void 0, this._underlyingStream = e, this._attachDefaultReader();
    }
    return e.prototype.start = function(e) {
        this._readableStreamController = e;
    }, e.prototype.cancel = function(e) {
        return Kp(void 0 !== this._underlyingReader), this._underlyingReader.cancel(e);
    }, e.prototype._attachDefaultReader = function() {
        if ("default" !== this._readerMode) {
            this._detachReader();
            var e = this._underlyingStream.getReader();
            this._readerMode = "default", this._attachReader(e);
        }
    }, e.prototype._attachReader = function(e) {
        var t = this;
        Kp(void 0 === this._underlyingReader), this._underlyingReader = e;
        var r = this._underlyingReader.closed;
        r && r.then(function() {
            return t._finishPendingRead();
        }).then(function() {
            e === t._underlyingReader && t._readableStreamController.close();
        }, function(r) {
            e === t._underlyingReader && t._readableStreamController.error(r);
        }).catch(Dp);
    }, e.prototype._detachReader = function() {
        void 0 !== this._underlyingReader && (this._underlyingReader.releaseLock(), this._underlyingReader = void 0, this._readerMode = void 0);
    }, e.prototype._pullWithDefaultReader = function() {
        var e = this;
        this._attachDefaultReader();
        var t = this._underlyingReader.read().then(function(t) {
            var r = e._readableStreamController;
            t.done ? e._tryClose() : r.enqueue(t.value);
        });
        return this._setPendingRead(t), t;
    }, e.prototype._tryClose = function() {
        try {
            this._readableStreamController.close();
        } catch (e) {}
    }, e.prototype._setPendingRead = function(e) {
        var t, r = this, i = function() {
            r._pendingRead === t && (r._pendingRead = void 0);
        };
        this._pendingRead = t = e.then(i, i);
    }, e.prototype._finishPendingRead = function() {
        var e = this;
        if (this._pendingRead) {
            var t = function() {
                return e._finishPendingRead();
            };
            return this._pendingRead.then(t, t);
        }
    }, e;
}(), Np = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return Cp(t, e), t.prototype.pull = function() {
        return this._pullWithDefaultReader();
    }, t;
}(Op);
function jp(e) {
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
var Lp = function(e) {
    function t(t) {
        var r = this, i = zp(t);
        return (r = e.call(this, t) || this)._supportsByob = i, r;
    }
    return Cp(t, e), Object.defineProperty(t.prototype, "type", {
        get: function() {
            return "bytes";
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype._attachByobReader = function() {
        if ("byob" !== this._readerMode) {
            Kp(this._supportsByob), this._detachReader();
            var e = this._underlyingStream.getReader({
                mode: "byob"
            });
            this._readerMode = "byob", this._attachReader(e);
        }
    }, t.prototype.pull = function() {
        if (this._supportsByob) {
            var e = this._readableStreamController.byobRequest;
            if (e) return this._pullWithByobRequest(e);
        }
        return this._pullWithDefaultReader();
    }, t.prototype._pullWithByobRequest = function(e) {
        var t = this;
        this._attachByobReader();
        var r = new Uint8Array(e.view.byteLength), i = this._underlyingReader.read(r).then(function(r) {
            var i, n, a;
            t._readableStreamController, r.done ? (t._tryClose(), e.respond(0)) : (i = r.value, n = e.view, a = jp(i), jp(n).set(a, 0), e.respond(r.value.byteLength));
        });
        return this._setPendingRead(i), i;
    }, t;
}(Op);
function Wp(e) {
    Kp(Bp(e)), Kp(!1 === e.locked);
    var t = e.getWriter();
    return new Hp(t);
}
var Hp = function() {
    function e(e) {
        var t = this;
        this._writableStreamController = void 0, this._pendingWrite = void 0, this._state = "writable", this._storedError = void 0, this._underlyingWriter = e, this._errorPromise = new Promise(function(e, r) {
            t._errorPromiseReject = r;
        }), this._errorPromise.catch(Dp);
    }
    return e.prototype.start = function(e) {
        var t = this;
        this._writableStreamController = e, this._underlyingWriter.closed.then(function() {
            t._state = "closed";
        }).catch(function(e) {
            return t._finishErroring(e);
        });
    }, e.prototype.write = function(e) {
        var t = this, r = this._underlyingWriter;
        if (null === r.desiredSize) return r.ready;
        var i = r.write(e);
        i.catch(function(e) {
            return t._finishErroring(e);
        }), r.ready.catch(function(e) {
            return t._startErroring(e);
        });
        var n = Promise.race([
            i,
            this._errorPromise
        ]);
        return this._setPendingWrite(n), n;
    }, e.prototype.close = function() {
        var e = this;
        return void 0 === this._pendingWrite ? this._underlyingWriter.close() : this._finishPendingWrite().then(function() {
            return e.close();
        });
    }, e.prototype.abort = function(e) {
        if ("errored" !== this._state) return this._underlyingWriter.abort(e);
    }, e.prototype._setPendingWrite = function(e) {
        var t, r = this, i = function() {
            r._pendingWrite === t && (r._pendingWrite = void 0);
        };
        this._pendingWrite = t = e.then(i, i);
    }, e.prototype._finishPendingWrite = function() {
        var e = this;
        if (void 0 === this._pendingWrite) return Promise.resolve();
        var t = function() {
            return e._finishPendingWrite();
        };
        return this._pendingWrite.then(t, t);
    }, e.prototype._startErroring = function(e) {
        var t = this;
        if ("writable" === this._state) {
            this._state = "erroring", this._storedError = e;
            var r = function() {
                return t._finishErroring(e);
            };
            void 0 === this._pendingWrite ? r() : this._finishPendingWrite().then(r, r), this._writableStreamController.error(e);
        }
    }, e.prototype._finishErroring = function(e) {
        "writable" === this._state && this._startErroring(e), "erroring" === this._state && (this._state = "errored", this._errorPromiseReject(this._storedError));
    }, e;
}();
function Gp(e) {
    Kp(Tp(e));
    var t = e.readable, r = e.writable;
    Kp(!1 === t.locked), Kp(!1 === r.locked);
    var i, n = t.getReader();
    try {
        i = r.getWriter();
    } catch (e) {
        throw n.releaseLock(), e;
    }
    return new Vp(n, i);
}
var Vp = function() {
    function e(e, t) {
        var r = this;
        this._transformStreamController = void 0, this._onRead = function(e) {
            if (!e.done) return r._transformStreamController.enqueue(e.value), r._reader.read().then(r._onRead);
        }, this._onError = function(e) {
            r._flushReject(e), r._transformStreamController.error(e), r._reader.cancel(e).catch(Dp), r._writer.abort(e).catch(Dp);
        }, this._onTerminate = function() {
            r._flushResolve(), r._transformStreamController.terminate();
            var e = new TypeError("TransformStream terminated");
            r._writer.abort(e).catch(Dp);
        }, this._reader = e, this._writer = t, this._flushPromise = new Promise(function(e, t) {
            r._flushResolve = e, r._flushReject = t;
        });
    }
    return e.prototype.start = function(e) {
        this._transformStreamController = e, this._reader.read().then(this._onRead).then(this._onTerminate, this._onError);
        var t = this._reader.closed;
        t && t.then(this._onTerminate, this._onError);
    }, e.prototype.transform = function(e) {
        return this._writer.write(e);
    }, e.prototype.flush = function() {
        var e = this;
        return this._writer.close().then(function() {
            return e._flushPromise;
        });
    }, e;
}(), $p = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    createReadableStreamWrapper: function(e) {
        Kp(function(e) {
            return !!Up(e) && !!Ip(new e);
        }(e));
        var t = function(e) {
            try {
                return new e({
                    type: "bytes"
                }), !0;
            } catch (e) {
                return !1;
            }
        }(e);
        return function(r, i) {
            var n = (void 0 === i ? {} : i).type;
            if ("bytes" !== (n = Fp(n)) || t || (n = void 0), r.constructor === e && ("bytes" !== n || zp(r))) return r;
            if ("bytes" === n) {
                var a = qp(r, {
                    type: n
                });
                return new e(a);
            }
            a = qp(r);
            return new e(a);
        };
    },
    createTransformStreamWrapper: function(e) {
        return Kp(function(e) {
            return !!Up(e) && !!Tp(new e);
        }(e)), function(t) {
            if (t.constructor === e) return t;
            var r = Gp(t);
            return new e(r);
        };
    },
    createWrappingReadableSource: qp,
    createWrappingTransformer: Gp,
    createWrappingWritableSink: Wp,
    createWritableStreamWrapper: function(e) {
        return Kp(function(e) {
            return !!Up(e) && !!Bp(new e);
        }(e)), function(t) {
            if (t.constructor === e) return t;
            var r = Wp(t);
            return new e(r);
        };
    }
}), Zp = it(function(e) {
    !function(e, t) {
        function r(e, t) {
            if (!e) throw Error(t || "Assertion failed");
        }
        function i(e, t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e;
        }
        function n(e, t, r) {
            if (n.isBN(e)) return e;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"));
        }
        var a;
        "object" == typeof e ? e.exports = n : t.BN = n, n.BN = n, n.wordSize = 26;
        try {
            a = void 0;
        } catch (e) {}
        function s(e, t, r) {
            for(var i = 0, n = Math.min(e.length, r), a = t; a < n; a++){
                var s = e.charCodeAt(a) - 48;
                i <<= 4, i |= s >= 49 && s <= 54 ? s - 49 + 10 : s >= 17 && s <= 22 ? s - 17 + 10 : 15 & s;
            }
            return i;
        }
        function o(e, t, r, i) {
            for(var n = 0, a = Math.min(e.length, r), s = t; s < a; s++){
                var o = e.charCodeAt(s) - 48;
                n *= i, n += o >= 49 ? o - 49 + 10 : o >= 17 ? o - 17 + 10 : o;
            }
            return n;
        }
        n.isBN = function(e) {
            return e instanceof n || null !== e && "object" == typeof e && e.constructor.wordSize === n.wordSize && Array.isArray(e.words);
        }, n.max = function(e, t) {
            return e.cmp(t) > 0 ? e : t;
        }, n.min = function(e, t) {
            return e.cmp(t) < 0 ? e : t;
        }, n.prototype._init = function(e, t, i) {
            if ("number" == typeof e) return this._initNumber(e, t, i);
            if ("object" == typeof e) return this._initArray(e, t, i);
            "hex" === t && (t = 16), r(t === (0 | t) && t >= 2 && t <= 36);
            var n = 0;
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] && n++, 16 === t ? this._parseHex(e, n) : this._parseBase(e, t, n), "-" === e[0] && (this.negative = 1), this.strip(), "le" === i && this._initArray(this.toArray(), t, i);
        }, n.prototype._initNumber = function(e, t, i) {
            e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [
                67108863 & e
            ], this.length = 1) : e < 4503599627370496 ? (this.words = [
                67108863 & e,
                e / 67108864 & 67108863
            ], this.length = 2) : (r(e < 9007199254740992), this.words = [
                67108863 & e,
                e / 67108864 & 67108863,
                1
            ], this.length = 3), "le" === i && this._initArray(this.toArray(), t, i);
        }, n.prototype._initArray = function(e, t, i) {
            if (r("number" == typeof e.length), e.length <= 0) return this.words = [
                0
            ], this.length = 1, this;
            this.length = Math.ceil(e.length / 3), this.words = Array(this.length);
            for(var n = 0; n < this.length; n++)this.words[n] = 0;
            var a, s, o = 0;
            if ("be" === i) for(n = e.length - 1, a = 0; n >= 0; n -= 3)s = e[n] | e[n - 1] << 8 | e[n - 2] << 16, this.words[a] |= s << o & 67108863, this.words[a + 1] = s >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, a++);
            else if ("le" === i) for(n = 0, a = 0; n < e.length; n += 3)s = e[n] | e[n + 1] << 8 | e[n + 2] << 16, this.words[a] |= s << o & 67108863, this.words[a + 1] = s >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, a++);
            return this.strip();
        }, n.prototype._parseHex = function(e, t) {
            this.length = Math.ceil((e.length - t) / 6), this.words = Array(this.length);
            for(var r = 0; r < this.length; r++)this.words[r] = 0;
            var i, n, a = 0;
            for(r = e.length - 6, i = 0; r >= t; r -= 6)n = s(e, r, r + 6), this.words[i] |= n << a & 67108863, this.words[i + 1] |= n >>> 26 - a & 4194303, (a += 24) >= 26 && (a -= 26, i++);
            r + 6 !== t && (n = s(e, t, r + 6), this.words[i] |= n << a & 67108863, this.words[i + 1] |= n >>> 26 - a & 4194303), this.strip();
        }, n.prototype._parseBase = function(e, t, r) {
            this.words = [
                0
            ], this.length = 1;
            for(var i = 0, n = 1; n <= 67108863; n *= t)i++;
            i--, n = n / t | 0;
            for(var a = e.length - r, s = a % i, c = Math.min(a, a - s) + r, u = 0, h = r; h < c; h += i)u = o(e, h, h + i, t), this.imuln(n), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
            if (0 !== s) {
                var d = 1;
                for(u = o(e, h, e.length, t), h = 0; h < s; h++)d *= t;
                this.imuln(d), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
            }
        }, n.prototype.copy = function(e) {
            e.words = Array(this.length);
            for(var t = 0; t < this.length; t++)e.words[t] = this.words[t];
            e.length = this.length, e.negative = this.negative, e.red = this.red;
        }, n.prototype.clone = function() {
            var e = new n(null);
            return this.copy(e), e;
        }, n.prototype._expand = function(e) {
            for(; this.length < e;)this.words[this.length++] = 0;
            return this;
        }, n.prototype.strip = function() {
            for(; this.length > 1 && 0 === this.words[this.length - 1];)this.length--;
            return this._normSign();
        }, n.prototype._normSign = function() {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
        }, n.prototype.inspect = function() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        };
        var c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000"
        ], u = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ], h = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176
        ];
        function d(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var i = e.length + t.length | 0;
            r.length = i, i = i - 1 | 0;
            var n = 0 | e.words[0], a = 0 | t.words[0], s = n * a, o = 67108863 & s, c = s / 67108864 | 0;
            r.words[0] = o;
            for(var u = 1; u < i; u++){
                for(var h = c >>> 26, d = 67108863 & c, f = Math.min(u, t.length - 1), l = Math.max(0, u - e.length + 1); l <= f; l++){
                    var p = u - l | 0;
                    h += (s = (n = 0 | e.words[p]) * (a = 0 | t.words[l]) + d) / 67108864 | 0, d = 67108863 & s;
                }
                r.words[u] = 0 | d, c = 0 | h;
            }
            return 0 !== c ? r.words[u] = 0 | c : r.length--, r.strip();
        }
        n.prototype.toString = function(e, t) {
            var i;
            if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                i = "";
                for(var n = 0, a = 0, s = 0; s < this.length; s++){
                    var o = this.words[s], d = (16777215 & (o << n | a)).toString(16);
                    i = 0 !== (a = o >>> 24 - n & 16777215) || s !== this.length - 1 ? c[6 - d.length] + d + i : d + i, (n += 2) >= 26 && (n -= 26, s--);
                }
                for(0 !== a && (i = a.toString(16) + i); i.length % t != 0;)i = "0" + i;
                return 0 !== this.negative && (i = "-" + i), i;
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
                var f = u[e], l = h[e];
                i = "";
                var p = this.clone();
                for(p.negative = 0; !p.isZero();){
                    var y = p.modn(l).toString(e);
                    i = (p = p.idivn(l)).isZero() ? y + i : c[f - y.length] + y + i;
                }
                for(this.isZero() && (i = "0" + i); i.length % t != 0;)i = "0" + i;
                return 0 !== this.negative && (i = "-" + i), i;
            }
            r(!1, "Base should be between 2 and 36");
        }, n.prototype.toNumber = function() {
            var e = this.words[0];
            return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e;
        }, n.prototype.toJSON = function() {
            return this.toString(16);
        }, n.prototype.toBuffer = function(e, t) {
            return r(void 0 !== a), this.toArrayLike(a, e, t);
        }, n.prototype.toArray = function(e, t) {
            return this.toArrayLike(Array, e, t);
        }, n.prototype.toArrayLike = function(e, t, i) {
            var n = this.byteLength(), a = i || Math.max(1, n);
            r(n <= a, "byte array longer than desired length"), r(a > 0, "Requested array length <= 0"), this.strip();
            var s, o, c = "le" === t, u = new e(a), h = this.clone();
            if (c) {
                for(o = 0; !h.isZero(); o++)s = h.andln(255), h.iushrn(8), u[o] = s;
                for(; o < a; o++)u[o] = 0;
            } else {
                for(o = 0; o < a - n; o++)u[o] = 0;
                for(o = 0; !h.isZero(); o++)s = h.andln(255), h.iushrn(8), u[a - o - 1] = s;
            }
            return u;
        }, n.prototype._countBits = Math.clz32 ? function(e) {
            return 32 - Math.clz32(e);
        } : function(e) {
            var t = e, r = 0;
            return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t;
        }, n.prototype._zeroBits = function(e) {
            if (0 === e) return 26;
            var t = e, r = 0;
            return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r;
        }, n.prototype.bitLength = function() {
            var e = this.words[this.length - 1], t = this._countBits(e);
            return 26 * (this.length - 1) + t;
        }, n.prototype.zeroBits = function() {
            if (this.isZero()) return 0;
            for(var e = 0, t = 0; t < this.length; t++){
                var r = this._zeroBits(this.words[t]);
                if (e += r, 26 !== r) break;
            }
            return e;
        }, n.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8);
        }, n.prototype.toTwos = function(e) {
            return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone();
        }, n.prototype.fromTwos = function(e) {
            return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
        }, n.prototype.isNeg = function() {
            return 0 !== this.negative;
        }, n.prototype.neg = function() {
            return this.clone().ineg();
        }, n.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this;
        }, n.prototype.iuor = function(e) {
            for(; this.length < e.length;)this.words[this.length++] = 0;
            for(var t = 0; t < e.length; t++)this.words[t] = this.words[t] | e.words[t];
            return this.strip();
        }, n.prototype.ior = function(e) {
            return r(0 == (this.negative | e.negative)), this.iuor(e);
        }, n.prototype.or = function(e) {
            return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
        }, n.prototype.uor = function(e) {
            return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
        }, n.prototype.iuand = function(e) {
            var t;
            t = this.length > e.length ? e : this;
            for(var r = 0; r < t.length; r++)this.words[r] = this.words[r] & e.words[r];
            return this.length = t.length, this.strip();
        }, n.prototype.iand = function(e) {
            return r(0 == (this.negative | e.negative)), this.iuand(e);
        }, n.prototype.and = function(e) {
            return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
        }, n.prototype.uand = function(e) {
            return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
        }, n.prototype.iuxor = function(e) {
            var t, r;
            this.length > e.length ? (t = this, r = e) : (t = e, r = this);
            for(var i = 0; i < r.length; i++)this.words[i] = t.words[i] ^ r.words[i];
            if (this !== t) for(; i < t.length; i++)this.words[i] = t.words[i];
            return this.length = t.length, this.strip();
        }, n.prototype.ixor = function(e) {
            return r(0 == (this.negative | e.negative)), this.iuxor(e);
        }, n.prototype.xor = function(e) {
            return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
        }, n.prototype.uxor = function(e) {
            return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
        }, n.prototype.inotn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26), i = e % 26;
            this._expand(t), i > 0 && t--;
            for(var n = 0; n < t; n++)this.words[n] = 67108863 & ~this.words[n];
            return i > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - i), this.strip();
        }, n.prototype.notn = function(e) {
            return this.clone().inotn(e);
        }, n.prototype.setn = function(e, t) {
            r("number" == typeof e && e >= 0);
            var i = e / 26 | 0, n = e % 26;
            return this._expand(i + 1), this.words[i] = t ? this.words[i] | 1 << n : this.words[i] & ~(1 << n), this.strip();
        }, n.prototype.iadd = function(e) {
            var t, r, i;
            if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
            if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
            this.length > e.length ? (r = this, i = e) : (r = e, i = this);
            for(var n = 0, a = 0; a < i.length; a++)t = (0 | r.words[a]) + (0 | i.words[a]) + n, this.words[a] = 67108863 & t, n = t >>> 26;
            for(; 0 !== n && a < r.length; a++)t = (0 | r.words[a]) + n, this.words[a] = 67108863 & t, n = t >>> 26;
            if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
            else if (r !== this) for(; a < r.length; a++)this.words[a] = r.words[a];
            return this;
        }, n.prototype.add = function(e) {
            var t;
            return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
        }, n.prototype.isub = function(e) {
            if (0 !== e.negative) {
                e.negative = 0;
                var t = this.iadd(e);
                return e.negative = 1, t._normSign();
            }
            if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
            var r, i, n = this.cmp(e);
            if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            n > 0 ? (r = this, i = e) : (r = e, i = this);
            for(var a = 0, s = 0; s < i.length; s++)a = (t = (0 | r.words[s]) - (0 | i.words[s]) + a) >> 26, this.words[s] = 67108863 & t;
            for(; 0 !== a && s < r.length; s++)a = (t = (0 | r.words[s]) + a) >> 26, this.words[s] = 67108863 & t;
            if (0 === a && s < r.length && r !== this) for(; s < r.length; s++)this.words[s] = r.words[s];
            return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip();
        }, n.prototype.sub = function(e) {
            return this.clone().isub(e);
        };
        var f = function(e, t, r) {
            var i, n, a, s = e.words, o = t.words, c = r.words, u = 0, h = 0 | s[0], d = 8191 & h, f = h >>> 13, l = 0 | s[1], p = 8191 & l, y = l >>> 13, b = 0 | s[2], m = 8191 & b, g = b >>> 13, w = 0 | s[3], v = 8191 & w, _ = w >>> 13, k = 0 | s[4], A = 8191 & k, S = k >>> 13, E = 0 | s[5], P = 8191 & E, x = E >>> 13, M = 0 | s[6], C = 8191 & M, K = M >>> 13, D = 0 | s[7], R = 8191 & D, U = D >>> 13, I = 0 | s[8], B = 8191 & I, T = I >>> 13, z = 0 | s[9], q = 8191 & z, F = z >>> 13, O = 0 | o[0], N = 8191 & O, j = O >>> 13, L = 0 | o[1], W = 8191 & L, H = L >>> 13, G = 0 | o[2], V = 8191 & G, $ = G >>> 13, Z = 0 | o[3], Y = 8191 & Z, X = Z >>> 13, Q = 0 | o[4], J = 8191 & Q, ee = Q >>> 13, te = 0 | o[5], re = 8191 & te, ie = te >>> 13, ne = 0 | o[6], ae = 8191 & ne, se = ne >>> 13, oe = 0 | o[7], ce = 8191 & oe, ue = oe >>> 13, he = 0 | o[8], de = 8191 & he, fe = he >>> 13, le = 0 | o[9], pe = 8191 & le, ye = le >>> 13;
            r.negative = e.negative ^ t.negative, r.length = 19;
            var be = (u + (i = Math.imul(d, N)) | 0) + ((8191 & (n = (n = Math.imul(d, j)) + Math.imul(f, N) | 0)) << 13) | 0;
            u = ((a = Math.imul(f, j)) + (n >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, i = Math.imul(p, N), n = (n = Math.imul(p, j)) + Math.imul(y, N) | 0, a = Math.imul(y, j);
            var me = (u + (i = i + Math.imul(d, W) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, H) | 0) + Math.imul(f, W) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(f, H) | 0) + (n >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, i = Math.imul(m, N), n = (n = Math.imul(m, j)) + Math.imul(g, N) | 0, a = Math.imul(g, j), i = i + Math.imul(p, W) | 0, n = (n = n + Math.imul(p, H) | 0) + Math.imul(y, W) | 0, a = a + Math.imul(y, H) | 0;
            var ge = (u + (i = i + Math.imul(d, V) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, $) | 0) + Math.imul(f, V) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(f, $) | 0) + (n >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, i = Math.imul(v, N), n = (n = Math.imul(v, j)) + Math.imul(_, N) | 0, a = Math.imul(_, j), i = i + Math.imul(m, W) | 0, n = (n = n + Math.imul(m, H) | 0) + Math.imul(g, W) | 0, a = a + Math.imul(g, H) | 0, i = i + Math.imul(p, V) | 0, n = (n = n + Math.imul(p, $) | 0) + Math.imul(y, V) | 0, a = a + Math.imul(y, $) | 0;
            var we = (u + (i = i + Math.imul(d, Y) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, X) | 0) + Math.imul(f, Y) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(f, X) | 0) + (n >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, i = Math.imul(A, N), n = (n = Math.imul(A, j)) + Math.imul(S, N) | 0, a = Math.imul(S, j), i = i + Math.imul(v, W) | 0, n = (n = n + Math.imul(v, H) | 0) + Math.imul(_, W) | 0, a = a + Math.imul(_, H) | 0, i = i + Math.imul(m, V) | 0, n = (n = n + Math.imul(m, $) | 0) + Math.imul(g, V) | 0, a = a + Math.imul(g, $) | 0, i = i + Math.imul(p, Y) | 0, n = (n = n + Math.imul(p, X) | 0) + Math.imul(y, Y) | 0, a = a + Math.imul(y, X) | 0;
            var ve = (u + (i = i + Math.imul(d, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ee) | 0) + Math.imul(f, J) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(f, ee) | 0) + (n >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, i = Math.imul(P, N), n = (n = Math.imul(P, j)) + Math.imul(x, N) | 0, a = Math.imul(x, j), i = i + Math.imul(A, W) | 0, n = (n = n + Math.imul(A, H) | 0) + Math.imul(S, W) | 0, a = a + Math.imul(S, H) | 0, i = i + Math.imul(v, V) | 0, n = (n = n + Math.imul(v, $) | 0) + Math.imul(_, V) | 0, a = a + Math.imul(_, $) | 0, i = i + Math.imul(m, Y) | 0, n = (n = n + Math.imul(m, X) | 0) + Math.imul(g, Y) | 0, a = a + Math.imul(g, X) | 0, i = i + Math.imul(p, J) | 0, n = (n = n + Math.imul(p, ee) | 0) + Math.imul(y, J) | 0, a = a + Math.imul(y, ee) | 0;
            var _e = (u + (i = i + Math.imul(d, re) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ie) | 0) + Math.imul(f, re) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(f, ie) | 0) + (n >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, i = Math.imul(C, N), n = (n = Math.imul(C, j)) + Math.imul(K, N) | 0, a = Math.imul(K, j), i = i + Math.imul(P, W) | 0, n = (n = n + Math.imul(P, H) | 0) + Math.imul(x, W) | 0, a = a + Math.imul(x, H) | 0, i = i + Math.imul(A, V) | 0, n = (n = n + Math.imul(A, $) | 0) + Math.imul(S, V) | 0, a = a + Math.imul(S, $) | 0, i = i + Math.imul(v, Y) | 0, n = (n = n + Math.imul(v, X) | 0) + Math.imul(_, Y) | 0, a = a + Math.imul(_, X) | 0, i = i + Math.imul(m, J) | 0, n = (n = n + Math.imul(m, ee) | 0) + Math.imul(g, J) | 0, a = a + Math.imul(g, ee) | 0, i = i + Math.imul(p, re) | 0, n = (n = n + Math.imul(p, ie) | 0) + Math.imul(y, re) | 0, a = a + Math.imul(y, ie) | 0;
            var ke = (u + (i = i + Math.imul(d, ae) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, se) | 0) + Math.imul(f, ae) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(f, se) | 0) + (n >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, i = Math.imul(R, N), n = (n = Math.imul(R, j)) + Math.imul(U, N) | 0, a = Math.imul(U, j), i = i + Math.imul(C, W) | 0, n = (n = n + Math.imul(C, H) | 0) + Math.imul(K, W) | 0, a = a + Math.imul(K, H) | 0, i = i + Math.imul(P, V) | 0, n = (n = n + Math.imul(P, $) | 0) + Math.imul(x, V) | 0, a = a + Math.imul(x, $) | 0, i = i + Math.imul(A, Y) | 0, n = (n = n + Math.imul(A, X) | 0) + Math.imul(S, Y) | 0, a = a + Math.imul(S, X) | 0, i = i + Math.imul(v, J) | 0, n = (n = n + Math.imul(v, ee) | 0) + Math.imul(_, J) | 0, a = a + Math.imul(_, ee) | 0, i = i + Math.imul(m, re) | 0, n = (n = n + Math.imul(m, ie) | 0) + Math.imul(g, re) | 0, a = a + Math.imul(g, ie) | 0, i = i + Math.imul(p, ae) | 0, n = (n = n + Math.imul(p, se) | 0) + Math.imul(y, ae) | 0, a = a + Math.imul(y, se) | 0;
            var Ae = (u + (i = i + Math.imul(d, ce) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ue) | 0) + Math.imul(f, ce) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(f, ue) | 0) + (n >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, i = Math.imul(B, N), n = (n = Math.imul(B, j)) + Math.imul(T, N) | 0, a = Math.imul(T, j), i = i + Math.imul(R, W) | 0, n = (n = n + Math.imul(R, H) | 0) + Math.imul(U, W) | 0, a = a + Math.imul(U, H) | 0, i = i + Math.imul(C, V) | 0, n = (n = n + Math.imul(C, $) | 0) + Math.imul(K, V) | 0, a = a + Math.imul(K, $) | 0, i = i + Math.imul(P, Y) | 0, n = (n = n + Math.imul(P, X) | 0) + Math.imul(x, Y) | 0, a = a + Math.imul(x, X) | 0, i = i + Math.imul(A, J) | 0, n = (n = n + Math.imul(A, ee) | 0) + Math.imul(S, J) | 0, a = a + Math.imul(S, ee) | 0, i = i + Math.imul(v, re) | 0, n = (n = n + Math.imul(v, ie) | 0) + Math.imul(_, re) | 0, a = a + Math.imul(_, ie) | 0, i = i + Math.imul(m, ae) | 0, n = (n = n + Math.imul(m, se) | 0) + Math.imul(g, ae) | 0, a = a + Math.imul(g, se) | 0, i = i + Math.imul(p, ce) | 0, n = (n = n + Math.imul(p, ue) | 0) + Math.imul(y, ce) | 0, a = a + Math.imul(y, ue) | 0;
            var Se = (u + (i = i + Math.imul(d, de) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, fe) | 0) + Math.imul(f, de) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(f, fe) | 0) + (n >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, i = Math.imul(q, N), n = (n = Math.imul(q, j)) + Math.imul(F, N) | 0, a = Math.imul(F, j), i = i + Math.imul(B, W) | 0, n = (n = n + Math.imul(B, H) | 0) + Math.imul(T, W) | 0, a = a + Math.imul(T, H) | 0, i = i + Math.imul(R, V) | 0, n = (n = n + Math.imul(R, $) | 0) + Math.imul(U, V) | 0, a = a + Math.imul(U, $) | 0, i = i + Math.imul(C, Y) | 0, n = (n = n + Math.imul(C, X) | 0) + Math.imul(K, Y) | 0, a = a + Math.imul(K, X) | 0, i = i + Math.imul(P, J) | 0, n = (n = n + Math.imul(P, ee) | 0) + Math.imul(x, J) | 0, a = a + Math.imul(x, ee) | 0, i = i + Math.imul(A, re) | 0, n = (n = n + Math.imul(A, ie) | 0) + Math.imul(S, re) | 0, a = a + Math.imul(S, ie) | 0, i = i + Math.imul(v, ae) | 0, n = (n = n + Math.imul(v, se) | 0) + Math.imul(_, ae) | 0, a = a + Math.imul(_, se) | 0, i = i + Math.imul(m, ce) | 0, n = (n = n + Math.imul(m, ue) | 0) + Math.imul(g, ce) | 0, a = a + Math.imul(g, ue) | 0, i = i + Math.imul(p, de) | 0, n = (n = n + Math.imul(p, fe) | 0) + Math.imul(y, de) | 0, a = a + Math.imul(y, fe) | 0;
            var Ee = (u + (i = i + Math.imul(d, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ye) | 0) + Math.imul(f, pe) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(f, ye) | 0) + (n >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, i = Math.imul(q, W), n = (n = Math.imul(q, H)) + Math.imul(F, W) | 0, a = Math.imul(F, H), i = i + Math.imul(B, V) | 0, n = (n = n + Math.imul(B, $) | 0) + Math.imul(T, V) | 0, a = a + Math.imul(T, $) | 0, i = i + Math.imul(R, Y) | 0, n = (n = n + Math.imul(R, X) | 0) + Math.imul(U, Y) | 0, a = a + Math.imul(U, X) | 0, i = i + Math.imul(C, J) | 0, n = (n = n + Math.imul(C, ee) | 0) + Math.imul(K, J) | 0, a = a + Math.imul(K, ee) | 0, i = i + Math.imul(P, re) | 0, n = (n = n + Math.imul(P, ie) | 0) + Math.imul(x, re) | 0, a = a + Math.imul(x, ie) | 0, i = i + Math.imul(A, ae) | 0, n = (n = n + Math.imul(A, se) | 0) + Math.imul(S, ae) | 0, a = a + Math.imul(S, se) | 0, i = i + Math.imul(v, ce) | 0, n = (n = n + Math.imul(v, ue) | 0) + Math.imul(_, ce) | 0, a = a + Math.imul(_, ue) | 0, i = i + Math.imul(m, de) | 0, n = (n = n + Math.imul(m, fe) | 0) + Math.imul(g, de) | 0, a = a + Math.imul(g, fe) | 0;
            var Pe = (u + (i = i + Math.imul(p, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(p, ye) | 0) + Math.imul(y, pe) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(y, ye) | 0) + (n >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, i = Math.imul(q, V), n = (n = Math.imul(q, $)) + Math.imul(F, V) | 0, a = Math.imul(F, $), i = i + Math.imul(B, Y) | 0, n = (n = n + Math.imul(B, X) | 0) + Math.imul(T, Y) | 0, a = a + Math.imul(T, X) | 0, i = i + Math.imul(R, J) | 0, n = (n = n + Math.imul(R, ee) | 0) + Math.imul(U, J) | 0, a = a + Math.imul(U, ee) | 0, i = i + Math.imul(C, re) | 0, n = (n = n + Math.imul(C, ie) | 0) + Math.imul(K, re) | 0, a = a + Math.imul(K, ie) | 0, i = i + Math.imul(P, ae) | 0, n = (n = n + Math.imul(P, se) | 0) + Math.imul(x, ae) | 0, a = a + Math.imul(x, se) | 0, i = i + Math.imul(A, ce) | 0, n = (n = n + Math.imul(A, ue) | 0) + Math.imul(S, ce) | 0, a = a + Math.imul(S, ue) | 0, i = i + Math.imul(v, de) | 0, n = (n = n + Math.imul(v, fe) | 0) + Math.imul(_, de) | 0, a = a + Math.imul(_, fe) | 0;
            var xe = (u + (i = i + Math.imul(m, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, ye) | 0) + Math.imul(g, pe) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(g, ye) | 0) + (n >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, i = Math.imul(q, Y), n = (n = Math.imul(q, X)) + Math.imul(F, Y) | 0, a = Math.imul(F, X), i = i + Math.imul(B, J) | 0, n = (n = n + Math.imul(B, ee) | 0) + Math.imul(T, J) | 0, a = a + Math.imul(T, ee) | 0, i = i + Math.imul(R, re) | 0, n = (n = n + Math.imul(R, ie) | 0) + Math.imul(U, re) | 0, a = a + Math.imul(U, ie) | 0, i = i + Math.imul(C, ae) | 0, n = (n = n + Math.imul(C, se) | 0) + Math.imul(K, ae) | 0, a = a + Math.imul(K, se) | 0, i = i + Math.imul(P, ce) | 0, n = (n = n + Math.imul(P, ue) | 0) + Math.imul(x, ce) | 0, a = a + Math.imul(x, ue) | 0, i = i + Math.imul(A, de) | 0, n = (n = n + Math.imul(A, fe) | 0) + Math.imul(S, de) | 0, a = a + Math.imul(S, fe) | 0;
            var Me = (u + (i = i + Math.imul(v, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(v, ye) | 0) + Math.imul(_, pe) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(_, ye) | 0) + (n >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, i = Math.imul(q, J), n = (n = Math.imul(q, ee)) + Math.imul(F, J) | 0, a = Math.imul(F, ee), i = i + Math.imul(B, re) | 0, n = (n = n + Math.imul(B, ie) | 0) + Math.imul(T, re) | 0, a = a + Math.imul(T, ie) | 0, i = i + Math.imul(R, ae) | 0, n = (n = n + Math.imul(R, se) | 0) + Math.imul(U, ae) | 0, a = a + Math.imul(U, se) | 0, i = i + Math.imul(C, ce) | 0, n = (n = n + Math.imul(C, ue) | 0) + Math.imul(K, ce) | 0, a = a + Math.imul(K, ue) | 0, i = i + Math.imul(P, de) | 0, n = (n = n + Math.imul(P, fe) | 0) + Math.imul(x, de) | 0, a = a + Math.imul(x, fe) | 0;
            var Ce = (u + (i = i + Math.imul(A, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(A, ye) | 0) + Math.imul(S, pe) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(S, ye) | 0) + (n >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, i = Math.imul(q, re), n = (n = Math.imul(q, ie)) + Math.imul(F, re) | 0, a = Math.imul(F, ie), i = i + Math.imul(B, ae) | 0, n = (n = n + Math.imul(B, se) | 0) + Math.imul(T, ae) | 0, a = a + Math.imul(T, se) | 0, i = i + Math.imul(R, ce) | 0, n = (n = n + Math.imul(R, ue) | 0) + Math.imul(U, ce) | 0, a = a + Math.imul(U, ue) | 0, i = i + Math.imul(C, de) | 0, n = (n = n + Math.imul(C, fe) | 0) + Math.imul(K, de) | 0, a = a + Math.imul(K, fe) | 0;
            var Ke = (u + (i = i + Math.imul(P, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(P, ye) | 0) + Math.imul(x, pe) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(x, ye) | 0) + (n >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, i = Math.imul(q, ae), n = (n = Math.imul(q, se)) + Math.imul(F, ae) | 0, a = Math.imul(F, se), i = i + Math.imul(B, ce) | 0, n = (n = n + Math.imul(B, ue) | 0) + Math.imul(T, ce) | 0, a = a + Math.imul(T, ue) | 0, i = i + Math.imul(R, de) | 0, n = (n = n + Math.imul(R, fe) | 0) + Math.imul(U, de) | 0, a = a + Math.imul(U, fe) | 0;
            var De = (u + (i = i + Math.imul(C, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(C, ye) | 0) + Math.imul(K, pe) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(K, ye) | 0) + (n >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863, i = Math.imul(q, ce), n = (n = Math.imul(q, ue)) + Math.imul(F, ce) | 0, a = Math.imul(F, ue), i = i + Math.imul(B, de) | 0, n = (n = n + Math.imul(B, fe) | 0) + Math.imul(T, de) | 0, a = a + Math.imul(T, fe) | 0;
            var Re = (u + (i = i + Math.imul(R, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(R, ye) | 0) + Math.imul(U, pe) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(U, ye) | 0) + (n >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, i = Math.imul(q, de), n = (n = Math.imul(q, fe)) + Math.imul(F, de) | 0, a = Math.imul(F, fe);
            var Ue = (u + (i = i + Math.imul(B, pe) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(B, ye) | 0) + Math.imul(T, pe) | 0)) << 13) | 0;
            u = ((a = a + Math.imul(T, ye) | 0) + (n >>> 13) | 0) + (Ue >>> 26) | 0, Ue &= 67108863;
            var Ie = (u + (i = Math.imul(q, pe)) | 0) + ((8191 & (n = (n = Math.imul(q, ye)) + Math.imul(F, pe) | 0)) << 13) | 0;
            return u = ((a = Math.imul(F, ye)) + (n >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, c[0] = be, c[1] = me, c[2] = ge, c[3] = we, c[4] = ve, c[5] = _e, c[6] = ke, c[7] = Ae, c[8] = Se, c[9] = Ee, c[10] = Pe, c[11] = xe, c[12] = Me, c[13] = Ce, c[14] = Ke, c[15] = De, c[16] = Re, c[17] = Ue, c[18] = Ie, 0 !== u && (c[19] = u, r.length++), r;
        };
        function l(e, t, r) {
            return (new p).mulp(e, t, r);
        }
        function p(e, t) {
            this.x = e, this.y = t;
        }
        Math.imul || (f = d), n.prototype.mulTo = function(e, t) {
            var r, i = this.length + e.length;
            return r = 10 === this.length && 10 === e.length ? f(this, e, t) : i < 63 ? d(this, e, t) : i < 1024 ? function(e, t, r) {
                r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                for(var i = 0, n = 0, a = 0; a < r.length - 1; a++){
                    var s = n;
                    n = 0;
                    for(var o = 67108863 & i, c = Math.min(a, t.length - 1), u = Math.max(0, a - e.length + 1); u <= c; u++){
                        var h = a - u, d = (0 | e.words[h]) * (0 | t.words[u]), f = 67108863 & d;
                        o = 67108863 & (f = f + o | 0), n += (s = (s = s + (d / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, s &= 67108863;
                    }
                    r.words[a] = o, i = s, s = n;
                }
                return 0 !== i ? r.words[a] = i : r.length--, r.strip();
            }(this, e, t) : l(this, e, t), r;
        }, p.prototype.makeRBT = function(e) {
            for(var t = Array(e), r = n.prototype._countBits(e) - 1, i = 0; i < e; i++)t[i] = this.revBin(i, r, e);
            return t;
        }, p.prototype.revBin = function(e, t, r) {
            if (0 === e || e === r - 1) return e;
            for(var i = 0, n = 0; n < t; n++)i |= (1 & e) << t - n - 1, e >>= 1;
            return i;
        }, p.prototype.permute = function(e, t, r, i, n, a) {
            for(var s = 0; s < a; s++)i[s] = t[e[s]], n[s] = r[e[s]];
        }, p.prototype.transform = function(e, t, r, i, n, a) {
            this.permute(a, e, t, r, i, n);
            for(var s = 1; s < n; s <<= 1)for(var o = s << 1, c = Math.cos(2 * Math.PI / o), u = Math.sin(2 * Math.PI / o), h = 0; h < n; h += o)for(var d = c, f = u, l = 0; l < s; l++){
                var p = r[h + l], y = i[h + l], b = r[h + l + s], m = i[h + l + s], g = d * b - f * m;
                m = d * m + f * b, b = g, r[h + l] = p + b, i[h + l] = y + m, r[h + l + s] = p - b, i[h + l + s] = y - m, l !== o && (g = c * d - u * f, f = c * f + u * d, d = g);
            }
        }, p.prototype.guessLen13b = function(e, t) {
            var r = 1 | Math.max(t, e), i = 1 & r, n = 0;
            for(r = r / 2 | 0; r; r >>>= 1)n++;
            return 1 << n + 1 + i;
        }, p.prototype.conjugate = function(e, t, r) {
            if (!(r <= 1)) for(var i = 0; i < r / 2; i++){
                var n = e[i];
                e[i] = e[r - i - 1], e[r - i - 1] = n, n = t[i], t[i] = -t[r - i - 1], t[r - i - 1] = -n;
            }
        }, p.prototype.normalize13b = function(e, t) {
            for(var r = 0, i = 0; i < t / 2; i++){
                var n = 8192 * Math.round(e[2 * i + 1] / t) + Math.round(e[2 * i] / t) + r;
                e[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0;
            }
            return e;
        }, p.prototype.convert13b = function(e, t, i, n) {
            for(var a = 0, s = 0; s < t; s++)a += 0 | e[s], i[2 * s] = 8191 & a, a >>>= 13, i[2 * s + 1] = 8191 & a, a >>>= 13;
            for(s = 2 * t; s < n; ++s)i[s] = 0;
            r(0 === a), r(0 == (-8192 & a));
        }, p.prototype.stub = function(e) {
            for(var t = Array(e), r = 0; r < e; r++)t[r] = 0;
            return t;
        }, p.prototype.mulp = function(e, t, r) {
            var i = 2 * this.guessLen13b(e.length, t.length), n = this.makeRBT(i), a = this.stub(i), s = Array(i), o = Array(i), c = Array(i), u = Array(i), h = Array(i), d = Array(i), f = r.words;
            f.length = i, this.convert13b(e.words, e.length, s, i), this.convert13b(t.words, t.length, u, i), this.transform(s, a, o, c, i, n), this.transform(u, a, h, d, i, n);
            for(var l = 0; l < i; l++){
                var p = o[l] * h[l] - c[l] * d[l];
                c[l] = o[l] * d[l] + c[l] * h[l], o[l] = p;
            }
            return this.conjugate(o, c, i), this.transform(o, c, f, a, i, n), this.conjugate(f, a, i), this.normalize13b(f, i), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip();
        }, n.prototype.mul = function(e) {
            var t = new n(null);
            return t.words = Array(this.length + e.length), this.mulTo(e, t);
        }, n.prototype.mulf = function(e) {
            var t = new n(null);
            return t.words = Array(this.length + e.length), l(this, e, t);
        }, n.prototype.imul = function(e) {
            return this.clone().mulTo(e, this);
        }, n.prototype.imuln = function(e) {
            r("number" == typeof e), r(e < 67108864);
            for(var t = 0, i = 0; i < this.length; i++){
                var n = (0 | this.words[i]) * e, a = (67108863 & n) + (67108863 & t);
                t >>= 26, t += n / 67108864 | 0, t += a >>> 26, this.words[i] = 67108863 & a;
            }
            return 0 !== t && (this.words[i] = t, this.length++), this;
        }, n.prototype.muln = function(e) {
            return this.clone().imuln(e);
        }, n.prototype.sqr = function() {
            return this.mul(this);
        }, n.prototype.isqr = function() {
            return this.imul(this.clone());
        }, n.prototype.pow = function(e) {
            var t = function(e) {
                for(var t = Array(e.bitLength()), r = 0; r < t.length; r++){
                    var i = r / 26 | 0, n = r % 26;
                    t[r] = (e.words[i] & 1 << n) >>> n;
                }
                return t;
            }(e);
            if (0 === t.length) return new n(1);
            for(var r = this, i = 0; i < t.length && 0 === t[i]; i++, r = r.sqr());
            if (++i < t.length) for(var a = r.sqr(); i < t.length; i++, a = a.sqr())0 !== t[i] && (r = r.mul(a));
            return r;
        }, n.prototype.iushln = function(e) {
            r("number" == typeof e && e >= 0);
            var t, i = e % 26, n = (e - i) / 26, a = 67108863 >>> 26 - i << 26 - i;
            if (0 !== i) {
                var s = 0;
                for(t = 0; t < this.length; t++){
                    var o = this.words[t] & a, c = (0 | this.words[t]) - o << i;
                    this.words[t] = c | s, s = o >>> 26 - i;
                }
                s && (this.words[t] = s, this.length++);
            }
            if (0 !== n) {
                for(t = this.length - 1; t >= 0; t--)this.words[t + n] = this.words[t];
                for(t = 0; t < n; t++)this.words[t] = 0;
                this.length += n;
            }
            return this.strip();
        }, n.prototype.ishln = function(e) {
            return r(0 === this.negative), this.iushln(e);
        }, n.prototype.iushrn = function(e, t, i) {
            var n;
            r("number" == typeof e && e >= 0), n = t ? (t - t % 26) / 26 : 0;
            var a = e % 26, s = Math.min((e - a) / 26, this.length), o = 67108863 ^ 67108863 >>> a << a, c = i;
            if (n = Math.max(0, n -= s), c) {
                for(var u = 0; u < s; u++)c.words[u] = this.words[u];
                c.length = s;
            }
            if (0 === s) ;
            else if (this.length > s) for(this.length -= s, u = 0; u < this.length; u++)this.words[u] = this.words[u + s];
            else this.words[0] = 0, this.length = 1;
            var h = 0;
            for(u = this.length - 1; u >= 0 && (0 !== h || u >= n); u--){
                var d = 0 | this.words[u];
                this.words[u] = h << 26 - a | d >>> a, h = d & o;
            }
            return c && 0 !== h && (c.words[c.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
        }, n.prototype.ishrn = function(e, t, i) {
            return r(0 === this.negative), this.iushrn(e, t, i);
        }, n.prototype.shln = function(e) {
            return this.clone().ishln(e);
        }, n.prototype.ushln = function(e) {
            return this.clone().iushln(e);
        }, n.prototype.shrn = function(e) {
            return this.clone().ishrn(e);
        }, n.prototype.ushrn = function(e) {
            return this.clone().iushrn(e);
        }, n.prototype.testn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = e % 26, i = (e - t) / 26, n = 1 << t;
            return !(this.length <= i) && !!(this.words[i] & n);
        }, n.prototype.imaskn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = e % 26, i = (e - t) / 26;
            if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
            if (0 !== t && i++, this.length = Math.min(i, this.length), 0 !== t) {
                var n = 67108863 ^ 67108863 >>> t << t;
                this.words[this.length - 1] &= n;
            }
            return this.strip();
        }, n.prototype.maskn = function(e) {
            return this.clone().imaskn(e);
        }, n.prototype.iaddn = function(e) {
            return r("number" == typeof e), r(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e);
        }, n.prototype._iaddn = function(e) {
            this.words[0] += e;
            for(var t = 0; t < this.length && this.words[t] >= 67108864; t++)this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
            return this.length = Math.max(this.length, t + 1), this;
        }, n.prototype.isubn = function(e) {
            if (r("number" == typeof e), r(e < 67108864), e < 0) return this.iaddn(-e);
            if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
            if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else for(var t = 0; t < this.length && this.words[t] < 0; t++)this.words[t] += 67108864, this.words[t + 1] -= 1;
            return this.strip();
        }, n.prototype.addn = function(e) {
            return this.clone().iaddn(e);
        }, n.prototype.subn = function(e) {
            return this.clone().isubn(e);
        }, n.prototype.iabs = function() {
            return this.negative = 0, this;
        }, n.prototype.abs = function() {
            return this.clone().iabs();
        }, n.prototype._ishlnsubmul = function(e, t, i) {
            var n, a, s = e.length + i;
            this._expand(s);
            var o = 0;
            for(n = 0; n < e.length; n++){
                a = (0 | this.words[n + i]) + o;
                var c = (0 | e.words[n]) * t;
                o = ((a -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[n + i] = 67108863 & a;
            }
            for(; n < this.length - i; n++)o = (a = (0 | this.words[n + i]) + o) >> 26, this.words[n + i] = 67108863 & a;
            if (0 === o) return this.strip();
            for(r(-1 === o), o = 0, n = 0; n < this.length; n++)o = (a = -(0 | this.words[n]) + o) >> 26, this.words[n] = 67108863 & a;
            return this.negative = 1, this.strip();
        }, n.prototype._wordDiv = function(e, t) {
            var r = (this.length, e.length), i = this.clone(), a = e, s = 0 | a.words[a.length - 1];
            0 !== (r = 26 - this._countBits(s)) && (a = a.ushln(r), i.iushln(r), s = 0 | a.words[a.length - 1]);
            var o, c = i.length - a.length;
            if ("mod" !== t) {
                (o = new n(null)).length = c + 1, o.words = Array(o.length);
                for(var u = 0; u < o.length; u++)o.words[u] = 0;
            }
            var h = i.clone()._ishlnsubmul(a, 1, c);
            0 === h.negative && (i = h, o && (o.words[c] = 1));
            for(var d = c - 1; d >= 0; d--){
                var f = 67108864 * (0 | i.words[a.length + d]) + (0 | i.words[a.length + d - 1]);
                for(f = Math.min(f / s | 0, 67108863), i._ishlnsubmul(a, f, d); 0 !== i.negative;)f--, i.negative = 0, i._ishlnsubmul(a, 1, d), i.isZero() || (i.negative ^= 1);
                o && (o.words[d] = f);
            }
            return o && o.strip(), i.strip(), "div" !== t && 0 !== r && i.iushrn(r), {
                div: o || null,
                mod: i
            };
        }, n.prototype.divmod = function(e, t, i) {
            var a, s, o;
            return r(!e.isZero()), this.isZero() ? {
                div: new n(0),
                mod: new n(0)
            } : 0 !== this.negative && 0 === e.negative ? (o = this.neg().divmod(e, t), "mod" !== t && (a = o.div.neg()), "div" !== t && (s = o.mod.neg(), i && 0 !== s.negative && s.iadd(e)), {
                div: a,
                mod: s
            }) : 0 === this.negative && 0 !== e.negative ? (o = this.divmod(e.neg(), t), "mod" !== t && (a = o.div.neg()), {
                div: a,
                mod: o.mod
            }) : 0 != (this.negative & e.negative) ? (o = this.neg().divmod(e.neg(), t), "div" !== t && (s = o.mod.neg(), i && 0 !== s.negative && s.isub(e)), {
                div: o.div,
                mod: s
            }) : e.length > this.length || this.cmp(e) < 0 ? {
                div: new n(0),
                mod: this
            } : 1 === e.length ? "div" === t ? {
                div: this.divn(e.words[0]),
                mod: null
            } : "mod" === t ? {
                div: null,
                mod: new n(this.modn(e.words[0]))
            } : {
                div: this.divn(e.words[0]),
                mod: new n(this.modn(e.words[0]))
            } : this._wordDiv(e, t);
        }, n.prototype.div = function(e) {
            return this.divmod(e, "div", !1).div;
        }, n.prototype.mod = function(e) {
            return this.divmod(e, "mod", !1).mod;
        }, n.prototype.umod = function(e) {
            return this.divmod(e, "mod", !0).mod;
        }, n.prototype.divRound = function(e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod, i = e.ushrn(1), n = e.andln(1), a = r.cmp(i);
            return a < 0 || 1 === n && 0 === a ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1);
        }, n.prototype.modn = function(e) {
            r(e <= 67108863);
            for(var t = 67108864 % e, i = 0, n = this.length - 1; n >= 0; n--)i = (t * i + (0 | this.words[n])) % e;
            return i;
        }, n.prototype.idivn = function(e) {
            r(e <= 67108863);
            for(var t = 0, i = this.length - 1; i >= 0; i--){
                var n = (0 | this.words[i]) + 67108864 * t;
                this.words[i] = n / e | 0, t = n % e;
            }
            return this.strip();
        }, n.prototype.divn = function(e) {
            return this.clone().idivn(e);
        }, n.prototype.egcd = function(e) {
            r(0 === e.negative), r(!e.isZero());
            var t = this, i = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for(var a = new n(1), s = new n(0), o = new n(0), c = new n(1), u = 0; t.isEven() && i.isEven();)t.iushrn(1), i.iushrn(1), ++u;
            for(var h = i.clone(), d = t.clone(); !t.isZero();){
                for(var f = 0, l = 1; 0 == (t.words[0] & l) && f < 26; ++f, l <<= 1);
                if (f > 0) for(t.iushrn(f); f-- > 0;)(a.isOdd() || s.isOdd()) && (a.iadd(h), s.isub(d)), a.iushrn(1), s.iushrn(1);
                for(var p = 0, y = 1; 0 == (i.words[0] & y) && p < 26; ++p, y <<= 1);
                if (p > 0) for(i.iushrn(p); p-- > 0;)(o.isOdd() || c.isOdd()) && (o.iadd(h), c.isub(d)), o.iushrn(1), c.iushrn(1);
                t.cmp(i) >= 0 ? (t.isub(i), a.isub(o), s.isub(c)) : (i.isub(t), o.isub(a), c.isub(s));
            }
            return {
                a: o,
                b: c,
                gcd: i.iushln(u)
            };
        }, n.prototype._invmp = function(e) {
            r(0 === e.negative), r(!e.isZero());
            var t = this, i = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for(var a, s = new n(1), o = new n(0), c = i.clone(); t.cmpn(1) > 0 && i.cmpn(1) > 0;){
                for(var u = 0, h = 1; 0 == (t.words[0] & h) && u < 26; ++u, h <<= 1);
                if (u > 0) for(t.iushrn(u); u-- > 0;)s.isOdd() && s.iadd(c), s.iushrn(1);
                for(var d = 0, f = 1; 0 == (i.words[0] & f) && d < 26; ++d, f <<= 1);
                if (d > 0) for(i.iushrn(d); d-- > 0;)o.isOdd() && o.iadd(c), o.iushrn(1);
                t.cmp(i) >= 0 ? (t.isub(i), s.isub(o)) : (i.isub(t), o.isub(s));
            }
            return (a = 0 === t.cmpn(1) ? s : o).cmpn(0) < 0 && a.iadd(e), a;
        }, n.prototype.gcd = function(e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(), r = e.clone();
            t.negative = 0, r.negative = 0;
            for(var i = 0; t.isEven() && r.isEven(); i++)t.iushrn(1), r.iushrn(1);
            for(;;){
                for(; t.isEven();)t.iushrn(1);
                for(; r.isEven();)r.iushrn(1);
                var n = t.cmp(r);
                if (n < 0) {
                    var a = t;
                    t = r, r = a;
                } else if (0 === n || 0 === r.cmpn(1)) break;
                t.isub(r);
            }
            return r.iushln(i);
        }, n.prototype.invm = function(e) {
            return this.egcd(e).a.umod(e);
        }, n.prototype.isEven = function() {
            return 0 == (1 & this.words[0]);
        }, n.prototype.isOdd = function() {
            return 1 == (1 & this.words[0]);
        }, n.prototype.andln = function(e) {
            return this.words[0] & e;
        }, n.prototype.bincn = function(e) {
            r("number" == typeof e);
            var t = e % 26, i = (e - t) / 26, n = 1 << t;
            if (this.length <= i) return this._expand(i + 1), this.words[i] |= n, this;
            for(var a = n, s = i; 0 !== a && s < this.length; s++){
                var o = 0 | this.words[s];
                a = (o += a) >>> 26, o &= 67108863, this.words[s] = o;
            }
            return 0 !== a && (this.words[s] = a, this.length++), this;
        }, n.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0];
        }, n.prototype.cmpn = function(e) {
            var t, i = e < 0;
            if (0 !== this.negative && !i) return -1;
            if (0 === this.negative && i) return 1;
            if (this.strip(), this.length > 1) t = 1;
            else {
                i && (e = -e), r(e <= 67108863, "Number is too big");
                var n = 0 | this.words[0];
                t = n === e ? 0 : n < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -t : t;
        }, n.prototype.cmp = function(e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t;
        }, n.prototype.ucmp = function(e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for(var t = 0, r = this.length - 1; r >= 0; r--){
                var i = 0 | this.words[r], n = 0 | e.words[r];
                if (i !== n) {
                    i < n ? t = -1 : i > n && (t = 1);
                    break;
                }
            }
            return t;
        }, n.prototype.gtn = function(e) {
            return 1 === this.cmpn(e);
        }, n.prototype.gt = function(e) {
            return 1 === this.cmp(e);
        }, n.prototype.gten = function(e) {
            return this.cmpn(e) >= 0;
        }, n.prototype.gte = function(e) {
            return this.cmp(e) >= 0;
        }, n.prototype.ltn = function(e) {
            return -1 === this.cmpn(e);
        }, n.prototype.lt = function(e) {
            return -1 === this.cmp(e);
        }, n.prototype.lten = function(e) {
            return this.cmpn(e) <= 0;
        }, n.prototype.lte = function(e) {
            return this.cmp(e) <= 0;
        }, n.prototype.eqn = function(e) {
            return 0 === this.cmpn(e);
        }, n.prototype.eq = function(e) {
            return 0 === this.cmp(e);
        }, n.red = function(e) {
            return new _(e);
        }, n.prototype.toRed = function(e) {
            return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e);
        }, n.prototype.fromRed = function() {
            return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, n.prototype._forceRed = function(e) {
            return this.red = e, this;
        }, n.prototype.forceRed = function(e) {
            return r(!this.red, "Already a number in reduction context"), this._forceRed(e);
        }, n.prototype.redAdd = function(e) {
            return r(this.red, "redAdd works only with red numbers"), this.red.add(this, e);
        }, n.prototype.redIAdd = function(e) {
            return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e);
        }, n.prototype.redSub = function(e) {
            return r(this.red, "redSub works only with red numbers"), this.red.sub(this, e);
        }, n.prototype.redISub = function(e) {
            return r(this.red, "redISub works only with red numbers"), this.red.isub(this, e);
        }, n.prototype.redShl = function(e) {
            return r(this.red, "redShl works only with red numbers"), this.red.shl(this, e);
        }, n.prototype.redMul = function(e) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e);
        }, n.prototype.redIMul = function(e) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e);
        }, n.prototype.redSqr = function() {
            return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, n.prototype.redISqr = function() {
            return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, n.prototype.redSqrt = function() {
            return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, n.prototype.redInvm = function() {
            return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, n.prototype.redNeg = function() {
            return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, n.prototype.redPow = function(e) {
            return r(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e);
        };
        var y = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };
        function b(e, t) {
            this.name = e, this.p = new n(t, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        function m() {
            b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        function g() {
            b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        function w() {
            b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        function v() {
            b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        function _(e) {
            if ("string" == typeof e) {
                var t = n._prime(e);
                this.m = t.p, this.prime = t;
            } else r(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null;
        }
        function k(e) {
            _.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        b.prototype._tmp = function() {
            var e = new n(null);
            return e.words = Array(Math.ceil(this.n / 13)), e;
        }, b.prototype.ireduce = function(e) {
            var t, r = e;
            do this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
            while (t > this.n);
            var i = t < this.n ? -1 : r.ucmp(this.p);
            return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : r.strip(), r;
        }, b.prototype.split = function(e, t) {
            e.iushrn(this.n, 0, t);
        }, b.prototype.imulK = function(e) {
            return e.imul(this.k);
        }, i(m, b), m.prototype.split = function(e, t) {
            for(var r = 4194303, i = Math.min(e.length, 9), n = 0; n < i; n++)t.words[n] = e.words[n];
            if (t.length = i, e.length <= 9) return e.words[0] = 0, void (e.length = 1);
            var a = e.words[9];
            for(t.words[t.length++] = a & r, n = 10; n < e.length; n++){
                var s = 0 | e.words[n];
                e.words[n - 10] = (s & r) << 4 | a >>> 22, a = s;
            }
            a >>>= 22, e.words[n - 10] = a, 0 === a && e.length > 10 ? e.length -= 10 : e.length -= 9;
        }, m.prototype.imulK = function(e) {
            e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
            for(var t = 0, r = 0; r < e.length; r++){
                var i = 0 | e.words[r];
                t += 977 * i, e.words[r] = 67108863 & t, t = 64 * i + (t / 67108864 | 0);
            }
            return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e;
        }, i(g, b), i(w, b), i(v, b), v.prototype.imulK = function(e) {
            for(var t = 0, r = 0; r < e.length; r++){
                var i = 19 * (0 | e.words[r]) + t, n = 67108863 & i;
                i >>>= 26, e.words[r] = n, t = i;
            }
            return 0 !== t && (e.words[e.length++] = t), e;
        }, n._prime = function(e) {
            if (y[e]) return y[e];
            var t;
            if ("k256" === e) t = new m;
            else if ("p224" === e) t = new g;
            else if ("p192" === e) t = new w;
            else {
                if ("p25519" !== e) throw Error("Unknown prime " + e);
                t = new v;
            }
            return y[e] = t, t;
        }, _.prototype._verify1 = function(e) {
            r(0 === e.negative, "red works only with positives"), r(e.red, "red works only with red numbers");
        }, _.prototype._verify2 = function(e, t) {
            r(0 == (e.negative | t.negative), "red works only with positives"), r(e.red && e.red === t.red, "red works only with red numbers");
        }, _.prototype.imod = function(e) {
            return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this);
        }, _.prototype.neg = function(e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
        }, _.prototype.add = function(e, t) {
            this._verify2(e, t);
            var r = e.add(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
        }, _.prototype.iadd = function(e, t) {
            this._verify2(e, t);
            var r = e.iadd(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
        }, _.prototype.sub = function(e, t) {
            this._verify2(e, t);
            var r = e.sub(t);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
        }, _.prototype.isub = function(e, t) {
            this._verify2(e, t);
            var r = e.isub(t);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
        }, _.prototype.shl = function(e, t) {
            return this._verify1(e), this.imod(e.ushln(t));
        }, _.prototype.imul = function(e, t) {
            return this._verify2(e, t), this.imod(e.imul(t));
        }, _.prototype.mul = function(e, t) {
            return this._verify2(e, t), this.imod(e.mul(t));
        }, _.prototype.isqr = function(e) {
            return this.imul(e, e.clone());
        }, _.prototype.sqr = function(e) {
            return this.mul(e, e);
        }, _.prototype.sqrt = function(e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);
            if (r(t % 2 == 1), 3 === t) {
                var i = this.m.add(new n(1)).iushrn(2);
                return this.pow(e, i);
            }
            for(var a = this.m.subn(1), s = 0; !a.isZero() && 0 === a.andln(1);)s++, a.iushrn(1);
            r(!a.isZero());
            var o = new n(1).toRed(this), c = o.redNeg(), u = this.m.subn(1).iushrn(1), h = this.m.bitLength();
            for(h = new n(2 * h * h).toRed(this); 0 !== this.pow(h, u).cmp(c);)h.redIAdd(c);
            for(var d = this.pow(h, a), f = this.pow(e, a.addn(1).iushrn(1)), l = this.pow(e, a), p = s; 0 !== l.cmp(o);){
                for(var y = l, b = 0; 0 !== y.cmp(o); b++)y = y.redSqr();
                r(b < p);
                var m = this.pow(d, new n(1).iushln(p - b - 1));
                f = f.redMul(m), d = m.redSqr(), l = l.redMul(d), p = b;
            }
            return f;
        }, _.prototype.invm = function(e) {
            var t = e._invmp(this.m);
            return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t);
        }, _.prototype.pow = function(e, t) {
            if (t.isZero()) return new n(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var r = Array(16);
            r[0] = new n(1).toRed(this), r[1] = e;
            for(var i = 2; i < r.length; i++)r[i] = this.mul(r[i - 1], e);
            var a = r[0], s = 0, o = 0, c = t.bitLength() % 26;
            for(0 === c && (c = 26), i = t.length - 1; i >= 0; i--){
                for(var u = t.words[i], h = c - 1; h >= 0; h--){
                    var d = u >> h & 1;
                    a !== r[0] && (a = this.sqr(a)), 0 !== d || 0 !== s ? (s <<= 1, s |= d, (4 === ++o || 0 === i && 0 === h) && (a = this.mul(a, r[s]), o = 0, s = 0)) : o = 0;
                }
                c = 26;
            }
            return a;
        }, _.prototype.convertTo = function(e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t;
        }, _.prototype.convertFrom = function(e) {
            var t = e.clone();
            return t.red = null, t;
        }, n.mont = function(e) {
            return new k(e);
        }, i(k, _), k.prototype.convertTo = function(e) {
            return this.imod(e.ushln(this.shift));
        }, k.prototype.convertFrom = function(e) {
            var t = this.imod(e.mul(this.rinv));
            return t.red = null, t;
        }, k.prototype.imul = function(e, t) {
            if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
            var r = e.imul(t), i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), n = r.isub(i).iushrn(this.shift), a = n;
            return n.cmp(this.m) >= 0 ? a = n.isub(this.m) : n.cmpn(0) < 0 && (a = n.iadd(this.m)), a._forceRed(this);
        }, k.prototype.mul = function(e, t) {
            if (e.isZero() || t.isZero()) return new n(0)._forceRed(this);
            var r = e.mul(t), i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), a = r.isub(i).iushrn(this.shift), s = a;
            return a.cmp(this.m) >= 0 ? s = a.isub(this.m) : a.cmpn(0) < 0 && (s = a.iadd(this.m)), s._forceRed(this);
        }, k.prototype.invm = function(e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
        };
    }(e, rt);
}), Yp = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    default: Zp,
    __moduleExports: Zp
});
class Xp {
    constructor(e){
        if (void 0 === e) throw Error("Invalid BigInteger input");
        this.value = new Zp(e);
    }
    clone() {
        const e = new Xp(null);
        return this.value.copy(e.value), e;
    }
    iinc() {
        return this.value.iadd(new Zp(1)), this;
    }
    inc() {
        return this.clone().iinc();
    }
    idec() {
        return this.value.isub(new Zp(1)), this;
    }
    dec() {
        return this.clone().idec();
    }
    iadd(e) {
        return this.value.iadd(e.value), this;
    }
    add(e) {
        return this.clone().iadd(e);
    }
    isub(e) {
        return this.value.isub(e.value), this;
    }
    sub(e) {
        return this.clone().isub(e);
    }
    imul(e) {
        return this.value.imul(e.value), this;
    }
    mul(e) {
        return this.clone().imul(e);
    }
    imod(e) {
        return this.value = this.value.umod(e.value), this;
    }
    mod(e) {
        return this.clone().imod(e);
    }
    modExp(e, t) {
        const r = t.isEven() ? Zp.red(t.value) : Zp.mont(t.value), i = this.clone();
        return i.value = i.value.toRed(r).redPow(e.value).fromRed(), i;
    }
    modInv(e) {
        if (!this.gcd(e).isOne()) throw Error("Inverse does not exist");
        return new Xp(this.value.invm(e.value));
    }
    gcd(e) {
        return new Xp(this.value.gcd(e.value));
    }
    ileftShift(e) {
        return this.value.ishln(e.value.toNumber()), this;
    }
    leftShift(e) {
        return this.clone().ileftShift(e);
    }
    irightShift(e) {
        return this.value.ishrn(e.value.toNumber()), this;
    }
    rightShift(e) {
        return this.clone().irightShift(e);
    }
    equal(e) {
        return this.value.eq(e.value);
    }
    lt(e) {
        return this.value.lt(e.value);
    }
    lte(e) {
        return this.value.lte(e.value);
    }
    gt(e) {
        return this.value.gt(e.value);
    }
    gte(e) {
        return this.value.gte(e.value);
    }
    isZero() {
        return this.value.isZero();
    }
    isOne() {
        return this.value.eq(new Zp(1));
    }
    isNegative() {
        return this.value.isNeg();
    }
    isEven() {
        return this.value.isEven();
    }
    abs() {
        const e = this.clone();
        return e.value = e.value.abs(), e;
    }
    toString() {
        return this.value.toString();
    }
    toNumber() {
        return this.value.toNumber();
    }
    getBit(e) {
        return this.value.testn(e) ? 1 : 0;
    }
    bitLength() {
        return this.value.bitLength();
    }
    byteLength() {
        return this.value.byteLength();
    }
    toUint8Array(e = "be", t) {
        return this.value.toArrayLike(Uint8Array, e, t);
    }
}
var Qp, Jp = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    default: Xp
}), ey = it(function(e, t) {
    var r = t;
    function i(e) {
        return 1 === e.length ? "0" + e : e;
    }
    function n(e) {
        for(var t = "", r = 0; r < e.length; r++)t += i(e[r].toString(16));
        return t;
    }
    r.toArray = function(e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var r = [];
        if ("string" != typeof e) {
            for(var i = 0; i < e.length; i++)r[i] = 0 | e[i];
            return r;
        }
        if ("hex" === t) {
            (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
            for(i = 0; i < e.length; i += 2)r.push(parseInt(e[i] + e[i + 1], 16));
        } else for(i = 0; i < e.length; i++){
            var n = e.charCodeAt(i), a = n >> 8, s = 255 & n;
            a ? r.push(a, s) : r.push(s);
        }
        return r;
    }, r.zero2 = i, r.toHex = n, r.encode = function(e, t) {
        return "hex" === t ? n(e) : e;
    };
}), ty = it(function(e, t) {
    var r = t;
    r.assert = et, r.toArray = ey.toArray, r.zero2 = ey.zero2, r.toHex = ey.toHex, r.encode = ey.encode, r.getNAF = function(e, t) {
        for(var r = [], i = 1 << t + 1, n = e.clone(); n.cmpn(1) >= 0;){
            var a;
            if (n.isOdd()) {
                var s = n.andln(i - 1);
                a = s > (i >> 1) - 1 ? (i >> 1) - s : s, n.isubn(a);
            } else a = 0;
            r.push(a);
            for(var o = 0 !== n.cmpn(0) && 0 === n.andln(i - 1) ? t + 1 : 1, c = 1; c < o; c++)r.push(0);
            n.iushrn(o);
        }
        return r;
    }, r.getJSF = function(e, t) {
        var r = [
            [],
            []
        ];
        e = e.clone(), t = t.clone();
        for(var i = 0, n = 0; e.cmpn(-i) > 0 || t.cmpn(-n) > 0;){
            var a, s, o, c = e.andln(3) + i & 3, u = t.andln(3) + n & 3;
            if (3 === c && (c = -1), 3 === u && (u = -1), 0 == (1 & c)) a = 0;
            else a = 3 !== (o = e.andln(7) + i & 7) && 5 !== o || 2 !== u ? c : -c;
            if (r[0].push(a), 0 == (1 & u)) s = 0;
            else s = 3 !== (o = t.andln(7) + n & 7) && 5 !== o || 2 !== c ? u : -u;
            r[1].push(s), 2 * i === a + 1 && (i = 1 - i), 2 * n === s + 1 && (n = 1 - n), e.iushrn(1), t.iushrn(1);
        }
        return r;
    }, r.cachedProperty = function(e, t, r) {
        var i = "_" + t;
        e.prototype[t] = function() {
            return void 0 !== this[i] ? this[i] : this[i] = r.call(this);
        };
    }, r.parseBytes = function(e) {
        return "string" == typeof e ? r.toArray(e, "hex") : e;
    }, r.intFromLE = function(e) {
        return new Zp(e, "hex", "le");
    };
}), ry = function(e) {
    return Qp || (Qp = new iy(null)), Qp.generate(e);
};
function iy(e) {
    this.rand = e;
}
var ny = iy;
if (iy.prototype.generate = function(e) {
    return this._rand(e);
}, iy.prototype._rand = function(e) {
    if (this.rand.getBytes) return this.rand.getBytes(e);
    for(var t = new Uint8Array(e), r = 0; r < t.length; r++)t[r] = this.rand.getByte();
    return t;
}, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? iy.prototype._rand = function(e) {
    var t = new Uint8Array(e);
    return self.crypto.getRandomValues(t), t;
} : self.msCrypto && self.msCrypto.getRandomValues ? iy.prototype._rand = function(e) {
    var t = new Uint8Array(e);
    return self.msCrypto.getRandomValues(t), t;
} : "object" == typeof window && (iy.prototype._rand = function() {
    throw Error("Not implemented yet");
});
else try {
    var ay = void 0;
    if ("function" != typeof ay.randomBytes) throw Error("Not supported");
    iy.prototype._rand = function(e) {
        return ay.randomBytes(e);
    };
} catch (e) {}
ry.Rand = ny;
var sy = ty.getNAF, oy = ty.getJSF, cy = ty.assert;
function uy(e, t) {
    this.type = e, this.p = new Zp(t.p, 16), this.red = t.prime ? Zp.red(t.prime) : Zp.mont(this.p), this.zero = new Zp(0).toRed(this.red), this.one = new Zp(1).toRed(this.red), this.two = new Zp(2).toRed(this.red), this.n = t.n && new Zp(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = [
        ,
        ,
        ,
        , 
    ], this._wnafT2 = [
        ,
        ,
        ,
        , 
    ], this._wnafT3 = [
        ,
        ,
        ,
        , 
    ], this._wnafT4 = [
        ,
        ,
        ,
        , 
    ];
    var r = this.n && this.p.div(this.n);
    !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var hy = uy;
function dy(e, t) {
    this.curve = e, this.type = t, this.precomputed = null;
}
uy.prototype.point = function() {
    throw Error("Not implemented");
}, uy.prototype.validate = function() {
    throw Error("Not implemented");
}, uy.prototype._fixedNafMul = function(e, t) {
    cy(e.precomputed);
    var r = e._getDoubles(), i = sy(t, 1), n = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
    n /= 3;
    for(var a = [], s = 0; s < i.length; s += r.step){
        var o = 0;
        for(t = s + r.step - 1; t >= s; t--)o = (o << 1) + i[t];
        a.push(o);
    }
    for(var c = this.jpoint(null, null, null), u = this.jpoint(null, null, null), h = n; h > 0; h--){
        for(s = 0; s < a.length; s++)(o = a[s]) === h ? u = u.mixedAdd(r.points[s]) : o === -h && (u = u.mixedAdd(r.points[s].neg()));
        c = c.add(u);
    }
    return c.toP();
}, uy.prototype._wnafMul = function(e, t) {
    var r = 4, i = e._getNAFPoints(r);
    r = i.wnd;
    for(var n = i.points, a = sy(t, r), s = this.jpoint(null, null, null), o = a.length - 1; o >= 0; o--){
        for(t = 0; o >= 0 && 0 === a[o]; o--)t++;
        if (o >= 0 && t++, s = s.dblp(t), o < 0) break;
        var c = a[o];
        cy(0 !== c), s = "affine" === e.type ? c > 0 ? s.mixedAdd(n[c - 1 >> 1]) : s.mixedAdd(n[-c - 1 >> 1].neg()) : c > 0 ? s.add(n[c - 1 >> 1]) : s.add(n[-c - 1 >> 1].neg());
    }
    return "affine" === e.type ? s.toP() : s;
}, uy.prototype._wnafMulAdd = function(e, t, r, i, n) {
    for(var a = this._wnafT1, s = this._wnafT2, o = this._wnafT3, c = 0, u = 0; u < i; u++){
        var h = (A = t[u])._getNAFPoints(e);
        a[u] = h.wnd, s[u] = h.points;
    }
    for(u = i - 1; u >= 1; u -= 2){
        var d = u - 1, f = u;
        if (1 === a[d] && 1 === a[f]) {
            var l = [
                t[d],
                null,
                null,
                t[f]
            ];
            0 === t[d].y.cmp(t[f].y) ? (l[1] = t[d].add(t[f]), l[2] = t[d].toJ().mixedAdd(t[f].neg())) : 0 === t[d].y.cmp(t[f].y.redNeg()) ? (l[1] = t[d].toJ().mixedAdd(t[f]), l[2] = t[d].add(t[f].neg())) : (l[1] = t[d].toJ().mixedAdd(t[f]), l[2] = t[d].toJ().mixedAdd(t[f].neg()));
            var p = [
                -3,
                -1,
                -5,
                -7,
                0,
                7,
                5,
                1,
                3
            ], y = oy(r[d], r[f]);
            c = Math.max(y[0].length, c), o[d] = Array(c), o[f] = Array(c);
            for(var b = 0; b < c; b++){
                var m = 0 | y[0][b], g = 0 | y[1][b];
                o[d][b] = p[3 * (m + 1) + (g + 1)], o[f][b] = 0, s[d] = l;
            }
        } else o[d] = sy(r[d], a[d]), o[f] = sy(r[f], a[f]), c = Math.max(o[d].length, c), c = Math.max(o[f].length, c);
    }
    var w = this.jpoint(null, null, null), v = this._wnafT4;
    for(u = c; u >= 0; u--){
        for(var _ = 0; u >= 0;){
            var k = !0;
            for(b = 0; b < i; b++)v[b] = 0 | o[b][u], 0 !== v[b] && (k = !1);
            if (!k) break;
            _++, u--;
        }
        if (u >= 0 && _++, w = w.dblp(_), u < 0) break;
        for(b = 0; b < i; b++){
            var A, S = v[b];
            0 !== S && (S > 0 ? A = s[b][S - 1 >> 1] : S < 0 && (A = s[b][-S - 1 >> 1].neg()), w = "affine" === A.type ? w.mixedAdd(A) : w.add(A));
        }
    }
    for(u = 0; u < i; u++)s[u] = null;
    return n ? w : w.toP();
}, uy.BasePoint = dy, dy.prototype.eq = function() {
    throw Error("Not implemented");
}, dy.prototype.validate = function() {
    return this.curve.validate(this);
}, uy.prototype.decodePoint = function(e, t) {
    e = ty.toArray(e, t);
    var r = this.p.byteLength();
    if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? cy(e[e.length - 1] % 2 == 0) : 7 === e[0] && cy(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
    if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
    throw Error("Unknown point format");
}, dy.prototype.encodeCompressed = function(e) {
    return this.encode(e, !0);
}, dy.prototype._encode = function(e) {
    var t = this.curve.p.byteLength(), r = this.getX().toArray("be", t);
    return e ? [
        this.getY().isEven() ? 2 : 3
    ].concat(r) : [
        4
    ].concat(r, this.getY().toArray("be", t));
}, dy.prototype.encode = function(e, t) {
    return ty.encode(this._encode(t), e);
}, dy.prototype.precompute = function(e) {
    if (this.precomputed) return this;
    var t = {
        doubles: null,
        naf: null,
        beta: null
    };
    return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this;
}, dy.prototype._hasDoubles = function(e) {
    if (!this.precomputed) return !1;
    var t = this.precomputed.doubles;
    return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step);
}, dy.prototype._getDoubles = function(e, t) {
    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
    for(var r = [
        this
    ], i = this, n = 0; n < t; n += e){
        for(var a = 0; a < e; a++)i = i.dbl();
        r.push(i);
    }
    return {
        step: e,
        points: r
    };
}, dy.prototype._getNAFPoints = function(e) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
    for(var t = [
        this
    ], r = (1 << e) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++)t[n] = t[n - 1].add(i);
    return {
        wnd: e,
        points: t
    };
}, dy.prototype._getBeta = function() {
    return null;
}, dy.prototype.dblp = function(e) {
    for(var t = this, r = 0; r < e; r++)t = t.dbl();
    return t;
};
var fy = ty.assert;
function ly(e) {
    hy.call(this, "short", e), this.a = new Zp(e.a, 16).toRed(this.red), this.b = new Zp(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = [
        ,
        ,
        ,
        , 
    ], this._endoWnafT2 = [
        ,
        ,
        ,
        , 
    ];
}
at(ly, hy);
var py = ly;
function yy(e, t, r, i) {
    hy.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new Zp(t, 16), this.y = new Zp(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
function by(e, t, r, i) {
    hy.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new Zp(0)) : (this.x = new Zp(t, 16), this.y = new Zp(r, 16), this.z = new Zp(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
function my(e) {
    hy.call(this, "mont", e), this.a = new Zp(e.a, 16).toRed(this.red), this.b = new Zp(e.b, 16).toRed(this.red), this.i4 = new Zp(4).toRed(this.red).redInvm(), this.two = new Zp(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}
ly.prototype._getEndomorphism = function(e) {
    if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
        var t, r;
        if (e.beta) t = new Zp(e.beta, 16).toRed(this.red);
        else {
            var i = this._getEndoRoots(this.p);
            t = (t = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red);
        }
        if (e.lambda) r = new Zp(e.lambda, 16);
        else {
            var n = this._getEndoRoots(this.n);
            0 === this.g.mul(n[0]).x.cmp(this.g.x.redMul(t)) ? r = n[0] : (r = n[1], fy(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
        }
        return {
            beta: t,
            lambda: r,
            basis: e.basis ? e.basis.map(function(e) {
                return {
                    a: new Zp(e.a, 16),
                    b: new Zp(e.b, 16)
                };
            }) : this._getEndoBasis(r)
        };
    }
}, ly.prototype._getEndoRoots = function(e) {
    var t = e === this.p ? this.red : Zp.mont(e), r = new Zp(2).toRed(t).redInvm(), i = r.redNeg(), n = new Zp(3).toRed(t).redNeg().redSqrt().redMul(r);
    return [
        i.redAdd(n).fromRed(),
        i.redSub(n).fromRed()
    ];
}, ly.prototype._getEndoBasis = function(e) {
    for(var t, r, i, n, a, s, o, c, u, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = e, f = this.n.clone(), l = new Zp(1), p = new Zp(0), y = new Zp(0), b = new Zp(1), m = 0; 0 !== d.cmpn(0);){
        var g = f.div(d);
        c = f.sub(g.mul(d)), u = y.sub(g.mul(l));
        var w = b.sub(g.mul(p));
        if (!i && c.cmp(h) < 0) t = o.neg(), r = l, i = c.neg(), n = u;
        else if (i && 2 == ++m) break;
        o = c, f = d, d = c, y = l, l = u, b = p, p = w;
    }
    a = c.neg(), s = u;
    var v = i.sqr().add(n.sqr());
    return a.sqr().add(s.sqr()).cmp(v) >= 0 && (a = t, s = r), i.negative && (i = i.neg(), n = n.neg()), a.negative && (a = a.neg(), s = s.neg()), [
        {
            a: i,
            b: n
        },
        {
            a,
            b: s
        }
    ];
}, ly.prototype._endoSplit = function(e) {
    var t = this.endo.basis, r = t[0], i = t[1], n = i.b.mul(e).divRound(this.n), a = r.b.neg().mul(e).divRound(this.n), s = n.mul(r.a), o = a.mul(i.a), c = n.mul(r.b), u = a.mul(i.b);
    return {
        k1: e.sub(s).sub(o),
        k2: c.add(u).neg()
    };
}, ly.prototype.pointFromX = function(e, t) {
    (e = new Zp(e, 16)).red || (e = e.toRed(this.red));
    var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), i = r.redSqrt();
    if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
    var n = i.fromRed().isOdd();
    return (t && !n || !t && n) && (i = i.redNeg()), this.point(e, i);
}, ly.prototype.validate = function(e) {
    if (e.inf) return !0;
    var t = e.x, r = e.y, i = this.a.redMul(t), n = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
    return 0 === r.redSqr().redISub(n).cmpn(0);
}, ly.prototype._endoWnafMulAdd = function(e, t, r) {
    for(var i = this._endoWnafT1, n = this._endoWnafT2, a = 0; a < e.length; a++){
        var s = this._endoSplit(t[a]), o = e[a], c = o._getBeta();
        s.k1.negative && (s.k1.ineg(), o = o.neg(!0)), s.k2.negative && (s.k2.ineg(), c = c.neg(!0)), i[2 * a] = o, i[2 * a + 1] = c, n[2 * a] = s.k1, n[2 * a + 1] = s.k2;
    }
    for(var u = this._wnafMulAdd(1, i, n, 2 * a, r), h = 0; h < 2 * a; h++)i[h] = null, n[h] = null;
    return u;
}, at(yy, hy.BasePoint), ly.prototype.point = function(e, t, r) {
    return new yy(this, e, t, r);
}, ly.prototype.pointFromJSON = function(e, t) {
    return yy.fromJSON(this, e, t);
}, yy.prototype._getBeta = function() {
    if (this.curve.endo) {
        var e = this.precomputed;
        if (e && e.beta) return e.beta;
        var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
        if (e) {
            var r = this.curve, i = function(e) {
                return r.point(e.x.redMul(r.endo.beta), e.y);
            };
            e.beta = t, t.precomputed = {
                beta: null,
                naf: e.naf && {
                    wnd: e.naf.wnd,
                    points: e.naf.points.map(i)
                },
                doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(i)
                }
            };
        }
        return t;
    }
}, yy.prototype.toJSON = function() {
    return this.precomputed ? [
        this.x,
        this.y,
        this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1)
            }
        }
    ] : [
        this.x,
        this.y
    ];
}, yy.fromJSON = function(e, t, r) {
    "string" == typeof t && (t = JSON.parse(t));
    var i = e.point(t[0], t[1], r);
    if (!t[2]) return i;
    function n(t) {
        return e.point(t[0], t[1], r);
    }
    var a = t[2];
    return i.precomputed = {
        beta: null,
        doubles: a.doubles && {
            step: a.doubles.step,
            points: [
                i
            ].concat(a.doubles.points.map(n))
        },
        naf: a.naf && {
            wnd: a.naf.wnd,
            points: [
                i
            ].concat(a.naf.points.map(n))
        }
    }, i;
}, yy.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, yy.prototype.isInfinity = function() {
    return this.inf;
}, yy.prototype.add = function(e) {
    if (this.inf) return e;
    if (e.inf) return this;
    if (this.eq(e)) return this.dbl();
    if (this.neg().eq(e)) return this.curve.point(null, null);
    if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
    var t = this.y.redSub(e.y);
    0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
    var r = t.redSqr().redISub(this.x).redISub(e.x), i = t.redMul(this.x.redSub(r)).redISub(this.y);
    return this.curve.point(r, i);
}, yy.prototype.dbl = function() {
    if (this.inf) return this;
    var e = this.y.redAdd(this.y);
    if (0 === e.cmpn(0)) return this.curve.point(null, null);
    var t = this.curve.a, r = this.x.redSqr(), i = e.redInvm(), n = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i), a = n.redSqr().redISub(this.x.redAdd(this.x)), s = n.redMul(this.x.redSub(a)).redISub(this.y);
    return this.curve.point(a, s);
}, yy.prototype.getX = function() {
    return this.x.fromRed();
}, yy.prototype.getY = function() {
    return this.y.fromRed();
}, yy.prototype.mul = function(e) {
    return e = new Zp(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([
        this
    ], [
        e
    ]) : this.curve._wnafMul(this, e);
}, yy.prototype.mulAdd = function(e, t, r) {
    var i = [
        this,
        t
    ], n = [
        e,
        r
    ];
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2);
}, yy.prototype.jmulAdd = function(e, t, r) {
    var i = [
        this,
        t
    ], n = [
        e,
        r
    ];
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0);
}, yy.prototype.eq = function(e) {
    return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y));
}, yy.prototype.neg = function(e) {
    if (this.inf) return this;
    var t = this.curve.point(this.x, this.y.redNeg());
    if (e && this.precomputed) {
        var r = this.precomputed, i = function(e) {
            return e.neg();
        };
        t.precomputed = {
            naf: r.naf && {
                wnd: r.naf.wnd,
                points: r.naf.points.map(i)
            },
            doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(i)
            }
        };
    }
    return t;
}, yy.prototype.toJ = function() {
    return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
}, at(by, hy.BasePoint), ly.prototype.jpoint = function(e, t, r) {
    return new by(this, e, t, r);
}, by.prototype.toP = function() {
    if (this.isInfinity()) return this.curve.point(null, null);
    var e = this.z.redInvm(), t = e.redSqr(), r = this.x.redMul(t), i = this.y.redMul(t).redMul(e);
    return this.curve.point(r, i);
}, by.prototype.neg = function() {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, by.prototype.add = function(e) {
    if (this.isInfinity()) return e;
    if (e.isInfinity()) return this;
    var t = e.z.redSqr(), r = this.z.redSqr(), i = this.x.redMul(t), n = e.x.redMul(r), a = this.y.redMul(t.redMul(e.z)), s = e.y.redMul(r.redMul(this.z)), o = i.redSub(n), c = a.redSub(s);
    if (0 === o.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
    var u = o.redSqr(), h = u.redMul(o), d = i.redMul(u), f = c.redSqr().redIAdd(h).redISub(d).redISub(d), l = c.redMul(d.redISub(f)).redISub(a.redMul(h)), p = this.z.redMul(e.z).redMul(o);
    return this.curve.jpoint(f, l, p);
}, by.prototype.mixedAdd = function(e) {
    if (this.isInfinity()) return e.toJ();
    if (e.isInfinity()) return this;
    var t = this.z.redSqr(), r = this.x, i = e.x.redMul(t), n = this.y, a = e.y.redMul(t).redMul(this.z), s = r.redSub(i), o = n.redSub(a);
    if (0 === s.cmpn(0)) return 0 !== o.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
    var c = s.redSqr(), u = c.redMul(s), h = r.redMul(c), d = o.redSqr().redIAdd(u).redISub(h).redISub(h), f = o.redMul(h.redISub(d)).redISub(n.redMul(u)), l = this.z.redMul(s);
    return this.curve.jpoint(d, f, l);
}, by.prototype.dblp = function(e) {
    if (0 === e) return this;
    if (this.isInfinity()) return this;
    if (!e) return this.dbl();
    if (this.curve.zeroA || this.curve.threeA) {
        for(var t = this, r = 0; r < e; r++)t = t.dbl();
        return t;
    }
    var i = this.curve.a, n = this.curve.tinv, a = this.x, s = this.y, o = this.z, c = o.redSqr().redSqr(), u = s.redAdd(s);
    for(r = 0; r < e; r++){
        var h = a.redSqr(), d = u.redSqr(), f = d.redSqr(), l = h.redAdd(h).redIAdd(h).redIAdd(i.redMul(c)), p = a.redMul(d), y = l.redSqr().redISub(p.redAdd(p)), b = p.redISub(y), m = l.redMul(b);
        m = m.redIAdd(m).redISub(f);
        var g = u.redMul(o);
        r + 1 < e && (c = c.redMul(f)), a = y, o = g, u = m;
    }
    return this.curve.jpoint(a, u.redMul(n), o);
}, by.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, by.prototype._zeroDbl = function() {
    var e, t, r;
    if (this.zOne) {
        var i = this.x.redSqr(), n = this.y.redSqr(), a = n.redSqr(), s = this.x.redAdd(n).redSqr().redISub(i).redISub(a);
        s = s.redIAdd(s);
        var o = i.redAdd(i).redIAdd(i), c = o.redSqr().redISub(s).redISub(s), u = a.redIAdd(a);
        u = (u = u.redIAdd(u)).redIAdd(u), e = c, t = o.redMul(s.redISub(c)).redISub(u), r = this.y.redAdd(this.y);
    } else {
        var h = this.x.redSqr(), d = this.y.redSqr(), f = d.redSqr(), l = this.x.redAdd(d).redSqr().redISub(h).redISub(f);
        l = l.redIAdd(l);
        var p = h.redAdd(h).redIAdd(h), y = p.redSqr(), b = f.redIAdd(f);
        b = (b = b.redIAdd(b)).redIAdd(b), e = y.redISub(l).redISub(l), t = p.redMul(l.redISub(e)).redISub(b), r = (r = this.y.redMul(this.z)).redIAdd(r);
    }
    return this.curve.jpoint(e, t, r);
}, by.prototype._threeDbl = function() {
    var e, t, r;
    if (this.zOne) {
        var i = this.x.redSqr(), n = this.y.redSqr(), a = n.redSqr(), s = this.x.redAdd(n).redSqr().redISub(i).redISub(a);
        s = s.redIAdd(s);
        var o = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a), c = o.redSqr().redISub(s).redISub(s);
        e = c;
        var u = a.redIAdd(a);
        u = (u = u.redIAdd(u)).redIAdd(u), t = o.redMul(s.redISub(c)).redISub(u), r = this.y.redAdd(this.y);
    } else {
        var h = this.z.redSqr(), d = this.y.redSqr(), f = this.x.redMul(d), l = this.x.redSub(h).redMul(this.x.redAdd(h));
        l = l.redAdd(l).redIAdd(l);
        var p = f.redIAdd(f), y = (p = p.redIAdd(p)).redAdd(p);
        e = l.redSqr().redISub(y), r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(h);
        var b = d.redSqr();
        b = (b = (b = b.redIAdd(b)).redIAdd(b)).redIAdd(b), t = l.redMul(p.redISub(e)).redISub(b);
    }
    return this.curve.jpoint(e, t, r);
}, by.prototype._dbl = function() {
    var e = this.curve.a, t = this.x, r = this.y, i = this.z, n = i.redSqr().redSqr(), a = t.redSqr(), s = r.redSqr(), o = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(n)), c = t.redAdd(t), u = (c = c.redIAdd(c)).redMul(s), h = o.redSqr().redISub(u.redAdd(u)), d = u.redISub(h), f = s.redSqr();
    f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
    var l = o.redMul(d).redISub(f), p = r.redAdd(r).redMul(i);
    return this.curve.jpoint(h, l, p);
}, by.prototype.trpl = function() {
    if (!this.curve.zeroA) return this.dbl().add(this);
    var e = this.x.redSqr(), t = this.y.redSqr(), r = this.z.redSqr(), i = t.redSqr(), n = e.redAdd(e).redIAdd(e), a = n.redSqr(), s = this.x.redAdd(t).redSqr().redISub(e).redISub(i), o = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(a)).redSqr(), c = i.redIAdd(i);
    c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
    var u = n.redIAdd(s).redSqr().redISub(a).redISub(o).redISub(c), h = t.redMul(u);
    h = (h = h.redIAdd(h)).redIAdd(h);
    var d = this.x.redMul(o).redISub(h);
    d = (d = d.redIAdd(d)).redIAdd(d);
    var f = this.y.redMul(u.redMul(c.redISub(u)).redISub(s.redMul(o)));
    f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
    var l = this.z.redAdd(s).redSqr().redISub(r).redISub(o);
    return this.curve.jpoint(d, f, l);
}, by.prototype.mul = function(e, t) {
    return e = new Zp(e, t), this.curve._wnafMul(this, e);
}, by.prototype.eq = function(e) {
    if ("affine" === e.type) return this.eq(e.toJ());
    if (this === e) return !0;
    var t = this.z.redSqr(), r = e.z.redSqr();
    if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
    var i = t.redMul(this.z), n = r.redMul(e.z);
    return 0 === this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0);
}, by.prototype.eqXToP = function(e) {
    var t = this.z.redSqr(), r = e.toRed(this.curve.red).redMul(t);
    if (0 === this.x.cmp(r)) return !0;
    for(var i = e.clone(), n = this.curve.redN.redMul(t);;){
        if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
        if (r.redIAdd(n), 0 === this.x.cmp(r)) return !0;
    }
}, by.prototype.inspect = function() {
    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, by.prototype.isInfinity = function() {
    return 0 === this.z.cmpn(0);
}, at(my, hy);
var gy = my;
function wy(e, t, r) {
    hy.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new Zp(t, 16), this.z = new Zp(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
}
my.prototype.validate = function(e) {
    var t = e.normalize().x, r = t.redSqr(), i = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
    return 0 === i.redSqrt().redSqr().cmp(i);
}, at(wy, hy.BasePoint), my.prototype.decodePoint = function(e, t) {
    if (33 === (e = ty.toArray(e, t)).length && 64 === e[0] && (e = e.slice(1, 33).reverse()), 32 !== e.length) throw Error("Unknown point compression format");
    return this.point(e, 1);
}, my.prototype.point = function(e, t) {
    return new wy(this, e, t);
}, my.prototype.pointFromJSON = function(e) {
    return wy.fromJSON(this, e);
}, wy.prototype.precompute = function() {}, wy.prototype._encode = function(e) {
    var t = this.curve.p.byteLength();
    return e ? [
        64
    ].concat(this.getX().toArray("le", t)) : this.getX().toArray("be", t);
}, wy.fromJSON = function(e, t) {
    return new wy(e, t[0], t[1] || e.one);
}, wy.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
}, wy.prototype.isInfinity = function() {
    return 0 === this.z.cmpn(0);
}, wy.prototype.dbl = function() {
    var e = this.x.redAdd(this.z).redSqr(), t = this.x.redSub(this.z).redSqr(), r = e.redSub(t), i = e.redMul(t), n = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
    return this.curve.point(i, n);
}, wy.prototype.add = function() {
    throw Error("Not supported on Montgomery curve");
}, wy.prototype.diffAdd = function(e, t) {
    var r = this.x.redAdd(this.z), i = this.x.redSub(this.z), n = e.x.redAdd(e.z), a = e.x.redSub(e.z).redMul(r), s = n.redMul(i), o = t.z.redMul(a.redAdd(s).redSqr()), c = t.x.redMul(a.redISub(s).redSqr());
    return this.curve.point(o, c);
}, wy.prototype.mul = function(e) {
    for(var t = (e = new Zp(e, 16)).clone(), r = this, i = this.curve.point(null, null), n = []; 0 !== t.cmpn(0); t.iushrn(1))n.push(t.andln(1));
    for(var a = n.length - 1; a >= 0; a--)0 === n[a] ? (r = r.diffAdd(i, this), i = i.dbl()) : (i = r.diffAdd(i, this), r = r.dbl());
    return i;
}, wy.prototype.mulAdd = function() {
    throw Error("Not supported on Montgomery curve");
}, wy.prototype.jumlAdd = function() {
    throw Error("Not supported on Montgomery curve");
}, wy.prototype.eq = function(e) {
    return 0 === this.getX().cmp(e.getX());
}, wy.prototype.normalize = function() {
    return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
}, wy.prototype.getX = function() {
    return this.normalize(), this.x.fromRed();
};
var vy = ty.assert;
function _y(e) {
    this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, hy.call(this, "edwards", e), this.a = new Zp(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new Zp(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new Zp(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), vy(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c);
}
at(_y, hy);
var ky = _y;
function Ay(e, t, r, i, n) {
    hy.BasePoint.call(this, e, "projective"), null === t && null === r && null === i ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new Zp(t, 16), this.y = new Zp(r, 16), this.z = i ? new Zp(i, 16) : this.curve.one, this.t = n && new Zp(n, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
}
_y.prototype._mulA = function(e) {
    return this.mOneA ? e.redNeg() : this.a.redMul(e);
}, _y.prototype._mulC = function(e) {
    return this.oneC ? e : this.c.redMul(e);
}, _y.prototype.jpoint = function(e, t, r, i) {
    return this.point(e, t, r, i);
}, _y.prototype.pointFromX = function(e, t) {
    (e = new Zp(e, 16)).red || (e = e.toRed(this.red));
    var r = e.redSqr(), i = this.c2.redSub(this.a.redMul(r)), n = this.one.redSub(this.c2.redMul(this.d).redMul(r)), a = i.redMul(n.redInvm()), s = a.redSqrt();
    if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw Error("invalid point");
    var o = s.fromRed().isOdd();
    return (t && !o || !t && o) && (s = s.redNeg()), this.point(e, s);
}, _y.prototype.pointFromY = function(e, t) {
    (e = new Zp(e, 16)).red || (e = e.toRed(this.red));
    var r = e.redSqr(), i = r.redSub(this.c2), n = r.redMul(this.d).redMul(this.c2).redSub(this.a), a = i.redMul(n.redInvm());
    if (0 === a.cmp(this.zero)) {
        if (t) throw Error("invalid point");
        return this.point(this.zero, e);
    }
    var s = a.redSqrt();
    if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw Error("invalid point");
    return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e);
}, _y.prototype.validate = function(e) {
    if (e.isInfinity()) return !0;
    e.normalize();
    var t = e.x.redSqr(), r = e.y.redSqr(), i = t.redMul(this.a).redAdd(r), n = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
    return 0 === i.cmp(n);
}, at(Ay, hy.BasePoint), _y.prototype.pointFromJSON = function(e) {
    return Ay.fromJSON(this, e);
}, _y.prototype.point = function(e, t, r, i) {
    return new Ay(this, e, t, r, i);
}, Ay.fromJSON = function(e, t) {
    return new Ay(e, t[0], t[1], t[2]);
}, Ay.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
}, Ay.prototype.isInfinity = function() {
    return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c));
}, Ay.prototype._extDbl = function() {
    var e = this.x.redSqr(), t = this.y.redSqr(), r = this.z.redSqr();
    r = r.redIAdd(r);
    var i = this.curve._mulA(e), n = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t), a = i.redAdd(t), s = a.redSub(r), o = i.redSub(t), c = n.redMul(s), u = a.redMul(o), h = n.redMul(o), d = s.redMul(a);
    return this.curve.point(c, u, d, h);
}, Ay.prototype._projDbl = function() {
    var e, t, r, i = this.x.redAdd(this.y).redSqr(), n = this.x.redSqr(), a = this.y.redSqr();
    if (this.curve.twisted) {
        var s = (u = this.curve._mulA(n)).redAdd(a);
        if (this.zOne) e = i.redSub(n).redSub(a).redMul(s.redSub(this.curve.two)), t = s.redMul(u.redSub(a)), r = s.redSqr().redSub(s).redSub(s);
        else {
            var o = this.z.redSqr(), c = s.redSub(o).redISub(o);
            e = i.redSub(n).redISub(a).redMul(c), t = s.redMul(u.redSub(a)), r = s.redMul(c);
        }
    } else {
        var u = n.redAdd(a);
        o = this.curve._mulC(this.z).redSqr(), c = u.redSub(o).redSub(o);
        e = this.curve._mulC(i.redISub(u)).redMul(c), t = this.curve._mulC(u).redMul(n.redISub(a)), r = u.redMul(c);
    }
    return this.curve.point(e, t, r);
}, Ay.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
}, Ay.prototype._extAdd = function(e) {
    var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)), r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)), i = this.t.redMul(this.curve.dd).redMul(e.t), n = this.z.redMul(e.z.redAdd(e.z)), a = r.redSub(t), s = n.redSub(i), o = n.redAdd(i), c = r.redAdd(t), u = a.redMul(s), h = o.redMul(c), d = a.redMul(c), f = s.redMul(o);
    return this.curve.point(u, h, f, d);
}, Ay.prototype._projAdd = function(e) {
    var t, r, i = this.z.redMul(e.z), n = i.redSqr(), a = this.x.redMul(e.x), s = this.y.redMul(e.y), o = this.curve.d.redMul(a).redMul(s), c = n.redSub(o), u = n.redAdd(o), h = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(s), d = i.redMul(c).redMul(h);
    return this.curve.twisted ? (t = i.redMul(u).redMul(s.redSub(this.curve._mulA(a))), r = c.redMul(u)) : (t = i.redMul(u).redMul(s.redSub(a)), r = this.curve._mulC(c).redMul(u)), this.curve.point(d, t, r);
}, Ay.prototype.add = function(e) {
    return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
}, Ay.prototype.mul = function(e) {
    return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
}, Ay.prototype.mulAdd = function(e, t, r) {
    return this.curve._wnafMulAdd(1, [
        this,
        t
    ], [
        e,
        r
    ], 2, !1);
}, Ay.prototype.jmulAdd = function(e, t, r) {
    return this.curve._wnafMulAdd(1, [
        this,
        t
    ], [
        e,
        r
    ], 2, !0);
}, Ay.prototype.normalize = function() {
    if (this.zOne) return this;
    var e = this.z.redInvm();
    return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this;
}, Ay.prototype.neg = function() {
    return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
}, Ay.prototype.getX = function() {
    return this.normalize(), this.x.fromRed();
}, Ay.prototype.getY = function() {
    return this.normalize(), this.y.fromRed();
}, Ay.prototype.eq = function(e) {
    return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY());
}, Ay.prototype.eqXToP = function(e) {
    var t = e.toRed(this.curve.red).redMul(this.z);
    if (0 === this.x.cmp(t)) return !0;
    for(var r = e.clone(), i = this.curve.redN.redMul(this.z);;){
        if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
        if (t.redIAdd(i), 0 === this.x.cmp(t)) return !0;
    }
}, Ay.prototype.toP = Ay.prototype.normalize, Ay.prototype.mixedAdd = Ay.prototype.add;
var Sy = it(function(e, t) {
    var r = t;
    r.base = hy, r.short = py, r.mont = gy, r.edwards = ky;
}), Ey = pt.rotl32, Py = pt.sum32, xy = pt.sum32_5, My = At.ft_1, Cy = mt.BlockHash, Ky = [
    1518500249,
    1859775393,
    2400959708,
    3395469782
];
function Dy() {
    if (!(this instanceof Dy)) return new Dy;
    Cy.call(this), this.h = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
    ], this.W = Array(80);
}
pt.inherits(Dy, Cy);
var Ry = Dy;
Dy.blockSize = 512, Dy.outSize = 160, Dy.hmacStrength = 80, Dy.padLength = 64, Dy.prototype._update = function(e, t) {
    for(var r = this.W, i = 0; i < 16; i++)r[i] = e[t + i];
    for(; i < r.length; i++)r[i] = Ey(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
    var n = this.h[0], a = this.h[1], s = this.h[2], o = this.h[3], c = this.h[4];
    for(i = 0; i < r.length; i++){
        var u = ~~(i / 20), h = xy(Ey(n, 5), My(u, a, s, o), c, r[i], Ky[u]);
        c = o, o = s, s = Ey(a, 30), a = n, n = h;
    }
    this.h[0] = Py(this.h[0], n), this.h[1] = Py(this.h[1], a), this.h[2] = Py(this.h[2], s), this.h[3] = Py(this.h[3], o), this.h[4] = Py(this.h[4], c);
}, Dy.prototype._digest = function(e) {
    return "hex" === e ? pt.toHex32(this.h, "big") : pt.split32(this.h, "big");
};
var Uy = {
    sha1: Ry,
    sha224: qt,
    sha256: Tt,
    sha384: lr,
    sha512: Jt
};
function Iy(e, t, r) {
    if (!(this instanceof Iy)) return new Iy(e, t, r);
    this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(pt.toArray(t, r));
}
var By = Iy;
Iy.prototype._init = function(e) {
    e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), et(e.length <= this.blockSize);
    for(var t = e.length; t < this.blockSize; t++)e.push(0);
    for(t = 0; t < e.length; t++)e[t] ^= 54;
    for(this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++)e[t] ^= 106;
    this.outer = (new this.Hash).update(e);
}, Iy.prototype.update = function(e, t) {
    return this.inner.update(e, t), this;
}, Iy.prototype.digest = function(e) {
    return this.outer.update(this.inner.digest()), this.outer.digest(e);
};
var Ty = it(function(e, t) {
    var r = t;
    r.utils = pt, r.common = mt, r.sha = Uy, r.ripemd = Mr, r.hmac = By, r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160;
}), zy = {
    doubles: {
        step: 4,
        points: [
            [
                "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
                "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
            ],
            [
                "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
                "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
            ],
            [
                "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
                "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
            ],
            [
                "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
                "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
            ],
            [
                "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
                "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
            ],
            [
                "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
                "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
            ],
            [
                "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
                "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
            ],
            [
                "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
                "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
            ],
            [
                "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
                "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
            ],
            [
                "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
                "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
            ],
            [
                "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
                "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
            ],
            [
                "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
                "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
            ],
            [
                "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
                "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
            ],
            [
                "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
                "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
            ],
            [
                "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
                "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
            ],
            [
                "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
                "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
            ],
            [
                "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
                "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
            ],
            [
                "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
                "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
            ],
            [
                "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
                "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
            ],
            [
                "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
                "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
            ],
            [
                "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
                "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
            ],
            [
                "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
                "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
            ],
            [
                "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
                "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
            ],
            [
                "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
                "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
            ],
            [
                "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
                "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
            ],
            [
                "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
                "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
            ],
            [
                "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
                "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
            ],
            [
                "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
                "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
            ],
            [
                "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
                "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
            ],
            [
                "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
                "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
            ],
            [
                "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
                "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
            ],
            [
                "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
                "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
            ],
            [
                "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
                "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
            ],
            [
                "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
                "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
            ],
            [
                "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
                "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
            ],
            [
                "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
                "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
            ],
            [
                "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
                "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
            ],
            [
                "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
                "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
            ],
            [
                "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
                "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
            ],
            [
                "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
                "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
            ],
            [
                "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
                "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
            ],
            [
                "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
                "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
            ],
            [
                "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
                "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
            ],
            [
                "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
                "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
            ],
            [
                "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
                "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
            ],
            [
                "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
                "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
            ],
            [
                "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
                "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
            ],
            [
                "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
                "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
            ],
            [
                "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
                "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
            ],
            [
                "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
                "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
            ],
            [
                "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
                "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
            ],
            [
                "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
                "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
            ],
            [
                "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
                "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
            ],
            [
                "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
                "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
            ],
            [
                "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
                "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
            ],
            [
                "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
                "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
            ],
            [
                "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
                "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
            ],
            [
                "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
                "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
            ],
            [
                "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
                "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
            ],
            [
                "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
                "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
            ],
            [
                "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
                "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
            ],
            [
                "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
                "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
            ],
            [
                "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
                "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
            ],
            [
                "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
                "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
            ],
            [
                "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
                "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
            ]
        ]
    },
    naf: {
        wnd: 7,
        points: [
            [
                "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
                "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
            ],
            [
                "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
                "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
            ],
            [
                "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
                "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
            ],
            [
                "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
                "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
            ],
            [
                "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
                "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
            ],
            [
                "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
                "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
            ],
            [
                "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
                "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
            ],
            [
                "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
                "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
            ],
            [
                "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
                "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
            ],
            [
                "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
                "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
            ],
            [
                "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
                "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
            ],
            [
                "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
                "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
            ],
            [
                "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
                "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
            ],
            [
                "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
                "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
            ],
            [
                "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
                "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
            ],
            [
                "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
                "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
            ],
            [
                "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
                "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
            ],
            [
                "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
                "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
            ],
            [
                "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
                "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
            ],
            [
                "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
                "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
            ],
            [
                "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
                "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
            ],
            [
                "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
                "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
            ],
            [
                "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
                "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
            ],
            [
                "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
                "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
            ],
            [
                "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
                "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
            ],
            [
                "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
                "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
            ],
            [
                "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
                "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
            ],
            [
                "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
                "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
            ],
            [
                "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
                "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
            ],
            [
                "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
                "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
            ],
            [
                "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
                "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
            ],
            [
                "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
                "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
            ],
            [
                "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
                "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
            ],
            [
                "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
                "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
            ],
            [
                "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
                "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
            ],
            [
                "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
                "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
            ],
            [
                "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
                "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
            ],
            [
                "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
                "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
            ],
            [
                "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
                "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
            ],
            [
                "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
                "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
            ],
            [
                "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
                "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
            ],
            [
                "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
                "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
            ],
            [
                "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
                "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
            ],
            [
                "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
                "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
            ],
            [
                "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
                "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
            ],
            [
                "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
                "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
            ],
            [
                "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
                "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
            ],
            [
                "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
                "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
            ],
            [
                "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
                "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
            ],
            [
                "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
                "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
            ],
            [
                "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
                "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
            ],
            [
                "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
                "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
            ],
            [
                "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
                "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
            ],
            [
                "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
                "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
            ],
            [
                "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
                "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
            ],
            [
                "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
                "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
            ],
            [
                "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
                "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
            ],
            [
                "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
                "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
            ],
            [
                "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
                "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
            ],
            [
                "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
                "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
            ],
            [
                "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
                "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
            ],
            [
                "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
                "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
            ],
            [
                "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
                "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
            ],
            [
                "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
                "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
            ],
            [
                "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
                "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
            ],
            [
                "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
                "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
            ],
            [
                "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
                "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
            ],
            [
                "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
                "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
            ],
            [
                "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
                "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
            ],
            [
                "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
                "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
            ],
            [
                "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
                "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
            ],
            [
                "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
                "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
            ],
            [
                "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
                "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
            ],
            [
                "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
                "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
            ],
            [
                "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
                "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
            ],
            [
                "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
                "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
            ],
            [
                "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
                "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
            ],
            [
                "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
                "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
            ],
            [
                "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
                "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
            ],
            [
                "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
                "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
            ],
            [
                "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
                "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
            ],
            [
                "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
                "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
            ],
            [
                "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
                "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
            ],
            [
                "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
                "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
            ],
            [
                "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
                "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
            ],
            [
                "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
                "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
            ],
            [
                "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
                "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
            ],
            [
                "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
                "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
            ],
            [
                "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
                "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
            ],
            [
                "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
                "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
            ],
            [
                "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
                "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
            ],
            [
                "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
                "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
            ],
            [
                "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
                "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
            ],
            [
                "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
                "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
            ],
            [
                "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
                "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
            ],
            [
                "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
                "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
            ],
            [
                "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
                "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
            ],
            [
                "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
                "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
            ],
            [
                "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
                "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
            ],
            [
                "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
                "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
            ],
            [
                "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
                "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
            ],
            [
                "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
                "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
            ],
            [
                "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
                "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
            ],
            [
                "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
                "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
            ],
            [
                "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
                "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
            ],
            [
                "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
                "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
            ],
            [
                "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
                "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
            ],
            [
                "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
                "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
            ],
            [
                "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
                "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
            ],
            [
                "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
                "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
            ],
            [
                "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
                "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
            ],
            [
                "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
                "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
            ],
            [
                "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
                "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
            ],
            [
                "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
                "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
            ],
            [
                "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
                "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
            ],
            [
                "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
                "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
            ],
            [
                "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
                "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
            ],
            [
                "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
                "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
            ],
            [
                "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
                "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
            ],
            [
                "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
                "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
            ],
            [
                "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
                "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
            ],
            [
                "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
                "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
            ],
            [
                "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
                "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
            ],
            [
                "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
                "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
            ],
            [
                "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
                "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
            ],
            [
                "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
                "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
            ],
            [
                "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
                "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
            ]
        ]
    }
}, qy = it(function(e, t) {
    var r, i = t, n = ty.assert;
    function a(e) {
        if ("short" === e.type) this.curve = new Sy.short(e);
        else if ("edwards" === e.type) this.curve = new Sy.edwards(e);
        else {
            if ("mont" !== e.type) throw Error("Unknown curve type.");
            this.curve = new Sy.mont(e);
        }
        this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, n*G != O");
    }
    function s(e, t) {
        Object.defineProperty(i, e, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var r = new a(t);
                return Object.defineProperty(i, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: r
                }), r;
            }
        });
    }
    i.PresetCurve = a, s("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: Ty.sha256,
        gRed: !1,
        g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
        ]
    }), s("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: Ty.sha256,
        gRed: !1,
        g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
        ]
    }), s("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: Ty.sha256,
        gRed: !1,
        g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
        ]
    }), s("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: Ty.sha384,
        gRed: !1,
        g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
        ]
    }), s("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: Ty.sha512,
        gRed: !1,
        g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
        ]
    }), s("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        cofactor: "8",
        hash: Ty.sha256,
        gRed: !1,
        g: [
            "9"
        ]
    }), s("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        cofactor: "8",
        hash: Ty.sha256,
        gRed: !1,
        g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658"
        ]
    }), s("brainpoolP256r1", {
        type: "short",
        prime: null,
        p: "A9FB57DB A1EEA9BC 3E660A90 9D838D72 6E3BF623 D5262028 2013481D 1F6E5377",
        a: "7D5A0975 FC2C3057 EEF67530 417AFFE7 FB8055C1 26DC5C6C E94A4B44 F330B5D9",
        b: "26DC5C6C E94A4B44 F330B5D9 BBD77CBF 95841629 5CF7E1CE 6BCCDC18 FF8C07B6",
        n: "A9FB57DB A1EEA9BC 3E660A90 9D838D71 8C397AA3 B561A6F7 901E0E82 974856A7",
        hash: Ty.sha256,
        gRed: !1,
        g: [
            "8BD2AEB9CB7E57CB2C4B482FFC81B7AFB9DE27E1E3BD23C23A4453BD9ACE3262",
            "547EF835C3DAC4FD97F8461A14611DC9C27745132DED8E545C1D54C72F046997"
        ]
    }), s("brainpoolP384r1", {
        type: "short",
        prime: null,
        p: "8CB91E82 A3386D28 0F5D6F7E 50E641DF 152F7109 ED5456B4 12B1DA19 7FB71123ACD3A729 901D1A71 87470013 3107EC53",
        a: "7BC382C6 3D8C150C 3C72080A CE05AFA0 C2BEA28E 4FB22787 139165EF BA91F90F8AA5814A 503AD4EB 04A8C7DD 22CE2826",
        b: "04A8C7DD 22CE2826 8B39B554 16F0447C 2FB77DE1 07DCD2A6 2E880EA5 3EEB62D57CB43902 95DBC994 3AB78696 FA504C11",
        n: "8CB91E82 A3386D28 0F5D6F7E 50E641DF 152F7109 ED5456B3 1F166E6C AC0425A7CF3AB6AF 6B7FC310 3B883202 E9046565",
        hash: Ty.sha384,
        gRed: !1,
        g: [
            "1D1C64F068CF45FFA2A63A81B7C13F6B8847A3E77EF14FE3DB7FCAFE0CBD10E8E826E03436D646AAEF87B2E247D4AF1E",
            "8ABE1D7520F9C2A45CB1EB8E95CFD55262B70B29FEEC5864E19C054FF99129280E4646217791811142820341263C5315"
        ]
    }), s("brainpoolP512r1", {
        type: "short",
        prime: null,
        p: "AADD9DB8 DBE9C48B 3FD4E6AE 33C9FC07 CB308DB3 B3C9D20E D6639CCA 703308717D4D9B00 9BC66842 AECDA12A E6A380E6 2881FF2F 2D82C685 28AA6056 583A48F3",
        a: "7830A331 8B603B89 E2327145 AC234CC5 94CBDD8D 3DF91610 A83441CA EA9863BC2DED5D5A A8253AA1 0A2EF1C9 8B9AC8B5 7F1117A7 2BF2C7B9 E7C1AC4D 77FC94CA",
        b: "3DF91610 A83441CA EA9863BC 2DED5D5A A8253AA1 0A2EF1C9 8B9AC8B5 7F1117A72BF2C7B9 E7C1AC4D 77FC94CA DC083E67 984050B7 5EBAE5DD 2809BD63 8016F723",
        n: "AADD9DB8 DBE9C48B 3FD4E6AE 33C9FC07 CB308DB3 B3C9D20E D6639CCA 70330870553E5C41 4CA92619 41866119 7FAC1047 1DB1D381 085DDADD B5879682 9CA90069",
        hash: Ty.sha512,
        gRed: !1,
        g: [
            "81AEE4BDD82ED9645A21322E9C4C6A9385ED9F70B5D916C1B43B62EEF4D0098EFF3B1F78E2D0D48D50D1687B93B97D5F7C6D5047406A5E688B352209BCB9F822",
            "7DDE385D566332ECC0EABFA9CF7822FDF209F70024A57B1AA000C55B881F8111B2DCDE494A5F485E5BCA4BD88A2763AED1CA2B2FA8F0540678CD1E0F3AD80892"
        ]
    });
    try {
        r = zy;
    } catch (e) {
        r = void 0;
    }
    s("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: Ty.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [
            {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            },
            {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }
        ],
        gRed: !1,
        g: [
            "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
            "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
            r
        ]
    });
});
function Fy(e) {
    if (!(this instanceof Fy)) return new Fy(e);
    this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
    var t = ey.toArray(e.entropy, e.entropyEnc || "hex"), r = ey.toArray(e.nonce, e.nonceEnc || "hex"), i = ey.toArray(e.pers, e.persEnc || "hex");
    et(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, i);
}
var Oy = Fy;
Fy.prototype._init = function(e, t, r) {
    var i = e.concat(t).concat(r);
    this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
    for(var n = 0; n < this.V.length; n++)this.K[n] = 0, this.V[n] = 1;
    this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Fy.prototype._hmac = function() {
    return new Ty.hmac(this.hash, this.K);
}, Fy.prototype._update = function(e) {
    var t = this._hmac().update(this.V).update([
        0
    ]);
    e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([
        1
    ]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
}, Fy.prototype.reseed = function(e, t, r, i) {
    "string" != typeof t && (i = r, r = t, t = null), e = ey.toArray(e, t), r = ey.toArray(r, i), et(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1;
}, Fy.prototype.generate = function(e, t, r, i) {
    if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
    "string" != typeof t && (i = r, r = t, t = null), r && (r = ey.toArray(r, i || "hex"), this._update(r));
    for(var n = []; n.length < e;)this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
    var a = n.slice(0, e);
    return this._update(r), this._reseed++, ey.encode(a, t);
};
var Ny = ty.assert;
function jy(e, t) {
    this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Ly = jy;
jy.fromPublic = function(e, t, r) {
    return t instanceof jy ? t : new jy(e, {
        pub: t,
        pubEnc: r
    });
}, jy.fromPrivate = function(e, t, r) {
    return t instanceof jy ? t : new jy(e, {
        priv: t,
        privEnc: r
    });
}, jy.prototype.validate = function() {
    var e = this.getPublic();
    return e.isInfinity() ? {
        result: !1,
        reason: "Invalid public key"
    } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
        result: !0,
        reason: null
    } : {
        result: !1,
        reason: "Public key * N != O"
    } : {
        result: !1,
        reason: "Public key is not a point"
    };
}, jy.prototype.getPublic = function(e, t) {
    return this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub;
}, jy.prototype.getPrivate = function(e) {
    return "hex" === e ? this.priv.toString(16, 2) : this.priv;
}, jy.prototype._importPrivate = function(e, t) {
    if (this.priv = new Zp(e, t || 16), "mont" === this.ec.curve.type) {
        var r = this.ec.curve.one, i = r.ushln(252).sub(r).ushln(3);
        this.priv = this.priv.or(r.ushln(254)), this.priv = this.priv.and(i);
    } else this.priv = this.priv.umod(this.ec.curve.n);
}, jy.prototype._importPublic = function(e, t) {
    if (e.x || e.y) return "mont" === this.ec.curve.type ? Ny(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || Ny(e.x && e.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(e.x, e.y));
    this.pub = this.ec.curve.decodePoint(e, t);
}, jy.prototype.derive = function(e) {
    return e.mul(this.priv).getX();
}, jy.prototype.sign = function(e, t, r) {
    return this.ec.sign(e, this, t, r);
}, jy.prototype.verify = function(e, t) {
    return this.ec.verify(e, t, this);
}, jy.prototype.inspect = function() {
    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var Wy = ty.assert;
function Hy(e, t) {
    if (e instanceof Hy) return e;
    this._importDER(e, t) || (Wy(e.r && e.s, "Signature without r or s"), this.r = new Zp(e.r, 16), this.s = new Zp(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
}
var Gy = Hy;
function Vy() {
    this.place = 0;
}
function $y(e, t) {
    var r = e[t.place++];
    if (!(128 & r)) return r;
    for(var i = 15 & r, n = 0, a = 0, s = t.place; a < i; a++, s++)n <<= 8, n |= e[s];
    return t.place = s, n;
}
function Zy(e) {
    for(var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;)t++;
    return 0 === t ? e : e.slice(t);
}
function Yy(e, t) {
    if (t < 128) e.push(t);
    else {
        var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
        for(e.push(128 | r); --r;)e.push(t >>> (r << 3) & 255);
        e.push(t);
    }
}
Hy.prototype._importDER = function(e, t) {
    e = ty.toArray(e, t);
    var r = new Vy;
    if (48 !== e[r.place++]) return !1;
    if ($y(e, r) + r.place !== e.length) return !1;
    if (2 !== e[r.place++]) return !1;
    var i = $y(e, r), n = e.slice(r.place, i + r.place);
    if (r.place += i, 2 !== e[r.place++]) return !1;
    var a = $y(e, r);
    if (e.length !== a + r.place) return !1;
    var s = e.slice(r.place, a + r.place);
    return 0 === n[0] && 128 & n[1] && (n = n.slice(1)), 0 === s[0] && 128 & s[1] && (s = s.slice(1)), this.r = new Zp(n), this.s = new Zp(s), this.recoveryParam = null, !0;
}, Hy.prototype.toDER = function(e) {
    var t = this.r.toArray(), r = this.s.toArray();
    for(128 & t[0] && (t = [
        0
    ].concat(t)), 128 & r[0] && (r = [
        0
    ].concat(r)), t = Zy(t), r = Zy(r); !(r[0] || 128 & r[1]);)r = r.slice(1);
    var i = [
        2
    ];
    Yy(i, t.length), (i = i.concat(t)).push(2), Yy(i, r.length);
    var n = i.concat(r), a = [
        48
    ];
    return Yy(a, n.length), a = a.concat(n), ty.encode(a, e);
};
var Xy = ty.assert;
function Qy(e) {
    if (!(this instanceof Qy)) return new Qy(e);
    "string" == typeof e && (Xy(qy.hasOwnProperty(e), "Unknown curve " + e), e = qy[e]), e instanceof qy.PresetCurve && (e = {
        curve: e
    }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
var Jy = Qy;
Qy.prototype.keyPair = function(e) {
    return new Ly(this, e);
}, Qy.prototype.keyFromPrivate = function(e, t) {
    return Ly.fromPrivate(this, e, t);
}, Qy.prototype.keyFromPublic = function(e, t) {
    return Ly.fromPublic(this, e, t);
}, Qy.prototype.genKeyPair = function(e) {
    e || (e = {});
    var t = new Oy({
        hash: this.hash,
        pers: e.pers,
        persEnc: e.persEnc || "utf8",
        entropy: e.entropy || ry(this.hash.hmacStrength),
        entropyEnc: e.entropy && e.entropyEnc || "utf8",
        nonce: this.n.toArray()
    });
    if ("mont" === this.curve.type) {
        var r = new Zp(t.generate(32));
        return this.keyFromPrivate(r);
    }
    for(var i = this.n.byteLength(), n = this.n.sub(new Zp(2));;){
        if (!((r = new Zp(t.generate(i))).cmp(n) > 0)) return r.iaddn(1), this.keyFromPrivate(r);
    }
}, Qy.prototype._truncateToN = function(e, t, r) {
    var i = (r = r || 8 * e.byteLength()) - this.n.bitLength();
    return i > 0 && (e = e.ushrn(i)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
}, Qy.prototype.truncateMsg = function(e) {
    var t;
    return e instanceof Uint8Array ? (t = 8 * e.byteLength, e = this._truncateToN(new Zp(e, 16), !1, t)) : "string" == typeof e ? (t = 4 * e.length, e = this._truncateToN(new Zp(e, 16), !1, t)) : e = this._truncateToN(new Zp(e, 16)), e;
}, Qy.prototype.sign = function(e, t, r, i) {
    "object" == typeof r && (i = r, r = null), i || (i = {}), t = this.keyFromPrivate(t, r), e = this.truncateMsg(e);
    for(var n = this.n.byteLength(), a = t.getPrivate().toArray("be", n), s = e.toArray("be", n), o = new Oy({
        hash: this.hash,
        entropy: a,
        nonce: s,
        pers: i.pers,
        persEnc: i.persEnc || "utf8"
    }), c = this.n.sub(new Zp(1)), u = 0;; u++){
        var h = i.k ? i.k(u) : new Zp(o.generate(this.n.byteLength()));
        if (!((h = this._truncateToN(h, !0)).cmpn(1) <= 0 || h.cmp(c) >= 0)) {
            var d = this.g.mul(h);
            if (!d.isInfinity()) {
                var f = d.getX(), l = f.umod(this.n);
                if (0 !== l.cmpn(0)) {
                    var p = h.invm(this.n).mul(l.mul(t.getPrivate()).iadd(e));
                    if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                        var y = (d.getY().isOdd() ? 1 : 0) | (0 !== f.cmp(l) ? 2 : 0);
                        return i.canonical && p.cmp(this.nh) > 0 && (p = this.n.sub(p), y ^= 1), new Gy({
                            r: l,
                            s: p,
                            recoveryParam: y
                        });
                    }
                }
            }
        }
    }
}, Qy.prototype.verify = function(e, t, r, i) {
    return r = this.keyFromPublic(r, i), t = new Gy(t, "hex"), this._verify(this.truncateMsg(e), t, r) || this._verify(this._truncateToN(new Zp(e, 16)), t, r);
}, Qy.prototype._verify = function(e, t, r) {
    var i = t.r, n = t.s;
    if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
    if (n.cmpn(1) < 0 || n.cmp(this.n) >= 0) return !1;
    var a, s = n.invm(this.n), o = s.mul(e).umod(this.n), c = s.mul(i).umod(this.n);
    return this.curve._maxwellTrick ? !(a = this.g.jmulAdd(o, r.getPublic(), c)).isInfinity() && a.eqXToP(i) : !(a = this.g.mulAdd(o, r.getPublic(), c)).isInfinity() && 0 === a.getX().umod(this.n).cmp(i);
}, Qy.prototype.recoverPubKey = function(e, t, r, i) {
    Xy((3 & r) === r, "The recovery param is more than two bits"), t = new Gy(t, i);
    var n = this.n, a = new Zp(e), s = t.r, o = t.s, c = 1 & r, u = r >> 1;
    if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw Error("Unable to find sencond key candinate");
    s = u ? this.curve.pointFromX(s.add(this.curve.n), c) : this.curve.pointFromX(s, c);
    var h = t.r.invm(n), d = n.sub(a).mul(h).umod(n), f = o.mul(h).umod(n);
    return this.g.mulAdd(d, s, f);
}, Qy.prototype.getKeyRecoveryParam = function(e, t, r, i) {
    if (null !== (t = new Gy(t, i)).recoveryParam) return t.recoveryParam;
    for(var n = 0; n < 4; n++){
        var a;
        try {
            a = this.recoverPubKey(e, t, n);
        } catch (e) {
            continue;
        }
        if (a.eq(r)) return n;
    }
    throw Error("Unable to find valid recovery factor");
};
var eb = ty.assert, tb = ty.parseBytes, rb = ty.cachedProperty;
function ib(e, t) {
    if (this.eddsa = e, t.hasOwnProperty("secret") && (this._secret = tb(t.secret)), e.isPoint(t.pub)) this._pub = t.pub;
    else if (this._pubBytes = tb(t.pub), this._pubBytes && 33 === this._pubBytes.length && 64 === this._pubBytes[0] && (this._pubBytes = this._pubBytes.slice(1, 33)), this._pubBytes && 32 !== this._pubBytes.length) throw Error("Unknown point compression format");
}
ib.fromPublic = function(e, t) {
    return t instanceof ib ? t : new ib(e, {
        pub: t
    });
}, ib.fromSecret = function(e, t) {
    return t instanceof ib ? t : new ib(e, {
        secret: t
    });
}, ib.prototype.secret = function() {
    return this._secret;
}, rb(ib, "pubBytes", function() {
    return this.eddsa.encodePoint(this.pub());
}), rb(ib, "pub", function() {
    return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
}), rb(ib, "privBytes", function() {
    var e = this.eddsa, t = this.hash(), r = e.encodingLength - 1, i = t.slice(0, e.encodingLength);
    return i[0] &= 248, i[r] &= 127, i[r] |= 64, i;
}), rb(ib, "priv", function() {
    return this.eddsa.decodeInt(this.privBytes());
}), rb(ib, "hash", function() {
    return this.eddsa.hash().update(this.secret()).digest();
}), rb(ib, "messagePrefix", function() {
    return this.hash().slice(this.eddsa.encodingLength);
}), ib.prototype.sign = function(e) {
    return eb(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this);
}, ib.prototype.verify = function(e, t) {
    return this.eddsa.verify(e, t, this);
}, ib.prototype.getSecret = function(e) {
    return eb(this._secret, "KeyPair is public only"), ty.encode(this.secret(), e);
}, ib.prototype.getPublic = function(e, t) {
    return ty.encode((t ? [
        64
    ] : []).concat(this.pubBytes()), e);
};
var nb = ib, ab = ty.assert, sb = ty.cachedProperty, ob = ty.parseBytes;
function cb(e, t) {
    this.eddsa = e, "object" != typeof t && (t = ob(t)), Array.isArray(t) && (t = {
        R: t.slice(0, e.encodingLength),
        S: t.slice(e.encodingLength)
    }), ab(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof Zp && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded;
}
sb(cb, "S", function() {
    return this.eddsa.decodeInt(this.Sencoded());
}), sb(cb, "R", function() {
    return this.eddsa.decodePoint(this.Rencoded());
}), sb(cb, "Rencoded", function() {
    return this.eddsa.encodePoint(this.R());
}), sb(cb, "Sencoded", function() {
    return this.eddsa.encodeInt(this.S());
}), cb.prototype.toBytes = function() {
    return this.Rencoded().concat(this.Sencoded());
}, cb.prototype.toHex = function() {
    return ty.encode(this.toBytes(), "hex").toUpperCase();
};
var ub = cb, hb = ty.assert, db = ty.parseBytes;
function fb(e) {
    if (hb("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof fb)) return new fb(e);
    e = qy[e].curve;
    this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = Ty.sha512;
}
var lb = fb;
fb.prototype.sign = function(e, t) {
    e = db(e);
    var r = this.keyFromSecret(t), i = this.hashInt(r.messagePrefix(), e), n = this.g.mul(i), a = this.encodePoint(n), s = this.hashInt(a, r.pubBytes(), e).mul(r.priv()), o = i.add(s).umod(this.curve.n);
    return this.makeSignature({
        R: n,
        S: o,
        Rencoded: a
    });
}, fb.prototype.verify = function(e, t, r) {
    e = db(e), t = this.makeSignature(t);
    var i = this.keyFromPublic(r), n = this.hashInt(t.Rencoded(), i.pubBytes(), e), a = this.g.mul(t.S());
    return t.R().add(i.pub().mul(n)).eq(a);
}, fb.prototype.hashInt = function() {
    for(var e = this.hash(), t = 0; t < arguments.length; t++)e.update(arguments[t]);
    return ty.intFromLE(e.digest()).umod(this.curve.n);
}, fb.prototype.keyPair = function(e) {
    return new nb(this, e);
}, fb.prototype.keyFromPublic = function(e) {
    return nb.fromPublic(this, e);
}, fb.prototype.keyFromSecret = function(e) {
    return nb.fromSecret(this, e);
}, fb.prototype.genKeyPair = function(e) {
    e || (e = {});
    var t = new Oy({
        hash: this.hash,
        pers: e.pers,
        persEnc: e.persEnc || "utf8",
        entropy: e.entropy || ry(this.hash.hmacStrength),
        entropyEnc: e.entropy && e.entropyEnc || "utf8",
        nonce: this.curve.n.toArray()
    });
    return this.keyFromSecret(t.generate(32));
}, fb.prototype.makeSignature = function(e) {
    return e instanceof ub ? e : new ub(this, e);
}, fb.prototype.encodePoint = function(e) {
    var t = e.getY().toArray("le", this.encodingLength);
    return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t;
}, fb.prototype.decodePoint = function(e) {
    var t = (e = ty.parseBytes(e)).length - 1, r = e.slice(0, t).concat(-129 & e[t]), i = 0 != (128 & e[t]), n = ty.intFromLE(r);
    return this.curve.pointFromY(n, i);
}, fb.prototype.encodeInt = function(e) {
    return e.toArray("le", this.encodingLength);
}, fb.prototype.decodeInt = function(e) {
    return ty.intFromLE(e);
}, fb.prototype.isPoint = function(e) {
    return e instanceof this.pointClass;
};
var pb = it(function(e, t) {
    var r = t;
    r.utils = ty, r.rand = ry, r.curve = Sy, r.curves = qy, r.ec = Jy, r.eddsa = lb;
}), yb = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    default: pb,
    __moduleExports: pb
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["lmKb7","adjPd"], "adjPd", "parcelRequire0f00")

//# sourceMappingURL=index.63aff760.js.map
