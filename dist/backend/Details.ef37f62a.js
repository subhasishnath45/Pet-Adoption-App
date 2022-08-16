var $erIuJ$react = require("react");
var $erIuJ$reactrouterdom = require("react-router-dom");
var $erIuJ$reactjsxruntime = require("react/jsx-runtime");

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
parcelRequire.register("eFoZh", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $aad846fad629fe8b$export$2e2bcd8739ae039);



var $gDIwK = parcelRequire("gDIwK");

var $joPsu = parcelRequire("joPsu");

var $lcFQK = parcelRequire("lcFQK");


function $aad846fad629fe8b$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

const $aad846fad629fe8b$var$Modal = /*#__PURE__*/ (0, $erIuJ$react.lazy)(()=>(parcelRequire("63urM")));
class $aad846fad629fe8b$var$Details extends (0, $erIuJ$react.Component) {
    constructor(...args){
        super(...args);
        $aad846fad629fe8b$var$_defineProperty(this, "state", {
            loading: true,
            showModal: false
        });
        $aad846fad629fe8b$var$_defineProperty(this, "toggleModal", ()=>{
            this.setState({
                showModal: !this.state.showModal
            });
        });
        $aad846fad629fe8b$var$_defineProperty(this, "adopt", ()=>window.location = "http://bit.ly/pet-adopt");
    }
    // }
    async componentDidMount() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
        const json = await res.json(); // setting new state values
        // json.pets[0] will hold an object with all keys and values.
        this.setState(Object.assign({
            loading: false
        }, json.pets[0]));
    }
    render() {
        if (this.state.loading) return /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)("h2", {
            children: "loading \u2026 "
        });
        const { animal: animal , breed: breed , city: city , state: state , description: description , name: name , images: images , showModal: showModal  } = this.state;
        return /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsxs)("div", {
            className: "details",
            children: [
                /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)((0, $gDIwK.default), {
                    images: images,
                    name: name
                }),
                /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsxs)("div", {
                    className: "text-center px-9",
                    children: [
                        /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)("h1", {
                            className: "text-6xl",
                            children: name
                        }),
                        /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)("h2", {
                            className: "text-3xl",
                            children: `${animal} - ${breed} - ${city}, ${state}`
                        }),
                        /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)((0, $lcFQK.default).Consumer, {
                            children: ([theme])=>/*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsxs)("button", {
                                    onClick: this.toggleModal,
                                    className: "btn w-1/6 p-5 rounded-md my-4 text-white hover:text-zinc-300",
                                    style: {
                                        backgroundColor: theme
                                    },
                                    children: [
                                        "Adopt ",
                                        name
                                    ]
                                })
                        }),
                        /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)("p", {
                            className: "w-1/2 mx-auto text-justify mb-10",
                            children: description
                        }),
                        showModal ? /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)($aad846fad629fe8b$var$Modal, {
                            children: /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsxs)("div", {
                                className: "bg-white px-[200px] py-[100px] rounded-lg drop-shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsxs)("h1", {
                                        className: "text-2xl mb-5",
                                        children: [
                                            "Would you like to adopt ",
                                            name,
                                            " ?"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsxs)("div", {
                                        className: "buttons flex ",
                                        children: [
                                            /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)("button", {
                                                className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 mr-2",
                                                onClick: this.adopt,
                                                children: "Yes"
                                            }),
                                            /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)("button", {
                                                className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 ml-2",
                                                onClick: this.toggleModal,
                                                children: "No"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : null
                    ]
                })
            ]
        });
    }
} // higher order component and returning Details component.
const $aad846fad629fe8b$var$WrappedDetails = ()=>{
    // using useparams hook
    const params = (0, $erIuJ$reactrouterdom.useParams)(); // adding params prop
    // params is the value
    return /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)((0, $joPsu.default), {
        children: /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)($aad846fad629fe8b$var$Details, {
            params: params
        })
    });
};
var $aad846fad629fe8b$export$2e2bcd8739ae039 = $aad846fad629fe8b$var$WrappedDetails;

});
parcelRequire.register("gDIwK", function(module, exports) {

$parcel$export(module.exports, "default", () => $03204dbe2679e6fd$export$2e2bcd8739ae039);



function $03204dbe2679e6fd$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class $03204dbe2679e6fd$export$2e2bcd8739ae039 extends (0, $erIuJ$react.Component) {
    constructor(...args){
        super(...args);
        $03204dbe2679e6fd$var$_defineProperty(this, "state", {
            active: 0
        });
        $03204dbe2679e6fd$var$_defineProperty(this, "handleIndexClick", (event)=>{
            // console.log(+event.target.dataset.index);
            this.setState({
                // event.target.dataset.index will target the data-index value of the image, that was clicked.
                // The data attribute comes back as a string. We want it to be a number, hence the +
                active: +event.target.dataset.index
            });
        });
    }
    render() {
        // destructuring our state.
        const { active: active  } = this.state; // destructuring our props that's comming from the parent component.
        // we will be passing down images prop
        // from Details to Carousels component.
        const { images: images , name: name  } = this.props;
        console.log(this.props);
        return /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsxs)("div", {
            className: "carousel grid grid-cols-1 gap-4 px-9",
            children: [
                /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)("img", {
                    src: images[active],
                    alt: name,
                    className: "w-2/3 h-[400px] object-cover object-center mx-auto rounded border-2 border-black"
                }),
                /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)("div", {
                    className: "w-2/3 mx-auto carousel-smaller flex flex-wrap justify-center items-center",
                    children: images.map((photo, index)=>/*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)("img", {
                            src: photo,
                            "data-index": index,
                            onClick: this.handleIndexClick,
                            className: index === active ? "active w-1/5 rounded-full p-2 border-2 border-black" : "w-1/5 rounded-full p-2 border-2 border-white",
                            alt: "animal thumbnail"
                        }, photo))
                })
            ]
        });
    }
}
$03204dbe2679e6fd$var$_defineProperty($03204dbe2679e6fd$export$2e2bcd8739ae039, "defaultProps", {
    images: [
        "http://pets-images.dev-apis.com/pets/none.jpg"
    ],
    name: "animal"
});

});

parcelRequire.register("joPsu", function(module, exports) {

$parcel$export(module.exports, "default", () => $e1f82cc8fe3cafbe$export$2e2bcd8739ae039);





function $e1f82cc8fe3cafbe$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class $e1f82cc8fe3cafbe$export$2e2bcd8739ae039 extends (0, $erIuJ$react.Component) {
    constructor(...args){
        super(...args);
        $e1f82cc8fe3cafbe$var$_defineProperty(this, "state", {
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
            hasError: true
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
        if (this.state.redirect) return /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)((0, $erIuJ$reactrouterdom.Navigate), {
            to: "/"
        });
        else if (this.state.hasError) return /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsxs)("h2", {
            children: [
                "There was an error with this listing. ",
                /*#__PURE__*/ (0, $erIuJ$reactjsxruntime.jsx)((0, $erIuJ$reactrouterdom.Link), {
                    to: "/",
                    children: "Click here"
                }),
                " ",
                "to back to the home page or wait five seconds."
            ]
        });
        return this.props.children;
    }
}

});

parcelRequire.register("63urM", function(module, exports) {
module.exports = Promise.resolve(require("./Modal.b35764a5.js")).then(()=>parcelRequire("7A7f2"));

});



//# sourceMappingURL=Details.ef37f62a.js.map
