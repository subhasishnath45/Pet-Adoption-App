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
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("react-refresh/runtime");
var ErrorOverlay = require("react-error-overlay");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"iugLb":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "10c6ed0d6c0c74b6";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
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
        console.log("[parcel] \u2728 Error resolved");
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
          ???? ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>???? <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
function hmrApply(bundle, asset) {
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
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3llIF":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a377 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a377.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _carousel = require("./Carousel");
var _carouselDefault = parcelHelpers.interopDefault(_carousel);
var _errorBoundary = require("./ErrorBoundary");
var _errorBoundaryDefault = parcelHelpers.interopDefault(_errorBoundary);
var _themeContext = require("./ThemeContext");
var _themeContextDefault = parcelHelpers.interopDefault(_themeContext);
var _s = $RefreshSig$();
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
// dynamically importing modal using lazy
const Modal = /*#__PURE__*/ (0, _react.lazy)(()=>require("4da7bcaee58f4340"));
_c = Modal;
class Details extends (0, _react.Component) {
    constructor(...args){
        super(...args);
        _defineProperty(this, "state", {
            loading: true,
            showModal: false,
            animal: "",
            breed: "",
            city: "",
            state: "",
            description: "",
            name: "",
            images: []
        });
        _defineProperty(this, "toggleModal", ()=>{
            this.setState({
                showModal: !this.state.showModal
            });
        });
        _defineProperty(this, "adopt", ()=>window.location.href = "http://bit.ly/pet-adopt");
    }
    // }
    async componentDidMount() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id.toString()}`);
        const json = await res.json(); // setting new state values
        // json.pets[0] will hold an object with all keys and values.
        this.setState(Object.assign({
            loading: false
        }, json.pets[0]));
    }
    render() {
        if (this.state.loading) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
            children: "loading \u2026 "
        }, void 0, false, {
            fileName: "src/Details.tsx",
            lineNumber: 54,
            columnNumber: 14
        }, this);
        const { animal , breed , city , state , description , name , images , showModal  } = this.state;
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "details",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _carouselDefault.default), {
                    images: images,
                    name: name
                }, void 0, false, {
                    fileName: "src/Details.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "text-center px-9",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            className: "text-6xl",
                            children: name
                        }, void 0, false, {
                            fileName: "src/Details.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            className: "text-3xl",
                            children: `${animal} - ${breed} - ${city}, ${state}`
                        }, void 0, false, {
                            fileName: "src/Details.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _themeContextDefault.default).Consumer, {
                            children: ([theme])=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    onClick: this.toggleModal,
                                    className: "btn w-1/6 p-5 rounded-md my-4 text-white hover:text-zinc-300",
                                    style: {
                                        backgroundColor: theme
                                    },
                                    children: [
                                        "Adopt ",
                                        name
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Details.tsx",
                                    lineNumber: 73,
                                    columnNumber: 27
                                }, this)
                        }, void 0, false, {
                            fileName: "src/Details.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            className: "w-1/2 mx-auto text-justify mb-10",
                            children: description
                        }, void 0, false, {
                            fileName: "src/Details.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        showModal ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Modal, {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "bg-white px-[200px] py-[100px] rounded-lg drop-shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                        className: "text-2xl mb-5",
                                        children: [
                                            "Would you like to adopt ",
                                            name,
                                            " ?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Details.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "buttons flex ",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 mr-2",
                                                onClick: this.adopt,
                                                children: "Yes"
                                            }, void 0, false, {
                                                fileName: "src/Details.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 ml-2",
                                                onClick: this.toggleModal,
                                                children: "No"
                                            }, void 0, false, {
                                                fileName: "src/Details.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Details.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Details.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "src/Details.tsx",
                            lineNumber: 80,
                            columnNumber: 24
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "src/Details.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/Details.tsx",
            lineNumber: 67,
            columnNumber: 12
        }, this);
    }
} // higher order component and returning Details component.
const WrappedDetails = ()=>{
    _s();
    // using useparams hook
    const params = (0, _reactRouterDom.useParams)(); // adding params prop
    // params is the value
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _errorBoundaryDefault.default), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Details, {
            params: params
        }, void 0, false, {
            fileName: "src/Details.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/Details.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, undefined);
};
_s(WrappedDetails, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        (0, _reactRouterDom.useParams)
    ];
});
_c1 = WrappedDetails;
exports.default = WrappedDetails;
var _c, _c1;
$RefreshReg$(_c, "Modal");
$RefreshReg$(_c1, "WrappedDetails");

  $parcel$ReactRefreshHelpers$a377.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","react-router-dom":"fdOAw","./Carousel":"iHZ2E","./ErrorBoundary":"daaCQ","./ThemeContext":"l5qyn","4da7bcaee58f4340":"iaORh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","react/jsx-dev-runtime":"iTorj"}],"iHZ2E":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$81f7 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$81f7.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class Carousel extends (0, _react.Component) {
    constructor(...args){
        super(...args);
        _defineProperty(this, "state", {
            active: 0
        });
        _defineProperty(this, "handleIndexClick", (event)=>{
            // console.log(+event.target.dataset.index);
            if (!(event.target instanceof HTMLImageElement)) return;
            if (event.target.dataset.index) this.setState({
                // event.target.dataset.index will target the data-index value of the image, that was clicked.
                // The data attribute comes back as a string. We want it to be a number, hence the +
                active: +event.target.dataset.index
            });
        });
    }
    render() {
        // destructuring our state.
        const { active  } = this.state; // destructuring our props that's comming from the parent component.
        // we will be passing down images prop
        // from Details to Carousels component.
        const { images , name  } = this.props;
        console.log(this.props);
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "carousel grid grid-cols-1 gap-4 px-9",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    "data-testid": "hero",
                    src: images[active],
                    alt: name,
                    className: "w-2/3 h-[400px] object-cover object-center mx-auto rounded border-2 border-black"
                }, void 0, false, {
                    fileName: "src/Carousel.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-2/3 mx-auto carousel-smaller flex flex-wrap justify-center items-center",
                    children: images.map((photo, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            "data-testid": `thumbnail${index}`,
                            src: photo,
                            role: "presentation",
                            "data-index": index,
                            onClick: this.handleIndexClick,
                            className: index === active ? "active w-1/5 rounded-full p-2 border-2 border-black" : "w-1/5 rounded-full p-2 border-2 border-white",
                            alt: "animal thumbnail"
                        }, photo, false, {
                            fileName: "src/Carousel.tsx",
                            lineNumber: 48,
                            columnNumber: 41
                        }, this))
                }, void 0, false, {
                    fileName: "src/Carousel.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/Carousel.tsx",
            lineNumber: 45,
            columnNumber: 12
        }, this);
    }
}
exports.default = Carousel;
_defineProperty(Carousel, "defaultProps", {
    images: [
        "http://pets-images.dev-apis.com/pets/none.jpg"
    ],
    name: "animal"
});

  $parcel$ReactRefreshHelpers$81f7.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","react/jsx-dev-runtime":"iTorj"}],"daaCQ":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$e926 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$e926.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class ErrorBoundary extends (0, _react.Component) {
    constructor(...args){
        super(...args);
        _defineProperty(this, "state", {
            hasError: false,
            redirect: false
        });
    }
    /**
   * The getDerivedStateFromError() method is invoked if some error occurs during the rendering phase.
   *  It is called during the render phase, so side-effects are not permitted in this method. For side-effects, we use componentDidCatch() instead.
   *
   */ static getDerivedStateFromError() {
        // Changing the state hasError to true if some error occurs.
        return {
            hasError: true,
            redirect: false
        };
    }
    // unlike getDerivedStateFromError() side-effects are allowed in this method.
    componentDidCatch(error, info) {
        console.error("ErrorBoundery caught an error.", error, info);
    }
    componentDidUpdate() {
        if (this.state.hasError) setTimeout(()=>{
            this.setState({
                redirect: true
            });
        }, 5000);
    }
    render() {
        if (this.state.redirect) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Navigate), {
            to: "/"
        }, void 0, false, {
            fileName: "src/ErrorBoundary.tsx",
            lineNumber: 50,
            columnNumber: 14
        }, this);
        else if (this.state.hasError) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
            children: [
                "There was an error with this listing. ",
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                    to: "/",
                    children: "Click here"
                }, void 0, false, {
                    fileName: "src/ErrorBoundary.tsx",
                    lineNumber: 53,
                    columnNumber: 49
                }, this),
                " ",
                "to back to the home page or wait five seconds."
            ]
        }, void 0, true, {
            fileName: "src/ErrorBoundary.tsx",
            lineNumber: 52,
            columnNumber: 14
        }, this);
        return this.props.children;
    }
}
exports.default = ErrorBoundary;

  $parcel$ReactRefreshHelpers$e926.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","react-router-dom":"fdOAw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","react/jsx-dev-runtime":"iTorj"}],"l5qyn":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$cc2c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$cc2c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react"); // creating a new context for our theme in our app.
var _reactDefault = parcelHelpers.interopDefault(_react);
// createContext is a function that returns an object with two React components in it: a Provider and a Consumer.
// we're actually passing a value and a function like  what useState returns.
const ThemeContext = /*#__PURE__*/ (0, _react.createContext)([
    "green",
    ()=>{}
]);
exports.default = ThemeContext;

  $parcel$ReactRefreshHelpers$cc2c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"iaORh":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require("./helpers/bundle-url").getBundleURL("1riQ4") + "Modal.08afcb2e.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("7zlcS"));

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}]},["1xC6H","iugLb"], null, "parcelRequireaddb")

//# sourceMappingURL=Details.6c0c74b6.js.map
