var $6oFsv$react = require("react");
var $6oFsv$reactdom = require("react-dom");
var $6oFsv$reactjsxruntime = require("react/jsx-runtime");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequireaddb"];
parcelRequire.register("7A7f2", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $58518334c3599300$export$2e2bcd8739ae039);



let $58518334c3599300$var$modalRoot;
const $58518334c3599300$var$Modal = ({ children: children  })=>{
    // if modalroot exists, then keep it same
    // otherwise, fetch it from the DOM.
    $58518334c3599300$var$modalRoot = $58518334c3599300$var$modalRoot ? $58518334c3599300$var$modalRoot : document.getElementById("modal"); // The useRef Hook allows you to persist values between renders.
    const elRef = (0, $6oFsv$react.useRef)(null); // if current doesn't have a value
    if (!elRef.current) // storing a newly created div to current property.
    // the div will persist after re-render
    elRef.current = document.createElement("div");
    (0, $6oFsv$react.useEffect)(()=>{
        // Appending the modal element inside modalRoot.
        $58518334c3599300$var$modalRoot.appendChild(elRef.current); // clearning up the modal element from modalRoot after modal is displayed and unrendering the modal.
        return ()=>$58518334c3599300$var$modalRoot.removeChild(elRef.current);
    }, []);
    /**
   * The first argument of createPortal is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.
   *
   * Down at the bottom we use React's createPortal to pass the children (whatever you put inside <Modal></Modal>) to the portal div
   */ return /*#__PURE__*/ (0, $6oFsv$reactdom.createPortal)(/*#__PURE__*/ (0, $6oFsv$reactjsxruntime.jsx)("div", {
        className: "modal-wrapper fixed h-screen w-screen flex justify-center items-center bg-gradient-to-tr from-purple-500 to-pink-500 overflow-hidden",
        children: children
    }), elRef.current);
};
var $58518334c3599300$export$2e2bcd8739ae039 = $58518334c3599300$var$Modal;

});


//# sourceMappingURL=Modal.b35764a5.js.map
