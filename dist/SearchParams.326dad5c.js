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

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"7COJx":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e32bfbe8326dad5c";
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

},{}],"3I2rB":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$8903 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$8903.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRedux = require("react-redux");
var _results = require("./Results");
var _resultsDefault = parcelHelpers.interopDefault(_results);
var _useBreedList = require("./useBreedList");
var _useBreedListDefault = parcelHelpers.interopDefault(_useBreedList);
var _changeLocation = require("./actionCreators/changeLocation");
var _changeLocationDefault = parcelHelpers.interopDefault(_changeLocation);
var _changeAnimal = require("./actionCreators/changeAnimal");
var _changeAnimalDefault = parcelHelpers.interopDefault(_changeAnimal);
var _changeBreed = require("./actionCreators/changeBreed");
var _changeBreedDefault = parcelHelpers.interopDefault(_changeBreed);
var _changeTheme = require("./actionCreators/changeTheme");
var _changeThemeDefault = parcelHelpers.interopDefault(_changeTheme);
var _s = $RefreshSig$();
const ANIMALS = [
    "bird",
    "cat",
    "dog",
    "rabbit",
    "reptile"
];
const SearchParams = ()=>{
    _s();
    // const [location, setLocation] = useState("");
    // const [animal, setAnimal] = useState("" as Animal);
    // const [breed, setBreed] = useState("");
    /*
  useSelector()​ allows you to extract data from the Redux store state, using a selector function. 
  */ const animal1 = (0, _reactRedux.useSelector)((state)=>state.animal);
    const location = (0, _reactRedux.useSelector)((state)=>state.location);
    const theme = (0, _reactRedux.useSelector)((state)=>state.theme);
    const breed1 = (0, _reactRedux.useSelector)((state)=>state.breed);
    /**
  This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
   */ const dispatch = (0, _reactRedux.useDispatch)(); // pets will hold an array with all the pets comming from API.
    const [pets, setPets] = (0, _react.useState)([]); // useBreedList is a custom hook.
    const [breeds] = (0, _useBreedListDefault.default)(animal1);
    (0, _react.useEffect)(()=>{
        requestPets();
    }, []); // async function to get data from API endpoint
    async function requestPets() {
        // response of the fetch request
        const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal1}&location=${location}&breed=${breed1}`); // takes a response and parsing the body text as JSON
        const json = await response.json(); // console.log(json.pets);
        setPets(json.pets);
    }
    function handleAnimalChange(e) {
        dispatch((0, _changeBreedDefault.default)(""));
        dispatch((0, _changeAnimalDefault.default)(e.target.value));
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "search-params my-0 mx-auto px-0 w-11/12",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
                className: "search-params p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900",
                onSubmit: (e)=>{
                    e.preventDefault();
                    requestPets();
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        htmlFor: "location",
                        className: "search-label",
                        children: [
                            "Location",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                className: "search-control block",
                                id: "location",
                                onChange: (e)=>dispatch((0, _changeLocationDefault.default)(e.target.value)),
                                value: location,
                                placeholder: "Location"
                            }, void 0, false, {
                                fileName: "src/SearchParams.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/SearchParams.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        htmlFor: "animal",
                        className: "search-label",
                        children: [
                            "Animal",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                className: "search-control block",
                                id: "animal",
                                value: animal1,
                                onChange: handleAnimalChange,
                                onBlur: handleAnimalChange,
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {}, void 0, false, {
                                        fileName: "src/SearchParams.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, undefined),
                                    ANIMALS.map((animal)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                            value: animal,
                                            children: animal
                                        }, animal, false, {
                                            fileName: "src/SearchParams.tsx",
                                            lineNumber: 65,
                                            columnNumber: 36
                                        }, undefined))
                                ]
                            }, void 0, true, {
                                fileName: "src/SearchParams.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/SearchParams.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        htmlFor: "breed",
                        className: "search-label",
                        children: [
                            "breed",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                className: "search-control disabled:opacity-50 block",
                                disabled: !breeds.length,
                                id: "breed",
                                value: breed1,
                                onChange: (e)=>dispatch((0, _changeBreedDefault.default)(e.target.value)),
                                onBlur: (e)=>dispatch((0, _changeBreedDefault.default)(e.target.value)),
                                children: breeds.map((breed)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: breed,
                                        children: breed
                                    }, breed, false, {
                                        fileName: "src/SearchParams.tsx",
                                        lineNumber: 73,
                                        columnNumber: 34
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "src/SearchParams.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/SearchParams.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        htmlFor: "theme",
                        className: "search-label",
                        children: [
                            "Theme",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                className: "search-control block",
                                value: theme,
                                onChange: (e)=>dispatch((0, _changeThemeDefault.default)(e.target.value)),
                                onBlur: (e)=>dispatch((0, _changeThemeDefault.default)(e.target.value)),
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "peru",
                                        children: "Peru"
                                    }, void 0, false, {
                                        fileName: "src/SearchParams.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "darkblue",
                                        children: "Dark Blue"
                                    }, void 0, false, {
                                        fileName: "src/SearchParams.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "chartreuse",
                                        children: "Chartreuse"
                                    }, void 0, false, {
                                        fileName: "src/SearchParams.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "mediumorchid",
                                        children: "Medium orchid"
                                    }, void 0, false, {
                                        fileName: "src/SearchParams.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/SearchParams.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/SearchParams.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        style: {
                            backgroundColor: theme
                        },
                        className: "search-control rounded px-6 py-2 text-white hover:opacity-50 border-none",
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "src/SearchParams.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/SearchParams.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _resultsDefault.default), {
                pets: pets
            }, void 0, false, {
                fileName: "src/SearchParams.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/SearchParams.tsx",
        lineNumber: 52,
        columnNumber: 10
    }, undefined);
};
_s(SearchParams, "1lHVGQMOGsS3XiTRf3Fxkjesn3M=", false, function() {
    return [
        (0, _reactRedux.useSelector),
        (0, _reactRedux.useSelector),
        (0, _reactRedux.useSelector),
        (0, _reactRedux.useSelector),
        (0, _reactRedux.useDispatch),
        (0, _useBreedListDefault.default)
    ];
});
_c = SearchParams;
exports.default = SearchParams;
var _c;
$RefreshReg$(_c, "SearchParams");

  $parcel$ReactRefreshHelpers$8903.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","react-redux":"bdVon","./Results":"fjDxx","./useBreedList":"bqo3w","./actionCreators/changeLocation":"4NYBK","./actionCreators/changeAnimal":"6N4FQ","./actionCreators/changeBreed":"17GLe","./actionCreators/changeTheme":"fY0KC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","react/jsx-dev-runtime":"iTorj"}],"fjDxx":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5e01 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5e01.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _pet = require("./Pet");
var _petDefault = parcelHelpers.interopDefault(_pet);
const Results = ({ pets  })=>{
    // destructuring props to extract a key
    //   console.log(pets);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "search grid gap-4 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2",
        children: !pets.length ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
            children: "No pets found"
        }, void 0, false, {
            fileName: "src/Results.tsx",
            lineNumber: 13,
            columnNumber: 23
        }, undefined) : pets.map((pet)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _petDefault.default), {
                name: pet.name,
                animal: pet.animal,
                breed: pet.breed,
                images: pet.images,
                location: `${pet.city}, ${pet.state}`,
                description: pet.description,
                id: pet.id
            }, pet.id, false, {
                fileName: "src/Results.tsx",
                lineNumber: 13,
                columnNumber: 64
            }, undefined))
    }, void 0, false, {
        fileName: "src/Results.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, undefined);
};
_c = Results;
exports.default = Results;
var _c;
$RefreshReg$(_c, "Results");

  $parcel$ReactRefreshHelpers$5e01.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","./Pet":"jgG5a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","react/jsx-dev-runtime":"iTorj"}],"jgG5a":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$9778 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9778.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
const Pet = (props)=>{
    const { name , animal , breed , images , location , id  } = props;
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images && images.length) hero = images[0];
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
        to: `/details/${id}`,
        className: "pet relative block",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "image-container",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    "data-testid": "thumbnail",
                    src: hero,
                    alt: name
                }, void 0, false, {
                    fileName: "src/Pet.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/Pet.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "info absolute w-full bottom-0 left-0 bg-gradient-to-tr from-white to-transparent px-2 py-2",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                        children: name
                    }, void 0, false, {
                        fileName: "src/Pet.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        children: `${animal} - ${breed} - ${location}`
                    }, void 0, false, {
                        fileName: "src/Pet.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/Pet.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/Pet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, undefined);
};
_c = Pet;
exports.default = Pet;
var _c;
$RefreshReg$(_c, "Pet");

  $parcel$ReactRefreshHelpers$9778.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","react-router-dom":"fdOAw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","react/jsx-dev-runtime":"iTorj"}],"bqo3w":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$85ce = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$85ce.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _s = $RefreshSig$();
const localCache = {};
// our custom hook will use other built-in hooks
function useBreedList(animal) {
    _s();
    const [breedList, setBreedList] = (0, _react.useState)([]);
    const [status, setStatus] = (0, _react.useState)("unloaded");
    (0, _react.useEffect)(()=>{
        if (!animal) // when there is no animal
        setBreedList([]); // empty breedlist
        else if (localCache[animal]) // if animal is in cache
        // load from there.
        setBreedList(localCache[animal]);
        else requestBreedList();
         // async function to fetch data from API
        async function requestBreedList() {
            setBreedList([]); // emptying breedList
            setStatus("loading"); // status is loading.
            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    }, [
        animal
    ]); // animal is a prop, based on which the effect will run.
    // custom hook will return the following array
    return [
        breedList,
        status
    ];
}
_s(useBreedList, "/Ln0oDrzMr5w8uPcIZmjbZN9vr0=");
exports.default = useBreedList;

  $parcel$ReactRefreshHelpers$85ce.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"4NYBK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function changeLocation(location) {
    return {
        type: "CHANGE_LOCATION",
        payload: location
    };
}
exports.default = changeLocation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6N4FQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function changeAnimal(animal) {
    return {
        type: "CHANGE_ANIMAL",
        payload: animal
    };
}
exports.default = changeAnimal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17GLe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function changeBreed(breed) {
    return {
        type: "CHANGE_BREED",
        payload: breed
    };
}
exports.default = changeBreed;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fY0KC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function changeTheme(theme) {
    return {
        type: "CHANGE_THEME",
        payload: theme
    };
}
exports.default = changeTheme;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1xC6H","7COJx"], null, "parcelRequireaddb")

//# sourceMappingURL=SearchParams.326dad5c.js.map
